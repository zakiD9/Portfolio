import './App.css'
import Navbar from './components/Header'
import HeroSection from './components/heroSection/HeroSection'
import HireMe from './components/HireMeSection'
import Projects from './components/Projects'
import ServicesSection from './components/ServicesSection/ServicesSection'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WorkExperience />
    <HireMe />
    <Projects />
    </div>
    
  )
}

export default App
