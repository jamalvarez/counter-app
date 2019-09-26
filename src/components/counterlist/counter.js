import React from 'react';
function Counter({id, title, count, actions}){
    return(<div id={id} className="counter round">
    <div className="remove" onClick={() => actions.remove(id)}>
        x
    </div>
    <span className="title">{title}</span><span className="countnumber">- {count}</span>
    <div className="increase" onClick={() => actions.increase(id)}> + </div>
    <div className="decrease" onClick={() => count < 1 ? null : actions.decrease(id)}>-</div>
    </div>)
}

export default Counter;