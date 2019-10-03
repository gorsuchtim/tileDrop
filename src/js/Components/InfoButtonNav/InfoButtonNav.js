"use strict";

import Utilities from "../Utilities/Utilities";
import Globals from "../Globals/Globals";

var infoButtonNavs = Utilities.elementLib.toArray(Globals.dom.infoButtonNavs);
var slides = Utilities.elementLib.toArray(Globals.dom.infoSlides);

const removeButtonActiveState = () => {
  infoButtonNavs.forEach(infoButtonNav => {
    infoButtonNav.classList.remove("button__nav--active");
  });
  return true;
};

const setActiveButton = clickedButton =>
  removeButtonActiveState()
    ? clickedButton.classList.add("button__nav--active")
    : false;

const showActiveSlide = buttonShowSlide => {
  slides.forEach(slide => {
    slide.getAttribute("showSlide") != buttonShowSlide
      ? slide.classList.add("hidden")
      : slide.classList.remove("hidden");
  });
};

const resetInfoScreen = () => {
  if (removeButtonActiveState()) {
    infoButtonNavs[1].classList.add("button__nav--active");
    slides.forEach(slide => {
      slide.classList.add("hidden");
    });
    document.querySelector(".info__slide").classList.remove("hidden");
  }
};

const closeInfo = () => {
  Globals.dom.gameInfoWrap.classList.add("hidden");
  Globals.dom.introWrap.classList.remove("hidden");
  resetInfoScreen();
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
