import React from 'react';
//Components
//import Player from '../Player/Player';
// import Coach from '../Coach/Coach';

const Team = ({ team_name, team_badge, team_players, team_coaches }) => {
    return (
        <div>
            <img src={team_badge} alt={`${team_name}'s badge`}/>
            <h2>{team_name}</h2>
        </div>
    );
};

export default Team;
