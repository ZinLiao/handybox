/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2020-08-26 10:06:51 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2020-09-01 15:05:09
 */

'use strict';

const ALL_TYPE = {
  "[object String]": "String",
  "[object Number]": "Number",
  "[object Boolean]": "Boolean",
  "[object Undefined]": "Undefined",
  "[object Null]": "Null",
  "[object BigInt]": "BigInt",
  "[object Symbol]": "Symbol",
  
  "[object Function]": "Function",
  "[object Object]": "Object",
  "[object Array]": "Array"
}

/**
 * Data type judgment
 * @param {Any} data orignal data
 * @param {Any} isWhichType Determine whether the data is of a certain type
 */
exports.dataType = function (data, isWhichType = null) {
  let res = ALL_TYPE[Object.prototype.toString.call(data)];

  return isWhichType ? res === isWhichType : res;
}