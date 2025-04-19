import '../../App.css';
import React from "react";
import Hero from '../heros/Hero';

function PlayerList({ players, onChange, onDelete}) {
    
    return (
      <div className="Player.PlayerList">
        {players.map(player => {
          let hero
          if(player.hero){
            hero = <Hero hero={player.hero} />
          }
          return <React.Fragment>
            <input value={player.name} key={"Player" + player.id} onChange={e => onChange({
              id: player.id,
              name: e.target.value,
              // preferences: [...player.preferences]
            })} />
            <button className="Delete" onClick={e => onDelete({name: player.name, id: player.id})} >Kick</button>
            {/* <input type="checkbox" value={player.preferences.tonk} onChange={e => onChange({
              id: player.id,
              name: e.target.value,
              preferences: [...player.preferences, {tonk: !player.preferences.tonk}]
            })}/>
            <input type="checkbox" value={player.preference.dps} onChange={e => onChange({
              id: player.id,
              name: e.target.value,
              preferences: [...player.preferences, {dps: !player.preferences.dps}]
            })}/>
            <input type="checkbox" value={player.preference.sup} onChange={e => onChange({
              id: player.id,
              name: e.target.value,
              preferences: [...player.preferences, {sup: !player.preferences.sup}]
            })}/> */}
            {hero}
            <br/>
            
          </React.Fragment>

        }
        )}
      </div>
    );
  }
  
  export default PlayerList;