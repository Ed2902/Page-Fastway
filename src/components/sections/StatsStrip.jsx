import { useEffect, useMemo, useRef, useState } from 'react'

function formatStat(value, format) {
  // formats: 'int', 'k', 'k1'
  if (format === 'k') return `${Math.round(value / 1000)}k+`
  if (format === 'k1') return `${(value / 1000).toFixed(1)}k+`
  return `${Math.round(value)}+`
}

function animateCount({ from, to, duration, onUpdate, onDone }) {
  const start = performance.now()

  function tick(now) {
    const t = Math.min(1, (now - start) / duration)
    // easeOutCubic
    const eased = 1 - Math.pow(1 - t, 3)
    const current = from + (to - from) * eased
    onUpdate(current)
    if (t < 1) requestAnimationFrame(tick)
    else onDone?.()
  }

  requestAnimationFrame(tick)
}

export default function StatsStrip() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [values, setValues] = useState({
    years: 0,
    clients: 0,
    products: 0,
    shipments: 0,
  })

  const stats = useMemo(
    () => [
      {
        key: 'years',
        target: 30,
        format: 'int',
        labelLines: ['Años', 'Experiencia'],
      },
      {
        key: 'clients',
        target: 500,
        format: 'int',
        labelLines: ['Clientes', 'servidos'],
      },
      {
        key: 'products',
        target: 120000,
        format: 'k',
        labelLines: ['Productos', 'almacenados'],
      },
      {
        key: 'shipments',
        target: 2500,
        format: 'k1',
        labelLines: ['Envíos', 'exitosos'],
      },
    ],
    []
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        setStarted(true)

        // Si reduce motion, setea directo
        if (prefersReduced) {
          setValues({
            years: 30,
            clients: 500,
            products: 120000,
            shipments: 2500,
          })
          return
        }

        // Anima cada uno con pequeños delays
        const base = 950
        const delays = { years: 0, clients: 120, products: 240, shipments: 360 }

        stats.forEach(s => {
          window.setTimeout(() => {
            animateCount({
              from: 0,
              to: s.target,
              duration: base,
              onUpdate: v => setValues(prev => ({ ...prev, [s.key]: v })),
            })
          }, delays[s.key] || 0)
        })
      },
      { threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [started, stats])

  return (
    <section className='stats-strip' aria-label='Indicadores Fastway'>
      <div className='stats-strip__inner' ref={ref}>
        <ul className='stats-strip__list' role='list'>
          {stats.map(s => (
            <li className='stats-strip__item' key={s.key}>
              <p className='stats-strip__value'>
                {formatStat(values[s.key], s.format)}
              </p>

              <p className='stats-strip__label'>
                {s.labelLines.map((line, idx) => (
                  <span key={idx} className='stats-strip__line'>
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
