import React, { createContext, useState } from "react";

export const SoccerFanContext = createContext();

const SoccerFanContextProvider = (props) => {

    const [competition, setCompetition] = useState({});

    return (
        <SoccerFanContext.Provider value={{competition, setCompetition}}>
            {props.children}
        </SoccerFanContext.Provider>
    )

}

export default SoccerFanContextProvider;
