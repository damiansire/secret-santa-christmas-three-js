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
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

  return { mesh: cube, animateElement: animate };
}
