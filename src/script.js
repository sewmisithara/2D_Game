var animal = document.getElementById("animal");
idleImageNumber = 0;
function idleAnimation() {

    if (idleImageNumber >= 10) {
        idleImageNumber = 0;
    }

    idleImageNumber = idleImageNumber + 1;
    console.log(idleImageNumber);

    animal.src = "image/Idle (" + idleImageNumber + ").png";
}
function idleAnimationStart() {
    console.log('start');
    setInterval(idleAnimation, 50);
}
function runAnimation(){


    
}