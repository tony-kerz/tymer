import _ from 'lodash'
//import debug from 'debug'

//const dbg = debug('app:timer')

export default class {
  constructor(name) {
    this._name = name
    this._count = 0
    this._total = 0
    this.start()
  }

  start() {
    this._start = process.hrtime()
  }

  stop() {
    return this.record(millis(process.hrtime(this._start)))
  }

  record(millis) {
    this._count++
    this._last = millis
    if (_.isUndefined(this._min) || this._last < this._min) {
      this._min = this._last
    }
    if (_.isUndefined(this._max) || this._last > this._max) {
      this._max = this._last
    }
    this._total += this._last
    return millis
  }

  lap() {
    this.stop()
    this.start()
  }

  min() {
    return this._min
  }

  max() {
    return this._max
  }

  avg() {
    return this._total / this._count
  }

  count() {
    return this._count
  }

  name() {
    return this._name
  }

  total() {
    return this._total
  }

  last() {
    return this._last
  }

  toString() {
    return `${this._name}: count=${this._count}, min=${format(this._min)}, max=${format(this._max)}, last=${format(this._last)}, avg=${format(this.avg())}, total=${format(this._total/1000)}s`
  }

}

function format(n) {
  return n.toFixed(3)
}

function millis(t) {
  return (t[0] * 1000) + (t[1] / 1e6)
}
