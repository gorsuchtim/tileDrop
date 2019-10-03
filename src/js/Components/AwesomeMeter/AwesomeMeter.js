"use strict";

import Globals from "../Globals/Globals";
import ReplaceBlocks from "../ReplaceBlocks/ReplaceBlocks";

// WHAT IF WE INCREASE PLAYER SCORE BY 100, THEN 110, THEN 120 ETC - INCREMENTALLY INCREASING THE SCORE
// BASED ON THE VALUE OF THE AWESOME METER AS AN INCENTIVE TO FILL THE METER

var root = document.documentElement;
var meterWrap = document.querySelector(".wrap__awesomemeter");

var meterValue = parseInt(
  getComputedStyle(root).getPropertyValue("--meter-fill")
);

const increaseMeter = () => {
  meterValue += 10;
  root.style.setProperty("--meter-fill", `${meterValue}%`);
};

const emptyMeter = () => {
  meterWrap.classList.add("heartBeat");
  meterValue += 10;
  root.style.setProperty("--meter-fill", `${meterValue}%`);

  // Replace blocks after full meter
  ReplaceBlocks(Math.floor(Globals.game.playerScore / 100));

  setTimeout(() => {
    meterValue = 0;
    root.style.setProperty("--meter-fill", `${meterValue}%`);
    meterWrap.classList.remove("heartBeat");
  }, 200);
};

const AwesomeMeter = () => {
  if (meterValue < 90) {
    increaseMeter();
  } else {
    //Globals.powerups.decreaseDroppedBlocks++;
    emptyMeter();
  }
};

export default AwesomeMeter;
