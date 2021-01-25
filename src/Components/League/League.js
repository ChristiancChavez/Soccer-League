import React, { useContext, useState } from 'react';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Dependecnies
import axios from 'axios';
//Components
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
//Images
import topscore from '../../Assets/images/topscore.png';
import standing from '../../Assets/images/standings.png';
import shield from '../../Assets/images/shield.png';
import SerieA from  '../../Assets/images/Italy.png';
import PrimeraA from  '../../Assets/images/Colombia.png';
import PremierLeague from  '../../Assets/images/England.png';
import LaLiga from  '../../Assets/images/Spain.png';
import Bundesliga from  '../../Assets/images/Germany.png';

const League = () => {

    const { competition, showLeague, setTeams, setTopScores, setStandings, loading } = useContext(SoccerFanContext);
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

    const handleFetchTopScores = async (league_id) => {
        const requestData = await axios.get(`https://apiv2.apifootball.com/?action=get_topscorers&league_id=${league_id}&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53`)   
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        }); 
        console.log(requestData, 'topscores');
        setTopScores(requestData);
    };

    const handleFetchStandings = async (league_id) => {
        const requestData = await axios.get(`https://apiv2.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53`)   
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        }); 
        console.log(requestData, 'topscores');
        setStandings(requestData);
    };

    const handleRenderTeams = () => {
        if(loading) {
            return <>
                <div>
                    <img src={competition.league_logo || leagueLogo} alt={`${competition.country_name} league logo`}/>
                    <h2>{competition.league_name}</h2>
                    <h3>{competition.league_season}</h3>
                    <div>
                        <Button icon={topscore} category="TopScores" method={handleFetchTopScores} league_id={competition.league_id} />
                        <Button icon={shield} category="Teams" method={handleFetchTeams} league_id={competition.league_id}  />
                        <Button icon={standing} category="Standings" method={handleFetchStandings} league_id={competition.league_id}  />
                    </div>
                </div> 
            </>  
        }
        return <Spinner />
        
    }

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
            {showLeague &&
                handleRenderTeams()
            }
        </div>
    );
};

export default League;
