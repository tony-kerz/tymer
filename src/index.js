import _ from 'lodash'
//import debug from 'debug'

//const dbg = debug('app:tymer')

export default class {
  constructor(name) {
    this._name = name
    this._count = 0
    this._total = 0
    this._max = 0
    this._max2 = 0
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

    if (this._last > this._max2) {
      if (this._last < this._max) {
        this._max2 = this._last
      }
      if (this._last > this._max) {
        this._max = this._last
      }
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

  max2() {
    return this._max2
  }

  avg() {
    return this._total / this._count
  }

  avg2() {
    return this._count ? (this._total - this._max) / (this._count - 1) : NaN
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
    return `${this._name}: count=${this._count}, min=${format(this._min)}, max=${format(this._max)}, max2=${format(this._max2)}, last=${format(this._last)}, avg=${format(this.avg())}, avg2=${format(this.avg2())}, total=${format(this._total/1000)}s`
  }

  isThresh(thresh) {
    return (this._count % thresh) === 0
  }
}

function format(n) {
  return n.toFixed(3)
}

function millis(t) {
  return (t[0] * 1000) + (t[1] / 1e6)
}
