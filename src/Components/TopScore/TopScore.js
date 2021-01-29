import React from 'react';
//Style
import './topScore.scss';

const TopScore = ({ player_name, team_name, goals }) => {
    return (
        <tr className="topscore">
            <td className="topscore__player">{player_name}</td>
            <td className="topscore__team">{team_name}</td>
            <td className="topscore__goals">{goals}</td>
        </tr>
    );
};

export default TopScore;
