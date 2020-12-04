const checkValidPassword = (password) => {

  const passwordParamaters = password.split(' ');
  const letterValid = passwordParamaters[1].substring(0,1);
  const tupleNumber = passwordParamaters[0].split('-');
  const lowestCount = parseInt(tupleNumber[0]);
  const highestCount = parseInt(tupleNumber[1]);
  
  let countLetter = 0;
  for (const letter of passwordParamaters[2].split('')) {
    if (letter === letterValid) {
      countLetter += 1;
    };
  }

  if(countLetter >= lowestCount && countLetter <= highestCount) {
    return true
  }

  return false
}

exports.checkValidPassword = checkValidPassword;