Array.prototype.my_splice = function (start, length, ...values) {
  if (length === 0) return []
  length = start + length > this.length - 1 ? this.length - start : length
  const res = [],
    temp = [...this]
  for (let i = start; i < start + values.length; i++) {
    this[i] = values[i - start]
  }
  this.length = start + values.length
  if (values.length < length) {
    const num = length - values.length
    for (let i = start + values.length; i < temp.length; i++) {
      this[i] = temp[i + num]
    }
    this.length -= num
  }
  if (values.length > length) {
    for (let i = start + length; i < temp.length; i++) {
      this.push(temp[i])
    }
  }
  for (let i = start; i < start + length; i++) {
    res.push(temp[i])
  }
  return res
}

const test = [1, 2, 3, 4, 5, 6, 7]
console.log(test.my_splice(1, 2))
