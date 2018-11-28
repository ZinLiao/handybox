/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 16:44:53 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-28 17:23:11
 */

'use strict';

/**
 * Upper first word
 */
String.prototype.upperFirst = function () {
  if (typeof this !== 'string') { return this; }

  return this.charAt(0).toUpperCase() + this.slice(1);
}