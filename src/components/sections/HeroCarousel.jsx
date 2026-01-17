import { useEffect, useMemo, useRef, useState } from 'react'

// Imágenes locales
import hero1 from '../../assets/hero/hero-1.webp'
import hero2 from '../../assets/hero/hero-2.webp'
import hero3 from '../../assets/hero/hero-3.webp'
import hero4 from '../../assets/hero/hero-4.webp'
import hero5 from '../../assets/hero/hero-5.webp'
import hero6 from '../../assets/hero/hero-6.webp'

const DEFAULT_SLIDES = [
  {
    id: 's1',
    image: hero1,
    alt: 'Contenedores y logística',
    title: 'Logística que impulsa tu negocio',
    subtitle:
      'Soluciones nacionales e internacionales con acompañamiento consultivo y trazabilidad.',
    ctaText: 'Conocer servicios',
    ctaHref: '/servicios',
  },
  {
    id: 's2',
    image: hero2,
    alt: 'Transporte y cadena de suministro',
    title: 'Eficiencia en cada entrega',
    subtitle:
      'Optimización de costos, tiempos y procesos para una operación más competitiva.',
    ctaText: 'Logística nacional',
    ctaHref: '/servicios/nacional',
  },
  {
    id: 's3',
    image: hero3,
    alt: 'Carga y exportación',
    title: 'Expande tu alcance internacional',
    subtitle:
      'Acompañamiento experto para escalar tu operación en mercados internacionales.',
    ctaText: 'Logística internacional',
    ctaHref: '/servicios/internacional',
  },
  {
    id: 's4',
    image: hero4,
    alt: 'Gestión logística integral',
    title: 'Gestión logística integral',
    subtitle:
      'Planeación, control y ejecución logística alineada a tus objetivos de negocio.',
    ctaText: 'Consultoría logística',
    ctaHref: '/servicios/consultoria',
  },
  {
    id: 's5',
    image: hero5,
    alt: 'Optimización de procesos logísticos',
    title: 'Optimiza tus procesos',
    subtitle: 'Reducimos tiempos y costos mediante análisis y mejora continua.',
    ctaText: 'Hablar con un experto',
    ctaHref: '/contacto',
  },
  {
    id: 's6',
    image: hero6,
    alt: 'Soluciones logísticas personalizadas',
    title: 'Soluciones a tu medida',
    subtitle:
      'Diseñamos soluciones logísticas personalizadas según tu operación.',
    ctaText: 'Solicitar asesoría',
    ctaHref: '/contacto',
  },
]

export default function HeroCarousel({
  slides,
  autoPlay = true,
  intervalMs = 6000,
}) {
  const data = useMemo(
    () => (slides?.length ? slides : DEFAULT_SLIDES),
    [slides]
  )

  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const goTo = i => {
    const nextIdx = (i + data.length) % data.length
    setIndex(nextIdx)
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // Autoplay
  useEffect(() => {
    if (!autoPlay || data.length <= 1) return
    timerRef.current = window.setInterval(() => {
      setIndex(i => (i + 1) % data.length)
    }, intervalMs)

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [autoPlay, intervalMs, data.length])

  // Teclado
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const current = data[index]

  return (
    <section className='hero' aria-label='Carrusel principal'>
      {/* Fondo */}
      <div className='hero__bg' aria-hidden='true'>
        {data.map((s, i) => (
          <img
            key={s.id}
            className={`hero__img ${i === index ? 'is-active' : ''}`}
            src={s.image}
            alt=''
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding='async'
          />
        ))}
        <div className='hero__overlay' />
      </div>

      {/* Contenido */}
      <div className='hero__content'>
        <div className='hero__text'>
          {/* SEO: el H1 único debe estar en la página, no en el carrusel */}
          <h2 className='hero__title'>{current.title}</h2>
          <p className='hero__subtitle'>{current.subtitle}</p>

          <div className='hero__actions'>
            <a className='hero__cta' href={current.ctaHref}>
              {current.ctaText}
            </a>
            <a className='hero__link' href='/contacto'>
              Contacto
            </a>
          </div>
        </div>

        {/* Controles */}
        <div className='hero__controls' aria-label='Controles del carrusel'>
          <button
            className='hero__btn'
            type='button'
            onClick={prev}
            aria-label='Anterior'
          >
            ‹
          </button>

          <div className='hero__dots' role='tablist' aria-label='Diapositivas'>
            {data.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === index ? 'is-active' : ''}`}
                type='button'
                onClick={() => goTo(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                aria-current={i === index ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            className='hero__btn'
            type='button'
            onClick={next}
            aria-label='Siguiente'
          >
            ›
          </button>
        </div>

        {/* Texto accesible */}
        <p className='sr-only'>{current.alt}</p>
      </div>
    </section>
  )
}
