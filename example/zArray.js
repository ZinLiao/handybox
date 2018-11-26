let handybox = require('../index');

let arr1 = [1,3,5,'',3,1];

// [1,3,5]
console.log(arr1.deduplication());
// [1,3,5,'']
console.log(arr1.deduplication(true));

let arr2 = [1];
// [1,2]
console.log(arr2.pushAndShift(2));
// [2,3]
console.log(arr2.pushAndShift(3, 2));