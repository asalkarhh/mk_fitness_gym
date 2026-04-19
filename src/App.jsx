import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Branches from './components/Branches.jsx'
import Services from './components/Services.jsx'
import Plans from './components/Plans.jsx'
import FranchisePage from './components/FranchisePage.jsx'
import Transformations from './components/Transformations.jsx'
import Trainers from './components/Trainers.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import BranchPage from './components/BranchPage.jsx'

function HomePage() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Branches />
        <Services />
        <Transformations />
        <Trainers />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
    const timeout = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/branch/:branchId" element={<BranchPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
    </Routes>
  )
}

export default App
