let zObject = require('../zObject/index');

let obj1 = {
  a: 'a',
  b: 'b',
  c: 'c'
};

// { a: 'a', c: 'c' }
console.log(zObject.pickNeedKey(obj1, ['a', 'c']));

// { a: 'a' }
console.log(zObject.pickNeedKey(obj1, ['a', 'd']));

// { a: 'a', d: '' }
console.log(zObject.pickNeedKey(obj1, ['a', 'd'], true));