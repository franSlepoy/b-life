import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/common/navBar/NavBar";
import { ParallaxProvider } from "react-scroll-parallax"; // Importa ParallaxProvider aquí
import Nosotros from "./components/pages/nosotros/Nosotros";
import Contacto from "./components/pages/contacto/Contacto";
import APLV from "./components/pages/lineas/APLV";
import TC from "./components/pages/lineas/TC";
import EnConstruccion from "./components/pages/enConstruccion/EnConstruccion";
import ECM from "./components/pages/lineas/ECM";
import Otros from "./components/pages/lineas/Otros";

function App() {
  return (
    <>
      <ParallaxProvider>
      <NavBar /> 
        <Routes>
          <Route path="/productos" element={<EnConstruccion />} />

         <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<EnConstruccion />} />
          <Route path="/APLV" element={<APLV />} />
          <Route path="/TC" element={<TC />} /> 
          <Route path="/ECM" element={<ECM />} /> 
          <Route path="/Otros" element={<Otros />} /> 
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
