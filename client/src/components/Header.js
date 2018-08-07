import React from 'react';
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
                <div className="header__link">About</div>
                <div className="header__link">Projects</div>
                <div className="header__link">Contact</div>
                <div className="header__button"><i className="fas fa-envelope"></i></div>
                <div className="header__padding" />
            </div>
        );
    }
}

export default Header;