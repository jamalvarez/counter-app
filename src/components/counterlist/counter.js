import React from 'react';
import {removeCounter} from '../../requests';
function Counter({id, title, count, onRemove}){
    return(<div id={id} className="counter">
    <div class="remove" onClick={() => removeCounter(id, onRemove)}>
        x
    </div>
    {`${title} has a value of ${count}`}
    <div className="increase"></div>
    <div className="decrease"></div>
    </div>)
}

export default Counter;