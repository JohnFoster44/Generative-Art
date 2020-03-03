let img;
let smallPoint, largePoint;


function preload() {
  img = loadImage('cboyNi.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  smallPoint = 10;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();

  textSize(250);
  textStyle(BOLD);
  fill(230, 255);
  text("hello", windowWidth / 2, windowHeight / 2);
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);

}