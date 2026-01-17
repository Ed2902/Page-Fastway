import {
  FiCpu,
  FiSettings,
  FiLayers,
  FiTrendingDown,
  FiRefreshCcw,
  FiFeather,
} from 'react-icons/fi'

export default function CircularTechEco() {
  return (
    <section className='circular-tech' aria-labelledby='circular-tech-title'>
      <div className='circular-tech__container'>
        {/* Tecnología */}
        <article
          className='circular-tech__block'
          data-aos='fade-right'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <header className='circular-tech__header'>
            <div className='circular-tech__eyebrow'>
              <span className='circular-tech__icon' aria-hidden='true'>
                <FiCpu size={18} />
              </span>
              <p>Tecnología avanzada</p>
            </div>

            <h2 id='circular-tech-title'>
              Innovación aplicada a la logística circular
            </h2>
          </header>

          <p>
            Trabajamos constantemente para mejorar nuestra oferta y ampliar
            nuestras capacidades tecnológicas. Nuestro equipo utiliza tecnología
            avanzada para recolectar, seleccionar, identificar y clasificar
            materiales ferrosos y no ferrosos con el objetivo de extender su
            ciclo de vida.
          </p>

          <ul className='circular-tech__list'>
            <li>
              <FiSettings /> Procesos optimizados
            </li>
            <li>
              <FiLayers /> Materiales ferrosos y no ferrosos
            </li>
            <li>
              <FiRefreshCcw /> Trazabilidad del proceso
            </li>
          </ul>
        </article>

        {/* Eco */}
        <article
          className='circular-tech__block'
          data-aos='fade-left'
          data-aos-duration='650'
          data-aos-delay='100'
          data-aos-once='true'
        >
          <header className='circular-tech__header'>
            <div className='circular-tech__eyebrow'>
              <span className='circular-tech__icon' aria-hidden='true'>
                <FiFeather size={18} />
              </span>
              <p>Eco-Impulsado</p>
            </div>

            <h2>Procesos responsables y sostenibles</h2>
          </header>

          <p>
            Creamos procesos eficientes para productos de desecho ambientalmente
            inestables mediante la recuperación de materias primas, no solo
            residuos industriales sino también materiales de consumo masivo.
          </p>

          <ul className='circular-tech__list'>
            <li>
              <FiTrendingDown /> Reducción de desperdicio
            </li>
            <li>
              <FiRefreshCcw /> Recuperación de materias primas
            </li>
            <li>
              <FiFeather /> Impacto ambiental positivo
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
