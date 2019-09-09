"use strict";
import util from "../Utilities/Utilities";
import CreateTile from "./CreateTile";
import Globals from "../Globals/Globals";

const setCoordinates = tile => {
  Globals.game.tile_x = util.math.createRandomNumber(
    Globals.dom.width,
    0,
    Globals.game.tile_x
  );
  Globals.game.tile_y = util.math.createRandomNumber(
    Globals.dom.height,
    0,
    Globals.game.tile_y
  );
  return tile;
};

const setTilePos = tile => {
  util.elementLib.setAttributes(tile, {
    style: `top: ${Globals.game.tile_y}px; left: ${Globals.game.tile_x}px`
  });
  return tile;
};

const SetTile = () => {
  return setTilePos(setCoordinates(CreateTile()));
};

export default SetTile;
