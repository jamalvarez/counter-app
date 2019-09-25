import React from "react";
import Counter from './counter.js';
import Countercreator from './insideman';
function Counterlist({counterarray, raisepopup, onAction, onFailure}) {
  return (
    <div id="counter-list">
    {counterarray.map(x => ({...x, key:x.id, onAction, onFailure})).map(Counter).concat(<Countercreator key="insideman" onClick={raisepopup}/>)}
    </div>
  );
}

export default Counterlist;
