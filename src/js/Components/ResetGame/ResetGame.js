"use strict";

import Globals from "../Globals/Globals";

const ResetGame = () => {
  Globals.dom.blocksWrap.innerHTML = "";
  Globals.game.droppedBLocks = [];
  Globals.game.totalFlashes = 0;
  Globals.game.playerScore = 0;
  Globals.game.playerStreak = 0;
  Globals.game.playerStreakCount = 0;
  Globals.game.startSync = 0;
  Globals.game.syncLength = 0;
  Globals.game.gameOver = false;
  Globals.game.gameIsPaused = false;
};
