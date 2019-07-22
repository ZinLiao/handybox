/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-28 19:25:14 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-07-22 15:44:40
 */
let zString = require('../zString/index');
let expect = require('chai').expect;

describe('zString', () => {
  it('upperFirst', () => {
    expect('hello world'.upperFirst()).to.be.equal('Hello world');
  })

  it('strBoolToBool', () => {
    expect(typeof 'false'.strBoolToBool()).to.be.equal('boolean');
  })

  it('strNumRangeToArray', () => {
    let str = '1,2,3-5';
    
    expect(str.strNumRangeToArray().join(',')).to.be.equal('1,2,3,4,5');
  })
})