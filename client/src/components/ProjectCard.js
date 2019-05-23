import React from 'react';

const openLink = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (e.target.attributes.link) {
        const link = e.target.attributes.link.value;
        window.open(link, '_blank');
    }
}

const ProjectCard = ({ name, url, image, githubUrl, description }) => (
    <a className="project-container" href={url} target="_blank" rel="noopener noreferrer">
        <img className="project-img" src={image} alt={name} />
        <div className="project-overlay" onClick={openLink}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{name}</div>
                <i className="fab fa-github" link={githubUrl} onClick={this.openLink}></i>
            </div>
            <p>{description}</p>
        </div>
    </a>
);

export default ProjectCard;