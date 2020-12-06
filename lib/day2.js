/**
 * 
 * @param {String} letterValid 
 * @param {Array} password as array 
 * @param {Number} lowerLimit 
 * @param {Number} highestLimit 
 */
const countRightAmountOfLetter = (letterValid, password, lowerLimit, highestLimit) => {
  let countLetter = 0;
  let result = false;
  for (const letter of password) {
    if (letter === letterValid) {
      countLetter += 1;
    };
  }

  if(countLetter >= lowerLimit && countLetter <= highestLimit) {
    result = true
  }
  return result
}

const checkLetterPosition = (letterValid, password, firstPosition, secondPosition) => {
  let countLetter = 0;
  let result = false;
  firstPosition -= 1;
  secondPosition -= 1; 

  if (password[firstPosition] == letterValid) {
    countLetter += 1;
  }

  if(password[secondPosition] == letterValid) {
    countLetter += 1;
  }

  if (countLetter === 1 ){
    result = true;
  }

  return result;

}

/**
 * The function returns true if password is valid
 * @param {String} password 
 */
const checkValidPassword = (password) => {

  const passwordParamaters = password.split(' ');
  const letterValid = passwordParamaters[1].substring(0,1);
  const tupleNumber = passwordParamaters[0].split('-');
  const lowestCount = parseInt(tupleNumber[0]);
  const highestCount = parseInt(tupleNumber[1]);
  const passwordAsArray = passwordParamaters[2].split('');
  
  let result = checkLetterPosition(letterValid, passwordAsArray, lowestCount, highestCount );


  return result
}

exports.checkValidPassword = checkValidPassword;