import React from 'react';
import {removeCounter, decreaseCounter, increaseCounter} from '../../requests';
function Counter({id, title, count, onAction}){
    return(<div id={id} className="counter">
    <div class="remove" onClick={() => removeCounter(id, onAction)}>
        x
    </div>
    {`${title}: ${count}`}
    <div className="increase" onClick={() => increaseCounter(id, onAction)}></div>
    <div className="decrease" onClick={() => decreaseCounter(id, onAction)}></div>
    </div>)
}

export default Counter;