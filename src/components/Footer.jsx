import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/soorajdmg', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/soorajmurugaraj', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: 'https://x.com/soorajdmg', label: 'Twitter / X' },
  { icon: <FaEnvelope />, href: 'mailto:soorajmurugaraj@gmail.com', label: 'soorajmurugaraj@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">Sooraj<span className="footer-logo-dot">.</span></span>
          <p className="footer-tagline">Crafting thoughtful software, one commit at a time.</p>
        </div>

        <div className="footer-right">
          <p className="footer-contact-heading">Get in touch</p>
          <ul className="footer-socials">
            {socials.map(({ icon, href, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Sooraj Murugaraj - Software Developer &amp; Designer</p>
        </div>
      </div>
    </footer>
  )
}
