import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const materials = [
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("./images/evee1.jpg"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("./images/evee2.jpg"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("./images/evee3.jpg"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("./images/evee4.jpg"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("./images/evee5.jpg"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("./images/evee6.jpg"),
  }),
];

const geometry = new THREE.BoxGeometry(1, 1, 1);

const cube = new THREE.Mesh(geometry, materials);

function loadColorTexture(path) {
  const texture = loader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

scene.add(cube);

camera.position.z = 5;

const color = 0xffffff;
const intensity = 3;
const light = new THREE.AmbientLight((color, intensity));
light.position.set(-1, 2, 4);
scene.add(light);

function animate(time) {
  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
