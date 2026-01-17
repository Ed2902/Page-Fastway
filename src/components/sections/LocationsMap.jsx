export default function LocationsMap() {
  return (
    <section className='locations-map' aria-label='Ubicaciones y bodegas'>
      <div className='locations-map__inner'>
        <header
          className='locations-map__header'
          data-aos='fade-up'
          data-aos-duration='900'
          data-aos-once='true'
        >
          <h2 className='locations-map__title'>Nuestras ubicaciones</h2>
          <p className='locations-map__copy'>
            Operamos con bodegas estratégicas en Colombia y Estados Unidos para
            asegurar trazabilidad, tiempos eficientes y acompañamiento en cada
            envío.
          </p>
        </header>

        <div className='locations-map__grid'>
          {/* Bogotá */}
          <article
            className='locations-map__card'
            data-aos='fade-right'
            data-aos-duration='900'
            data-aos-once='true'
          >
            <div className='locations-map__map'>
              <iframe
                title='Bogotá - Warehouse'
                src='https://www.google.com/maps?q=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia&output=embed'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                allowFullScreen
              />
            </div>

            <div className='locations-map__content'>
              <h3 className='locations-map__heading'>Bogotá - Warehouse</h3>

              <address className='locations-map__address'>
                <span>Cra. 129 #17f-74</span>
                <span>Bogotá, Colombia</span>
              </address>

              <p className='locations-map__tel'>
                Tel:{' '}
                <a href='tel:+573143002760' className='locations-map__link'>
                  +57 314 3002760
                </a>
              </p>
            </div>
          </article>

          {/* Miami */}
          <article
            className='locations-map__card'
            data-aos='fade-left'
            data-aos-duration='900'
            data-aos-once='true'
          >
            <div className='locations-map__map'>
              <iframe
                title='Miami - Warehouse'
                src='https://www.google.com/maps?q=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178&output=embed'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                allowFullScreen
              />
            </div>

            <div className='locations-map__content'>
              <h3 className='locations-map__heading'>Miami - Warehouse</h3>

              <p className='locations-map__sub'>
                Transport Logistic International
              </p>

              <address className='locations-map__address'>
                <span>10049 NW 89th Ave unit 4</span>
                <span>Medley, FL 33178</span>
              </address>

              <p className='locations-map__tel'>
                Tel:{' '}
                <a href='tel:+13058876363' className='locations-map__link'>
                  (305) 887 -6363
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
