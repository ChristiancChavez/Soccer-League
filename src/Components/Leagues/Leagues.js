import React, { useEffect, useState } from 'react';
//Components
import League from './../League/League';

const Leagues = () => {

    const [leagues, setLeagues] = useState([]);

    const LEAGUES_ID = {
        Colombia: '102',
        England: '148',
        Germany: '195',
        Spain: '468',
        Italy: '262'
    }        
useEffect(() => {   
    fetch('https://apiv2.apifootball.com/?action=get_countries&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53')   
    .then(response => response.json())   
    .then(data => {
        const filterLeagues = data.filter(league => league.country_id === '135' || league.country_id === '41' ||league.country_id === '68' ||league.country_id === '51' ||league.country_id === '29');
        const addLeagueId = filterLeagues.reduce((acc, filterLeague) => {
            acc = [...acc, {...filterLeague,league_id: LEAGUES_ID[filterLeague.country_name] }]
            return acc;
        }, []);
        setLeagues(addLeagueId)}); 
    }
, [])

    return (
        <div>
            {leagues.map(league => 
                <League logo={league.country_logo} key={league.country_id} alt={league.country_name} country_id={league.country_id} league_id={league.league_id} />    
            )}
        </div>
    );
};

export default Leagues;
