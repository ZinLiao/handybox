/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-29 21:26:05 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-29 21:30:10
 */
let zNumber = require('../zNumber/index');
let expect = require('chai').expect;

describe('zNumber', () => {
  it('currency(12345)', () => {
    let num = 12345;

    expect(num.currency()).to.be.equal('12,345');
  });

  it('currency(12345.678)', () => {
    let num = 12345.678;

    expect(num.currency()).to.be.equal('12,345.678');
  });

  it('currency(-12345)', () => {
    let num = -12345;

    expect(num.currency()).to.be.equal('-12,345');
  });

  it('currency(-12345.678)', () => {
    let num = -12345.678;

    expect(num.currency()).to.be.equal('-12,345.678');
  });
})