import util from "../Utilities/Utilities";
import CreateBlock from "./CreateBlock";
import Globals from "../Globals/Globals";
import SetBlockSize from "../SetBlockSize/SetBlockSize";

var gameGrid_x = 0;
var gameGrid_y = 0;
// NOW WE NEED TO SET UP WHEN TO STOP
// we need to add to array also
const anymoreBlocksNeeded = block => {
  var rect = block.getBoundingClientRect();
  return true;
};
const atBottomYet = () => {
  if (gameGrid_y >= Globals.dom.gameHeight - SetBlockSize.squareSize * 2) {
    return true;
  } else {
    return false;
  }
};

const setGridPosition = block => {
  var rect = block.getBoundingClientRect();

  if (atBottomYet()) {
    gameGrid_y = 0;
    gameGrid_x += rect.width;
  } else {
    if (Globals.game.allBlocks.length == 0) {
      gameGrid_y = 0;
    } else {
      gameGrid_y += rect.height;
    }
  }
  return block;
};

const setBlockPosition = block =>
  util.elementLib.setAttributes(block, {
    style: `top: ${gameGrid_y}px; left: ${gameGrid_x}px`
  });

const addToArray = block => Globals.game.allBlocks.push(block);

const BuildGrid = () => {
  setTimeout(() => {
    if (Globals.game.allBlocks.length > 0) {
      var newBlock = addToArray(
        setBlockPosition(setGridPosition(CreateBlock()))
      );
      //BuildGrid();
    } else {
      addToArray(setBlockPosition(CreateBlock()));
      BuildGrid();
    }
  }, 250);
};

export default BuildGrid;
