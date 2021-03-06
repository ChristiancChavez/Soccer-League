import React, { useContext, useEffect, useState } from 'react';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Components
import TopScore from './../TopScore/TopScore';
//Style
import './topScores.scss';

const TopScores = () => {

    const { topScores, competition } = useContext(SoccerFanContext);
    const [ renderComponent, setRenderComponent] = useState(true);

    useEffect(() => {
        return () => {
            setRenderComponent(false);
        };
    }, [competition]);

    return (
        <>
            {renderComponent && 
                <div className="topscores">
                    <h3 className="topscores__title">TopScorers</h3>
                    <table className="topscores-table">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Team</th>
                                <th>Goals</th>
                            </tr>
                        </thead>
                        <tbody>
                        {topScores.map(topscore =>
                            <TopScore 
                                key={topscore.player_key} 
                                player_name={topscore.player_name} 
                                team_name={topscore.team_name} 
                                goals={topscore.goals}
                            />    
                        )}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
};

export default TopScores;
