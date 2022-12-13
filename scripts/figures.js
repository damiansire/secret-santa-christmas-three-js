const squaresAmountInLine = 10;
const lastSquare = { z: (squaresAmountInLine - 1) * -2 };
function drawSquare(x, y, z) {
  //Creo una geometria con una primitiva xD
  const geometry = new THREE.BoxGeometry();
  //Creamos el material (Aplicamos propiedades)
  const material = new THREE.MeshBasicMaterial({ color: "#00ff00" });
  //Hacemos la conjucion entre la geometria y el material
  //Con esto cremaos el objeto
  const cube = new THREE.Mesh(geometry, material);

  //position
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;

  //Agregamos el objeto a la escena
  scene.add(cube);

  function animate() {
    //cube.position.x -= 0.005;
    cube.position.z += 0.01;
  }

  return { mesh: cube, animateElement: animate };
}

const drawSquares = () => {
  const squares = [];
  for (let index = -1; index < squaresAmountInLine; index++) {
    squares.push(drawSquare(5, 0, -2 * index));
    squares.push(drawSquare(-1, 0, -2 * index));
  }
  return squares;
};

animateSquares = (squares) => {
  for (square of squares) {
    if (square.mesh.position.z > 3) {
      square.mesh.position.z = lastSquare.z;
    }
    square.animateElement();
  }
};
