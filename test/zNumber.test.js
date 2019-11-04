/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-29 21:26:05 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-11-04 20:43:03
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

  it('10.midian(1)', () => {
    let start = 10, end = 1;

    expect(start.midian(end)).to.be.equal(5.5);
  });

  it('1.midian(10)', () => {
    let start = 1, end = 10;

    expect(start.midian(end)).to.be.equal(5.5);
  });

  it('-4.5.midian(10)', () => {
    let start = -4.5, end = 10;

    expect(start.midian(end)).to.be.equal(2.75);
  });

  it('-4.5.midian(10, 1)', () => {
    let start = -4.5, end = 10, fixed = 1;

    expect(start.midian(end, fixed)).to.be.equal(2.8);
  });
})