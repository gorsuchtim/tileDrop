"use strict";
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
    blocksToDrop = Math.floor(Globals.game.playerScore / 10);
  } else {
    blocksToDrop = 1;
  }
  return blocksToDrop;
};
const removeBlocks = howManyBlocksToDrop => {
  for (var i = 0; i < howManyBlocksToDrop; i++) {
    Globals.game.droppedBlocks.push(Globals.game.allBlocks[0]);
    util.elementLib.classChange(
      Globals.game.allBlocks[0],
      "add",
      "falling",
      "clear"
    );
    Globals.game.allBlocks.shift();
  }
};

const DropBlocks = () => {
  if (!Globals.game.paused) {
    if (Globals.game.allBlocks.length) {
      setTimeout(() => {
        removeBlocks(defineTotalBlocksToDrop());
        DropBlocks();
      }, Globals.music.bpm[0]); // change to match beat of music.bpm[1]
    } else {
      setTimeout(() => {
        Globals.game.game_over = true;
        console.log("Game Over, DORK");
      }, 0); // this was 500 - what happens at 0
    }
  }
};

export default DropBlocks;
