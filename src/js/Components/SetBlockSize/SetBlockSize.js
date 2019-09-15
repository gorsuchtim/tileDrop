import Globals from "../Globals/Globals";

const SetBlockSize = {
  totalRows: 10,
  totalColumns: 6,
  //squareSize: 0,
  squareHeight: 0,
  squareWidth: 0,
  squareSize: 0,
  totalBorderSpace: 0,
  squareSizeString: 0,
  //BLOCKS ARE TOO WIDE - WE NEED TO ACCOUNT FOR GAME BOARD WIDTH AS WELL AS HEIGHT -- TOO WIDE BY ABOUT HALF A BLOCK
  init() {
    // Need to account for border space per square = --border-width * 2.
    //Only 2 because we only account for top and bottom, not left and right since we are building top down
    var borderPerSquare =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--border-width"
        )
      ) * 2;

    SetBlockSize.totalBorderSpace = borderPerSquare * SetBlockSize.totalRows;

    var gameArea = SetBlockSize.totalRows * SetBlockSize.totalColumns;
    //console.log(gameArea);

    // Determine size of individual blocks dynamically: each block is an equal division of dividing screen height by desired rows
    // Accounting for the width of each square's border

    SetBlockSize.squareSize =
      (Globals.dom.gameHeight - SetBlockSize.totalBorderSpace) /
      SetBlockSize.totalRows;

    // var root = document.documentElement;
    // root.style.setProperty("--block-width", SetBlockSize.squareSize + "px");
    // root.style.setProperty("--block-height", SetBlockSize.squareSize + "px");

    return true;
  }
};

export default SetBlockSize;
