import React, { useEffect, useState, useContext } from 'react';
//Components
import League from '../Country/Country';
import Spinner from '../Spinner/Spinner';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Style
import './countries.scss';

const Countries = () => {

    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const { LEAGUES_ID } = useContext(SoccerFanContext)

useEffect(() => {   
    fetch('https://apiv2.apifootball.com/?action=get_countries&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53')   
    .then(response => response.json())   
    .then(data => {
        const filterLeagues = data.filter(league => league.country_id === '135' || league.country_id === '41' ||league.country_id === '68' ||league.country_id === '51' ||league.country_id === '29');
        const addLeagueId = filterLeagues.reduce((acc, filterLeague) => {
            acc = [...acc, {...filterLeague,league_id: LEAGUES_ID[filterLeague.country_name] }]
            return acc;
        }, []);
        setLeagues(addLeagueId);
        setLoading(false);
    }); 
    }
, [])

    return (
        <div className="countries">
            {loading ? 
                (
                    <Spinner />
                ): 
                (
                    leagues.map(league => 
                        <League 
                            logo={league.country_logo} 
                            key={league.country_id} 
                            alt={league.country_name} 
                            country_id={league.country_id} 
                            league_id={league.league_id} 
                        /> 
                    )
                )
            }
        </div>
    );
};

export default Countries;
