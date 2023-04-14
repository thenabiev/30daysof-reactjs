import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import Page404 from './pages/404'

function App() {

  return (
    <div>
     <BrowserRouter>
       <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Menu />} path="/menu" />
        <Route element={<Page404 />} path="*" />
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
