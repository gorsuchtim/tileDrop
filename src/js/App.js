// Import styles
import "../css/scss/shared.scss";

// Import components
import Globals from "./Components/Globals/Globals";
import ShowGameInfo from "./Components/ShowGameInfo/ShowGameInfo";
import ShowGameBoard from "./Components/ShowGameBoard/ShowGameBoard";
import StartGame from "./Components/StartGame/StartGame";
import PauseGame from "./Components/PauseGame/PauseGame";

// Rules Button Behavior
Globals.dom.gameInfoButton.addEventListener("click", ShowGameInfo());

// Play Button Behavior
Globals.dom.playGameButton.addEventListener("click", ShowGameBoard());

// Start Button Behavior
Globals.dom.startButton.addEventListener("click", StartGame());

// Pause Button Behavior
Globals.dom.pauseButton.addEventListener("click", PauseGame());
