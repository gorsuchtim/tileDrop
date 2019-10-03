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

  this.classList.add("hidden");
  this.textContent = "Start Game"; // on game over this text content is set to play again

  Globals.dom.rulesWrap.classList.add("hidden");
  Globals.dom.gameBoardWrap.classList.remove("hidden");
  Globals.dom.awesomeMeter.classList.remove("hidden");
  Globals.dom.pauseButton.classList.remove("hidden");

  setTimeout(() => {
    Services.init();
  }, 1000);
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
