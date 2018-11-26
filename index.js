/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 14:22:04 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-26 20:58:44
 */

'use strict';

exports.hello = () => {
  console.log('Hello, I am @zinliao/handybox');
}

// zArray
require('./zArray/index');

// zString
require('./zString/index');

// zTime
exports.zTime = require('./zTime/index');