import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects-section.css';

class ProjectsSection extends React.Component {    
    render() {
        return (
            <div className="projects-section">
                <div className="projects-section__header">Featured Work</div>
                <ProjectCard
                    name="kuficlothing.com"
                    url="https://kuficlothing.herokuapp.com"
                    image="/images/kuficlothing.jpg"
                    githubUrl="https://github.com/1yzo/kuficlothing"
                    description="Responsive e-commerce web application with admin portal to view analytics, edit/add products, and view orders."
                />
                <ProjectCard
                    name="valuelife.org"
                    url="https://valuelife.org"
                    image="/images/vlf.jpg"
                    githubUrl="https://github.com/1yzo/value-life-foundation-donate"
                    description="Responsive web application for non-profit organization Value Life Foundation."
                />
                <ProjectCard 
                    name="dostuff.com"
                    url="http://do-stuff.s3-website-us-west-1.amazonaws.com"
                    image="/images/do-stuff.png"
                    githubUrl="https://github.com/1yzo/todo"
                    description="Realtime collaborative task keeping."
                />
                <ProjectCard 
                    name="notepage.com"
                    url="https://note-page.herokuapp.com"
                    image="/images/notepage.png"
                    githubUrl="https://github.com/1yzo/note-page"
                    description="Social note-taking application."
                />
            </div>
        );
    }
}

export default ProjectsSection;