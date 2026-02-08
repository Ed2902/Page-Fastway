import { useEffect, useMemo, useRef, useState } from 'react'

import hero1 from '../../assets/hero/hero-1.webp'
import hero2 from '../../assets/hero/hero-2.webp'
import hero3 from '../../assets/hero/hero-3.webp'
import hero4 from '../../assets/hero/hero-4.webp'
import hero5 from '../../assets/hero/hero-5.webp'
import hero6 from '../../assets/hero/hero-6.webp'

const SLIDES = [
  {
    image: hero1,
    alt: 'Logística internacional y transporte de carga',
    title: 'Logística que mueve tu negocio',
    subtitle:
      'Soluciones integrales en logística nacional e internacional con trazabilidad y eficiencia.',
  },
  {
    image: hero2,
    alt: 'Transporte y cadena de suministro',
    title: 'Eficiencia en cada operación',
    subtitle:
      'Optimizamos tiempos y costos para fortalecer tu cadena de suministro.',
  },
  {
    image: hero3,
    alt: 'Carga internacional y comercio exterior',
    title: 'Expande tu operación global',
    subtitle:
      'Acompañamiento experto en comercio exterior y logística internacional.',
  },
  {
    image: hero4,
    alt: 'Consultoría logística',
    title: 'Consultoría estratégica',
    subtitle:
      'Diagnóstico, planeación y mejora continua de tus procesos logísticos.',
  },
  {
    image: hero5,
    alt: 'Economía circular y logística sostenible',
    title: 'Logística circular',
    subtitle:
      'Soluciones sostenibles enfocadas en economía circular y eficiencia ambiental.',
  },
  {
    image: hero6,
    alt: 'Soluciones logísticas personalizadas',
    title: 'Soluciones a tu medida',
    subtitle:
      'Diseñamos soluciones logísticas adaptadas a las necesidades de tu negocio.',
  },
]

export default function HeroCarousel({ autoPlay = true, intervalMs = 6000 }) {
  const data = useMemo(() => SLIDES, [])
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef(null)

  const total = data.length
  const current = data[index]

  // Animación de entrada (solo una vez)
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  // Autoplay
  useEffect(() => {
    if (!autoPlay || total <= 1) return
    timerRef.current = setInterval(
      () => setIndex(i => (i + 1) % total),
      intervalMs
    )
    return () => clearInterval(timerRef.current)
  }, [autoPlay, intervalMs, total])

  const next = () => setIndex(i => (i + 1) % total)
  const prev = () => setIndex(i => (i - 1 + total) % total)

  return (
    <section className='hero' aria-label='Carrusel principal'>
      {/* Fondo */}
      <div className='hero__bg' aria-hidden='true'>
        <img
          src={current.image}
          alt=''
          loading='eager'
          fetchpriority='high'
          decoding='async'
          width='1600'
          height='625'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 600ms ease',
          }}
        />
      </div>

      {/* Contenido */}
      <div
        className='hero__content'
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 700ms ease, transform 700ms ease',
        }}
      >
        <div
          className='hero__text'
          style={{
            maxWidth: 620,
            padding: '18px 20px 20px',
            borderRadius: 14,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '0 14px 30px rgba(0,0,0,0.35)',
          }}
        >
          <h2 style={{ margin: 0, lineHeight: 1.1, color: '#fff' }}>
            {current.title}
          </h2>

          <p style={{ marginTop: 10, color: 'rgba(255,255,255,.9)' }}>
            {current.subtitle}
          </p>

          {/* CTA */}
          <div style={{ marginTop: 14 }}>
            <a
              href='/contacto'
              className='hero__cta'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 18px',
                borderRadius: 999,
                fontWeight: 700,
                background: '#ffffff',
                color: '#111',
                textDecoration: 'none',
                boxShadow: '0 10px 22px rgba(0,0,0,0.28)',
              }}
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Controles */}
        {total > 1 && (
          <div className='hero__controls' aria-label='Controles del carrusel'>
            <button
              className='hero__btn'
              type='button'
              onClick={prev}
              aria-label='Anterior'
            >
              ‹
            </button>
            <button
              className='hero__btn'
              type='button'
              onClick={next}
              aria-label='Siguiente'
            >
              ›
            </button>
          </div>
        )}

        <p className='sr-only'>{current.alt}</p>
      </div>
    </section>
  )
}
