/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2019-01-31 16:47:52 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-03-27 16:42:35
 */
let zObject = require('../zObject/index');
let expect = require('chai').expect;

describe('zObject', () => {
  let sourceObj = {
        a: 'a',
        b: 'b',
        c: 'c'
      },
      needKey1 = ['a', 'c'],
      needKey2 = ['a', 'd'];

  it('pickNeedKey', () => {
    expect(JSON.stringify(zObject.pickNeedKey(sourceObj, needKey1))).to.be.equal(JSON.stringify({a:'a',c:'c'}));
    expect(JSON.stringify(zObject.pickNeedKey(sourceObj, needKey2))).to.be.equal(JSON.stringify({a:'a'}));
    expect(JSON.stringify(zObject.pickNeedKey(sourceObj, needKey2, true))).to.be.equal(JSON.stringify({a:'a',d:''}));
  });
  
  it('serialization', () => {
    expect(zObject.serialization(sourceObj)).to.be.equal('a=a&b=b&c=c');
  })
})