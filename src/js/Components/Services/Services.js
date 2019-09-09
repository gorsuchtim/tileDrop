"use strict";

import CreateBlock from "../BuildGrid/CreateBlock";
import BuildGrid from "../BuildGrid/BuildGrid";

const Services = {
  init() {
    Services.buildGrid();
  },
  buildGrid() {
    BuildGrid(CreateBlock());
  }
  // startGame() {
  //   // countdown();
  // },
  // runGame() {
  //   if (!globals.game.paused) {
  //     dropBlocks();
  //     // when game is running regularly as set in BlocksRemaining flashTile fails to clear out the tile that has flashed
  //     flashTile();
  //     blocksRemaining();
  //   }
  // }
};

export default Services;
