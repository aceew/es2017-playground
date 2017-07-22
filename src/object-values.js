/**
 * Works the same way array_values does in PHP.
 * @see https://github.com/tc39/proposal-object-values-entries
 */

const obj = {
  firstItem: 'simpleString',
  secondItem: ['an ', 'array ', 'this ', 'time.'],
  thirdItem: { object: 'for the third' },
};

console.log(Object.values(obj));
// [
//   'simpleString',
//   [ 'an ', 'array ', 'this ', 'time.' ],
//   { object: 'for the third' }
// ]


console.log(Object.values([]));
// Calling with an array returns an empty array ([]).

console.log(Object.values('text'));
// Calling with a string
// [
//   't'
//   'e'
//   's'
//   't'
// ]
