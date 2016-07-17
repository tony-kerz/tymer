# tymer

this simple component allows for geocoding from various providers

[![Build Status](https://travis-ci.org/tony-kerz/tymer.svg?branch=tk%2Ftravis)](https://travis-ci.org/tony-kerz/tymer)

## usage

```
import Timer from 'tymer'

const timer = new Timer('some-event')

// some event occurs here

timer.stop()

console.log('timer: report=%o', timer.toString())
```

report looks like:
```
some-event: count=1, min=0.014, max=0.048, last=0.015, avg=0.026, total=0.000s
```
