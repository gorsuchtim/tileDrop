"use strict";

import Globals from "../Globals/Globals";
import ReplaceBlocks from "../ReplaceBlocks/ReplaceBlocks";

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
  ReplaceBlocks(Math.floor(Globals.game.playerScore / 10));

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
