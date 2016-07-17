import test from 'ava'
import Timer from '../src'

test('should track laps', t => {
  const timer = new Timer('some-event')
  timer.lap()
  timer.lap()
  timer.stop()
  t.is(timer.count(), 3)
  // eslint-disable-next-line no-console
  console.log(timer.toString())
})

test('should record', t => {
  const timer = new Timer('some-event')
  timer.record(1000)
  t.is(timer.count(), 1)
  t.is(timer.last(), 1000)
  t.is(timer.min(), 1000)
  t.is(timer.max(), 1000)
  t.is(timer.avg(), 1000)
  t.is(timer.total(), 1000)
  timer.record(3000)
  t.is(timer.count(), 2)
  t.is(timer.last(), 3000)
  t.is(timer.min(), 1000)
  t.is(timer.max(), 3000)
  t.is(timer.avg(), 2000)
  t.is(timer.total(), 4000)
})
