/* eslint-disable no-unused-vars */
import {
  FaTruckMoving,
  FaFilter,
  FaMagnifyingGlass,
  FaLayerGroup,
  FaRecycle,
} from 'react-icons/fa6'
import { FiRefreshCcw } from 'react-icons/fi'

const STEPS = [
  {
    n: '01',
    title: 'Recolección',
    desc: 'Recolectamos y consolidamos materiales en puntos definidos y bajo control operativo.',
    Icon: FaTruckMoving,
  },
  {
    n: '02',
    title: 'Selección',
    desc: 'Separamos por tipo, condición y potencial de recuperación para optimizar el proceso.',
    Icon: FaFilter,
  },
  {
    n: '03',
    title: 'Identificación',
    desc: 'Identificamos ferrosos y no ferrosos, apoyados en criterios técnicos y trazabilidad.',
    Icon: FaMagnifyingGlass,
  },
  {
    n: '04',
    title: 'Clasificación',
    desc: 'Clasificación fina y preparación del material según destino y tratamiento.',
    Icon: FaLayerGroup,
  },
  {
    n: '05',
    title: 'Reintroducción',
    desc: 'Reincorporamos materiales a la cadena productiva para extender su ciclo de vida.',
    Icon: FaRecycle,
  },
]

export default function CircularProcess() {
  return (
    <section
      className='circular-process'
      aria-labelledby='circular-process-title'
    >
      <div className='circular-process__container'>
        <header
          className='circular-process__header'
          data-aos='fade-up'
          data-aos-duration='650'
          data-aos-once='true'
        >
          <div className='circular-process__eyebrow'>
            <span className='circular-process__eyebrow-icon' aria-hidden='true'>
              <FiRefreshCcw size={18} />
            </span>
            <p>Economía circular</p>
          </div>

          <h2 id='circular-process-title'>Nuestro proceso</h2>

          <p className='circular-process__lead'>
            Buscamos soluciones innovadoras para la eficiencia y reducción de
            costes a través de la economía circular, ampliando el ciclo del
            producto y gestionando una separación adecuada y clasificación de
            residuos. A través de alianzas con empresas especializadas, damos
            una vida final útil a materiales que de otro modo no serían
            reutilizables.
          </p>
        </header>

        <div
          className='circular-process__grid'
          role='list'
          aria-label='Pasos del proceso'
        >
          {STEPS.map(({ n, title, desc, Icon }, idx) => (
            <article
              key={n}
              className='circular-process__card'
              role='listitem'
              data-aos='fade-up'
              data-aos-delay={100 + idx * 80}
              data-aos-duration='650'
              data-aos-once='true'
            >
              <div className='circular-process__top'>
                <span className='circular-process__num' aria-hidden='true'>
                  {n}
                </span>

                <span className='circular-process__icon' aria-hidden='true'>
                  <Icon />
                </span>
              </div>

              <h3 className='circular-process__title'>{title}</h3>
              <p className='circular-process__desc'>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
