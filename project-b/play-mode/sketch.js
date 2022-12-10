let aSound, sSound, dSound, fSound, gSound, hSound, jSound, kSound, lSound, llSound, wSound, rSound, tSound, uSound, iSound, oSound, ooSound;
let whiteSound = [];
let blackSound = [];
function preload() {
  aSound = loadSound("resource/A3.MP3")
  sSound = loadSound("resource/B3.MP3")
  dSound = loadSound("resource/C4.MP3")
  fSound = loadSound("resource/D4.MP3")
  gSound = loadSound("resource/E4.MP3")
  hSound = loadSound("resource/F4.MP3")
  jSound = loadSound("resource/G4.MP3")
  kSound = loadSound("resource/A4.MP3")
  lSound = loadSound("resource/B4.MP3")
  llSound = loadSound("resource/C5.MP3")
  wSound = loadSound("resource/A33.MP3")
  rSound = loadSound("resource/C44.MP3")
  tSound = loadSound("resource/D44.MP3")
  uSound = loadSound("resource/F44.MP3")
  iSound = loadSound("resource/G44.MP3")
  oSound = loadSound("resource/A44.MP3")
  ooSound = loadSound("resource/C55.MP3")
  whiteSound.push(aSound, sSound, dSound, fSound, gSound, hSound, jSound, kSound, lSound, llSound)
  blackSound.push(wSound, rSound, tSound, uSound, iSound, oSound, ooSound)
}

let trans;
let xPos;
let noteX = [3, 3, 5, 6, 8, 6, 5, 5, 6, 5, 3, 3, 5, 6, 8, 6, 5, 5, 6, 5, 5, 5, 5, 3, 5, 6, 6, 5, 3, 2, 3, 5, 3, 2, 1, 1, 2, 1, 2, 3, 2, 1, 3, 2, 3, 5, 6, 8, 6, 5, 5, 3, 2, 3, 5, 3, 2, 1, 2, -1, 1, 2, 3, 1, 2, 1, -1, 5]
let a;
let Xbox = [];
let col;
let Col;
let whiteIfDisplay = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let env;
let whiteKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];

let blackKeys = ["w", "r", "t", "u", "i", "o", "["];

let whiteNotes = [];
let blackNotes = [];
let whiteLights = [];
let blackLights = [];
let blackLightsPos = [35, 155, 215, 335, 395, 455, 575];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  Col = 0
  col = 0
  color = 0
  env = new p5.Envelope(0.01, 1, 2, 0.1);
  a = 0
  for (let i = 0; i< noteX.length; i++){
    Xbox.push(noteX[i]*60+50)
  }
}

function draw() {
  background(20);
  strokeWeight(4);
  playSound();
  for (let k1 = 0; k1 < 10; k1++) {
    fill(235);
    rect(k1 * 60, 0, 60, 180);
  }
  for (let k2 = 0; k2 < 10; k2++) {
    if (k2 < 1 || (k2 > 1) & (k2 < 4) || (k2 > 4) & (k2 < 8) || k2 > 8) {
      fill(15);
      rect(k2 * 60 + 35, 0, 50, 120);
    }
  }
  fill(20)
  textSize(25);
  text("D", 140, 165);
  text("H", 320, 165);
  fill(235);
  text("R", 170, 110);
  text("U", 350, 110);

  if (keyIsPressed) {
    for (let i = 0; i < whiteKeys.length; i++) {
      if (whiteKeys[i] == key) {
        whiteLights[i].display();
      }
    }
    for (let i = 0; i < blackKeys.length; i++) {
      if (blackKeys[i] == key) {
        blackLights[i].display();
      }
    }
  }

  if (whiteNotes.length > 0) {
    for (let i = 0; i < whiteNotes.length; i++) {
      let whiteNote = whiteNotes[i];
      whiteNotes[i].move();
      whiteNotes[i].display();

      if (whiteNote.y > 400) {
        whiteNotes.splice(i, 1);
      }
      if (
        whiteNote.y > 300 &&
        whiteNote.x > boxX - 30 &&
        whiteNote.x < boxX + 30
      ) {
        whiteNotes.splice(i, 1);
        col = 255
        console.log("good");  
        a = a + 1;
      }
    }
  }
  if (blackNotes.length > 0) {
    for (let i = 0; i < blackNotes.length; i++) {
      let blackNote = blackNotes[i];
      blackNotes[i].move();
      blackNotes[i].display();
      if (blackNote.y > 400) {
        blackNotes.splice(i, 1);
      }
      if (
        blackNote.y > 300 &&
        blackNote.x > boxX - 30 &&
        blackNote.x < boxX + 30
      ) {
        blackNotes.splice(i, 1);
        fill(color)
        color = 255
        console.log("good");
      }
    }
  }
  boxX = Xbox[a]
  fill(150, 100, 20);
  rect(boxX, 520, 80);
  fill(0)
  text("box", boxX + 17.5, 585);
  text("note", boxX + 17, 560)
  fill(230, col)
  text("Excellent!", 30, 400);
  fill(230, color)
  text("Great!", 30, 420)
  if (col > 0) {
    col = col - 2.5
  }
  if (color > 0) {
    color = color - 2.5
  }
  textSize(25)
  fill(230,Col)
  text("Congratualations! Now please click the", 30, 200)
  text("link 'HERE' on the left side", 100, 250)
  if (Col > 0) {
    Col = Col - 5
  }
  if ( a > 67) {
    a = 0;
    Col = 500
  }
}

class Light {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    for (let i = 0; i < 260; i++) {
      trans = map(sin(i * 0.007), -1, 1, 300, 0);
      push();
      fill(20, 220, 255, trans);
      noStroke();
      rect(this.x, this.y + i, 60, 1);
      pop();
    }
  }
}
class light {
  constructor(x) {
    this.x = x;
    this.y = 190;
  }
  display() {
    for (let i = 0; i < 260; i++) {
      trans = map(sin(i * 0.007), -1, 1, 300, 0);
      push();
      fill(20, 255, 220, trans);
      noStroke();
      rect(this.x, this.y + i, 50, 1);
      pop();
    }
  }
}

class Note {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.trans = 500;
  }
  move() {
    this.y += 6;
  }
  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(230, this.trans);
    push();
    translate(0, 190);
    rect(10, 0, 35, 4);
    rect(10, 0 + 7, 35, 2);
    rect(10, 0, 2, 37);
    rect(45, 0, 2, 41);
    pop();
    push();
    translate(17.5, 226);
    rotate(radians(45));
    ellipse(0, 0, 15, 18);
    pop();
    push();
    translate(53, 229);
    rotate(radians(45));
    ellipse(0, 0, 15, 18);
    pop();
    pop();
  }
}
class note {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move() {
    this.y += 6;
  }
  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(230);
    noStroke();
    push();
    translate(-8, 200);
    rotate(radians(-30));
    rect(10, 10, 25, 4);
    pop();
    push();
    translate(-5, 208);
    rotate(radians(-30));
    rect(10, 10, 22, 2);
    pop();
    push();
    translate(16, 195);
    rect(10, 0, 3, 40);
    pop();
    push();
    translate(35, 231);
    rotate(radians(45));
    ellipse(0, 0, 17, 20);
    pop();
    pop();
  }
}


function keyPressed() {
  for (let i = 0; i < whiteKeys.length; i++) {
    if (whiteKeys[i] == key) {
      whiteNotes.push(new Note(i * 60, 0));
      console.log(whiteNotes);
    }
    if (blackKeys[i] == key) {
      blackNotes.push(new note(blackLightsPos[i], 0));
      console.log(blackNotes);
    }
  }
  for (let i = 0; i < 10; i++) {
    whiteLights.push(new Light(i * 60, 180));
  }
  for (let i = 0; i < 7; i++) {
    blackLights.push(new light(blackLightsPos[i], 180));
  }
}
function playSound() {
  for (let i = 0; i < whiteSound.length; i++) {
    if (whiteSound[i]) {
      if (keyIsPressed && key == whiteKeys[i] && !whiteSound[i].isPlaying()) {
        whiteSound[i].play();
      }
    }
  }
  for (let i = 0; i < blackSound.length; i++) {
    if (blackSound[i]) {
      if (keyIsPressed && key == blackKeys[i] && !blackSound[i].isPlaying()) {
        blackSound[i].play();
      }
    }
  }
}
function keyReleased() {
  for (let i = 0; i < whiteSound.length; i++) {
    if (whiteSound[i]) {
      if (key == whiteKeys[i] && whiteSound[i].isPlaying()) {
        whiteSound[i].stop();
      }
    }
  }
  for (let i = 0; i < blackSound.length; i++) {
    if (blackSound[i]) {
      if (key == blackKeys[i] && blackSound[i].isPlaying()) {
        blackSound[i].stop();
      }
    }
  }
}