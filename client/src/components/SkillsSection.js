import React from 'react';
import '../styles/skills-section.css';

const SkillsSection = () => (
    <div className="skills-section">
        <img className="skill-icon skill-icon--alt" src="/images/javascript-original.svg" alt="JavaScript" />
        <img className="skill-icon" src="/images/html5-original.svg" alt="HTML5" />
        <img className="skill-icon skill-icon--alt" src="/images/css3-original.svg" alt="CSS3" />
        <img className="skill-icon" src="/images/sass-original.svg" alt="Sass" />
        <img className="skill-icon skill-icon--alt" src="/images/react-original.svg" alt="React" />
        <img className="skill-icon" src="/images/redux.png" alt="Redux" />
        <img className="skill-icon skill-icon--alt" src="/images/nodejs-original-wordmark.svg" alt="Node.js" />
        <img className="skill-icon" src="/images/mongodb-original-wordmark.svg" alt="MongoDB" />
        <img className="skill-icon skill-icon--alt" src="/images/webpack-original-wordmark.svg" alt="Webpack" />
        <img className="skill-icon" src="/images/git-original-wordmark.svg" alt="Git" />
    </div>
);

export default SkillsSection;