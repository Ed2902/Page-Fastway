import visualImg from '../../../assets/consultoria/markets-visual.webp'
import { FiBarChart2, FiMap, FiTrendingUp } from 'react-icons/fi'

export default function ConsultoriaMarkets() {
  return (
    <section
      className='consultoria-markets'
      aria-labelledby='consultoria-markets-title'
    >
      <div className='consultoria-markets__container'>
        <header
          className='consultoria-markets__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='consultoria-markets__eyebrow'>
            <span className='consultoria-markets__icon' aria-hidden='true'>
              <FiMap size={18} />
            </span>
            <p>investigacion de mercados</p>
          </div>

          <h2 id='consultoria-markets-title'>Estudios de Mercado</h2>
        </header>

        <div className='consultoria-markets__grid'>
          {/* VISUAL */}
          <aside
            className='consultoria-markets__visual'
            aria-label='Visual de análisis de mercado'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <figure className='consultoria-markets__figure'>
              <img
                src={visualImg}
                alt='Análisis y planeación para mercados internacionales'
                loading='lazy'
                width='1200'
                height='800'
              />
            </figure>

            <div className='consultoria-markets__stats' aria-hidden='true'>
              <div className='consultoria-markets__stat'>
                <FiTrendingUp size={18} />
                <span>Insights</span>
              </div>
              <div className='consultoria-markets__stat'>
                <FiBarChart2 size={18} />
                <span>Reporte</span>
              </div>
              <div className='consultoria-markets__stat'>
                <FiMap size={18} />
                <span>Mercados</span>
              </div>
            </div>
          </aside>

          {/* TEXTO + CALLOUT */}
          <div className='consultoria-markets__content'>
            <article
              className='consultoria-markets__card'
              data-aos='fade-up'
              data-aos-duration='650'
              data-aos-once='true'
            >
              <p>
                El estudio de mercado es una herramienta fundamental para
                conocer las necesidades, preferencias y comportamientos de los
                consumidores, así como las tendencias, oportunidades y amenazas
                del mercado.
              </p>
            </article>

            <article
              className='consultoria-markets__callout'
              aria-label='Informe y recomendaciones'
              data-aos='fade-up'
              data-aos-duration='650'
              data-aos-delay='90'
              data-aos-once='true'
            >
              <header className='consultoria-markets__callout-head'>
                <span
                  className='consultoria-markets__callout-icon'
                  aria-hidden='true'
                >
                  <FiBarChart2 size={20} />
                </span>
                <h3>Fast Way entrega</h3>
              </header>

              <p>
                Con los resultados de los estudios de mercado, Fast Way les
                entrega a sus clientes informes detallados y recomendaciones
                prácticas, que les ayudan a tomar decisiones estratégicas,
                mejorar sus productos y servicios, y aumentar su satisfacción y
                fidelización de clientes.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
