class LRLCache {
  constructor(size) {
    this.size = size
    this.cache = new Map()
  }

  get(key) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      console.log(value)
    } else {
      console.log(-1)
    }
  }

  set(key, value) {
    const hasKey = this.cache.get(key)
    hasKey && this.cache.delete(key)
    this.cache.set(key, value)
    this.cache.size > this.size && this.cache.delete(this.cache.keys().next().value)
    console.log(this.cache)
  }
}

const cache = new LRLCache(2)
cache.set(1, 1)
cache.set(2, 2)
cache.get(1)
cache.set(3, 3)
cache.get(2)
cache.set(4, 4)
cache.get(3)
cache.get(4)
