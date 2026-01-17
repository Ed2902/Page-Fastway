import { useSeo } from '../../seo/useSeo'

import NacionalHero from '../../components/sections/nacional/NacionalHero'
import NacionalOperation from '../../components/sections/nacional/NacionalOperation'
import NacionalFacilities from '../../components/sections/nacional/NacionalFacilities'
import NacionalStatement from '../../components/sections/nacional/NacionalStatement'

export default function National() {
  useSeo({
    title: 'Logística Nacional en Colombia | FastWayS.A.S.',
    description:
      'Soluciones de logística nacional en Colombia: operación en bodega, infraestructura, control y distribución eficiente desde Bogotá.',
    canonical: 'https://www.fastwaysas.com/servicios/nacional',
  })

  return (
    <main className='national-page' aria-label='Logística nacional'>
      <NacionalHero />
      <NacionalOperation />
      <NacionalFacilities />
      <NacionalStatement />
    </main>
  )
}
