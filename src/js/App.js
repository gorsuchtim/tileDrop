// Import styles
import "../css/scss/shared.scss";

// Import components
import util from "./Components/Utilities/Utilities";
import Services from "./Components/Services/Services";
import Globals from "./Components/Globals/Globals";
import ResetGame from "./Components/ResetGame/ResetGame";

// Start Button Behavior
Globals.dom.startButton.addEventListener("click", function() {
  if (Globals.game.gameOver == true) {
    ResetGame();
  }

  Services.init();

  this.classList.add("hidden");
  this.textContent = "Start Game"; // on game over this text content is set to play again

  Globals.dom.pauseButton.classList.remove("hidden");
});

// Pause Button Behavior
Globals.dom.pauseButton.addEventListener("click", function() {
  Globals.game.gameIsPaused = !Globals.game.gameIsPaused;

  if (Globals.game.gameIsPaused) {
    this.textContent = "Resume";
    // Globals.music.audio.pause();
  } else {
    this.textContent = "Pause";
    //  Globals.music.audio.play();
    Services.runGame();
  }
});
