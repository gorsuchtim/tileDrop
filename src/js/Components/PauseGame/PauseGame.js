"use strict";

import Globals from "../Globals/Globals";
import Services from "../Services/Services";

const PauseGame = () => {
  Globals.game.gameIsPaused = !Globals.game.gameIsPaused;

  if (Globals.game.gameIsPaused) {
    this.textContent = "Resume";
    // Globals.music.audio.pause();
  } else {
    this.textContent = "Pause";
    //  Globals.music.audio.play();
    Services.runGame();
  }
};

export default PauseGame;
