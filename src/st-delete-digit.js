/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n);
  let result = 0;
  for (let i = 0, curr = 0; i < n.length; i++) {
    curr = n.slice(0, i) + n.slice(i + 1, n.length)
    if (curr > result) result = curr;
  }
  return Number(result);
}
