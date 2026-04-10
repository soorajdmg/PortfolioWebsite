import { motion } from 'framer-motion'
import {
  FaReact, FaJs, FaPython, FaNodeJs, FaGitAlt, FaCss3Alt, FaDocker, FaHtml5,
  FaCode, FaLayerGroup, FaDatabase, FaWrench,
} from 'react-icons/fa'
import { SiCplusplus, SiMysql, SiMongodb, SiGooglecloud, SiFlask } from 'react-icons/si'
import './Skills.css'

const groups = [
  {
    label: 'Languages',
    color: '#0577dd',
    headerIcon: <FaCode />,
    skills: [
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python',     icon: <FaPython /> },
      { name: 'C++',        icon: <SiCplusplus /> },
      { name: 'SQL',        icon: <SiMysql /> },
      { name: 'HTML',       icon: <FaHtml5 /> },
      { name: 'CSS',        icon: <FaCss3Alt /> },
    ],
  },
  {
    label: 'Tools',
    color: '#fbc529',
    headerIcon: <FaWrench />,
    skills: [
      { name: 'Git',          icon: <FaGitAlt /> },
      { name: 'Docker',       icon: <FaDocker /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
    ],
  },
  {
    label: 'Frameworks',
    color: '#f28b00',
    headerIcon: <FaLayerGroup />,
    skills: [
      { name: 'React',   icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Flask',   icon: <SiFlask /> },
    ],
  },
  {
    label: 'Databases',
    color: '#40b4e5',
    headerIcon: <FaDatabase />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL',   icon: <SiMysql /> },
    ],
  },
]

const coreSkills = ['Problem Solving', 'Attention to Detail', 'Decision Making', 'Team Collaboration']

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

        {/* RIGHT — tag cards */}
        <div className="skills-bands">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skills-band"
              style={{ '--band-color': group.color }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.1 }}
            >
              {/* Card header */}
              <div className="skills-band-header">
                <span className="skills-band-label">{group.label}</span>
              </div>
              {/* Chips */}
              <div className="skills-band-tiles">
                {group.skills.map(({ name, icon }, si) => (
                  <motion.div
                    key={name}
                    className="skill-tile"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: gi * 0.08 + si * 0.055 }}
                    whileHover={{ y: -4, transition: { duration: 0.16 } }}
                  >
                    <span className="skill-tile-icon">{icon}</span>
                    <span className="skill-tile-name">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Core Skills card */}
          <motion.div
            className="skills-band skills-band--core"
            style={{ '--band-color': 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: groups.length * 0.1 }}
          >
            <div className="skills-band-header">
              <span className="skills-band-label">Core Skills</span>
            </div>
            <div className="skills-band-tiles">
              {coreSkills.map((name, si) => (
                <motion.div
                  key={name}
                  className="skill-tile skill-tile--core"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: groups.length * 0.08 + si * 0.055 }}
                  whileHover={{ y: -4, transition: { duration: 0.16 } }}
                >
                  <span className="skill-tile-name">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
