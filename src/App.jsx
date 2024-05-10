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
import AprotenBizcochosdeFruta from "./components/pages/detallesProductos/eCon/alimentos/AprotenBizcochosdeFruta";
import AprotenBizcochosdeVainilla from "./components/pages/detallesProductos/eCon/alimentos/aprotenBizcochosdeVainilla";
import AprotenChicci from "./components/pages/detallesProductos/eCon/alimentos/AprotenChicci";
import AprotenFetasTostadas from "./components/pages/detallesProductos/eCon/alimentos/AprotenFetasTostadas";
import Fusilli from "./components/pages/detallesProductos/eCon/alimentos/Fusilli";
import AprotenFrollinoAllaPanna from "./components/pages/detallesProductos/eCon/alimentos/AprotenFrollinoAllaPanna";
import AprotenFrollinoGocceDiCioccolato from "./components/pages/detallesProductos/eCon/alimentos/AprotenFrollinoGocceDiCioccolato";
import AprotenGrissini from "./components/pages/detallesProductos/eCon/alimentos/AprotenGrissini";
import AprotenHarina from "./components/pages/detallesProductos/eCon/alimentos/AprotenHarina";
import AprotenObleasDeChocholate from "./components/pages/detallesProductos/eCon/alimentos/AprotenObleasDeChocholate";
import AprotenObleasDeVainilla from "./components/pages/detallesProductos/eCon/alimentos/AprotenObleasDeVainilla";
import AprotenPanBizcochado from "./components/pages/detallesProductos/eCon/alimentos/AprotenPanBizcochado";
import Penne from "./components/pages/detallesProductos/eCon/alimentos/Penne";
import Rigatini from "./components/pages/detallesProductos/eCon/alimentos/Rigatini";
import AprotenSpaguetti from "./components/pages/detallesProductos/eCon/alimentos/AprotenSpaguetti";
import AprotenTagliatelle from "./components/pages/detallesProductos/eCon/alimentos/AprotenTagliatelle";
import Freechees from "./components/pages/detallesProductos/eCon/alimentos/Freechees";
import FreegurFrutilla from "./components/pages/detallesProductos/eCon/alimentos/FreegurFrutilla";
import FreegurVainilla from "./components/pages/detallesProductos/eCon/alimentos/FreegurVainilla";
import FreeMilk from "./components/pages/detallesProductos/eCon/alimentos/FreeMilk";
import FreenitoChocolate from "./components/pages/detallesProductos/eCon/alimentos/FreenitoChocolate";
import FreenitoVainilla from "./components/pages/detallesProductos/eCon/alimentos/FreenitoVainilla";
import BurgerMix from "./components/pages/detallesProductos/eCon/alimentos/BurgerMix";
import SaltSticks from "./components/pages/detallesProductos/eCon/alimentos/SaltSticks";
import SchoxxiTafel from "./components/pages/detallesProductos/eCon/alimentos/SchoxxiTafel";
import Arroz from "./components/pages/detallesProductos/eCon/alimentos/Arroz";
import BurgerMix1 from "./components/pages/detallesProductos/eCon/alimentos/BurgerMix1";
import Chocotino from "./components/pages/detallesProductos/eCon/alimentos/Chocotino";
import Ditali from "./components/pages/detallesProductos/eCon/alimentos/Ditali";
import FruitBar from "./components/pages/detallesProductos/eCon/alimentos/fruitBar";
import Penne1 from "./components/pages/detallesProductos/eCon/alimentos/Penne1";
import Spaghetti from "./components/pages/detallesProductos/eCon/alimentos/Spaghetti";
import ZeroproMuffinsyTortas from "./components/pages/detallesProductos/eCon/alimentos/ZeroproMuffinsyTortas";
import GalletasMarineras from "./components/pages/detallesProductos/eCon/alimentos/GalletasMarineras";
import SustitutoDeHuevo from "./components/pages/detallesProductos/eCon/alimentos/SustitutoDeHuevo";
import SustitutoDeQueso from "./components/pages/detallesProductos/eCon/alimentos/SustitutoDeQueso";
import ZeroproBrownies from "./components/pages/detallesProductos/eCon/alimentos/ZeroproBrownies";
import SustitutoDeHarina from "./components/pages/detallesProductos/eCon/alimentos/SustitutoDeHarina";

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
          <Route
            path="/aprotenBizcochosdeFruta"
            element={<AprotenBizcochosdeFruta />}
          />
          <Route
            path="/aprotenBizcochosdeVainilla"
            element={<AprotenBizcochosdeVainilla />}
          />
          <Route path="/aprotenChicci" element={<AprotenChicci />} />
          <Route
            path="/aprotenFetasTostadas"
            element={<AprotenFetasTostadas />}
          />
          <Route path="/fusilli" element={<Fusilli />} />
          <Route
            path="/aprotenFrollinoAllaPanna"
            element={<AprotenFrollinoAllaPanna />}
          />
          <Route
            path="/aprotenFrollinoGocceDiCioccolato"
            element={<AprotenFrollinoGocceDiCioccolato />}
          />
          <Route path="/aprotenGrissini" element={<AprotenGrissini />} />
          <Route path="/aprotenHarina" element={<AprotenHarina />} />
          <Route
            path="/aprotenObleasDeChocholate"
            element={<AprotenObleasDeChocholate />}
          />
          <Route
            path="/aprotenObleasDeVainilla"
            element={<AprotenObleasDeVainilla />}
          />
          <Route
            path="/aprotenPanBizcochado"
            element={<AprotenPanBizcochado />}
          />
          <Route path="/penne" element={<Penne />} />
          <Route path="/rigatini" element={<Rigatini />} />
          <Route path="/aprotenSpaguetti" element={< AprotenSpaguetti/>} />
          <Route path="/aprotenTagliatelle" element={< AprotenTagliatelle/>} />
          <Route path="/freechees" element={< Freechees />} />
          <Route path="/freegurFrutilla" element={< FreegurFrutilla />} />
          <Route path="/freegurVainilla" element={< FreegurVainilla />} />
          <Route path="/freeMilk" element={< FreeMilk />} />
          <Route path="/freenitoChocolate" element={< FreenitoChocolate />} />
          <Route path="/freenitoVainilla" element={< FreenitoVainilla />} />
          <Route path="/burgerMix" element={< BurgerMix />} />
          <Route path="/saltSticks" element={< SaltSticks />} />
          <Route path="/schoxxiTafel" element={< SchoxxiTafel />} />
          <Route path="/arroz" element={< Arroz />} />
          <Route path="/BurgerMix1" element={< BurgerMix1 />} />
          <Route path="/chocotino" element={< Chocotino />} />
          <Route path="/ditali" element={< Ditali />} />
          <Route path="/fruitBar" element={< FruitBar />} />
          <Route path="/penne1" element={< Penne1 />} />
          <Route path="/spaghetti" element={< Spaghetti />} />
          <Route path="/zeroproMuffinsyTortas" element={< ZeroproMuffinsyTortas />} />
          <Route path="/galletasMarineras" element={< GalletasMarineras />} />
          <Route path="/sustitutoDeHuevo" element={< SustitutoDeHuevo />} />
          <Route path="/sustitutoDeQueso" element={< SustitutoDeQueso />} />
          <Route path="/zeroproBrownies" element={< ZeroproBrownies />} />
          <Route path="/sustitutoDeHarina" element={< SustitutoDeHarina />} />
       
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
