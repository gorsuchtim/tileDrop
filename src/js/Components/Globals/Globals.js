"use strict";

const Globals = {
  dom: {
    blocksWrap: document.querySelector(".wrap--blocks"),
    startButton: document.querySelector(".start"),
    pauseButton: document.querySelector(".pause"),
    domStreak: document.querySelector(".dom__streak"),
    domScore: document.querySelector(".dom__score"),
    timerElement: document.querySelector(".dom__timer"),
    timerWrap: document.querySelector(".wrap--timer")
  },
  game: {
    allBlocks: [],
    droppedBlocks: [],
    beatCount: 0,
    syncCount: 0,
    flashColor: undefined,
    tile_y: undefined,
    tile_x: undefined,
    playerScore: 0,
    playerStreak: 0,
    startSync: 0,
    syncLength: 0,
    gameIsPaused: false,
    gameOver: false
  },
  powerups: {
    decreaseDroppedBlocks: 0
  },
  music: {
    bpm: 1500,
    audio: document.querySelector(".audio__player")
  }
};

export default Globals;
