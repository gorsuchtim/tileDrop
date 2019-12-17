"use strict";

import util from "../Utilities/Utilities";
import Three from "../ThreeJS/Three";

const CreateBlock = () => Three();
/*
const CreateBlock = () =>
  setRandomColor(util.elementLib.buildElement(GenericBlock));

const setRandomColor = block => {
  var colors = [
    "rgb(191,165,246)",
    "rgb(46,193,246)",
    "rgb(48,68,218)",
    "rgb(176,24,246)",
    "rgb(87,45,112)",
    "rgb(18,33,98)",
    "rgb(12,78,105)"
  ];
  block.style.backgroundColor =
    colors[util.math.createRandomNumber(colors.length, 0)];

  return block;
};
*/

export default CreateBlock;
