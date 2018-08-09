import React from 'react';
import { Link, animateScroll } from 'react-scroll';
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
                <div className="header__logo"><i className="material-icons logo">power_settings_new</i>sman</div>
                <Link className="header__link" to="about-section" spy smooth duration={700}>About</Link>
                <Link className="header__link" to="projects-section" spy smooth duration={700}>Projects</Link>
            <Link className="header__link" to="contact-form" spy smooth duration={700}>Contact</Link>
                <div className="header__button"><i className="fas fa-envelope"></i></div>
                <div className="header__padding" />
            </div>
        );
    }
}

export default Header;