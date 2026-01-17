import { useSeo } from '../../seo/useSeo'

import CircularHero from '../../components/sections/circular/CircularHero'
import CircularProcess from '../../components/sections/circular/CircularProcess'
import CircularTechEco from '../../components/sections/circular/CircularTechEco'
import CircularMaterialsDumping from '../../components/sections/circular/CircularMaterialsDumping'

export default function Circular() {
  useSeo({
    title:
      'Logística Circular | Economía Circular y Gestión de Materiales | FastWayS.A.S.',
    description:
      'Soluciones de logística circular para la gestión, clasificación y recuperación de materiales. Procesos sostenibles, tecnología y eficiencia operativa.',
    canonical: 'https://www.fastwaysas.com/circular',
  })

  return (
    <main className='page-circular' aria-label='Logística circular'>
      <CircularHero />
      <CircularProcess />
      <CircularTechEco />
      <CircularMaterialsDumping />
    </main>
  )
}
