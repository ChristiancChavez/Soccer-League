import React, { useContext } from 'react';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';
//Dependencies
import axios from 'axios';

const League = ({ logo, alt, country_id, league_id }) => {

    const {setCompetition} = useContext(SoccerFanContext);

    const handleFetchTeams = async (country_id, league_id) => {
        const requestData = await axios.get(`https://apiv2.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53`)   
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        }); 
        const FilterCompetition = requestData.filter(competition => competition.league_id === league_id);
        console.log(FilterCompetition[0]);
        setCompetition(FilterCompetition[0]);
    };

    return (
        <button onClick={() => handleFetchTeams(country_id, league_id)}>
            <img src={logo} alt={alt} />
        </button>
    );
};

export default League;
