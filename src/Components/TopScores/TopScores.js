import React, { useContext } from 'react';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Components
import TopScore from './../TopScore/TopScore';

const TopScores = () => {

    const { topScores } = useContext(SoccerFanContext);

    return (
        <div>
            {topScores.map(topscore =>
                <TopScore 
                    key={topscore.player_key}
                    player_place={topscore.player_place} 
                    player_name={topscore.player_name} 
                    team_name={topscore.team_name} 
                    goals={topscore.goals}
                />    
            )}
        </div>
    );
};

export default TopScores;
