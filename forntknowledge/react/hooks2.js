「React」Hooks入门介绍篇(一)
https://juejin.cn/post/7046641639523090469 

「React」Hooks入门介绍篇(二)
https://juejin.cn/post/7046643385939001351

react + redux +ts 使用基本流程
https://blog.csdn.net/James_xyf/article/details/119564375

react hooks 和 react-redux hooks 应用场景 **********************************************🔥
https://juejin.cn/post/6844903955923746830

react-content-loader分析骨架屏svg动画的实现 🔥🔥  骨架屏
https://juejin.cn/post/7094558405959876644

immutable.js教程
https://www.bilibili.com/video/BV1EE411e7kL?p=11&spm_id_from=pageDriver

React 开发性能监测插件-Why Did You Render http://www.javashuo.com/article/p-unzhjpqa-nw.html

推荐几个 React 性能优化工具
https://blog.csdn.net/qq_32281471/article/details/106893990

阿里三面：灵魂拷问——有react fiber，为什么不需要vue fiber呢？ 
https://juejin.cn/post/7077545184807878692
react因为先天的不足——无法精确更新，所以需要react fiber把组件渲染工作切片；而vue基于数据劫持，更新粒度很小，没有这个压力；
react fiber这种数据结构使得节点可以回溯到其父节点，只要保留下中断的节点索引，就可以恢复之前的工作进度；
链接：https://juejin.cn/post/7077545184807878692

「React」问：React事件机制
React 事件合成的概念：React 应用中，元素绑定的事件并不是原生事件，而是React 合成的事件，比如 onClick 是由 click 合成，onChange 
是由 blur ，change ，focus 等多个事件合成。
React的事件和普通的HTML事件有什么不同？
区别： 
对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；
对于事件函数处理语法，原生事件为字符串，react 事件为函数；
react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为。

合成事件是 react 模拟原生 DOM 事件所有能力的一个事件对象，其优点如下：
兼容所有浏览器，更好的跨平台；
将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。
方便 react 统一管理和事务机制。
链接：https://juejin.cn/post/7090079281434329125

Hooks 出现本质上原因是： https://juejin.cn/post/7090080837412061214
1 让函数组件也能做类组件的事，有自己的状态，可以处理一些副作用，能获取 ref ，也能做数据缓存。
2 解决逻辑复用难的问题。
3 放弃面向对象编程，拥抱函数式编程。
4.类组件过于复杂，逻辑太多，导致臃肿，
5.this指向问题

react hooks 下使用redux
https://blog.csdn.net/weixin_41900457/article/details/107344055
react hooks中使用redux
hooks中使用redux需要依靠react-redux提供的 useSelector 与 useDispatch进行state取值与dispatch执行修改操作
useSelector会根据接受的函数返回需要的状态值，如下面的number
useDispatch会返回一个操作函数，返回的操作函数可以接收一个action执行状态值的修改
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Test = () => {
  const number = useSelector(state => state.number)
  const dispatch = useDispatch()
  return (
      <div>
        <div>{ this.props.number }</div>
        <button onClick={() => { dispatch({ type: 'INCREMENT', payload: 10 }) }}>增加10</button>
        <button onClick={() => { dispatch({ type: 'DECREMMENT', payload: 5 }) }}>减少5</button>
      </div>
    )
}
export default Test

基于 useState 的用法，我们尝试着自己实现一个 useState
var _state; // 把 state 存储在外面
function useState(initialValue) {
  _state = _state | initialValue; // 如果没有 _state，说明是第一次执行，把 initialValue 复制给它
  function setState(newState) {
    _state = newState;
    render();
  }
  return [_state, setState];
}

useContext https://juejin.cn/post/6844903955923746830
useContext 可以实现共享状态最大的改变是可以在使用 Counter 的时候不必在包裹 Children 了，比方说我们先创建一个上下文， 
这个上下文里头有一个名为 count 的 state，以及一个修改 count 的方法 setCount
创建上下文

import React, { createContext, useState } from 'react';
import { Counter } from './Counter'
export const CountContext = createContext()
function Example2() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <CountContext.Provider value={count,setCount}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example2;

import React, { useContext} from 'react';
import {CountContext} from './Example2'
export function Counter() {
  const {count,setCount} = useContext(CountContext)  //一句话就可以得到count
  return (
    <h2>{count}</h2>
    <button onClick={() => { setCount(count + 1) }}>count</button>
  )
}

setCount useState 给相同的值，不会重渲染 ----------------

React18 新特性解读 & 完整版升级指南
https://juejin.cn/post/7094037148088664078#heading-4

React 18 新特性 https://www.bilibili.com/video/BV1US4y1P7CC?spm_id_from=333.337.search-card.all.click
新特性
一、 Render API     ---- creatRoot
二、 setState 自动批量更新state ，减少渲染次数 
  总结：
  在 18 之前，只有在react事件处理函数中，才会自动执行批处理，其它情况会多次更新
  在 18 之后，任何情况都会自动执行批处理，多次更新始终合并为一次
三、flushSync
四、关于卸载组件时的更新状态警告
五、关于 React 组件的返回值
  在 React 17 中，如果你需要返回一个空组件，React只允许返回null。如果你显式的返回了 undefined，控制台则会在运行时抛出一个错误。
  在 React 18 中，不再检查因返回 undefined 而导致崩溃。既能返回 null，也能返回 undefined（但是 React 18 的dts文件还是会检查，
  只允许返回 null，你可以忽略这个类型错误）。
六、Strict Mode

七、 Suspense 不再需要 fallback 来捕获

新的 API
一、useId
二、useSyncExternalStore
三、useInsertionEffect

Concurrent Mode（并发模式）

React中路由有哪些常用组件？说明它们的作用？

BrowserRouter，在需要使用路由的页面中引入；
Switch，路由选择器
Route，路由配置规则
Redirect，路由重定向
Link，路由导航
NavLink，带activeClass的路由导航
链接：https://juejin.cn/post/7090758609876975624

react测试框架
jest react Testing Library

useMemo、useCallbac的原理及实现

22、实现add函数  https://juejin.cn/post/7023906112843808804
题目描述：实现一个 add 方法 使计算结果能够满足如下预期：
add(1)(2)(3)()=6
add(1,2,3)(4)()=10


React 18 新特性 https://www.bilibili.com/video/BV1US4y1P7CC?spm_id_from=333.337.search-card.all.click
新特性
一、 Render API     ---- creatRoot
二、 setState 自动批量更新state ，减少渲染次数 
  总结：
  在 18 之前，只有在react事件处理函数中，才会自动执行批处理，其它情况会多次更新
  在 18 之后，任何情况都会自动执行批处理，多次更新始终合并为一次
3.并发渲染  Concurrent

https://www.pzijun.cn/blog/5/1.1.html#%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BA%86%E8%A7%A3-react-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%90%97%EF%BC%9F
多个组件的执行顺序
挂载阶段
父组件 getDerivedStateFromProps —> 同步子组件 getDerivedStateFromProps 
—> 同步子组件 componentDidMount —> 父组件 componentDidMount 
—> 异步子组件 getDerivedStateFromProps —> 异步子组件 componentDidMount

更新阶段
父组件 getDerivedStateFromProps —> 父组件 shouldComponentUpdate 
—> 子组件 getDerivedStateFromProps —> 子组件 shouldComponentUpdate 
—> 子组件 getSnapshotBeforeUpdate —> 父组件 getSnapshotBeforeUpdate 
—> 子组件 componentDidUpdate —> 父组件 componentDidUpdate

卸载阶段
componentWillUnmount()，顺序为 父组件的先执行，子组件按照在 JSX 中定义的顺序依次执行各自的方法。

Redux 是如何将 State 注入到 React 组件上去
答题思路
首先明确与 React 产生关联的是 React-Redux 这个库
Redux 的原理就是一个发布订阅器，帮我们用一个变量存储所有的 State，并且提供了发布功能来修改数据，以及订阅功能来触发回调 + 50
而 React-Redux 的作用就是订阅 Store 里数据的更新，他包含两个重要元素，Provider 和 connect 方法 +10
Provider 的作用就是通过 Context API 把 Store 对象注入到 React 组件上去 +20
而 connect 方法就是一个高阶组件，在高阶组件里通过订阅 Store 中数据的更新，从而通过调用 setState 方法来触发组件更新 +20

React hook 底层是基于链表实现，调用的条件是每次组件被render的时候都会顺序执行所有的hooks。

useImperativeHandle	可以让你在使用 ref 时自定义暴露给父组件的实例值。 


Hooks https://www.yuque.com/alexwjj/cxh60c/rx2qyp
实现原理
● 底层依赖顺序链表，每次进行render时都需要按顺序查找更新

React Hooks 解决了哪些问题？
● 在组件之间复用状态逻辑很难
● 复杂组件变得难以理解
● 难以理解的 class

useEffect 与 useLayoutEffect 的区别
useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景；
而 useLayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。
也正因为是同步处理，所以需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞。

【React】万字长文！100+个让你事半功倍的常用 React Hooks 和工具包 
https://juejin.cn/post/7196943285381464101


好想用Typescript+React hooks开发啊!（嘴对嘴解释）
https://juejin.cn/post/6844904085024407566


React Hooks 实现原理 🔥🔥🔥
原理？
Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。
在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用。
链接：https://juejin.cn/post/7085609851720024072


「react进阶」一文吃透react-hooks原理
https://juejin.cn/post/6944863057000529933


React系列- 图解：React Hook闭包问题
https://juejin.cn/post/7239584269894189115?utm_source=gold_browser_extension
const Demo = () => {

  const [a, setA] = useState(1)
  const ref = useRef()
  ref.current= a;
  
  useEffect(() => {
      setInterval(() => {
          console.log("hook state:", ref.current)
      }, 1000)
  }, [a])
  console.log("Demo-State-A:", a)

  return <Card className={styles.card_content}>
      <Button onClick={() => setA(v => v + 1)}>点击hook A +1 </Button>
  </Card>

}


Q：说下 React hooks 实现原理
A：闭包、Fiber、链表

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用


useEffect(fn, []) 和 componentDidMount 有什么差异
useEffect(fn, [])和componentDidMount都是React中用于处理组件生命周期的方法。它们的主要区别有两方面：
语法不同

componentDidMount是一个类组件的生命周期方法，在类组件中使用，它的语法如下：
componentDidMount() {
  // componentDidMount的代码
}

而useEffect是一个React Hooks，在函数式组件中使用，它的语法如下：
useEffect(() =&gt; {
  // useEffect的代码
}, [])


触发时机不同

componentDidMount方法仅在组件首次挂载到DOM树上时执行一次，用于初始化渲染及其后续操作。而useEffect可以在组件挂载到DOM树上后和后续更新时都进行执行。
当useEffect第二个参数为空数组[]时，它的作用和componentDidMount类似，只会在组件首次渲染后执行一次。当组件被更新时，useEffect会检查其依赖项，并根据变化执行相应的操作。如果依赖项为空或没有依赖项，每次更新都会执行useEffect中的代码。
下面是使用useEffect模拟componentDidMount的示例：
function Example() {
  useEffect(() =&gt; {
    // componentDidMount的代码
  }, []) // 第二个参数为空数组
  return &lt;div&gt;Example&lt;/div&gt;
}

在实际开发中，我们可以根据业务需要选择使用componentDidMount或useEffect来进行组件初始化操作，但是需要注意它们的语法和触发时机的区别。



Q: useMemo，useCallback 的区别，你是如何看待这两个 api 的意义，在什么场景下会使用它
A: useMemo 缓存值，useCallback 缓存函数。两个函数的用法很像

Q: 为什么 useState 不能在判断语句中声明？ 
A：官网里写了只在最顶层使用 Hooks。不要在循环，条件或嵌套函数中调用 Hook，确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。
state 是以链表的数据结构存在，多个 state 之间同构 next 进行关联。假设有 3 个 state，A、B、C。如果 B 在判断语句中，那么就会出现 A，B
的状态能够及时更新，但是 C 不会更新。因为调用 2 次 useState，只会更新两次 state，在 state 的链表中，A.next ->B，B.next -> C
那么就只会更新 A、B。C 不会更新，导致一些不可预知的问题  