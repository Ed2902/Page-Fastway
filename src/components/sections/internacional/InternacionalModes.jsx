import { FiAnchor, FiTruck, FiSend, FiCheck } from 'react-icons/fi'

const MODES = [
  {
    title: 'Logística Marítima',
    icon: FiAnchor,
    intro:
      'Trabajamos con las principales navieras y puertos del mundo para garantizar un servicio confiable y ágil.',
    items: [
      'Servicio de consolidación de carga.',
      'Experiencia en manejo de carga break bulk.',
      'Agentes directos en (USA)',
      'Seguimientos y respuesta en tiempo real.',
    ],
  },
  {
    title: 'Logística Aérea',
    icon: FiSend,
    intro:
      'Nuestro servicio de logística aérea hace la diferencia en la eficiencia, la seguridad y la atención al cliente en su cadena de suministro:',
    items: [
      'Bodegas propias en Miami – Bogotá',
      'Almacenamiento de mercancía, control de inventarios y separación',
      'Agentes directos USA (con respuestas en tiempo real.)',
      'Informes detallados check list documental',
      'Representante estratégico y comercial en Colombia.',
      'Consolidación de carga.',
      'Broker de aduanas.',
    ],
  },
  {
    title: 'Logística Terrestre',
    icon: FiTruck,
    intro:
      'Ofrecemos soluciones personalizadas para satisfacer sus necesidades de transporte por carretera.',
    items: [
      'OTM',
      'DTA',
      'Transporte terrestre nacional.',
      'Distribuciones y entregas en todo el país.',
      'Despachos parciales.',
    ],
  },
]

export default function InternacionalModes() {
  return (
    <section
      className='internacional-modes'
      aria-labelledby='internacional-modes-title'
    >
      <div className='internacional-modes__container'>
        <header
          className='internacional-modes__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='internacional-modes__eyebrow'>
            <span className='internacional-modes__icon' aria-hidden='true'>
              <FiAnchor size={18} />
            </span>
            <p>Servicios</p>
          </div>

          <h2 id='internacional-modes-title'>Aéreo, marítimo y terrestre</h2>
        </header>

        <div className='internacional-modes__grid'>
          {MODES.map((m, idx) => {
            const Icon = m.icon

            return (
              <article
                className='internacional-mode-card'
                key={m.title}
                data-aos='fade-up'
                data-aos-delay={idx * 90}
                data-aos-duration='650'
                data-aos-once='true'
              >
                <header className='internacional-mode-card__head'>
                  <span
                    className='internacional-mode-card__icon'
                    aria-hidden='true'
                  >
                    <Icon size={20} />
                  </span>
                  <h3>{m.title}</h3>
                </header>

                <p className='internacional-mode-card__intro'>{m.intro}</p>

                <ul className='internacional-mode-card__list'>
                  {m.items.map(item => (
                    <li key={item} className='internacional-mode-card__item'>
                      <span
                        className='internacional-mode-card__check'
                        aria-hidden='true'
                      >
                        <FiCheck size={16} />
                      </span>
                      <span className='internacional-mode-card__text'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
