import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../layout/SiteLayout";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Consulting from "../pages/Services/Consulting";
import National from "../pages/Services/National";
import International from "../pages/Services/International";
import Circular from "../pages/Circular/Circular";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "servicios", element: <Services /> },
      { path: "servicios/consultoria", element: <Consulting /> },
      { path: "servicios/nacional", element: <National /> },
      { path: "servicios/internacional", element: <International /> },

      { path: "circular", element: <Circular /> },
      { path: "quienes-somos", element: <About /> },
      { path: "contacto", element: <Contact /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
