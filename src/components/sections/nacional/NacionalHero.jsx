import bodegaVideo from '../../../assets/video/bodega.mp4'
import bodegaPoster from '../../../assets/fastway-logo.webp'

export default function NacionalHero() {
  return (
    <section className='nacional-hero' aria-labelledby='nacional-hero-title'>
      <div className='nacional-hero__container'>
        <header
          className='nacional-hero__content'
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-once='true'
        >
          <h1 id='nacional-hero-title'>Logística Nacional</h1>

          <p>
            Operación, infraestructura y control para la gestión eficiente de tu
            mercancía en Colombia.
          </p>

          <a href='/contacto' className='nacional-hero__btn'>
            Cotizar servicio
          </a>
        </header>

        <div
          className='nacional-hero__media'
          data-aos='fade-left'
          data-aos-duration='700'
          data-aos-delay='100'
          data-aos-once='true'
        >
          <video
            className='nacional-hero__video'
            src={bodegaVideo}
            poster={bodegaPoster}
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
          />
        </div>
      </div>
    </section>
  )
}
