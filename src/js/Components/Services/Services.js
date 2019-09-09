"use strict";

import Globals from "../Globals/Globals";
import CreateBlock from "../BuildGrid/CreateBlock";
import BuildGrid from "../BuildGrid/BuildGrid";
import Countdown from "../Countdown/Countdown";
import DropBlocks from "../DropBlocks/DropBlocks";
import FlashTile from "../FlashTile/FlashTile";

const Services = {
  init() {
    Services.createGrid();
  },
  createGrid() {
    BuildGrid(CreateBlock());
  },
  startCountdown() {
    Countdown();
  },
  runGame() {
    if (!Globals.game.paused) {
      DropBlocks();
      FlashTile();
      // blocksRemaining();
    }
  }
};

export default Services;
