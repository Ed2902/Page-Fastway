import { FiMessageCircle } from 'react-icons/fi'

export default function ContactHero() {
  return (
    <section
      className='contact-hero'
      aria-labelledby='contact-hero-title'
      style={{ scrollMarginTop: '96px' }}
    >
      <div className='contact-hero__container'>
        <header
          className='contact-hero__content'
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-once='true'
        >
          <div className='contact-hero__eyebrow'>
            <span className='contact-hero__eyebrow-icon' aria-hidden='true'>
              <FiMessageCircle size={18} />
            </span>
            <p>Contáctanos</p>
          </div>

          <h1 id='contact-hero-title'>Hablemos de tu operación logística</h1>

          <p className='contact-hero__lead'>
            Cuéntanos lo esencial de tu operación y te respondemos con una
            solución clara, eficiente y alineada a tus necesidades logísticas.
          </p>

          <ul className='contact-hero__chips' aria-label='Servicios'>
            <li>Cotización</li>
            <li>Logística nacional</li>
            <li>Logística internacional</li>
            <li>Logística circular</li>
          </ul>
        </header>
      </div>
    </section>
  )
}
