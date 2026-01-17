import partner01 from '../../assets/partners/logo fast circular.webp'
import partner02 from '../../assets/partners/logotransport.webp'
import partner03 from '../../assets/partners/greemway.webp'
import partner04 from '../../assets/partners/fastwayy.webp'

export default function PartnersUS() {
  const partners = [
    { id: 'p1', src: partner01, alt: 'Socio en EE. UU. 1' },
    { id: 'p2', src: partner02, alt: 'Socio en EE. UU. 2' },
    { id: 'p3', src: partner03, alt: 'Socio en EE. UU. 3' },
    { id: 'p4', src: partner04, alt: 'Socio en EE. UU. 4' },
  ]

  return (
    <section
      className='partners-us'
      aria-label='Nuestros socios de Estados Unidos'
    >
      <div className='partners-us__inner'>
        <header
          className='partners-us__header'
          data-aos='fade-up'
          data-aos-duration='900'
          data-aos-once='true'
        >
          <p className='partners-us__eyebrow'>NUESTROS SOCIOS DE</p>
          <h2 className='partners-us__title'>EE. UU.</h2>
          <p className='partners-us__copy'>
            Aliados estratégicos que respaldan nuestra operación y fortalecen la
            cadena logística con estándares de calidad y cumplimiento.
          </p>
        </header>

        <ul className='partners-us__grid' role='list'>
          {partners.map((p, idx) => (
            <li
              key={p.id}
              className='partners-us__card'
              data-aos='zoom-in'
              data-aos-duration='850'
              data-aos-delay={idx * 70}
              data-aos-once='true'
            >
              <img
                className='partners-us__logo'
                src={p.src}
                alt={p.alt}
                loading='lazy'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
