import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

export default class DepthCalculator {
  constructor() {
  }
  calculateDepth(arr, depth = 1) {
    let filteredArr = [];
    let temp = [];
    temp = arr.filter((item) => Array.isArray(item));
    
    console.log(temp);

    if (temp.length) {
      temp.forEach(item => {
        filteredArr.push(...item);
      });;
      return this.calculateDepth(filteredArr, depth + 1);
    }
    else return depth;
  }
}

// let calc = new DepthCalculator;
// let arr = [[]];
// console.log(calc.calculateDepth(arr));