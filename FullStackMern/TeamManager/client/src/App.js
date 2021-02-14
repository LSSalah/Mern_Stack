import React, {useState} from 'react';
import {Router} from '@reach/router';
import './App.css';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import GameStatus from './components/GameStatus';
import Header from './components/Header'

function App() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="App">
        <Header/>
        <hr/>
      <Router>
        <PlayerList path="players/list" player={player} setPlayer={setPlayer}/>
        <AddPlayer path="players/addplayer" player={player} setPlayer={setPlayer}/>
        <GameStatus path="/status/game/:gameId" player={player} setPlayer={setPlayer}/>
      </Router>
    </div>
  );
}

export default App;