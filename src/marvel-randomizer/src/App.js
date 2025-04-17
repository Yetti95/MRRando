import './App.css';
import React from 'react';
 import Add from './components/players/Add';
import PlayerList from './components/players/PlayerList';

export const PlayerContext = React.createContext(null);
function App() {
  const initPlayers = [
    {name: "Yetti", id: 0},
    {name: "ChenneyWeennie", id: 1}
  ]
  const [players, setPlayers] = React.useState(initPlayers)
  
  function handleChangePlayerName(playerNameChange) {
    setPlayers(players.map(player => {
      if(player.id === playerNameChange.id){
        return playerNameChange
      }
      return player
    }))
  }
  function handleAddPlayer() {
    setPlayers([...players, {name: "", id: players.length}])
  }
  function handleRemovePlayer(playerToRemove) {
    setPlayers(players.filter(player => player.id !== playerToRemove.id))
  }
  console.log(players)
  return (
    <React.Fragment>
      <PlayerContext.Provider value={players}>
        <header className="">
          Marvel Rivals Randomizers
        </header>    
        <div className="">
          <PlayerList players={players} onChange={handleChangePlayerName} onDelete={handleRemovePlayer} />
        </div>
        <Add onClick={handleAddPlayer} />

      </PlayerContext.Provider>

    </React.Fragment>
  );
}

export default App;
 