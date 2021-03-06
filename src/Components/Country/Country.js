import React, { useContext } from 'react';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Dependencies
import axios from 'axios';
//Style
import './country.scss';

const Country = ({ logo, alt, country_id, league_id }) => {

    const { setCompetition, setShowLeague, setLoading, setTeams } = useContext(SoccerFanContext);

    const handleFetchTeams = async (country_id, league_id) => {
        const requestData = await axios.get(`https://apiv2.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53`)   
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        }); 
        const FilterCompetition = requestData.filter(competition => competition.league_id === league_id);
        setCompetition(FilterCompetition[0]);
        setShowLeague(true);
        setLoading(true);
        setTeams([]);
    };

    return (
        <button className="country" onClick={() => handleFetchTeams(country_id, league_id)}>
            <img className="country__flag" src={logo} alt={alt} title={alt} />
        </button>
    );
};

export default Country;
