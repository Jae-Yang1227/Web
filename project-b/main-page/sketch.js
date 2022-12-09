let mySound
function preload() {
  mySound = loadSound("resource/euphoria.mp3")
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
  let canvas = createCanvas(350, 150);
  canvas.parent("canvasContainer");
  background(0);
  blackKeys = [30, 80, 180, 230, 280]

}

function draw() {
  // if(mySound){
  //   console.log(mySound.isPlaying());
  //   if(mySound.isPlaying() == false){
  //   mySound.play()
  //   }
  // }
  for (let i = 0; i < 7; i++) {
    fill(235)
    strokeWeight(2)
    rect(i * 50, 0, 50, 150)
  }
  for (let i = 0; i < 5; i++) {
    fill(15)
    rect(blackKeys[i], 0, 40, 110)
  }
  strokeWeight(6)
  line(0, 0, 350, 0);
  line(0, 0, 0, 150);
  line(0, 150, 350, 150);
  line(350, 0, 350, 150);
}