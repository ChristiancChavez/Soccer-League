import React, { useContext } from 'react';
//Components
import Standing from './../Standing/Standing';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';

const Standings = () => {

    const { standings } = useContext(SoccerFanContext);

    return (
        <div>
            {standings.map(standing => 
                <Standing 
                    key={standing.team_id}
                    team_place={standing.overall_league_position} 
                    team_name={standing.team_name} 
                    team_points={standing.overall_league_PTS}
                    games_played={standing.overall_league_payed} 
                    games_win={standing.overall_league_W} 
                    games_defeat={standing.overall_league_D} 
                    games_lost={standing.overall_league_L} 
                    goals_for={standing.overall_league_GF} 
                    goals_against={standing.overall_league_GA} 
                />    
            )}
        </div>
    );
};

export default Standings;
