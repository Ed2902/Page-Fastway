import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6'

import logo from '../assets/fastway-logo.webp'

export default function Footer() {
  const year = new Date().getFullYear()

  const nav = [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Nosotros', to: '/quienes-somos' },
    { label: 'Contacto', to: '/contacto' },
  ]

  return (
    <footer className='footer' aria-label='Pie de página'>
      <div className='footer__inner'>
        <div className='footer__top'>
          {/* BRAND */}
          <section className='footer__brand' aria-label='Fastway Logistic'>
            <Link className='footer__brandLink' to='/' aria-label='Ir a inicio'>
              <img
                className='footer__logo'
                src={logo}
                alt='Fastway Logistic SAS BIC'
                loading='lazy'
              />
            </Link>

            <p className='footer__desc'>
              Soluciones logísticas y comercio internacional con enfoque
              consultivo, trazabilidad y eficiencia operacional.
            </p>

            <div className='footer__social' aria-label='Redes sociales'>
              <a
                className='footer__socialLink'
                href='https://www.instagram.com/fastwaybic/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram Fastway'
              >
                <FaInstagram />
              </a>

              <a
                className='footer__socialLink'
                href='https://www.facebook.com/Fastwaysas/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook Fastway'
              >
                <FaFacebookF />
              </a>

              <a
                className='footer__socialLink'
                href='https://co.linkedin.com/company/fastway-sas'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn Fastway'
              >
                <FaLinkedinIn />
              </a>

              <a
                className='footer__socialLink'
                href='https://wa.me/573143002760'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp Fastway'
              >
                <FaWhatsapp />
              </a>
            </div>
          </section>

          {/* NAV */}
          <nav className='footer__nav' aria-label='Navegación principal'>
            <h3 className='footer__title'>Empresa</h3>
            <ul className='footer__list'>
              {nav.map(item => (
                <li key={item.to}>
                  <Link className='footer__link' to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <section className='footer__contact' aria-label='Bodegas'>
            <h3 className='footer__title'>Bodegas</h3>

            <div className='footer__office'>
              <p className='footer__officeTitle'>Bogotá – Warehouse</p>
              <p className='footer__muted'>
                Cra. 129 #17f-74 · Bogotá, Colombia
              </p>
              <a className='footer__link' href='tel:+573143002760'>
                +57 314 300 2760
              </a>
            </div>

            <div className='footer__office'>
              <p className='footer__officeTitle'>Miami – Warehouse</p>
              <p className='footer__muted'>
                Transport Logistic International <br />
                10049 NW 89th Ave Unit 4 · Medley, FL 33178
              </p>
              <a className='footer__link' href='tel:+13058876363'>
                (305) 887-6363
              </a>
            </div>
          </section>

          {/* LEGAL */}
          <section className='footer__legal' aria-label='Información legal'>
            <h3 className='footer__title'>Información</h3>
            <ul className='footer__list'>
              <li>
                <Link className='footer__link' to='/privacidad'>
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link className='footer__link' to='/terminos'>
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link className='footer__link' to='/pqrs'>
                  PQRS
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* BOTTOM */}
        <div className='footer__bottom'>
          <p className='footer__copy'>
            © {year} Fastway Logistic SAS BIC. Todos los derechos reservados.
          </p>
          <p className='footer__made'>
            Hecho con enfoque en rendimiento, accesibilidad y SEO.
          </p>
        </div>
      </div>
    </footer>
  )
}
