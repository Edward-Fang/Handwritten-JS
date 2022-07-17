const peoples = require('./Array')
/**
 * 参数含义
 *  item：遍历项
 *  index：遍历项的索引
 *  arr：数组本身
 */
Array.prototype.my_forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}

peoples.my_forEach((item, index, arr) => {
  console.log(item.name, index)
})
