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
  const [textFilter, setTextFilter] = useState("");
  const [maxFilterValue, setMax] = useState("");
  const [minFilterValue, setMin] = useState("0");
  const [useValueFilter, toggleValueFilter] = useState(false);
  const sortedArray = counterarray.map(x => x.count).sort((a, b) => {
    return b - a;
  });
  const topValue = sortedArray.length > 0 ? sortedArray[0] : "0";
  const textFilterFunc = (counter) => {
    return textFilter !== '' ? counter.title.match(textFilter) : true;
  }
  const valueFilterFunc = (counter) => {
    if(!useValueFilter || maxFilterValue === ''){
      return true;
    }
    return maxFilterValue >= counter.count && minFilterValue <= counter.count;
  }
  return (
    <React.Fragment>
      <div id="search-filters" className="round">
        <Search value={textFilter} onChange={setTextFilter}/>
        <Filters {...{setMax,setMin, minFilterValue, maxFilterValue, topValue, useValueFilter, toggleValueFilter, disabled:topValue === '' ||!useValueFilter} }/>
      </div>
      <Counterlist counterarray={counterarray} raisepopup={showPopup} onAction={updateCounterArray}/>
      <CounterAdder raisepopup={showPopup}/>
      {popupVisible && <Popup showPopup={showPopup} onSuccess={(data) => {dispatch({type:'kek', data}); showPopup(false);}} onFailure={() => showPopup(false)}/>}
      </React.Fragment>
  );
}

export default App;
