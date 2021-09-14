/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(doms) {
  let result = {};
  let r;
    
  for (let dom of doms) {
    r = '';
    dom = dom.split('.').reverse();
    for (let i = 0; i < dom.length; i++) {
      r += `.${dom[i]}`;
      result[r] = result[r] ? result[r] + 1 : 1;
    }
  }

  return result;
}
// console.log(getDNSStats(['epam.com']));