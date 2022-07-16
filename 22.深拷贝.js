// 方法一：JSON.parse(JSON.stringify(obj))
/**
 * 缺点：
 *    1、对象中有字段值为undefined，转换后则会直接字段消失
      2、对象如果有字段值为RegExp对象，转换后则字段值会变成{}
      3、对象如果有字段值为NaN、+-Infinity，转换后则字段值变成null
      4、对象如果有环引用，转换直接报错
 */
// const a = { name: 'hhh', age: 22 }
// const b = JSON.parse(JSON.stringify(a))

// console.log(b) // { name: 'hhh', age: 22 }
// console.log(b === a) // false

// 方法二： 递归(考虑数组) Map解决环引用
// const deepClone = (target, map = new Map()) => {
//   if(typeof target !== 'object') return target

//   const temp = Array.isArray(target) ? [] : {}
//   if(map.get(target)){
//     return map.get(target)
//   }
//   map.set(target, temp)
//   for(const key in target){
//     temp[key] = deepClone(target[key], map)
//   }
//   return temp
// }
// const a = {
//   name: 'hhh',
//   age: '22',
//   hobbies: ['game', 'movie']
// }
// a.key = a
// const b = deepClone(a)
// console.log(b)

// 方法三：判断其他类型
function deepClone(obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj)
  let res = null
  const reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error]
  if (reference.includes(obj?.constructor)) {
    hash.set(obj, res)
    res = new obj.constructor(obj)
  } else if (Array.isArray(obj)) {
    res = []
    hash.set(obj, res)
    obj.forEach((e, i) => {
      res[i] = deepClone(e, hash)
    })
  } else if (typeof obj === 'object' && obj !== null) {
    res = {}
    hash.set(obj, res)
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        res[key] = deepClone(obj[key], hash)
      }
    }
  } else {
    res = obj
  }
  return res
}
const a = {
  name: 'hhh',
  age: 22,
  hobbies: { sports: '骑车' },
  skills: ['css', 'js'],
  map: new Map([
    ['hih', 111],
    ['xx', 222]
  ]),
  set: new Set([1, 2, 3]),
  func: (name, age) => `${name}今年${age}岁啦！！！`,
  sym: Symbol(123),
  reg: new RegExp(/hh/g)
}
a.key = a
const b = deepClone(a)
console.log(b)
