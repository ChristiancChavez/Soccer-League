import React from 'react';

const TopScore = ({ player_place, player_name, team_name, goals }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Place</th>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Goals</th>
                </tr>
                <tr>
                    <td>{player_place}</td>
                    <td>{player_name}</td>
                    <td>{team_name}</td>
                    <td>{goals}</td>
                </tr>
            </table>
        </div>
    );
};

export default TopScore;
