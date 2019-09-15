"use strict";

import util from "../Utilities/Utilities";
import Globals from "../Globals/Globals";
import SetTile from "../SetTile/SetTile";
import Scoring from "../Scoring/Scoring";

const beatOrSync = () => {
  if (
    Globals.game.beatCount < Globals.game.startSync ||
    Globals.beatCount === 0
  ) {
    return true;
  } else {
    return false;
  }
};

const increaseFlashCount = () => {
  Globals.game.flashColor == "lit--white"
    ? Globals.game.beatCount++
    : Globals.game.syncCount++;
};

const FlashTile = () => {
  // If sync streak has been hit reset beatCount and syncCount to 0
  if (Globals.game.syncCount == Globals.game.syncLength) {
    Globals.game.beatCount = 0;
    Globals.game.syncCount = 0;
  }

  // Randomly set how many beats pass before sync starts AND randomly set how many beats the sync will last
  if (Globals.game.beatCount == 0) {
    Globals.game.startSync = util.math.createRandomNumber(15, 5); // the sync flashing will start at anywhere between 5 and 15 beat flashes
    Globals.game.syncLength = util.math.createRandomNumber(12, 3); // the length of the sync flashing will be between 3 and 12 beats
  }

  // Determine if current flash is a beat (white flash) or sync (green flash)
  beatOrSync()
    ? (Globals.game.flashColor = "lit--white")
    : (Globals.game.flashColor = "lit--green");

  // Create tile in the dom and set it to random position with appropriate flashColor assigned
  util.elementLib.classChange(SetTile(), "add", Globals.game.flashColor);

  // Define and set listener for tile
  var tile = document.querySelector(".tile");
  tile.addEventListener("click", function() {
    Scoring(this);
  });
  //util.setEvents.methods.dynamicEvents();

  increaseFlashCount();

  // Comment this out so we can debug Scoring.js tile.firstElementChild.nextElementSibling
  // Remove Tile after one beat of music
  if (!Globals.game.game_over && !Globals.game.paused) {
    setTimeout(() => {
      tile.parentNode.removeChild(tile);
    }, Globals.music.bpm[1]); // set to music.bpm
    setTimeout(() => {
      FlashTile();
    }, Globals.music.bpm[1]);
  } else {
    tile.parentNode.removeChild(tile);
  }
};

export default FlashTile;
