import React from 'react';
import {removeCounter, decreaseCounter, increaseCounter} from '../../requests';
function Counter({id, title, count, onAction}){
    return(<div id={id} className="counter">
    <div className="remove" onClick={() => removeCounter(id, onAction)}>
        x
    </div>
    {`${title}: ${count}`}
    <div className="increase" onClick={() => increaseCounter(id, onAction)}></div>
    <div className="decrease" onClick={() => count < 1 ? null : decreaseCounter(id, onAction)}></div>
    </div>)
}

export default Counter;