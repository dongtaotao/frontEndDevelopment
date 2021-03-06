从 Redux 说起，到手写，再到状态管理
https://juejin.cn/post/7081909025159249956  


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
  

作者：云牧
链接：https://juejin.cn/post/7063073677520142366
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


30张图全面剖析React Hooks
https://juejin.cn/post/7064097257821306916