/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

export default function encodeLine(str) {
  let result = '';
  let sum = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) sum++;
    else {
      if (sum > 1) result += sum + str[i];
      else result += str[i];
      sum = 1;
    }
  }
  return result
}
