import { useSeo } from '../../seo/useSeo'

import AboutHero from '../../components/sections/about/AboutHero.jsx'
import AboutContent from '../../components/sections/about/AboutContent.jsx'
import AboutIdentity from '../../components/sections/about/AboutIdentity.jsx'

export default function QuienesSomos() {
  useSeo({
    title: '¿Quiénes Somos? | FastWayS.A.S. Logística Internacional',
    description:
      'Conoce a FastWayS.A.S. BIC: nuestra organización, cultura, valores, enfoque estratégico y compromiso con la innovación, la sostenibilidad y el comercio internacional.',
    canonical: 'https://www.fastwaysas.com/quienes-somos',
  })

  return (
    <main className='page-about' aria-label='Quiénes somos'>
      <AboutHero />
      <AboutIdentity />
      <AboutContent />
    </main>
  )
}
