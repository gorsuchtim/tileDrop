"use strict";

import Globals from "../Globals/Globals";

const ShowGameBoard = () => {
  Globals.dom.introWrap.classList.add("hidden");
  Globals.dom.gameBoardWrap.classList.remove("hidden");
};

export default ShowGameBoard;
