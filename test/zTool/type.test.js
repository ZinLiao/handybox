/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2020-08-31 17:23:11 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2020-09-01 15:25:24
 */

let zTool = require('../../zTool/index');
let expect = require('chai').expect;

describe('zTool-type', _ => {
  const testType = {
    String: 'HelloWorld',
    Number: 1024,
    Boolean: false,
    Undefined: undefined,
    Null: null,
    BigInt: BigInt(1000000000000000000),
    Symbol: Symbol('SYMBOL'),
    Object: {},
    Array: new Array(100),
    Function: function(){}
  };

  it('dataType(String)', done => {
    expect(zTool.dataType(testType.String)).to.be.equal('String');
    expect(zTool.dataType(testType.String, 'String')).to.be.equal(true);
    expect(zTool.dataType(testType.String, 'Number')).to.be.equal(false);
    done();
  });

  it('dataType(Number)', done => {
    expect(zTool.dataType(testType.Number)).to.be.equal('Number');
    expect(zTool.dataType(testType.Number, 'Number')).to.be.equal(true);
    expect(zTool.dataType(testType.Number, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Boolean)', done => {
    expect(zTool.dataType(testType.Boolean)).to.be.equal('Boolean');
    expect(zTool.dataType(testType.Boolean, 'Boolean')).to.be.equal(true);
    expect(zTool.dataType(testType.Boolean, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Undefined)', done => {
    expect(zTool.dataType(testType.Undefined)).to.be.equal('Undefined');
    expect(zTool.dataType(testType.Undefined, 'Undefined')).to.be.equal(true);
    expect(zTool.dataType(testType.Undefined, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Null)', done => {
    expect(zTool.dataType(testType.Null)).to.be.equal('Null');
    expect(zTool.dataType(testType.Null, 'Null')).to.be.equal(true);
    expect(zTool.dataType(testType.Null, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(BigInt)', done => {
    expect(zTool.dataType(testType.BigInt)).to.be.equal('BigInt');
    expect(zTool.dataType(testType.BigInt, 'BigInt')).to.be.equal(true);
    expect(zTool.dataType(testType.BigInt, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Symbol)', done => {
    expect(zTool.dataType(testType.Symbol)).to.be.equal('Symbol');
    expect(zTool.dataType(testType.Symbol, 'Symbol')).to.be.equal(true);
    expect(zTool.dataType(testType.Symbol, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Object)', done => {
    expect(zTool.dataType(testType.Object)).to.be.equal('Object');
    expect(zTool.dataType(testType.Object, 'Object')).to.be.equal(true);
    expect(zTool.dataType(testType.Object, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Array)', done => {
    expect(zTool.dataType(testType.Array)).to.be.equal('Array');
    expect(zTool.dataType(testType.Array, 'Array')).to.be.equal(true);
    expect(zTool.dataType(testType.Array, 'String')).to.be.equal(false);
    done();
  });

  it('dataType(Function)', done => {
    expect(zTool.dataType(testType.Function)).to.be.equal('Function');
    expect(zTool.dataType(testType.Function, 'Function')).to.be.equal(true);
    expect(zTool.dataType(testType.Function, 'String')).to.be.equal(false);
    done();
  });
})