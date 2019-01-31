/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2019-01-31 16:18:55 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-01-31 17:07:47
 */

'use strict';

/**
 * return the attribute you need
 * @param {Object} obj source object
 * @param {Array} keys attribute you need
 * @param {Boolean} isKeepKey whether keep thie key in data when target obj not enclude the key
 */
exports.pickNeedKey = function (obj, keys, isKeepKey = false) { 
  let data = {};

  if (!obj || Object.keys(obj).length <= 0 || !Array.isArray(keys) || keys.length <= 0) {
    return data;
  }

  keys.forEach(value => {
    isKeepKey ? (
      data[value] = obj[value] || ''
    ) : (
      obj[value] && (() => data[value] = obj[value])()
    )
  });

  return data;
}