import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import logoLeft from '../assets/fastway-logo.webp'
import logoRight from '../assets/bic-logo.webp'

export default function Navbar() {
  const { pathname } = useLocation()

  const [mobileOpen, setMobileOpen] = useState(false)

  // Estados separados (clave)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const desktopDropRef = useRef(null)

  const closeAll = () => {
    setMobileOpen(false)
    setDesktopServicesOpen(false)
    setMobileServicesOpen(false)
  }

  // ✅ si estás en la misma ruta y das click, sube al top
  const handleSameRouteScroll = to => {
    if (pathname === to) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    closeAll()
  }

  // ✅ conserva tu clase y agrega is-active cuando aplica
  const linkClass =
    base =>
    ({ isActive }) =>
      isActive ? `${base} is-active` : base

  // ESC cierra todo
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') closeAll()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Click fuera SOLO para dropdown desktop (sin afectar mobile)
  useEffect(() => {
    const onDocMouseDown = e => {
      if (!desktopServicesOpen) return
      if (!desktopDropRef.current) return
      if (!desktopDropRef.current.contains(e.target))
        setDesktopServicesOpen(false)
    }
    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [desktopServicesOpen])

  return (
    <header className='site-header site-header--overlay'>
      <nav className='topbar' aria-label='Navegación principal'>
        {/* Izquierda: logo */}
        <div className='topbar__side topbar__side--left'>
          <NavLink
            to='/'
            className='topbar__logo'
            aria-label='Fastway - Inicio'
            onClick={() => handleSameRouteScroll('/')}
            end
          >
            <img src={logoLeft} alt='Fastway' />
          </NavLink>
        </div>

        {/* Centro: barra (DESKTOP) */}
        <div className='topbar__center'>
          <div className='nav-pill'>
            <NavLink
              className={linkClass('pill-link')}
              to='/'
              onClick={() => handleSameRouteScroll('/')}
              end
            >
              Inicio
            </NavLink>

            <div
              className={`pill-dropdown ${desktopServicesOpen ? 'is-open' : ''}`}
              ref={desktopDropRef}
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                className='pill-link pill-button'
                type='button'
                aria-haspopup='true'
                aria-expanded={desktopServicesOpen}
                onClick={() => setDesktopServicesOpen(v => !v)}
              >
                Servicios logísticos
              </button>

              <div
                className='pill-menu'
                role='menu'
                aria-label='Servicios logísticos'
              >
                <NavLink
                  className={linkClass('pill-item')}
                  to='/servicios/consultoria'
                  onClick={() =>
                    handleSameRouteScroll('/servicios/consultoria')
                  }
                >
                  Consultoría
                </NavLink>
                <NavLink
                  className={linkClass('pill-item')}
                  to='/servicios/nacional'
                  onClick={() => handleSameRouteScroll('/servicios/nacional')}
                >
                  Nacional
                </NavLink>
                <NavLink
                  className={linkClass('pill-item')}
                  to='/servicios/internacional'
                  onClick={() =>
                    handleSameRouteScroll('/servicios/internacional')
                  }
                >
                  Internacional
                </NavLink>
              </div>
            </div>

            <NavLink
              className={linkClass('pill-link')}
              to='/circular'
              onClick={() => handleSameRouteScroll('/circular')}
            >
              Circular
            </NavLink>

            <NavLink
              className={linkClass('pill-link')}
              to='/quienes-somos'
              onClick={() => handleSameRouteScroll('/quienes-somos')}
            >
              ¿Quiénes somos?
            </NavLink>

            <NavLink
              className={linkClass('pill-link')}
              to='/contacto'
              onClick={() => handleSameRouteScroll('/contacto')}
            >
              Contacto
            </NavLink>
          </div>
        </div>

        {/* Derecha: logo + hamburguesa (MOBILE) */}
        <div className='topbar__side topbar__side--right'>
          <span className='topbar__logo topbar__logo--right' aria-label='BIC'>
            <img src={logoRight} alt='BIC' />
          </span>

          <button
            className='nav-toggle'
            type='button'
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span className='nav-toggle__bar' />
            <span className='nav-toggle__bar' />
            <span className='nav-toggle__bar' />
          </button>
        </div>

        {/* Backdrop + drawer (MOBILE) */}
        {mobileOpen && (
          <div
            className='drawer-backdrop'
            onClick={() => setMobileOpen(false)}
          />
        )}

        <aside
          className={`drawer ${mobileOpen ? 'drawer--open' : ''}`}
          aria-label='Menú móvil'
          onClick={e => e.stopPropagation()}
        >
          <NavLink
            className={linkClass('drawer__link')}
            to='/'
            onClick={() => handleSameRouteScroll('/')}
            end
          >
            Inicio
          </NavLink>

          <button
            className='drawer__link drawer__button'
            type='button'
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen(v => !v)}
          >
            Servicios logísticos
            <span className='drawer__chev'>
              {mobileServicesOpen ? '–' : '+'}
            </span>
          </button>

          {mobileServicesOpen && (
            <div className='drawer__submenu' aria-label='Submenú servicios'>
              <NavLink
                className={linkClass('drawer__sublink')}
                to='/servicios/consultoria'
                onClick={() => handleSameRouteScroll('/servicios/consultoria')}
              >
                Consultoría
              </NavLink>
              <NavLink
                className={linkClass('drawer__sublink')}
                to='/servicios/nacional'
                onClick={() => handleSameRouteScroll('/servicios/nacional')}
              >
                Nacional
              </NavLink>
              <NavLink
                className={linkClass('drawer__sublink')}
                to='/servicios/internacional'
                onClick={() =>
                  handleSameRouteScroll('/servicios/internacional')
                }
              >
                Internacional
              </NavLink>
            </div>
          )}

          <NavLink
            className={linkClass('drawer__link')}
            to='/circular'
            onClick={() => handleSameRouteScroll('/circular')}
          >
            Circular
          </NavLink>

          <NavLink
            className={linkClass('drawer__link')}
            to='/quienes-somos'
            onClick={() => handleSameRouteScroll('/quienes-somos')}
          >
            ¿Quiénes somos?
          </NavLink>

          <NavLink
            className={linkClass('drawer__link drawer__cta')}
            to='/contacto'
            onClick={() => handleSameRouteScroll('/contacto')}
          >
            Contacto
          </NavLink>
        </aside>
      </nav>
    </header>
  )
}
