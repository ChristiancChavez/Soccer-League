import React from 'react';

const Standing = ({ team_place, team_name, games_played, games_win, games_defeat, games_lost, goals_for, goals_against, team_points }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Team</th>
                        <th>Pts</th>
                        <th>Games</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{team_place}</td>
                        <td>{team_name}</td>
                        <td>{team_points}</td>
                        <td>{games_played}</td>
                        <td>{games_win}</td>
                        <td>{games_defeat}</td>
                        <td>{games_lost}</td>
                        <td>{goals_for}</td>
                        <td>{goals_against}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Standing;
