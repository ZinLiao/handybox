/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2019-11-02 11:34:01 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-11-02 15:09:03
 */

'use strict';

/**
 * debounce function 
 * 
 * @param {Function} func target function 
 * @param {Number} delay intervals, default 300ms
 */
exports.debounce = function (func, delay = 300) {
  return function (args) {
    let context = this,
        _args = args;

    if (typeof delay !== 'number' || delay <= 0) {
      func.call(context, _args);
    } else {
      clearTimeout(func._id);
  
      func._id = setTimeout(function () {
        func.call(context, _args)
      }, delay)
    }
  }
} 