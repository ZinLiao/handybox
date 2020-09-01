/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2020-09-01 15:49:08 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2020-09-01 16:37:31
 */

'use strict';

function Queue () {
  this.queue = [];
  this.isEmpty = isEmpty;       // 判断度列是否为空
  this.length = length;         // 返回队列长度
  this.first = first;           // 返回队首元素
  this.last = last;             // 返回队尾元素
  this.enqueue = enqueue;       // 元素入队
  this.dequeue = dequeue;       // 元素出队
  this.toString = toString;     // 查看所有元素
  this.clear = clear;           // 清空队列
}

function isEmpty() {
  return this.queue.length === 0;
}

function length() {
  return this.queue.length;
}

function enqueue(element) {
  this.queue.push(element);
}

function dequeue() {
  if (this.isEmpty()) {
    return false
  } else {
    this.queue.shift();
  }
}

function first() {
  if (this.isEmpty()) {
    return false;
  } else {
    return this.queue[0];
  }
}

function last() {
  if (this.isEmpty()) {
    return false;
  } else {
    return this.queue[this.queue.length - 1];
  }
}

function toString(split = ',') {
  let queue = this.queue;

  if (split) {
    queue = queue.join(split);
  }

  return queue;
}

function clear() {
  delete this.queue;
  this.queue = [];
}

module.exports = Queue;