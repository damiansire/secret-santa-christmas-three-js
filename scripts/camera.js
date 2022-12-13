/*
  drawAxis();
  function drawLine(x1, y1, z1, x2, y2, z2) {
    const material = new THREE.LineBasicMaterial({ color: "red" });
    const points = [];
    points.push(new THREE.Vector3(x1, y1, z1));
    points.push(new THREE.Vector3(x2, y2, z2));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
  }
  function drawAxis() {
    drawLine(0, 3, 0, 1, 3, 0);
  }
*/

function ponerCamaraDeFrente(camera) {
  camera.position.z = 4;
  camera.position.y = 1;
  camera.position.x = 2;
  camera.rotation.x = 0;
  camera.rotation.z = 0;
  camera.rotation.y = 0;
}

function ponerCamaraDeArriba(camera) {
  camera.position.z = 4;
  camera.position.y = 5;
  camera.position.x = 2;
  camera.rotation.x = -1;
  camera.rotation.z = 0;
  camera.rotation.y = 0;
}

//Creacion de la escena y de la camara
scene = new THREE.Scene();
//Set backgroun of escene
//scene.background = new THREE.Color("#666666");
const perspectiveRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(80, perspectiveRatio, 0.1, 1000);
//Renderizado
renderer = new THREE.WebGLRenderer();
//La dimencion del render es toda la pantalla
renderer.setSize(window.innerWidth, window.innerHeight);
//Agregamos al documento el renderer para que se renderize
document.body.appendChild(renderer.domElement);
