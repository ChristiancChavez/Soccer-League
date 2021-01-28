import React from 'react';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFutbol, faIdBadge, faTshirt, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Images
import goalkeeper from '../../Assets/images/goalkeeper.png';
import defender from '../../Assets/images/defender.png';
import midfielder from '../../Assets/images/midfielder.png';
import forward from '../../Assets/images/forward.png';
//Style
import './player.scss';

const Player = ({ player_name, player_type, player_country, player_age, player_number }) => {

    library.add(faFutbol, faIdBadge, faTshirt, faFlag, faTshirt);
    let iconTypePlayer;

    switch(player_type) {
        case 'Midfielders': 
            iconTypePlayer = midfielder
            break;
        case 'Forwards': 
            iconTypePlayer = forward
            break;
        case 'Defenders': 
            iconTypePlayer = defender
            break;
        case 'Goalkeepers': 
            iconTypePlayer = goalkeeper
            break;
        default:
            iconTypePlayer = forward
    }

    return (
        <div className="player">
            <span className="player-user">
                <img className="player-user__icon" src={iconTypePlayer} alt={player_type} />
            </span>
        
            <div className="player-info">
                <h3>{player_name}</h3>
                <div className="player-info-category">
                    <FontAwesomeIcon className="player-info-category__icon" icon={faFlag} />
                    <span className="player-info-category__text">{player_country}</span>
                </div>
                <div className="player-info-category">
                    <FontAwesomeIcon className="player-info-category__icon" icon={faIdBadge} />
                    <span className="player-info-category__text">{`${player_age} years`}</span>
                </div>
                <div className="player-info-category">
                    <FontAwesomeIcon className="player-info-category__icon" icon={faTshirt} />
                    <span className="player-info-category__text">{player_number}</span>
                </div>
                <div className="player-info-category">
                    <FontAwesomeIcon className="player-info-category__icon" icon={faFutbol} />
                    <span className="player-info-category__text">{player_type}</span>
                </div>
            </div>
        </div>
    );
};

export default Player;
