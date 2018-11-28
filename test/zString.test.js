/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2018-11-28 19:25:14 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2018-11-28 19:26:49
 */
let zString = require('../zString/index');
let expect = require('chai').expect;

describe('zString', () => {
  it('upperFirst', () => {
    expect('hello world'.upperFirst()).to.be.equal('Hello world');
  })
})