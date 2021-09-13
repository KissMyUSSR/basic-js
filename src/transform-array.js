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

export default function transform(arr2) {
  if ( !Array.isArray(arr2) ) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let arr = arr2.slice();

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i != arr.length - 1) arr[i + 1] = 'discarded';
        break;
      case '--double-next':
        if (i != arr.length - 1) arr[i] = arr[i + 1];
        break;
      case '--discard-prev':
        if (i != 0) arr[i - 1] = 'discarded';
        break;
      case '--double-prev':
        if (i != 0 && arr[i - 1] != 'discarded') arr[i] = arr[i - 1];
        break;
    }
  }

  return arr.filter(item => item !== 'discarded' && 
                            item !== '--double-next' &&
                            item !== '--discard-next' && 
                            item !== '--discard-prev' && 
                            item !== '--double-prev');
}