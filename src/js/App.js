// Import styles
import "../css/scss/shared.scss";

// Import components
import Globals from "./Components/Globals/Globals";
import StartGame from "./Components/StartGame/StartGame";
import PauseGame from './Components/PauseGame/PauseGame'

// Start Button Behavior
Globals.dom.startButton.addEventListener("click", StartGame());

// Pause Button Behavior
Globals.dom.pauseButton.addEventListener("click", PauseGame()); {
 
});
