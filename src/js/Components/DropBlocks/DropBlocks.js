"use strict";

import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";

const defineTotalBlocksToDrop = () => {
  var blocksToDrop;
  if (Globals.game.playerScore >= 20) {
    blocksToDrop =
      Math.floor(Globals.game.playerScore / 10) -
      Globals.powerups.decreaseDroppedBlocks;
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
      // setTimeout(() => {
      //   removeBlocks(defineTotalBlocksToDrop());
      //   DropBlocks();
      // }, Globals.music.bpm);
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
