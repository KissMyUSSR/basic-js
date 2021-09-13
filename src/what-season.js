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

// TODO Fake Date type verification
// TODO Fake Date type verification
// TODO Fake Date type verification

export default function getSeason(date) {
  if ( !date ) return 'Unable to determine the time of year!';

  if (Object.keys(date).length || !(date instanceof Date)) throw new Error('Invalid date!');

  if (date.getMonth() >= 0 && date.getMonth() < 2 || date.getMonth() === 11) return 'winter';
  if (date.getMonth() >= 2 && date.getMonth() < 5) return 'spring';
  if (date.getMonth() >= 5 && date.getMonth() < 8) return 'summer';
  if (date.getMonth() >= 8 && date.getMonth() < 11) return 'fall';
}

// let date1 = new Date(2025, 1, 22, 23, 45, 11, 500); // winter
// console.log(getSeason(date1));
// let date2 = new Date(2134, 2, 17, 11, 27, 4, 321);  // spring
// console.log(getSeason(date2));
// let date3 = new Date(2012, 5, 13, 23, 45, 11, 500);  // summer
// console.log(getSeason(date3));
// let date4 = new Date(1994, 8, 26, 3, 0, 11, 500);  // autumn|fall
// console.log(getSeason(date4));