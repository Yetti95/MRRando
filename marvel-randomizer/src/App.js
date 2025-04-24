import './App.css';
import React from 'react';
import Add from './components/players/Add';
import PlayerList from './components/players/PlayerList';
import { HEROES, ROLES } from './Heroes';

const roleKeyMap = {
  Strategist: "sup",
  Duelist: "dps",
  Vanguard: "tonk"
};


export const PlayerContext = React.createContext(null);
function App() {
  const initPlayers = [
    { name: "Yetti", id: 0, preferences: { tonk: false, dps: false, sup: false } },
    { name: "ChenneyWeennie", id: 1, preferences: { tonk: false, dps: false, sup: false } }
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
    setPlayers([
      ...players,
      {
        name: "",
        id: players.length,
        preferences: { tonk: false, dps: false, sup: false }
      }
    ]);
  }
  
  function handleRemovePlayer(playerToRemove) {
    setPlayers(players.filter(player => player.id !== playerToRemove.id))
  }
  function resetHeroes(){
    setHeroes(HEROES)
  }
  function randomizeHeroes() {
    let remainingHeroes = [...heroes];
  
    const roleKeyMap = {
      Strategist: "sup",
      Duelist: "dps",
      Vanguard: "tonk"
    };
  
    const updatedPlayers = players.map(player => {
      const prefs = player.preferences || {};
      const hasAnyPref = Object.values(prefs).some(Boolean);
      console.log("Player:", player.name);
      console.log("Preferences:", prefs);
      console.log("Has any preference?", hasAnyPref);
  
      const filteredHeroes = hasAnyPref
        ? remainingHeroes.filter(hero => {
            const prefKey = roleKeyMap[hero.roles];
            const allowed = prefs[prefKey];
            console.log(`Checking hero ${hero.name} (${hero.roles}) → ${prefKey}: ${allowed}`);
            return allowed;
          })
        : remainingHeroes;
  
      const heroPool = filteredHeroes.length > 0 ? filteredHeroes : remainingHeroes;
  
      const randomIndex = Math.floor(Math.random() * heroPool.length);
      const selectedHero = heroPool[randomIndex];
  
      console.log("Selected hero:", selectedHero.name);
      console.log("----");
  
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
      <br />
      <br/>
      <button className="reset" onClick={resetHeroes}>Reset</button>
    </main>
  );
}

export default App;
 