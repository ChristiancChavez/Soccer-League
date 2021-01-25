import React from 'react';

const Button = ({ icon, category, method, league_id }) => {
    return (
        <button type="" onClick={() => method(league_id)}>
            <span>{category}</span>
            <img src={icon} alt={category} />
        </button>
    );
};

export default Button;
