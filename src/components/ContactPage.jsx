import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
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
    rotate: 6,
    y: 0,
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    sub: '/in/soorajmurugaraj',
    href: 'https://linkedin.com/in/soorajmurugaraj',
    bg: '#0577dd',
    color: '#fff',
    rotate: -6,
    y: 50,
  },
  {
    icon: <FaFileAlt />,
    label: 'Resume',
    sub: 'View / Download CV',
    href: '/resume.pdf',
    bg: '#fbc529',
    color: '#1a1a1a',
    rotate: 5,
    y: -20,
    x: -30,
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter / X',
    sub: '@soorajdmg',
    href: 'https://x.com/soorajdmg',
    bg: '#40b4e5',
    color: '#fff',
    rotate: -5,
    y: 20,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    sub: 'github.com/soorajdmg',
    href: 'https://github.com/soorajdmg',
    bg: '#1a1a1a',
    color: '#fff',
    rotate: 6,
    y: 10,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ContactPage() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="contact" className="contact-page">
      <motion.div
        className="cp-fan"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
              zIndex: hovered === i ? 10 : i,
            }}
            variants={{
              hidden: { opacity: 0, y: 60, x: card.x ?? 0, rotate: card.rotate },
              visible: { opacity: 1, y: card.y, x: card.x ?? 0, rotate: card.rotate, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            whileHover={{
              rotate: 0,
              y: card.y - 28,
              scale: 1.05,
              transition: { duration: 0.25, ease: 'easeOut' },
            }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
          >
            <div className="cp-card-icon">{card.icon}</div>
            <div className="cp-card-body">
              <span className="cp-card-label">{card.label}</span>
              <span className="cp-card-sub">{card.sub}</span>
            </div>
            <ArrowUpRight className="cp-card-arrow" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
