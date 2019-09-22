// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/scss/shared.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/Components/Utilities/BuildElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* BuildElement */
var BuildElement =
/*#__PURE__*/
function () {
  function BuildElement(type, content, appendTo, attrs, setEvent, addChild) {
    _classCallCheck(this, BuildElement);

    this.type = type;
    this.content = content;
    this.appendTo = appendTo;
    this.attrs = attrs;
    this.setEvent = setEvent;
    this.addChild = addChild;
  }

  _createClass(BuildElement, [{
    key: "addEvents",
    value: function addEvents(element) {
      var ev = this.setEvent;
      element.addEventListener(ev.functionType, function () {
        ev.functionName.apply(ev, _toConsumableArray(ev.args));
      });
    }
  }, {
    key: "append",
    value: function append(element) {
      this.appendTo.appendChild(element);
    }
  }, {
    key: "appendChild",
    value: function appendChild(parent) {
      this.addChild.forEach(function (child) {
        if (child.appendTo === "") {
          child.appendTo = parent;
        }

        elementFactory.init(child);
      });
    }
  }, {
    key: "build",
    value: function build() {
      var elementToBuild = _Utilities.default.elementLib.setAttributes(document.createElement(this.type), this.attrs);

      elementToBuild.innerHTML = this.content;
      return elementToBuild;
    }
  }]);

  return BuildElement;
}();
/* ---------------------
Element Factory
----------------------*/


var elementFactory = {
  init: function init() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var toBuild = elementFactory.checkForObj(args);
    var newElement = elementFactory.buildElement(toBuild);
    return newElement;
  },
  checkForObj: function checkForObj(arg) {
    if (arg[0].hasOwnProperty("type")) {
      return arg[0];
    } else {
      var template = elementFactory.buildObjectTemplate(arg);
      return template;
    }
  },
  buildObjectTemplate: function buildObjectTemplate(argArray) {
    var template = {
      type: argArray[0],
      content: argArray[1],
      appendTo: argArray[2],
      attrs: argArray[3],
      setEvent: argArray[4],
      addChild: argArray[5]
    };
    return template;
  },
  buildElement: function buildElement(toBuild) {
    var elementToBuild = new BuildElement(toBuild.type, toBuild.content, toBuild.appendTo, toBuild.attrs, toBuild.setEvent, toBuild.addChild);
    var newElement = elementToBuild.build();

    if (!_Utilities.default.elementLib.isEmptyObj(elementToBuild.setEvent)) {
      elementToBuild.addEvents(newElement);
    }

    if (!_Utilities.default.elementLib.isEmptyObj(elementToBuild.addChild)) {
      elementToBuild.appendChild(newElement);
    }

    elementToBuild.append(newElement);
    return newElement;
  }
};
var _default = elementFactory;
exports.default = _default;
},{"./Utilities":"js/Components/Utilities/Utilities.js"}],"js/Components/Globals/Globals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _game;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Globals = {
  dom: {
    //width: window.innerWidth || document.documentElement.clientWidth,
    // height: window.innerHeight || document.documentElement.clientHeight,
    // tile: document.querySelector(".tile"),
    // tile_score: tile.firstElementChild,
    // tile_streak: tile.firstElementChild.nextElementSibling,
    blocksWrap: document.querySelector(".wrap--blocks"),
    gameWidth: document.querySelector(".wrap--gameBoard").clientWidth,
    gameHeight: document.querySelector(".wrap--gameBoard").clientHeight,
    timerWrap: document.querySelector(".wrap--timer"),
    timerElement: document.querySelector(".timer"),
    startButton: document.querySelector(".start"),
    pauseButton: document.querySelector(".pause"),
    score: document.querySelector(".score--title"),
    streak: document.querySelector(".streak--title"),
    syncStreakScoreWrap: document.querySelector(".wrap--syncStreakScore")
  },
  game: (_game = {
    // grid_x: 0,
    // grid_y: 0,
    tile_x: 0,
    tile_y: 0,
    syncLength: 0,
    syncCount: 0,
    flashColor: "",
    allBlocks: [],
    droppedBlocks: [],
    replacedBlocks: []
  }, _defineProperty(_game, "droppedBlocks", []), _defineProperty(_game, "replacedBlocks", []), _defineProperty(_game, "game_over", false), _defineProperty(_game, "paused", false), _defineProperty(_game, "playerScore", 0), _defineProperty(_game, "beatCount", 0), _defineProperty(_game, "startSync", 0), _defineProperty(_game, "syncCount", 0), _defineProperty(_game, "powerupCount", 0), _defineProperty(_game, "syncLength", 0), _defineProperty(_game, "syncStreakCount", 0), _defineProperty(_game, "currentStreak", 0), _game),
  music: {
    audio: document.querySelector(".audio__player"),
    bpm: [1500, 880]
  }
};
var _default = Globals;
exports.default = _default;
},{}],"js/Components/BuildGrid/GenericBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericBlock = {
  type: "div",
  content: "",
  appendTo: _Globals.default.dom.blocksWrap,
  attrs: {
    class: "block"
  },
  setEvent: {},
  addChild: {}
};
var _default = GenericBlock;
exports.default = _default;
},{"../Globals/Globals":"js/Components/Globals/Globals.js"}],"js/Components/BuildGrid/CreateBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BuildElement = _interopRequireDefault(require("../Utilities/BuildElement"));

var _GenericBlock = _interopRequireDefault(require("./GenericBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateBlock = function CreateBlock() {
  return _BuildElement.default.init(_GenericBlock.default);
};

var _default = CreateBlock;
exports.default = _default;
},{"../Utilities/BuildElement":"js/Components/Utilities/BuildElement.js","./GenericBlock":"js/Components/BuildGrid/GenericBlock.js"}],"js/Components/SetGridSize/SetGridSize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SetGridSize = {
  gridSize: 7,
  init: function init() {
    var root = document.documentElement;
    root.style.setProperty("--grid-size", SetGridSize.gridSize);
    root.style.setProperty("--grid-size", SetGridSize.gridSize);
    return true;
  }
};
var _default = SetGridSize;
exports.default = _default;
},{}],"js/Components/Countdown/Countdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _Services = _interopRequireDefault(require("../Services/Services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countdown = function Countdown() {
  // Show timer -> count down to 0
  _Globals.default.dom.timerElement.innerHTML = _Utilities.default.timer.counter;

  _Utilities.default.elementLib.classChange(_Globals.default.dom.timerWrap, "remove", "hidden");

  _Utilities.default.timer.timedCount(_Globals.default.dom.timerElement);

  _Globals.default.music.audio.play(); // Hide timer


  setTimeout(function () {
    _Globals.default.dom.timerWrap.parentNode.removeChild(_Globals.default.dom.timerWrap);
  }, 3000); // set timeout equal to countdown: 3000
  // Start game after countdown - Move this up into the hide timer timeout??

  setTimeout(function () {
    _Services.default.runGame();
  }, 3000 + _Globals.default.music.bpm[1]);
};

var _default = Countdown;
exports.default = _default;
},{"../Utilities/Utilities":"js/Components/Utilities/Utilities.js","../Globals/Globals":"js/Components/Globals/Globals.js","../Services/Services":"js/Components/Services/Services.js"}],"js/Components/BuildGrid/BuildGrid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

var _CreateBlock = _interopRequireDefault(require("./CreateBlock"));

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _SetGridSize = _interopRequireDefault(require("../SetGridSize/SetGridSize"));

var _Countdown = _interopRequireDefault(require("../Countdown/Countdown"));

var _Services = _interopRequireDefault(require("../Services/Services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anymoreBlocksNeeded = function anymoreBlocksNeeded() {
  if (_Globals.default.game.allBlocks.length <= _SetGridSize.default.gridSize * _SetGridSize.default.gridSize - 1) {
    return true;
  } else {
    return false;
  }
};

var addToArray = function addToArray(block) {
  return _Globals.default.game.allBlocks.push(block);
};

var BuildGrid = function BuildGrid() {
  setTimeout(function () {
    if (anymoreBlocksNeeded()) {
      BuildGrid(addToArray((0, _CreateBlock.default)()));
    } else {
      _Utilities.default.elementLib.shuffleArray(_Globals.default.game.allBlocks); // For build:
      //Countdown();
      // For dev:


      _Services.default.runGame();
    }
  }, 25);
};

var _default = BuildGrid;
exports.default = _default;
},{"../Utilities/Utilities":"js/Components/Utilities/Utilities.js","./CreateBlock":"js/Components/BuildGrid/CreateBlock.js","../Globals/Globals":"js/Components/Globals/Globals.js","../SetGridSize/SetGridSize":"js/Components/SetGridSize/SetGridSize.js","../Countdown/Countdown":"js/Components/Countdown/Countdown.js","../Services/Services":"js/Components/Services/Services.js"}],"js/Components/DropBlocks/DropBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Blocks to drop are in line with players score in increments of 10
At start of game 1 block drops at a time
At 20 points, 2 blocks drop -> at 30 points, 3 drop and so on
When a block drops, remove it from allBlocks and push it to droppedBlocks
*/
var defineTotalBlocksToDrop = function defineTotalBlocksToDrop() {
  var blocksToDrop;

  if (_Globals.default.game.playerScore >= 20) {
    blocksToDrop = Math.floor(_Globals.default.game.playerScore / 10);
  } else {
    blocksToDrop = 1;
  }

  return blocksToDrop;
};

var removeBlocks = function removeBlocks(howManyBlocksToDrop) {
  for (var i = 0; i < howManyBlocksToDrop; i++) {
    _Globals.default.game.droppedBlocks.push(_Globals.default.game.allBlocks[0]);

    _Utilities.default.elementLib.classChange(_Globals.default.game.allBlocks[0], "add", "falling", "clear");

    _Globals.default.game.allBlocks.shift();
  }
};

var DropBlocks = function DropBlocks() {
  if (!_Globals.default.game.paused) {
    console.log(_Globals.default.game.allBlocks.length);

    if (_Globals.default.game.allBlocks.length) {
      setTimeout(function () {
        removeBlocks(defineTotalBlocksToDrop());
        DropBlocks();
      }, 1000); // change to match beat of music.bpm[1]
    } else {
      setTimeout(function () {
        _Globals.default.game.game_over = true;
        console.log("Game Over, DORK");
      }, 0); // this was 500 - what happens at 0
    }
  }
};

var _default = DropBlocks;
exports.default = _default;
},{"../Globals/Globals":"js/Components/Globals/Globals.js","../Utilities/Utilities":"js/Components/Utilities/Utilities.js"}],"js/Components/utilities/Utilities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Services = _interopRequireDefault(require("../Services/Services"));

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {
  math: {
    createRandomNumber: function createRandomNumber(max, min, currentNumber) {
      var newNumber = Math.floor(Math.random() * (max - min) + min);

      if (currentNumber !== undefined) {
        if (newNumber === currentNumber) {
          newNumber = util.createRandomNumber(elements.tiles.length, 0, currentNumber);
        }
      }

      return newNumber;
    },
    sum: function sum(acc, currentValue) {
      return acc + currentValue;
    },
    multiply: function multiply(acc, currentValue) {
      return acc * currentValue;
    },
    subtract: function subtract(currentValue, acc) {
      return currentValue - acc;
    },
    divide: function divide(currentValue, acc) {
      return currentValue / acc;
    },
    getTodaysDate: function getTodaysDate() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      var today = String("".concat(month, "/").concat(day, "/").concat(year));
      return today;
    },
    netValue: function netValue(gross) {
      var _math;

      for (var _len = arguments.length, deductions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        deductions[_key - 1] = arguments[_key];
      }

      return gross - (_math = math).sum.apply(_math, deductions);
    },
    netValue_tax: function netValue_tax(gross) {
      var _math2;

      for (var _len2 = arguments.length, taxes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        taxes[_key2 - 1] = arguments[_key2];
      }

      // how to use map for this?
      for (var i = 0; i < taxes.length; i++) {
        taxes[i] > 1 ? taxes[i] = taxes[i] / 100 : false;
      }

      return math.subtract(gross, math.multiply(gross, (_math2 = math).sum.apply(_math2, taxes)));
    }
  },
  str: {
    addCommas: function addCommas(content) {
      typeof content !== "string" ? content = String(content) : false;
      var formatted = content.replace(/[\D\s\._\-]+/g, "");
      formatted ? formatted = parseInt(formatted, 10) : 0;
      return formatted.toLocaleString("en-US");
    },
    check_alpha: function check_alpha(content) {
      var alpha = /^[a-zA-Z]*$/;
      return alpha.test(content);
    },
    check_alphanumeric: function check_alphanumeric(content) {
      var alphanumeric = /^[a-z0-9]+$/i;
      return alphanumeric.test(content);
    },
    check_numeric: function check_numeric(content) {
      var numeric = /^[0-9]+$/;
      return numeric.test(content);
    },
    currency: function currency(content) {
      // future add on: use str.toFixed(2) //returns 123.45 in case user needs .xx factored in - also can put in an option to round up
      typeof content !== "string" ? content = String(content) : false;

      if (content === "$" || content === "") {
        return content.substr(1, content.length);
      } else {
        if (str.check_numeric(str.removeNonNumeric(content))) {
          return content.replace(content, "$" + str.addCommas(content));
        }
      }
    },
    percent: function percent(content) {
      if (event.key !== "Backspace") {
        if (str.check_numeric(str.removeNonNumeric(content))) {
          return content.replace(content, str.addCommas(content) + "%");
        }
      } else {
        return content.substr(0, content.length);
      }
    },
    removeCommas: function removeCommas(content) {
      return content.replace(/,/g, "");
    },
    removeNonNumeric: function removeNonNumeric(content) {
      return content.replace(/\D/g, "");
    },
    titleCase: function titleCase(content) {
      content = content.toLowerCase();
      content = content.charAt(0).toUpperCase() + content.slice(1);
      return content;
    }
  },
  cookies: {
    getCookie: function getCookie(name) {
      var start = document.cookie.lastIndexOf(name + "=");
      var len = start + name.length + 1;
      if (!start && name != document.cookie.substring(0, name.length)) return null;
      if (start == -1) return null;
      var end = document.cookie.indexOf(";", len);
      if (end == -1) end = document.cookie.length;
      return unescape(document.cookie.substring(len, end));
    },
    setCookie: function setCookie(name, value, maxage, expires, path, domain, secure) {
      var dt = expires ? new Date(expires) : "";
      document.cookie = name + "=" + escape(value) + (maxage ? ";max-age=" + maxage : "") + (dt ? ";expires=" + dt.toGMTString() : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "");
    },
    delCookie: function delCookie(name) {
      document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";
    }
  },
  elementLib: {
    bindElements: function bindElements(bindFrom) {
      var bindFromContent = bindFrom.value || bindFrom.textContent;
      var bindTo = document.querySelector("[bindTo=".concat(bindFrom.getAttribute("bindfrom"), "]"));

      if (bindTo.value) {
        if (bindFromContent !== "") {
          bindTo.value = bindFromContent;
        } else {
          bindTo.value = bindTo.getAttribute("initialValue");
        }
      } else {
        if (bindFromContent !== "") {
          bindTo.textContent = bindFromContent;
        } else {
          bindTo.textContent = bindTo.getAttribute("initialValue");
        }
      }
    },
    classChange: function classChange(element, directive) {
      var _element$classList, _element$classList2;

      for (var _len3 = arguments.length, className = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        className[_key3 - 2] = arguments[_key3];
      }

      directive === "add" ? (_element$classList = element.classList).add.apply(_element$classList, className) : (_element$classList2 = element.classList).remove.apply(_element$classList2, className);
    },
    classCheck: function classCheck(element, className) {
      if (element.classList.contains(className)) {
        return true;
      } else {
        return false;
      }
    },
    classChangeDelay: function classChangeDelay(elements, speed) {
      for (var _len4 = arguments.length, className = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        className[_key4 - 2] = arguments[_key4];
      }

      if (elements.length) {
        elements.forEach(function (element) {
          var _element$classList3;

          (_element$classList3 = element.classList).add.apply(_element$classList3, className);

          setTimeout(function () {
            var _element$classList4;

            (_element$classList4 = element.classList).remove.apply(_element$classList4, className);
          }, speed);
        });
      } else {
        var _elements$classList;

        (_elements$classList = elements.classList).add.apply(_elements$classList, className);

        setTimeout(function () {
          var _elements$classList2;

          (_elements$classList2 = elements.classList).remove.apply(_elements$classList2, className);
        }, speed);
      }
    },
    toArray: function toArray(values) {
      if (Array.from) {
        return Array.from(values);
      } else {
        var newArray = [];

        for (var i = 0; i < values.length; i++) {
          newArray.push(values[i]);
        }

        return newArray;
      }
    },
    filter_attrs: function filter_attrs(element) {
      for (var _len5 = arguments.length, toMatch = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        toMatch[_key5 - 1] = arguments[_key5];
      }

      var attrs = util.convertToArray(element.attributes).map(function (attr) {
        return attr.nodeName;
      });
      var filtered = attrs.filter(function (index) {
        return toMatch.includes(index);
      });
      return filtered;
    },
    getAttrValues: function getAttrValues(element, attrs) {
      var filteredValues = [];
      attrs.forEach(function (attr) {
        filteredValues.push(element.getAttribute(attr));
      });
      return filteredValues;
    },
    isEmptyObj: function isEmptyObj(obj) {
      if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        return true;
      } else {
        return false;
      }
    },
    getIndexByClass: function getIndexByClass(elements, className) {
      elements.forEach(function (element) {
        if (element.classList.contains(className)) {
          var _index = elements.indexOf(element);
        }
      });
      return index;
    },
    makeFile: function makeFile(content, fileType) {
      var newFile = null;
      var data = new Blob([JSON.stringify(content, null, 2)], {
        type: "".concat(fileType)
      });

      if (newFile !== null) {
        window.URL.revokeObjectURL(newFile);
      }

      newFile = window.URL.createObjectURL(data);
      return newFile;
    },
    objExists: function objExists(val, obj) {
      for (var key in obj) {
        if (key === val) {
          return true;
        }
      }
    },
    setAttributes: function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }

      return el;
    },
    shuffleArray: function shuffleArray(array) {
      // Randomize array element order in-place: Durstenfeld shuffle algorithm.
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    }
  },
  timer: {
    t: "",
    counter: 3,
    // Set number to count down/up from
    timer_is_on: 0,
    timedCount: function timedCount(timerElement) {
      timerElement.innerHTML = util.timer.counter;
      util.timer.counter--; // -- to count down, ++ to count up

      util.timer.t = setTimeout(function () {
        util.timer.timedCount(timerElement);
      }, _Globals.default.music.bpm[1]); // timer counts down at speed of song's bpm

      if (util.timer.counter < 1) {
        // if timer hits 0
        setTimeout(function () {
          util.timer.stopCount();
        }, 500);
      }
    },
    startCount: function startCount() {
      if (!util.timer.timer_is_on) {
        util.timer.timer_is_on = 1;
        util.timer.timedCount(timerElement);
      }
    },
    stopCount: function stopCount() {
      clearTimeout(util.timer.t);
      util.timer.counter = 3;
      util.timer.timer_is_on = 0;
    }
  },
  setEvents: {
    elements: {
      dynamicElements: [].slice.call(document.querySelectorAll("[dynamic]")),
      bindingElements: [].slice.call(document.querySelectorAll("[bindFrom]")),
      formatElements: [].slice.call(document.querySelectorAll("[formatAs]")),
      stickyNavigation: document.querySelector("[stickyNav]")
    },
    methods: {
      init_stickyNav: function init_stickyNav() {
        stickyNav(setEvents.elements.stickyNavigation, document.querySelector(".content"));
      },
      bindingElements: function bindingElements() {
        // Set an attr of bindFrom="" on elements you want to trigger binding from.  Set bindTo="" to set the element to bind to.  Match the attr values
        setEvents.elements.bindingElements.forEach(function (bindingElement) {
          bindingElement.addEventListener(bindingElement.getAttribute("eventType"), function () {
            elementLib.bindElements(this);
          });
        });
      },
      formatAs: function formatAs() {
        // Set attrs of eventType="" and  formatAs="" on elements that you want to format using str
        setEvents.elements.formatElements.forEach(function (formatElement) {
          formatElement.addEventListener(formatElement.getAttribute("eventType"), function (ev) {
            if (ev.target.value) {
              ev.target.value = str[formatElement.getAttribute("formatAs")](this.value, ev);
            } else {
              ev.target.textContent = str[formatElement.getAttribute("formatAs")](this.textContent, ev);
            }
          });
        });
      },
      dynamicEvents: function dynamicEvents() {
        util.setEvents.elements.dynamicElements.forEach(function (dynamicElement) {
          dynamicElement.addEventListener(dynamicElement.getAttribute("eventType"), function () {
            _Services.default[dynamicElement.getAttribute("functionName")](this, event);
          });
        });
      }
    }
  }
};
var _default = util;
exports.default = _default;
},{"../Services/Services":"js/Components/Services/Services.js","../Globals/Globals":"js/Components/Globals/Globals.js"}],"js/Components/utilities/BuildElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* BuildElement */
var BuildElement =
/*#__PURE__*/
function () {
  function BuildElement(type, content, appendTo, attrs, setEvent, addChild) {
    _classCallCheck(this, BuildElement);

    this.type = type;
    this.content = content;
    this.appendTo = appendTo;
    this.attrs = attrs;
    this.setEvent = setEvent;
    this.addChild = addChild;
  }

  _createClass(BuildElement, [{
    key: "addEvents",
    value: function addEvents(element) {
      var ev = this.setEvent;
      element.addEventListener(ev.functionType, function () {
        ev.functionName.apply(ev, _toConsumableArray(ev.args));
      });
    }
  }, {
    key: "append",
    value: function append(element) {
      this.appendTo.appendChild(element);
    }
  }, {
    key: "appendChild",
    value: function appendChild(parent) {
      this.addChild.forEach(function (child) {
        if (child.appendTo === "") {
          child.appendTo = parent;
        }

        elementFactory.init(child);
      });
    }
  }, {
    key: "build",
    value: function build() {
      var elementToBuild = _Utilities.default.elementLib.setAttributes(document.createElement(this.type), this.attrs);

      elementToBuild.innerHTML = this.content;
      return elementToBuild;
    }
  }]);

  return BuildElement;
}();
/* ---------------------
Element Factory
----------------------*/


var elementFactory = {
  init: function init() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var toBuild = elementFactory.checkForObj(args);
    var newElement = elementFactory.buildElement(toBuild);
    return newElement;
  },
  checkForObj: function checkForObj(arg) {
    if (arg[0].hasOwnProperty("type")) {
      return arg[0];
    } else {
      var template = elementFactory.buildObjectTemplate(arg);
      return template;
    }
  },
  buildObjectTemplate: function buildObjectTemplate(argArray) {
    var template = {
      type: argArray[0],
      content: argArray[1],
      appendTo: argArray[2],
      attrs: argArray[3],
      setEvent: argArray[4],
      addChild: argArray[5]
    };
    return template;
  },
  buildElement: function buildElement(toBuild) {
    var elementToBuild = new BuildElement(toBuild.type, toBuild.content, toBuild.appendTo, toBuild.attrs, toBuild.setEvent, toBuild.addChild);
    var newElement = elementToBuild.build();

    if (!_Utilities.default.elementLib.isEmptyObj(elementToBuild.setEvent)) {
      elementToBuild.addEvents(newElement);
    }

    if (!_Utilities.default.elementLib.isEmptyObj(elementToBuild.addChild)) {
      elementToBuild.appendChild(newElement);
    }

    elementToBuild.append(newElement);
    return newElement;
  }
};
var _default = elementFactory;
exports.default = _default;
},{"./Utilities":"js/Components/utilities/Utilities.js"}],"js/Components/SetTile/GenericTile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericTile = {
  type: "div",
  content: "",
  appendTo: _Globals.default.dom.blocksWrap,
  attrs: {
    class: "tile"
  },
  setEvent: {},
  addChild: [{
    type: "span",
    content: "",
    appendTo: "",
    attrs: {
      class: "score clear"
    },
    setEvent: {},
    addChild: {}
  }, {
    type: "span",
    content: "",
    appendTo: "",
    attrs: {
      class: "streak clear"
    },
    setEvent: {},
    addChild: {}
  }]
};
var _default = GenericTile;
exports.default = _default;
},{"../Globals/Globals":"js/Components/Globals/Globals.js"}],"js/Components/SetTile/CreateTile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BuildElement = _interopRequireDefault(require("../utilities/BuildElement"));

var _GenericTile = _interopRequireDefault(require("./GenericTile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateTile = function CreateTile() {
  return _BuildElement.default.init(_GenericTile.default);
};

var _default = CreateTile;
exports.default = _default;
},{"../utilities/BuildElement":"js/Components/utilities/BuildElement.js","./GenericTile":"js/Components/SetTile/GenericTile.js"}],"js/Components/SetTileSize/SetTileSize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SetTileSize = {
  tileSize: 64,
  init: function init() {
    var root = document.documentElement;
    root.style.setProperty("--tile-size", SetTileSize.tileSize + "px");
    root.style.setProperty("--tile-size", SetTileSize.tileSize + "px");
    return true;
  }
};
var _default = SetTileSize;
exports.default = _default;
},{}],"js/Components/SetTile/SetTile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

var _CreateTile = _interopRequireDefault(require("./CreateTile"));

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _SetTileSize = _interopRequireDefault(require("../SetTileSize/SetTileSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blocksRect = _Globals.default.dom.blocksWrap.getBoundingClientRect();

var setCoordinates = function setCoordinates(tile) {
  _Globals.default.game.tile_x = _Utilities.default.math.createRandomNumber(blocksRect.right - _SetTileSize.default.tileSize, blocksRect.left - _SetTileSize.default.tileSize, _Globals.default.game.tile_x);
  _Globals.default.game.tile_y = _Utilities.default.math.createRandomNumber(blocksRect.bottom - _SetTileSize.default.tileSize, blocksRect.top - _SetTileSize.default.tileSize, _Globals.default.game.tile_y);
  return tile;
};

var setTilePos = function setTilePos(tile) {
  _Utilities.default.elementLib.setAttributes(tile, {
    style: "top: ".concat(_Globals.default.game.tile_y, "px; left: ").concat(_Globals.default.game.tile_x, "px")
  });

  return tile;
};

var SetTile = function SetTile() {
  return setTilePos(setCoordinates((0, _CreateTile.default)()));
};

var _default = SetTile;
exports.default = _default;
},{"../Utilities/Utilities":"js/Components/Utilities/Utilities.js","./CreateTile":"js/Components/SetTile/CreateTile.js","../Globals/Globals":"js/Components/Globals/Globals.js","../SetTileSize/SetTileSize":"js/Components/SetTileSize/SetTileSize.js"}],"js/Components/ReplaceBlocks/ReplaceBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReplaceBlocks = function ReplaceBlocks(blocksToReplace) {
  _Globals.default.game.replacedBlocks = []; // empty changeBlocks.replacedBlocks from previous replacement

  if (_Globals.default.game.droppedBlocks.length >= 1) {
    for (var i = 0; i < blocksToReplace; i++) {
      _Globals.default.game.replacedBlocks.push(_Globals.default.game.droppedBlocks[0]);

      _Globals.default.game.droppedBlocks.shift();
    }

    _Globals.default.game.replacedBlocks.forEach(function (block) {
      _Utilities.default.elementLib.classChange(block, "remove", "falling", "clear");

      _Globals.default.game.allBlocks.push(block);
    });
  }
};

var _default = ReplaceBlocks;
exports.default = _default;
},{"../Globals/Globals":"js/Components/Globals/Globals.js","../Utilities/Utilities":"js/Components/Utilities/Utilities.js"}],"js/Components/Scoring/Scoring.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

var _ReplaceBlocks = _interopRequireDefault(require("../ReplaceBlocks/ReplaceBlocks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trackSyncStreak = function trackSyncStreak(tile) {
  // Increase syncStreak count with each tap
  _Globals.default.game.syncStreakCount++; // Update streak in DOM

  _Globals.default.dom.streak.textContent = "Streak: ".concat(_Globals.default.game.syncStreakCount); // If the player has continued to stay on the streak during the syncCount, let them know by flashing blue

  if (_Globals.default.game.syncStreakCount == _Globals.default.game.syncCount) {
    utilities.classChangeDelay(tile, 250, "lit--blue"); // If the player has reached the end of the streak then add the synclength value * 10 to their score for bonus

    if (_Globals.default.game.syncStreakCount == _Globals.default.game.syncLength) {
      _Globals.default.game.playerScore += _Globals.default.game.syncLength * 10;
      (0, _ReplaceBlocks.default)(10); // and replace 10 OR synclength * 10 worth of blocks when they nail the full syncLength
      // Update those dom elements
      //   Globals.game.syncStreakScore.textContent = String(
      //     `+${Globals.game.syncLength * 10}!`
      //   );
      //   util.elementLib.classChange(
      //     Globals.game.syncStreakScore,
      //     "remove",
      //     "hidden"
      // //   );
      //   setTimeout(() => {
      //     util.elementLib.classChange(
      //       Globals.game.syncStreakScore,
      //       "add",
      //       "hidden"
      //     );
      //   }, 750);
    }
  }
};

var checkForStreakBonus = function checkForStreakBonus(tile) {
  if (_Globals.default.game.currentStreak % 3 === 0) {} // future upgrade: add powerups
  //powerups.init();
  // If the player has hit a streak in an increment of 10 increase their score by *10 the current streak (30 in a row = +30 points)


  if (_Globals.default.game.currentStreak % 10 === 0) {
    _Globals.default.game.playerScore += _Globals.default.game.currentStreak;
  }
};

var changeTileBackground = function changeTileBackground(tile) {
  var color;
  tile.classList.contains("lit--white") ? color = "white" : color = "green";

  _Utilities.default.elementLib.classChangeDelay(tile, 250, "changeColor--".concat(color));
};

var Scoring = function Scoring(tile) {
  // If tapped during sync replace 3 blocks - else replace one block
  _Utilities.default.elementLib.classCheck(tile, "lit--green") ? (0, _ReplaceBlocks.default)(3) : (0, _ReplaceBlocks.default)(1); // Increase player score by 1

  _Globals.default.game.playerScore++; // See if player is still "in the streak" or has hit the full length of the streak

  trackSyncStreak(tile); // Check for streak bonus

  checkForStreakBonus(tile); // Change tile background color

  changeTileBackground(tile); // Update score in DOM

  _Globals.default.dom.score.textContent = "Score: ".concat(_Globals.default.game.playerScore); // Need to set streak to 0 if a player has not tapped the tile when it has flashed
  // Flash the current score beneath the tile in the DOM
  //utilities.classChangeDelay(tile.firstElementChild, 450, "flashScore");
};

var _default = Scoring;
exports.default = _default;
},{"../Globals/Globals":"js/Components/Globals/Globals.js","../Utilities/Utilities":"js/Components/Utilities/Utilities.js","../ReplaceBlocks/ReplaceBlocks":"js/Components/ReplaceBlocks/ReplaceBlocks.js"}],"js/Components/FlashTile/FlashTile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("../Utilities/Utilities"));

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

var _SetTile = _interopRequireDefault(require("../SetTile/SetTile"));

var _Scoring = _interopRequireDefault(require("../Scoring/Scoring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beatOrSync = function beatOrSync() {
  if (_Globals.default.game.beatCount < _Globals.default.game.startSync || _Globals.default.beatCount === 0) {
    return true;
  } else {
    return false;
  }
};

var increaseFlashCount = function increaseFlashCount() {
  _Globals.default.game.flashColor == "lit--white" ? _Globals.default.game.beatCount++ : _Globals.default.game.syncCount++;
};

var FlashTile = function FlashTile() {
  // If sync streak has been hit reset beatCount and syncCount to 0
  if (_Globals.default.game.syncCount == _Globals.default.game.syncLength) {
    _Globals.default.game.beatCount = 0;
    _Globals.default.game.syncCount = 0;
  } // Randomly set how many beats pass before sync starts AND randomly set how many beats the sync will last


  if (_Globals.default.game.beatCount == 0) {
    _Globals.default.game.startSync = _Utilities.default.math.createRandomNumber(15, 5); // the sync flashing will start at anywhere between 5 and 15 beat flashes

    _Globals.default.game.syncLength = _Utilities.default.math.createRandomNumber(12, 3); // the length of the sync flashing will be between 3 and 12 beats
  } // Determine if current flash is a beat (white flash) or sync (green flash)


  beatOrSync() ? _Globals.default.game.flashColor = "lit--white" : _Globals.default.game.flashColor = "lit--green"; // Create tile in the dom and set it to random position with appropriate flashColor assigned

  _Utilities.default.elementLib.classChange((0, _SetTile.default)(), "add", _Globals.default.game.flashColor); // Define and set listener for tile


  var tile = document.querySelector(".tile");
  tile.addEventListener("click", function () {
    (0, _Scoring.default)(this);
  }); //util.setEvents.methods.dynamicEvents();

  increaseFlashCount(); // Comment this out so we can debug Scoring.js tile.firstElementChild.nextElementSibling
  // Remove Tile after one beat of music

  if (!_Globals.default.game.game_over && !_Globals.default.game.paused) {
    setTimeout(function () {
      tile.parentNode.removeChild(tile);
    }, _Globals.default.music.bpm[1]); // set to music.bpm

    setTimeout(function () {
      FlashTile();
    }, _Globals.default.music.bpm[1]);
  } else {
    tile.parentNode.removeChild(tile);
  }
};

var _default = FlashTile;
exports.default = _default;
},{"../Utilities/Utilities":"js/Components/Utilities/Utilities.js","../Globals/Globals":"js/Components/Globals/Globals.js","../SetTile/SetTile":"js/Components/SetTile/SetTile.js","../Scoring/Scoring":"js/Components/Scoring/Scoring.js"}],"js/Components/Services/Services.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BuildGrid = _interopRequireDefault(require("../BuildGrid/BuildGrid"));

var _DropBlocks = _interopRequireDefault(require("../DropBlocks/DropBlocks"));

var _FlashTile = _interopRequireDefault(require("../FlashTile/FlashTile"));

var _SetGridSize = _interopRequireDefault(require("../SetGridSize/SetGridSize"));

var _SetTileSize = _interopRequireDefault(require("../SetTileSize/SetTileSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Services = {
  init: function init() {
    if (_SetGridSize.default.init()) {
      if (_SetTileSize.default.init()) {
        (0, _BuildGrid.default)();
      }
    }
  },
  runGame: function runGame() {
    (0, _DropBlocks.default)();
    (0, _FlashTile.default)();
  }
};
var _default = Services;
exports.default = _default;
},{"../BuildGrid/BuildGrid":"js/Components/BuildGrid/BuildGrid.js","../DropBlocks/DropBlocks":"js/Components/DropBlocks/DropBlocks.js","../FlashTile/FlashTile":"js/Components/FlashTile/FlashTile.js","../SetGridSize/SetGridSize":"js/Components/SetGridSize/SetGridSize.js","../SetTileSize/SetTileSize":"js/Components/SetTileSize/SetTileSize.js"}],"js/Components/Utilities/Utilities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Services = _interopRequireDefault(require("../Services/Services"));

var _Globals = _interopRequireDefault(require("../Globals/Globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {
  math: {
    createRandomNumber: function createRandomNumber(max, min, currentNumber) {
      var newNumber = Math.floor(Math.random() * (max - min) + min);

      if (currentNumber !== undefined) {
        if (newNumber === currentNumber) {
          newNumber = util.createRandomNumber(elements.tiles.length, 0, currentNumber);
        }
      }

      return newNumber;
    },
    sum: function sum(acc, currentValue) {
      return acc + currentValue;
    },
    multiply: function multiply(acc, currentValue) {
      return acc * currentValue;
    },
    subtract: function subtract(currentValue, acc) {
      return currentValue - acc;
    },
    divide: function divide(currentValue, acc) {
      return currentValue / acc;
    },
    getTodaysDate: function getTodaysDate() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      var today = String("".concat(month, "/").concat(day, "/").concat(year));
      return today;
    },
    netValue: function netValue(gross) {
      var _math;

      for (var _len = arguments.length, deductions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        deductions[_key - 1] = arguments[_key];
      }

      return gross - (_math = math).sum.apply(_math, deductions);
    },
    netValue_tax: function netValue_tax(gross) {
      var _math2;

      for (var _len2 = arguments.length, taxes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        taxes[_key2 - 1] = arguments[_key2];
      }

      // how to use map for this?
      for (var i = 0; i < taxes.length; i++) {
        taxes[i] > 1 ? taxes[i] = taxes[i] / 100 : false;
      }

      return math.subtract(gross, math.multiply(gross, (_math2 = math).sum.apply(_math2, taxes)));
    }
  },
  str: {
    addCommas: function addCommas(content) {
      typeof content !== "string" ? content = String(content) : false;
      var formatted = content.replace(/[\D\s\._\-]+/g, "");
      formatted ? formatted = parseInt(formatted, 10) : 0;
      return formatted.toLocaleString("en-US");
    },
    check_alpha: function check_alpha(content) {
      var alpha = /^[a-zA-Z]*$/;
      return alpha.test(content);
    },
    check_alphanumeric: function check_alphanumeric(content) {
      var alphanumeric = /^[a-z0-9]+$/i;
      return alphanumeric.test(content);
    },
    check_numeric: function check_numeric(content) {
      var numeric = /^[0-9]+$/;
      return numeric.test(content);
    },
    currency: function currency(content) {
      // future add on: use str.toFixed(2) //returns 123.45 in case user needs .xx factored in - also can put in an option to round up
      typeof content !== "string" ? content = String(content) : false;

      if (content === "$" || content === "") {
        return content.substr(1, content.length);
      } else {
        if (str.check_numeric(str.removeNonNumeric(content))) {
          return content.replace(content, "$" + str.addCommas(content));
        }
      }
    },
    percent: function percent(content) {
      if (event.key !== "Backspace") {
        if (str.check_numeric(str.removeNonNumeric(content))) {
          return content.replace(content, str.addCommas(content) + "%");
        }
      } else {
        return content.substr(0, content.length);
      }
    },
    removeCommas: function removeCommas(content) {
      return content.replace(/,/g, "");
    },
    removeNonNumeric: function removeNonNumeric(content) {
      return content.replace(/\D/g, "");
    },
    titleCase: function titleCase(content) {
      content = content.toLowerCase();
      content = content.charAt(0).toUpperCase() + content.slice(1);
      return content;
    }
  },
  cookies: {
    getCookie: function getCookie(name) {
      var start = document.cookie.lastIndexOf(name + "=");
      var len = start + name.length + 1;
      if (!start && name != document.cookie.substring(0, name.length)) return null;
      if (start == -1) return null;
      var end = document.cookie.indexOf(";", len);
      if (end == -1) end = document.cookie.length;
      return unescape(document.cookie.substring(len, end));
    },
    setCookie: function setCookie(name, value, maxage, expires, path, domain, secure) {
      var dt = expires ? new Date(expires) : "";
      document.cookie = name + "=" + escape(value) + (maxage ? ";max-age=" + maxage : "") + (dt ? ";expires=" + dt.toGMTString() : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "");
    },
    delCookie: function delCookie(name) {
      document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";
    }
  },
  elementLib: {
    bindElements: function bindElements(bindFrom) {
      var bindFromContent = bindFrom.value || bindFrom.textContent;
      var bindTo = document.querySelector("[bindTo=".concat(bindFrom.getAttribute("bindfrom"), "]"));

      if (bindTo.value) {
        if (bindFromContent !== "") {
          bindTo.value = bindFromContent;
        } else {
          bindTo.value = bindTo.getAttribute("initialValue");
        }
      } else {
        if (bindFromContent !== "") {
          bindTo.textContent = bindFromContent;
        } else {
          bindTo.textContent = bindTo.getAttribute("initialValue");
        }
      }
    },
    classChange: function classChange(element, directive) {
      var _element$classList, _element$classList2;

      for (var _len3 = arguments.length, className = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        className[_key3 - 2] = arguments[_key3];
      }

      directive === "add" ? (_element$classList = element.classList).add.apply(_element$classList, className) : (_element$classList2 = element.classList).remove.apply(_element$classList2, className);
    },
    classCheck: function classCheck(element, className) {
      if (element.classList.contains(className)) {
        return true;
      } else {
        return false;
      }
    },
    classChangeDelay: function classChangeDelay(elements, speed) {
      for (var _len4 = arguments.length, className = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        className[_key4 - 2] = arguments[_key4];
      }

      if (elements.length) {
        elements.forEach(function (element) {
          var _element$classList3;

          (_element$classList3 = element.classList).add.apply(_element$classList3, className);

          setTimeout(function () {
            var _element$classList4;

            (_element$classList4 = element.classList).remove.apply(_element$classList4, className);
          }, speed);
        });
      } else {
        var _elements$classList;

        (_elements$classList = elements.classList).add.apply(_elements$classList, className);

        setTimeout(function () {
          var _elements$classList2;

          (_elements$classList2 = elements.classList).remove.apply(_elements$classList2, className);
        }, speed);
      }
    },
    toArray: function toArray(values) {
      if (Array.from) {
        return Array.from(values);
      } else {
        var newArray = [];

        for (var i = 0; i < values.length; i++) {
          newArray.push(values[i]);
        }

        return newArray;
      }
    },
    filter_attrs: function filter_attrs(element) {
      for (var _len5 = arguments.length, toMatch = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        toMatch[_key5 - 1] = arguments[_key5];
      }

      var attrs = util.convertToArray(element.attributes).map(function (attr) {
        return attr.nodeName;
      });
      var filtered = attrs.filter(function (index) {
        return toMatch.includes(index);
      });
      return filtered;
    },
    getAttrValues: function getAttrValues(element, attrs) {
      var filteredValues = [];
      attrs.forEach(function (attr) {
        filteredValues.push(element.getAttribute(attr));
      });
      return filteredValues;
    },
    isEmptyObj: function isEmptyObj(obj) {
      if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        return true;
      } else {
        return false;
      }
    },
    getIndexByClass: function getIndexByClass(elements, className) {
      elements.forEach(function (element) {
        if (element.classList.contains(className)) {
          var _index = elements.indexOf(element);
        }
      });
      return index;
    },
    makeFile: function makeFile(content, fileType) {
      var newFile = null;
      var data = new Blob([JSON.stringify(content, null, 2)], {
        type: "".concat(fileType)
      });

      if (newFile !== null) {
        window.URL.revokeObjectURL(newFile);
      }

      newFile = window.URL.createObjectURL(data);
      return newFile;
    },
    objExists: function objExists(val, obj) {
      for (var key in obj) {
        if (key === val) {
          return true;
        }
      }
    },
    setAttributes: function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }

      return el;
    },
    shuffleArray: function shuffleArray(array) {
      // Randomize array element order in-place: Durstenfeld shuffle algorithm.
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    }
  },
  timer: {
    t: "",
    counter: 3,
    // Set number to count down/up from
    timer_is_on: 0,
    timedCount: function timedCount(timerElement) {
      timerElement.innerHTML = util.timer.counter;
      util.timer.counter--; // -- to count down, ++ to count up

      util.timer.t = setTimeout(function () {
        util.timer.timedCount(timerElement);
      }, _Globals.default.music.bpm[1]); // timer counts down at speed of song's bpm

      if (util.timer.counter < 1) {
        // if timer hits 0
        setTimeout(function () {
          util.timer.stopCount();
        }, 500);
      }
    },
    startCount: function startCount() {
      if (!util.timer.timer_is_on) {
        util.timer.timer_is_on = 1;
        util.timer.timedCount(timerElement);
      }
    },
    stopCount: function stopCount() {
      clearTimeout(util.timer.t);
      util.timer.counter = 3;
      util.timer.timer_is_on = 0;
    }
  },
  setEvents: {
    elements: {
      dynamicElements: [].slice.call(document.querySelectorAll("[dynamic]")),
      bindingElements: [].slice.call(document.querySelectorAll("[bindFrom]")),
      formatElements: [].slice.call(document.querySelectorAll("[formatAs]")),
      stickyNavigation: document.querySelector("[stickyNav]")
    },
    methods: {
      init_stickyNav: function init_stickyNav() {
        stickyNav(setEvents.elements.stickyNavigation, document.querySelector(".content"));
      },
      bindingElements: function bindingElements() {
        // Set an attr of bindFrom="" on elements you want to trigger binding from.  Set bindTo="" to set the element to bind to.  Match the attr values
        setEvents.elements.bindingElements.forEach(function (bindingElement) {
          bindingElement.addEventListener(bindingElement.getAttribute("eventType"), function () {
            elementLib.bindElements(this);
          });
        });
      },
      formatAs: function formatAs() {
        // Set attrs of eventType="" and  formatAs="" on elements that you want to format using str
        setEvents.elements.formatElements.forEach(function (formatElement) {
          formatElement.addEventListener(formatElement.getAttribute("eventType"), function (ev) {
            if (ev.target.value) {
              ev.target.value = str[formatElement.getAttribute("formatAs")](this.value, ev);
            } else {
              ev.target.textContent = str[formatElement.getAttribute("formatAs")](this.textContent, ev);
            }
          });
        });
      },
      dynamicEvents: function dynamicEvents() {
        util.setEvents.elements.dynamicElements.forEach(function (dynamicElement) {
          dynamicElement.addEventListener(dynamicElement.getAttribute("eventType"), function () {
            _Services.default[dynamicElement.getAttribute("functionName")](this, event);
          });
        });
      }
    }
  }
};
var _default = util;
exports.default = _default;
},{"../Services/Services":"js/Components/Services/Services.js","../Globals/Globals":"js/Components/Globals/Globals.js"}],"js/App.js":[function(require,module,exports) {
"use strict";

require("../css/scss/shared.scss");

var _Utilities = _interopRequireDefault(require("./Components/Utilities/Utilities"));

var _Services = _interopRequireDefault(require("./Components/Services/Services"));

var _Globals = _interopRequireDefault(require("./Components/Globals/Globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import styles
// Import components
// Start Button Behavior
_Globals.default.dom.startButton.addEventListener("click", function () {
  _Services.default.init();

  this.classList.add("hidden");

  _Globals.default.dom.pauseButton.classList.remove("hidden");
}); // Pause Button Behavior


_Globals.default.dom.pauseButton.addEventListener("click", function () {
  _Globals.default.game.paused = !_Globals.default.game.paused;

  if (_Globals.default.game.paused) {
    this.textContent = "Resume"; // Globals.music.audio.pause();
  } else {
    this.textContent = "Pause"; //  Globals.music.audio.play();

    _Services.default.runGame();
  }
});
/*
Need to build:
Setup method of resetting streak to 0 when missing a flash
Reset button to show up when game is paused

Need to test:
Test that streak count increases when on a streak
Test that points add up correctly particularly with re: bonus on streak and synch streak

Bugs:
BuildGrid not stopping at width and height
DropBlocks is leaving 1 block when flashing game over
When tapping on sync throws error in ReplaceBlocks re classList of undefined
FlashTile continues to run after game over
Streak title in DOM not emptying to 0 on a missed click

*/
},{"../css/scss/shared.scss":"css/scss/shared.scss","./Components/Utilities/Utilities":"js/Components/Utilities/Utilities.js","./Components/Services/Services":"js/Components/Services/Services.js","./Components/Globals/Globals":"js/Components/Globals/Globals.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52680" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/App.js"], null)
//# sourceMappingURL=/App.dc58c3d0.js.map