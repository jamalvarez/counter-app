import React from "react";

function Filters({
  setMax,
  setMin,
  minFilterValue,
  maxFilterValue,
  topValue,
  bottomValue,
  useValueFilter,
  toggleValueFilter
}) {
  return (
    <div id="filters">
      <input
        class="min"
        name="range_1"
        type="range"
        disabled={topValue === ""}
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
        class="max"
        name="range_1"
        type="range"
        disabled={topValue === ""}
        min={"0"}
        max={topValue}
        value={maxFilterValue}
        onInput={e => {
          if (Number(e.target.value) > Number(minFilterValue)) {
            setMax(e.target.value);
          }
        }}
      />
      <input
        disabled={bottomValue === ""}
        type="checkbox"
        checked={useValueFilter}
        onChange={e => {
          toggleValueFilter(e.target.checked);
        }}
      />
    </div>
  );
}

export default Filters;
