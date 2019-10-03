"use strict";

import Globals from "../Globals/Globals";
import ResetGame from "../ResetGame/ResetGame";
import Services from "../Services/Services";

const StartGame = () => {
  if (Globals.game.gameOver == true) {
    ResetGame();
  }

  Globals.dom.startButton.classList.add("hidden");
  Globals.dom.startButton.textContent = "Start Game"; // on game over this text content is set to play again

  Globals.dom.awesomeMeter.classList.remove("hidden");
  Globals.dom.pauseButton.classList.remove("hidden");

  Services.init();
};

export default StartGame;
