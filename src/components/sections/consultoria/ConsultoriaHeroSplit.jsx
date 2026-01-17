import heroImg from '../../../assets/consultoria/consultoria-hero.webp'

export default function ConsultoriaHeroSplit() {
  return (
    <section
      className='consultoria-hero'
      aria-labelledby='consultoria-hero-title'
    >
      <div className='consultoria-hero__container'>
        <figure
          className='consultoria-hero__image'
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-once='true'
        >
          <img
            src={heroImg}
            alt='Consultoría en comercio internacional'
            loading='eager'
            width='1200'
            height='800'
          />
        </figure>

        <header
          className='consultoria-hero__content'
          data-aos='fade-left'
          data-aos-duration='700'
          data-aos-delay='100'
          data-aos-once='true'
        >
          <h1 id='consultoria-hero-title'>Consultoría</h1>

          <p>
            El comercio internacional es una fuente de crecimiento,
            competitividad e innovación para las empresas, que implica riesgos,
            costos y complejidades que deben ser gestionados adecuadamente.
          </p>
        </header>
      </div>
    </section>
  )
}
