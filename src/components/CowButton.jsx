import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import resumePdf from '../assets/docs/sooraj-resume.pdf'
import happyCow from '../assets/images/cow/happycow-card.png'
import lookingCow from '../assets/images/cow/lookingcow-card.png'
import './CowButton.css'

// x, y offsets — fanned above the cow
const bubbles = [
  { label: 'Resume', href: resumePdf, bg: '#fbc529', color: '#1a1a1a', x: 25, y: -130 },
  { label: 'WhatsApp', href: 'https://wa.me/919846249930', bg: '#25d366', color: '#fff', x: 25, y: -175 },
  { label: 'Email', href: 'mailto:soorajmurugaraj@gmail.com', bg: '#0577dd', color: '#fff', x: 25, y: -220 },
]

export default function CowButton() {
  const [open, setOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!open) { setVisibleCount(0); return }
    let count = 0
    const interval = setInterval(() => {
      count++
      setVisibleCount(count)
      if (count >= bubbles.length) clearInterval(interval)
    }, 180)
    return () => clearInterval(interval)
  }, [open])

  return (
    <div className="cow-float">
      {/* Fanned bubbles */}
      <AnimatePresence>
        {open && bubbles.slice(0, visibleCount).map((b, i) => (
          <motion.a
            key={i}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cow-bubble"
            style={{ background: b.bg, color: b.color }}
            initial={{ opacity: 0, x: b.x, y: 0, scale: 0.5 }}
            animate={{ opacity: 1, x: b.x, y: b.y, scale: 1 }}
            exit={{ opacity: 0, x: b.x, y: 0, scale: 0.5 }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={e => e.stopPropagation()}
          >
            {b.label}
          </motion.a>
        ))}
      </AnimatePresence>

      {/* Cow button */}
      <motion.button
        className="cow-btn"
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={open ? { rotate: [0, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
        aria-label="Cow button"
      >
        <img
          src={open ? lookingCow : happyCow}
          alt="cow"
          className="cow-img"
        />
      </motion.button>
    </div>
  )
}
