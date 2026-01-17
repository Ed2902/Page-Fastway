import {
  FiShield,
  FiFileText,
  FiBookOpen,
  FiHash,
  FiClipboard,
} from 'react-icons/fi'

const ITEMS = [
  {
    title: 'Validación documental',
    icon: FiFileText,
  },
  {
    title: 'Alcance normativo y legal',
    icon: FiBookOpen,
  },
  {
    title: 'Clasificación de partidas arancelarias',
    icon: FiHash,
  },
  {
    title: 'Contrato de compraventa internacional',
    icon: FiClipboard,
  },
]

export default function InternacionalCustoms() {
  return (
    <section
      className='internacional-customs'
      aria-labelledby='internacional-customs-title'
    >
      <div className='internacional-customs__container'>
        <header
          className='internacional-customs__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='internacional-customs__eyebrow'>
            <span className='internacional-customs__icon' aria-hidden='true'>
              <FiShield size={18} />
            </span>
            <p>Servicios aduaneros</p>
          </div>

          <h2 id='internacional-customs-title'>
            Agilidad y cumplimiento para tu operación internacional
          </h2>
        </header>

        <div className='internacional-customs__grid'>
          <article
            className='internacional-customs__card'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <p>
              Conocemos a fondo las regulaciones y normativas aduaneras de
              distintos países, lo que nos permite agilizar la liberación de sus
              mercancías y minimizar los tiempos de espera.
            </p>

            <p>
              Nuestro enfoque personalizado nos permite trabajar estrechamente
              con usted para entender sus necesidades específicas y ofrecer
              soluciones a medida.
            </p>
          </article>

          <div
            className='internacional-customs__items'
            role='list'
            aria-label='Alcances del servicio aduanero'
            data-aos='fade-left'
            data-aos-duration='650'
            data-aos-delay='100'
            data-aos-once='true'
          >
            {ITEMS.map((it, idx) => {
              const Icon = it.icon

              return (
                <article
                  className='internacional-customs-item'
                  role='listitem'
                  key={it.title}
                  data-aos='fade-up'
                  data-aos-delay={120 + idx * 70}
                  data-aos-duration='650'
                  data-aos-once='true'
                >
                  <span
                    className='internacional-customs-item__icon'
                    aria-hidden='true'
                  >
                    <Icon size={18} />
                  </span>
                  <h3>{it.title}</h3>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
