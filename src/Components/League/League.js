import React from 'react';

const League = ({ league }) => {
    return (
        <button>
            <img src={league} alt={league} />
        </button>
    );
};

export default League;
