/**
 * This one is fairly straight forward the following two methods have been added:
 * String.protoype.padStart and String.protoype.padEnd.
 * @see https://github.com/tc39/proposal-string-pad-start-end
 */

console.log(
  '1'.padStart(3, '0'), // 001
  '1.0'.padEnd(4, '0'), // 1.00
);
