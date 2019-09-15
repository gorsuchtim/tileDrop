const SetGridSize = {
  gridSize: 7,
  init() {
    var root = document.documentElement;
    root.style.setProperty("--grid-size", SetGridSize.gridSize);
    root.style.setProperty("--grid-size", SetGridSize.gridSize);
    return true;
  }
};

export default SetGridSize;
