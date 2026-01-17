import { useSeo } from '../../seo/useSeo'

import ContactHero from '../../components/sections/contact/ContactHero.jsx'
import ContactForm from '../../components/sections/contact/ContactForm.jsx'
import LocationsMap from '../../components/sections/LocationsMap'

export default function Contactanos() {
  useSeo({
    title: 'Contacto | FastWayS.A.S. Logística Internacional y Nacional',
    description:
      'Contáctanos para cotizaciones y asesoría en logística nacional, logística internacional, consultoría y economía circular. Atención en Colombia y Estados Unidos.',
    canonical: 'https://www.fastwaysas.com/contacto',
  })

  return (
    <main className='page-contact' aria-label='Contacto'>
      <ContactHero />
      <ContactForm />
      <LocationsMap />
    </main>
  )
}
