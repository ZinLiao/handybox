/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 14:33:18 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-26 15:13:30
 */

'use strict';

/**
 * Array Deduplication
 * @param {Array} arr waiting to remove duplicate arrays
 * @param {Boolean} fillEmpty whether to keep an empty string, default false
 */
exports.deduplication = (arr, keepEmpty = false) => {
  if (!Array.isArray(arr) || arr.length < 0) {
    return arr;
  }

  return arr.filter((val, index, self) => {
    return self.indexOf(val) === index && (!keepEmpty ? val !== '' : true);
  })
}

