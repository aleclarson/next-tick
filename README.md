# next-tick v1.0.0

Wrap a function with `promise.then(fn)` where `promise` is a cached and resolved promise. You can read more about "microtask" behavior [here](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules).

```js
nextTick(() => {
  console.log('2')
})
console.log('1')
```
