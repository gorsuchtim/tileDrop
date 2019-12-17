import util from "../Utilities/Utilities";
import CreateBlock from "./CreateBlock";
import Globals from "../Globals/Globals";
import SetGridSize from "../SetGridSize/SetGridSize";
import Countdown from "../Countdown/Countdown";
import Services from "../Services/Services";

const anymoreBlocksNeeded = () => {
  if (
    Globals.game.allBlocks.length <=
    SetGridSize.gridSize * SetGridSize.gridSize - 1
  ) {
    return true;
  } else {
    return false;
  }
};

const addToArray = block => Globals.game.allBlocks.push(block);

const BuildGrid = () => {
  CreateBlock();
  // setTimeout(() => {
  //   if (anymoreBlocksNeeded()) {
  //     BuildGrid(addToArray(CreateBlock()));
  //   } else {
  //     util.elementLib.shuffleArray(Globals.game.allBlocks);
  //     // For build:
  //     //Countdown();

  //     // For dev:
  //     Services.runGame();
  //   }
  // }, 25);
};

export default BuildGrid;
