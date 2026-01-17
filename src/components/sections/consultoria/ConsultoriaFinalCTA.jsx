import { FiArrowRight } from 'react-icons/fi'

export default function ConsultoriaFinalCTA() {
  return (
    <section
      className='consultoria-final-cta'
      aria-labelledby='consultoria-final-cta-title'
      data-aos='fade-up'
      data-aos-duration='650'
      data-aos-once='true'
    >
      <div className='consultoria-final-cta__container'>
        <div className='consultoria-final-cta__content'>
          <h2 id='consultoria-final-cta-title'>
            ¿Listo para tomar decisiones con respaldo experto?
          </h2>

          <a className='consultoria-final-cta__btn' href='/contacto'>
            Hablar con un consultor <FiArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
