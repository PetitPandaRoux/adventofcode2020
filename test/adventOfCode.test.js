const {getMultiplcation, getPairEqualTo, getTripleEqualToTarget} = require('../adventOfCode.js'); 

describe('First Day Challenge', () => {
  test('The mutiplication of 2 and 3 shoud be equal to 5', () => {
    let tuple = [2,3,4];
    let result = getMultiplcation(tuple);
    expect(result).toEqual(24);
  });

  test('The sum of two numbers should be 2020 ', () => {
    let array = [2010,10,5];
    let result = getPairEqualTo(array,2020);
    expect(result).toEqual([2010,10]);
  });

  test('The sum of tree numbers should be 2020', () => {
    let array = [2009,20, 7,25, 4];
    let result = getTripleEqualToTarget(array,2020);
    console.log(result);
    expect(result).toEqual([2009,7,4]);
  })
} )