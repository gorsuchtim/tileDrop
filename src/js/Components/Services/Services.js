"use strict";

import CreateBlock from "../BuildGrid/CreateBlock";
import BuildGrid from "../BuildGrid/BuildGrid";
import Countdown from "../Countdown/Countdown";
import Globals from "../Globals/Globals";

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
      console.log("game running!");
      // dropBlocks();
      // // when game is running regularly as set in BlocksRemaining flashTile fails to clear out the tile that has flashed
      // flashTile();
      // blocksRemaining();
    }
  }
};

export default Services;
