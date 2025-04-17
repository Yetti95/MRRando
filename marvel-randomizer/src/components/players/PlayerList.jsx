import '../../App.css';
import React from "react";

function PlayerList({ players, onChange, onDelete}) {
    return (
      <div className="Player.PlayerList">
        {players.map(player => (
          <React.Fragment>
            <input value={player.name} key={"Player" + player.id} onChange={e => onChange({
              id: player.id,
              name: e.target.value
            })} />
            <button className="Delete" onClick={e => onDelete({name: player.name, id: player.id})} >Kick</button>
            <br/>

          </React.Fragment>
        ))}
      </div>
    );
  }
  
  export default PlayerList;