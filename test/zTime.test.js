/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-28 19:27:18 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-28 19:37:38
 */
let zTime = require('../zTime/index');
let expect = require('chai').expect;

describe('zTime', () => {
  it('getMyTime(YYYY)', () => {
    expect(zTime.getMyTime('YYYY')).to.be.equal('2018');
  });

  it('getMyTime(YYYY-MM-DD, 1514764800000)', () => {
    expect(zTime.getMyTime('YYYY-MM-DD', 1514764800000)).to.be.equal('2018-01-01');
  });

  it('getMyTime(day, 1514764800000, CN)', () => {
    expect(zTime.getMyTime('day', 1514764800000, 'CN')).to.be.equal('一');
  });
})