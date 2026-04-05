import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './Certificates.css'

const certificates = [
  {
    title: 'Placeholder Certificate',
    issuer: 'Issuing Organisation',
    date: 'Month Year',
    credentialUrl: 'youtube.com',
    type: 'skill',
    tags: ['React', 'Node.js'],
    size: 'wide',
  },
  {
    title: 'Placeholder Certificate',
    issuer: 'Issuing Organisation',
    date: 'Month Year',
    credentialUrl: 'https://www.youtube.com',
    type: 'internship',
    tags: ['Web Dev'],
    size: 'tall',
  },
  {
    title: 'Placeholder Certificate',
    issuer: 'Issuing Organisation',
    date: 'Month Year',
    credentialUrl: '#',
    type: 'skill',
    tags: ['Python', 'ML'],
    size: 'normal',
  },
  {
    title: 'Placeholder Certificate',
    issuer: 'Issuing Organisation',
    date: 'Month Year',
    credentialUrl: '#',
    type: 'skill',
    tags: ['Cloud'],
    size: 'normal',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">what i've earned</span>
          <h2 className="section-title">Certificates.</h2>
        </motion.div>

        <div className="bento-grid">
          {certificates.map((cert, i) => {
            const hasLink = cert.credentialUrl && cert.credentialUrl !== '#'
            return (
              <motion.div
                key={i}
                className={`bento-card bento-${cert.size}`}
                style={{ '--card-accent': cert.accent }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="bento-content">
                  <h3 className="bento-title">{cert.title}</h3>
                  <p className="bento-issuer">{cert.issuer}</p>
                  <div className="bento-tags">
                    <span className={`bento-tag bento-tag--${cert.type}`}>
                      {cert.type === 'skill' ? 'Skill' : 'Internship'}
                    </span>
                    {cert.tags.map(tag => (
                      <span className={`bento-tag bento-tag--${cert.type}`} key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="bento-footer">
                    <span className="bento-date">{cert.date}</span>
                    {hasLink && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bento-credential-link"
                        onClick={e => e.stopPropagation()}
                      >
                        View Credential <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
