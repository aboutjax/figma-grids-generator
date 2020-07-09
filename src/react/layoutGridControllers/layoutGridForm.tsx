import * as React from "react";
import { useState } from "react";
import { Option } from "./sliderHorizontal";
import styled from "styled-components";
import * as _ from "lodash";

const LayoutGridForm = (props) => {
  const [layoutGridState, setLayoutGridState] = React.useState([
    { type: "horizontal", value: 0 },
    { type: "vertical", value: 0 },
    { type: "baselineGrid", value: false },
    { type: "maxWidth", value: false },
    { type: "columns", value: false },
    { type: "maxWidthLeftAligned", value: false },
  ]);

  const [
    selectedFrameLayoutGrids,
    setselectedFrameLayoutGrids,
  ] = React.useState(props.selectedLayoutGrids);

  const [paddingHorizontal, setPaddingHorizontal] = useState(0);
  const [paddingVertical, setPaddingVertical] = useState(0);
  const [baseline, setBaseline] = useState(false);
  const [maxWidth, setMaxWidth] = useState(false);
  const [maxWidthLeftAligned, setMaxWidthLeftAligned] = useState(false);
  const [columns, setColumns] = useState(false);

  let updateLayoutGridStateFromSelectedFrame = (type, value) => {
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === type) {
        grid.value = value;
      } else {
        // Do nothing
      }
      return grid;
    });
    setLayoutGridState(newArray);
  };

  React.useEffect(() => {
    checkSelectedFrame();
    // console.log("state to paint:", layoutGridState);
  }, [props.selectedLayoutGrids]);

  let checkSelectedFrame = async () => {
    let grids = props.selectedLayoutGrids;

    // Horizontal Padding 1
    let isHorizontalPadding1 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 4;
    };
    let hasHorizontalPadding1 = grids.some(isHorizontalPadding1);

    // Horizontal Padding 2
    let isHorizontalPadding2 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 8;
    };
    let hasHorizontalPadding2 = grids.some(isHorizontalPadding2);

    // Horizontal Padding 3
    let isHorizontalPadding3 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 12;
    };
    let hasHorizontalPadding3 = grids.some(isHorizontalPadding3);

    // Horizontal Padding 4
    let isHorizontalPadding4 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 16;
    };
    let hasHorizontalPadding4 = grids.some(isHorizontalPadding4);

    // Horizontal Padding 5
    let isHorizontalPadding5 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 20;
    };
    let hasHorizontalPadding5 = grids.some(isHorizontalPadding5);

    // Horizontal Padding 6
    let isHorizontalPadding6 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 24;
    };
    let hasHorizontalPadding6 = grids.some(isHorizontalPadding6);

    // Horizontal Padding 7
    let isHorizontalPadding7 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 28;
    };
    let hasHorizontalPadding7 = grids.some(isHorizontalPadding7);

    // Horizontal Padding 8
    let isHorizontalPadding8 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 32;
    };
    let hasHorizontalPadding8 = grids.some(isHorizontalPadding8);

    // Horizontal Padding 9
    let isHorizontalPadding9 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 36;
    };
    let hasHorizontalPadding9 = grids.some(isHorizontalPadding9);

    // Horizontal Padding 10
    let isHorizontalPadding10 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 40;
    };
    let hasHorizontalPadding10 = grids.some(isHorizontalPadding10);

    // Horizontal Padding 11
    let isHorizontalPadding11 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 44;
    };
    let hasHorizontalPadding11 = grids.some(isHorizontalPadding11);

    // Horizontal Padding 12
    let isHorizontalPadding12 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 48;
    };
    let hasHorizontalPadding12 = grids.some(isHorizontalPadding12);

    // Set States
    if (hasHorizontalPadding1) {
      setPaddingHorizontal(1);
      updateLayoutGridStateFromSelectedFrame("horizontal", "1");
    } else if (hasHorizontalPadding2) {
      setPaddingHorizontal(2);
      updateLayoutGridStateFromSelectedFrame("horizontal", "2");
    } else if (hasHorizontalPadding3) {
      setPaddingHorizontal(3);
      updateLayoutGridStateFromSelectedFrame("horizontal", "3");
    } else if (hasHorizontalPadding4) {
      setPaddingHorizontal(4);
      updateLayoutGridStateFromSelectedFrame("horizontal", "4");
    } else if (hasHorizontalPadding5) {
      setPaddingHorizontal(5);
      updateLayoutGridStateFromSelectedFrame("horizontal", "5");
    } else if (hasHorizontalPadding6) {
      setPaddingHorizontal(6);
      updateLayoutGridStateFromSelectedFrame("horizontal", "6");
    } else if (hasHorizontalPadding7) {
      setPaddingHorizontal(7);
      updateLayoutGridStateFromSelectedFrame("horizontal", "7");
    } else if (hasHorizontalPadding8) {
      setPaddingHorizontal(8);
      updateLayoutGridStateFromSelectedFrame("horizontal", "8");
    } else if (hasHorizontalPadding9) {
      setPaddingHorizontal(9);
      updateLayoutGridStateFromSelectedFrame("horizontal", "9");
    } else if (hasHorizontalPadding10) {
      setPaddingHorizontal(10);
      updateLayoutGridStateFromSelectedFrame("horizontal", "10");
    } else if (hasHorizontalPadding11) {
      setPaddingHorizontal(11);
      updateLayoutGridStateFromSelectedFrame("horizontal", "11");
    } else if (hasHorizontalPadding12) {
      setPaddingHorizontal(12);
      updateLayoutGridStateFromSelectedFrame("horizontal", "12");
    } else {
      setPaddingHorizontal(0);
      updateLayoutGridStateFromSelectedFrame("horizontal", "0");
    }

    // Vertical Padding 1
    let isVerticalPadding1 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 4;
    };
    let hasVerticalPadding1 = grids.some(isVerticalPadding1);

    // Vertical Padding 2
    let isVerticalPadding2 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 8;
    };
    let hasVerticalPadding2 = grids.some(isVerticalPadding2);

    // Vertical Padding 3
    let isVerticalPadding3 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 12;
    };
    let hasVerticalPadding3 = grids.some(isVerticalPadding3);

    // Vertical Padding 4
    let isVerticalPadding4 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 16;
    };
    let hasVerticalPadding4 = grids.some(isVerticalPadding4);

    // Vertical Padding 5
    let isVerticalPadding5 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 20;
    };
    let hasVerticalPadding5 = grids.some(isVerticalPadding5);

    // Vertical Padding 6
    let isVerticalPadding6 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 24;
    };
    let hasVerticalPadding6 = grids.some(isVerticalPadding6);

    // Vertical Padding 7
    let isVerticalPadding7 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 28;
    };
    let hasVerticalPadding7 = grids.some(isVerticalPadding7);

    // Vertical Padding 8
    let isVerticalPadding8 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 32;
    };
    let hasVerticalPadding8 = grids.some(isVerticalPadding8);

    // Vertical Padding 9
    let isVerticalPadding9 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 36;
    };
    let hasVerticalPadding9 = grids.some(isVerticalPadding9);

    // Vertical Padding 10
    let isVerticalPadding10 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 40;
    };
    let hasVerticalPadding10 = grids.some(isVerticalPadding10);

    // Vertical Padding 11
    let isVerticalPadding11 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 44;
    };
    let hasVerticalPadding11 = grids.some(isVerticalPadding11);

    // Vertical Padding 12
    let isVerticalPadding12 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 48;
    };
    let hasVerticalPadding12 = grids.some(isVerticalPadding12);

    // Set States
    if (hasVerticalPadding1) {
      setPaddingVertical(1);
      updateLayoutGridStateFromSelectedFrame("vertical", "1");
    } else if (hasVerticalPadding2) {
      setPaddingVertical(2);
      updateLayoutGridStateFromSelectedFrame("vertical", "2");
    } else if (hasVerticalPadding3) {
      setPaddingVertical(3);
      updateLayoutGridStateFromSelectedFrame("vertical", "3");
    } else if (hasVerticalPadding4) {
      setPaddingVertical(4);
      updateLayoutGridStateFromSelectedFrame("vertical", "4");
    } else if (hasVerticalPadding5) {
      setPaddingVertical(5);
      updateLayoutGridStateFromSelectedFrame("vertical", "5");
    } else if (hasVerticalPadding6) {
      setPaddingVertical(6);
      updateLayoutGridStateFromSelectedFrame("vertical", "6");
    } else if (hasVerticalPadding7) {
      setPaddingVertical(7);
      updateLayoutGridStateFromSelectedFrame("vertical", "7");
    } else if (hasVerticalPadding8) {
      setPaddingVertical(8);
      updateLayoutGridStateFromSelectedFrame("vertical", "8");
    } else if (hasVerticalPadding9) {
      setPaddingVertical(9);
      updateLayoutGridStateFromSelectedFrame("vertical", "9");
    } else if (hasVerticalPadding10) {
      setPaddingVertical(10);
      updateLayoutGridStateFromSelectedFrame("vertical", "10");
    } else if (hasVerticalPadding11) {
      setPaddingVertical(11);
      updateLayoutGridStateFromSelectedFrame("vertical", "11");
    } else if (hasVerticalPadding12) {
      setPaddingVertical(12);
      updateLayoutGridStateFromSelectedFrame("vertical", "12");
    } else {
      setPaddingVertical(0);
      updateLayoutGridStateFromSelectedFrame("vertical", "0");
    }

    // Max Width
    let isMaxWidth = (element) => {
      return element["pattern"] === "COLUMNS" && element["gutterSize"] === 960;
    };
    let hasMaxWidth = grids.some(isMaxWidth);

    if (hasMaxWidth) {
      setMaxWidth(true);
      updateLayoutGridStateFromSelectedFrame("maxWidth", true);
    } else {
      setMaxWidth(false);
      updateLayoutGridStateFromSelectedFrame("maxWidth", false);
    }

    // Max Width Left Aligned
    let isMaxWidthLeftAligned = (element) => {
      return (
        element["pattern"] === "COLUMNS" &&
        element["sectionSize"] === 960 &&
        element["alignment"] === "MIN"
      );
    };
    let hasMaxWidthLeftAligned = grids.some(isMaxWidthLeftAligned);

    if (hasMaxWidthLeftAligned) {
      setMaxWidthLeftAligned(true);
      // console.log("found left alignes");

      updateLayoutGridStateFromSelectedFrame("maxWidthLeftAligned", true);
    } else {
      // console.log("nope");
      setMaxWidthLeftAligned(false);
      updateLayoutGridStateFromSelectedFrame("maxWidthLeftAligned", false);
    }

    // Columns
    let isColumns = (element) => {
      return element["pattern"] === "COLUMNS" && element["count"] === 12;
    };
    let hasColumns = grids.some(isColumns);

    if (hasColumns) {
      setColumns(true);
      updateLayoutGridStateFromSelectedFrame("columns", true);
    } else {
      setColumns(false);
      updateLayoutGridStateFromSelectedFrame("columns", false);
    }
  };

  let handleHorizontalChange = (val) => {
    let targetValue = val.target.value;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "horizontal") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update states
    setLayoutGridState(newArray);
    setPaddingHorizontal(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleVerticalChange = (val) => {
    let targetValue = val.target.value;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "vertical") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setPaddingVertical(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleBaselineChange = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "baselineGrid") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleMaxWidth = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "maxWidth") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setMaxWidth(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleMaxWidthLeftAligned = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "maxWidthLeftAligned") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setMaxWidthLeftAligned(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleColumns = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "columns") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setColumns(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };

  let handleClearLayoutGrids = (val) => {
    props.onChange([
      { type: "horizontal", value: 0 },
      { type: "vertical", value: 0 },
      { type: "baselineGrid", value: false },
      { type: "maxWidth", value: false },
      { type: "columns", value: false },
      { type: "maxWidthLeftAligned", value: false },
    ]);
  };

  return (
    <div>
      <ClearLayoutGrid
        selectedLayoutGrids={props.selectedLayoutGrids}
        onChange={handleClearLayoutGrids}
      />
      <Option
        value={paddingHorizontal}
        type="horizontal"
        onChange={handleHorizontalChange}
      />
      <Option
        value={paddingVertical}
        type="vertical"
        onChange={handleVerticalChange}
      />
      {/* // Deprecated */}
      {/* <BasegridCheck onChange={handleBaselineChange} /> */}
      <MaxWidthCheck value={maxWidth} onChange={handleMaxWidth} />
      <MaxWidthLeftAlignCheck
        value={maxWidthLeftAligned}
        onChange={handleMaxWidthLeftAligned}
      />
      <ColumnsCheck value={columns} onChange={handleColumns} />
    </div>
  );
};

function BasegridCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Baseline Grids</h4>
      <label htmlFor="baseline-grid" className="layout-grid-label">
        <span>Show baseline grids</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="baseline-grid"
          name="layout-grid"
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

function MaxWidthCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Max Width</h4>
      <label htmlFor="max-width" className="layout-grid-label">
        <span>Show max width</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="max-width"
          name="layout-grid"
          onChange={props.onChange}
          checked={props.value}
        />
      </label>
    </div>
  );
}

function MaxWidthLeftAlignCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Max Width (Left Aligned)</h4>
      <label htmlFor="max-width-left-aligned" className="layout-grid-label">
        <span>Show max width (left aligned)</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="max-width-left-aligned"
          name="layout-grid"
          onChange={props.onChange}
          checked={props.value}
        />
      </label>
    </div>
  );
}

function ColumnsCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Columns</h4>
      <label htmlFor="columns" className="layout-grid-label">
        <span>Show columns</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="columns"
          name="layout-grid"
          onChange={props.onChange}
          checked={props.value}
        />
      </label>
    </div>
  );
}

const ClearAllLink = styled.a`
  position: absolute;
  top: 16px;
  right: 16px;
`;

function ClearLayoutGrid(props) {
  return (
    <ClearAllLink href="#" onClick={props.onChange}>
      Clear All
    </ClearAllLink>
  );
}

export { LayoutGridForm };
