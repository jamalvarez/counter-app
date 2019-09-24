import React, { useState } from "react";

function Filters() {
  const [maxFilter, setMax] = useState({ currentValue: "100", topValue: "100" });
  const [minFilter, setMin] = useState({ currentValue: "1", bottomValue: "1" });
  return (
    <div id="filters">
      <input
        class="min"
        name="range_1"
        type="range"
        min={minFilter.bottomValue}
        max={maxFilter.topValue}
        value={minFilter.currentValue}
        onChange={e => {
          if (Number(e.target.value) < Number(maxFilter.currentValue)) {
            setMin({ currentValue: e.target.value, bottomValue: "1" });
          }
        }}
      />
      <input
        class="max"
        name="range_1"
        type="range"
        min={minFilter.bottomValue}
        max={maxFilter.topValue}
        value={maxFilter.currentValue}
        onInput={e => {
          if (Number(e.target.value) > Number(minFilter.currentValue)) {
            setMax({ currentValue: e.target.value, topValue: "100" });
          }
        }}
      />
    </div>
  );
}

export default Filters;
