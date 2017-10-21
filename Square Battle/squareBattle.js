var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rules = new Rules(2,5)


var matrix = [];

for (var y = 0; y < rules.tableSize; y++) {
  var row = [];
  for (var x = 0; x < rules.tableSize; x++) {
    row.push(0);
  }
  matrix.push(row);
}

console.log('matrix', matrix);

var table = new Table(matrix, 500/rules.tableSize, 1, rules.maxPlayers);

table.setPlayersColors();

table.draw(ctx);

document.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    console.log('x: ' + xPosition + ' y: ' + yPosition);
    console.log(myCanvas.offsetTop + ' ' + myCanvas.offsetLeft);
    console.log(document.getElementById('myCanvas').offsetTop);
    var indexX = Math.floor((e.clientX-9)/(500/rules.tableSize));
    var indexY = Math.floor((e.clientY-9)/(500/rules.tableSize));
    console.log(indexX, indexY);
    if (indexX < rules.tableSize && indexX >= 0 && indexY >= 0 && indexY < rules.tableSize) {
      console.log(matrix[indexY][indexX]);
      table.setSquarePlayer(indexX, indexY, rules.currentPlayer, true);
      rules.stealAdjacents(indexX,indexY,table);
      table.draw(ctx);
      rules.changeTurn();
    }
}
