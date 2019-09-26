import React from "react";
import Counter from './counter.js';
import Countercreator from './insideman';
function Counterlist({counterarray, raisepopup, actions}) {
  return (
    <div id="counter-list">
    {counterarray.map(x => ({...x, actions})).map(Counter).concat(<Countercreator key="insideman" onClick={raisepopup}/>)}
    </div>
  );
}

export default Counterlist;
