import React, { useState, useContext } from 'react';
//Components
import Player from '../Player/Player';
import Coach from './../Coach/Coach';
import Spinner from './../Spinner/Spinner';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';
//Style
import './team.scss';


const Team = ({ team_name, team_badge, team_players, team_coaches, team_id }) => {

    library.add(faUsers, faStar);

    const [showPlayers, setShowPlayers] = useState(false);
    const [renderPlayer, setRenderPlayer] = useState(false);
    const { dispatch, fanList } = useContext(SoccerFanContext);

    const handleAddToFanList = (team_badge, team_id, team_name) => { 
        const verificationExistedTeam = fanList.reduce((acc, teams) => {
            const nameTeams = Object.values(teams)[1];
            acc = [...acc, nameTeams ];
            return acc;
        }, []);

        const verification = verificationExistedTeam.includes(team_id);
        const getLocalDataFanList = localStorage.getItem('fanList');
        if(getLocalDataFanList) {
            const updatedData = [...JSON.parse(getLocalDataFanList), {team_badge:team_badge, team_id:team_id, team_name:team_name}];
            window.localStorage.setItem('fanList', JSON.stringify(updatedData));
            if(!verification) {
                dispatch({type:'ADD_TEAM', team_badge:team_badge, team_name:team_name, team_id:team_id});
            }
        }
        else {
            window.localStorage.setItem('fanList', JSON.stringify([...fanList, {team_badge:team_badge, team_name:team_name, team_id:team_id}]));
            dispatch({type:'ADD_TEAM', team_badge:team_badge, team_name:team_name, team_id:team_id});
        }
    };

    const handleShowPlayers = () => {
        setShowPlayers(true);
        setRenderPlayer(true);
    };

    const handleRenderPlayers = () => {
        if(showPlayers){
            return <div className="team-content">
                <div className="team-content-staff"> 
                    <span className="team-content-staff__title">Players</span>
                    <button className="team-content__close" type="button">X</button>
                    {team_players.map(player => 
                        <Player 
                            player_name={player.player_name} 
                            player_type={player.player_type} 
                            player_country={player.player_country} 
                            player_age={player.player_age} 
                            player_number={player.player_number}
                            key={player.player_key}
                        />
                        )
                    }
                </div>
                <div className="team-content-staff">
                    <span className="team-content-staff__title">Coach</span>
                    {team_coaches.map(coach => 
                        <Coach 
                            coach_age={coach.coach_age} 
                            coach_country={coach.coach_country} 
                            coach_name={coach.coach_name}
                            key={coach.coach_name}
                        />
                        )
                    }
                </div>
            </div>
        }
        return  <Spinner />
    };
    
    return (
        <div className="team">
            <img className="team__badge" src={team_badge} alt={`${team_name}'s badge`} />
            <h2 className="team__name">{team_name}</h2>
            {renderPlayer && 
                handleRenderPlayers()
            }
            <div className="team-actions">
                <button className="team-actions__action" type="button" onClick={handleShowPlayers} >
                    <FontAwesomeIcon icon={faUsers} />
                </button>
                <button className="team-actions__action" type="button" onClick={() => handleAddToFanList(team_badge, team_id, team_name)} >
                    <FontAwesomeIcon icon={faStar} />
                </button>
            </div>
        </div>
    );
};

export default Team;
