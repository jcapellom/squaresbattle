function Table(matrix, squareSideSize, spacing, numPlayers) {
  this.matrix = matrix;
  this.squareSideSize = squareSideSize;
  this.spacing = spacing;
  this.numPlayers = numPlayers;
  this.playersColors = [];
}

Table.prototype = {
  draw: function (pablo) {
    console.log('playersColors', this.playersColors);
    var that = this;
    this.matrix.forEach(function(row, rowIndex){
      row.forEach(function(col, colIndex){
        var square = new Square(colIndex, rowIndex, that.playersColors[col], that.squareSideSize, that.spacing)
        square.draw(pablo);
      });
    });
  },
  setPlayersColors: function () {
    this.playersColors.push('#888');
    for (var i = 1; i <= this.numPlayers; i++) {
      this.playersColors.push(this.getRandomColor());
    }
  },
  getRandomColor: function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  setSquarePlayer: function(x,y,player) {
    this.matrix[y][x] = player;
  }
}
