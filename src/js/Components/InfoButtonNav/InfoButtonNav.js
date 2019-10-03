"use strict";

import Utilities from "../Utilities/Utilities";
import Globals from "../Globals/Globals";

const setActiveButton = clickedButton => {
  Utilities.elementLib
    .toArray(Globals.dom.infoButtonNavs)
    .forEach(infoButtonNav => {
      infoButtonNav.classList.remove("button__nav--active");
    });
  clickedButton.classList.add("button__nav--active");
};

const showActiveSlide = buttonShowSlide => {
  var slides = Utilities.elementLib.toArray(Globals.dom.infoSlides);

  slides.forEach(slide => {
    slide.getAttribute("showSlide") != buttonShowSlide
      ? slide.classList.add("hidden")
      : slide.classList.remove("hidden");
  });
};

const closeInfo = () => {
  Globals.dom.gameInfoWrap.classList.add("hidden");
  Globals.dom.introWrap.classList.remove("hidden");
};

function InfoButtonNav() {
  if (this.classList.contains("button--close")) {
    closeInfo();
  } else {
    setActiveButton(this);
    showActiveSlide(this.getAttribute("showSlide"));
  }
}

export default InfoButtonNav;
