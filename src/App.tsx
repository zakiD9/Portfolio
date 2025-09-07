import './App.css'
import Header from './components/Header'
import HeroSection from './components/heroSection/HeroSection'
import ProjectsSection from './components/projectssection/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {

  return (
    <>
    <Header />
    <div className='flex flex-col gap-10'>
  <section id="home" className="min-h-screen">
    <HeroSection />
  </section>
  <section id="skills">
    <SkillsSection />
  </section>
  <section id="projects" className="min-h-screen">
    <ProjectsSection />
  </section>
</div>

    </>
    
  )
}

export default App
