/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 16:44:53 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-07-22 15:39:15
 */

/**
 * LIST:
 *    1、upperFirst
 *    2、strBoolToBool
 *    3、strNumRangeToArray
 */
 
'use strict';

/**
 * Upper first word
 */
String.prototype.upperFirst = function () {
  if (typeof this !== 'string') { return this; }

  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * String Boolean to Boolean
 */
String.prototype.strBoolToBool = function () {
  if (typeof this !== 'string' || !/^true|false$/.test(this)) { return this; }

  return /^true$/.test(this);
}

/**
 * String Number range to Number Array
 */
String.prototype.strNumRangeToArray = function () {
  if (typeof this !== 'string' || this.length <= 0) { return this; }

  let replaceExp = /[\~\!\@\#\$\%\^\&\*\(\)\/\|\.\<\>\?\"\'\;\:\_\=\+\[\]\{\}]|[a-zA-Z]|\s/g,
      arr = this.trim().replace(replaceExp, ',').split(',').filter(val => val),
      res = [];

  arr.forEach(val => {
    if (val.indexOf('-') < 0) {
      res.push(val)
    } else {
      let item = val.split('-')
                    .filter((_item, index, self) => self.indexOf(_item) === index && _item !== '')
                    .sort((a, b) => a - b)
                    .map(value => value - 0);

      for (let i = item[0]; i <= item[1]; i++) { res.push(i + ''); }
    }
  })

  return res;
}