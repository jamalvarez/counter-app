import React from 'react';
import {removeCounter} from '../../requests';
function Counter({id, title, count}){
    return(<div id={id} className="counter">
    <div class="remove" onClick={(id) => removeCounter(id)}>
        x
    </div>
    {`${title} has a value of ${count}`}
    <div className="increase"></div>
    <div className="decrease"></div>
    </div>)
}

export default Counter;