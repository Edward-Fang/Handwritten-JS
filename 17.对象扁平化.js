const isObject = val => typeof val === 'object' && val !== null
const flatten = obj => {
  if (!isObject(obj)) return
  const res = {}
  const dfs = (cur, pre) => {
    console.log(pre)
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${pre}[${index}]`)
        })
      } else {
        for (let key in cur) {
          dfs(cur[key], `${pre}${pre ? '.' : ''}${key}`)
        }
      }
    } else {
      res[pre] = cur
    }
  }
  dfs(obj, '')
  return res
}

const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
}
flatten(obj)
// console.log(flatten(obj))
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
