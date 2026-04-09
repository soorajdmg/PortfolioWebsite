import { motion } from 'framer-motion'
import FloatingShapes from './FloatingShapes'
import illustration from '../assets/images/pro-me.png'
import useMagnet from '../hooks/useMagnet'
import { useLenisContext } from '../context/LenisContext'
import './Hero.css'

export default function Hero() {
  const magnetPrimary = useMagnet(12)
  const magnetSecondary = useMagnet(12)
  const lenisRef = useLenisContext()

  function scrollToProjects() {
    const el = document.getElementById('projects')
    if (el) lenisRef.current?.scrollTo(el, { offset: -80 })
  }

  function scrollToContact() {
    const el = document.getElementById('contact')
    if (el) lenisRef.current?.scrollTo(el, { offset: -80 })
  }

  return (
    <section className="hero" id="home">
      <FloatingShapes />
      <div className="hero-container container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="hero-heading">
            <span className="hero-hi">Hi, I'm</span>
            <span className="name-highlight">Sooraj<br />Murugaraj</span>
            <svg className="name-underline" viewBox="0 0 320 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12 C60 4, 140 16, 220 8 C270 3, 300 14, 316 10" stroke="var(--accent-yellow)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </h1>

          <p className="hero-sub">
            Developer who loves building things that look good and work well.
          </p>

          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              ref={magnetPrimary.ref}
              onMouseMove={magnetPrimary.onMouseMove}
              onMouseLeave={magnetPrimary.onMouseLeave}
              onClick={scrollToProjects}
            >View Projects</button>
            <button
              className="btn btn-secondary"
              ref={magnetSecondary.ref}
              onMouseMove={magnetSecondary.onMouseMove}
              onMouseLeave={magnetSecondary.onMouseLeave}
              onClick={scrollToContact}
            >Say Hello</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="illustration-wrapper">
            <img src={illustration} alt="Sooraj illustration" className="illustration-img" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
