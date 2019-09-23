import React from "react";
import Counter from './counter.js';
import Countercreator from './insideman';
function Counterlist({counterarray, raisepopup, onRemove}) {
  return (
    <div id="counter-list">
    {counterarray.map(x => ({...x, key:x.id, onRemove})).map(Counter).concat(<Countercreator onClick={raisepopup}/>)}
    </div>
  );
}

export default Counterlist;
