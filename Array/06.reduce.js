const peoples = require('./Array')
/**
 * 参数含义
 *  pre：前一项
 *  next：下一项
 *  index：当前索引
 *  arr：数组本身
 */
Array.prototype.my_reduce = function (cb, ...args) {
  let start = 0,
    pre
  // 判断是否带初始数
  if (args.length) {
    pre = args[0]
  } else {
    pre = this[0]
    start = 1
  }
  for (let i = 0; i < this.length; i++) {
    pre = cb(pre, this[i], i, this)
  }
  return pre
}

const sum = peoples.my_reduce((pre, next) => {
  return pre + next.age
}, 0)
console.log(sum)
