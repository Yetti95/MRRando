import React from "react";

function Add({onClick}) {
  return (
    <React.Fragment>
        <button onClick={onClick}>Add Player +</button>
    </React.Fragment>
  );
}

export default Add;