import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFileAlt,
} from 'react-icons/fa'
import './ContactPage.css'

const cards = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    sub: 'soorajmurugaraj@gmail.com',
    href: 'mailto:soorajmurugaraj@gmail.com',
    bg: '#f28b00',
    color: '#fff',
    rotate: -12,
    x: -260,
    y: 30,
    z: 1,
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    sub: '/in/soorajmurugaraj',
    href: 'https://linkedin.com/in/soorajmurugaraj',
    bg: '#0577dd',
    color: '#fff',
    rotate: -6,
    x: -130,
    y: 10,
    z: 2,
  },
  {
    icon: <FaFileAlt />,
    label: 'Resume',
    sub: 'View / Download CV',
    href: '/resume.pdf',
    bg: '#fbc529',
    color: '#1a1a1a',
    rotate: 0,
    x: 0,
    y: 0,
    z: 3,
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter / X',
    sub: '@soorajdmg',
    href: 'https://x.com/soorajdmg',
    bg: '#40b4e5',
    color: '#fff',
    rotate: 6,
    x: 130,
    y: 10,
    z: 2,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    sub: 'github.com/soorajdmg',
    href: 'https://github.com/soorajdmg',
    bg: '#1a1a1a',
    color: '#fff',
    rotate: 12,
    x: 260,
    y: 30,
    z: 1,
  },
]

export default function ContactPage() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="contact" className="contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">let's connect</span>
          <h2 className="section-title">Contact.</h2>
        </motion.div>

        <div className="cp-fan">
          {cards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="cp-card"
              style={{
                background: card.bg,
                color: card.color,
                zIndex: hovered === i ? 10 : card.z,
              }}
              initial={{ opacity: 0, y: 60, rotate: card.rotate, x: card.x }}
              whileInView={{ opacity: 1, y: card.y, rotate: card.rotate, x: card.x }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              animate={{
                rotate: hovered === i ? 0 : card.rotate,
                y: hovered === i ? -28 : card.y,
                x: card.x,
                scale: hovered === i ? 1.06 : 1,
              }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <div className="cp-card-icon">{card.icon}</div>
              <div className="cp-card-body">
                <span className="cp-card-label">{card.label}</span>
                <span className="cp-card-sub">{card.sub}</span>
              </div>
              <span className="cp-card-arrow">↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
