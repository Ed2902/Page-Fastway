/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import {
  FiX,
  FiGlobe,
  FiTruck,
  FiBriefcase,
  FiRefreshCcw,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const ADVISORS = [
  {
    key: 'internacional',
    title: 'Logística Internacional',
    phone: '573143002760',
    Icon: FiGlobe,
    note: 'Importación, exportación y coordinación',
  },
  {
    key: 'nacional',
    title: 'Logística Nacional',
    phone: '573143002760',
    Icon: FiTruck,
    note: 'Recolección y distribución',
  },
  {
    key: 'consultoria',
    title: 'Consultoría',
    phone: '573143002760',
    Icon: FiBriefcase,
    note: 'Acompañamiento y asesoría especializada',
  },
  {
    key: 'circular',
    title: 'Circular',
    phone: '573028583784',
    Icon: FiRefreshCcw,
    note: 'Gestión y economía circular',
  },
]

export default function WhatsappAdvisorModal({ open, onClose }) {
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

  function buildHref(phone, areaTitle) {
    const path = typeof window !== 'undefined' ? window.location.pathname : '/'
    const msg = encodeURIComponent(
      `Hola Fast Way Logistics, necesito información sobre: ${areaTitle}.\nPágina: ${path}`
    )
    return `https://wa.me/${phone}?text=${msg}`
  }

  return (
    <div
      className='wa-advisor'
      role='dialog'
      aria-modal='true'
      aria-label='Elegir asesor'
    >
      <div
        className='wa-advisor__backdrop'
        onClick={onClose}
        aria-hidden='true'
      />

      <div className='wa-advisor__panel'>
        <header className='wa-advisor__header'>
          <div>
            <strong>Habla con un asesor</strong>
            <p>Elige el área y te llevamos directo a WhatsApp.</p>
          </div>

          <button
            type='button'
            className='wa-advisor__close'
            onClick={onClose}
            aria-label='Cerrar'
          >
            <FiX size={18} />
          </button>
        </header>

        <div className='wa-advisor__grid'>
          {ADVISORS.map(({ key, title, phone, Icon, note }) => (
            <a
              key={key}
              className='wa-advisor__card'
              href={buildHref(phone, title)}
              target='_blank'
              rel='noreferrer'
              onClick={onClose}
            >
              <span className='wa-advisor__icon' aria-hidden='true'>
                <Icon size={18} />
              </span>

              <div className='wa-advisor__text'>
                <strong>{title}</strong>
                <small>{note}</small>
              </div>

              {/* CTA CLARO */}
              <div className='wa-advisor__cta' aria-hidden='true'>
                <span className='wa-advisor__cta-btn'>
                  <FaWhatsapp size={16} />
                  <span>Chatear</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <footer className='wa-advisor__footer'>
          <button type='button' className='wa-advisor__btn' onClick={onClose}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  )
}
