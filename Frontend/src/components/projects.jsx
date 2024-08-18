import React from 'react';
import './projects.css'; // Add your CSS file for styling the Projects page

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            {/* Example of how to display projects */}
            <div className="project-list">
                <div className="project-item">
                    <h2>Project 1</h2>
                    <p>Description of project 1.</p>
                </div>
                <div className="project-item">
                    <h2>Project 2</h2>
                    <p>Description of project 2.</p>
                </div>
                {/* Add more project items here */}
            </div>
        </div>
    );
};

export default Projects;
