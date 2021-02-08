import React, { useContext } from 'react';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';
//Style
import './fanList.scss';

const FanList = () => {

    const { fanList, showFanList } = useContext(SoccerFanContext);

    return (
        <div className={`fanlist ${showFanList ? 'show' : ''}`}>
            <span className="fanlist__title">Fan List</span>
            {
                !!fanList.length ? 
                (
                    fanList.map(team => 
                        <img className="fanlist__team" src={team.team_badge} alt={team.team_name} key={team.team_id} />    
                    )
                ) :
                (
                    <span className="fanlist__adv">You don't have favorite team</span>
                )                
            }
        </div>
    );
};

export default FanList;
