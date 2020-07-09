declare function require(path: string): any;
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

import { LayoutGridForm } from "./react/layoutGridControllers/layoutGridForm";

let App = () => {
  const [selected, setSelected] = React.useState(false);
  const [layoutGrids, setLayoutGrids] = React.useState();

  onmessage = (val) => {
    let message = val.data.pluginMessage;
    if (message === "nothing selected") {
      // console.log("nothing selected");
      setSelected(false);
    } else {
      setSelected(true);

      let selectedFrameLayoutGrids = val.data.pluginMessage.layoutGrids;

      setLayoutGrids(selectedFrameLayoutGrids);
    }
  };

  let SetLayoutGrid = (val) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "set-layout-grid",
          layoutGridOptions: val,
        },
      },
      "*"
    );
  };

  return (
    <div className="container">
      <div className="section" style={{ position: "relative" }}>
        <h4>Layout Grids</h4>
        <p>Apply spacing from a 4px scale</p>
        <LayoutGridForm
          selected={selected}
          selectedLayoutGrids={layoutGrids}
          onChange={SetLayoutGrid}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
