import { SetLayoutGrid } from "./helper/layout-grids";
import { onSelectionChange } from "./helper/callback";

figma.showUI(__html__);

figma.ui.resize(300, 440);

figma.on("selectionchange", () => {
  let thisSelection = figma.currentPage.selection[0];
  onSelectionChange(thisSelection);
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "set-layout-grid") {
    SetLayoutGrid(figma.currentPage.selection, msg);
  }
};
