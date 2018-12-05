/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 14:33:18 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-12-05 21:41:24
 */

/**
 * LIST:
 *    1、deduplication
 *    2、pushAndShift
 *    3、max
 *    4、min
 *    5、removeSpecItem
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
 * @param {Any} item waiting to insert into array
 * @param {Number} max you want to set the max length of array, default 0 and can not remove first item
 */
Array.prototype.pushAndShift = function (item, max = 0) {
  if (!Array.isArray(this)) {
    return this;
  }

  typeof max === 'number' && max > 0 && this.shift();

  this.push(item);

  return this;
}

/**
 * return the max of number in an array after filter not a number item
 */
Array.prototype.max = function() {
  if (!Array.isArray(this) || this.length <= 0) { return false}

  return Math.max.apply(null, this.filter(val => typeof val == 'number'));
}

/**
 * return the min of number in an array after filter not a number item
 */
Array.prototype.min = function() {
  if (!Array.isArray(this) || this.length <= 0) { return false}

  return Math.min.apply(null, this.filter(val => typeof val == 'number'));
}

/**
 * quickly removal specified item from the array expect Object
 * 
 * @param {Number} index item index in the array
 * @param {String|Number} item waiting to remove item 
 */
Array.prototype.removeSpecItem = function(index, item) {
  if (this.length <= 0) { return this; }

  if (typeof index === "number") {
    // index can not more than the length of array
    Math.abs(index) <= this.length && this.splice(index, 1);

    return this;
  }

  if (item != undefined && typeof item != "boolean" && this.indexOf(item) >= 0) {
    return this.filter((val) => val !== item);
  }

  return this;
}