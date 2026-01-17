import { useSeo } from '../../seo/useSeo'

import ConsultoriaHeroSplit from '../../components/sections/consultoria/ConsultoriaHeroSplit'
import ConsultoriaExpertise from '../../components/sections/consultoria/ConsultoriaExpertise'
import ConsultoriaServices from '../../components/sections/consultoria/ConsultoriaServices'
import ConsultoriaMarkets from '../../components/sections/consultoria/ConsultoriaMarkets'
import ConsultoriaStatement from '../../components/sections/consultoria/ConsultoriaStatement'
import ConsultoriaBusiness from '../../components/sections/consultoria/ConsultoriaBusiness'
import ConsultoriaFinalCTA from '../../components/sections/consultoria/ConsultoriaFinalCTA'

export default function Consulting() {
  useSeo({
    title: 'Consultoría en Comercio Exterior | FastWayS.A.S.',
    description:
      'Consultoría en comercio internacional para importaciones y exportaciones: aduanas, logística, costos, INCOTERMS y estrategias de entrada a mercados.',
    canonical: 'https://www.fastwaysas.com/servicios/consultoria',
  })

  return (
    <main className='consulting-page' aria-label='Página de consultoría'>
      <ConsultoriaHeroSplit />
      <ConsultoriaExpertise />
      <ConsultoriaServices />
      <ConsultoriaStatement />
      <ConsultoriaMarkets />
      <ConsultoriaBusiness />
      <ConsultoriaFinalCTA />
    </main>
  )
}
