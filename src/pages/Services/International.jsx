import { useSeo } from '../../seo/useSeo'

import InternacionalHeroImage from '../../components/sections/internacional/InternacionalHeroImage'
import InternacionalModes from '../../components/sections/internacional/InternacionalModes'
import InternacionalCustoms from '../../components/sections/internacional/InternacionalCustoms'
import InternacionalAlliance from '../../components/sections/internacional/InternacionalAlliance'
import InternacionalStatement from '../../components/sections/internacional/InternacionalStatement'

export default function International() {
  useSeo({
    title:
      'Logística Internacional | Transporte Aéreo, Marítimo y Terrestre | FastWayS.A.S.',
    description:
      'Servicios de logística internacional con soluciones aéreas, marítimas y terrestres. Aduanas, alianzas globales y control total para tu carga.',
    canonical: 'https://www.fastwaysas.com/servicios/internacional',
  })

  return (
    <main className='international-page' aria-label='Logística internacional'>
      <InternacionalHeroImage />
      <InternacionalModes />
      <InternacionalCustoms />
      <InternacionalAlliance />
      <InternacionalStatement />
    </main>
  )
}
