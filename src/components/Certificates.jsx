import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import './Certificates.css'
import cert1 from '../assets/images/certificates/csir.jpg'
import cert2 from '../assets/images/certificates/tata.jpg'
import cert3 from '../assets/images/certificates/nptel.jpg'
import cert4 from '../assets/images/certificates/keltron.jpg'
import cert5 from '../assets/images/certificates/ibm.jpg'
import cert6 from '../assets/images/certificates/ibmai.jpg'
import cert7 from '../assets/images/certificates/ibmproject.jpg'

const certificates = [
  {
    id: 1,
    title: 'AI Research & Development Intern',
    issuer: 'CSIR - NIIST',
    date: '2025',
    category: 'internship',
    size: 'wide',
    image: cert1,
  },
  {
    id: 2,
    title: 'Student Intern',
    issuer: 'IBM',
    date: '2024',
    category: 'internship',
    size: 'tall',
    image: cert5,
  },
  {
    id: 3,
    title: 'Data Science & AI Intern',
    issuer: 'KELTRON Advanced Studies',
    date: '2024',
    category: 'internship',
    size: 'small',
    image: cert4,
  },
  {
    id: 4,
    title: 'Data Visualization',
    issuer: 'TATA',
    date: '2025',
    category: 'skills',
    size: 'small',
    image: cert2,
  },
  {
    id: 5,
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    date: 'June 2024',
    category: 'skills',
    size: 'wide',
    image: cert6,
  },
  {
    id: 6,
    title: 'Advanced Computer Networks',
    issuer: 'NPTEL',
    date: 'January 2025',
    category: 'skills',
    size: 'small',
    image: cert3,
  },
  // {
  //   id: 7,
  //   title: 'Project Management Fundamentals',
  //   issuer: 'IBM',
  //   date: 'July 2024',
  //   category: 'skills',
  //   size: 'small',
  //   image: cert7,
  // },
]

const INITIAL_COUNT = 4

export default function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? certificates : certificates.slice(0, INITIAL_COUNT)

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
          <AnimatePresence initial={false}>
            {visible.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className={`bento-card bento-${cert.size}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="bento-content">
                  <div className="bento-tags">
                    <span className={`bento-tag bento-tag--${cert.category}`}>
                      {cert.category === 'skills' ? 'Skill' : 'Internship'}
                    </span>
                  </div>
                  <h3 className="bento-title">{cert.title}</h3>
                  <p className="bento-issuer">{cert.issuer}</p>
                  <div className="bento-footer">
                    <span className="bento-date">{cert.date}</span>
                    <span className="bento-credential-link">
                      View Credential <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {certificates.length > INITIAL_COUNT && (
          <div className="certs-toggle-wrap">
            <button className="certs-toggle-btn" onClick={() => setShowAll(v => !v)}>
              {showAll ? (
                <><ChevronUp size={15} /> show less</>
              ) : (
                <><ChevronDown size={15} /> {certificates.length - INITIAL_COUNT} more certificates</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
