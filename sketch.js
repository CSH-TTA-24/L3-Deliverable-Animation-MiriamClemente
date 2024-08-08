let r;
let g;
let b;
let speed = 0.1;

let yPos = 25;
let xPos;


function setup() {
  createCanvas(500, 500);
  background(0);

xPos = random(0, 500);
r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

}

function draw(){
  background(0, 20);

  fill(r, g, b);
  ellipse(xPos, yPos, 50, 50);
yPos += 2;
  speed += 0.2;

  if (yPos > 525){
    yPos = -25;
  }
}
function mouseClicked(){
  background(0);
  xPos = random(0,500)
  yPos = 25;
  speed = 0.17;

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}
