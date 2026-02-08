import teamImage from '../../assets/equipo.webp'

export default function TeamSection() {
  return (
    <section className='team' aria-labelledby='team-title' data-aos='fade-up'>
      <div className='team__container'>
        {/* HEADER */}
        <header
          className='team__header'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <h2 id='team-title'>Nuestro equipo</h2>
          <p>
            Somos un equipo profesional comprometido con la eficiencia, la
            transparencia y el crecimiento de nuestros clientes.
          </p>
        </header>

        <div className='team__content'>
          {/* IMAGEN */}
          <figure
            className='team__image'
            data-aos='fade-right'
            data-aos-delay='200'
          >
            <img
              src={teamImage}
              alt='Equipo de Fastway Logistics'
              loading='lazy'
              width='1200'
              height='800'
            />
            <figcaption style={{ color: '#fff' }}>
              Equipo operativo y administrativo de Fastway
            </figcaption>
          </figure>

          {/* TEXTO */}
          <article
            className='team__text'
            data-aos='fade-left'
            data-aos-delay='300'
          >
            <p>
              En <strong>Fastway</strong> creemos que la logística eficiente
              comienza con personas capacitadas y comprometidas.
            </p>

            <p>
              Nuestro equipo combina experiencia operativa, conocimiento
              estratégico y atención personalizada para ofrecer soluciones
              logísticas confiables a nivel nacional e internacional.
            </p>

            <p>
              Trabajamos de la mano con nuestros clientes para optimizar
              procesos, reducir costos y garantizar entregas seguras y
              puntuales.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
