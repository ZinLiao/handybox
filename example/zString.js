let handybox = require('../index');

let str1 = 'hello world';

// Hello world
console.log(str1.upperFirst());

let str2 = 'true';

// boolean
console.log(typeof str2.strBoolToBool());
// string
console.log(typeof '1'.strBoolToBool());

let str3 = '1,2,3-5';

// [ '1', '2', '3', '4', '5' ]
console.log(str3.strNumRangeToArray())