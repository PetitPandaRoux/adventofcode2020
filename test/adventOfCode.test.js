const {getMultiplcation, getPairEqualTo} = require('../adventOfCode.js'); 

describe('First Day Challenge', () => {
  test('The mutiplication of 2 and 3 shoud be equal to 5', () => {
    let tuple = [2,3];
    let result = getMultiplcation(tuple);
    expect(result).toEqual(6);
  });

  test('The sum of two numbers should be 2020 ', () => {
    array = [2010,10,5];
    let result = getPairEqualTo(array,2020);
    console.log(result);
    expect(result).toEqual([2010,10]);
  });
} )