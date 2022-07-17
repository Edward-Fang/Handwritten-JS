/**
 * 参数含义
 *  start：开始截取的字符索引(包含此字符)
 *  length：截取的长度
 *  start < 0：start = length + start
 *  length超出范围要做处理
 *  length < 0：返回空字符串
 */
String.prototype.my_substr = function(start = 0, length){
  if(length < 0) return ''
  
  start = start < 0 ? this.length + start : start
  length = (!length && length !== 0) || length > this.length - start ? this.length : start + length

  let str = ''
  for(let i = start; i < length; i++){
    str += this[i]
  }
  return str
}

const str = 'hhhhhh'
console.log(str.my_substr(2))
console.log(str.my_substr(-3))
console.log(str.my_substr(2, 2))
console.log(str.my_substr(2, 10))