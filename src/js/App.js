// Import styles
import "../css/scss/shared.scss";

// Import components
import util from "./Components/Utilities/Utilities";
import Services from "./Components/Services/Services";

Services.init();

/*
Bugs:
BuildGrid not stopping at width and height
DropBlocks is leaving 1 block when flashing game over
When tapping on sync throws error in ReplaceBlocks re classList of undefined

*/
