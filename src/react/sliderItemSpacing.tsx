import * as React from "react";
const SliderItemSpacing = (props) => (
  <div>
    <label
      className="padding-input-range-label"
      htmlFor="padding-horizontal-slider"
    >
      <span className="label">0</span>
      <span className="label">1</span>
      <span className="label">2</span>
      <span className="label">3</span>
      <span className="label">4</span>
      <span className="label">5</span>
      <span className="label">6</span>
      <span className="label">7</span>
    </label>
    <input
      disabled={props.layoutMode == "NONE" ? true : false}
      className="padding-input-range"
      name="itemSpacing"
      type="range"
      step="1"
      min="0"
      max="7"
      value={props.itemSpacing}
      onChange={props.onItemSpacingSlider}
    />
  </div>
);

export { SliderItemSpacing };
