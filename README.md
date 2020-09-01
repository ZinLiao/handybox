# Who am I ?

  I am an ECMAScript toolbox like handybox.

# What type of function I have ?

  Provides APIs not found in native JavaScript, involving Object, Array, Number, String, Time, and common tools, as well as support for use in Node.js

# How to own me ?

1、Download from [npm](https://www.npmjs.com/package/@zinliao/handybox)
> npm install -s @zinliao/handybox

2、Use in your code
> let handybox = require('@zinliao/handybox');

3、Happy to use all APIs

# Do I have documentation ?

Online: [Github - handybox](https://github.com/ZinLiao/handybox)

| [zObject](#zObject) | [zArray](#zArray) | [zNumber](#zNumber) | [zString](#zString) | [zTime](#zTime) | [zTool](#zTool) | [zData](#zData) |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| pickNeedKey | deduplication | currency | upperFirst | getMyTime | debounce | Queue |
| serialization | pushAndShift | midian | strBoolToBool | - | dataType | - |
| - | max | - | strNumRangeToArray | - | - | - |
| - | min| - | - | - | - | - |
| - | removeSpecItem | - | - | - | - | - |
| - | in | - | - | - | - | - |

## zObject

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| pickNeedKey | obj(Object)<br>keys(Array) | isKeepKey(false) | x |
| serialization | obj(Object) | x | x |

* pickNeedKey(obj, keys, isKeepKey)

``` javascript
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

``` javascript
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
| in | item(Any) | isBackIndex(false) | x |


* deduplication(keepEmpty)

``` javascript
let handybox = require('../index');

let a = [1,3,5,'',3,1];

// [1,3,5]
a.deduplication();
// [1,3,5,'']
a.deduplication(true);
```

* pushAndShift(item, max)

``` javascript
let handybox = require('../index');

let a = [1];

// [1,2]
a.pushAndShift(2);
// [2,3]
a.pushAndShift(3, 2);
```

* max & min

``` javascript
let handybox = require('../index');

let a = [5,7,3,9,1,11,0];

// 11
a.max();
// 0
a.min();
```

* removeSpecItem(index, item)

``` javascript
let handybox = require('../index');

let a = [1, 2, 3],
    b = [1, 2, 3];

// [1, 3]
a.removeSpecItem(1);
// [1, 2]
a.removeSpecItem(null, 3);
```

* in(item, isBackInde)

```javascript
let handy = require('../index');

let a = [1, '2', 3];

// false
console.log(a.in(2));
// false
console.log(a.in(4));
// true
console.log(a.in('2'));
// 1
console.log(a.in('2', true));

```

## zNumber

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| currency | - | short(false)<br>fixed(2) | × | 
| midian | target(Number) | fixed(-1) | × | 

* currency(short, fixed)

``` javascript
let handybox = require('../index');

let _int1 = 123456,
    _int2 = 123456.789,
    _int3 = -12345,
    _int4 = -12345.789;

// 123,456
_int1.currency();
// 123.46k
_int1.currency(true);
// 123.5k
_int1.currency(true, 1);
// 123,456.789
_int2.currency();
// -123,456
_int3.currency();
// -123,456.789
_int4.currency();
```

* midian(target)

``` javascript
let handybox = require('../index');

let start = 10, end = -5;

// 2.5
start.midian(end)
// 3
start.midian(end, 0)
// 0
start.midian('-5')
```

## zString

| API Name | Default Params | Optional Params(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| upperFirst | - | - | × |
| strBoolToBool | - | - | x |
| strNumRangeToArray | - | - | x |

* upperFirst

``` javascript
let handybox = require('../index');

let str1 = 'hello world';

// Hello world
str1.upperFirst();
```

* strBoolToBool

``` javascript
let handybox = require('../index');

let str2 = 'false';

// boolean
typeof str2.strBoolToBool();
```

* strNumRangeToArray

``` javascript
let handybox = require('../index');

let str3 = '1,2,3-5';

// [ '1', '2', '3', '4', '5' ]
console.log(str3.strNumRangeToArray())
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


``` javascript
let zTime = require('../index')['zTime'];

let time1 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', null, 'CN');

// 2018-11-26 21:56:46 星期一
time1;

let time2 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', 1514736000000, 'CN');

// 2018-01-01 00:00:00 星期一
time2;
```

## zTool

| API Name | Default Params | Optional Params(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| debounce | func(Function) <br> delay(Number) |  | × |
| dataType | data(Any) | isWitchType(null) | x |

* debounce(func, delay = 300)

``` javascript
let handybox = require('../index.js'),
    zTime = handybox.zTime,
    zTool = handybox.zTool;

// debounce
let count = 0, delay = 1000,
    debounceLog = zTool.debounce(log, delay);

function log() {
  let now = zTime.getMyTime('HH:mm:ss');

  console.log(`count：${count}`);
  console.log(`Time：${now}`);
}

function main() {
  count < 5 ? setTimeout(_ => {
    count++;
    debounceLog();
    main()
  }, 0) : console.log('====== Over ======');
}

console.log('====== Start ======');
log();
main();
```

``` javascript
<!-- all console log like this -->
====== Start ======
count：0
Time：2019-11-02 15:13:24
====== Over ======
count：5
Time：2019-11-02 15:13:25
```

* dataType(data, isWhichType = null)

``` javascript
let handybox = require('../../index'),
    zTool = handybox.zTool;

console.log(zTool.dataType('String'));                  // String
console.log(zTool.dataType(123456789));                 // Number
console.log(zTool.dataType(false));                     // Boolean
console.log(zTool.dataType(undefined));                 // Undefined
console.log(zTool.dataType(null));                      // Null
console.log(zTool.dataType(BigInt(100000000000000)));   // BigInt
console.log(zTool.dataType(Symbol('SYMBOL')));          // Symbol
console.log(zTool.dataType({}));                        // Object
console.log(zTool.dataType(new Array(10)));             // Array
console.log(zTool.dataType(function(){}));              // Function
```

## zData

| Data Strutures | Methods | 
| -------- | ------ |
| Queue | isEmpty() <br/> first() <br/> last() <br/> length() <br/> enqueue(el) <br/> dequeue() <br/> toString() <br/> clear()  |

* Queue

``` javascript
let handybox = require('../../index'),
    Queue = handybox.zData.Queue;

let queue = new Queue();

queue.enqueue(1);                   // [1]
queue.enqueue(2);                   // [1,2]
queue.enqueue(3);                   // [1,2,3]
queue.dequeue();                    // [2,3]
console.log(queue.isEmpty())        // false
console.log(queue.length())         // 2
console.log(queue.first())          // 2
queue.enqueue(4);                   // [2,3,4]
queue.enqueue(5);                   // [2,3,4,5]
queue.enqueue(6);                   // [2,3,4,5,6]
queue.dequeue();                    // [3,4,5,6]
console.log(queue.last())           // 6
queue.enqueue(7);                   // [3,4,5,6,7]
console.log(queue.toString());      // 3,4,5,6,7
queue.clear();                      // []
console.log(queue.toString(null));  // []
```