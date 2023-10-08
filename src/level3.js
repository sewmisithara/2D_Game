var animal = document.getElementById("animal");
idleImageNumber = 1;
idleAnimationNumber = 0;
function idleAnimation() {
  idleImageNumber = idleImageNumber + 1;
  if (idleImageNumber == 10) {
    idleImageNumber = 1;
  }

  animal.src = "image/Idle (" + idleImageNumber + ").png";
}
function idleAnimationStart() {
  idleAnimationNumber = setInterval(idleAnimation, 200);
}
runImageNumber = 1;
runAnimationNumber = 0;
function runAnimation() {
  runImageNumber = runImageNumber + 1;
  if (runImageNumber == 11) {
    runImageNumber = 1;
  }

  animal.src = "image/run (" + runImageNumber + ").png";

  document.getElementById("runnig").play();
}
function runAnimationStart() {
  runAnimationNumber = setInterval(runAnimation, 90);
  clearInterval(idleAnimationNumber);
}
jumpImageNumber = 1;
jumpAnimationNumber = 0;
animalMarginTop = 380;

function jumpAnimation() {
  jumpImageNumber = jumpImageNumber + 1;

  if (jumpImageNumber <= 6) {
    animalMarginTop = animalMarginTop - 55;
    animal.style.marginTop = animalMarginTop + "px";
  }
  if (jumpImageNumber >= 7) {
    animalMarginTop = animalMarginTop + 55;
    animal.style.marginTop = animalMarginTop + "px";
  }

  if (jumpImageNumber == 11) {
    jumpImageNumber = 1;
    clearInterval(jumpAnimationNumber);
    jumpAnimationNumber = 0;
    runImageNumber = 0;
    runAnimationStart();
  }
  animal.src = "image/jump (" + jumpImageNumber + ").png";

  document.getElementById("songs").play();
}

function jumpAnimationStart() {
  clearInterval(idleAnimationNumber);
  runImageNumber = 0;
  clearInterval(runAnimationNumber);
  jumpAnimationNumber = setInterval(jumpAnimation, 100);
}

function keyCheck(event) {
  //alert(event.which);
  //enter=13;
  //space=32;

  var keyCode = event.which;

  if (keyCode == 13) {
    if (runAnimationNumber == 0) {
      runAnimationStart();
    }

    if (moveBackgroundAnimationId == 0) {
      moveBackgroundAnimationId = setInterval(moveBackground, 100);
    }
    if (boxAnimationId == 0) {
      boxAnimationId = setInterval(boxAnimation, 100);
    }
  }

  if (keyCode == 32) {
    if (jumpAnimationNumber == 0) {
      jumpAnimationStart();
    }
    if (moveBackgroundAnimationId == 0) {
      moveBackgroundAnimationId = setInterval(moveBackground, 100);
    }
    if (boxAnimationId == 0) {
      boxAnimationId = setInterval(boxAnimation, 100);
    }
  }
}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground() {
  backgroundImagePositionX = backgroundImagePositionX - 20;
  document.getElementById("background").style.backgroundPositionX =
    backgroundImagePositionX + "px";

  score = score + 1;
  document.getElementById("score").innerHTML = score;

  if (score == 300) {
    document.getElementById("win").style.visibility = "visible";
    document.getElementById("winScore").innerHTML = score;

    document.getElementById("songWin").play();
    document.getElementById("song").pause();
  }
}

boxMarginLeft = 900;
function createBoxes() {
  

  for (var i = 0; i <= 3; i++) {
    var box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxMarginLeft + "px";
    box.id = "box" + i;
    //boxMarginLeft=boxMarginLeft+1000;

    if (i <= 3) {
      boxMarginLeft = boxMarginLeft + 500;
    }
  }

  for (var i = 0; i <= 3; i++) {
    var boxOne = document.createElement("div");
    boxOne.className = "boxOne";
    document.getElementById("background").appendChild(boxOne);
    boxOne.style.marginLeft = boxMarginLeft + "px";
    boxOne.id = "boxOne" + i;
    //boxMarginLeft=boxMarginLeft+1000;

    if (i <= 3) {
      boxMarginLeft = boxMarginLeft + 500;
    }
  }

  for (var i = 0; i <= 3; i++) {
    var boxTwo = document.createElement("div");
    boxTwo.className = "boxTwo";
    document.getElementById("background").appendChild(boxTwo);
    boxTwo.style.marginLeft = boxMarginLeft + "px";
    boxTwo.id = "boxTwo" + i;
    //boxMarginLeft=boxMarginLeft+1000;

    if (i <= 3) {
      boxMarginLeft = boxMarginLeft + 500;
    }
  }
}

var boxAnimationId = 0;
function boxAnimation() {
  

  for (var i = 0; i <= 3; i++) {
    var box = document.getElementById("box" + i);
    var currentMarginLeft = getComputedStyle(box).marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft) - 35;
    box.style.marginLeft = newMarginLeft + "px";

    if ((newMarginLeft >= -110) & (newMarginLeft <= 100)) {
      if (animalMarginTop > 300) {
        clearInterval(boxAnimationId);

        clearInterval(runAnimationNumber);
        runAnimationNumber = -1;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = -1;
        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;

        deadAnimationNumber = setInterval(animalDeadAnimation, 100);
      }
    }
  }
  for (var i = 0; i <= 3; i++) {
    var boxOne = document.getElementById("boxOne" + i);
    var currentMarginLeft = getComputedStyle(boxOne).marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft) - 35;
    boxOne.style.marginLeft = newMarginLeft + "px";

    if ((newMarginLeft >= -110) & (newMarginLeft <= 100)) {
      if (animalMarginTop > 300) {
        clearInterval(boxAnimationId);

        clearInterval(runAnimationNumber);
        runAnimationNumber = -1;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = -1;
        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;

        deadAnimationNumber = setInterval(animalDeadAnimation, 100);
      }
    }
  }


  for (var i = 0; i <= 3; i++) {
    var boxTwo = document.getElementById("boxTwo" + i);
    var currentMarginLeft = getComputedStyle(boxTwo).marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft) - 35;
    boxTwo.style.marginLeft = newMarginLeft + "px";

    if ((newMarginLeft >= -110) & (newMarginLeft <= 100)) {
      if (animalMarginTop > 300) {
        clearInterval(boxAnimationId);

        clearInterval(runAnimationNumber);
        runAnimationNumber = -1;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = -1;
        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;

        deadAnimationNumber = setInterval(animalDeadAnimation, 100);
      }
    }
  }


}

deadImageNumber = 1;
deadAnimationNumber = 0;
function animalDeadAnimation() {
  deadImageNumber = deadImageNumber + 1;

  if (deadImageNumber == 11) {
    deadImageNumber = 10;

    document.getElementById("end").style.visibility = "visible";
    document.getElementById("endScore").innerHTML = score;

    document.getElementById("song").play();
  }

  animal.src = "image/dead (" + deadImageNumber + ").png";
}
function reload() {
  location.reload();
}
