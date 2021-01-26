import React, { useContext } from 'react';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';


const FanList = () => {

    const { fanList } = useContext(SoccerFanContext);

    return (
        <div>
            <span>These are your favorites team</span>
            {
                fanList.map(team => 
                    <img src={team.team_badge} alt={team.team_name} key={team.team_id} />    
                )
            }
        </div>
    );
};

export default FanList;
