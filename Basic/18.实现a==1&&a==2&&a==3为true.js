// 方法一：对象与数字进行比较会先调用对象的toString()方法
// let a = {
//   i: 1,
//   toString: () => {
//     return a.i++
//   }
// }
// console.log(a == 1 && a == 2 && a == 3)

// 方法二：
// const a = [1, 2, 3]
// a.join = a.shift
// console.log(a == 1 && a == 2 && a == 3)

// 第三种方法
let val = 0
Object.defineProperty(global, 'a', {
  get() {
    return ++val
  }
})
console.log(a == 1 && a == 2 && a == 3)
