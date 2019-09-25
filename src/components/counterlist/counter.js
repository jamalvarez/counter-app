import React from 'react';
import {removeCounter, decreaseCounter, increaseCounter} from '../../requests';
function Counter({id, title, count, onAction, onFailure}){
    return(<div id={id} className="counter round">
    <div className="remove" onClick={() => removeCounter(id, onAction, onFailure)}>
        x
    </div>
    <span className="title">{title}</span><span className="countnumber">- {count}</span>
    <div className="increase" onClick={() => increaseCounter(id, onAction, onFailure)}> + </div>
    <div className="decrease" onClick={() => count < 1 ? null : decreaseCounter(id, onAction, onFailure)}>-</div>
    </div>)
}

export default Counter;