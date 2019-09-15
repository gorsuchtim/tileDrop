"use strict";

import Globals from "../Globals/Globals";
import CreateBlock from "../BuildGrid/CreateBlock";
import BuildGrid from "../BuildGrid/BuildGrid";
import Countdown from "../Countdown/Countdown";
import DropBlocks from "../DropBlocks/DropBlocks";
import FlashTile from "../FlashTile/FlashTile";
import SetBlockSize from "../SetBlockSize/SetBlockSize";

const Services = {
  init() {
    if (SetBlockSize.init()) {
      // BuildGrid(CreateBlock());
      BuildGrid();
    }
  },
  startCountdown() {
    //Countdown();
  },
  runGame() {
    //DropBlocks();
    //FlashTile();
    // blocksRemaining();
  }
};

export default Services;
