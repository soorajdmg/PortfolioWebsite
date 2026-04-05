import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLenisContext } from '../context/LenisContext'
import './Navbar.css'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar({ logoVisible = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lenisRef = useLenisContext()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120
      let current = ''
      navLinks.forEach(({ to }) => {
        const el = document.getElementById(to)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollY >= top && scrollY < bottom) current = to
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) lenisRef.current?.scrollTo(el, { offset: -80 })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {logoVisible && (
          <motion.span
            layoutId="site-logo"
            className="nav-logo"
          >
            Sooraj<span className="logo-dot">.</span>
          </motion.span>
        )}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <button
                className={activeSection === to ? 'active' : ''}
                onClick={() => scrollTo(to)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
