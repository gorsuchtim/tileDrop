"use strict";
import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";

const ReplaceBlocks = blocksToReplace => {
  Globals.game.replacedBlocks = []; // empty changeBlocks.replacedBlocks from previous replacement
  if (Globals.game.droppedBlocks.length >= 1) {
    for (var i = 0; i < blocksToReplace; i++) {
      Globals.game.replacedBlocks.push(Globals.game.droppedBlocks[0]);
      Globals.game.droppedBlocks.shift();
    }
    Globals.game.replacedBlocks.forEach(block => {
      util.elementLib.classChange(block, "remove", "falling", "clear");
      Globals.game.allBlocks.push(block);
    });
  }
};

export default ReplaceBlocks;
