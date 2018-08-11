import React from 'react';
import { Link } from 'react-scroll';
import '../styles/header.css';

class Header extends React.Component {
    state = { shouldChange: false };
    
    handleScroll = () => {
        if (window.pageYOffset > 100) {
            this.setState(() => ({ shouldChange: true }));
        } else {
            this.setState(() => ({ shouldChange: false }));
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className={"header" + (this.state.shouldChange ? ' header--scrolled' : '')}>
                <div className="header__padding" />
                <Link className="header__logo" to="about-section" spy smooth duration={700}><i className="material-icons logo">power_settings_new</i>sman</Link>
                <Link className="header__link" activeClass="header__link--active" to="about-section" spy smooth duration={700}>About</Link>
                <Link className="header__link" activeClass="header__link--active" to="projects-section" spy smooth duration={700} offset={-120}>Projects</Link>
                <Link className="header__link" activeClass="header__link--active" to="contact-form" spy smooth duration={700} offset={-125}>Contact</Link>
                <a className="header__button" href="https://github.com/1yzo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <div className="header__padding" />
            </div>
        );
    }
}

export default Header;