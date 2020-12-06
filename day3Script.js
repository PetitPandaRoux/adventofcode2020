const {Tobbogan} = require('./lib/day3.js'); 
const fs = require('fs');

try {
  var grid = fs.readFileSync('data/input_day3', 'utf8')
  } catch (err) {
}
let slope = {right:3, down:1};
let numberOfThreeEncoutered = 0 ;
let toboggan = new Tobbogan(grid, slope);
console.log( toboggan.grid.length);

while(toboggan.currentPositionX < toboggan.grid.length) {
  console.log(toboggan.currentPositionY);
  if (toboggan.checkIfTrees()){
    numberOfThreeEncoutered += 1;
    //console.log('y:' + toboggan.currentPositionY + ' x:' + toboggan.currentPositionX);
  }
  toboggan.move();


}

console.log("total tree:" + numberOfThreeEncoutered);