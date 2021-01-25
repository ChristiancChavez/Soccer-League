import React from 'react';

const Standing = ({ team_place, team_name, games_played, games_win, games_defeat, games_lost, goals_for, goals_against }) => {
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
                    <td>{team_place}</td>
                    <td>{team_name}</td>
                    <td>{games_played}</td>
                    <td>{games_win}</td>
                    <td>{games_defeat}</td>
                    <td>{games_lost}</td>
                    <td>{goals_for}</td>
                    <td>{goals_against}</td>
                </tr>
            </table>
        </div>
    );
};

export default Standing;
