
/**
 * 
 * @param {Array} list of 2 element 
 */
const getMultiplcation = (list) => {
  let total = 1;
  for (const element of list) {
    total = total * element ;
  }
  return total;
}

/**
 * 
 * @param {Array} array a list of positive integer
 * @param {Number} target to be found 
 */
const getPairEqualTo = (array, target) => {
  let arrayUnderTarget = array.filter( x => x < target);
  let pair = [];
  for(let i = 0 ; i < arrayUnderTarget.length ; i++ ) {
    for (let y = i + 1 ; y < arrayUnderTarget.length ; y++) {
      if (arrayUnderTarget[y] + arrayUnderTarget[i]  === target ) {
        pair.push( arrayUnderTarget[i]);
        pair.push(arrayUnderTarget[y]);

        break
      }
    }
  }
  return pair ;
}

/**
 * 
 * @param {Array} array a list of positive integer
 * @param {Number} target to be found 
 */
const getTripleEqualToTarget = (array, target) => {
  let arrayUnderTarget = array.filter( x => x < target);
  let triple = [];
  let exit = false;
  for(let i = 0 ; i < arrayUnderTarget.length ; i++ ) {
    for (let y = i + 1 ; y < arrayUnderTarget.length ; y++) {
      if (arrayUnderTarget[y] + arrayUnderTarget[i]  > target ) {
        continue
      }
      for(let z = i + 2 ; z < arrayUnderTarget.length ; z++) {
        if (arrayUnderTarget[y] + arrayUnderTarget[i] + arrayUnderTarget[z] === target ) {
          triple.push( arrayUnderTarget[i]);
          triple.push(arrayUnderTarget[y]);
          triple.push(arrayUnderTarget[z]);
          exit = true;
          break;
        }
      }
      if (exit === true) {
        break;
      }
    }
  }
  return triple ;
}


exports.getMultiplcation = getMultiplcation;
exports.getPairEqualTo = getPairEqualTo;
exports.getTripleEqualToTarget = getTripleEqualToTarget;