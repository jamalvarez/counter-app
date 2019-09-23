import React from "react";
import Counter from './counter.js';
import Countercreator from './insideman';
function Counterlist({counterarray, raisepopup}) {
  return (
    <div id="counter-list">
    {counterarray.map(Counter).concat(<Countercreator onClick={raisepopup}/>)}
    </div>
  );
}

export default Counterlist;
