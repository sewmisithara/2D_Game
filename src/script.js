var animal = document.getElementById("animal");
let idleImageNumber = 0;
let backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;
var runImageNumber = 0;
let runAnimationNumber = 0;

function idleAnimation() {
  if (idleImageNumber >= 10) {
    idleImageNumber = 0;
  }

  idleImageNumber = idleImageNumber + 1;
  console.log(idleImageNumber);

  animal.src = "image/Idle (" + idleImageNumber + ").png";
}
const idleAnimationStart = setInterval(idleAnimation, 50);

function runAnimation() {
  runImageNumber = runImageNumber + 1;

  if (runImageNumber == 8) {
    runImageNumber = 1;
  }
  animal.src = "image/Run (" + runImageNumber + ").png";
}
function runAnimationStart() {
  runAnimationNumber = setInterval(runAnimation, 100);
  clearInterval(idleAnimationStart);
}

function keyCheck(event) {
  //alert(event.which);
  //enter=13
  var keyCode = event.which;
  if (keyCode == 13) {
    if (runAnimationNumber == 0) {
      runAnimationStart();
    }
  }
  if (moveBackgroundAnimationId == 0) {
    moveBackgroundAnimationId = setInterval(moveBackground, 50);
  }
}

function moveBackground() {
  backgroundImagePositionX = backgroundImagePositionX - 20;
  document.getElementById("background").style.backgroundPositionX =
    backgroundImagePositionX + "px";
}
