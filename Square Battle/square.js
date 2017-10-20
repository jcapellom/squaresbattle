function Square (indexX, indexY, color, sideSize, spacing) {
  this.x = indexX * sideSize;
  this.y = indexY * sideSize;
  this.color = color;
  this.sideSize = sideSize;
  this.spacing = spacing;
}

Square.prototype = {
  draw: function(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x + this.spacing, this.y + this.spacing, this.sideSize - 2 * this.spacing, this.sideSize - 2 * this.spacing);
  }
}
