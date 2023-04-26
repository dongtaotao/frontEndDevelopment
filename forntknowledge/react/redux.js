从 Redux 说起，到手写，再到状态管理 
https://juejin.cn/post/7081909025159249956  

React核心用法系统梳理
https://juejin.cn/post/7099028351511167013

Redux 技术分享
https://juejin.cn/post/6978111642970259487

开发 Redux 中间件
开发中间件的模板代码：
export default store => next => action => {}

开发一个中间件：
const logger = store => next => action => {
  console.log(store)
  console.log(action)
  next(action) // 千万别忘了调用 next(action)，不然整个流程则会卡在此处
}
export default logger
中间件在开发完成以后只有被注册才能在 Redux 的工作流程中生效：
// src/store/index.js
import { createStore, applyMiddleware } from 'redux'
import logger from './middlewares/logger'

createStore(reducer, applyMiddleware(
  logger
))
如果注册多个中间件，中间件的执行顺序就是注册顺序：
// 先执行logger中间件，再执行test中间件
createStore(reducer, applyMiddleware(
  logger,
  test
))
  
链接：https://juejin.cn/post/7063073677520142366

30张图全面剖析React Hooks 🔥🔥🔥==========
https://juejin.cn/post/7064097257821306916   

剖析react-redux原理以及手写实现
https://juejin.cn/post/7010687960731353095

Redux持久化插件-解决刷新页面数据丢失问题  
https://juejin.cn/post/6885907913265971208

React全家桶之整合redux-persist
https://www.jianshu.com/p/d627e8428e56