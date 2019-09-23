import React, { useReducer, useState, useEffect } from "react";
import Search from "./components/search";
import Filters from "./components/filters";
import Counterlist from "./components/counterlist";
import CounterAdder from "./components/counteradder";
import Popup from './components/popup';
import counterReducer from "./appreducer";
import {fetchInitialData} from './requests/index';

function App() {
  const [counterarray, dispatch] = useReducer(counterReducer, []);
  const [popupVisible, showPopup] = useState(false);
  useEffect(() => {
    fetchInitialData((data) => dispatch({type:'initial', data}));
  }, []);

  const updateCounterArray = (data) => {dispatch({type:'kek', data})};

  return (
    <React.Fragment>
      <div id="search-filters" className="round">
        <Search />
        <Filters />
      </div>
      <Counterlist counterarray={counterarray} raisepopup={showPopup} onAction={updateCounterArray}/>
      <CounterAdder raisepopup={showPopup}/>
      {popupVisible && <Popup showPopup={showPopup} onSuccess={(data) => {dispatch({type:'kek', data}); showPopup(false);}} onFailure={() => showPopup(false)}/>}
      </React.Fragment>
  );
}

export default App;
