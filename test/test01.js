// console.log('Script开始')
// setTimeout(() => {
//   console.log('宏任务1（setTimeout)')
//   Promise.resolve().then(() => {
//     console.log('微任务promise2')
//   })
// }, 0)
// setImmediate(() => {
//   console.log('宏任务2')
// })
// setTimeout(() => {
//   console.log('宏任务3（setTimeout)')
// }, 10)
// console.log('Script结束')
// Promise.resolve().then(() => {
//   console.log('微任务promise1')
// })
// process.nextTick(() => {
//   console.log('微任务nextTick')
// })



setImmediate(() => {
  console.log(1)
})
process.nextTick(() => {
  console.log(2)
})
console.log(3)
setTimeout(() => {console.log(4)},0)
setTimeout(() => {console.log(5)},1000)
setTimeout(() => {console.log(6)},10)
console.log(7)
