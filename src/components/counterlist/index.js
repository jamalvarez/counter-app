import React from "react";
import Counter from './counter.js';
import Countercreator from './insideman';
function Counterlist({counterarray}) {
  return (
    <div id="counter-list">
    {counterarray.map(Counter).concat(<Countercreator/>)}
    </div>
  );
}

export default Counterlist;
