import {
  FiFileText,
  FiTrendingUp,
  FiClipboard,
  FiHome,
  FiLayers,
} from 'react-icons/fi'

const SERVICES = [
  {
    text: 'Asesoría en temas aduaneros, formalización, documentación, régimen cambiario y logística',
    icon: FiFileText,
  },
  {
    text: 'Estructura de costos y análisis del factor de costo logístico, escala de crecimiento efecto sobre el precio.',
    icon: FiTrendingUp,
  },
  {
    text: 'Contrato de compraventa internacional (INCOTERMS) responsabilidades, validación de la oportunidad.',
    icon: FiClipboard,
  },
  {
    text: 'Espacios de coworking para tu empresa.',
    icon: FiHome,
  },
]

export default function ConsultoriaServices() {
  return (
    <section
      className='consultoria-services'
      aria-labelledby='consultoria-services-title'
    >
      <div className='consultoria-services__container'>
        <header
          className='consultoria-services__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='consultoria-services__eyebrow'>
            <span className='consultoria-services__icon' aria-hidden='true'>
              <FiLayers size={18} />
            </span>
            <p>Nuestros servicios</p>
          </div>

          <h2 id='consultoria-services-title'>
            Soluciones especializadas en comercio exterior
          </h2>
        </header>

        <div className='consultoria-services__grid'>
          {SERVICES.map((item, idx) => {
            const Icon = item.icon

            return (
              <article
                className='consultoria-service-card'
                key={idx}
                data-aos='fade-up'
                data-aos-delay={idx * 80}
                data-aos-once='true'
              >
                <div className='consultoria-service-card__icon'>
                  <Icon size={22} />
                </div>

                <p className='consultoria-service-card__text'>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
