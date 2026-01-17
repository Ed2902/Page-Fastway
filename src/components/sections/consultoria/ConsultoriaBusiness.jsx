import { FiGlobe, FiBriefcase, FiFileText, FiCheckSquare } from 'react-icons/fi'

export default function ConsultoriaBusiness() {
  return (
    <section
      className='consultoria-business'
      aria-labelledby='consultoria-business-title'
    >
      <div className='consultoria-business__container'>
        <header
          className='consultoria-business__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='consultoria-business__eyebrow'>
            <span className='consultoria-business__icon' aria-hidden='true'>
              <FiGlobe size={18} />
            </span>
            <p>Desarrollo de Negocios</p>
          </div>

          <h2 id='consultoria-business-title'>
            Expansión empresarial en mercados internacionales
          </h2>
        </header>

        <div className='consultoria-business__grid'>
          <article
            className='consultoria-business-card consultoria-business-card--primary'
            data-aos='fade-up'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <header className='consultoria-business-card__head'>
              <span
                className='consultoria-business-card__icon'
                aria-hidden='true'
              >
                <FiBriefcase size={20} />
              </span>
              <h3>Exportar a Estados Unidos</h3>
            </header>

            <p>
              Exportar a Estados Unidos, puede ser la opción para las empresas
              que buscan diversificar sus mercados, optimizar sus costos,
              proteger sus activos y acceder a financiamiento.
            </p>
          </article>

          <article
            className='consultoria-business-card'
            data-aos='fade-up'
            data-aos-duration='650'
            data-aos-delay='80'
            data-aos-once='true'
          >
            <header className='consultoria-business-card__head'>
              <span
                className='consultoria-business-card__icon'
                aria-hidden='true'
              >
                <FiFileText size={20} />
              </span>
              <h3>Incorporar una empresa en EEUU</h3>
            </header>

            <p>
              Sin embargo, incorporar una empresa en EEUU también implica
              cumplir con una serie de requisitos legales, administrativos y
              contables, que pueden variar según el tipo de entidad, el estado o
              la ciudad, y el sector de actividad.
            </p>
          </article>

          <aside
            className='consultoria-business-mini'
            aria-label='Áreas clave'
            data-aos='fade-up'
            data-aos-duration='650'
            data-aos-delay='140'
            data-aos-once='true'
          >
            <header className='consultoria-business-mini__head'>
              <span
                className='consultoria-business-mini__icon'
                aria-hidden='true'
              >
                <FiCheckSquare size={20} />
              </span>
              <h3>Áreas clave</h3>
            </header>

            <ul className='consultoria-business-mini__list'>
              <li>Requisitos legales</li>
              <li>Procesos administrativos</li>
              <li>Gestión contable</li>
              <li>Variaciones por entidad, estado o ciudad</li>
              <li>Sector de actividad</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
