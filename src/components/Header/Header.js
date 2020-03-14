import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1 className = "heading">Friends & Friend</h1>
        </div>
    );
};

export default Header;