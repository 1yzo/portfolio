import React from 'react';
import '../styles/projects-section.css';

const ProjectsSection = () => (
    <div className="projects-section">
        <div className="projects-section__header">Featured Work</div>
        <div className="project-container">
            <img className="project-img" src="/images/kuficlothing.jpg" alt="Kufi Clothing" />
            <div className="project-overlay">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>kuficlothing.com</div>
                    <i class="fab fa-github"></i>
                </div>
                <p>Responsive e-commerce web application.</p>
            </div>
        </div>
        <div className="project-container">
            <img className="project-img" src="/images/vlf.jpg" alt="VLF" />
            <div className="project-overlay">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>valuelife.org</div>
                    <i class="fab fa-github"></i>
                </div>
                <p>Responsive charity website.</p>
            </div>
        </div>
    </div>
);

export default ProjectsSection;