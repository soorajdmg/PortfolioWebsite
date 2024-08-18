import React from 'react';
import './projectmodal.css';  // Ensure to add your modal-specific styles here

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} className="modalImage" />
                <p>{project.fullDescription}</p>
                {project.technologies && (
                    <div className="technologies">
                        <h4>Technologies Used:</h4>
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* {project.link && (
                    <a href={project.link} className="projectLink" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                )} */}
            </div>
        </div>
    );
};

export default ProjectModal;
