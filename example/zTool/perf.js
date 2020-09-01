let handybox = require('../../index.js'),
    zTime = handybox.zTime,
    zTool = handybox.zTool;

// debounce
let count = 0, delay = 1000,
    debounceLog = zTool.debounce(log, delay);

function log() {
  let now = zTime.getMyTime('YYYY-MM-DD HH:mm:ss');

  console.log(`count：${count}`);
  console.log(`Time：${now}`);
}

function main() {
  count < 5 ? setTimeout(_ => {
    count++;
    debounceLog();
    main()
  }, 0) : console.log('====== Over ======');
}

console.log('====== Start ======');
log();
main();