"use strict";

import BuildGrid from "../BuildGrid/BuildGrid";
import Countdown from "../Countdown/Countdown";
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
  startCountdown() {
    Countdown();
  },
  runGame() {
    // DropBlocks();
    FlashTile();
    // blocksRemaining();
  }
};

export default Services;
