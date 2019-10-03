"use strict";

import Utilities from "../Utilities/Utilities";
import Globals from "../Globals/Globals";

var infoButtonNavsArray = Utilities.elementLib.toArray(
  Globals.dom.infoButtonNavs
);

const showActiveSlide = buttonShowSlide => {
  var slides = Utilities.elementLib.toArray(Globals.dom.infoSlides);

  slides.forEach(slide => {
    slide.getAttribute("showSlide") != buttonShowSlide
      ? slide.classList.add("hidden")
      : slide.classList.remove("hidden");
  });
};

function InfoButtonNav() {
  infoButtonNavsArray.forEach(infoButtonNav => {
    infoButtonNav.classList.remove("button__nav--active");
  });
  this.classList.add("button__nav--active");

  showActiveSlide(this.getAttribute("showSlide"));
}

export default InfoButtonNav;
