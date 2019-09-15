"use strict";

import BuildGrid from "../BuildGrid/BuildGrid";

import DropBlocks from "../DropBlocks/DropBlocks";
import FlashTile from "../FlashTile/FlashTile";
import SetGridSize from "../SetGridSize/SetGridSize";
import SetTileSize from "../SetTileSize/SetTileSize";

const Services = {
  init() {
    if (SetGridSize.init()) {
      if (SetTileSize.init()) {
        BuildGrid();
      }
    }
  },
  runGame() {
    DropBlocks();
    FlashTile();
  }
};

export default Services;
