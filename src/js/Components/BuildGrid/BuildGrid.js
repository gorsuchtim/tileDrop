"use strict";
import Services from "../Services/Services";
import util from "../Utilities/Utilities";
import Globals from "../Globals/Globals";
import CreateBlock from "./CreateBlock";

const moreBlocksNeeded = () =>
  Globals.game.grid_y <= Globals.dom.height ? true : false;

const setGridPos = block => {
  var blockInfo = block.getBoundingClientRect();
  console.log(blockInfo);
  // are we checking the left aligned or right aligned position of the box on width?  because right would tell us better
  if (Globals.game.grid_x < Globals.dom.width) {
    Globals.game.grid_x += blockInfo.width;
  } else {
    Globals.game.grid_y += blockInfo.height;
    Globals.game.grid_x = 0;
  }
  return block;
};

const setBlockPos = block =>
  util.elementLib.setAttributes(block, {
    style: `top: ${Globals.game.grid_y}px; left: ${Globals.game.grid_x}px`
  });

const addToArray = block => Globals.game.allBlocks.push(block);

const BuildGrid = block => {
  console.log(block.getBoundingClientRect());
  /*
  if (moreBlocksNeeded()) {
    setTimeout(() => {
      BuildGrid(addToArray(setBlockPos(setGridPos(CreateBlock()))));
    }, 0);
  } else {
    var lastBlock = Globals.dom.blocksWrap.lastElementChild;
    lastBlock.parentNode.removeChild(lastBlock);
    util.elementLib.shuffleArray(Globals.game.allBlocks);
    Services.startCountdown();
    //Services.runGame();
  }
  */
};

export default BuildGrid;
