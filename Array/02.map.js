const peoples = require('./Array')

Array.prototype.my_map = function(cb){
  const res = []
  for(let i = 0; i < this.length; i++){
    res.push(cb(this[i], i, this))
  }
  return res
}

console.log(peoples.my_map((item, index, arr) => `${item.name}-${index}`))