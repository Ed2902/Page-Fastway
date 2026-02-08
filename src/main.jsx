import './styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'

import AOS from 'aos'
import 'aos/dist/aos.css'

// ✅ Init UNA sola vez (no dentro de componentes)
AOS.init({
  duration: 900,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  mirror: false,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
