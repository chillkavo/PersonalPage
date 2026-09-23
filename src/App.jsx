import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-abyss">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider tone="calm" />
        <About />
        <WaveDivider tone="dynamic" />
        <Experience />
        <WaveDivider tone="dynamic" flip />
        <Projects />
        <WaveDivider tone="calm" />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
