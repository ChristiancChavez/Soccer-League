import React, { createContext, useState, useReducer } from "react";
//Reducer
import { fanListReducer } from './../Components/reducer/fanListReducer';

export const SoccerFanContext = createContext();

const SoccerFanContextProvider = (props) => {

    const [competition, setCompetition] = useState({});
    const [showLeague, setShowLeague] = useState(false);
    const [topScores, setTopScores] = useState([]);
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [renderTeams, setRenderTeams] = useState(false);
    const [showFanList, setShowFanList] = useState(false);
    
    const [fanList, dispatch] = useReducer(fanListReducer, [], () => {
        const localDataFanList = localStorage.getItem('fanList');
        return localDataFanList ? JSON.parse(localDataFanList) : [];
    });

    const [teams, setTeams] = useState([]);
    const LEAGUES_ID = {
        France: '177',
        England: '149',
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
                    setLoading,
                    fanList, 
                    dispatch,
                    renderTeams, 
                    setRenderTeams,
                    showFanList, 
                    setShowFanList
                }   
            }
        >
            {props.children}
        </SoccerFanContext.Provider>
    )

}

export default SoccerFanContextProvider;
