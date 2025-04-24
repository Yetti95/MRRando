import '../../App.css';
import React from "react";
import Hero from '../heros/Hero';

function PlayerList({ players, onChange, onDelete }) {
  return (
    <div className="Player.PlayerList">
      {players.map(player => {
        const hero = player.hero ? <Hero hero={player.hero} /> : null;

        return (
          <React.Fragment key={player.id}>
            <input
              value={player.name}
              onChange={e => onChange({
                id: player.id,
                name: e.target.value,
                preferences: { ...player.preferences }
              })}
            />
            <button
              className="Delete"
              onClick={() => onDelete({ name: player.name, id: player.id })}
            >
              Kick
            </button>

            {/* Role preference checkboxes */}
            <label>
              Tank
              <input
                type="checkbox"
                checked={player.preferences.tonk}
                onChange={() =>
                  onChange({
                    id: player.id,
                    name: player.name,
                    preferences: {
                      ...player.preferences,
                      tonk: !player.preferences.tonk
                    }
                  })
                }
              />
            </label>

            <label>
              DPS
              <input
                type="checkbox"
                checked={player.preferences.dps}
                onChange={() =>
                  onChange({
                    id: player.id,
                    name: player.name,
                    preferences: {
                      ...player.preferences,
                      dps: !player.preferences.dps
                    }
                  })
                }
              />
            </label>

            <label>
              Support
              <input
                type="checkbox"
                checked={player.preferences.sup}
                onChange={() =>
                  onChange({
                    id: player.id,
                    name: player.name,
                    preferences: {
                      ...player.preferences,
                      sup: !player.preferences.sup
                    }
                  })
                }
              />
            </label>

            {hero}
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default PlayerList;
