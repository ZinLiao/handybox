/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-28 19:25:14 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-01-14 15:38:17
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
})