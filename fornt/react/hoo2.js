「React」Hooks入门介绍篇(一)
https://juejin.cn/post/7046641639523090469

「React」Hooks入门介绍篇(二)
https://juejin.cn/post/7046643385939001351

react hooks 和 react-redux hooks 应用场景 **********************************************🔥
https://juejin.cn/post/6844903955923746830

「React」问：React事件机制
React 事件合成的概念：React 应用中，元素绑定的事件并不是原生事件，而是React 合成的事件，比如 onClick 是由 click 合成，onChange 是由 blur ，change ，focus 等多个事件合成。
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


setCount useState 给相同的值，不会重渲染
