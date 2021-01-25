import './App.css';
import React from 'react';
//Components
import Header from './Components/Header/Header';
import Countries from './Components/Countries/Countries';
import League from './Components/League/League';
//Context
import SoccerFanContextProvider from './context/contextSoccer';


function App() {
  return (
    <div className="App">
      <Header />
      <SoccerFanContextProvider>
        <Countries />
        <League />
      </SoccerFanContextProvider>
    </div>
  );
}

export default App;
