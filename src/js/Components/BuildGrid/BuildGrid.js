import util from "../Utilities/Utilities";
import CreateBlock from "./CreateBlock";
import Globals from "../Globals/Globals";
import SetGridSize from "../SetGridSize/SetGridSize";
import Countdown from "../Countdown/Countdown";

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
    } else {
      util.elementLib.shuffleArray(Globals.game.allBlocks);
      Countdown();
    }
  }, 25);
};

export default BuildGrid;
