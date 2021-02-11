import React, { useContext, useState } from 'react';
//Context
import { SoccerFanContext } from '../../context/contextSoccer';
//Dependecnies
import axios from 'axios';
//Components
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import Teams from './../Teams/Teams';
import Standings from './../Standings/Standings';
import TopScore from '../TopScores/TopScores';
//Images
import topscore from '../../Assets/images/topscore.png';
import standing from '../../Assets/images/standings.png';
import shield from '../../Assets/images/shield.png';
import PremierLeague from  '../../Assets/images/England.png';
import Ligue1 from  '../../Assets/images/France.png';
//Style
import './league.scss';



const League = () => {

    const { competition, showLeague, setTeams, setTopScores, setStandings, loading, setRenderTeams } = useContext(SoccerFanContext);
    const [content, setContent] = useState('');

    const requestUrl = async (league_id, category) => {
        try {
            const url = `https://apiv2.apifootball.com/?action=get_${category}&league_id=${league_id}&APIkey=9967e07b2cec6347bca0c3dd135394a3b6ac0baf76af3746dca681c458a5aa53`; 
            const requestData = await axios.get(url);  
            const { data } = requestData; 
            return data;
        } catch (error){
            return error;
        }
    };

    const handleFetchTeams = async (league_id) => {
        const requestData = await requestUrl(league_id, 'teams');
        setTeams(requestData);
        setContent('teams');
        setRenderTeams(true);
    };

    const handleFetchTopScores = async (league_id) => {
        const requestData = await requestUrl(league_id, 'topscorers'); 
        console.log(requestData, 'REQUEST');
        if(requestData.length >= 10){
            const topScoresFiltered = requestData.filter(topScore => requestData.indexOf(topScore) <= 10);
            setTopScores(topScoresFiltered);
        }
        setContent('topscorers');
    };

    const handleFetchStandings = async (league_id) => {
        const requestData = await requestUrl(league_id, 'standings');
        setStandings(requestData);
        setContent('standings');
    };
    const handleRenderTeamsContent = () => {
        switch(content){
            case 'teams':
                return <Teams />
            case 'topscorers':
                return <TopScore />
            case 'standings':
                return <Standings />
            default:
                return ''
        }
    }

    const handleRenderTeams = () => {
        if(loading) {
            return <div>
                <div className="league">
                    <div className="league-presentation">
                        <h2 className="league-presentation__name">
                            {competition.league_name}
                        </h2>
                        <div className="league-presentation__logo">                        
                            <img src={competition.league_logo ? competition.league_logo: leagueLogo} alt={`${competition.country_name} league logo`}/>                        
                        </div>
                        <h3 className="league-presentation__season">{competition.league_season}</h3>
                        <div className="league-buttons">
                            <Button icon={topscore} category="TopScores" method={handleFetchTopScores} league_id={competition.league_id} />
                            <Button icon={shield} category="Teams" method={handleFetchTeams} league_id={competition.league_id}  />
                            <Button icon={standing} category="Standings" method={handleFetchStandings} league_id={competition.league_id}  />
                        </div>
                    </div>
                    
                    {
                        handleRenderTeamsContent() ?
                        (
                            handleRenderTeamsContent()
                        ): 
                        (   <div className="league-content">
                                <span className="league-content__text">Select the league's content</span>
                                <Spinner />
                            </div>
                        )
                        
                    }
                </div> 
            </div>  
        }
        return <Spinner />
        
    }

    let leagueLogo;

        switch(competition.country_name) {
            case 'England': 
                leagueLogo = PremierLeague
                break;
            case 'France': 
                leagueLogo = Ligue1
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
