"use strict";

import Powerups from "../Powerups/Powerups";
import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";

/*
Blocks to drop are in line with players score in increments of 10
At start of game 1 block drops at a time
At 20 points, 2 blocks drop -> at 30 points, 3 drop and so on
When a block drops, remove it from allBlocks and push it to droppedBlocks
*/

const defineTotalBlocksToDrop = () => {
  var blocksToDrop;
  if (Globals.game.playerScore >= 20) {
    blocksToDrop =
      Math.floor(Globals.game.playerScore / 10) -
      Powerups.decreaseDroppedBlocks;
  } else {
    blocksToDrop = 1;
  }
  return blocksToDrop;
};
const removeBlocks = totalBlocks => {
  var blocksToDrop = Globals.game.allBlocks.slice(0, totalBlocks);

  blocksToDrop.forEach(block => {
    util.elementLib.classChange(block, "add", "falling", "clear");
    Globals.game.droppedBlocks.push(block);
    Globals.game.allBlocks.shift();
  });
};

const DropBlocks = () => {
  if (!Globals.game.gameIsPaused) {
    if (Globals.game.allBlocks.length) {
      setTimeout(() => {
        removeBlocks(defineTotalBlocksToDrop());
        DropBlocks();
      }, Globals.music.bpm);
    } else {
      setTimeout(() => {
        Globals.game.gameOver = true;
        Globals.dom.pauseButton.classList.add("hidden");
        Globals.dom.startButton.textCOntent = "Play Again";
        Globals.dom.startButton.classList.remove("hidden");
        console.log("Game Over, DORK");
      }, Globals.music.bpm);
    }
  }
};

export default DropBlocks;
