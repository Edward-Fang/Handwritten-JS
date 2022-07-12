const cycleDetector = (obj) =>  {
  const arr = [obj]
  let flag = false
  const cycle = (o) => {
    const keys = Object.keys(o)
    for (const key of keys ) {
      const temp = o[key]
      if(typeof temp === 'object' && temp !== null){
        if(arr.indexOf(temp) >= 0){
          flag = true
          return
        }
        arr.push(temp)
        cycle(temp)
      }
    }
  }
  cycle(obj)
  return flag
}

const obj = {
  a: {
    c: [1, 2]
  },
  b: 1
}
obj.a.c.d = obj
console.log(cycleDetector(obj))
