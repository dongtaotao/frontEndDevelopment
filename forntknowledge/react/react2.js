JSX语法糖本质
JSX是语法糖，通过babel转成React.createElement函数，在babel官网上可以在线把JSX转成React的JS语法  

二、react中循环要用key的原理
　　原理在于优化diff算法。
　　当更新时组件时，会调用diff算法。但是diff算法并没有那么智能，当我们渲染列表时，
假如我们只是更改了顺序，而没有做其他任何操作，diff算法对比新旧vdom，会认为是props改变了，就会重新渲染。
　　为了解决这个问题，引入了key，key是react中的保留字段，他要是唯一的，不能变的，不能用index，
因为如果数组的顺序变了，diff时就会产生一些错乱。如果加上了key，react就能知道新旧vdom只是
换了位置，他就会采用另外一种方式，比如创建新的，删除旧的，或者其他方式。当然，其他的组件也
会触发更新，只不过不会改变props了。

链接：https://juejin.cn/post/6917451880901640200

代码分割的原理
分片打包的原理
import动态加载的功能是webpack实现的，通过一些插件，在编译时候把动态import的模块单独打包，再在webpack运行时代码中将之拉取并执行。
动态import实际是返回一个Promise，该Promise成功时候会resolve该模块。因此使用异步加载的模块都需要在.then方法中获取该模块后再使用。
React.lazy是接受一个function，然后调用该function返回的一个Promise，在Promise的resolve中取到该组件进行渲染。
React.Suspense应该是监测子组件树中通过React.lazy加载的异步组件，以决定渲染fallbak时机。 

react-redux原理
通过context，让每个子组件可以获取store，然后通过connect函数，将子组件外包一层组件，
在这层组件中进行state的数据处理，在通过props的方式传递给子组件
import MyContext from './context' // 模拟实现
import React from 'react'

function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    class HOC extends React.Component {
      static contextType = MyContext
      state = {}
      componentDidMount() {
        this.context.store.subscribe(this.upDate)
      }
      componentWillUnmount() {
        this.context.store.unsubscribe(this.upDate)
      }
      upDate = () => {
        this.setState({})
      }
      render() {
        const store = this.context.store
        const newProps = {
          ...this.props,
          ...mapStateToProps(store.getState(), this.props),
          ...mapDispatchToProps(store.getState(), this.props)
        }
        return <Component {...newProps} />
      }
    }
    return HOC
  }
}
https://juejin.cn/post/6917451880901640200#heading-21

「react进阶」年终送给react开发者的八条优化建议(篇幅较长，占用20-30分钟)
https://juejin.cn/post/6908895801116721160

React 的生命周期发生变化和改进的原因都是因为React 项目使用成为“Fiber”的核心架构重写了React。
Fiber使原来React 15的同步渲染变成了异步渲染，避免阻塞React 主线程。
在React 16之前，我们使用setState更新组件，React都会生成一个新的虚拟DOM,通过与上一次的DOM进行
diff对比后，再定向更新真实的DOM。这是一个同步渲染的递归过程，就如同走楼梯一样。
如果页面的布局复杂嵌套很深，那么递归调用的时间就会很长，那么的主线程就会被js一直占用着，任何交互，
布局，渲染都会停止，那给用户呈现的画面就是很卡顿。
而使用Fiber重构之后就解决了这个问题，Fiber将漫长的更新任务进行切片成小任务。执行完一个小任务，
就将主线程交换回去，看看是否有优先级更高的任务需要处理，这样就避免了同步更新造成UI阻塞的问题。
使用Fiber进行切片后，异步的渲染任务就变成了可打断的，执行过程就变成了如下的模式：

同步到异步
从递归到循环 遍历
链接：https://juejin.cn/post/6886343709504307214

为组件创建错误边界
static getDerivedStateFromError() 和 componentDidCatch()。

getSnapshotBeforeUpdate(prevProps, prevState)可以在更新之前获取最新的渲染数据，
它的调用是在 render 之后， update 之前；

diff算法?
把树形结构按照层级分解，只比较同级元素。
给列表结构的每个单元添加唯一的key属性，方便比较。
React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）
合并操作，调用 component 的 setState 方法的时候, React 将其标记为 - dirty.到每一个事件循环结束, React 检查所有标记
dirty的 component重新绘制.
选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能

useContext: 获取 context 对象
useReducer: 类似于 Redux 思想的实现，但其并不足以替代 Redux，可以理解成一个组件内部的 redux:
并不是持久化存储，会随着组件被销毁而销毁；
属于组件内部，各个组件是相互隔离的，单纯用它并无法共享数据；
配合useContext的全局性，可以完成一个轻量级的 Redux；(easy-peasy)
useCallback: 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；
useMemo: 用于缓存传入的 props，避免依赖的组件每次都重新渲染；
useRef: 获取组件的真实节点；
useLayoutEffect
DOM更新同步钩子。用法与useEffect类似，只是区别于执行时间点的不同
useEffect属于异步执行，并不会等待 DOM 真正渲染后执行，而useLayoutEffect则会真正渲染后才触发；
可以获取更新后的 state；

setState到底是异步还是同步?
有时表现出同步，有时表现出异步
setState 只有在 React 自身的合成事件和钩子函数中是异步的，在原生事件和 setTimeout 中都是同步的
setState 的异步并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成
事件和钩子函数中没法立马拿到更新后的值，形成了所谓的异步。当然可以通过 setState 的第二个参数
中的 callback 拿到更新后的结果
setState 的批量更新优化也是建立在异步（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会
批量更新，在异步中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行覆盖，去最后
一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新
合成事件中是异步
钩子函数中的是异步
原生事件中是同步
setTimeout中是同步

在 原生事件 和 setTimeout 中，setState是同步的，可以马上获取更新后的值；
原因: 原生事件是浏览器本身的实现，与事务流无关，自然是同步；而setTimeout是放置于定时器线程中延后执行，此时事务流已结束，因此也是同步；

调用 setState 之后发生了什么
在代码中调用 setState 函数之后，React 会将传入的参数与之前的状态进行合并，然后触发所谓的调和
过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并
且着手重新渲染整个 UI 界面。在 React 得到元素树之后，React 会计算出新的树和老的树之间的差异，然后
根据差异对界面进行最小化重新渲染。通过 diff 算法，React
能够精确制导哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

58 ssr原理是什么？
核心原理其实就是借助虚拟DOM来实现react代码能够在服务器运行的，node里面可以执行react代码

hooks 为什么不能放在条件判断里 ***************************************
  以 setState 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在
  memoizeState 属性中
  update 阶段，每次调用 setState，链表就会执行 next 向后移动一步。如果将 setState 写在条
  件判断中，假设条件判断不成立，没
  有执行里面的 setState 方法，会导致接下来所有的 setState 的取值出现偏移，从而导致异常发生。

64 为什么 React 元素有一个 $$typeof 属性
目的是为了防止 XSS 攻击。因为 Synbol 无法被序列化，所以 React 可以通过有没有
$$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

如果没有 $$typeof 这个属性，react 会拒绝处理该元素。
在 React 的古老版本中，下面的写法会出现 XSS 攻击：

Redux内部原理 内部怎么实现dispstch一个函数的
// 部分转为ES5代码，运行middleware函数会返回一个新的函数，如下：
return ({ dispatch, getState }) => {
  // next实际就是传入的dispatch
  return function (next) {
      return function (action) {
          // redux-thunk核心
          if (typeof action === 'function') {
              return action(dispatch, getState, extraArgument);
          }
          return next(action);
      };
  };
}

diff算法的作用
计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。

React的diff算法
（1）什么是调和？
将Virtual DOM树转换成actual DOM树的最少操作的过程 称为 调和 。
（2）什么是React diff算法？
diff算法是调和的具体实现。
diff策略
React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度
策略一（tree diff）：
Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
策略二（component diff）：
拥有相同类的两个组件 生成相似的树形结构，
拥有不同类的两个组件 生成不同的树形结构。
策略三（element diff）：
对于同一层级的一组子节点，通过唯一id区分。
作者：小进进不将就
链接：https://www.jianshu.com/p/3ba0822018cf

http://interview.poetries.top/docs/simply.html#_28-react-17-%E5%B8%A6%E6%9D%A5%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98
React 17 带来了哪些改变
新的 JSX 转换逻辑
事件系统重构
Lane 模型的引入

1. 重构 JSX 转换逻辑
在过去，如果我们在 React 项目中写入下面这样的代码：

function MyComponent() {
  return <p>这是我的组件</p>
}
React 是会报错的，原因是 React 中对 JSX 代码的转换依赖的是 React.createElement 这个函数。因此但凡我们在代码中包含了 JSX，
那么就必须在文件中引入 React，像下面这样：

import React from 'react';
function MyComponent() {
  return <p>这是我的组件</p>
}
而 React 17 则允许我们在不引入 React 的情况下直接使用 JSX。这是因为在 React 17 中，编译器会自动帮我们引入 JSX 的解析器，也就是说像下面
这样一段逻辑：
function MyComponent() {
  return <p>这是我的组件</p>
}

事件系统在 React 17 中的重构要从以下两个方面来看：

卸掉历史包袱
拥抱新的潮流
2.1 卸掉历史包袱：放弃利用 document 来做事件的中心化管控
React 16.13.x 版本中的事件系统会通过将所有事件冒泡到 document 来实现对事件的中心化管控

// 如果 action 是个函数，就调用这个函数
// 如果 action 不是函数，就传给下一个中间件
// 发现 action 是函数就调用
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};
export default thunk;

自定义hooks ///////////==========
自定义钩子(useXxxxx): 基于 Hooks 可以引用其它 Hooks 这个特性，我们可以编写自定义钩子，如上面的useMounted。又例如，我们需要每个页面自定义标题:

function useTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

//使用
function Home() {
  const title = 'shouye';
  useTitle(title);

  return (
    <div>{title}</div>
  )
}

React-Router-dom
React Router中的组件主要分为三类：
路由器，例如 BrowserRouter 和 HashRouter 
路由匹配器： 例如Route和Switch
导航：例如Link, NavLink, and Redirect
exact

HOC(高阶组件)
属性代理 (Props Proxy): 返回出一个组件，它基于被包裹组件进行 功能增强；
function proxyHoc(Comp) {
	return class extends React.Component {
		render() {
			const newProps = {
				name: 'tayde',
				age: 1,
			}
			return <Comp {...this.props} {...newProps} />
		}
	}
}
反向继承 (Inheritance Inversion): 返回出一个组件，继承于被包裹组件，常用于以下操作
function IIHoc(Comp) {
  return class extends Comp {
      render() {
          return super.render();
      }
  };
}

React如何进行组件/逻辑复用?
高阶组件:
  属性代理
  反向继承
渲染属性
react-hooks

vue与react虚拟dom的区别是：
virtual DOM不一样,vue会跟踪每一个组件的依赖关系, 不需要重新渲染整个组件树.
而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要
shouldComponentUpdate这个生命周期函数方法来进行控制。

vue与react的区别你知道的有哪些
相同点：
1.都支持服务端渲染
2.都有virtual DOM 组件化开发 通过props参数进行数据的传递 都实现了webConponent的规范
3.数据驱动视图
4.都有native的方案，react的react native vue的weex
5.都有状态管理 react有redux vue有自己的vuex
不同点：
1react严格上只针对MVC的view层 vue则是MVVM层
2virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.
  而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
3.组件写法不一样, React推荐的做法是 JSX + inline style, 也就是把HTML和CSS全都写进JavaScript了,即’all in js’;
  Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,js写在同一个文件;
4.数据绑定: vue实现了数据的双向绑定,react数据流动是单向的
5.state对象在react应用中不可变的,需要使用setState方法更新状态;
在vue中,state对象不是必须的,数据由data属性在vue对象中管理；
链接：https://juejin.cn/post/6976127117679394846

要了解 Fiber，我们首先来看为什么需要它
问题: 随着应用变得越来越庞大，整个更新渲染的过程开始变得吃力，大量的组件渲染会导致主进程长时间被占用，导致一些动画或高频操作出现卡顿和掉帧的
情况。而关键点，便是 同步阻塞。在之前的调度算法中，React 需要实例化每个类组件，生成一颗组件树，使用 同步递归 的方式进行遍历渲染，而这个过程
最大的问题就是无法 暂停和恢复。
解决方案: 解决同步阻塞的方法，通常有两种: 异步 与 任务分割。而 React Fiber 便是为了实现任务分割而诞生的
简述
在 React V16 将调度算法进行了重构， 将之前的 stack reconciler 重构成新版的 fiber reconciler，变成了具有链表和指针的 单链表树遍历算
法。通过指针映射，每个单元都记录着遍历当下的上一步与下一步，从而使遍历变得可以被暂停和重启
这里我理解为是一种 任务分割调度算法，主要是 将原先同步更新渲染的任务分割成一个个独立的 小任务单位，根据不同的优先级，将小任务分散
到浏览器的空闲时间执行，充分利用主进程的事件循环机制

45 React的Fiber工作原理，解决了什么问题
React Fiber 是一种基于浏览器的单线程调度算法。
React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。但是之前数据结构不支持这样的实现异步 diff，于是
React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能做到异步可更新了

#React 父组件如何调用子组件中的方法？
如果是在方法组件中调用子组件（>= react@16.8），可以使用 useRef 和 useImperativeHandle:
const { forwardRef, useRef, useImperativeHandle } = React;

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }));
  return <h1>Hi</h1>;
});

const Parent = () => {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
};
如果是在类组件中调用子组件（>= react@16.4），可以使用 createRef:
const { Component } = React;

class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}
class Child extends Component {
  getAlert() {
    alert('getAlert from Child');
  }

  render() {
    return <h1>Hello</h1>;
  }
}
说说Context有哪些属性？
context属于一种解决组件间层级过多传递数据的问题，避免了层层嵌套的通过props传递的形式，同时对于不需要使用到redux时，是一种解决方案，关于组件的
复用性变差的问题，我觉得是可以通过高阶组件和context配合来解决的，因为react-redux使用的就是这样的形式；
主要的形式：createContext(value)：创建一个context实例；其中的参数为当前数据的默认值，只有没在Provider中指定value时，才会生效；
Context.Provider：生产者，数据提供方；通过value属性来定义需要被传递的数据
Context.Consumer：消费者，数据获取方；根据是函数组件还是class组件，有不同的使用形式；class组件可以指定contextType来确定要使用哪一个context对象
的值，函数组件需要使用回调函数的形式来获取context的值；需要显示的指定context对象；
————————————————
原文链接：https://blog.csdn.net/weixin_43392489/article/details/121208158

注意事项:
setState 合并，在 合成事件 和 生命周期钩子 中多次连续调用会被优化为一次；
当组件已被销毁，如果再次调用setState，React 会报错警告，通常有两种解决办法
  将数据挂载到外部，通过 props 传入，如放到 Redux 或 父级中；
  在组件内部维护一个状态量 (isUnmounted)，componentWillUnmount中标记为 true，在setState前进行判断；

虚拟 DOM 的优点主要有三点：改善大规模DOM操作的性能、规避 XSS 风险、能以较低的成本实现跨平台开发。
虚拟 DOM 的缺点在社区中主要有两点
内存占用较高，因为需要模拟整个网页的真实 DOM
高性能应用场景存在难以优化的情况，类似像 Google Earth 一类的高性能前端应用在技术选型上往往不会选择 React 

16. 为什么使用jsx的组件中没有看到使用react却需要引入react？
本质上来说JSX是React.createElement(component, props, ...children)方法的语法糖。在React 17之前，如果使用了JSX，
其实就是在使用React， babel 会把组件转换为 CreateElement 形式。在React 17之后，就不再需要引入，因为 babel 已经可以帮我们自动引入react。

链接：https://juejin.cn/post/6940942549305524238      