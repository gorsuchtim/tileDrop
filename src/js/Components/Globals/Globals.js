"use strict";

const Globals = {
  dom: {
    blocksWrap: document.querySelector(".wrap--blocks"),
    blocksWrap_width: document.querySelector(".wrap--blocks").offsetWidth,
    blocksWrap_height: document.querySelector(".wrap--blocks").offsetHeight,
    timerWrap: document.querySelector(".wrap--timer"),
    timerElement: document.querySelector(".timer"),
    // tile: document.querySelector(".tile"),
    // tile_score: tile.firstElementChild,
    // tile_streak: tile.firstElementChild.nextElementSibling,
    syncStreakScoreWrap: document.querySelector(".wrap--syncStreakScore"),
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  },
  game: {
    grid_x: 0,
    grid_y: 0,
    tile_x: 0,
    tile_y: 0,
    syncLength: 0,
    syncCount: 0,
    flashColor: "",
    allBlocks: [],
    droppedBlocks: [],
    replacedBlocks: [],
    droppedBlocks: [],
    replacedBlocks: [],
    game_over: false,
    paused: false,
    playerScore: 0,
    beatCount: 0,
    startSync: 0,
    syncCount: 0,
    powerupCount: 0,
    syncLength: 0,
    syncStreakCount: 0,
    currentStreak: 0
  },
  music: {
    audio: document.querySelector("[audio]"),
    bpm: [1500, 880]
  }
};

export default Globals;
