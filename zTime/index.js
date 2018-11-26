/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-26 17:25:30 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-26 21:43:54
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
    day: ['日', '一', '二', '三', '四', '五', '六']
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
  
  console.log(format)
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

  // switch (true) {
  //   // year, format: YYYY | year | 年
  //   case /^(YYYY|year|年)$/.test(format):
  //     now = YY;
  //     break;

  //   // month, format: MM | month | 月
  //   case /^(MM|month|月)$/.test(format):
  //     now = MM;
  //     break;
    
  //   // date, format: DD | date | 日
  //   case /^(DD|date|日)$/.test(format):
  //     now = DD;
  //     break;

  //   // date, format: YYYY-MM-DD | year-month-date | 年-月-日
  //   case /^YYYY\-MM\-DD$/.test(format):
  //   case /^year\-month\-date$/.test(format):
  //   case /^年\-月\-日$/.test(format):
  //     now = YY + '-' + MM + '-' + DD;
  //     break;

  //   // date, format: YYYYMMDD | yearMonthDate | 年月日
  //   case /^YYYYMMDD$/.test(format):
  //   case /^yearMonthDate$/.test(format):
  //   case /^年月日$/.test(format):
  //     now = YY + '' + MM + '' + DD;
  //     break;

  //   // hour, format: HH | hour | 时
  //   case /^(HH|hour|时)$/.test(format):
  //     now = HH;
  //     break;

  //   // minute, format: mm | minute | 分
  //   case /^(mm|minute|分)$/.test(format):
  //     now = mm;
  //     break;

  //   // second, format: ss | second | 秒
  //   case /^(ss|second|秒)$/.test(format):
  //     now = ss;
  //     break;

  //   // millisecond, format: ms | millisecond | 毫秒
  //   case /^(ms|millisecond|毫秒)$/.test(format):
  //     now = ms;
  //     break;

  //   // hour, minutes and second, format: HH:mm:ss | h:m:s | 时:分:秒
  //   case /^(HH:mm:ss|h:m:s|时:分:秒)$/.test(format):
  //     now = HH + ':' + mm + ':' + ss;
  //     break;

  //   // hour, minutes and second, format: HHmmss | hms | 时分秒
  //   case /^(HHmmss|hms|时分秒)$/.test(format):
  //     now = HH + '' + mm + '' + ss;
  //     break;

  //   // hour, minutes, second and millisecond, format: HH:mm:ss.ms | h:m:s.ms | 时:分:秒.毫秒
  //   case /^(HH:mm:ss\.ms|h:m:s\.ms|时:分:秒\.毫秒)$/.test(format):
  //     now = HH + ':' + mm + ':' + ss + '.' + ms;
  //     break;

  //   // year,month,date,hour,minute,second, format: (YYYY-MM-DD | year-month-date | 年-月-日) (HH:mm:ss | h:m:s | 时:分:秒)
  //   case /^(YYYY\-MM\-DD|year\-month\-date|年\-月\-日) (HH:mm:ss|h:m:s|时:分:秒)$/.test(format):
  //     now = YY + '-' + MM + '-' + DD + ' ' + HH + ':' + mm + ':' + ss;
  //     break;

  //   // year,month,date,hour,minute,second and millisecond, format: (YYYY-MM-DD | year-month-date | 年-月-日) (HH:mm:ss.ms | h:m:s.ms | 时:分:秒.毫秒)
  //   case /^(YYYY\-MM\-DD|year\-month\-date|年\-月\-日) (HH:mm:ss\.ms|h:m:s\.ms|时:分:秒\.毫秒)$/.test(format):
  //     now = YY + '-' + MM + '-' + DD + ' ' + HH + ':' + mm + ':' + ss + '.' + ms;
  //     break;

  //   default:
  //     break;
  // }
}