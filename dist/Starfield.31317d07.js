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
})({"js/Components/Starfield/Starfield.js":[function(require,module,exports) {
var speed_limit = 2; // 2

var accelerate = true; // true

var speed = 0; // 0

var stars = 3400; // 3400

var fov = 100; // 100 - not actual fov in degrees

var extraW = extraH = 1400; // 1400

var canv = document.getElementById("cv");
document.querySelector("body").onresize = resizeCanv;
canv.onclick = init;
var ctx = canv.getContext("2d");
var minZ = -fov + 2; // Precalculating so there are less calculations between frames

var extraW_half = extraW / 2;
var extraH_half = extraH / 2;
var TWOPI = Math.PI * 2;
var xMin, xMax, yMin, yMax;
var initScaleX, initScaleY;
var vel;
var points;

function init() {
  resizeCanv();
  points = randomPoints();
  vel = speed;
}

function resizeCanv() {
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;
  xMax = canv.width / 2;
  xMin = -xMax;
  yMax = canv.height / 2;
  yMin = -yMax;
  initScaleX = canv.width + extraW;
  initScaleY = canv.height + extraH;
}

function randomPoints() {
  var arr = [];

  for (var i = 0; i < stars; i++) {
    arr.push({
      x: Math.random() * initScaleX - (xMax + extraW_half),
      y: Math.random() * initScaleY - (yMax + extraH_half),
      z: Math.random() * 1000 + 140,
      size: 2
    });
  }

  return arr;
}

function project(items) {
  var alterScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (alterScale) alterScale = -0.2;else alterScale = 0;
  var projected = [];
  items.forEach(function (item) {
    var scale = fov / (fov + item.z);
    projected.push({
      x: item.x * scale,
      y: item.y * scale,
      z: item.z,
      size: item.size * scale + alterScale
    });
  });
  return projected;
}

function inView(item) {
  if (item.x + item.size > xMin && item.x < xMax && item.y + item.size > yMin && item.y < yMax && item.z < 500) {
    return true;
  }

  return false;
}

function drawRects(items) {
  items.forEach(function (item) {
    if (inView(item)) ctx.fillRect(item.x, item.y, item.size, item.size);
  });
}

function drawCircles(items) {
  items.forEach(function (item) {
    if (inView(item)) {
      ctx.beginPath();
      ctx.arc(item.x, item.y, item.size, 0, TWOPI);
      ctx.fill();
      ctx.closePath();
    }
  });
}

function drawText(items, text) {
  items.forEach(function (item) {
    if (inView(item)) {
      ctx.font = Math.round(item.size * 6) + "px sans-serif";
      ctx.fillText(text, item.x, item.y);
    }
  });
}

function animate() {
  ctx.save();
  window.requestAnimationFrame(animate);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.translate(xMax, yMax);
  ctx.fillStyle = "rgb(255,255,255)";
  points.forEach(function (item) {
    if (item.z > minZ) item.z -= vel;else {
      item.z = Math.random() * 600 + 600;
      item.x = Math.random() * initScaleX - (xMax + extraW_half);
      item.y = Math.random() * initScaleY - (yMax + extraH_half);
    }
  });
  drawRects(project(points)); //drawCircles(project(points));
  //drawText(project(points), "♥️");

  ctx.restore();

  if (accelerate) {
    if (vel < speed_limit) vel += 0.04;
  }
}

init();
animate(); // I know this is overcomplicated, especially
// for something that isn't even interactive. Forgive me.
//
// TODO
//
// 1. Go object oriented with classes?
// 2. Make drawing methods easy
//    to switch between
// 3. Make further objects darker
// 4. Use a consistent
//    variable naming scheme for once
//
// You might ask, why rectangles
//  instead of nice little circles?
//	Well, because it's less resource
//  intensive to draw. At least my phone struggled with it.
// 	I did provide a method for drawing
//  circles though, but I think it looks worse.
// 	I really should've made objects
//  darker if they were far away.
//  Or maybe I should've drawn
//  the trails of the stars as they move along. Oh well.
//
// The guy to blame
// for all this spaghetti code: Daniel Vagner
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56442" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/Components/Starfield/Starfield.js"], null)
//# sourceMappingURL=/Starfield.31317d07.js.map