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

 export default function countCats(matrix) {
  return matrix.reduce((accumulator, arr) => accumulator + arr.reduce((accumulator, item) => item === '^^' ? ++accumulator : accumulator, 0), 0);
}

// console.log(countCats([
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, '^^']
//   ]));