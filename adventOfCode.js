
/**
 * 
 * @param {Array} tuple of 2 element 
 */
const getMultiplcation = (tuple) => {
  return tuple[0] * tuple[1];
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

exports.getMultiplcation = getMultiplcation;
exports.getPairEqualTo = getPairEqualTo;