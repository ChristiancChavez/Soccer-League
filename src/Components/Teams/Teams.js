import React, { useContext } from 'react';
//Components
import Team from './../Team/Team';
//Context
import { SoccerFanContext } from './../../context/contextSoccer';
import SerieA from  '../../Assets/images/Italy.png';
import PrimeraA from  '../../Assets/images/Colombia.png';
import PremierLeague from  '../../Assets/images/England.png';
import LaLiga from  '../../Assets/images/Spain.png';
import Bundesliga from  '../../Assets/images/Germany.png';

const Teams = () => {

    const { competition } = useContext(SoccerFanContext);
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
            <Team />
            <Team />
            <Team />
            <Team />
            <Team />
        </div>
    );
};

export default Teams;
