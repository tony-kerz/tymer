# tymer

this simple component allows for geocoding from various providers

[![Build Status](https://travis-ci.org/tony-kerz/tymer.svg?branch=tk%2Ftravis)](https://travis-ci.org/tony-kerz/tymer)

## usage

### import
```
import Timer from 'tymer'
```

### stop
```
// timer is automatically started on construction
//
const timer = new Timer('some-event')

// some event occurs here

timer.stop()
```

### explicit start
```
const timer = new Timer('some-event')

const array = [1, 2, 3]
for (let i = 0; i < array.length; i++) {
  timer.start()
  // do stuff
  timer.stop()
}
```

### lap
```
const timer = new Timer('some-event')

// some event occurs here

timer.lap() // lap() stops and then immediately starts

// other event here

timer.stop()
```

### async
```
const parentTimer = new Timer('some-event')

something().then(()=>{
  const childTimer = new Timer()
  // some event
  childTimer.stop()
  // need child timer to track time spent in async segment
  parentTimer.record(childTimer.last())
})
```

### report
```
console.log('timer: report=%o', timer.toString())
```
```
some-event: count=1, min=0.014, max=0.048, max2=0.031, last=0.015, avg=0.026, avg2=0.021, total=0.000s
```
> `max2` is the second max, and `avg2` is the average without the max.

> this is to provide insight into loops where the first call incurs an initialization cost.
