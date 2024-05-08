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
import Alimentos1 from "./components/pages/detallesProductos/terapiaCetogenica/alimentos/Alimentos1";
import Alimentos2 from "./components/pages/detallesProductos/terapiaCetogenica/alimentos/Alimentos2";
import Suplementos1 from "./components/pages/detallesProductos/terapiaCetogenica/suplementos/Suplementos1";
import Suplementos2 from "./components/pages/detallesProductos/terapiaCetogenica/suplementos/Suplementos2";
import Modulos1 from "./components/pages/detallesProductos/terapiaCetogenica/modulos/Modulos1";
import Modulos2 from "./components/pages/detallesProductos/terapiaCetogenica/modulos/Modulos2";
import Aminomed from "./components/pages/detallesProductos/aplv/Aminomed";
import Essential from "./components/pages/detallesProductos/aplv/Essential";
import ComidaGAcAFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaGAcAFormula";
import ComidaGAcBFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaGAcBFormula";
import ComidaHCysBFomula from "./components/pages/detallesProductos/eCon/formulas/ComidaHCysBFomula";
import ComidaLeuAFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaLeuAFormula";
import ComidaLeuBFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaLeuBFormula";
import ComidaMSUDAFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaMSUDAFormula";
import ComidaMSUDBFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaMSUDBFormula";
import ComidaPKUBFormulaSS from "./components/pages/detallesProductos/eCon/formulas/ComidaPKUBFormulaSS";
import ComidaPKUAFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaPKUAFormula";
import ComidaPKUBFormulaLO from "./components/pages/detallesProductos/eCon/formulas/ComidaPKUBFormulaLO";
import ComidaUrCAFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaUrCAFormula";
import ComidaUrCBFormula from "./components/pages/detallesProductos/eCon/formulas/ComidaUrCBFormula";
import GlytactinComplete15 from "./components/pages/detallesProductos/eCon/formulas/GlytactinComplete15";
import GlytactinRTD10 from "./components/pages/detallesProductos/eCon/formulas/GlytactinRTD10";
import GlytactinRTD15 from "./components/pages/detallesProductos/eCon/formulas/GlytactinRTD15";
import XPHEEnergyJ from "./components/pages/detallesProductos/eCon/formulas/XPHEEnergyJ";
import XPHEEnergyK from "./components/pages/detallesProductos/eCon/formulas/XPHEEnergyK";
import XPHEInfantMixLCP from "./components/pages/detallesProductos/eCon/formulas/XPHEInfantMixLCP";
import XPheJump20 from "./components/pages/detallesProductos/eCon/formulas/XPheJump20";
import AbintraLiteratura from "./components/pages/detallesProductos/otros/AbintraLiteratura";
import FontUpLiteratura from "./components/pages/detallesProductos/otros/FontUpLiteratura";
import GlutapakRLiteratura from "./components/pages/detallesProductos/otros/GlutapakRLiteratura";
import CetomixvainillayCetomixchocolate from "./components/pages/detallesProductos/terapiaCetogenica/alimentos/CetomixvainillayCetomixchocolate";
import CetomixvainillayCetomixchocolate1 from "./components/pages/detallesProductos/terapiaCetogenica/alimentos/CetomixvainillayCetomixchocolate1";
import KansoDeliMCTCacaoBiscuits from "./components/pages/detallesProductos/terapiaCetogenica/alimentos/KansoDeliMCTCacaoBiscuits";
import Aproten from "./components/pages/detallesProductos/eCon/alimentos/Aproten";
import AprotenBizcochosdeCacao from "./components/pages/detallesProductos/eCon/alimentos/AprotenBizcochosdeCacao";

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
          <Route path="/ketovia3.1Unfalvored" element={<Formulas1 />} />
          <Route path="/ketovie4.1Peptide" element={<Formulas2 />} />
          <Route path="/ketovie4.1unflavored" element={<Formulas3 />} />
          <Route path="/ketovie4.1Chocolate" element={<Formulas4 />} />
          <Route path="/ketovie4.1plantbased" element={<Formulas5 />} />
          <Route path="/Cetolate" element={<Alimentos1 />} />
          <Route path="/Cetomix" element={<Alimentos2 />} />
          <Route path="/vimiKidsNaranja" element={<Suplementos1 />} />
          <Route path="/vimiKidsNeutro" element={<Suplementos2 />} />
          <Route path="/Cetoil" element={<Modulos1 />} />
          <Route path="/Cetoil" element={<Modulos1 />} />
          <Route path="/MCTFiber" element={<Modulos2 />} />
          <Route path="/Aminomed" element={<Aminomed />} />
          <Route path="/EssentialCareJr" element={<Essential />} />
          <Route path="/comidaGAcAFormula" element={<ComidaGAcAFormula />} />
          <Route path="/comidaGAcBFormula" element={<ComidaGAcBFormula />} />
          <Route path="/comidaHCysBFormula" element={<ComidaHCysBFomula />} />
          <Route path="/comidaLeuAFormula" element={<ComidaLeuAFormula />} />
          <Route path="/comidaLeuBFormula" element={<ComidaLeuBFormula />} />
          <Route path="/comidaMSUDAFormula" element={<ComidaMSUDAFormula />} />
          <Route path="/comidaMSUDBFormula" element={<ComidaMSUDBFormula />} />
          <Route path="/comidaOAcAformula" element={<ComidaGAcAFormula />} />
          <Route path="/comidaOAcBformula" element={<ComidaGAcBFormula />} />
          <Route path="/comidaPKUAFormula" element={<ComidaPKUAFormula />} />
          <Route
            path="/comidaPKUBFormulaSS"
            element={<ComidaPKUBFormulaSS />}
          />
          <Route path="/PKUBOrangeLemon" element={<ComidaPKUBFormulaLO />} />
          <Route path="/comidaUrCAFormula" element={<ComidaUrCAFormula />} />
          <Route path="/comidaUrCBFormula" element={<ComidaUrCBFormula />} />
          <Route
            path="/GlytactinComplete15"
            element={<GlytactinComplete15 />}
          />
          <Route path="/GlytactinRTD10" element={<GlytactinRTD10 />} />
          <Route path="/GlytactinRTD15" element={<GlytactinRTD15 />} />
          <Route path="/XPheEnergyJ" element={<XPHEEnergyJ />} />
          <Route path="/XPheEnergyK" element={<XPHEEnergyK />} />
          <Route path="/XPheInfantMix" element={<XPHEInfantMixLCP />} />
          <Route path="/XPheJump20" element={<XPheJump20 />} />
          <Route path="/abintra" element={<AbintraLiteratura />} />
          <Route path="/fontup" element={<FontUpLiteratura />} />
          <Route path="/glutapak" element={<GlutapakRLiteratura />} />
          <Route
            path="/CETOMIXcHOCOLATE"
            element={<CetomixvainillayCetomixchocolate />}
          />
          <Route
            path="/CETOMIXvAINILLA"
            element={<CetomixvainillayCetomixchocolate1 />}
          />
          <Route
            path="/KansoDelíMCTCacaoBiscuits"
            element={<KansoDeliMCTCacaoBiscuits />}
          />
          <Route path="/aprotenAnellini" element={<Aproten />} />
          <Route
            path="/aprotenBizcochosdeCacao"
            element={<AprotenBizcochosdeCacao />}
          />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
