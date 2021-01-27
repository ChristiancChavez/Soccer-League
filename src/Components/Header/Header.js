import React from 'react';
//Style
import './header.scss';
//Image
import ball from '../../Assets/images/ballHeader.png';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__title">
                Soccer Fan
            </h1>
            <img className="header__icon" src={ball} alt="ball icon" />
        </div>
        
    );
};

export default Header;
