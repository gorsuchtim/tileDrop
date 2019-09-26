const SetGridSize = {
  gridSize: 10,
  init() {
    var root = document.documentElement;
    root.style.setProperty("--grid-size", SetGridSize.gridSize);

    return true;
  }
};

export default SetGridSize;
