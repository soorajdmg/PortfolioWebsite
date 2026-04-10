import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ColourStrip from './components/ColourStrip'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import PageLoader from './components/PageLoader'
import ThemeRipple from './components/ThemeRipple'
import { LayoutGroup } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import { useLenis } from './hooks/useLenis'
import { LenisContext } from './context/LenisContext'

function App() {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useLenis()

  // null = default warm palette; a string like 'blue' | 'yellow' | 'orange' | 'sky' = themed
  const [theme, setTheme] = useState(null)
  const [pendingRipple, setPendingRipple] = useState(null)

  // Apply data-theme to <html> so all CSS variable overrides cascade from :root
  useEffect(() => {
    const html = document.documentElement
    if (theme) {
      html.setAttribute('data-theme', theme)
    } else {
      html.removeAttribute('data-theme')
    }
  }, [theme])

  const handleThemeClick = useCallback((ripple) => {
    setPendingRipple(ripple)
  }, [])

  const handleRippleDone = useCallback((newTheme) => {
    setTheme(newTheme)
    setPendingRipple(null)
  }, [])

  return (
    <LenisContext.Provider value={lenisRef}>
      <LayoutGroup>
        <PageLoader onDone={() => setLoaded(true)} />
        <CursorGlow />
        <ThemeRipple ripple={pendingRipple} onDone={handleRippleDone} />
        <Navbar logoVisible={loaded} />
        <main>
          <Hero />
          <SectionDivider fromColor="#fef3e2" toColor="var(--bg-secondary)" />
          <About />
          <SectionDivider fromColor="var(--bg-secondary)" toColor="var(--bg-primary)" layered />
          <ColourStrip onThemeClick={handleThemeClick} />
          <Projects />
          <SectionDivider />
          <Skills />
          <SectionDivider fromColor="var(--bg-secondary)" toColor="var(--bg-primary)" />
          <Certificates />
          <SectionDivider fromColor="var(--bg-primary)" toColor="var(--bg-secondary)" />
          <ContactPage />
        </main>
        <Footer />
      </LayoutGroup>
    </LenisContext.Provider>
  )
}

export default App
