import './App.css';
import React from 'react';
import Add from './components/players/Add';
import PlayerList from './components/players/PlayerList';
import { HEROES, ROLES } from './Heroes';

export const PlayerContext = React.createContext(null);
function App() {
  const initPlayers = [
    {name: "Yetti", id: 0, preferences: []},
    {name: "ChenneyWeennie", id: 1, preferences: []}
  ]
  const [players, setPlayers] = React.useState(initPlayers)
  const [heroes, setHeroes] = React.useState(HEROES)
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
  function randomizeHeroes() {
    let remainingHeroes = [...heroes];
  
    const updatedPlayers = players.map(player => {
      // Optional: apply preferences filter
      const filteredHeroes = []
      // const filteredHeroes = remainingHeroes.filter(hero => {
      //   return !player.preferences.includes(hero.name); // or hero.role
      // });
  
      const heroPool = filteredHeroes.length > 0 ? filteredHeroes : remainingHeroes;
  
      const randomIndex = Math.floor(Math.random() * heroPool.length);
      const selectedHero = heroPool[randomIndex];
  
      // Remove selected hero from remainingHeroes
      remainingHeroes = remainingHeroes.filter(hero => hero.name !== selectedHero.name);
  
      return {
        ...player,
        hero: selectedHero
      };
    });
  
    setPlayers(updatedPlayers);
    setHeroes(remainingHeroes);
  }
  
  return (
    <main className='App'>
      <PlayerContext.Provider value={players}>
        <header>
          Marvel Rivals Randomizers
        </header>    
        <div>
          <PlayerList players={players} onChange={handleChangePlayerName} onDelete={handleRemovePlayer} />
        </div>
        <br/>
        <Add onClick={handleAddPlayer} />
      </PlayerContext.Provider>
      <button className="Randomize" onClick={randomizeHeroes}>Randomize</button>
    </main>
  );
}

export default App;
 