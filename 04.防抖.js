function debounce(fn, delay = 500) {
  let timer
  return function () {
    timer && clearTimeout(timer)
    const args = arguments
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function sayHello(arg) {
  console.log(arg)
}

const fun = debounce(sayHello('hhh'), 1000)
