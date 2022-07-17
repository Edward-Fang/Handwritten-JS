const throttle = (fn, delay = 500) => {
  let flag = false
  return () => {
    if (flag) return
    flag = true
    const args = arguments
    setTimeout(() => {
      fn.apply(this, args)
      flag = false
    }, delay)
  }
}
