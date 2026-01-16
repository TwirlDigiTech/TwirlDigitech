import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Vision from "./pages/Vision"
import ContactPage from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App