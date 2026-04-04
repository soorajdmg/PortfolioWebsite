import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import PoseStrip from './components/PoseStrip'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import CowButton from './components/CowButton'
import PageLoader from './components/PageLoader'
import { LayoutGroup } from 'framer-motion'
import { useState } from 'react'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <LayoutGroup>
      <PageLoader onDone={() => setLoaded(true)} />
      <CursorGlow />
      <Navbar logoVisible={loaded} />
      <main>
        <Hero />
        <SectionDivider fromColor="#fef3e2" toColor="var(--bg-secondary)" />
        <About />
        <SectionDivider fromColor="var(--bg-secondary)" toColor="var(--bg-primary)" layered />
        <PoseStrip />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider fromColor="var(--bg-secondary)" toColor="var(--bg-primary)" />
        <Certificates />
      </main>
      <Footer />
      <CowButton />
    </LayoutGroup>
  )
}

export default App
