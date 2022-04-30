const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // remove line with error and write your code here
  let number = 0;
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    while (matrix[i].includes('^^', count)) {
      count = matrix[i].indexOf('^^', count) + 1;
      number++; 
    }
  }
  return number;
}

module.exports = {
  countCats
};
