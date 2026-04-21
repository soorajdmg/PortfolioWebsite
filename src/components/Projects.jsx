import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import projectMe from '../assets/images/project-me.png'
import './Projects.css'

const projects = [
  {
    title: 'GitLife',
    description: 'Lets you commit choices, create branches for "what if" scenarios, and visualize life as a commit history graph. Features decision commits, branching, a graphical timeline, and community engagement.',
    tags: ['React.js', 'Node.js', 'Firebase'],
    githubUrl: 'https://github.com/soorajdmg/gitlife',
  },
  {
    title: 'StudAI',
    description: 'Personalized learning platform with scientific assessments, adaptive tests, stress management tools (Pomodoro, guided breathing), progress analytics, and AI-powered study coaching.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Gemini AI'],
    githubUrl: 'https://github.com/soorajdmg/studai',
    liveUrl: 'https://studai-ewc9.onrender.com/',
  },
  {
    title: 'Beyond2048',
    description: 'Expands on the classic puzzle game with enhanced gameplay mechanics, user accounts, customizable themes, global leaderboards, smooth animations, and persistent progress.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/soorajdmg/beyond2048',
    liveUrl: 'https://beyond2048-frontend.onrender.com/',
  },
  {
    title: 'NuGame',
    description: 'A web app that rewards gamers with cryptocurrency for in-game achievements. Players earn GameTokens by completing challenges, powered by Ethereum smart contracts and Steam API data.',
    tags: ['React.js', 'Node.js', 'Solidity', 'Ethers.js', 'Steam API'],
    githubUrl: 'https://github.com/soorajdmg/NuGame',
    liveUrl: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function MobileProjectTile({ project, index, isOpen, onToggle }) {
  return (
    <motion.div
      className="mobile-tile"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        className={`mobile-tile-header ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="mobile-tile-title">{project.title}</span>
        <FaChevronDown className={`mobile-tile-chevron ${isOpen ? 'rotated' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="mobile-tile-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mobile-tile-inner">
              <p className="mobile-tile-desc">{project.description}</p>
              <div className="mobile-tile-tags">
                {project.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="mobile-tile-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                    <FaGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">things i've built</span>
          <h2 className="section-title">Projects.</h2>
        </motion.div>

        {/* Desktop / tablet grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(project => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile two-column layout */}
        <div className="projects-mobile">
          <div className="projects-mobile-image">
            <div className="projects-mobile-image-wrap">
              <img src={projectMe} alt="Sooraj" />
            </div>
          </div>
          <div className="projects-mobile-tiles">
            {projects.map((project, i) => (
              <MobileProjectTile
                key={project.title}
                project={project}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
