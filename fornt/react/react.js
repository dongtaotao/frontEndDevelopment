
「2021」高频前端面试题汇总之React篇（下） 
https://juejin.cn/post/6940942549305524238

「2021」高频前端面试题汇总之React篇（上）
https://juejin.cn/post/6941546135827775525

(中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂
https://juejin.cn/post/6844903801153945608

前端React面试题总结
https://zhuanlan.zhihu.com/p/441407315?utm_source=tuicool&utm_medium=referral

1. React 事件机制
React并不是将click事件绑定到了div的真实DOM上，而是在document处监听了所有的事件，
当事件发生并且冒泡到document处的时候，React将事件内容封装并交由真正的处理函数运行。
这样的方式不仅仅减少了内存的消耗，还能在组件挂在销毁时统一订阅和移除事件。
除此之外，冒泡到document上的事件也不是原生的浏览器事件，而是由react自己实现的合成事件
（SyntheticEvent）。因此如果不想要是事件冒泡的话应该调用event.preventDefault()方法，
而不是调用event.stopProppagation()方法。
实现合成事件的目的如下：

合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力；
对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象。如果你有很多的事件监听，那么就需要分配
很多的事件对象，造成高额的内存分配问题。但是对于合成事件来说，有一个事件池专门来管理它们的创建
和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而
便于下次复用事件对象。

Render props 官方解释∶
"render prop"是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
// DataProvider组件内部的渲染逻辑如下
class DataProvider extends React.Components {
  state = {
    name: 'Tom'
  }

  render() {
  return (
      <div>
        <p>共享数据组件自己内部的渲染逻辑</p>
        { this.props.render(this.state) }
    </div>
  );
  }
}

// 调用方式
<DataProvider render={data => (
  <h1>Hello {data.name}</h1>
)}/>

9.1 调用 setState 之后发生了什么？
简单来说：
合并参数对象，触发调和过程
计算新树和老树差异（Diff）
根据差异进行最小化重新渲染

9.2 setState 是同步还是异步？
回答：有时候同步，有时候异步。
setState 在合成事件和钩子函数中是异步的，在原生事件和 setTimeout 是同步的。
setState 的异步，并不是说内部由异步代码实现，它本身执行的过程和代码是同步的，只是合成事件和钩子
函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，从而形成了所谓的异步。
setState 可以通过第二个参数 setState(partialState, callback)，在回调方法中拿到更新后的结果。

5. 对React-Fiber的理解，它解决了什么问题？

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案

（2）getSnapshotBeforeUpdate
getSnapshotBeforeUpdate(prevProps, prevState)
这个方法在 render 之后，componentDidUpdate 之前调用，有两个参数 prevProps
和 prevState，表示更新之前的 props 和 state，这个函数必须要和 componentDidUpdate
一起使用，并且要有一个返回值，默认是 null，这个返回值作为第三个参数传给componentDidUpdate。

（3）componentDidUpdate
componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法。 该阶段通常进行以下操作：
当组件更新后，对 DOM 进行操作；
如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；
（例如，当 props 未发生变化时，则不会执行网络请求）。
componentDidUpdate(prevProps, prevState, snapshot){}
复制代码
该方法有三个参数：
prevProps: 更新前的props
prevState: 更新前的state
snapshot: getSnapshotBeforeUpdate()生命周期的返回值

4. React Hook 的使用限制有哪些？
React Hooks 的限制主要有两条：
不要在循环、条件或嵌套函数中调用 Hook；
在 React 的函数组件中调用 Hook。

5.为什么要合成事件机制
更好的兼容性和跨平台，摆脱传统DOM事件
挂载到document，减少内存消耗，避免频繁解绑
方便事件的统一管理，如：事务机制

7.列表渲染为何要用key
必须用 key，且不能是 index 和 random
diff 算法中通过 tag 和 key 判断，是否是同一个节点
减少渲染次数，提升渲染性能

 redux 中间件
参考回答：
中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action ->
middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过
滤，日志输出，异常报告等功能。
常见的中间件：redux-logger：提供日志输出；redux-thunk：处理异步操作；redux-promise：
处理异步操作；actionCreator 的返回值是 promise
 redux 有什么缺点
参考回答：
1.一个组件所需要的数据，必须由父组件传过来，而不能像 flux 中直接从 store 取。
2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新
render，可能会有效率影响，或者需要写复杂的 shouldComponentUpdate 进行判断。
 React 组件的划分业务组件技术组件？
参考回答：
根据组件的职责通常把组件分为 UI 组件和容器组件。UI 组件负责 UI 的呈现，容器组
件负责管理数据和逻辑。两者通过

虚拟DOM可提升性能, 无须整体重新渲染, 而是局部刷新 JS对象, diff算法

11.如何判断js运行在浏览器中还是node中？
判断有无全局对象global和window

Fiber 架构简析
Fiber 是 React 16 对 React 核心算法的一次重写。你只需要 get
到这一个点：Fiber 会使原本同步的渲染过程变成异步的。
在 React 16 之前，每当我们触发一次组件的更新，React 都会构建一棵新
的虚拟 DOM 树，通过与上一次的虚拟 DOM 树进行 diff，实现对 DOM 的定向
更新。这个过程，是一个递归的过程。下面这张图形象地展示了这个过程的特征：

如图所示，同步渲染的递归调用栈是非常深的，只有最底层的调用
返回了，整个渲染过程才会开始逐层返回。这个漫长且不可打断的更新过程，将会
带来用户体验层面的巨大风险：同步渲染一旦开始，便会牢牢抓住主线程不放，直到递
归彻底完成。在这个过程中，浏览器没有办法处理任何渲染之外的事情，会进入一种无法处
理用户交互的状态。因此若渲染时间稍微长一点，页面就会面临卡顿甚至卡死的风险。

而 React 16 引入的 Fiber 架构，恰好能够解决掉这个风险：Fiber 会将一个
大的更新任务拆解为许多个小任务。每当执行完一个小任务时，渲染线程都会把主线程交
回去，看看有没有优先级更高的工作要处理，确保不会出现其他任务被“饿死”的情况，进而避免
同步渲染带来的卡顿。在这个过程中，渲染线程不再“一去不回头”，而是可以被打断的，这就是所谓的“异步渲染”，

18. React.Children.map和js的map有什么区别？
JavaScript中的map不会对为null或者undefined的数据进行处理，而React.Children.map中
的map可以处理React.Children为null或者undefined的情况。

19. 对React SSR的理解
服务端渲染是数据与模版组成的html，即 HTML = 数据 ＋ 模版。将组件或
页面通过服务器生成html字符串，再发送到浏览器，最后将静态标记"混合"为客户端
上完全交互的应用程序。页面没使用服务渲染，当请求页面时，返回的body里为空，之后
执行js将html结构注入到body里，结合css显示出来;

11. React的严格模式如何使用，有什么用处？ 
StrictMode 目前有助于：
识别不安全的生命周期
关于使用过时字符串 ref API 的警告
关于使用废弃的 findDOMNode 方法的警告
检测意外的副作用
检测过时的 context API

14 为什么 React 元素有一个 $$typeof 属性
目的是为了防止 XSS 攻击。因为 Synbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element
对象是从数据库来的还是自己生成的。

用 React 实现服务器渲染有以下好处：
1. 利于 SEO：React 服务器渲染的方案使你的页面在一开始就有一个 HTML DOM 结构，
方便 Google 等搜索引擎的爬虫能爬到网页的内容。
2. 提高首屏渲染的速度：服务器直接返回一个填满数据的 HTML，而不是在请求了 HTML
  后还需要异步请求首屏数据。
3. 前后端都可以使用 js

useEffect(() => {
	// 组件挂载后执行事件绑定
	console.log('on')
	addEventListener()
	// 组件 update 时会执行事件解绑
	return () => {
		console.log('off')
		removeEventListener()
	}
}, [source]);

// 每次 source 发生改变时，执行结果(以类定义的生命周期，便于大家理解):
// --- DidMount ---
// 'on'
// --- DidUpdate ---
// 'off'
// 'on'
// --- DidUpdate ---
// 'off'
// 'on'
// --- WillUnmount --- 
// 'off'

其它内置钩子:
useContext: 获取 context 对象
useReducer: 类似于 Redux 思想的实现，但其并不足以替代 Redux，可以理解成一个组件内部的 redux:
  并不是持久化存储，会随着组件被销毁而销毁；
  属于组件内部，各个组件是相互隔离的，单纯用它并无法共享数据；
  seContext的全局性，可以完成一个轻量级的 Redux；(easy-peasy)
useCallback: 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果； useCallback https://www.cnblogs.com/sk-3/p/13808854.html
useMemo: 用于缓存传入的 props，避免依赖的组件每次都重新渲染；    useMemo 使用指南 https://zhuanlan.zhihu.com/p/411190859
useRef: 获取组件的真实节点；
useLayoutEffect:
DOM更新同步钩子。用法与useEffect类似，只是区别于执行时间点的不同。
useEffect属于异步执行，并不会等待 DOM 真正渲染后执行，而useLayoutEffect则会真正渲染后才触发；
可以获取更新后的 state；
作者：郭东东
链接：https://juejin.cn/post/6844903801153945608

错误边界
组件内的 JavaScript 错误会导致 React 的内部状态被破坏，并且在下一次渲染时 产生 可能无法追踪的 错误。

react diff 原理
把树形结构按照层级分解，只比较同级元素。
给列表结构的每个单元添加唯一的 key 属性，方便比较。
React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

调用 setState 之后发生了什么？
在代码中调用setState函数之后，React 会将传入的参数对象
与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，
React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在
React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行
最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改
变，这就保证了按需更新，而不是全部重新渲染。

理解React：Fiber架构和新旧生命周期
https://juejin.cn/post/6921559837549690887

State Hook
https://juejin.cn/post/6918896729366462471#heading-15
useContext
用来处理多层级传递数据的方式，在以前组件树中，跨层级祖先组件想要给孙子组件传递数据的时候，
除了一层层 props 往下透传之外，我们还可以使用 React Context API 来帮我们做这件事。使用例子如下所示

useReducer
比 useState 更适用的场景：例如 state 逻辑处理较复杂且包含多个子值，或者下一个 state 依赖于之前
的 state 等

Memo当父组件重新渲染时，子组件也会重新渲染，即使子组件的 props 和 state 都没有改变
import React, { memo, useState } from 'react';
// 子组件
const ChildComp = () => {
  console.log('ChildComp...');
  return (<div>ChildComp...</div>);
};
// 父组件
const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>hello world {count}</div>
      <div onClick={() => { setCount(count => count + 1); }}>点击增加</div>
      <ChildComp/>
    </div>
  );
};
export default Parent;

// 子组件
const ChildComp = () => {
  console.log('ChildComp...');
  return (<div>ChildComp...</div>);
};

const MemoChildComp = memo(ChildComp);

useMemo
假设以下场景，父组件在调用子组件时传递 info 对象属性，点击父组件按钮时，发现控制台会打印出子组件被渲染的信息。
import React, { memo, useState } from 'react';
// 子组件
const ChildComp = (info:{info:{name: string, age: number}}) => {
  console.log('ChildComp...');
  return (<div>ChildComp...</div>);
};

const MemoChildComp = memo(ChildComp);

// 父组件
const Parent = () => {
  const [count, setCount] = useState(0);
  const [name] = useState('jack');
  const [age] = useState(11);
  const info = { name, age };

  return (
    <div className="App">
      <div>hello world {count}</div>
      <div onClick={() => { setCount(count => count + 1); }}>点击增加</div>
      <MemoChildComp info={info}/>
    </div>
  );
};

export default Parent;

useLayoutEffect
其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect 

var condition = true;
var component = (
  <div
    value="foo"
    { ...( condition && { disabled: true } ) } 
  />
);


react
// 触发更新的三种方式
// 1. setState (作用: 修改state数据, 更新视图)
// 2. forceUpdate 强制触发更新
// 3. props 变化时, 触发更新


优先级策略: 文本框输入 > 本次调度结束需完成的任务 > 动画过渡 > 交互反馈 > 数据更新 > 不会显示但以防将来会显示的任务

React16废弃的生命周期有3个will：
componentWillMount
componentWillReceiveProps
componentWillUpdate

废弃的原因，是在React16的Fiber架构中，调和过程会多次执行will周期，不再是一次执行，失去了原有的意义。此外，多次执行，
在周期中如果有setState或dom操作，会触发多次重绘，影响性能，也会导致数据错乱
原文链接：https://blog.csdn.net/weixin_43392489/article/details/121438376

其实该变动的原因，正是由于上述提到的 Fiber。首先，从上面我们知道 React 可以分成 reconciliation 与 commit 两个阶段，对应的生命周期如下:

reconciliation:
componentWillMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate

commit:
componentDidMount
componentDidUpdate
componentWillUnmount

在 Fiber 中，reconciliation 阶段进行了任务分割，涉及到 暂停 和 重启，因此可能会导致 reconciliation 中的生命周期函数在一次更新渲染循环中被 
多次调用 的情况，产生一些意外错误。

链接：https://juejin.cn/post/6844903801153945608
class Component extends React.Component {
  // 替换 `componentWillReceiveProps` ，
  // 初始化和 update 时被调用
  // 静态函数，无法使用 this
  static getDerivedStateFromProps(nextProps, prevState) {}
  
  // 判断是否需要更新组件
  // 可以用于组件性能优化
  shouldComponentUpdate(nextProps, nextState) {}
  
  // 组件被挂载后触发
  componentDidMount() {}
  
  // 替换 componentWillUpdate
  // 可以在更新之前获取最新 dom 数据
  getSnapshotBeforeUpdate() {}
  
  // 组件更新后调用
  componentDidUpdate() {}
  
  // 组件即将销毁
  componentWillUnmount() {}
  
  // 组件已销毁
  componentDidUnmount() {}
}


React 事件系统是如何工作的
React 的事件系统沿袭了事件委托的思想。在 React 中，除了少数特殊的不可冒泡的事件（比如媒体类型的事件）无法被事件系统处理外，
绝大部分的事件都不会被绑定在具体的元素上，而是统一被绑定在页面的 document 上。当事件在具体的 DOM 节点上被触发后，
最终都会冒泡到 document 上，document 上所绑定的统一事件处理程序会将事件分发到具体的组件实例。
在分发事件之前，React 首先会对事件进行包装，把原生 DOM 事件包装成合成事件。
合成事件是 React 自定义的事件对象，它符合W3C规范，在底层抹平了不同浏览器的差异，在上层面向开发者暴露统一的、稳定的、与 DOM 原生事件相同的事件接口。
开发者们由此便不必再关注烦琐的兼容性问题，可以专注于业务逻辑的开发。
虽然合成事件并不是原生 DOM 事件，但它保存了原生 DOM 事件的引用
事件的绑定是在组件的挂载过程中完成
链接：https://juejin.cn/post/6959386304400326664

React生命周期的变化和为Fiber架构的准备 **************************++++++++++++
https://juejin.cn/post/6959811685238620191
Fiber 架构简析
Fiber 是 React 16 对 React 核心算法的一次重写，我们先get一个点：
Fiber 会使原本同步的渲染过程变成异步的。
在 React 16 之前，每当我们触发一次组件的更新，React 都会构建一棵新的虚拟 DOM 树，通过与上一次的虚拟 DOM 树进行 diff，实现对 DOM 的定向更新。
这个过程，是一个递归的过程。下面这张图形象地展示了这个过程的特征
同步渲染的递归调用栈是非常深的，只有最底层的调用返回了，整个渲染过程才会开始逐层返回。这个漫长且不可打断的更新过程，
将会带来用户体验层面的巨大风险：同步渲染一旦开始，便会牢牢抓住主线程不放，直到递归彻底完成。在这个过程中，浏览器没有办法处理任何渲染之外的事情，
  会进入一种无法处理用户交互的状态。因此若渲染时间稍微长一点，页面就会面临卡顿甚至卡死的风险
而 React 16 引入的 Fiber 架构，恰好能够解决掉这个风险：Fiber 会将一个大的更新任务拆解为许多个小任务。
每当执行完一个小任务时，渲染线程都会把主线程交回去，看看有没有优先级更高的工作要处理，确保不会出现其他任务被“饿死”的情况，
进而避免同步渲染带来的卡顿。在这个过程中，渲染线程不再“一去不回头”，而是可以被打断的，这就是所谓的“异步渲染”，它的执行过程如下图所示：
链接：https://juejin.cn/post/6959811685238620191


安装 react-loadable ,babel插件安装 syntax-dynamic-import. react-loadable是通过webpack的异步import实现的

React 中 setState 是一个宏任务还是微任务？https://www.modb.pro/db/165450
都不是
setState
就是一次同步行为，根本不存在面试官的问题。