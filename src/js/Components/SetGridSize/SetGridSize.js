const SetGridSize = {
  gridSize: 20,
  init() {
    var root = document.documentElement;
    root.style.setProperty("--grid-size", SetGridSize.gridSize);

    return true;
  }
};

export default SetGridSize;
