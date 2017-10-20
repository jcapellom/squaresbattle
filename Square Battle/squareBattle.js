var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var matrix = [];

for (var y = 0; y < 10; y++) {
  var row = [];
  for (var x = 0; x < 10; x++) {
    row.push(0);
  }
  matrix.push(row);
}

console.log('matrix', matrix);

var table = new Table(matrix, 50, 1, 2);

table.setPlayersColors();

table.draw(ctx);
