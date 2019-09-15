import util from "../Utilities/Utilities";
import CreateBlock from "./CreateBlock";
import Globals from "../Globals/Globals";
import SetGridSize from "../SetGridSize/SetGridSize";

const anymoreBlocksNeeded = () =>
  Globals.game.allBlocks.length <=
  SetGridSize.gridSize * SetGridSize.gridSize - 1
    ? true
    : false;

const addToArray = block => Globals.game.allBlocks.push(block);

const BuildGrid = () => {
  setTimeout(() => {
    if (anymoreBlocksNeeded()) {
      BuildGrid(addToArray(CreateBlock()));
    }
  }, 25);
};

export default BuildGrid;
