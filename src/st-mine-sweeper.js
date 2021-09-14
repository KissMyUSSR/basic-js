/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

export default function minesweeper (matrix) {
  let result = [];
  for (let i = 0, res = []; i < matrix.length; i++, res = []) {
    for (let j = 0, r = 0; j < matrix[i].length; j++, r = 0) {
      for (let t = -1; t != 3; t += 2) {
        try { if ( matrix[i + t][j + t] ) r++; } 
        catch {}
        try { if ( matrix[i - t][j + t] ) r++; } 
        catch {}
        try { if ( matrix[i + t][j] ) r++; } 
        catch {}
        try { if ( matrix[i][j + t] ) r++; } 
        catch {}
      }
      res.push(r);
    }
    result.push(res);
  }
  return result;
}
