/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 14:33:18 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-26 16:38:09
 */

'use strict';

/**
 * Array Deduplication
 * 
 * @param {Array} arr waiting to remove duplicate arrays
 * @param {Boolean} fillEmpty whether to keep an empty string, default false
 */
Array.prototype.deduplication = function (keepEmpty = false) {
  if (!Array.isArray(this) || this.length < 0) {
    return this;
  }

  return this.filter((val, index, self) => {
    return self.indexOf(val) === index && (!keepEmpty ? val !== '' : true);
  })
}

/**
 * insert into item, or remove first item if you set the arrya max length
 * 
 * @param {Any} item waitting to insert into array
 * @param {Number} max you want to set the array max length, default 0 and can not remove first item
 */
Array.prototype.pushAndShift = function (item, max = 0) {
  if (!Array.isArray(this)) {
    return this;
  }

  typeof max === 'number' && max > 0 && this.shift();

  this.push(item);

  return this;
}