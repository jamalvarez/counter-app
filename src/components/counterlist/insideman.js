import React from 'react';

function insideman({onClick}){
    return(<div id="insideman" onClick={onClick} className="round counter">
        <div className="cross">
            +
        </div>
    </div>)
}
export default insideman;