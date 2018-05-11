
var p = Promise.resolve()
module.exports = function nextTick(fn) {
  p.then(fn).catch(console.error)
}
