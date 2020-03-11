var hue;

function setup() { 
  createCanvas(400, 400)
  background(255) 
  
  x = random(width);
  y = random(height);
  
  randomCol = color(random(255),random(255),random(255));
  
  hue = 0;
} 

function draw() {
  square(x,y,55)
  colorMode(HSL, 360)
  fill(hue, 200, 200)
  stroke(hue, 200, 200)
}

function newSquare() {
    x = random(width);
    y = random(height);
    hue++;
  colorMode(HSL, 360)
  fill(hue, 200, 200)
  stroke(hue, 200, 200)
}

setInterval(newSquare, 250);