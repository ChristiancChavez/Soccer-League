import React, { useContext, useEffect, useState } from 'react';
//Components
import Team from './../Team/Team';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';
import SerieA from  '../../Assets/images/Italy.png';
import PrimeraA from  '../../Assets/images/Colombia.png';
import PremierLeague from  '../../Assets/images/England.png';
import LaLiga from  '../../Assets/images/Spain.png';
import Bundesliga from  '../../Assets/images/Germany.png';
//Dependecnies
import axios from 'axios';

const Teams = () => {

    const { competition } = useContext(SoccerFanContext);
    const [teams, setTeams] = useState([]);
    const handleFetchTeams = async (league_id) => {
        const requestData = await axios.get(`https://apiv2.apifootball.com/?action=get_teams&league_id=${league_id}&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53`)   
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        }); 
        console.log(requestData);
        setTeams(requestData);
    };

    useEffect(() => {
        if(competition.league_id) {
            handleFetchTeams(competition.league_id);
        }
    }, [competition])

    let leagueLogo;

        switch(competition.country_name) {
            case 'Colombia': 
                leagueLogo = PrimeraA
                break;
            case 'England': 
                leagueLogo = PremierLeague
                break;
            case 'Germany': 
                leagueLogo = Bundesliga
                break;
            case 'Italy': 
                leagueLogo = SerieA
                break;
            case 'Spain': 
                leagueLogo = LaLiga
                break;
            default:
                leagueLogo = ''
        }

    return (
        <div>
            <div>
                <img src={competition.league_logo || leagueLogo} alt={`${competition.country_name} league logo`}/>
                <h2>{competition.league_name}</h2>
                <h3>{competition.league_season}</h3>
            </div>
            {!!teams && teams.map(team => 
                <Team team_name={team.team_name} team_badge={team.team_badge} team_players={team.players} team_coaches={team.coaches} key={team.team_key} />    
            )}
        </div>
    );
};

export default Teams;
