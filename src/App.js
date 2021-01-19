import './App.css';
import React from 'react';
//Components
import Header from './Components/Header/Header';
import Leagues from './Components/Leagues/Leagues';
import Main from './Components/Main/Main';
import Teams from './Components/Teams/Teams';

function App() {
  return (
    <div className="App">
      <Header />
      <Leagues />
      <Main />
      <Teams />
    </div>
  );
}

export default App;
