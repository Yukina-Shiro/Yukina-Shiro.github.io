import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let parrotModel = null;

const loader = new GLTFLoader();

loader.load(
  "./model/Parrot.glb",
  function (gltf) {
    parrotModel = gltf.scene;
    parrotModel.scale.set(0.03, 0.03, 0.03);
    parrotModel.position.set(0, 0, 0);
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  },
);

camera.position.set(0, 0.5, 4);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(-1, 2, 4);
scene.add(light);

function render(time) {
  time *= 0.001; // convert time to seconds

  if (parrotModel) {
    parrotModel.rotation.x = time;
    parrotModel.rotation.y = time;
    
  }

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
