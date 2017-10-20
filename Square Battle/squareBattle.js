var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var maxPlayers = 2;

var matrix = [];

for (var y = 0; y < 10; y++) {
  var row = [];
  for (var x = 0; x < 10; x++) {
    row.push(0);
  }
  matrix.push(row);
}

console.log('matrix', matrix);

var table = new Table(matrix, 50, 1, maxPlayers);

table.setPlayersColors();

table.draw(ctx);

document.addEventListener("click", getClickPosition, false);

var currentPlayer = 1

function changeTurn(currentTurn, maxPlayers) {
  if (currentTurn == maxPlayers) {
    return 1;
  } else {
    return currentTurn + 1;
  }
}

function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    console.log('x: ' + xPosition + ' y: ' + yPosition);
    console.log(myCanvas.offsetTop + ' ' + myCanvas.offsetLeft);
    console.log(document.getElementById('myCanvas').offsetTop);
    var indexX = Math.floor((e.clientX-9)/50);
    var indexY = Math.floor((e.clientY-9)/50);
    console.log(indexX, indexY);
    if (indexX < 10 && indexX >= 0 && indexY >= 0 && indexY < 10) {
      console.log(matrix[indexY][indexX]);
      table.setSquarePlayer(indexX, indexY, currentPlayer);
      table.draw(ctx);
      currentPlayer = changeTurn(currentPlayer, maxPlayers);
    }
}
