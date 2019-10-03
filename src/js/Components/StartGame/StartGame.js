"use strict";

import Globals from "../Globals/Globals";
import ResetGame from "../ResetGame/ResetGame";
import Services from "../Services/Services";

function StartGame() {
  if (Globals.game.gameOver == true) {
    ResetGame();
  }

  this.classList.add("hidden");
  this.textContent = "Start Game"; // on game over this text content is set to play again

  Globals.dom.awesomeMeter.classList.remove("hidden");
  Globals.dom.pauseButton.classList.remove("hidden");

  Services.init();
}

export default StartGame;
