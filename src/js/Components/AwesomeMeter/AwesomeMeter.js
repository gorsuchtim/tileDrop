"use strict";

import Globals from "../Globals/Globals";

var root = document.documentElement;

var meterValue = parseInt(
  getComputedStyle(root).getPropertyValue("--meter-fill")
);

const animateMeter = () => {
  meterValue += 10;
  root.style.setProperty("--meter-fill", `${meterValue}%`);
};

const AwesomeMeter = () => {
  if (meterValue < 90) {
    animateMeter();
  }
};

export default AwesomeMeter;
