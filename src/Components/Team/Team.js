import React, { useState } from 'react';
//Components
import Player from '../Player/Player';
import Coach from './../Coach/Coach';

const Team = ({ team_name, team_badge, team_players, team_coaches }) => {

    const [ showPlayers, setShowPlayers] = useState(false);

    return (
        <div>
            <img src={team_badge} alt={`${team_name}'s badge`} onClick={() => setShowPlayers(true)} />
            <h2>{team_name}</h2>
            {showPlayers && 
                <div>
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
            }
        </div>
    );
};

export default Team;
