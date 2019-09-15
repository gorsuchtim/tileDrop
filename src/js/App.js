// Import styles
import "../css/scss/shared.scss";

// Import components
import util from "./Components/Utilities/Utilities";
import Services from "./Components/Services/Services";
import Globals from "./Components/Globals/Globals";

// Start Button Behavior
Globals.dom.startButton.addEventListener("click", function() {
  Services.init();
  this.classList.add("hidden");
  Globals.dom.pauseButton.classList.remove("hidden");
});

// Pause Button Behavior
Globals.dom.pauseButton.addEventListener("click", function() {
  Globals.game.paused = !Globals.game.paused;

  if (Globals.game.paused) {
    this.textContent = "Resume";
    // Globals.music.audio.pause();
  } else {
    this.textContent = "Pause";
    //  Globals.music.audio.play();
    Services.runGame();
  }
});

/*
Need to build:
Setup method of resetting streak to 0 when missing a flash
Reset button to show up when game is paused

Need to test:
Test that streak count increases when on a streak
Test that points add up correctly particularly with re: bonus on streak and synch streak

Bugs:
BuildGrid not stopping at width and height
DropBlocks is leaving 1 block when flashing game over
When tapping on sync throws error in ReplaceBlocks re classList of undefined
FlashTile continues to run after game over
Streak title in DOM not emptying to 0 on a missed click

*/
