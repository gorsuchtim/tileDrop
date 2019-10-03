"use strict";

import Globals from "../Globals/Globals";
import Services from "../Services/Services";

const PauseGame = () => {
  Globals.game.gameIsPaused = !Globals.game.gameIsPaused;

  if (Globals.game.gameIsPaused) {
    Globals.dom.pauseButton.textContent = "Resume";
    // Globals.music.audio.pause();
  } else {
    Globals.dom.pauseButton.textContent = "Pause";
    //  Globals.music.audio.play();
    Services.runGame();
  }
};

export default PauseGame;
