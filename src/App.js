import './App.css';
import React from 'react';
//Components
import Header from './Components/Header/Header';
import Leagues from './Components/Leagues/Leagues';

function App() {
  return (
    <div className="App">
      <Header />
      <Leagues />
    </div>
  );
}

export default App;
