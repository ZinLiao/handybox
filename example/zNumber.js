let handybox = require('../zNumber/index.js')

let a = -1234567.8901;
let b = 123456;
let start = 10;
let end = -5;

console.log(a.currency());
console.log(b.currency(true));
console.log(start.midian(end, 0));
console.log(start.midian('-5'));