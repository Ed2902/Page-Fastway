import { FiTruck, FiUsers, FiHome } from 'react-icons/fi'

import op1 from '../../../assets/nacional/bodega1.webp'
import op2 from '../../../assets/nacional/bodega2.webp'
import op3 from '../../../assets/nacional/bodega3.webp'

const CARDS = [
  {
    title: 'Equipo de logística',
    icon: FiUsers,
    img: op1,
    alt: 'Equipo operativo de logística nacional',
  },
  {
    title: 'Nuestras instalaciones',
    icon: FiTruck,
    img: op2,
    alt: 'Instalaciones de bodega para logística nacional',
  },
  {
    title: 'Operación en bodega',
    icon: FiHome,
    img: op3,
    alt: 'Operación y alistamiento de mercancía en bodega',
  },
]

export default function NacionalOperation() {
  return (
    <section
      className='nacional-operation'
      aria-labelledby='nacional-operation-title'
    >
      <div className='nacional-operation__container'>
        <header
          className='nacional-operation__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='nacional-operation__eyebrow'>
            <span className='nacional-operation__icon' aria-hidden='true'>
              <FiTruck size={18} />
            </span>
            <p>Operación</p>
          </div>

          <h2 id='nacional-operation-title'>
            Infraestructura y ejecución diaria
          </h2>
        </header>

        <div className='nacional-operation__grid'>
          {CARDS.map((c, idx) => {
            const Icon = c.icon

            return (
              <article
                className='nacional-op-card'
                key={c.title}
                data-aos='fade-up'
                data-aos-delay={idx * 90}
                data-aos-duration='650'
                data-aos-once='true'
              >
                <figure className='nacional-op-card__media'>
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading='lazy'
                    width='1200'
                    height='800'
                  />
                </figure>

                <header className='nacional-op-card__head'>
                  <span className='nacional-op-card__icon' aria-hidden='true'>
                    <Icon size={18} />
                  </span>
                  <h3>{c.title}</h3>
                </header>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
