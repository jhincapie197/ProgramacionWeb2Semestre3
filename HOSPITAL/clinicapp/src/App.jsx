import Home from "./pages/frontend/home"
import Login from "./pages/frontend/login"
import Register from "./pages/frontend/register"
import NotNofound from "./pages/frontend/notNofound"
import { Routes,Route } from "react-router-dom"
import Hero from "./pages/frontend/hero"
import AboutSection from "./pages/frontend/aboutSection"
import Dashboard from "./pages/frontend/dashboard"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotNofound />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/aboutSection" element={<AboutSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
