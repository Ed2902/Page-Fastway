import { FiArrowRight } from 'react-icons/fi'

export default function InternacionalStatement() {
  return (
    <section
      className='internacional-statement'
      aria-labelledby='internacional-statement-title'
      data-aos='fade-up'
      data-aos-duration='650'
      data-aos-once='true'
    >
      <div className='internacional-statement__container'>
        <h2 id='internacional-statement-title'>
          Movemos tu carga a nivel global con control, respaldo y confianza
        </h2>

        <a href='/contacto' className='internacional-statement__btn'>
          Cotizar logística internacional <FiArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
