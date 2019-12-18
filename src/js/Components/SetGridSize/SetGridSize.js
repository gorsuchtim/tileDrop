"use strict";

const SetGridSize = {
  // Ex: Grid size 5 means 5 rows and 5 columns
  gridSize: 5,
  init() {
    var root = document.documentElement;
    root.style.setProperty("--grid-size", SetGridSize.gridSize);

    return true;
  }
};

export default SetGridSize;
