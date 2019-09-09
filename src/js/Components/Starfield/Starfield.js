var speed_limit = 2; // 2
var accelerate = true; // true
var speed = 0; // 0
var stars = 3400; // 3400
var fov = 100; // 100 - not actual fov in degrees
var extraW = (extraH = 1400); // 1400

var canv = document.getElementById("cv");
document.querySelector("body").onresize = resizeCanv;
canv.onclick = init;
const ctx = canv.getContext("2d");
const minZ = -fov + 2;

// Precalculating so there are less calculations between frames
var extraW_half = extraW / 2;
var extraH_half = extraH / 2;
const TWOPI = Math.PI * 2;
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
  let arr = [];
  for (let i = 0; i < stars; i++) {
    arr.push({
      x: Math.random() * initScaleX - (xMax + extraW_half),
      y: Math.random() * initScaleY - (yMax + extraH_half),
      z: Math.random() * 1000 + 140,
      size: 2
    });
  }
  return arr;
}

function project(items, alterScale = true) {
  if (alterScale) alterScale = -0.2;
  else alterScale = 0;
  let projected = [];
  items.forEach(item => {
    let scale = fov / (fov + item.z);
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
  if (
    item.x + item.size > xMin &&
    item.x < xMax &&
    item.y + item.size > yMin &&
    item.y < yMax &&
    item.z < 500
  ) {
    return true;
  }
  return false;
}

function drawRects(items) {
  items.forEach(item => {
    if (inView(item)) ctx.fillRect(item.x, item.y, item.size, item.size);
  });
}

function drawCircles(items) {
  items.forEach(item => {
    if (inView(item)) {
      ctx.beginPath();
      ctx.arc(item.x, item.y, item.size, 0, TWOPI);
      ctx.fill();
      ctx.closePath();
    }
  });
}

function drawText(items, text) {
  items.forEach(item => {
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
  points.forEach(item => {
    if (item.z > minZ) item.z -= vel;
    else {
      item.z = Math.random() * 600 + 600;
      item.x = Math.random() * initScaleX - (xMax + extraW_half);
      item.y = Math.random() * initScaleY - (yMax + extraH_half);
    }
  });

  drawRects(project(points));
  //drawCircles(project(points));
  //drawText(project(points), "♥️");

  ctx.restore();

  if (accelerate) {
    if (vel < speed_limit) vel += 0.04;
  }
}

init();
animate();

// I know this is overcomplicated, especially
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
