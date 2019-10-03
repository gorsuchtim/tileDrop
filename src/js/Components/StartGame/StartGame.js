"use strict";

import Globals from "./Globals/Globals";
import ResetGame from "./ResetGame/ResetGame";
import Services from "./Services/Services";

const StartGame = () => {
  if (Globals.game.gameOver == true) {
    ResetGame();
  }

  this.classList.add("hidden");
  this.textContent = "Start Game"; // on game over this text content is set to play again

  Globals.dom.rulesWrap.classList.add("hidden");
  Globals.dom.gameBoardWrap.classList.remove("hidden");
  Globals.dom.awesomeMeter.classList.remove("hidden");
  Globals.dom.pauseButton.classList.remove("hidden");

  setTimeout(() => {
    Services.init();
  }, 1000);
};

export default StartGame;
