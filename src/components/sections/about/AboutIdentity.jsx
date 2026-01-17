import {
  FiZap,
  FiTrendingUp,
  FiHeart,
  FiRefreshCcw,
  FiShield,
} from 'react-icons/fi'

const VALUES = [
  {
    title: 'Innovación Ágil',
    desc: 'Experimentamos y escalamos soluciones con creatividad y velocidad con propósito.',
    Icon: FiZap,
  },
  {
    title: 'Evolución Constante',
    desc: 'Aprendizaje continuo, mentalidad de crecimiento y mejora permanente.',
    Icon: FiTrendingUp,
  },
  {
    title: 'Bienestar Integral',
    desc: 'Personas primero: respeto, equidad, cuidado mutuo y entornos seguros.',
    Icon: FiHeart,
  },
  {
    title: 'Impacto Regenerativo',
    desc: 'Economía circular y sostenibilidad como guía estratégica del negocio.',
    Icon: FiRefreshCcw,
  },
  {
    title: 'Integridad Colectiva',
    desc: 'Coherencia, transparencia y confianza como base de nuestras relaciones.',
    Icon: FiShield,
  },
]

export default function AboutIdentity() {
  return (
    <section className='about-identity' aria-labelledby='about-identity-title'>
      <div className='about-identity__container'>
        <header
          className='about-identity__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='about-identity__eyebrow'>
            <span className='about-identity__eyebrow-icon' aria-hidden='true'>
              <FiShield size={18} />
            </span>
            <p>Lo que nos identifica</p>
          </div>

          <h2 id='about-identity-title'>Nuestra cultura en 5 principios</h2>
          <p className='about-identity__lead'>
            Estos valores guían cómo trabajamos, cómo innovamos y cómo
            construimos relaciones de largo plazo.
          </p>
        </header>

        <div
          className='about-identity__grid'
          role='list'
          aria-label='Valores corporativos'
        >
          {VALUES.map((v, idx) => {
            const Icon = v.Icon
            return (
              <article
                key={v.title}
                className='about-identity__card'
                role='listitem'
                data-aos='fade-up'
                data-aos-duration='650'
                data-aos-delay={100 + idx * 70}
                data-aos-once='true'
              >
                <span className='about-identity__icon' aria-hidden='true'>
                  <Icon size={18} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
