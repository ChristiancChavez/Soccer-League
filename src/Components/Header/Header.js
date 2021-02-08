import React, { useContext } from 'react';
//Style
import './header.scss';
//Image
import ball from '../../Assets/images/ballHeader.png';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';

const Header = () => {

    
    const { setShowFanList, showFanList } = useContext(SoccerFanContext);

    library.add(faUsers, faTimes);

    const handleShowFanList = () => {
        setShowFanList(!showFanList);
    };

    return (
        <div className="header">
            <button className="header__toggle" type="button" onClick={handleShowFanList} >
                <FontAwesomeIcon icon={ showFanList ?  faTimes : faUsers} />
            </button>
            <h1 className="header__title">
                Soccer Fan
            </h1>
            <img className="header__icon" src={ball} alt="ball icon" />
        </div>
        
    );
};

export default Header;
