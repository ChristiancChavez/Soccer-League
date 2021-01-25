import React, { useContext } from 'react';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Components
import TopScore from './../TopScore/TopScore';
//Images 
import podium from '../../Assets/images/podium.png';

const TopScores = () => {

    const { topScores } = useContext(SoccerFanContext);

    return (
        <div>
            {topScores.map(topscore =>
                <TopScore 
                    key={topscore.player_key} 
                    player_name={topscore.player_name} 
                    team_name={topscore.team_name} 
                    goals={topscore.goals}
                />    
            )}
            <img src={podium} alt=" league's topscore" />
        </div>
    );
};

export default TopScores;
