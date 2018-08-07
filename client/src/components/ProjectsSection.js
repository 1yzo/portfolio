import React from 'react';
import '../styles/projects-section.css';

const ProjectsSection = () => (
    <div className="projects-section">
        <div className="projects-section__header">
            Featured Work
        </div>
        <div className="project-container">
            <img className="project-img" src="/images/vlf.jpg" alt="VLF" />
            <div className="project-overlay">
                valuelife.org
            </div>
        </div>
        <div className="project-container">
            <img className="project-img" src="/images/kuficlothing.jpg" alt="Kufi Clothing" />
            <div className="project-overlay">
                kuficlothing.com
            </div>
        </div>
    </div>
);

export default ProjectsSection;