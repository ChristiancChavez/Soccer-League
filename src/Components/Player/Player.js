import React from 'react';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faIdBadge, faTshirt, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Images
import goalkeeper from '../../Assets/images/goalkeeper.png';
import defender from '../../Assets/images/defender.png';
import midfielder from '../../Assets/images/midfielder.png';
import forward from '../../Assets/images/forward.png';

const Player = ({ player_name, player_type, player_country, player_age, player_number }) => {

    library.add(faUser, faIdBadge, faTshirt, faFlag, faTshirt);
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
        <div>
            <div>
                <FontAwesomeIcon icon={faUser} />               
            </div>
            <div>
                <h3>{player_name}</h3>
                <div>
                <FontAwesomeIcon icon={faFlag} />
                    <span>{player_country}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faIdBadge} />
                    <span>{`${player_age} years`}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTshirt} />
                    <span>{player_number}</span>
                </div>
                <div>
                    <img src={iconTypePlayer} alt={player_type} />
                    <span>{player_type}</span>
                </div>
            </div>
        </div>
    );
};

export default Player;
