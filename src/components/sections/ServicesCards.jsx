/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { FiGlobe, FiTruck, FiCompass } from 'react-icons/fi'

const SERVICES = [
  {
    title: 'Logística internacional',
    to: '/servicios/internacional',
    Icon: FiGlobe,
    variant: 'international',
    aos: 'fade-right',
  },
  {
    title: 'Consultoría',
    to: '/servicios/consultoria',
    Icon: FiCompass,
    variant: 'consulting',
    aos: 'fade-up',
  },
  {
    title: 'Logística nacional',
    to: '/servicios/nacional',
    Icon: FiTruck,
    variant: 'national',
    aos: 'fade-left',
  },
]

export default function ServicesCards() {
  return (
    <section className='services3d' aria-labelledby='services3d-title'>
      <div className='services3d__wrap'>
        <header className='services3d__header'>
          <h2 id='services3d-title' className='services3d__title'>
            NUESTROS SERVICIOS
          </h2>
          <div className='services3d__line' aria-hidden='true' />
        </header>

        <div className='services3d__grid'>
          {SERVICES.map(({ title, to, Icon, variant, aos }, idx) => (
            <Link
              key={to}
              to={to}
              className={`card3d card3d--${variant}`}
              data-aos={aos}
              data-aos-delay={idx * 120}
              aria-label={`Ver servicio: ${title}`}
            >
              <div className='card3d__shine' aria-hidden='true' />
              <div className='card3d__content'>
                <div className='card3d__icon' aria-hidden='true'>
                  <Icon />
                </div>
                <h3 className='card3d__title'>{title}</h3>
                <span className='card3d__cta'>Ver más →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
