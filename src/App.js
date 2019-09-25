import React, { useState, useEffect } from "react";
import Search from "./components/search";
import Filters from "./components/filters";
import Counterlist from "./components/counterlist";
import CounterAdder from "./components/counteradder";
import Popup from "./components/popup";
import { fetchInitialData } from "./requests/index";

function App() {
  const [counterarray, updateCounterArray] = useState([]);
  const [popupVisible, showPopup] = useState(false);
  useEffect(() => {
    fetchInitialData(updateCounterArray);
  }, []);

  const [textFilter, setTextFilter] = useState("");
  const [maxFilterValue, setMax] = useState("");
  const [minFilterValue, setMin] = useState("0");
  const [useValueFilter, toggleValueFilter] = useState(false);
  const sortedArray = counterarray
    .map(x => x.count)
    .sort((a, b) => {
      return b - a;
    });
  const topValue = sortedArray[0] || "0";
  const textFilterFunc = counter => {
    return textFilter !== "" ? counter.title.match(textFilter) : true;
  };
  const valueFilterFunc = counter => {
    if (!useValueFilter || maxFilterValue === "") {
      return true;
    }
    return maxFilterValue >= counter.count && minFilterValue <= counter.count;
  };
  return (
    <React.Fragment>
      <div id="search-filters" className="round">
        <Search value={textFilter} onChange={setTextFilter} />
        <Filters
          {...{
            setMax,
            setMin,
            minFilterValue,
            maxFilterValue,
            topValue,
            useValueFilter,
            toggleValueFilter,
            disabled: topValue === "" || !useValueFilter
          }}
        />
      </div>
      <Counterlist
        counterarray={counterarray
          .filter(textFilterFunc)
          .filter(valueFilterFunc)}
        raisepopup={showPopup}
        onAction={updateCounterArray}
      />
      <CounterAdder raisepopup={showPopup} />
      {popupVisible && (
        <Popup
          showPopup={showPopup}
          onSuccess={data => {
            updateCounterArray(data);
            showPopup(false);
          }}
          onFailure={() => showPopup(false)}
        />
      )}
    </React.Fragment>
  );
}

export default App;
