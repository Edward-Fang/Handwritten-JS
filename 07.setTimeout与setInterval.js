// `setInterval`用来实现循环定时调用
// 可能有问题，用`setTimeout`解决
const mySetTimeout = (fn, delay) => {
  let timer
  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }
  setTimeout(interval, delay)
  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}

const { cancel } = mySetTimeout(() => console.log('hhh'), 1000)
setTimeout(() => {
  cancel()
}, 4000)


const mySetInterval = (fn, delay) => {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)
}

mySetInterval(() => console.log('hhhh'), 1000)