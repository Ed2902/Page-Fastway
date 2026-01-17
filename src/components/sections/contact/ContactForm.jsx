import { useMemo, useState } from 'react'
import { FiSend, FiArrowRight, FiPaperclip } from 'react-icons/fi'
import { sendContactRequest } from './service'
import DataPolicyModal from './DataPolicyModal'

const SERVICES = [
  { value: 'consultoria', label: 'Consultoría' },
  { value: 'internacional', label: 'Logística internacional' },
  { value: 'nacional', label: 'Logística nacional' },
  { value: 'circular', label: 'Circular' },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [serverMsg, setServerMsg] = useState('')
  const [isPolicyOpen, setIsPolicyOpen] = useState(false)

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '', // 👈 sin predeterminado
    origin: '',
    destination: '',
    cargo: '', // 👈 ahora opcional
    details: '',
    consent: true,
    cargoPhoto: null, // opcional
  })

  const isConsulting = form.service === 'consultoria'
  const isCircular = form.service === 'circular'

  const requiredMissing = useMemo(() => {
    const missing = []
    if (!form.name.trim()) missing.push('Nombre')
    if (!form.company.trim()) missing.push('Empresa')
    if (!form.email.trim()) missing.push('Email')
    if (!form.phone.trim()) missing.push('Teléfono')
    if (!form.service) missing.push('Tipo de solicitud')

    // Origen/Destino SOLO obligatorios si NO es consultoría
    if (!isConsulting) {
      if (!form.origin.trim()) missing.push('Origen')
      if (!form.destination.trim()) missing.push('Destino')
    }

    if (!form.details.trim()) missing.push('Detalles')
    if (!form.consent) missing.push('Autorización de datos')
    return missing
  }, [form, isConsulting])

  function onChange(e) {
    const { name, value, type, checked, files } = e.target

    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: checked }))
      return
    }

    if (type === 'file') {
      const file = files && files[0] ? files[0] : null
      setForm(prev => ({ ...prev, cargoPhoto: file }))
      return
    }

    setForm(prev => ({ ...prev, [name]: value }))
  }

  function validate() {
    if (requiredMissing.length) {
      return `Completa los campos obligatorios: ${requiredMissing.join(', ')}.`
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return 'El email no parece válido.'
    }

    if (form.cargoPhoto) {
      const maxBytes = 8 * 1024 * 1024 // 8MB
      const okTypes = ['image/jpeg', 'image/png', 'image/webp']
      if (!okTypes.includes(form.cargoPhoto.type)) {
        return 'La foto debe ser JPG, PNG o WEBP.'
      }
      if (form.cargoPhoto.size > maxBytes) {
        return 'La foto excede 8MB. Sube una imagen más liviana.'
      }
    }

    return ''
  }

  async function onSubmit(e) {
    e.preventDefault()
    setErrorMsg('')
    setServerMsg('')

    const v = validate()
    if (v) {
      setStatus('error')
      setErrorMsg(v)
      return
    }

    setStatus('sending')

    try {
      const payload = {
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        // En consultoría puede ir vacío, igual lo enviamos como string
        origin: form.origin.trim(),
        destination: form.destination.trim(),
        // cargo opcional
        cargo: form.cargo.trim(),
        details: form.details.trim(),
        consent: form.consent,
      }

      const res = await sendContactRequest(payload, form.cargoPhoto)

      if (res.ok) {
        setStatus('success')
        setServerMsg(
          res.message || '¡Solicitud enviada! Te contactaremos pronto.'
        )
        return
      }

      if (res.fieldErrors && Object.keys(res.fieldErrors).length) {
        const [k, v2] = Object.entries(res.fieldErrors)[0]
        setStatus('error')
        setErrorMsg(`${k}: ${String(v2)}`)
        return
      }

      setStatus('error')
      setErrorMsg(
        res.message || 'No pudimos enviar tu solicitud. Intenta nuevamente.'
      )
    } catch {
      setStatus('error')
      setErrorMsg(
        'Error de conexión. Verifica tu internet e intenta nuevamente.'
      )
    }
  }

  return (
    <>
      <section className='contact-form' aria-labelledby='contact-form-title'>
        <div className='contact-form__container'>
          <article
            className='contact-form__panel contact-form__panel--wide'
            data-aos='fade-up'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <header className='contact-form__header contact-form__header--center'>
              <div className='contact-form__eyebrow contact-form__eyebrow--center'>
                <span className='contact-form__eyebrow-icon' aria-hidden='true'>
                  <FiSend size={18} />
                </span>
                <p>Contáctanos</p>
              </div>

              <h2 id='contact-form-title'>Cuéntanos tu solicitud</h2>

              <p className='contact-form__lead'>
                Completa la información y te respondemos con una solución clara.
              </p>
            </header>

            <form className='contact-form__form' onSubmit={onSubmit} noValidate>
              {/* Datos */}
              <fieldset className='contact-form__fieldset'>
                <legend>Datos de contacto</legend>

                <div className='contact-form__row'>
                  <label className='field'>
                    <span>Nombre *</span>
                    <input
                      name='name'
                      value={form.name}
                      onChange={onChange}
                      autoComplete='name'
                      placeholder='Tu nombre'
                      required
                    />
                  </label>

                  <label className='field'>
                    <span>Empresa *</span>
                    <input
                      name='company'
                      value={form.company}
                      onChange={onChange}
                      autoComplete='organization'
                      placeholder='Nombre de tu empresa'
                      required
                    />
                  </label>

                  <label className='field'>
                    <span>Teléfono *</span>
                    <input
                      name='phone'
                      value={form.phone}
                      onChange={onChange}
                      autoComplete='tel'
                      placeholder='+57 / +1'
                      required
                    />
                  </label>
                </div>

                <div className='contact-form__row contact-form__row--two'>
                  <label className='field'>
                    <span>Email *</span>
                    <input
                      name='email'
                      value={form.email}
                      onChange={onChange}
                      autoComplete='email'
                      placeholder='tu@correo.com'
                      required
                    />
                  </label>

                  <label className='field'>
                    <span>Tipo de solicitud *</span>
                    <div className='select-wrap'>
                      <select
                        name='service'
                        value={form.service}
                        onChange={onChange}
                        required
                      >
                        <option value='' disabled>
                          Selecciona…
                        </option>

                        {SERVICES.map(s => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>

                      {/* “Circular” en verde (como etiqueta) */}
                      {isCircular ? (
                        <span className='tag-green'>Circular</span>
                      ) : null}
                    </div>

                    {/* microcopy contextual */}
                    {isConsulting ? (
                      <small className='field__help'>
                        En consultoría, origen y destino son opcionales.
                      </small>
                    ) : null}
                  </label>
                </div>
              </fieldset>

              {/* Operación */}
              <fieldset className='contact-form__fieldset'>
                <legend>Información de la solicitud</legend>

                <div className='contact-form__row'>
                  <label className='field'>
                    <span>Origen {!isConsulting ? '*' : ''}</span>
                    <input
                      name='origin'
                      value={form.origin}
                      onChange={onChange}
                      placeholder={isConsulting ? 'Opcional' : 'Ciudad / País'}
                      required={!isConsulting}
                    />
                  </label>

                  <label className='field'>
                    <span>Destino {!isConsulting ? '*' : ''}</span>
                    <input
                      name='destination'
                      value={form.destination}
                      onChange={onChange}
                      placeholder={isConsulting ? 'Opcional' : 'Ciudad / País'}
                      required={!isConsulting}
                    />
                  </label>

                  <label className='field'>
                    <span>Descripción de la carga</span>
                    <input
                      name='cargo'
                      value={form.cargo}
                      onChange={onChange}
                      placeholder='Opcional: peso/volumen/tipo'
                    />
                  </label>
                </div>

                <div className='contact-form__row contact-form__row--two'>
                  <label className='field field--grow'>
                    <span>Detalles *</span>
                    <textarea
                      name='details'
                      value={form.details}
                      onChange={onChange}
                      rows={3}
                      placeholder='Describe lo que necesitas (fechas, alcance, condiciones, etc.)'
                      required
                    />
                  </label>

                  <label className='field field--file'>
                    <span>Foto de la mercancía (opcional)</span>
                    <div
                      className='file'
                      role='button'
                      tabIndex={0}
                      onClick={() =>
                        document.getElementById('cargoPhotoInput')?.click()
                      }
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          document.getElementById('cargoPhotoInput')?.click()
                        }
                      }}
                    >
                      <input
                        id='cargoPhotoInput'
                        type='file'
                        name='cargoPhoto'
                        accept='image/jpeg,image/png,image/webp'
                        onChange={onChange}
                      />
                      <span className='file__btn' aria-hidden='true'>
                        <FiPaperclip /> Adjuntar
                      </span>
                      <span className='file__name'>
                        {form.cargoPhoto
                          ? form.cargoPhoto.name
                          : 'Sin archivo seleccionado'}
                      </span>
                    </div>
                  </label>
                </div>
              </fieldset>

              {/* Consent */}
              <div className='contact-form__consent'>
                <label className='check'>
                  <input
                    type='checkbox'
                    name='consent'
                    checked={form.consent}
                    onChange={onChange}
                    required
                  />
                  <span>
                    Autorizo el tratamiento de datos para responder esta
                    solicitud. *
                  </span>
                </label>

                <button
                  type='button'
                  className='contact-form__policy-link'
                  onClick={() => setIsPolicyOpen(true)}
                >
                  Leer política
                </button>
              </div>

              {status === 'error' && errorMsg ? (
                <p className='contact-form__error' role='alert'>
                  {errorMsg}
                </p>
              ) : null}

              {status === 'success' && serverMsg ? (
                <p className='contact-form__success' role='status'>
                  {serverMsg}
                </p>
              ) : null}

              <div className='contact-form__actions'>
                <button
                  className='contact-form__btn'
                  type='submit'
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}{' '}
                  <FiArrowRight aria-hidden='true' />
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>

      <DataPolicyModal
        open={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </>
  )
}
