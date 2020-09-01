/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2020-09-01 16:33:15 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2020-09-01 16:41:22
 */

let zData = require('../../zData/index');
let expect = require('chai').expect;

describe('zData-queue', _ => {
  it('queue', done => {
    let queue = new zData.Queue();

    expect(queue.isEmpty()).to.be.equal(true);
    expect(queue.length()).to.be.equal(0);
    queue.enqueue(1);
    expect(queue.first()).to.be.equal(1);
    queue.enqueue(2);
    expect(queue.last()).to.be.equal(2);
    queue.dequeue();
    expect(queue.length()).to.be.equal(1);
    expect(queue.toString()).to.be.equal('2');
    queue.clear();
    expect(queue.isEmpty()).to.be.equal(true);
    done();
  })
})