/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 17:25:30 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2021-03-08 15:15:02
 */

'use strict';

const REGEXP = {
  YY: /(YYYY|yyyy|year|年)/g,
  MM: /(MM|month|月)/g,
  DD: /(DD|date|日)/g,
  HH: /(HH|hour|时)/g,
  mm: /(mm|minute|分)/g,
  ss: /(ss|second|秒)/g,
  ms: /(ms|millisecond|毫秒)/g,
  day: /day/g
};

const TEXT = {
  EN: {
    day: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  },
  CN: {
    day: ['天', '一', '二', '三', '四', '五', '六']
  }
}

function fillIn(number) {
  if (typeof number !== 'number' || number < 0 || number >= 10) { return number; }

  return '0' + number;
}

/**
 * get the current and format
 * 
 * @param {String} format formatted template, support Chinese
 * @param {Number} timestamp timestamp, if pass the param, will format the timestamp
 * @param {String} area language, default EN
 */
exports.getMyTime = function (format = null, timestamp = null, area = 'EN') { 
  let now = timestamp ? new Date(timestamp - 0) : new Date();
  
  if (!format) { return now; }

  let YY = now.getFullYear(),
      MM = fillIn(now.getMonth() + 1),
      DD = fillIn(now.getDate()),
      HH = fillIn(now.getHours()),
      mm = fillIn(now.getMinutes()),
      ss = fillIn(now.getSeconds()),
      ms = fillIn(now.getMilliseconds()),
      day = now.getDay();

  REGEXP.day.test(format) && (() => {
    format = format.replace(REGEXP.day, TEXT[area] ? TEXT[area]['day'][day] : TEXT['EN']['day'][day]);
  })();
  REGEXP.ms.test(format) && (() => format = format.replace(REGEXP.ms, ms))();
  REGEXP.ss.test(format) && (() => format = format.replace(REGEXP.ss, ss))();
  REGEXP.mm.test(format) && (() => format = format.replace(REGEXP.mm, mm))();
  REGEXP.HH.test(format) && (() => format = format.replace(REGEXP.HH, HH))();
  REGEXP.DD.test(format) && (() => format = format.replace(REGEXP.DD, DD))();
  REGEXP.MM.test(format) && (() => format = format.replace(REGEXP.MM, MM))();
  REGEXP.YY.test(format) && (() => format = format.replace(REGEXP.YY, YY))();

  return format;
}