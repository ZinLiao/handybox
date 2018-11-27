let zTime = require('../index')['zTime'];

let time1 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', null, 'CN');

console.log(time1);

let time2 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', 1514736000000, 'CN');

console.log(time2);