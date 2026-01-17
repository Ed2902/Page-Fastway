import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import WhatsappWidget from '../components/common/WhatsappWidget'
import ScrollToTop from '../components/ScrollToTop'

export default function SiteLayout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    })
  }, [])

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <div id='contenido'>
        <Outlet />
      </div>

      <Footer />
      <WhatsappWidget />
    </>
  )
}
