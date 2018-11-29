/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-28 20:48:41 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-29 21:25:25
 */

'use strict';

const MAX_VALUE = Math.MAX_VALUE,
      MIN_VALUE = Math.MIN_VALUE;

/**
 * format the number to currency
 */
Number.prototype.currency = function() {
  if (typeof this !== 'number' || this < MIN_VALUE || this > MAX_VALUE) { return false; }

  let _this = (this + '').split('.'),
      _int = _this[0],
      _float = _this[1] ? '.' + _this[1] : '';

  return parseInt(_int).toLocaleString() + _float;
}