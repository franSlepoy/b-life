import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/home/Home"
import NavBar from "./components/common/navBar/NavBar"




function App() {
  

  return (
    <>

      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
    </>
  )
}

export default App
