import { FiGlobe } from 'react-icons/fi'

const TOPICS = [
  'importaciones',
  'exportaciones',
  'selección de mercados',
  'estrategias de entrada',
  'negociación de contratos',
  'logística',
  'flete internacional',
  'aduanas',
  'impuestos',
  'normas técnicas',
]

export default function ConsultoriaExpertise() {
  return (
    <section
      className='consultoria-expertise'
      aria-labelledby='consultoria-expertise-title'
    >
      <div className='consultoria-expertise__container'>
        <header
          className='consultoria-expertise__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='consultoria-expertise__eyebrow'>
            <span className='consultoria-expertise__icon' aria-hidden='true'>
              <FiGlobe size={18} />
            </span>
            <p>Asesoría en comercio</p>
          </div>

          <h2 id='consultoria-expertise-title'>
            Acompañamiento experto para operar en mercados internacionales
          </h2>
        </header>

        <div className='consultoria-expertise__grid'>
          <div
            className='consultoria-expertise__text'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <p>
              Somos un equipo de expertos en comercio exterior, que brinda
              asesoria en temas como: importaciones, exportaciones, selección de
              mercados, estrategias de entrada, negociación de contratos,
              logística, flete internacional, aduanas, impuestos, normas
              técnicas
            </p>
          </div>

          <div
            className='consultoria-expertise__topics'
            role='list'
            aria-label='Temas de asesoría'
            data-aos='fade-left'
            data-aos-duration='650'
            data-aos-delay='100'
            data-aos-once='true'
          >
            {TOPICS.map(t => (
              <span className='consultoria-topic' role='listitem' key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
