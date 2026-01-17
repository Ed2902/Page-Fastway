import { useSeo } from '../../seo/useSeo'

import HeroCarousel from '../../components/sections/HeroCarousel'
import ServicesCards from '../../components/sections/ServicesCards'
import TeamSection from '../../components/sections/TeamSection'
import ScrollVideo from '../../components/sections/ScrollVideo'
import HistoriaPresenteFuturo from '../../components/sections/HistoriaPresenteFuturo'
import StatsStrip from '../../components/sections/StatsStrip'
import PartnersUS from '../../components/sections/PartnersUS'
import LocationsMap from '../../components/sections/LocationsMap'

export default function Home() {
  useSeo({
    title: 'FastWayS.A.S. | Logística Internacional y Transporte de Carga',
    description:
      'FastWayS.A.S. ofrece soluciones de logística internacional, transporte de carga y warehousing en Miami y Bogotá, con eficiencia, trazabilidad y acompañamiento profesional.',
    canonical: 'https://www.fastwaysas.com/',
  })

  return (
    <main id='main-content'>
      <h1 className='sr-only'>
        FastWayS.A.S. – Logística Internacional y Warehousing
      </h1>

      <section>
        <HeroCarousel />
      </section>

      <section>
        <ServicesCards />
      </section>

      <section>
        <TeamSection />
      </section>

      <section>
        <ScrollVideo />
      </section>

      <section>
        <HistoriaPresenteFuturo />
      </section>

      <section>
        <StatsStrip />
      </section>

      <section>
        <PartnersUS />
      </section>

      <section>
        <LocationsMap />
      </section>
    </main>
  )
}
