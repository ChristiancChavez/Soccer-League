import React from 'react';

const Coach = ({ coach_age, coach_country, coach_name }) => {
    return (
        <div>
            <img src="" alt="" />
            <h3>{coach_name}</h3>
            <span>{coach_country}</span>
            <span>{`${coach_age} Years`}</span>
        </div>
    );
};

export default Coach;
