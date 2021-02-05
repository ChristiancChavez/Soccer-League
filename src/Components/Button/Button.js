import React from 'react';
//Styles
import './button.scss';

const Button = ({ icon, category, method, league_id }) => {
    return (
        <button className="button" type="button" onClick={() => method(league_id)}>
            <img title={category} className="button__icon" src={icon} alt={category} />
        </button>
    );
};

export default Button;
