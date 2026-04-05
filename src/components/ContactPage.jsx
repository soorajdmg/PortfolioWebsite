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

const contactMethods = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'soorajmurugaraj@gmail.com',
    href: 'mailto:soorajmurugaraj@gmail.com',
    description: 'Best for project inquiries & opportunities',
    accent: 'orange',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/soorajmurugaraj',
    href: 'https://linkedin.com/in/soorajmurugaraj',
    description: 'Connect professionally',
    accent: 'blue',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/soorajdmg',
    href: 'https://github.com/soorajdmg',
    description: 'See my open-source work',
    accent: 'dark',
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter / X',
    value: '@soorajdmg',
    href: 'https://x.com/soorajdmg',
    description: 'Quick thoughts & updates',
    accent: 'sky',
  },
  {
    icon: <FaFileAlt />,
    label: 'Resume',
    value: 'View / Download CV',
    href: '/resume.pdf',
    description: 'Full work history & skills',
    accent: 'yellow',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('soorajmurugaraj@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

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

        <div className="contact-page-grid">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`contact-card contact-card--${method.accent}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="contact-card-icon">{method.icon}</div>
              <div className="contact-card-body">
                <span className="contact-card-label">{method.label}</span>
                <span className="contact-card-value">{method.value}</span>
                <span className="contact-card-desc">{method.description}</span>
              </div>
              <div className="contact-card-arrow">↗</div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="contact-page-email-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="email-bar-label">Or just copy the email</span>
          <div className="email-bar-row">
            <span className="email-bar-address">soorajmurugaraj@gmail.com</span>
            <button
              className={`email-bar-copy ${copied ? 'copied' : ''}`}
              onClick={copyEmail}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
