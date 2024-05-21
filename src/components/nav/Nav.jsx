import React from 'react';
import './nav.css';
import logo from '../../assets/img/kinalLogo.png';

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="logoKinal" />
                <h1 className="navbar-title">Blog De Un Programador</h1>
              
            </div>
        </nav>
    );
};

export default Nav;
