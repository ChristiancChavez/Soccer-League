import React from 'react';

const Player = ({ player_name, player_type, player_country, player_age, player_number }) => {
    return (
        <div>
            <img src="" alt="" />
            <h3>{player_name}</h3>
            <span>{player_country}</span>
            <span>{`${player_age}Years`}</span>
            <span>{`# ${player_number}`}</span>
            <span>{player_type}</span>
        </div>
    );
};

export default Player;
