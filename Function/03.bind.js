// bind是返回一个函数，而不是执行结果
// bind返回的函数，拿来当做构造函数，该怎么处理
Function.prototype.my_bind = function(obj, ...args){
  obj = obj || window
  const fn = Symbol()
  obj[fn] = this
  const _this = this
  
  const res = function(...innerArgs){
    console.log(this, _this);
    if(this instanceof _this){
      this[fn] = _this
      this[fn](...[...args, ...innerArgs])
      delete this[fn]
    }else{
      obj[fn](...[args, ...innerArgs])
      delete obj[fn]
    }
  }
  res.prototype = Object.create(this.prototype)
  return res
}