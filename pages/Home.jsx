import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Footer from "../components/Footer"
import Products from "../components/Products"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products/>
      <Services />
      <About />
      <Footer />
    </>
  )
}

export default Home
