/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 16:44:53 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-01-14 16:01:42
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
  if (typeof this !== 'string' || !/^true|false$/.test(this)) { return this; }

  return /^true$/.test(this);
}