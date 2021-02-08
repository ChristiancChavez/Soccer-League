import './App.css';
import React from 'react';
//Components
import Header from './Components/Header/Header';
import Countries from './Components/Countries/Countries';
import League from './Components/League/League';
import FanList from './Components/FanList/FanList';
//Context
import SoccerFanContextProvider from './context/contextSoccer';


function App() {
  return (
    <div className="App">
      <SoccerFanContextProvider>
        <Header />
        <Countries />
        <League />
        <FanList />
      </SoccerFanContextProvider>
    </div>
  );
}

export default App;
