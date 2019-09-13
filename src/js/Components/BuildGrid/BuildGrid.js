import util from "../Utilities/Utilities";
import CreateBlock from "./CreateBlock";
import SetBlockSize from "../SetBlockSize/SetBlockSize";

var gameGrid_x = 0;
var gameGrid_y = 0;

const anymoreBlocksNeeded = block => {
  var rect = block.getBoundingClientRect();
  return true;
};

const atBottomYet = () => {
  if (gameGrid_y >= SetBlockSize.gameHeight - SetBlockSize.squareSize) {
    return true;
  } else {
    return false;
  }
};

const setGridPos = block => {
  var rect = block.getBoundingClientRect();

  if (atBottomYet()) {
    gameGrid_y = 0;
    gameGrid_x += rect.width;
  } else {
    gameGrid_y += rect.height;
  }

  return block;
};

const setBlockPosition = block => {
  util.elementLib.setAttributes(block, {
    style: `top: ${gameGrid_y}px; left: ${gameGrid_x}px`
  });
};

const BuildGrid = block => {
  setTimeout(() => {
    if (anymoreBlocksNeeded(block)) {
      //BuildGrid(setBlockPosition(setGridPos(CreateBlock())))
    }
  }, 500);
};

export default BuildGrid;
