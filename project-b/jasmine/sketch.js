let mySound
function preload() {
  mySound = loadSound("resource/茉莉花.mp3")
}
function mousePressed(){
  if(mySound.isPlaying() == false){
    mySound.play()
  }
}
function keyPressed() {
  if(mySound.isPlaying() == true){
    mySound.stop();
  }
}

function setup() {
  let canvas = createCanvas(1,1);
  canvas.parent("canvasContainer");
}

function draw() {
}