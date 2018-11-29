# Who am I ?

  I am an ECMAScript toolbox like handybox.

# What type of function I have ?

  Arrays, Number, String and Time methods that are not Native

# How to own me ?

1、Download from [npm](https://www.npmjs.com/package/@zinliao/handybox)
> npm install -s @zinliao/handybox

2、Use in your code
> let handybox = require('@zinliao/handybox');

3、Happy to use all APIs

# Do I have documentation ?

Online: [Github - handybox](https://github.com/ZinLiao/handybox)

* [zArray](#zArray)
* [zNumber](#zNumber)
* [zString](#zString)
* [zTime](#zTime)

## zArray

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| deduplication | arr | keepEmpty(false) | √ |
| pushAndShift | item | max(0)| √ |
| max | - | - | × |
| min | - | - | × |


* deduplication

```
let handybox = require('../index');

let a = [1,3,5,'',3,1];

// [1,3,5]
a.deduplication();
// [1,3,5,'']
a.deduplication(true);
```

* pushAndShift

```
let handybox = require('../index');

let a = [1];

// [1,2]
a.pushAndShift(2);
// [2,3]
a.pushAndShift(3, 2);
```

* max & min

```
let handybox = require('../index);

let a = [5,7,3,9,1,11,0];

// 11
a.max();
// 0
a.min();
```

## zNumber

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| currency | - | - | × | 

* currency

```
let handybox = require('../index);

let _int1 = 123456,
    _int2 = 123456.789,
    _int3 = -12345,
    _int4 = -12345.789;

// 123,456
_int1.currency();
// 123,456.789
_int2.currency();
// -123,456
_int3.currency();
// -123,456.789
_int4.currency();
```

## zString

| API Name | Default Params | Optional Params(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| upperFirst | - | - | × |

* upperFirst

```
let handybox = require('../index');

let str1 = 'hello world';

// Hello world
str1.upperFirst();
```

## zTime

| API Name | Default Params | Optional Params(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| getMyTime | - | format(null)<br>timestamp(null)<br>area(EN) | × |

### format 

| Input | Output | 
| ----- | ----- | 
| YYYY&#124;yyyy&#124;year&#124;年 | 2018
| MM&#124;month&#124;月 | 12 |
| DD&#124;date&#124;日 | 25 |
| HH&#124;hour&#124;时 | 09 |
| mm&#124;minute&#124;分 | 10 |
| ss&#124;second&#124;秒 | 50 |
| ms&#124;millisecond&#124;毫秒 | 247 |
| day | EN: Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday <br> CN: 日, 一, 二, 三, 四, 五, 六 |


```
let zTime = require('../index')['zTime'];

let time1 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', null, 'CN');

// 2018-11-26 21:56:46 星期一
time1;

let time2 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', 1514736000000, 'CN');

// 2018-01-01 00:00:00 星期一
time2;
```
