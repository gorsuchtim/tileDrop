"use strict";

import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";
import ReplaceBlocks from "../ReplaceBlocks/ReplaceBlocks";
import AwesomeMeter from "../AwesomeMeter/AwesomeMeter";

const trackSyncStreak = tile => {
  // Increase syncStreak count with each tap
  Globals.game.playerStreak++;

  // Update streak in DOM
  Globals.dom.domStreak.textContent = `Streak: ${Globals.game.playerStreak}`;

  // If the player has continued to stay on the streak during the syncCount, let them know by flashing blue
  if (Globals.game.playerStreak == Globals.game.syncCount) {
    util.elementLib.classChangeDelay(tile, 250, "lit--blue");

    if (Globals.game.playerStreak == Globals.game.syncLength) {
      Globals.game.playerStreak = 0;
      // what if when you nail the sync you replace all of the blocks
      ReplaceBlocks(Globals.game.droppedBlocks.length);
    }
  }
};

const changeTileBackground = tile => {
  var color;
  tile.classList.contains("lit--white") ? (color = "white") : (color = "green");
  util.elementLib.classChangeDelay(tile, 250, `changeColor--${color}`);
};

const Scoring = tile => {
  ReplaceBlocks(1);

  //Globals.game.playerScore++;
  Globals.game.playerScore += 100;
  Globals.dom.domScore.textContent = `Score: ${Globals.game.playerScore}`;

  Globals.game.syncCount > 0 ? trackSyncStreak(tile) : AwesomeMeter();

  changeTileBackground(tile);
};

export default Scoring;
