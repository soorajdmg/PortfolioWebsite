import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import PoseStrip from './components/PoseStrip'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import CowButton from './components/CowButton'
import PageLoader from './components/PageLoader'
import { LayoutGroup } from 'framer-motion'
import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { LenisContext } from './context/LenisContext'

function App() {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useLenis()

  return (
    <LenisContext.Provider value={lenisRef}>
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
          <SectionDivider fromColor="var(--bg-primary)" toColor="var(--bg-secondary)" />
          <ContactPage />
        </main>
        <Footer />
        <CowButton />
      </LayoutGroup>
    </LenisContext.Provider>
  )
}

export default App
