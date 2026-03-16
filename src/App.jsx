
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import About from "./pages/About"
import Menu from "./components/Menu"

function App(){
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
