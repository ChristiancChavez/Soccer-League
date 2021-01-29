import React from 'react';
//Style
import './standing.scss';

const Standing = ({ team_place, team_name, games_played, games_win, games_defeat, games_lost, goals_for, goals_against, team_points, team_badge }) => {
    return (
        <tr className="standing">
            <td className="standing__place">{team_place}</td>
            <td><img className="standing__badge" title={team_name} src={team_badge} alt={team_name}></img></td>
            <td>{team_points}</td>
            <td>{games_played}</td>
            <td>{games_win}</td>
            <td>{games_defeat}</td>
            <td>{games_lost}</td>
            <td>{goals_for}</td>
            <td>{goals_against}</td>
        </tr>
    );
};

export default Standing;
//<td>{team_name}</td>
