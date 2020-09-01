let handybox = require('../../index'),
    Queue = handybox.zData.Queue;

let queue = new Queue(20);

queue.enqueue(1);                   // [1]
queue.enqueue(2);                   // [1,2]
queue.enqueue(3);                   // [1,2,3]
queue.dequeue();                    // [2,3]
console.log(queue.isEmpty())        // false
console.log(queue.first())          // 2
queue.enqueue(4);                   // [2,3,4]
queue.enqueue(5);                   // [2,3,4,5]
queue.enqueue(6);                   // [2,3,4,5,6]
queue.dequeue();                    // [3,4,5,6]
console.log(queue.last())           // 6
queue.enqueue(7);                   // [3,4,5,6,7]
console.log(queue.toString());      // 3,4,5,6,7
queue.clear();                      // []
console.log(queue.toString(null));  // []