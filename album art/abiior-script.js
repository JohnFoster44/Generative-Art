var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log();
// h = 500, w= 500

// teal square
ctx.beginPath();
ctx.fillStyle = "lightskyblue";
ctx.fillRect(200,80,10,10);
ctx.stroke();

// black square
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(140,200,10,10);
ctx.stroke();

// pink square
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.fillRect(150,200,10,10);
ctx.stroke();

// red square
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(350,200,10,10);
ctx.stroke();

// green square
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(200,300,10,10);
ctx.stroke();

// yellow square
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(200,400,10,10);
ctx.stroke();

// purp square
ctx.beginPath();
ctx.fillStyle = "purple";
ctx.fillRect(350,400,10,10);
ctx.stroke();

// (mfc)
ctx.font = '10px times'
ctx.fillStyle = 'black'
ctx.fillText('(MFC)', 50, 565)

ctx.save();

ctx.rotate(90 * Math.PI / 180);
// the 1975
ctx.font = '11px arial'
ctx.fillStyle = 'black'
ctx.fillText('The 1975', 43, -560);

// album name
ctx.font = '11px arial'
ctx.fillStyle = 'black'
ctx.fillText('A BRIEF ENQUIRY INTO ONLINE RELATIONSHIPS', 300, -560);

// tracks
ctx.font = '6px times'
ctx.fillStyle = 'black'
ctx.fillText('(1) The 1975 (2) GIVE YOURSELF A TRY (3) TOOTIMETOOTIMETOOTIME', 43, -540);
// tracks 2
ctx.font = '6px times'
ctx.fillStyle = 'black'
ctx.fillText('(4) HOW TO DRAW / PETRICHOR (5) LOVE IT IF WE MADE IT (6) BE MY MISTAKE', 43, -533);
// tracks 3
ctx.font = '6px times'
ctx.fillStyle = 'black'
ctx.fillText('(7) SINCERITY ID SCARY (8) I LIKE AMERICA AND AMERICA LIKES ME', 43, -526);
// tracks 4
ctx.font = '6px times'
ctx.fillStyle = 'black'
ctx.fillText('(9) THE MAN WHO MARRIED A ROBOT / LOVE THEME (10) INSIDE YOUR MIND ', 43, -519);

ctx.font = '6px times'
ctx.fillStyle = 'black'
ctx.fillText('(11) ITS NOT LIVING (IF ITS NOT WITH YOU) (12) SURROUNDED BY HEADS AND BODIES ', 43, -512);

ctx.font = '6px times'
ctx.fillStyle = 'black'
ctx.fillText('(13) MINE (14) I COULDNT BE MORE IN LOVE (15) I ALWAYS WANNA DIE (SOMETIMES) ', 43, -505);