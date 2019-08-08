var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm");
var body = document.getElementById("body");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveLeftArm);
rightArm.addEventListener("click", moveRightArm);
body.addEventListener("click", moveBody);

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10); // draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

function moveLeftArm(e = {}) {
  var robotPart = e.target || leftArm;
  var left = 100;
  var id = setInterval(frame, 10); // draw every 10ms
  function frame() {
    robotPart.style.left = left + "%";
    left--;
    if (left === 64) {
      clearInterval(id);
    }
  }
}

function moveRightArm(e = {}) {
  var robotPart = e.target || rightArm;

  var left = 0;
  var id = setInterval(frame, 10); // draw every 10ms
  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 21) {
      clearInterval(id);
    }
  }
}
function moveBody(e = {}) {
  var robotPart = e.target || body;
  var top = 100;
  var id = setInterval(frame, 10); // draw every 10ms
  function frame() {
    robotPart.style.top = top + "%";
    top--;
    if (top === 34) {
      clearInterval(id);
    }
  }
}

function assembleRobot() {
  // console.log("calling assembleRobot...");
  moveBody();
  moveRightArm();
  moveLeftArm();
}
