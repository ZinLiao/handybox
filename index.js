/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 14:22:04 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2020-09-01 15:50:13
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

// zNumber
require('./zNumber/index');

// zObject
exports.zObject = require('./zObject/index');

// zTool
exports.zTool = require('./zTool/index')

// zData
exports.zData = require('./zData/index');