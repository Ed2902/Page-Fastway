import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'

import bodegaVideo from '../../assets/video/bodega.mp4'
import bodegaPoster from '../../assets/equipo.webp'

export default function ScrollVideo({
  heading = 'Bodegas y operación',
  copy = 'Capacidad, seguridad y control para tu cadena logística.',
  caption = 'Recorrido por nuestras bodegas y operación logística.',
  aosHeader = 'fade-up',
  aosVideo = 'zoom-in',
  threshold = 0.35,
}) {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // AOS ya está inicializado en el proyecto; refrescamos este bloque
    try {
      AOS.refresh()
    } catch (err) {
      // Si AOS no está listo por algún motivo, no bloqueamos el render
      console.debug('[AOS] refresh skipped:', err)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const io = new IntersectionObserver(
      async ([entry]) => {
        const visible =
          entry.isIntersecting && entry.intersectionRatio >= threshold

        if (!visible) {
          video.pause()
          return
        }

        if (!ready) return

        // Asegura autoplay permitido
        video.muted = true

        try {
          await video.play()
        } catch (err) {
          // Autoplay puede bloquearse según el navegador/políticas
          console.debug('[Video] autoplay blocked:', err)
        }
      },
      { threshold: [0, 0.15, threshold, 0.6, 1] }
    )

    io.observe(video)
    return () => io.disconnect()
  }, [ready, threshold])

  return (
    <section className='scroll-video' aria-label='Video de bodegas'>
      <div className='scroll-video__inner'>
        <header
          className='scroll-video__header'
          data-aos={aosHeader}
          data-aos-duration='900'
          data-aos-once='true'
        >
          <h2 className='scroll-video__title'>{heading}</h2>
          <p className='scroll-video__copy'>{copy}</p>
        </header>

        <figure
          className='scroll-video__figure'
          data-aos={aosVideo}
          data-aos-duration='900'
          data-aos-delay='80'
          data-aos-once='true'
        >
          <video
            ref={videoRef}
            className='scroll-video__media'
            src={bodegaVideo}
            poster={bodegaPoster} // si no quieres poster, elimina esta línea
            muted
            playsInline
            preload='metadata'
            controls
            onCanPlay={() => setReady(true)}
          />
          <figcaption className='scroll-video__caption'>{caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
