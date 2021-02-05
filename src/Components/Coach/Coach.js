import React from 'react';
//Style
import './coach.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIdBadge, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coach from '../../Assets/images/coach.png';

const Coach = ({ coach_age, coach_country, coach_name }) => {

    library.add(faIdBadge, faFlag);

    return (
        <div className="coach">
            <span className="coach-user">
                <img className="coach-user__icon" src={coach} alt={coach_name} />
            </span>
            <div className="coach-info">
                <h3>{coach_name}</h3>
                <div className="coach-info-category">
                <FontAwesomeIcon className="coach-info-category__icon" icon={faFlag} />
                <span className="coach-info-category__text">{coach_country}</span>
                </div>
                <div className="coach-info-category">
                <FontAwesomeIcon className="coach-info-category__icon" icon={faIdBadge} />
                <span className="coach-info-category__text">{`${coach_age} years`}</span>
                </div>
            </div>
        </div>
    );
};

export default Coach;
