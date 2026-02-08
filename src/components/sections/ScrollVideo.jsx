import { useEffect, useMemo, useRef, useState } from 'react'
import AOS from 'aos'

export default function ScrollVideo({
  heading = 'Bodegas y operación',
  copy = 'Capacidad, seguridad y control para tu cadena logística.',
  caption = 'Recorrido por nuestras bodegas y operación logística.',
  aosHeader = 'fade-up',
  aosVideo = 'zoom-in',
  threshold = 0.35,
}) {
  const hostRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    try {
      AOS.refresh()
    } catch (err) {
      console.debug('[AOS] refresh skipped:', err)
    }
  }, [])

  useEffect(() => {
    const node = hostRef.current
    if (!node) return

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible =
          entry.isIntersecting && entry.intersectionRatio >= threshold

        if (visible) {
          setHasEntered(true)
          setIsActive(true)
        } else {
          setIsActive(false)
        }
      },
      { threshold: [0, 0.15, threshold, 0.6, 1] }
    )

    io.observe(node)
    return () => io.disconnect()
  }, [threshold])

  const src = useMemo(() => {
    const base = 'https://www.youtube-nocookie.com/embed/vxEqY5V0oB0'

    const params = new URLSearchParams({
      autoplay: isActive ? '1' : '0',
      mute: '1',
      playsinline: '1',
      rel: '0',
      modestbranding: '1',
    })

    return `${base}?${params.toString()}`
  }, [isActive])

  return (
    <section aria-label='Video de bodegas'>
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <header
          data-aos={aosHeader}
          data-aos-duration='900'
          data-aos-once='true'
          style={{
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              margin: '8px auto 0',
              maxWidth: 640,
            }}
          >
            {copy}
          </p>
        </header>

        <figure
          data-aos={aosVideo}
          data-aos-duration='900'
          data-aos-delay='80'
          data-aos-once='true'
          style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // centra el video
          }}
        >
          <div
            ref={hostRef}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 820, // ⬅️ video más contenido
              paddingTop: '56.25%',
              overflow: 'hidden',
              borderRadius: 12,
              background: '#000',
            }}
          >
            {hasEntered ? (
              <iframe
                key={isActive ? 'play' : 'pause'}
                title='Recorrido por nuestras bodegas'
                src={src}
                loading='lazy'
                referrerPolicy='strict-origin-when-cross-origin'
                allow='autoplay; encrypted-media; picture-in-picture'
                allowFullScreen
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            ) : (
              <div
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center',
                  color: 'rgba(255,255,255,.85)',
                  fontSize: 14,
                }}
              >
                Cargando video…
              </div>
            )}
          </div>

          {/* Caption invisible (mismo color del fondo) */}
          <figcaption style={{ color: '#fff' }}>{caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
