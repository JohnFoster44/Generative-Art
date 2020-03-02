var canvas = document.getElementById("canvas-id");
var context = canvas.getContext("2d");
console.log(context);

context.strokeStyle = "black";
context.fillStyle = "black";

var height = canvas.height;
var width = canvas.width;

context.lineWidth = 5;

// randomised colors

function getRandomColor() {
  var letters  = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var count = 15;

// randomised circles
for (var i = 1; i < count +1 ; i++) {
  for (var n = 1; n < count + 1; n++){
  context.beginPath();
  context.fillStyle = getRandomColor();
  context.arc(i * Math.floor(Math.random() * 100), n * Math.floor(Math.random() * 100), 20, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  }
};

var line = 10;

for (var i = 1; i < line +1 ; i++) {
  for (var n = 1; n < line + 1; n++){
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = getRandomColor();
    context.moveTo( i * Math.floor(Math.random() * 100), n * Math.floor(Math.random() * 100));
    context.lineTo( i * Math.floor(Math.random() * 100), n * Math.floor(Math.random() * 100));
    context.stroke();

  }
}