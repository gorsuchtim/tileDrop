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
    Globals.game.startSync = util.math.createRandomNumber(15, 7); // the sync flashing will start at anywhere between 5 and 15 beat flashes
    Globals.game.syncLength = util.math.createRandomNumber(10, 5); // the length of the sync flashing will be between 3 and 12 beats
  }

  // Determine if current flash is a beat (white flash) or sync (green flash)
  if (Globals.game.playerScore >= 1000) {
    if (beatOrSync()) {
      Globals.game.flashColor = "lit--white";
    } else {
      Globals.game.flashColor = "lit--green";
    }
  } else {
    Globals.game.flashColor = "lit--white";
  }

  // Create tile in the dom and set it to random position with appropriate flashColor assigned
  util.elementLib.classChange(SetTile(), "add", Globals.game.flashColor);

  // Define and set listener for tile
  var tile = document.querySelector(".tile");
  tile.addEventListener("click", function() {
    Scoring(this);
  });

  increaseFlashCount();

  if (!Globals.game.game_over && !Globals.game.paused) {
    setTimeout(() => {
      tile.parentNode.removeChild(tile);
    }, Globals.music.bpm);
    setTimeout(() => {
      FlashTile();
    }, Globals.music.bpm);
  } else {
    tile.parentNode.removeChild(tile);
  }
};

export default FlashTile;
