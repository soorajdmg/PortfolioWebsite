import React, { useState } from 'react';
import './work.css';
import projects from '../data/projectData';
import ProjectModal from './projectmodal';

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="work">
            <div className="divider"></div>
            <div className="workText">Works</div>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <div 
                        className="projectCard" 
                        key={index} 
                        onClick={() => handleCardClick(project)}
                    >
                        {project.image && <img src={project.image} alt={project.title} className="projectImage" />}
                        <div className="projectContent">
                            <h3 className="projectTitle">{project.title}</h3>
                            <p className="projectDescription">{project.description}</p>
                        </div>
                        <div className="arrowIcon">
                            <i className="ri-arrow-right-s-fill"></i>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </div>
    );
}

export default Work;
