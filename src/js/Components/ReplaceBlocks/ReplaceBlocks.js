"use strict";
import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";

const ReplaceBlocks = totalBlocks => {
  var blocksToReplace = Globals.game.droppedBlocks.slice(0, totalBlocks);

  blocksToReplace.forEach(block => {
    util.elementLib.classChange(block, "remove", "falling", "clear");
    Globals.game.allBlocks.push(block);
    Globals.game.droppedBlocks.shift();
  });
};

export default ReplaceBlocks;
