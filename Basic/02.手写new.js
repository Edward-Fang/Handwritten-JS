const myNew = (fn, ...args) => {
  const obj = {}
  obj.__proto = fn.prototype
  let res = fn.apply(obj, args)
  return typeof res === 'object' ? res : obj
}

function fun1(name) {
  this.name = name
}

function fun2(obj) {
  this.obj = obj
}

const newFun1 = myNew(fun1, 'hello')
console.log(newFun1)

const newFun2 = myNew(fun2, {
  a: 1,
  b: {
    c: 1
  }
})
console.log(newFun2)
