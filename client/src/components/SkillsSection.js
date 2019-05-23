import React from 'react';
import '../styles/skills-section.css';

const SkillsSection = () => (
    <div className="skills-section">
        <div className="skill-container">
            <img className="skill-icon skill-icon--alt" src="/images/javascript-original.svg" alt="JavaScript" />
            <div>JavaScript</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon" src="/images/html5-original.svg" alt="HTML5" />
            <div>HTML5</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon skill-icon--alt" src="/images/css3-original.svg" alt="CSS3" />
            <div>CSS3</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon" src="/images/sass-original.svg" alt="Sass" />
            <div>Sass</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon skill-icon--alt" src="/images/react-original.svg" alt="React" />
            <div>React</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon" src="/images/redux.png" alt="Redux" />
            <div>Redux</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon skill-icon--alt" src="/images/nodejs-original.svg" alt="Node.js" />
            <div>Node</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon" src="/images/mongodb-original.svg" alt="MongoDB" />
            <div>MongoDB</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon skill-icon--alt" src="/images/webpack-original.svg" alt="Webpack" />
            <div>Webpack</div>
        </div>
        <div className="skill-container">
            <img className="skill-icon" src="/images/git-original.svg" alt="Git" />
            <div>Git</div>
        </div>
    </div>
);

export default SkillsSection;