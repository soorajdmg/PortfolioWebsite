import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const chips = ['React', 'Python', 'Machine Learning', 'UI/UX', 'Node.js', 'Figma']

const stats = [
  { target: 20, suffix: '+', label: 'Projects built' },
  { target: 4,  suffix: '+', label: 'Years coding' },
  { target: null, display: '∞', label: 'Cups of tea' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function CountUp({ target, suffix, duration = 1200 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          // ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">

        <motion.div
          className="about-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="about-eyebrow">who am i?</span>
          <h2 className="about-heading">Just a dev who<br />cares about craft.</h2>
          <div className="about-chips">
            {chips.map(c => <span className="about-chip" key={c}>{c}</span>)}
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.15 }}
        >
          <div className="about-bio">
            <p>
              I'm a developer from Kerala who cares more about the{''}
              <span className="about-mark">
                feeling
                <svg className="about-mark-underline" viewBox="0 0 72 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 5.5 C12 2, 28 7, 44 4 C56 2, 64 6, 70 4.5" stroke="var(--accent-orange)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
              {''}of a product than just shipping it.
            </p>
            <p>
              I work across the full stack - React and Node.js mostly, Python when the problem calls for it. I pay close attention to the details that make an interface feel polished and intentional.
            </p>
            <p>
              Currently open to internships and collaborative projects.
            </p>
          </div>

          <div className="about-stats">
            {stats.map(({ target, suffix, display, label }) => (
              <div className="about-stat" key={label}>
                <span className="about-stat-value">
                  {display
                    ? display
                    : <CountUp target={target} suffix={suffix} />
                  }
                </span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
