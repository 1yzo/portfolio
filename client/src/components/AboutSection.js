import React from 'react';
import { Link } from 'react-scroll';
import '../styles/about-section.css'

const AboutSection = () => (
    <div className="about-section">
        <div className="about__header">Software Developer</div>
        <p>From idea to full-stack web application. Building is my passion.</p>
        <Link className="about__button" to="contact-form" spy smooth duration={700}>Get in touch</Link>
    </div>
);

export default AboutSection;