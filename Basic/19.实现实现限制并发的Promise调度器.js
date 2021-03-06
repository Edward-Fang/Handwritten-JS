class Scheduler {
  constructor(limit) {
    this.queue = []
    this.limit = limit
    this.count = 0
  }

  add(time, order) {
    const promiseCreator = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log(order)
          res()
        }, time)
      })
    }
    this.queue.push(promiseCreator)
  }

  taskStart() {
    for (let i = 0; i < this.limit; i++) {
      this.request()
    }
  }

  request() {
    if (!this.queue.length || this.count >= this.limit) return
    this.count++
    this.queue
      .shift()()
      .then(() => {
        this.count--
        this.request()
      })
  }
}

const scheduler = new Scheduler(2)
const addTask = (time, order) => {
  scheduler.add(time, order)
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
scheduler.taskStart()

// 输出顺序是：2 3 1 4
// 整个的完整执行流程：
// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4
