import { useEffect, useMemo, useRef, useState } from 'react'

// ===== IMÁGENES HERO =====
import hero1 from '../../assets/hero-1.webp'
import hero2 from '../../assets/hero-2.webp'
import hero3 from '../../assets/hero-3.webp'
import hero4 from '../../assets/hero-4.webp'
import hero5 from '../../assets/hero-5.webp'
import hero6 from '../../assets/hero-6.webp'

// ===== SLIDES =====
const SLIDES = [
  {
    id: 'hero-1',
    image: hero1,
    alt: 'Logística internacional y transporte de carga',
    title: 'Logística que mueve tu negocio',
    subtitle:
      'Soluciones integrales en logística nacional e internacional con trazabilidad y eficiencia.',
    ctaText: 'Nuestros servicios',
    ctaHref: '/servicios',
  },
  {
    id: 'hero-2',
    image: hero2,
    alt: 'Transporte y cadena de suministro',
    title: 'Eficiencia en cada operación',
    subtitle:
      'Optimizamos tiempos y costos para fortalecer tu cadena de suministro.',
    ctaText: 'Logística nacional',
    ctaHref: '/servicios/nacional',
  },
  {
    id: 'hero-3',
    image: hero3,
    alt: 'Carga internacional y comercio exterior',
    title: 'Expande tu operación global',
    subtitle:
      'Acompañamiento experto en comercio exterior y logística internacional.',
    ctaText: 'Logística internacional',
    ctaHref: '/servicios/internacional',
  },
  {
    id: 'hero-4',
    image: hero4,
    alt: 'Consultoría logística',
    title: 'Consultoría estratégica',
    subtitle:
      'Diagnóstico, planeación y mejora continua de tus procesos logísticos.',
    ctaText: 'Consultoría',
    ctaHref: '/servicios/consultoria',
  },
  {
    id: 'hero-5',
    image: hero5,
    alt: 'Economía circular y logística sostenible',
    title: 'Logística circular',
    subtitle:
      'Soluciones sostenibles enfocadas en economía circular y eficiencia ambiental.',
    ctaText: 'Economía circular',
    ctaHref: '/circular',
  },
  {
    id: 'hero-6',
    image: hero6,
    alt: 'Soluciones logísticas personalizadas',
    title: 'Soluciones a tu medida',
    subtitle:
      'Diseñamos soluciones logísticas adaptadas a las necesidades de tu negocio.',
    ctaText: 'Contáctanos',
    ctaHref: '/contacto',
  },
]

export default function HeroCarousel({ autoPlay = true, intervalMs = 6000 }) {
  const data = useMemo(() => SLIDES, [])
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const total = data.length
  const current = data[index]

  const goTo = i => {
    const next = (i + total) % total
    setIndex(next)
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // ===== AUTOPLAY =====
  useEffect(() => {
    if (!autoPlay || total <= 1) return

    timerRef.current = window.setInterval(() => {
      setIndex(i => (i + 1) % total)
    }, intervalMs)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoPlay, intervalMs, total])

  // ===== TECLADO =====
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // ===== PRECARGAR SIGUIENTE IMAGEN =====
  useEffect(() => {
    const preload = src => {
      if (!src) return
      const img = new Image()
      img.src = src
    }

    preload(data[(index + 1) % total]?.image)
  }, [index, data, total])

  return (
    <section className='hero' aria-label='Carrusel principal'>
      {/* ===== FONDO (LCP OPTIMIZADO) ===== */}
      <div className='hero__bg' aria-hidden='true'>
        <img
          className='hero__img is-active'
          src={current.image}
          alt=''
          loading='eager'
          decoding='async'
          fetchpriority='high'
          sizes='100vw'
          width='1600'
          height='625'
        />
        <div className='hero__overlay' />
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className='hero__content'>
        <div className='hero__text'>
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

        {/* ===== CONTROLES ===== */}
        <div className='hero__controls' aria-label='Controles del carrusel'>
          <button
            className='hero__btn'
            type='button'
            onClick={prev}
            aria-label='Anterior'
          >
            ‹
          </button>

          <div className='hero__dots' role='tablist'>
            {data.map((s, i) => (
              <button
                key={s.id}
                className={`hero__dot ${i === index ? 'is-active' : ''}`}
                type='button'
                onClick={() => goTo(i)}
                aria-current={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
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
