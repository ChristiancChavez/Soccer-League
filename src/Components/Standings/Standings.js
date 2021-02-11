import React, { useContext, useState, useEffect } from 'react';
//Components
import Standing from './../Standing/Standing';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';
//Style
import './standings.scss';

const Standings = () => {

    const { standings, competition } = useContext(SoccerFanContext);
    const [ renderComponent, setRenderComponent] = useState(true);

    
    useEffect(() => {
        return () => {
            setRenderComponent(false);
        };
    }, [competition]);


    return (
        <>
            {renderComponent &&
                <div className="standings">
                    <h3 className="standings__title">Standings</h3>
                    <table className="standings-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Pts</th>
                                <th>Ga</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                    team_badge={standing.team_badge} 
                                />    
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
};

export default Standings;
