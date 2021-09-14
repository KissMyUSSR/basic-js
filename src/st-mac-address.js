/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

export default function isMAC48Address(n) {
  return n.split('-').reduce( (result, item) => item.length == 2 && 
  '0123456789ABCDEF'.split('').includes(item[0]) && 
  '0123456789ABCDEF'.split('').includes(item[1]) && 
  result ? true : false, true);
}
