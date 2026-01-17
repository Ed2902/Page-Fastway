import { useSeo } from '../../seo/useSeo'
import { Link } from 'react-router-dom'

export default function Services() {
  useSeo({
    title:
      'Servicios | FastWayS.A.S. Logística Internacional, Nacional y Consultoría',
    description:
      'Conoce los servicios de FastWayS.A.S.: consultoría en comercio exterior, logística nacional y logística internacional. Acompañamiento experto, eficiencia y trazabilidad.',
    canonical: 'https://www.fastwaysas.com/servicios',
  })

  return (
    <main className='services-page' aria-labelledby='services-page-title'>
      <header className='services-page__header'>
        <h1 id='services-page-title'>Servicios</h1>
        <p className='services-page__copy'>
          Explora nuestras soluciones logísticas y de consultoría para operar
          con seguridad y eficiencia en mercados nacionales e internacionales.
        </p>
      </header>

      <section
        className='services-page__grid'
        aria-label='Secciones de servicios'
      >
        <article className='services-page__card' aria-label='Consultoría'>
          <h2>Consultoría</h2>
          <p>
            Asesoría en comercio exterior para reducir riesgos, mejorar
            decisiones y estructurar operaciones de importación y exportación.
          </p>
          <Link className='services-page__link' to='/servicios/consultoria'>
            Ver consultoría →
          </Link>
        </article>

        <article
          className='services-page__card'
          aria-label='Logística nacional'
        >
          <h2>Logística nacional</h2>
          <p>
            Soluciones para distribución y operación local con control, tiempos
            eficientes y soporte profesional.
          </p>
          <Link className='services-page__link' to='/servicios/nacional'>
            Ver logística nacional →
          </Link>
        </article>

        <article
          className='services-page__card'
          aria-label='Logística internacional'
        >
          <h2>Logística internacional</h2>
          <p>
            Transporte y acompañamiento para operar en mercados internacionales
            con trazabilidad y cumplimiento.
          </p>
          <Link className='services-page__link' to='/servicios/internacional'>
            Ver logística internacional →
          </Link>
        </article>
      </section>
    </main>
  )
}
