import React, { useState, useEffect } from "react";
import Search from "./components/search";
import Filters from "./components/filters";
import Counterlist from "./components/counterlist";
import CounterAdder from "./components/counteradder";
import CreationModal from "./components/popups/creationmodal";
import Errormodal from "./components/popups/errormodal";
import {
  fetchInitialData,
  removeCounter,
  decreaseCounter,
  increaseCounter,
  saveCounter
} from "./requests";

function App() {
  const [counterarray, updateCounterArray] = useState([]);
  const [popupVisible, showPopup] = useState(false);
  const [error, displayError] = useState(false);
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

  const actions = {
    remove: data =>
      removeCounter(data, updateCounterArray, () => displayError(true)),
    decrease: data =>
      decreaseCounter(data, updateCounterArray, () => displayError(true)),
    increase: data =>
      increaseCounter(data, updateCounterArray, () => displayError(true))
  };

  const onSave = data =>
  saveCounter(
    data,
    data => {
      updateCounterArray(data);
      showPopup(false);
    },
    () => {
      showPopup(false);
      displayError(true);
    }
  );
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
        actions={actions}
      />
      <CounterAdder raisepopup={showPopup} />
      {popupVisible && (
        <CreationModal
          showPopup={showPopup}
          onSave={onSave
          }
        />
      )}
      {error && <Errormodal onAccept={() => displayError(false)} />}
    </React.Fragment>
  );
}

export default App;
