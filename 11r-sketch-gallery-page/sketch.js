let x;
let y;
let s;
let b;
let R;
let G;
let x1;
let y1;
let s1;
let b1;
let YY;
let BR;
let BR1;
let br;
let spdx;
let spdy;
let dA = [];
let dB = [];
let dC = [];
let colR;
let colG;
let colB;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  x = random(30, 250);
  y = random(70, 450);
  s = random(80, 150);
  b = random(150, 180);
  R = 240;
  G = 220;
  BR = random(200, 500);
  br = 0;
  YY = y + 100;
  XX = 0.5 * x + 150;
  spdx = random(-3, 3);
  spdy = random(-3, 3);
  colR = random(0, 220);
  colG = random(0, 220);
  colB = random(0, 220);

  for (let i1 = 0; i1 < 200; i1++) {
    dA[i1] = new DustA(random(height), random(width));
  }
  for (let i2 = 0; i2 < 100; i2++) {
    dB[i2] = new DustB(random(height), random(width));
  }
  for (let i3 = 0; i3 < 50; i3++) {
    dC[i3] = new DustC(random(height), random(width));
  }
  background(0);
}

function draw() {
  fill(240, 216, 20, BR);
  rect(0, 0, 600);
  x1 = random(30, 250);
  y1 = random(70, 450);
  s1 = random(80, 150);
  b1 = random(150, 180);
  BR1 = random(200, 500);
  YY = map(mouseY, 0, 600, y, y + 300);
  XX = map(mouseX, 0, 600, x, 0.3 * x + 300);
  //dust
  for (let i1 = 0; i1 < dA.length; i1++) {
    dA[i1].move();
    dA[i1].update();
    dA[i1].display();
  }
  for (let i2 = 0; i2 < dB.length; i2++) {
    dB[i2].move();
    dB[i2].update();
    dB[i2].display();
  }
  for (let i3 = 0; i3 < dC.length; i3++) {
    dC[i3].move();
    dC[i3].display();
    dC[i3].update();
  }

  //darkness
  push();
  fill(0, 0, 30, br);
  rect(0, 0, 600);
  pop();
  push();
  fill(0);
  beginShape(TESS);
  vertex(x + s, y);
  vertex(600, YY);
  vertex(600, 0);
  vertex(0, 0);
  vertex(0, 600);
  vertex(XX, 600);
  vertex(x, y + s);
  endShape(CLOSE);
  pop();

  //wooden
  fill(50);
  rect(x, y, s);

  //window
  fill(R, G, 20);
  winX = [x + 0.1 * s, x + 0.55 * s];
  winY = [y + 0.1 * s, y + 0.55 * s];
  rect(winX[0], winY[0], 0.35 * s);
  rect(winX[1], winY[1], 0.35 * s);
  rect(winX[0], winY[1], 0.35 * s);
  rect(winX[1], winY[0], 0.35 * s);

  //指令
  if (keyIsPressed && key == "f") {
    R = 0;
    G = 0;
    b = 0;
    br = 1000;
    rect(0, 0, 600);
  } else if (keyIsPressed && key == "n") {
    fill(0);
    rect(0, 0, 600);
    x = x1;
    y = y1;
    s = s1;
    BR = BR1;
    R = 240;
    G = 220;
    b = b1;
    br = 0;
  }

  //说明
  fill(255);
  text("press F to switch the light off", 20, 20);
  text("press N to switch the light on", 20, 35);
  text("move mouse to control light", 20, 50);
  text("hold mouse to stop dust shining", 20, 65);
}

class DustA {
  constructor(startX, startY) {
    this.X = startX;
    this.Y = startY;
    this.spdx = spdx;
    this.spdy = spdy;
    this.dia = random(3, 7);
  }
  update() {
    if (this.X >= 600 || this.X <= 0) {
      this.spdx = -this.spdx;
    }
    if (this.Y >= 600 || this.Y <= 0) {
      this.spdy = -this.spdy;
    }
  }
  move() {
    this.X = this.X + this.spdx;
    this.Y = this.Y + this.spdy;
  }
  display() {
    push();
    noStroke();

    fill(random(30, 220), random(30, 220), random(30, 220));
    if (mouseIsPressed) {
      fill(colR, colG, colB);
    }
    circle(this.X, this.Y, this.dia);

    pop();
  }
}

class DustB {
  constructor(startX1, startY1) {
    this.X1 = startX1;
    this.Y1 = startY1;
    this.size = random(3, 8);
  }
  update() {
    if (this.X1 >= 600 || this.X1 <= 0) {
      this.spdX1 = -this.spdX1;
    }
    if (this.Y1 >= 600 || this.Y1 <= 0) {
      this.spdY1 = -this.spdY1;
    }
  }
  move() {
    this.X1 = this.X1 + sin(frameCount * 0.01) * 1.3;
    this.Y1 = this.Y1 + cos(frameCount * 0.01) * 1.3;
  }

  display() {
    push();
    noStroke();
    fill(random(30, 220), random(30, 220), random(30, 220));
    if (mouseIsPressed) {
      fill(colR, colG, colB);
    }
    rect(this.X1, this.Y1, this.size);
    pop();
  }
}

class DustC {
  constructor(startX2, startY2) {
    this.X2 = startX2;
    this.Y2 = startY2;
    this.spdX2 = random(-5, 5);
    this.spdY2 = random(-5, 5);
    this.Size = random(2, 5);
  }
  update() {
    if (this.X2 >= 600 || this.X2 <= 0) {
      this.spdX2 = -this.spdX2;
    }
    if (this.Y2 >= 600 || this.Y2 <= 0) {
      this.spdY2 = -this.spdY2;
    }
  }

  move() {
    this.X2 = this.X2 + this.spdX2;
    this.Y2 = this.Y2 + this.spdY2;
  }
  display() {
    push();
    noStroke();
    fill(random(30, 220), random(30, 220), random(30, 220));
    if (mouseIsPressed) {
      fill(colR, colG, colB);
    }
    triangle(
      this.X2,
      this.Y2,
      this.X2 + 2 * this.Size,
      this.Y2,
      this.X2 + this.Size,
      this.Y2 + 2 * this.Size
    );
    pop();
  }
}