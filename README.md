# Who am I ?

  I am an ECMAScript toolbox like handybox.

# What function I have ?

  1、Array | String | DOM | Time
  
  2、Support Chained call

# How to own me ?

1、Download from npm
> npm install -s @zinliao/handybox

2、Sse in your code
> let handybox = require('@zinliao/handybox');

3、Happy to use all APIs

# Do I have documentation ?

### Array

| API Name | Default Params | optional(default) |
| -------- | ------ | ----- |
| deduplication | arr | keepEmpty(false) |
| pushAndShift | item | max(0)|

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
