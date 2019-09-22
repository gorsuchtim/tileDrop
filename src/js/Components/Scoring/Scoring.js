"use strict";

import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";
import ReplaceBlocks from "../ReplaceBlocks/ReplaceBlocks";
import Powerups from "../Powerups/Powerups";

const trackSyncStreak = tile => {
  // Increase syncStreak count with each tap
  Globals.game.playerStreakCount++;

  // Update streak in DOM
  Globals.dom.domStreak.textContent = `Streak: ${Globals.game.playerSyncStreak}`;

  // If the player has continued to stay on the streak during the syncCount, let them know by flashing blue
  if (Globals.game.playerStreakCount == Globals.game.syncCount) {
    util.elementLib.classChangeDelay(tile, 250, "lit--blue");

    if (Globals.game.playerStreakCount == Globals.game.syncLength) {
      Globals.game.playerScore += Globals.game.syncLength * 10;
      Globals.game.playerStreakCount = 0;
      ReplaceBlocks(Globals.game.syncLength * 10 * 2);
    }
  }
};

const changeTileBackground = tile => {
  var color;
  tile.classList.contains("lit--white") ? (color = "white") : (color = "green");
  util.elementLib.classChangeDelay(tile, 250, `changeColor--${color}`);
};

const Scoring = tile => {
  util.elementLib.classCheck(tile, "lit--green")
    ? ReplaceBlocks(3)
    : ReplaceBlocks(1);

  Globals.game.playerScore++;
  Powerups.decreaseDroppedBlocks();

  // Run powerups: decrease dropped blocks at % 100 = 0
  // Globals.game.playerScore % 100 == 0 ? Powerups.decreasedDroppedBlocks() : false?

  Globals.game.syncCount > 0 ? trackSyncStreak(tile) : false;

  changeTileBackground(tile);

  Globals.dom.domScore.textContent = `Score: ${Globals.game.playerScore}`;
};

export default Scoring;
