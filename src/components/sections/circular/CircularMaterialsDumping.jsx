import varillaImg from '../../../assets/circular/varilla.webp'
import tungstenImg from '../../../assets/circular/tungsten.webp'
import dumpingImg from '../../../assets/circular/dumping.webp'

import { FiBox, FiMapPin, FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export default function CircularMaterialsDumping() {
  return (
    <section className='circular-close' aria-labelledby='circular-close-title'>
      <div className='circular-close__container'>
        {/* MATERIALS */}
        <header
          className='circular-close__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='circular-close__eyebrow'>
            <span className='circular-close__eyebrow-icon' aria-hidden='true'>
              <FiBox size={18} />
            </span>
            <p>Materiales</p>
          </div>

          <h2 id='circular-close-title'>Materiales que gestionamos</h2>

          <p className='circular-close__lead'>
            Clasificamos y preparamos materiales para su reintroducción a la
            cadena productiva, maximizando recuperación y control operativo.
          </p>
        </header>

        <div className='circular-close__materials' role='list'>
          <article
            className='circular-material'
            role='listitem'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <figure className='circular-material__media'>
              <img
                src={varillaImg}
                alt='Varilla para procesos de recuperación y clasificación'
                loading='lazy'
                width='1200'
                height='800'
              />
            </figure>

            <div className='circular-material__body'>
              <h3>Metales</h3>
              <ul className='circular-material__list'>
                <li>
                  <FiCheckCircle /> Recepción y consolidación controlada
                </li>
                <li>
                  <FiCheckCircle /> Separación y clasificación por categoría
                </li>
                <li>
                  <FiCheckCircle /> Preparación para recuperación / destino
                  final
                </li>
              </ul>
            </div>
          </article>

          <article
            className='circular-material'
            role='listitem'
            data-aos='fade-left'
            data-aos-duration='650'
            data-aos-delay='100'
            data-aos-once='true'
          >
            <figure className='circular-material__media'>
              <img
                src={tungstenImg}
                alt='Tungsten para manejo técnico y clasificación especializada'
                loading='lazy'
                width='1200'
                height='800'
              />
            </figure>

            <div className='circular-material__body'>
              <h3>Aleaciones</h3>
              <ul className='circular-material__list'>
                <li>
                  <FiCheckCircle /> Identificación y manejo técnico
                </li>
                <li>
                  <FiCheckCircle /> Clasificación para recuperación eficiente
                </li>
                <li>
                  <FiCheckCircle /> Trazabilidad y control de proceso
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* DUMPING SITES */}
        <div className='circular-dumping'>
          <div
            className='circular-dumping__content'
            data-aos='fade-right'
            data-aos-duration='650'
            data-aos-once='true'
          >
            <div className='circular-close__eyebrow'>
              <span className='circular-close__eyebrow-icon' aria-hidden='true'>
                <FiMapPin size={18} />
              </span>
              <p>Dumping Sites</p>
            </div>

            <h3 className='circular-dumping__title'>
              Recepción y consolidación con control operativo
            </h3>

            <p className='circular-dumping__text'>
              Coordinamos puntos de recepción y consolidación para mantener un
              flujo ordenado de materiales, reduciendo reprocesos y mejorando
              tiempos de operación. Consulta disponibilidad según ciudad y tipo
              de material.
            </p>

            <ul className='circular-dumping__bullets'>
              <li>Ingreso controlado y registro de material</li>
              <li>Consolidación y separación inicial</li>
              <li>Preparación para clasificación y reintroducción</li>
            </ul>
          </div>

          <figure
            className='circular-dumping__media'
            data-aos='fade-left'
            data-aos-duration='650'
            data-aos-delay='100'
            data-aos-once='true'
          >
            <img
              src={dumpingImg}
              alt='Punto de consolidación y recepción de materiales'
              loading='lazy'
              width='1400'
              height='900'
            />
          </figure>
        </div>

        {/* CTA FINAL */}
        <aside
          className='circular-cta'
          aria-label='Llamado a la acción'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='circular-cta__inner'>
            <div>
              <h3>¿Quieres optimizar tu operación con logística circular?</h3>
              <p>
                Envíanos el tipo de material, volumen estimado y ubicación. Te
                respondemos con una propuesta clara y accionable.
              </p>
            </div>

            <a className='circular-cta__btn' href='/contacto'>
              Cotizar <FiArrowRight aria-hidden='true' />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
