const {getMultiplcation, getPairEqualTo, getTripleEqualToTarget} = require('./adventOfCode.js'); 
const fs = require('fs')



try {
  var data = fs.readFileSync('data/input', 'utf8')
  } catch (err) {
}
let dataAsArrayText = data.split(/\r?\n/).map(x => parseInt(x));


let finalPair= getPairEqualTo(dataAsArrayText, 2020);

let finaltriple= getTripleEqualToTarget(dataAsArrayText, 2020);
console.log(finaltriple);
console.log(getMultiplcation(finaltriple));