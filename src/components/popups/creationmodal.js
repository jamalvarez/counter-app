import React, { useState, useEffect } from "react";
import {saveCounter} from "../../requests"
function Popup({onSuccess, onFailure, showPopup}) {
  const [title, setTitle] = useState("");
  const hidePopup = () => {
    showPopup(false);
  }
  useEffect(() =>{
    document.querySelector('.backdrop').addEventListener('click', hidePopup);
    return () => {
      document.querySelector('.backdrop').removeEventListener('click', hidePopup);
    }
  })
  return (
    <React.Fragment>
    <div className="backdrop">
    </div>
    <div id="creation-modal">
      <b>What's your counter going to be called?</b>
        <input
          id="nameinput"
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
        />
        <button onClick={() => saveCounter(title, onSuccess, onFailure)}>Save Counter</button>
        <button onClick={hidePopup}>Cancel</button>
      </div>
      </React.Fragment>
  );
}
export default Popup;
