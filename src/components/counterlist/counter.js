import React from 'react';

function Counter({id, title, count}){
    return(<div id={id} className="counter">{`${title} has a value of ${count}`}</div>)
}

export default Counter;