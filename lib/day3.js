class Tobbogan {
  /**
   * 
   * @param {String} data 
   * @param {Object} slope with x and y property  
   */
  constructor(data, slope) {
    this.grid = data.split(/\r?\n/);
    this.right = slope.right ;
    this.down = slope.down ; 
    this.currentPositionX = 0 ;
    this.currentPositionY = 0 ;
  };


  /**
   * We move using slope and moving position
   */
  move() {
    this.currentPositionX += this.down;
    this.currentPositionY += this.right;
    if (this.currentPositionY >= this.grid[0].length) {
      this.currentPositionY = (this.currentPositionY - this.grid[0].length);
    }
  }

  getGridPosition(right, down){
    return this.grid[down][right];
  }

  checkIfTrees(){
    return this.getGridPosition(this.currentPositionY, this.currentPositionX) == '#';
  }

}

exports.Tobbogan = Tobbogan;