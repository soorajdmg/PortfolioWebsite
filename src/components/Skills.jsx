import { motion } from 'framer-motion'
import {
  FaReact, FaJs, FaPython, FaNodeJs, FaGitAlt, FaCss3Alt, FaFigma, FaDocker, FaHtml5,
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiTailwindcss, SiFlask } from 'react-icons/si'
import './Skills.css'

const groups = [
  {
    label: 'Frontend',
    color: '#0577dd',
    skills: [
      { name: 'React',      icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML',       icon: <FaHtml5 /> },
      { name: 'CSS',        icon: <FaCss3Alt /> },
      { name: 'Tailwind',   icon: <SiTailwindcss /> },
    ],
  },
  {
    label: 'Backend',
    color: '#f28b00',
    skills: [
      { name: 'Node.js',  icon: <FaNodeJs /> },
      { name: 'Python',   icon: <FaPython /> },
      { name: 'Flask',    icon: <SiFlask /> },
      { name: 'MongoDB',  icon: <SiMongodb /> },
    ],
  },
  {
    label: 'Tools',
    color: '#fbc529',
    skills: [
      { name: 'Git',    icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Figma',  icon: <FaFigma /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills-container">

        {/* LEFT — sticky heading, unchanged */}
        <motion.div
          className="skills-heading-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">what i work with</span>
          <h2 className="skills-heading">My stack.</h2>
        </motion.div>

        {/* RIGHT — icon tile bands */}
        <div className="skills-bands">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skills-band"
              style={{ '--band-color': group.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {/* Watermark label */}
              <span className="skills-band-watermark" aria-hidden="true">
                {group.label}
              </span>

              {/* Category label */}
              <span className="skills-band-label">{group.label}</span>

              {/* Tiles */}
              <div className="skills-band-tiles">
                {group.skills.map(({ name, icon }, si) => (
                  <motion.div
                    key={name}
                    className="skill-tile"
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.06 }}
                    whileHover={{ y: -6, transition: { duration: 0.18 } }}
                  >
                    <span className="skill-tile-icon">{icon}</span>
                    <span className="skill-tile-name">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
