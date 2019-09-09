"use strict";

import Globals from "../Globals/Globals";

const GenericBlock = {
  type: "div",
  content: "",
  appendTo: Globals.dom.blocksWrap,
  attrs: {
    class: "block"
  },
  setEvent: {},
  addChild: {}
};

export default GenericBlock;
