import React from 'react';


function Search({value, onChange}){
    return(
        <div id="searchbar">
        <input type="text" value={value} onChange={(e) => {onChange(e.target.value)}}/>
        </div>
    )
}


export default Search;