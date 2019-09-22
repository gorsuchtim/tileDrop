"use strict";

import Globals from "../Globals/Globals";
import util from "../Utilities/Utilities";

const Powerups = {
  decreaseDroppedBlocks() {
    console.log(Globals.game.playerScore / Globals.game.totalFlashes);
    return Globals.game.totalFlashes / Globals.game.playerScore;
  }
};

export default Powerups;
