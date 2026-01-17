import { FiNavigation, FiMapPin, FiPackage } from 'react-icons/fi'
import facilitiesImg from '../../../assets/nacional/instalaciones.webp'

export default function NacionalFacilities() {
  return (
    <section
      className='nacional-facilities'
      aria-labelledby='nacional-facilities-title'
    >
      <div className='nacional-facilities__container'>
        <header
          className='nacional-facilities__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='nacional-facilities__eyebrow'>
            <span className='nacional-facilities__icon' aria-hidden='true'>
              <FiMapPin size={18} />
            </span>
            <p>Nuestras instalaciones</p>
          </div>

          <h2 id='nacional-facilities-title'>Bodega y operación en Bogotá</h2>
        </header>

        <div className='nacional-facilities__grid'>
          <figure
            className='nacional-facilities__media'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <img
              src={facilitiesImg}
              alt='Instalaciones de bodega para logística nacional'
              loading='lazy'
              width='1200'
              height='800'
            />
          </figure>

          <div
            className='nacional-facilities__highlights'
            data-aos='fade-left'
            data-aos-duration='650'
            data-aos-delay='100'
            data-aos-once='true'
          >
            <article className='nacional-highlight'>
              <header className='nacional-highlight__head'>
                <span className='nacional-highlight__icon' aria-hidden='true'>
                  <FiNavigation size={18} />
                </span>
                <h3>Accesos principales</h3>
              </header>

              <p>Calle 13 · Av. Esperanza · Av. El Dorado</p>
            </article>

            <article className='nacional-highlight'>
              <header className='nacional-highlight__head'>
                <span className='nacional-highlight__icon' aria-hidden='true'>
                  <FiMapPin size={18} />
                </span>
                <h3>Ubicación estratégica</h3>
              </header>

              <div className='nacional-highlight__stats'>
                <div className='nacional-stat'>
                  <span className='nacional-stat__value'>10</span>
                  <span className='nacional-stat__label'>min Zona Franca</span>
                </div>
                <div className='nacional-stat'>
                  <span className='nacional-stat__value'>15</span>
                  <span className='nacional-stat__label'>
                    min Aeropuerto de Carga
                  </span>
                </div>
              </div>
            </article>

            <article className='nacional-highlight nacional-highlight--primary'>
              <header className='nacional-highlight__head'>
                <span className='nacional-highlight__icon' aria-hidden='true'>
                  <FiPackage size={18} />
                </span>
                <h3>Capacidad</h3>
              </header>

              <div className='nacional-highlight__stats'>
                <div className='nacional-stat'>
                  <span className='nacional-stat__value'>1000</span>
                  <span className='nacional-stat__label'>
                    m² · triple altura
                  </span>
                </div>
                <div className='nacional-stat'>
                  <span className='nacional-stat__value'>900</span>
                  <span className='nacional-stat__label'>pallets</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
