const peoples = require('./Array')
/**
 * 参数含义
 *  initValue：填充的值
 *  start：开始填充索引，默认0
 *  end：结束填充索引，默认length
 */
Array.prototype.my_fill = function (value, start = 0, end) {
  end = end || this.length
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}

console.log(
  peoples.my_fill(
    {
      name: 'hhh',
      age: 25
    },
    1,
    3
  )
)
