const SetBlockSize = {
  blockDivision: 10,
  squareSize: 0,
  squareSizeString: 0,
  gameWidth: document.querySelector(".wrap--gameBoard").clientWidth,
  gameHeight: document.querySelector(".wrap--gameBoard").clientHeight,
  init() {
    SetBlockSize.squareSize =
      SetBlockSize.gameHeight / SetBlockSize.blockDivision;

    SetBlockSize.squareSizeString = `${SetBlockSize.gameHeight /
      SetBlockSize.blockDivision}px`;

    var root = document.documentElement;
    root.style.setProperty("--block-width", SetBLockSize.squareSizeString);
    root.style.setProperty("--block-height", SetBlockSize.squareSizeString);

    return true;
  }
};

export default SetBlockSize;
