function Rules(maxPlayers,tableSize) {
  this.maxPlayers = maxPlayers;
  this.tableSize = tableSize;
  this.currentPlayer = 1;
}

Rules.prototype = {
  changeTurn: function() {
    if (this.currentPlayer == this.maxPlayers) {
      this.currentPlayer = 1;
    } else {
      this.currentPlayer += 1;
    }
  },
  stealAdjacents: function(indexX,indexY,table) {
    var realTableSize = this.tableSize - 1;
    if (indexX == 0 || indexX == realTableSize || indexY == 0 || indexY == realTableSize) {
      if (indexX == 0) {
        if (indexY !== 0) {
          table.setSquarePlayer(indexX + 1, indexY - 1, this.currentPlayer);
          table.setSquarePlayer(indexX, indexY - 1, this.currentPlayer);
        }
        if (indexY !== realTableSize) {
          console.log('this.tableSize', realTableSize);
          table.setSquarePlayer(indexX + 1, indexY + 1, this.currentPlayer);
          table.setSquarePlayer(indexX, indexY + 1, this.currentPlayer);
        }
        table.setSquarePlayer(indexX + 1, indexY, this.currentPlayer);
      }
      if (indexY == 0){
        if (indexX !== 0) {
          table.setSquarePlayer(indexX - 1, indexY + 1, this.currentPlayer);
          table.setSquarePlayer(indexX - 1, indexY, this.currentPlayer);
        }
        if (indexX !== realTableSize) {
          table.setSquarePlayer(indexX + 1, indexY + 1, this.currentPlayer);
          table.setSquarePlayer(indexX + 1, indexY, this.currentPlayer);
        }
        table.setSquarePlayer(indexX, indexY + 1, this.currentPlayer);
      }
      if (indexX == realTableSize){
        if (indexY !== 0) {
          table.setSquarePlayer(indexX - 1, indexY - 1, this.currentPlayer);
          table.setSquarePlayer(indexX, indexY - 1, this.currentPlayer);
        }
        if (indexY !== realTableSize) {
          table.setSquarePlayer(indexX - 1, indexY + 1, this.currentPlayer);
          table.setSquarePlayer(indexX, indexY + 1, this.currentPlayer);
        }
        table.setSquarePlayer(indexX - 1, indexY, this.currentPlayer);
      }
      if (indexY == realTableSize){
        if (indexX !== 0) {
          table.setSquarePlayer(indexX - 1, indexY - 1, this.currentPlayer);
          table.setSquarePlayer(indexX - 1, indexY, this.currentPlayer);
        }
        if (indexX !== realTableSize) {
          table.setSquarePlayer(indexX + 1, indexY - 1, this.currentPlayer);
          table.setSquarePlayer(indexX + 1, indexY, this.currentPlayer);
        }
        table.setSquarePlayer(indexX, indexY - 1, this.currentPlayer);
      }
    }
    else {
        table.setSquarePlayer(indexX,indexY + 1,this.currentPlayer);
        table.setSquarePlayer(indexX,indexY - 1,this.currentPlayer);
        table.setSquarePlayer(indexX,indexY,this.currentPlayer);
        table.setSquarePlayer(indexX + 1,indexY + 1,this.currentPlayer);
        table.setSquarePlayer(indexX + 1,indexY - 1,this.currentPlayer);
        table.setSquarePlayer(indexX + 1,indexY,this.currentPlayer);
        table.setSquarePlayer(indexX - 1,indexY + 1,this.currentPlayer);
        table.setSquarePlayer(indexX - 1,indexY - 1,this.currentPlayer);
        table.setSquarePlayer(indexX - 1,indexY,this.currentPlayer);
    }
  }
}
