import React, { useState, useEffect } from "react";
function CreationModal({onSave, showPopup}) {
  const [title, setTitle] = useState("");
  const hidePopup = () => {
    showPopup(false);
  }
  useEffect(() =>{
    const backdrop = document.querySelector('.backdrop');
    if(backdrop){
      backdrop.addEventListener('click', hidePopup);
    }
    return () => {
      if(backdrop){
        backdrop.removeEventListener('click', hidePopup);
      }
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
        <button id="savecounter" onClick={() => onSave(title)}>Save Counter</button>
        <button id="cancel" onClick={hidePopup}>Cancel</button>
      </div>
      </React.Fragment>
  );
}
export default CreationModal;
