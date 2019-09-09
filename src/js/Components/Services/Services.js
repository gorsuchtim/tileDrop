"use strict";

import Globals from "../Globals/Globals";
import CreateBlock from "../BuildGrid/CreateBlock";
import BuildGrid from "../BuildGrid/BuildGrid";
import Countdown from "../Countdown/Countdown";
import DropBlocks from "../DropBlocks/DropBlocks";

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
      // // when game is running regularly as set in BlocksRemaining flashTile fails to clear out the tile that has flashed
      // flashTile();
      // blocksRemaining();
    }
  }
};

export default Services;
