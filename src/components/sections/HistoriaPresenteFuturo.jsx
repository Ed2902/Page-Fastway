import AOS from 'aos'

import historiaImg from '../../assets/fastway-logo.webp'
import presenteImg from '../../assets/presente.webp'
import futuroImg from '../../assets/futuro.webp'

export default function HistoriaPresenteFuturo() {
  const items = [
    {
      id: 'historia',
      eyebrow: 'Nuestra Historia',
      title: 'Expertos en Logística Internacional',
      text: [
        'Somos una empresa dedicada a la Logística & el comercio internacional.',
        'Fast Way Logistic SAS, BIC ha creado una gama de servicios diseñados para pequeños y medianos empresarios que buscan incursionar en mercados internacionales, expandir y escalar sus negocios, transportar eficientemente sus mercancías o establecer un sistema de distribución efectivo.',
        'Entendemos los desafíos que enfrentan nuestros clientes en un entorno dinámico y por eso diseñamos soluciones logísticas que optimizan la cadena de valor. Nuestro enfoque está alineado con sus necesidades, brindando un servicio consultivo y personalizado.',
      ],
      image: historiaImg,
      imageAlt: 'Operación logística internacional',
    },
    {
      id: 'presente',
      eyebrow: 'Presente',
      title: 'La economía circular',
      text: [
        'Recopilamos, seleccionamos, identificamos y clasificamos diferentes materiales ferrosos y no ferrosos con el objetivo de ampliar el ciclo de las materias primas para proporcionar una propuesta eficiente y sostenible para el medio ambiente.',
        'Buscamos soluciones innovadoras para la eficiencia y la reducción de costos a través de la economía circular, ampliando el ciclo del producto, gestionando una adecuada separación y clasificación de residuos ferrosos y no ferrosos.',
        'A través de alianzas con empresas especializadas damos una vida final a residuos que de otra manera no serían aprovechables.',
      ],
      image: presenteImg,
      imageAlt: 'Economía circular y clasificación de materiales',
    },
    {
      id: 'futuro',
      eyebrow: 'Futuro',
      title: 'Innovación con herramientas digitales avanzadas',
      text: [
        'Seguiremos evolucionando con líneas de herramientas digitales avanzadas para optimizar procesos logísticos y administrativos.',
        'Nuestro foco es habilitar decisiones más rápidas y seguras mediante trazabilidad, automatización y analítica aplicada a la cadena de valor.',
        'La innovación será un habilitador continuo para elevar la eficiencia, reducir fricción operativa y mantener un enfoque sostenible.',
      ],
      image: futuroImg,
      imageAlt: 'Innovación digital aplicada a logística',
    },
  ]

  return (
    <section
      className='historia-pf'
      aria-label='Nuestra historia, presente y futuro'
    >
      <div className='historia-pf__inner'>
        {items.map((item, index) => {
          const reverse = index % 2 === 1
          const HeadingTag = index === 0 ? 'h2' : 'h3'

          return (
            <article
              key={item.id}
              className={`historia-pf__row ${reverse ? 'is-reverse' : ''}`}
            >
              <div
                className='historia-pf__content'
                data-aos='fade-up'
                data-aos-duration='900'
                data-aos-once='true'
              >
                <p className='historia-pf__eyebrow'>{item.eyebrow}</p>

                <HeadingTag className='historia-pf__title'>
                  {item.title}
                </HeadingTag>

                <div className='historia-pf__text'>
                  {item.text.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <figure
                className='historia-pf__media'
                data-aos={reverse ? 'fade-right' : 'fade-left'}
                data-aos-duration='900'
                data-aos-once='true'
              >
                <img
                  className='historia-pf__img'
                  src={item.image}
                  alt={item.imageAlt}
                  loading='lazy'
                />
              </figure>
            </article>
          )
        })}
      </div>
    </section>
  )
}
