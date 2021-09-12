/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

export default function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        arr.splice(i, 2)
        break;
      case '--discard-prev':
        arr.splice(i - 1, 2)
        break;
      case '--double-next':
        arr[i] = arr[i + 1];
        break;
      case '--double-prev':
        arr[i] = arr[i - 1];
        break;
    }
  }
  return arr;
}

// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));