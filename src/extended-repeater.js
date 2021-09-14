/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);

  for (let item of ['separator', 'addition', 'additionSeparator']) {
    if (!Object.keys(options).includes(item)) continue;
    // console.log(String(options[item]));
    options[item] = String(options[item]);
    // console.log(String(options[item]));
    // console.log();
  }

  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!Object.keys(options).includes('separator')) options.separator = '+';
  if (!options.addition) options.addition = '';
  if (!Object.keys(options).includes('additionRepeatTimes')) options.additionRepeatTimes = 1;
  if (!Object.keys(options).includes('additionSeparator')) options.additionSeparator = '|';

  let addition = Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  let result = Array(options.repeatTimes).fill(str).join(addition + options.separator) + addition;

  return result;
}

// console.log(repeater('la', { repeatTimes: 3}));

// console.log(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }));

// console.log(repeater(true, { repeatTimes: 3, separator: '+++', addition: false }));