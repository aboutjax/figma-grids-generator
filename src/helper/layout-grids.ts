import {
  paddingHorizontal,
  paddingVertical,
  baselineGrids,
  getMaxWidthGrids,
  maxWidthGrids,
  columnGrids,
  maxWidthLeftAlignedGrids,
} from "../theme-styles/LayoutGrids";

const SetLayoutGrid = (nodes, msg) => {
  // console.log(msg.layoutGridOptions);

  for (const node of nodes) {
    // node.layoutGrids = [];

    const horizontalPaddingSliderValue = msg.layoutGridOptions[0].value;
    const verticalPaddingSliderValue = msg.layoutGridOptions[1].value;
    const showBaselineRows = msg.layoutGridOptions[2].value;
    const showMaxWidth = msg.layoutGridOptions[3].value;
    const showColumns = msg.layoutGridOptions[4].value;
    const showMaxWidthLeftAligned = msg.layoutGridOptions[5].value;

    let allGrids = [];

    let spacingHorizontal = 0;
    let spacingVertical = 0;

    switch (horizontalPaddingSliderValue) {
      default:
        spacingHorizontal = 0;
        break;
      case "0":
        spacingHorizontal = 0;
        break;
      case "1":
        spacingHorizontal = 4;
        break;
      case "2":
        spacingHorizontal = 8;
        break;
      case "3":
        spacingHorizontal = 12;
        break;
      case "4":
        spacingHorizontal = 16;
        break;
      case "5":
        spacingHorizontal = 20;
        break;
      case "6":
        spacingHorizontal = 24;
        break;
      case "7":
        spacingHorizontal = 28;
        break;
      case "8":
        spacingHorizontal = 32;
        break;
      case "9":
        spacingHorizontal = 36;
        break;
      case "10":
        spacingHorizontal = 40;
        break;
      case "11":
        spacingHorizontal = 44;
        break;
      case "12":
        spacingHorizontal = 48;
        break;
    }

    switch (verticalPaddingSliderValue) {
      default:
        spacingVertical = 0;
        break;
      case "0":
        spacingVertical = 0;
        break;
      case "1":
        spacingVertical = 4;
        break;
      case "2":
        spacingVertical = 8;
        break;
      case "3":
        spacingVertical = 12;
        break;
      case "4":
        spacingVertical = 16;
        break;
      case "5":
        spacingVertical = 20;
        break;
      case "6":
        spacingVertical = 24;
        break;
      case "7":
        spacingVertical = 28;
        break;
      case "8":
        spacingVertical = 32;
        break;
      case "9":
        spacingVertical = 36;
        break;
      case "10":
        spacingVertical = 40;
        break;
      case "11":
        spacingVertical = 44;
        break;
      case "12":
        spacingVertical = 48;
        break;
    }

    paddingHorizontal(spacingHorizontal).then((val) => {
      if (val.length == 0) {
        // do nothing
      } else {
        for (const grid of val) {
          allGrids.push(grid);
          // console.log(allGrids);
          node.layoutGrids = allGrids;
        }
      }
    });

    paddingVertical(spacingVertical).then((val) => {
      if (val.length == 0) {
        // do nothing
      } else {
        for (const grid of val) {
          allGrids.push(grid);
          // console.log(allGrids);
          node.layoutGrids = allGrids;
        }
      }
    });

    if (showMaxWidth) {
      for (const grid of maxWidthGrids) {
        // console.log(grid);

        allGrids.push(grid);

        node.layoutGrids = allGrids;
      }
    } else {
      node.layoutGrids = allGrids;
    }

    if (showMaxWidthLeftAligned) {
      for (const grid of maxWidthLeftAlignedGrids) {
        allGrids.push(grid);

        node.layoutGrids = allGrids;
      }
    } else {
      node.layoutGrids = allGrids;
    }

    if (showColumns) {
      for (const grid of columnGrids) {
        // console.log(grid);

        allGrids.push(grid);

        node.layoutGrids = allGrids;
      }
    } else {
      node.layoutGrids = allGrids;
    }

    if (showBaselineRows) {
      // console.log("show");
      allGrids.push(baselineGrids);
      node.layoutGrids = allGrids;
      // console.log(allGrids);
    } else {
      node.layoutGrids = allGrids;
      // console.log(allGrids);
    }
  }
};

export { SetLayoutGrid };
