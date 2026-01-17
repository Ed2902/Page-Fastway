import { FiTarget, FiCompass, FiCpu, FiInfo } from 'react-icons/fi'

export default function AboutContent() {
  return (
    <section className='about-content' aria-labelledby='about-content-title'>
      <div className='about-content__container'>
        <header
          className='about-content__header about-content__header--center'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='about-content__eyebrow about-content__eyebrow--center'>
            <span className='about-content__eyebrow-icon' aria-hidden='true'>
              <FiInfo size={18} />
            </span>
            <p>Nuestra organización</p>
          </div>

          <h2 id='about-content-title'>
            Nuestra misión, visión y enfoque estratégico
          </h2>

          <p className='about-content__lead about-content__lead--center'>
            Consolidamos un modelo de operación basado en conocimiento,
            innovación y especialización logística para generar impacto real y
            sostenible.
          </p>
        </header>

        <div className='about-content__grid'>
          {/* INTRO */}
          <article
            className='about-card about-card--wide'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <h3>Compromiso con sostenibilidad e innovación</h3>

            <p className='about-justify'>
              En Fast Way Logistics SAS BIC hemos fortalecido nuestro compromiso
              con la sostenibilidad mediante el desarrollo y ejecución de un
              Plan de Manejo Ambiental orientado a la gestión responsable de
              Residuos Industriales, integrando criterios técnicos, operativos y
              ambientales.
            </p>

            <p className='about-justify'>
              Paralelamente, hemos consolidado un departamento especializado en
              innovación y desarrollo, enfocado en diseñar soluciones logísticas
              avanzadas y proyectos estratégicos alineados con las nuevas
              dinámicas del comercio internacional.
            </p>

            <p className='about-justify'>
              Nuestra participación activa en espacios de sostenibilidad e
              innovación, tanto a nivel local como internacional, nos permite
              intercambiar conocimiento, adoptar buenas prácticas y mantenernos
              a la vanguardia del sector.
            </p>
          </article>

          {/* MISIÓN */}
          <article
            className='about-card'
            data-aos='fade-up'
            data-aos-duration='650'
            data-aos-delay='80'
            data-aos-once='true'
          >
            <div className='about-card__title'>
              <span className='about-card__icon' aria-hidden='true'>
                <FiTarget size={18} />
              </span>
              <h3>Misión</h3>
            </div>

            <p className='about-justify'>
              Desarrollar herramientas tecnológicas, administrativas y
              comerciales que permitan a las MI PYMES aprovechar la logística y
              el comercio internacional como motores de crecimiento, mediante
              alianzas estratégicas, innovación aplicada y una gestión integral
              de servicios.
            </p>
          </article>

          {/* VISIÓN */}
          <article
            className='about-card'
            data-aos='fade-up'
            data-aos-duration='650'
            data-aos-delay='140'
            data-aos-once='true'
          >
            <div className='about-card__title'>
              <span className='about-card__icon' aria-hidden='true'>
                <FiCompass size={18} />
              </span>
              <h3>Visión</h3>
            </div>

            <p className='about-justify'>
              Ser referentes en innovación logística y comercio internacional,
              reconocidos por nuestra capacidad técnica, impacto sostenible y
              contribución al bienestar de clientes, colaboradores y la
              comunidad.
            </p>
          </article>

          {/* ENFOQUE ESTRATÉGICO (REEMPLAZO) */}
          <article
            className='about-card about-card--wide'
            data-aos='fade-left'
            data-aos-duration='650'
            data-aos-delay='100'
            data-aos-once='true'
          >
            <div className='about-card__title'>
              <span className='about-card__icon' aria-hidden='true'>
                <FiCpu size={18} />
              </span>
              <h3>Innovación y especialización</h3>
            </div>

            <p className='about-justify'>
              Nuestro enfoque estratégico se basa en la investigación, el
              análisis y el desarrollo de soluciones innovadoras que nos
              permiten convertirnos en expertos en logística avanzada, economía
              circular y gestión de proyectos complejos.
            </p>

            <p className='about-justify'>
              A través del conocimiento técnico y la mejora continua de nuestros
              procesos, diseñamos estrategias eficientes que optimizan la
              operación logística, reducen impactos ambientales y generan valor
              sostenible en cada etapa de la cadena.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
