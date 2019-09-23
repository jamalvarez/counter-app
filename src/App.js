import React, { useReducer, useState, useEffect } from "react";
import Search from "./components/search";
import Filters from "./components/filters";
import Counterlist from "./components/counterlist";
import CounterAdder from "./components/counteradder";
import Popup from './components/popup';
import counterReducer from "./appreducer";

function App() {
  const [counterarray, dispatch] = useReducer(counterReducer, []);
  const [popupVisible, showPopup] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/v1/counters", {
        method: "get"
      });
      const initialData = await response.json();
      dispatch({ type: "initial", data: initialData });
    }
    try {
      fetchData();
    } catch (e) {
      console.log("couldnt do shit for now");
    }
  }, []);
  return (
    <React.Fragment>
      <div id="search-filters" className="round">
        <Search />
        <Filters />
      </div>
      <Counterlist counterarray={counterarray} raisepopup={showPopup}/>
      <CounterAdder />
      {popupVisible && <Popup onSuccess={(data) => {dispatch({type:'kek', data}); showPopup(false);}} onFailure={() => showPopup(false)}/>}
    </React.Fragment>
  );
}

export default App;
