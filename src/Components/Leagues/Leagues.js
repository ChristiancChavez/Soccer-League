import React, { useEffect, useState } from 'react';
//Components
import League from './../League/League';

const Leagues = () => {

    const [leagues, setLeagues] = useState([]);

useEffect(() => {   
    fetch('https://apiv2.apifootball.com/?action=get_countries&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53')   
    .then(response => response.json())   
    .then(data => {
        const filterLeagues = data.filter(league => league.country_id === '135' || league.country_id === '41' ||league.country_id === '68' ||league.country_id === '51' ||league.country_id === '29');
        console.log(filterLeagues);
        setLeagues(filterLeagues)}); 
    }
, [])

    return (
        <div>
            {leagues.map(league => 
                <League logo={league.country_logo} key={league.country_id} alt={league.country_name} id={league.country_id} />    
            )}
        </div>
    );
};

export default Leagues;
