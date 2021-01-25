import React, { useContext } from 'react';
//Components
import Team from '../Team/Team';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';

const Teams = () => {
    const { teams } = useContext(SoccerFanContext);
    return (
        <div>
            {!!teams.length && teams.map(team => 
                <Team 
                    team_name={team.team_name} 
                    team_badge={team.team_badge} 
                    team_players={team.players} 
                    team_coaches={team.coaches} 
                    key={team.team_key} 
                />
            )}
        </div>
    );
};

export default Teams;
