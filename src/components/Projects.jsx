import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
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

export default function Projects() {
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
      </div>
    </section>
  )
}
