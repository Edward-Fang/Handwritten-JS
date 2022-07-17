/**
 * 参数含义
 *  start：开始截取的字符索引(包含此字符)
 *  end：结束截取的字符索引(不包含此字符)
 *  start > end：返回空字符串
 *  start < 0：start = length + start
 */
String.prototype.my_slice = function (start = 0, end) {
  start = start < 0 ? this.length + start : start
  end = !end && end !== 0 ? this.length : end

  if (start >= end) return ''
  let str = ''
  for (let i = start; i < end; i++) {
    str += this[i]
  }
  return str
}

const str = 'hhhhhh'
console.log(str.my_slice(2))
console.log(str.my_slice(-3))
console.log(str.my_slice(2, 4))
console.log(str.my_slice(3, 2))
