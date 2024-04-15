import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/common/navBar/NavBar";
import { ParallaxProvider } from "react-scroll-parallax"; // Importa ParallaxProvider aquí
import Nosotros from "./components/pages/nosotros/Nosotros";
import Contacto from "./components/pages/contacto/Contacto";
import APLV from "./components/pages/lineas/APLV";
import TC from "./components/pages/lineas/TC";
import ECM from "./components/pages/lineas/ECM";
import Otros from "./components/pages/lineas/Otros";
import Productos from "./components/pages/productos/Productos";
import Formulas1 from "./components/pages/detallesProductos/terapiaCetogenica/formulas/Formulas1";
import { useEffect } from "react";
import Formulas2 from "./components/pages/detallesProductos/terapiaCetogenica/formulas/Formulas2";
import Formulas4 from "./components/pages/detallesProductos/terapiaCetogenica/formulas/Formulas4";
import Formulas5 from "./components/pages/detallesProductos/terapiaCetogenica/formulas/Formulas5";
import Formulas3 from "./components/pages/detallesProductos/terapiaCetogenica/formulas/Formulas3";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio de la página en cada cambio de ruta
  }, [location]);

  return (
    <>
      <ParallaxProvider>
        <NavBar />
        <Routes>
          <Route path="/productos" element={<Productos />} />

          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/APLV" element={<APLV />} />
          <Route path="/TC" element={<TC />} />
          <Route path="/ECM" element={<ECM />} />
          <Route path="/Otros" element={<Otros />} />
          {/* Detalles de productos */}
          <Route path="/ketovia3.1Unfalvored" element={<Formulas1/>} />
          <Route path="/ketovie4.1Peptide" element={<Formulas2/>} />
          <Route path="/ketovie4.1unflavored" element={<Formulas3/>} />
          <Route path="/ketovie4.1Chocolate" element={<Formulas4/>} />
          <Route path="/ketovie4.1plantbased" element={<Formulas5/>} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
