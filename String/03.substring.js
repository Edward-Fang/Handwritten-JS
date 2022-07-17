// 与slice大致相同 start > end 互换值
String.prototype.my_slice = function (start = 0, end) {
  start = start < 0 ? this.length + start : start
  end = !end && end !== 0 ? this.length : end

  if (start >= end) [start, end] = [end, start]
  let str = ''
  for (let i = start; i < end; i++) {
    str += this[i]
  }
  return str
}

const str = 'hhhhhh'
console.log(str.my_slice(4))
console.log(str.my_slice(-3))
console.log(str.my_slice(2, 4))
console.log(str.my_slice(3, 2))
