const peoples = require('./Array')

Array.prototype.my_every = function(cb){
  let flag = true
  for(let i = 0; i < this.length; i++){
    flag = cb(this[i], i , this)
    if(flag) break
  }
  return flag
}

console.log(peoples.my_every(item => item.age > 20));