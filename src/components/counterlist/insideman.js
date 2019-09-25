import React from 'react';

function insideman({onClick}){
    return(<div id="insideman" className="round counter">
        <div onClick={onClick} className="cross">
            +
        </div>
    </div>)
}
export default insideman;