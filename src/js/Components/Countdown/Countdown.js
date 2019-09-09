"use strict";

import util from "../Utilities/Utilities";
import Globals from "../Globals/Globals";
//import Services from "../Services/Services";

const Countdown = () => {
  // Show timer -> count down to 0
  Globals.dom.timerElement.innerHTML = util.timer.counter;
  util.elementLib.classChange(Globals.dom.timerWrap, "remove", "hidden");
  util.timer.timedCount(Globals.dom.timerElement);

  // Hide timer
  setTimeout(() => {
    Globals.dom.timerWrap.parentNode.removeChild(Globals.dom.timerWrap);
  }, 3000); // set timeout equal to countdown: 3000

  // Start game after countdown
  setTimeout(() => {
    // Services.runGame();
  }, 3000 + Globals.music.bpm[0]);
};

export default Countdown;
