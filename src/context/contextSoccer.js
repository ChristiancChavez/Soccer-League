import React, { createContext, useState } from "react";

export const SoccerFanContext = createContext();

const SoccerFanContextProvider = (props) => {

    const [competition, setCompetition] = useState({});
    const [showTeams, setShowTeams] = useState(false);

    return (
        <SoccerFanContext.Provider value={{competition, setCompetition, showTeams, setShowTeams}}>
            {props.children}
        </SoccerFanContext.Provider>
    )

}

export default SoccerFanContextProvider;
