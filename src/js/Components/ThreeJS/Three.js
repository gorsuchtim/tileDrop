import Util from "../Utilities/Util";
import * as THREE from "three";

var scene = new THREE.Scene();
// ******** CAMERA

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// ******* LIGHT
var light1 = new THREE.PointLight(0xffffff, 1, 1000);
light1.position.set(0, 0, 0); // x, y, x
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 2, 1000);
light2.position.set(0, 0, 25); // x, y, x
scene.add(light2);

// ******* GEOMETRY/MATERIAL
var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshLambertMaterial();
var staticMesh = new THREE.Mesh(geometry, setRandomColor(material));

scene.add(staticMesh);
// for (var i = 0; i < 10; i++) {
//   staticMesh.position.x = Math.random() * (window.innerWidth - 0) + 0;
//   staticMesh.position.y = (Math.random() - 0.5) * 10;
//   staticMesh.position.z = (Math.random() - 0.5) * 10;
//   scene.add(staticMesh);
// }

// ******* RENDERER
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

render();

// ******* APPEND TO DOM
const Three = () => {
  document.body.appendChild(renderer.domElement);
  console.log("Three still running");
};

export default Three;

// ******** Functions
function render() {
  requestAnimationFrame(render);
  staticMesh.rotation.x += 0.03;
  staticMesh.rotation.y += 0.03;
  renderer.render(scene, camera);
}

function setRandomColor(material) {
  var colors = [
    "rgb(191,165,246)",
    "rgb(46,193,246)",
    "rgb(48,68,218)",
    "rgb(176,24,246)",
    "rgb(87,45,112)",
    "rgb(18,33,98)",
    "rgb(12,78,105)"
  ];
  material.color.setStyle(colors[Util.createRandomNumber(colors.length, 0)]);
  return material;
}

// ******* ADD OBJECTS TO PAGE
// var meshX = 0;
// var meshArray = [];
// for (var i = 0; i < 15; i++) {
//   var mesh = new THREE.Mesh(geometry, material);
//   mesh.position.x = Math.random() * (window.innerWidth - 0) + 0;
//   mesh.position.y = (Math.random() - 0.5) * 10;
//   mesh.position.z = (Math.random() - 0.5) * 10;
//   meshArray.push(mesh);
//   scene.add(mesh);
//   meshX++;
// }
