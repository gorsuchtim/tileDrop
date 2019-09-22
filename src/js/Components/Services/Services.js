"use strict";

import BuildGrid from "../BuildGrid/BuildGrid";
import DropBlocks from "../DropBlocks/DropBlocks";
import FlashTile from "../FlashTile/FlashTile";
import SetGridSize from "../SetGridSize/SetGridSize";

const Services = {
  init() {
    if (SetGridSize.init()) {
      BuildGrid();
    }
  },
  runGame() {
    DropBlocks();
    FlashTile();
  }
};

export default Services;
