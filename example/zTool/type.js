let handybox = require('../../index'),
    zTool = handybox.zTool;

console.log(zTool.dataType('String'));                  // String
console.log(zTool.dataType(123456789));                 // Number
console.log(zTool.dataType(false));                     // Boolean
console.log(zTool.dataType(undefined));                 // Undefined
console.log(zTool.dataType(null));                      // Null
console.log(zTool.dataType(BigInt(100000000000000)));   // BigInt
console.log(zTool.dataType(Symbol('SYMBOL')));          // Symbol
console.log(zTool.dataType({}));                        // Object
console.log(zTool.dataType(new Array(10)));             // Array
console.log(zTool.dataType(function(){}));              // Function