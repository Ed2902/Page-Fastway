import brandLogo from '../../../assets/fastway-logo.webp'
import { FiInfo } from 'react-icons/fi'

export default function AboutHero() {
  return (
    <section
      className='about-hero'
      aria-labelledby='about-hero-title'
      style={{ scrollMarginTop: '96px' }}
    >
      <div className='about-hero__container'>
        <header
          className='about-hero__content'
          data-aos='fade-right'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='about-hero__eyebrow'>
            <span className='about-hero__eyebrow-icon' aria-hidden='true'>
              <FiInfo size={18} />
            </span>
            <p>Introducción</p>
          </div>

          <h1 id='about-hero-title'>Nuestra Organización</h1>

          <p className='about-hero__lead'>
            En Fast Way Logistics SAS BIC fortalecemos nuestro compromiso con la
            sostenibilidad, la innovación y el bienestar de nuestros
            colaboradores, integrando prácticas responsables en nuestra cadena
            de valor.
          </p>

          <p className='about-hero__text'>
            Impulsamos proyectos alineados con nuestra misión corporativa,
            promoviendo la viabilidad de productos nacionales en mercados
            internacionales y consolidando estrategias para la gestión y
            aprovechamiento de residuos.
          </p>
        </header>

        <figure
          className='about-hero__brand'
          data-aos='fade-left'
          data-aos-duration='650'
          data-aos-delay='100'
          data-aos-once='true'
        >
          <img
            src={brandLogo}
            alt='Logo empresarial de Fast Way Logistics'
            loading='eager'
            width='900'
            height='900'
          />
        </figure>
      </div>
    </section>
  )
}
