import heroImg from '../../../assets/presente.webp'

export default function CircularHero() {
  return (
    <section
      className='circular-hero'
      aria-labelledby='circular-hero-title'
      style={{ scrollMarginTop: '96px' }}
    >
      <div className='circular-hero__container'>
        <header
          className='circular-hero__content'
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-once='true'
        >
          <p className='circular-hero__kicker'>Logística</p>

          <h1 id='circular-hero-title'>Circular</h1>

          <p className='circular-hero__lead'>
            Soluciones innovadoras para mejorar la eficiencia y reducir costes a
            través de la economía circular.
          </p>

          <p>
            Ampliamos el ciclo del producto, gestionamos una separación adecuada
            y clasificación de residuos, y mediante alianzas con empresas
            especializadas damos una vida final útil a materiales que de otro
            modo no serían reutilizables.
          </p>

          <a href='/contacto' className='circular-hero__btn'>
            Cotizar
          </a>
        </header>

        <figure
          className='circular-hero__media'
          data-aos='fade-left'
          data-aos-duration='700'
          data-aos-delay='100'
          data-aos-once='true'
        >
          <img
            src={heroImg}
            alt='Proceso de logística circular y clasificación de materiales'
            loading='eager'
            width='1600'
            height='900'
          />
        </figure>
      </div>
    </section>
  )
}
