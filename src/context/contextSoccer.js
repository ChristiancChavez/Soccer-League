import React, { createContext, useState } from "react";

export const SoccerFanContext = createContext();

const SoccerFanContextProvider = (props) => {

    const [competition, setCompetition] = useState({});
    const [showLeague, setShowLeague] = useState(false);
    const [topScores, setTopScores] = useState([]);
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(false);

    const [teams, setTeams] = useState([]);
    const LEAGUES_ID = {
        Colombia: '102',
        England: '148',
        Germany: '195',
        Spain: '468',
        Italy: '262'
    }  

    return (
        <SoccerFanContext.Provider 
            value={
                {   
                    competition, 
                    setCompetition, 
                    showLeague, 
                    setShowLeague,
                    LEAGUES_ID, 
                    topScores, 
                    setTopScores, 
                    teams, 
                    setTeams, 
                    standings, 
                    setStandings,
                    loading, 
                    setLoading
                }   
            }
        >
            {props.children}
        </SoccerFanContext.Provider>
    )

}

export default SoccerFanContextProvider;
