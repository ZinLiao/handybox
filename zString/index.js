/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 16:44:53 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-01-14 15:37:30
 */

/**
 * LIST:
 *    1、upperFirst
 *    2、strBoolToBool
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
  if (typeof this !== 'string') { return this; }

  return /^true$/.test(this);
}