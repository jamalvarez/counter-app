import React from "react";

function Filters({
  setMax,
  setMin,
  minFilterValue,
  maxFilterValue,
  topValue,
  disabled,
  useValueFilter,
  toggleValueFilter
}) {
  return (
      <React.Fragment>
      <div id="filter-button" className={`${useValueFilter ? 'active' : 'inactive'}`} onClick={() => toggleValueFilter(!useValueFilter)}/>

    <div id="filters">
    <div id="filtertitle">FILTER BY COUNT VALUE</div>
    <span id="minFilterValue">{minFilterValue}</span>
      <input
        className="min seethrough"
        name="range_1"
        type="range"
        disabled={disabled}
        min={"0"}
        max={topValue}
        value={minFilterValue}
        onChange={e => {
          if (Number(e.target.value) < Number(maxFilterValue)) {
            setMin(e.target.value);
          }
        }}
      />
      <input
        className="max"
        name="range_1"
        type="range"
        disabled={disabled}
        min={"0"}
        max={topValue}
        value={maxFilterValue}
        onInput={e => {
          if (Number(e.target.value) > Number(minFilterValue)) {
            setMax(e.target.value);
          }
        }}
      />
      <span id="maxFilterValue">{maxFilterValue}</span>
    </div>
    </React.Fragment>
  );
}

export default Filters;
