import { useEffect } from 'react'
import { FiX, FiShield } from 'react-icons/fi'

export default function DataPolicyModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return

    const onKey = e => {
      if (e.key === 'Escape') onClose?.()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className='policy-modal'
      role='dialog'
      aria-modal='true'
      aria-labelledby='policy-title'
    >
      <div
        className='policy-modal__backdrop'
        onClick={onClose}
        aria-hidden='true'
      />

      <div className='policy-modal__panel'>
        <header className='policy-modal__header'>
          <div className='policy-modal__title'>
            <span className='policy-modal__icon' aria-hidden='true'>
              <FiShield size={18} />
            </span>
            <h3 id='policy-title'>Política de tratamiento de datos</h3>
          </div>

          <button
            className='policy-modal__close'
            type='button'
            onClick={onClose}
            aria-label='Cerrar'
          >
            <FiX size={18} />
          </button>
        </header>

        <div className='policy-modal__content'>
          <p>
            Al enviar este formulario, autorizas a{' '}
            <strong>Fast Way Logistics</strong> a tratar tus datos personales
            con el fin de:
          </p>

          <ul>
            <li>
              Responder tu solicitud y contactarte por los medios suministrados.
            </li>
            <li>
              Elaborar cotizaciones y gestionar procesos relacionados con
              servicios logísticos.
            </li>
            <li>
              Registrar la solicitud para control interno y seguimiento
              comercial.
            </li>
          </ul>

          <p>
            Tus datos no serán usados para fines distintos a los anteriores sin
            tu autorización. Puedes solicitar actualización, rectificación o
            eliminación de tu información a través de nuestros canales oficiales
            de contacto.
          </p>

          <p className='policy-modal__note'>
            Si no estás de acuerdo, puedes cerrar este modal y desmarcar la
            autorización; sin embargo, no podremos procesar la solicitud.
          </p>
        </div>

        <footer className='policy-modal__footer'>
          <button className='policy-modal__btn' type='button' onClick={onClose}>
            Entendido
          </button>
        </footer>
      </div>
    </div>
  )
}
