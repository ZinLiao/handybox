/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-28 17:26:18 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-28 20:27:22
 */
let zArray = require('../zArray/index');
let expect = require('chai').expect;

describe('zArray', () => {
  it('deduplication', () => {
    expect([1,2,'',3,2,1].deduplication().join(',')).to.be.equal('1,2,3');
  });

  it('deduplication(keepEmpty)', () => {
    expect([1,2,'',3,2,1].deduplication(true).join(',')).to.be.equal('1,2,,3');
  });

  it('pushAndShift', () => {
    expect([1].pushAndShift(2).join(',')).to.be.equal('1,2');
  })

  it('pushAndShift(item, max)', () => {
    expect([1,2].pushAndShift(3, 2).join(',')).to.be.equal('2,3');
  })

  it('max', () => {
    expect([5,7,3,9,1,11,0].max()).to.be.equal(11);
  })

  it('min', () => {
    expect([5,7,3,9,1,11,0].min()).to.be.equal(0);
  })
});