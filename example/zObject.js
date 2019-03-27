let zObject = require('../zObject/index');

let obj1 = {
  a: 1,
  b: 2,
  c: 3
};

// { a: 'a', c: 'c' }
console.log(zObject.pickNeedKey(obj1, ['a', 'c']));

// { a: 'a' }
console.log(zObject.pickNeedKey(obj1, ['a', 'd']));

// { a: 'a', d: '' }
console.log(zObject.pickNeedKey(obj1, ['a', 'd'], true));

// a=1&b=2&c=3
console.log(zObject.serialization(obj1));