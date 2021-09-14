/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

export default function getSeason(date) {
  if ( !date ) return 'Unable to determine the time of year!';

  if (Object.keys(Object.getOwnPropertyDescriptors(date)).length || !(date instanceof Date)) throw new Error('Invalid date!'); // Без getOwnPropertyDescriptors, если enumerable: false, Object.keys не сработает

  if (date.getMonth() >= 0 && date.getMonth() < 2 || date.getMonth() === 11) return 'winter';
  if (date.getMonth() >= 2 && date.getMonth() < 5) return 'spring';
  if (date.getMonth() >= 5 && date.getMonth() < 8) return 'summer';
  if (date.getMonth() >= 8 && date.getMonth() < 11) return 'fall';
}

// console.log(getSeason(date1));
// let date2 = new Date(2134, 2, 17, 11, 27, 4, 321);  // spring
// console.log(getSeason(date2));
// let date3 = new Date(2012, 5, 13, 23, 45, 11, 500);  // summer
// console.log(getSeason(date3));
// let date4 = new Date(1994, 8, 26, 3, 0, 11, 500);  // autumn|fall
// console.log(getSeason(date4));

// let date1 = new Date(2025, 1, 22, 23, 45, 11, 500); // winter
// console.log(Object.getOwnPropertyDescriptors(date1));

// let deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));
// Object.defineProperty(deeperFakeDate, 'getSeconds', {
//   enumerable: false
// });

// console.log({}.toString.call(deeperFakeDate));
// console.log(Object.keys(deeperFakeDate));