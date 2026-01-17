const BASE_URL = 'https://api.fastwaysas.com'
const CONTACT_PATH = '/api/contact'

function safeJsonParse(text) {
  try {
    return { ok: true, data: JSON.parse(text) }
  } catch {
    return { ok: false, data: null }
  }
}

/**
 * Envía la solicitud al backend.
 * - Si hay foto: usa multipart/form-data (FormData)
 * - Si no hay foto: envía JSON
 *
 * Retorna un objeto normalizado:
 * {
 *   ok: boolean,
 *   status: number,
 *   message: string,
 *   fieldErrors?: Record<string, string>
 * }
 */
export async function sendContactRequest(payload, cargoPhoto) {
  const url = `${BASE_URL}${CONTACT_PATH}`

  const hasFile = !!cargoPhoto

  let res
  try {
    if (hasFile) {
      const fd = new FormData()
      Object.entries(payload).forEach(([k, v]) => fd.append(k, String(v)))
      fd.append('cargoPhoto', cargoPhoto)

      res = await fetch(url, {
        method: 'POST',
        body: fd,
      })
    } else {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    }
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    return {
      ok: false,
      status: 0,
      message: 'No fue posible conectar con el servidor.',
    }
  }

  const status = res.status
  const text = await res.text()
  const parsed = safeJsonParse(text)

  // Si el backend responde JSON, intentamos interpretar estructura común:
  // - { ok: true, message: "..." }
  // - { success: true, message: "..." }
  // - { errors: { field: "msg" }, message: "..." }
  if (parsed.ok && parsed.data && typeof parsed.data === 'object') {
    const data = parsed.data

    const ok =
      res.ok &&
      (data.ok === true ||
        data.success === true ||
        data.status === 'ok' ||
        data.sent === true)

    const message =
      data.message ||
      data.msg ||
      (ok
        ? 'Solicitud enviada correctamente.'
        : 'El servidor no pudo procesar la solicitud.')

    const fieldErrors =
      data.fieldErrors || data.errors || data.validationErrors || null

    // Si res.ok pero el backend no marca "ok", igual lo tratamos como ok
    if (res.ok && !ok) {
      return { ok: true, status, message }
    }

    if (!res.ok) {
      return {
        ok: false,
        status,
        message,
        fieldErrors:
          fieldErrors && typeof fieldErrors === 'object'
            ? fieldErrors
            : undefined,
      }
    }

    return { ok: true, status, message }
  }

  // Si NO viene JSON (HTML, texto plano, etc.)
  if (res.ok) {
    return {
      ok: true,
      status,
      message: 'Solicitud enviada correctamente.',
    }
  }

  // Mensajes por status HTTP (fallback)
  let message = 'No pudimos enviar tu solicitud.'
  if (status === 400)
    message = 'Revisa los datos: el servidor reportó información inválida.'
  if (status === 401 || status === 403)
    message = 'No autorizado para enviar esta solicitud.'
  if (status === 404) message = 'Endpoint no encontrado en el servidor.'
  if (status >= 500)
    message = 'El servidor tuvo un problema. Intenta más tarde.'

  return { ok: false, status, message }
}
