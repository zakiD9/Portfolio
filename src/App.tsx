import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Header'
import HeroSection from './components/heroSection/HeroSection'
import HireMe from './components/HireMeSection'
import Projects from './components/Projects'
import ServicesSection from './components/ServicesSection/ServicesSection'
import Testimonials from './components/Testimonials'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div className="relative min-h-screen items-center w-full flex flex-col justify-start">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WorkExperience />
    <HireMe />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
    
  )
}

export default App
