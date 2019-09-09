"use strict";

import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";
import ReplaceBlocks from "../ReplaceBlocks/ReplaceBlocks";

const trackSyncStreak = tile => {
  // Increase syncStreak count with each tap
  Globals.game.syncStreakCount++;

  // Update streak in DOM
  Globals.dom.streak.textContent = `Streak: ${Globals.game.syncStreakCount}`;

  // If the player has continued to stay on the streak during the syncCount, let them know by flashing blue
  if (Globals.game.syncStreakCount == Globals.game.syncCount) {
    utilities.classChangeDelay(tile, 250, "lit--blue");
    // If the player has reached the end of the streak then add the synclength value * 10 to their score for bonus
    if (Globals.game.syncStreakCount == Globals.game.syncLength) {
      Globals.game.playerScore += Globals.game.syncLength * 10;
      ReplaceBlocks(10); // and replace 10 OR synclength * 10 worth of blocks when they nail the full syncLength

      // Update those dom elements
      //   Globals.game.syncStreakScore.textContent = String(
      //     `+${Globals.game.syncLength * 10}!`
      //   );
      //   util.elementLib.classChange(
      //     Globals.game.syncStreakScore,
      //     "remove",
      //     "hidden"
      // //   );
      //   setTimeout(() => {
      //     util.elementLib.classChange(
      //       Globals.game.syncStreakScore,
      //       "add",
      //       "hidden"
      //     );
      //   }, 750);
    }
  }
};

const checkForStreakBonus = tile => {
  if (Globals.game.currentStreak % 3 === 0) {
    // future upgrade: add powerups
    //powerups.init();
  }

  // If the player has hit a streak in an increment of 10 increase their score by *10 the current streak (30 in a row = +30 points)
  if (Globals.game.currentStreak % 10 === 0) {
    Globals.game.playerScore += Globals.game.currentStreak;
  }
};

const changeTileBackground = tile => {
  var color;
  tile.classList.contains("lit--white") ? (color = "white") : (color = "green");
  util.elementLib.classChangeDelay(tile, 250, `changeColor--${color}`);
};

const Scoring = tile => {
  // If tapped during sync replace 3 blocks - else replace one block
  util.elementLib.classCheck(tile, "lit--green")
    ? ReplaceBlocks(3)
    : ReplaceBlocks(1);
  // Increase player score by 1
  Globals.game.playerScore++;
  // See if player is still "in the streak" or has hit the full length of the streak
  trackSyncStreak(tile);

  // Check for streak bonus
  checkForStreakBonus(tile);

  // Change tile background color
  changeTileBackground(tile);

  // Update score in DOM
  Globals.dom.score.textContent = `Score: ${Globals.game.playerScore}`;
  console.log(Globals.game.playerScore);

  // Flash the current score beneath the tile in the DOM
  //utilities.classChangeDelay(tile.firstElementChild, 450, "flashScore");
};

export default Scoring;
