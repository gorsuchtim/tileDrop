"use strict";
import util from "../Utilities/Utilities";
import CreateTile from "./CreateTile";
import Globals from "../Globals/Globals";

var blocksRect = Globals.dom.blocksWrap.getBoundingClientRect();

var tileSize = 64;
var root = document.documentElement;
root.style.setProperty("--tile-size", `${tileSize}px`);

const setCoordinates = tile => {
  Globals.game.tile_x = util.math.createRandomNumber(
    blocksRect.right - tileSize,
    blocksRect.left - tileSize,
    Globals.game.tile_x
  );
  Globals.game.tile_y = util.math.createRandomNumber(
    blocksRect.bottom - tileSize,
    blocksRect.top - tileSize,
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

const SetTile = () => setTilePos(setCoordinates(CreateTile()));

export default SetTile;
