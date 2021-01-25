import React from 'react';

const TopScore = ({ player_name, team_name, goals }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{player_name}</td>
                        <td>{team_name}</td>
                        <td>{goals}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TopScore;
