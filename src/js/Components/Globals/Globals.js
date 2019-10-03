"use strict";

const Globals = {
  dom: {
    gameInfoWrap: document.querySelector(".wrap--gameInfo"),
    introWrap: document.querySelector(".wrap--intro"),
    gameBoardWrap: document.querySelector(".wrap--gameBoard"),
    blocksWrap: document.querySelector(".wrap--blocks"),
    startButton: document.querySelector(".button--start"),
    pauseButton: document.querySelector(".button--pause"),
    gameInfoButton: document.querySelector(".button--gameInfo"),
    playGameButton: document.querySelector(".button--playGame"),
    domStreak: document.querySelector(".dom__streak"),
    domScore: document.querySelector(".dom__score"),
    timerElement: document.querySelector(".dom__timer"),
    timerWrap: document.querySelector(".wrap--timer"),
    awesomeMeter: document.querySelector(".wrap__awesomemeter")
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
  music: {
    bpm: 1500,
    audio: document.querySelector(".audio__player")
  }
};

export default Globals;
