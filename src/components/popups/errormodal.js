import React from "react";
function Errormodal({onAccept}) {
  return (
    <React.Fragment>
    <div className="backdrop">
    </div>
    <div id="error-modal">
      <b>Sorry! Something has gone wrong :(</b>
        <button onClick={onAccept}>Dang it</button>
      </div>
      </React.Fragment>
  );
}
export default Errormodal;
