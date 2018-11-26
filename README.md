# Who am I ?

  I am an ECMAScript toolbox like handybox.

# What type of function I have ?

  Arrays, String, Time methods that are not Native

# How to own me ?

1、Download from npm
> npm install -s @zinliao/handybox

2、Sse in your code
> let handybox = require('@zinliao/handybox');

3、Happy to use all APIs

# Do I have documentation ?

Online: [Github - handybox](https://github.com/ZinLiao/handybox)

* [zArray](#zArray)
* [zString](#zString)
* [zTime](#zTime)

## zArray

| API Name | Default Params | optional(default) | Chained call | 
| -------- | ------ | ----- | ----- |
| deduplication | arr | keepEmpty(false) | √
| pushAndShift | item | max(0)| √

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
| YYYY`|`yyyy`|`year`|`年 | 2018
| MM`|`month`|`月 | 12 |
| DD`|`date`|`日 | 25 |
| HH`|`hour`|`时 | 09 |
| mm`|`minute`|`分 | 10 |
| ss`|`second`|`秒 | 50 |
| ms`|`millisecond`|`毫秒 | 247 |
| day | EN: Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday <br> CN: 日, 一, 二, 三, 四, 五, 六 |

```
let zTime = require('../index')['zTime'];

let time1 = zTime.getMyTime('YYYY-MM-DD HH:mm:ss 星期day', null, 'CN');

// 2018-11-26 21:56:46 星期一
console.log(time1);
```