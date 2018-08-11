import React from 'react';
import '../styles/projects-section.css';

class ProjectsSection extends React.Component {
    openLink = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        if (e.target.attributes.link) {
            const link = e.target.attributes.link.value;
            window.open(link, '_blank');
        }
    }
    
    render() {
        return (
            <div className="projects-section">
                <div className="projects-section__header">Featured Work</div>
                <a className="project-container" href="https://kuficlothing.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    <img className="project-img" src="/images/kuficlothing.jpg" alt="Kufi Clothing" />
                    <div className="project-overlay" onClick={this.openLink}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>kuficlothing.com</div>
                            <i className="fab fa-github" link="https://github.com/1yzo/kuficlothing" onClick={this.openLink}></i>
                        </div>
                        <p>Responsive e-commerce web application with admin portal to view analytics and edit/add products.</p>
                    </div>
                </a>
                <a className="project-container" href="https://valuelife.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    <img className="project-img" src="/images/vlf.jpg" alt="VLF"/>
                    <div className="project-overlay" onClick={this.openLink}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>valuelife.org</div>
                            <i className="fab fa-github" link="https://github.com/1yzo/value-life-foundation-donate" onClick={this.openLink} />
                        </div>
                        <p>Responsive web application for non-profit organization Value Life Foundation.</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default ProjectsSection;