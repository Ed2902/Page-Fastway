/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { FiGlobe, FiTruck, FiCompass } from 'react-icons/fi'

import bgInternational from '../../assets/services/internacional.webp'
import bgConsulting from '../../assets/services/consultoria.webp'
import bgNational from '../../assets/services/nacional.webp'

const ORANGE = '#f97316'

const SERVICES = [
  {
    title: 'Logística internacional',
    to: '/servicios/internacional',
    Icon: FiGlobe,
    variant: 'international',
    aos: 'fade-right',
    bg: bgInternational,
  },
  {
    title: 'Consultoría',
    to: '/servicios/consultoria',
    Icon: FiCompass,
    variant: 'consulting',
    aos: 'fade-up',
    bg: bgConsulting,
  },
  {
    title: 'Logística nacional',
    to: '/servicios/nacional',
    Icon: FiTruck,
    variant: 'national',
    aos: 'fade-left',
    bg: bgNational,
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
          {SERVICES.map(({ title, to, Icon, variant, aos, bg }, idx) => (
            <Link
              key={to}
              to={to}
              className={`card3d card3d--${variant}`}
              data-aos={aos}
              data-aos-duration='900'
              data-aos-once='true'
              data-aos-delay={idx * 120}
              aria-label={`Ver servicio: ${title}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                // ✅ NO poner transform aquí (si no, pisas AOS)
                transition: 'transform .35s ease, box-shadow .35s ease',
                willChange: 'transform, box-shadow',
                boxShadow: '0 10px 22px rgba(0,0,0,.22)',
              }}
              onMouseEnter={e => {
                // Hover: sí usamos transform, pero solo en interacción
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow =
                  '0 22px 50px rgba(0,0,0,.35), 0 0 0 1px rgba(249,115,22,.35), 0 0 52px rgba(249,115,22,.45)'
              }}
              onMouseLeave={e => {
                // ✅ Al salir: borramos transform para no interferir con AOS
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 10px 22px rgba(0,0,0,.22)'
              }}
            >
              {/* Overlay base */}
              <span
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 55%, rgba(0,0,0,.65) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Glow naranja (toda la card) en hover */}
              <span
                className='card3d__orange'
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 35% 18%, rgba(249,115,22,.55) 0%, rgba(249,115,22,0) 62%)',
                  opacity: 0,
                  transition: 'opacity .35s ease',
                  pointerEvents: 'none',
                }}
              />

              <div className='card3d__shine' aria-hidden='true' />

              <div
                className='card3d__content'
                style={{ position: 'relative', zIndex: 1 }}
              >
                <div
                  className='card3d__icon'
                  aria-hidden='true'
                  style={{
                    color: '#fff',
                    transition: 'color .35s ease',
                    filter: 'drop-shadow(0 10px 18px rgba(0,0,0,.35))',
                  }}
                >
                  <Icon />
                </div>

                <h3
                  className='card3d__title'
                  style={{
                    color: '#fff',
                    textShadow: '0 10px 22px rgba(0,0,0,.45)',
                    transition: 'color .35s ease',
                  }}
                >
                  {title}
                </h3>

                <span
                  className='card3d__cta'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 8,
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    color: ORANGE,
                    background: 'rgba(249,115,22,.14)',
                    padding: '7px 12px',
                    borderRadius: 999,
                    transition: 'all .35s ease',
                  }}
                >
                  Ver más →
                </span>
              </div>

              <style>{`
                .card3d:hover .card3d__orange { opacity: .70; }
                .card3d:hover .card3d__icon,
                .card3d:hover .card3d__title { color: ${ORANGE}; }
                .card3d:hover .card3d__cta {
                  background: ${ORANGE};
                  color: #111;
                  box-shadow: 0 12px 26px rgba(249,115,22,.45);
                }
              `}</style>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
