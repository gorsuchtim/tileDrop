"use strict";

import util from "../Utilities/Utilities";
import * as THREE from "three";

const Three = () => {
  document.body.appendChild(renderer.domElement);
  console.log("Three still running");
};

export default Three;

// ******* Scene
var scene = new THREE.Scene();

// ******** Camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// ******* Light
var light1 = new THREE.PointLight(0xffffff, 1, 1000);
light1.position.set(0, 0, 0); // x, y, x
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 2, 1000);
light2.position.set(0, 0, 25); // x, y, x
scene.add(light2);

// ******* Geometry
var geometry = new THREE.BoxGeometry(0.35, 0.35, 0.35);
var material = new THREE.MeshLambertMaterial();
//var staticMesh = new THREE.Mesh(geometry, setRandomColor(material));
var staticMesh = new THREE.Mesh(geometry, setRandomColor(material));
// ******* RENDERER
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

scene.add(staticMesh);

render();

function render() {
  requestAnimationFrame(render);
  staticMesh.rotation.x += 0.03;
  staticMesh.rotation.y += 0.03;
  renderer.render(scene, camera);
}

function setRandomColor(material) {
  //   var colors = [
  //     "rgb(191,165,246)",
  //     "rgb(46,193,246)",
  //     "rgb(48,68,218)",
  //     "rgb(176,24,246)",
  //     "rgb(87,45,112)",
  //     "rgb(18,33,98)",
  //     "rgb(12,78,105)"
  //   ];
  // material.color.setStyle(colors[util.math.createRandomNumber(7, 0)]);
  material.color.setStyle("rgb(176, 24, 246)");
  return material;
}
