// Import styles
import "../css/scss/shared.scss";

// Import components
import Utilities from "./Components/Utilities/Utilities";
import Globals from "./Components/Globals/Globals";
import ShowGameInfo from "./Components/ShowGameInfo/ShowGameInfo";
import ShowGameBoard from "./Components/ShowGameBoard/ShowGameBoard";
import InfoButtonNav from "./Components/InfoButtonNav/InfoButtonNav";
import StartGame from "./Components/StartGame/StartGame";
import PauseGame from "./Components/PauseGame/PauseGame";

// Game Info Button Behavior
Globals.dom.gameInfoButton.addEventListener("click", ShowGameInfo);

// Button Nav (Game Info) Behavior
Utilities.elementLib.toArray(Globals.dom.infoButtonNavs).forEach(infoButton => {
  infoButton.addEventListener("click", InfoButtonNav);
});

// Play Game Button Behavior
Globals.dom.playGameButton.addEventListener("click", ShowGameBoard);

// Start Button Behavior
Globals.dom.startButton.addEventListener("click", StartGame);

// Pause Button Behavior
Globals.dom.pauseButton.addEventListener("click", PauseGame);
