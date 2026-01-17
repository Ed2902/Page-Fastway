import heroImg from '../../../assets/internacional/transport.webp'

export default function InternacionalHeroImage() {
  return (
    <section
      className='internacional-hero'
      aria-labelledby='internacional-hero-title'
    >
      <div className='internacional-hero__container'>
        <header
          className='internacional-hero__content'
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-once='true'
        >
          <h1 id='internacional-hero-title'>Logística Internacional</h1>

          <p className='internacional-hero__lead'>
            El puente que atraviesa fronteras y conecta culturas.
          </p>

          <p>
            Como especialistas en servicios integrales de carga internacional,
            ofrecemos soluciones completas en logística aérea, terrestre y
            marítima. Facilitamos el transporte de mercancías de forma
            eficiente, garantizando movimientos globales seguros y confiables.
          </p>

          <a href='/contacto' className='internacional-hero__btn'>
            Cotizar
          </a>
        </header>

        <figure
          className='internacional-hero__media'
          data-aos='fade-left'
          data-aos-duration='700'
          data-aos-delay='100'
          data-aos-once='true'
        >
          <img
            src={heroImg}
            alt='Operación de logística internacional'
            loading='eager'
            width='1600'
            height='900'
          />
        </figure>
      </div>
    </section>
  )
}
