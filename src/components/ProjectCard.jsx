import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectCard.css'

export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5   // -0.5 to 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transform = `perspective(600px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-4px)`
    card.style.transition = 'transform 0.1s ease'
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  }

  return (
    <div
      className="project-card"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-links">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}>
            <FaGithub />
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`}>
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  )
}
