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

let arr3 = [5,10,23,3,28,13,29,32,17,12];
// 32
console.log(arr3.max())
// 3
console.log(arr3.min())

let arr4 = [1, 2, 3],
    arr5 = [1, 2, 3];

// [1,3]
console.log(arr4.removeSpecItem(1));
// [1,2]
console.log(arr5.removeSpecItem(null, 3));