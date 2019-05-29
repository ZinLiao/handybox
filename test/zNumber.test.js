/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-29 21:26:05 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-05-29 15:44:32
 */
let zNumber = require('../zNumber/index');
let expect = require('chai').expect;

describe('zNumber', () => {
  it('12345.currency()', () => {
    let num = 12345;

    expect(num.currency()).to.be.equal('12,345');
  });

  it('12345.678.currency()', () => {
    let num = 12345.678;

    expect(num.currency()).to.be.equal('12,345.678');
  });

  it('-12345.currency()', () => {
    let num = -12345;

    expect(num.currency()).to.be.equal('-12,345');
  });

  it('-12345.678.currency()', () => {
    let num = -12345.678;

    expect(num.currency()).to.be.equal('-12,345.678');
  });

  it('12345.currency(true)', () => {
    let num = 12345;

    expect(num.currency(true)).to.be.equal('12.35k');
  });

  it('12345.currency(true, 1)', () => {
    let num = 12345;

    expect(num.currency(true, 1)).to.be.equal('12.3k');
  });
})