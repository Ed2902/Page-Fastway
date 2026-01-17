import { FiGlobe, FiUsers, FiTarget, FiLink } from 'react-icons/fi'
import allianceImg from '../../../assets/internacional/transport2.webp'

export default function InternacionalAlliance() {
  return (
    <section
      className='internacional-alliance'
      aria-labelledby='internacional-alliance-title'
    >
      <div className='internacional-alliance__container'>
        <header
          className='internacional-alliance__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='internacional-alliance__eyebrow'>
            <span className='internacional-alliance__icon' aria-hidden='true'>
              <FiGlobe size={18} />
            </span>
            <p>Alianzas</p>
          </div>

          <h2 id='internacional-alliance-title'>
            Nuestra alianza con agentes de carga licenciados
          </h2>
        </header>

        <div className='internacional-alliance__cards'>
          <article
            className='internacional-alliance-card'
            data-aos='fade-up'
            data-aos-delay='80'
            data-aos-once='true'
          >
            <span className='internacional-alliance-card__icon'>
              <FiTarget size={18} />
            </span>
            <h3>Nuestra misión</h3>
            <p>
              Proporcionar soluciones logísticas eficientes, reduciendo los
              costos operativos al minimizar intermediarios y negociar
              directamente con nuestros agentes de carga aliados.
            </p>
          </article>

          <article
            className='internacional-alliance-card'
            data-aos='fade-up'
            data-aos-delay='140'
            data-aos-once='true'
          >
            <span className='internacional-alliance-card__icon'>
              <FiLink size={18} />
            </span>
            <h3>Consolidación de carga</h3>
            <p>
              Experimente operaciones ágiles con nuestros servicios de
              consolidación de carga, diseñados para optimizar su proceso de
              envío.
            </p>
          </article>

          <article
            className='internacional-alliance-card'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-once='true'
          >
            <span className='internacional-alliance-card__icon'>
              <FiUsers size={18} />
            </span>
            <h3>Agentes aliados</h3>
            <p>
              Trabajamos con una red de agentes para asegurar movimientos
              globales seguros y confiables, con seguimiento y respuesta.
            </p>
          </article>
        </div>

        <figure
          className='internacional-alliance__media'
          data-aos='fade-up'
          data-aos-delay='260'
          data-aos-once='true'
        >
          <img
            src={allianceImg}
            alt='Red internacional de agentes de carga'
            loading='lazy'
            width='1500'
            height='900'
          />
        </figure>
      </div>
    </section>
  )
}
