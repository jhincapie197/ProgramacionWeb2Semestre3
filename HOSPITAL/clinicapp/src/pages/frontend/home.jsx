import Header from "../../components/frontend/header"
import Footer from "../../components/frontend/footer"
import { Link } from "react-router-dom"
import Hero from "./hero"
import AboutSection from "./aboutSection"

export default function Home() {
  return (
    <>
      <Header />
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <h1>Welcome to Medilab</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
              <Link to="/login" className="btn-get-started scrollto">Pedir Cita</Link>
          </div>
        </section>  
        <Hero/>
        <AboutSection/>  

      <Footer />
    </>
  )
}
