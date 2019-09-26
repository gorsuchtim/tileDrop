"use strict";

import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";
import ReplaceBlocks from "../ReplaceBlocks/ReplaceBlocks";
import Powerups from "../Powerups/Powerups";
import UpdateTileBackground from "../UpdateTileBackground/UpdateTileBackground";

/*
Fill the background color of the tile when you tap it by x% each tap
when the background tile is filled THEN mupschroops is activated.  
once you fill mupschroops background color then you get the bonus

don't track totaltaps or totalflashes - just fill the tile by x% per tap and send out mupshroops
when you fill mupshroops THEN you decrease droppedblocks rate by x%

*/

const trackSyncStreak = tile => {
  // Increase syncStreak count with each tap
  Globals.game.playerStreak++;

  // Update streak in DOM
  Globals.dom.domStreak.textContent = `Streak: ${Globals.game.playerStreak}`;

  // If the player has continued to stay on the streak during the syncCount, let them know by flashing blue
  if (Globals.game.playerStreak == Globals.game.syncCount) {
    util.elementLib.classChangeDelay(tile, 250, "lit--blue");

    if (Globals.game.playerStreak == Globals.game.syncLength) {
      Globals.game.playerScore += Globals.game.syncLength * 10;
      Globals.game.playerStreak = 0;
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
  Globals.dom.domScore.textContent = `Score: ${Globals.game.playerScore}`;

  Globals.game.syncCount > 0 ? trackSyncStreak(tile) : UpdateTileBackground();

  changeTileBackground(tile);
};

export default Scoring;
