const SetTileSize = {
  tileSize: 64,
  init() {
    var root = document.documentElement;
    root.style.setProperty("--tile-size", SetTileSize.tileSize + "px");
    root.style.setProperty("--tile-size", SetTileSize.tileSize + "px");
    return true;
  }
};

export default SetTileSize;
