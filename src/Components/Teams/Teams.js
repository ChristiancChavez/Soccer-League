import React, { useContext, useState, useEffect } from 'react';
//Components
import Team from '../Team/Team';
import Spinner from './../Spinner/Spinner';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Style
import './teams.scss';

const Teams = () => {
    const { teams, renderTeams, competition } = useContext(SoccerFanContext);
    const [ renderComponent, setRenderComponent] = useState(true);

    useEffect(() => {
        return () => {
            setRenderComponent(false);
        };
    }, [competition]);

    return (
        <>
            {renderComponent &&
                <div className="teams">
                    <span className="teams__title">Teams</span>
                    {renderTeams ? 
                        (   
                            <div className="teams__content">
                                {!!teams.length && teams.map(team => 
                                    <Team 
                                        team_name={team.team_name} 
                                        team_badge={team.team_badge} 
                                        team_players={team.players} 
                                        team_coaches={team.coaches} 
                                        team_id={team.team_key}
                                        key={team.team_key} 
                                    />)
                                }
                            </div>
                        ):
                        (
                            <Spinner />
                        )
                    }
                </div>
            }
        </>
    );
};

export default Teams;
