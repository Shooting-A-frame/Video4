var sceneEl = document.querySelector("a-scene");
var cameraEl = document.getElementById("camera");
var controllerEl = document.getElementById("rtcontroller");

//-- used by keyboard shoot --
const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = cameraEl.getAttribute("position");
  bullet.setAttribute("position", pos);
  //bullet.setAttribute("velocity", getDirection(cameraEl, 30));
  let  direction = new THREE.Vector3();
  cameraEl.object3D.getWorldDirection( direction );
  bullet.setAttribute("velocity", direction.multiplyScalar(-10));
  bullet.setAttribute("dynamic-body", {shape: 'box', mass: 1});
  bullet.setAttribute("radius", 0.2);
  bullet.setAttribute("collide-detect", null);

  sceneEl.appendChild(bullet);
};

//-- keyboard shoot --
document.onkeydown = (event) => {
  //-- keycode for space bar --
  if (event.which == 32) {
    shoot();
  }
};

//-- oculus touch controller shoot --
const controllershoot = () => {
  const bullet = document.createElement("a-sphere");
  //let pos = cameraEl.getAttribute("position");

  var position = new THREE.Vector3();
  controllerEl.object3D.getWorldPosition(position);
  
  
  bullet.setAttribute("position", position);
  //bullet.setAttribute("velocity", getDirection(controllerEl, 30));
  var direction = new THREE.Vector3();
  controllerEl.object3D.getWorldDirection( direction );
  bullet.setAttribute("velocity", direction.multiplyScalar(-20));
  bullet.setAttribute("dynamic-body", {shape: 'box', mass: 1});
  bullet.setAttribute("radius", 0.2);
  bullet.setAttribute("collide-detect", null);
  
  sceneEl.appendChild(bullet);
};