let Eye;
let Fire1;
let Fire2;
let Fire3;

function setup() {
    let cnv = createCanvas(600,600);
    cnv.parent("canvasContainer")
}

function draw() {
    // background(30, 30, 60);
    // for (let i = 0; i < 20; i++) {
    //     for (let j = 0; j < 20; j++) {
    //         push();
    //         fill(255);
    //         noStroke();
    //         circle(i * 100, j * 100, 10);
    //         pop();
    //     }
    // }
    drawCreature(width / 2, height / 2);
}

function drawCreature(x, y) {
    push();
    translate(x, y);
    strokeWeight(5);
    drawLeftArm();
    drawRightArm();
    drawBody();
    drawFire();
    drawHead();
    drawEyes();
    Eye = 5;
    if (keyIsPressed && key == "c") {
        console.log("Eyes close");
        Eye = 0;
        strokeWeight(5);
        line(-32, -16, -12, -16);
        line(32, -16, 12, -16);
    }
    line(-15, 17, 15, 17);

    pop();
}
function drawHead() {
    fill(180);
    push();
    noStroke();
    triangle(0, -100, -15, -80, 0, -80);
    fill(255);
    triangle(0, -100, 15, -80, 0, -80);
    pop();
    noFill();
    triangle(0, -100, -15, -80, 15, -80);
    fill(180);
    arc(0, -20, 120, 120, HALF_PI, PI + HALF_PI);
    fill(255);
    arc(0, -20, 120, 120, PI + HALF_PI, HALF_PI);
}
function drawEyes() {
    noFill();
    stroke(0);
    strokeWeight(Eye);
    let x1 = map(mouseX, -200, 200, 15, 22);
    let x2 = map(mouseX, -200, 200, -22, -15);
    let y1 = map(mouseY, -200, 200, -25, -12);
    let y2 = map(mouseY, -200, 200, -25, -12);
    circle(x1, y1, 25);
    line(x2 - 20, y2 - 10, x2, y2 + 10);
    line(x2 - 20, y2 + 10, x2, y2 - 10);
}
function drawBody() {
    fill(190);
    push();
    noStroke();
    rect(-35, 10, 35, 70);
    fill(255);
    rect(0, 10, 35, 70);
    pop();
    noFill();
    rect(-35, 10, 70);
    fill(190);
    rect(-30, 80, 30);
    ellipse(-17, 115, 30, 20);
    fill(255);
    rect(0, 80, 30);
    ellipse(17, 115, 30, 20);
}
function drawLeftArm() {
    push();
    rotate(radians(sin(frameCount / 10) * 20));
    fill(190);
    ellipse(-25, 50, 40, 70);
    pop();
}
function drawRightArm() {
    push();
    rotate(radians(cos(frameCount / 10) * 20));
    fill(255);
    ellipse(25, 45, 40, 70);
    pop();
}
function drawFire() {
    let Fire1 = random(50, 250);
    let Fire2 = random(50, 250);
    let Fire3 = random(50, 250);
    push();
    fill(Fire1, Fire2, Fire3);
    noStroke();
    arc(-17, 140, 25, 25, PI - QUARTER_PI / 2, QUARTER_PI / 2, OPEN);
    arc(17, 140, 25, 25, PI - QUARTER_PI / 2, QUARTER_PI / 2, OPEN);
    triangle(-4, 140, -30, 140, -18, 170);
    triangle(4, 140, 30, 140, 18, 170);
    pop();
}
