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
  if (!date) return 'Unable to determine the time of year!';

  // TODO Check if varification works!
  if ( date.constructor !== Date) return 'Fake Date';
  // TODO Check if varification works!

  if (date.getMonth() >= 1 && date.getMonth() < 3 || date.getMonth === 12) return 'winter';
  if (date.getMonth() >= 3 && date.getMonth() < 6) return 'spring';
  if (date.getMonth() >= 6 && date.getMonth() < 9) return 'summer';
  if (date.getMonth() >= 9 && date.getMonth() < 12) return 'autumn';
}

// let date = new Date();
// console.log(date.constructor.toString());

// const springDate = new Date(2020, 2, 31);
// console.log(getSeason(springDate));