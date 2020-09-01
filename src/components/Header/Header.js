import React from 'react';
import './Header.css';
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return (
        <header className="Header">
            <div className="container Header__inner">
                <span className="Logo">Logo</span>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;