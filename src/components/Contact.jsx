import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import useMagnet from '../hooks/useMagnet'
import './Contact.css'

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: 'https://twitter.com/', label: 'Twitter/X' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const magnetSubmit = useMagnet(10)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', form)
    // TODO: wire up to email service (e.g. EmailJS, Formspree)
    alert('Message sent! (placeholder)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">let's talk</span>
          <h2 className="section-title">Get in touch.</h2>
        </motion.div>

        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                placeholder="What's on your mind?"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              ref={magnetSubmit.ref}
              onMouseMove={magnetSubmit.onMouseMove}
              onMouseLeave={magnetSubmit.onMouseLeave}
            >Send Message</button>
          </form>

          <div className="social-links">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
