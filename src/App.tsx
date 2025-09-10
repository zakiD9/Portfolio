import './App.css'
import Navbar from './components/Header'
import HeroSection from './components/heroSection/HeroSection'
import ProjectsSection from './components/projectssection/ProjectsSection'
import ServicesSection from './components/ServicesSection/ServicesSection'

function App() {

  return (
    <div className="relative min-h-screen w-full py-10 flex flex-col items-center justify-start">
    <Navbar />
  <section id="home">
    <HeroSection />
  </section>
  <section id="Services">
    <ServicesSection />
  </section>
  <section id="projects" className="min-h-screen">
    <ProjectsSection />
  </section>
</div>
    
  )
}

export default App
