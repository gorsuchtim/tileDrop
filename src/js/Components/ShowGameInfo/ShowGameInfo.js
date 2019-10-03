"use strict";

import Globals from "../Globals/Globals";

const ShowGameInfo = () => {
  Globals.dom.introWrap.classList.add("hidden");
  Globals.dom.gameInfoWrap.classList.remove("hidden");
};

export default ShowGameInfo;
