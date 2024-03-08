import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/common/navBar/NavBar";
import { ParallaxProvider } from "react-scroll-parallax"; // Importa ParallaxProvider aquí

function App() {
  return (
    <>
      <ParallaxProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
