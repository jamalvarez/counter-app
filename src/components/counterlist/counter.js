import React from 'react';

function Counter({id, name, count}){
    return(<div id={id} className="counter">{`${name} has a value of ${count}`}</div>)
}

export default Counter;