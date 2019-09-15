"use strict";

import Globals from "../Globals/Globals";

const GenericTile = {
  type: "div",
  content: "",
  appendTo: Globals.dom.blocksWrap,
  attrs: {
    class: "tile"
  },
  setEvent: {},
  addChild: [
    {
      type: "span",
      content: "",
      appendTo: "",
      attrs: {
        class: "score clear"
      },
      setEvent: {},
      addChild: {}
    },
    {
      type: "span",
      content: "",
      appendTo: "",
      attrs: {
        class: "streak clear"
      },
      setEvent: {},
      addChild: {}
    }
  ]
};

export default GenericTile;
