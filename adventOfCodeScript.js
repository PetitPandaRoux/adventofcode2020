const {getMultiplcation, getPairEqualTo} = require('./adventOfCode.js'); 
const fs = require('fs')



try {
  var data = fs.readFileSync('data/input', 'utf8')
  } catch (err) {
}
let dataAsArrayText = data.split(/\r?\n/).map(x => parseInt(x));
//let dataAsArray = dataAsArrayText.map(x => parseInt(x))

let finalPair= getPairEqualTo(dataAsArrayText, 2020);
console.log(getMultiplcation(finalPair));