import React, { useState } from "react";

function Popup({onSuccess, onFailure}) {
  const [title, setTitle] = useState("");
  const saveCounter = async () => {
    const response = await fetch("http://localhost:5000/api/v1/counter", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });
    const data = await response.json();
    console.log(data);
    onSuccess(data);
  };
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
        <button onClick={saveCounter}>Save bish</button>
      </div>
      </React.Fragment>
  );
}
export default Popup;
