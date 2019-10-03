"use strict";

const Globals = {
  dom: {
    awesomeMeter: document.querySelector(".wrap__awesomemeter"),
    blocksWrap: document.querySelector(".wrap--blocks"),
    closeButton: document.querySelector(".button--close"),
    domScore: document.querySelector(".dom__score"),
    domStreak: document.querySelector(".dom__streak"),
    gameBoardWrap: document.querySelector(".wrap--gameBoard"),
    gameInfoButton: document.querySelector(".button__intro--gameInfo"),
    gameInfoWrap: document.querySelector(".wrap--gameInfo"),
    infoButtonNavs: document.querySelectorAll(".button__nav"),
    infoSlides: document.querySelectorAll(".info__slide"),
    introWrap: document.querySelector(".wrap--intro"),
    pauseButton: document.querySelector(".button--pause"),
    playGameButton: document.querySelector(".button__intro--playGame"),
    startButton: document.querySelector(".button--start"),
    timerElement: document.querySelector(".dom__timer"),
    timerWrap: document.querySelector(".wrap--timer")
  },
  game: {
    allBlocks: [],
    beatCount: 0,
    flashColor: undefined,
    droppedBlocks: [],
    gameIsPaused: false,
    gameOver: false,
    playerScore: 0,
    playerStreak: 0,
    startSync: 0,
    syncCount: 0,
    syncLength: 0,
    tile_y: undefined,
    tile_x: undefined
  },
  music: {
    audio: document.querySelector(".audio__player"),
    bpm: 1500
  }
};

export default Globals;
