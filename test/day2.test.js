const {checkValidPassword} = require('../lib/day2.js'); 

describe('Second Day Challenge', () => {
  test('The entry 1-3: abcde should return true', () => {
    let password = '1-3 a: abcde';
    let result = checkValidPassword(password);
    expect(result).toEqual(true);
  });

  test('The password 1-3 b: cdefg should return false', () => {
    let falsePassword = '1-3 b: cdefg';
    let result = checkValidPassword(falsePassword);
    expect(result).toEqual(false);
  });

  test('The password 13-14 q: qrsxtpgpnhcrkq should return false', () => {
    let falsePassword = '13-14 q: qrsxtpgpnhcrkq';
    let result = checkValidPassword(falsePassword);
    expect(result).toEqual(false);
  });

})