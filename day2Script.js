const {checkValidPassword} = require('./lib/day2.js'); 
const fs = require('fs');

try {
  var data = fs.readFileSync('data/input_password', 'utf8')
  } catch (err) {
}
let dataAsArrayText = data.split(/\r?\n/);
let answers = [];
dataAsArrayText.pop();
console.log(dataAsArrayText.length);
for (const password of dataAsArrayText) {
  if (checkValidPassword(password)) {
    answers.push(password);
  }
}

console.log(answers.length);