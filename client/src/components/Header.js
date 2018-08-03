import React from 'react';
import '../styles/header.css';

const Header = () => (
    <div className="header">
        <div className="header__padding" />
        <div className="header__logo"><i className="material-icons logo">power_settings_new</i>sman</div>
        <div className="header__link">About</div>
        <div className="header__link">Projects</div>
        <div className="header__link">Contact</div>
        <div className="header__button"><i className="fas fa-envelope"></i></div>
        <div className="header__padding" />
    </div>
);

export default Header;