# Who am I ?

  I am an ECMAScript toolbox like handybox.

# What type of function I have ?

  Object, Arrays, Number, String and Time methods that are not Native

# How to own me ?

1、Download from [npm](https://www.npmjs.com/package/@zinliao/handybox)
> npm install -s @zinliao/handybox

2、Use in your code
> let handybox = require('@zinliao/handybox');

3、Happy to use all APIs

# Do I have documentation ?

Online: [Github - handybox](https://github.com/ZinLiao/handybox)

* [zObject](#zObject)
* [zArray](#zArray)
* [zNumber](#zNumber)
* [zString](#zString)
* [zTime](#zTime)

## zObject

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| pickNeedKey | obj(Object)<br>keys(Array) | isKeepKey(false) | x |
| serialization | obj(Object) | x | x |

* pickNeedKey(obj, keys, isKeepKey)

```
let zObject = require('../zObject/index');

let obj1 = {
  a: 'a',
  b: 'b',
  c: 'c'
};

// { a: 'a', c: 'c' }
zObject.pickNeedKey(obj1, ['a', 'c']);

// { a: 'a' }
zObject.pickNeedKey(obj1, ['a', 'd']);

// { a: 'a', d: '' }
zObject.pickNeedKey(obj1, ['a', 'd'], true);
```

* serialization(obj)

```
let zObject = require('../zObject/index');

let obj1 = {
  a: 'a',
  b: 'b',
  c: 'c'
};

// a=a&b=b&c=c
console.log(zObject.serialization(obj1));
```

## zArray

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| deduplication | - | keepEmpty(false) | √ |
| pushAndShift | item | max(0)| √ |
| max | - | - | × |
| min | - | - | × |
| removeSpecItem | index(Number) | item(Number&#124;String) | √ |


* deduplication(keepEmpty)

```
let handybox = require('../index');

let a = [1,3,5,'',3,1];

// [1,3,5]
a.deduplication();
// [1,3,5,'']
a.deduplication(true);
```

* pushAndShift(item, max)

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

* removeSpecItem(index, item)

```
let handybox = require('../index);

let a = [1, 2, 3],
    b = [1, 2, 3];

// [1, 3]
a.removeSpecItem(1);
// [1, 2]
a.removeSpecItem(null, 3);
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
| strBoolToBool | - | - | x |

* upperFirst

```
let handybox = require('../index');

let str1 = 'hello world';

// Hello world
str1.upperFirst();
```

* strBoolToBool

```
let handybox = require('../index');

let str2 = 'false';

// boolean
typeof str2.strBoolToBool();
```

## zTime

| API Name | Default Params | Optional Params(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| getMyTime | - | format(null)<br>timestamp(null)<br>area(EN) | × |

* getMyTime(format, timestamp, area)

> format 

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

> area

| Input | Is Default | 
| ----- | ----- | 
| EN | √ |
| CN | × |


```
let zTime = require('../index')['zTime'];

let time1 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', null, 'CN');

// 2018-11-26 21:56:46 星期一
time1;

let time2 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', 1514736000000, 'CN');

// 2018-01-01 00:00:00 星期一
time2;
```
