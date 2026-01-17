import { FiArrowRight } from 'react-icons/fi'

export default function NacionalStatement() {
  return (
    <section
      className='nacional-statement'
      aria-labelledby='nacional-statement-title'
      data-aos='fade-up'
      data-aos-duration='650'
      data-aos-once='true'
    >
      <div className='nacional-statement__container'>
        <h2 id='nacional-statement-title'>
          Infraestructura y control para que tu operación se mueva sin fricción
        </h2>

        <a className='nacional-statement__btn' href='/contacto'>
          Cotizar logística nacional <FiArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
