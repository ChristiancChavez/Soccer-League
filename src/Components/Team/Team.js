import React, { useState } from 'react';
//Components
import Player from '../Player/Player';
import Coach from './../Coach/Coach';
import Spinner from './../Spinner/Spinner';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Team = ({ team_name, team_badge, team_players, team_coaches }) => {

    library.add(faChild);

    const [ showPlayers, setShowPlayers] = useState(false);

    return (
        <div>
            <img src={team_badge} alt={`${team_name}'s badge`} onClick={() => setShowPlayers(true)} />
            <h2>{team_name}</h2>
            {showPlayers ? 
                (<div>
                    <div>
                        <button type="">
                            <FontAwesomeIcon icon={faChild} />
                        </button>
                    </div>
                    <div>
                        {
                            team_players.map(player => 
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
                    <div>
                        {
                            team_coaches.map(coach => 
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
                ):
                (
                    <Spinner />
                )
            }
        </div>
    );
};

export default Team;
