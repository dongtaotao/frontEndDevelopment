「react进阶」年终送给react开发者的八条优化建议(篇幅较长，占用20-30分钟) https://juejin.cn/post/6908895801116721160

React18 + React-Router v6 + TypeScript + Vite2 + Ant-Design 管理系统（开源啦🎉🎉） 🔥🔥🔥
https://juejin.cn/post/7114555646820745253

React源码解析
https://www.bilibili.com/video/BV1cE411B7by?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
https://github.com/mypanda/React-Source-Code/blob/main/01-createElement.html

都 2022 年了，手动搭建 React 开发环境很难吗？ 🔥🔥=====================
https://juejin.cn/post/7087811040591675428

[2.7w字]我是这样搭建 React+Typescript项目环境的(上) 🔥🔥
https://juejin.cn/post/6860129883398668296#heading-3

[2.7w字]我是这样搭建 React+Typescript项目环境的(下)
https://juejin.cn/post/6860134655568871437

React移动端适配解决方案
https://zhuanlan.zhihu.com/p/148529375

webpack5 手动搭建前端项目（react+antd + ts）
https://juejin.cn/post/7096802032782147592

react18 https://juejin.cn/post/7078601734716653604

懂你还是得懂车帝🙌（React Hooks实战开发）  不错呀
https://juejin.cn/post/7065932470520135716

React 18 带给我们的惊喜
https://mp.weixin.qq.com/s/Pr5lMuL1ev7id9k2h2DTQQ
Automatic batching
Concurrent APIS
SSR for Suspense
New Render API

打造开箱即用的 react 移动端框架
https://juejin.cn/post/7052204193968291870

十五分钟读懂React 17  https://juejin.cn/post/6894204813970997256  ************************ https://www.bilibili.com/video/BV12i4y1L7nq
一、全新的 JSX 转换
二、事件委托的变更
   React 会由于事件委托对大多数事件执行 document.addEventListener() 
   这次React 不再将事件添加在document 上，而是添加到渲染 React 树的根 DOM 容器中：
三、事件系统相关更改
四、去除事件池
五、副作用清理时间
六、返回一致的 undefined 错误
七、原生组件栈
八、移除私有导出
九、启发式更新算法更新

阿里三面：灵魂拷问——有react fiber，为什么不需要vue fiber呢？
https://juejin.cn/post/7077545184807878692

客户端渲染 API 更新
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

SSR API 更新
自动批处理 Automatic Batching
//批处理是指：React 将多个状态更新，聚合到一次 render 中执行，以提升性能
三方库 API

那么实现合成事件的目的是什么呢？总的来说在我看来好处有两点，
分别是： https://interview2.poetries.top/docs/excellent.html#_29-6-%E4%BA%8B%E4%BB%B6%E6%9C%BA%E5%88%B6
合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力
对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象。如果你有很多的事件监听，那么就需要分配很多的事件对象，
造成高额的内存分配问题。但是对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，
就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象。

深入理解React：懒加载（lazy）实现原理 *************************
https://www.cnblogs.com/forcheng/p/13132582.html

React.lazy懒加载组件 https://www.cnblogs.com/mengff/p/12891500.html
1. React.lazy的用法
React.lazy方法可以异步加载组件文件。
const Foo = React.lazy(() => import('../componets/Foo));
React.lazy不能单独使用，需要配合React.suspense，suspence是用来包裹异步组件，添加loading效果等。

<React.Suspense fallback={<div>loading...</div>}>
    <Foo/>
</React.Suspense>
2. React.lazy原理
React.lazy使用import来懒加载组件，import在webpack中最终会调用require Ensure方法，动态插入script来请求js文件，类似jsonp的形式。

使用getDerivedStateFromProps后, 以前的方法逻辑该在哪里调用?
https://cloud.tencent.com/developer/ask/131876
https://www.jianshu.com/p/50fe3fb9f7c3
https://segmentfault.com/q/1010000037551437
componentWillReceiveProps(nextProps) {
    const { id } = this.props;
    const { id: newId } = nextProps;
    if (newId !== id) {
      // 处理逻辑
      this.handleGet(newId)
    }
  }
  state = {
    id: ''
  }
static getDerivedStateFromProps(nextProps, preState) {
    const { dispatch, id: newId } = nextProps;
    const { id } = preState;
    if (newId && newId !== id) {
      return {
        id: newId
      };
    }
    return null;
}
  
//   componentDidUpdate(_, prevState) {
//       const { id } = this.state;
//       if (id && id !== prevState.id) {
//         this.handleGet(id)
//       }
//   }
但是由于你不是以任何方式更新你的状态componentWillReceiveProps，你应该使用componentDidUpdate而不是getDerivedStateFromProps：

componentDidUpdate(prevProps){
  if ( prevProps.country !== this.props.country.length ) {
    doSomething(); //example calling redux action
  }
}

react相关面试题  ***************
https://www.cnblogs.com/jcxfighting/p/11681992.html

ref是一个函数，有什么好处？
　方便react在销毁组件重新渲染，有效清空ref引用中的东西，防止内存泄漏

为什么要使用异步组件？https://blog.csdn.net/qq_42072086/article/details/109642272  https://blog.51cto.com/liuhao9999/5146775
1.异步组件可以减少打包的结果。会将异步组件分开打包，会采用异步的方式加载组件，可以有效的解决一个组件过大的问题。
不使用异步组件，如果组件功能比较多打包出来的结果就会变大。

2.异步组件的核心可以给组件定义变成一个函数，函数里面可以用import语法，实现文件的分割加载，import语法是webpack提供的，采用的就是jsonp。
原文链接：https://blog.csdn.net/qq_42072086/article/details/109642272

异步组件按需加载这些操作都是基于打包工具的特性，比如 Webpack 的 import ～

在React中防范XSS攻击

React16废弃的生命周期和新的生命周期  https://cloud.tencent.com/developer/article/1769282
1. React16废弃的生命周期有3个will：
componentWillMount
componentWillReceiveProps
componentWillUpdate

废弃的原因：是在React16的Fiber架构中，调和过程会多次执行will周期，不再是一次执行，失去了原有的意义。此外，多次执行，在周期中如果有setState或dom操作，
会触发多次重绘，影响性能，也会导致数据错乱。

2. React16的2个新的生命周期：
getDerivedStateFromProps
getSnapshotBeforeUpdate

2.1 getDerivedStateFromProps的用法

这个周期很难用：
触发时机频繁，16.3是在props变化时触发，16.4则改为在每次组件渲染器调用，即无论props变化，组件自己setState，父组件render 都会触发
静态方法，本意是隔离访问组件实例，却造成访问组件的数据和方法十分不便，难以进行数据比较
不能setState，而是返回一个对象来更新state，使用不便，也可能触发多次更新状态
当组件实例化的时候，这个方法替代了componentWillMount()，而当接收到新的 props 时，该方法替代了 componentWillReceiveProps() 和 componentWillUpdate()
2.2 getSnapshotBeforeUpdate

在render之后，更新dom之前，state已更新。可以用来读取dom，强制用户只能在mount阶段读取dom。
getSnapshotBeforeUpdate这个周期在Fiber架构中，只会调用一次。

******************
react 中 复值同一个会周render吗？   会
this.state = {
  count : 1
}

onClick = {() => {
  this.setState({
      count: 1
  })
}}

getDerivedStateFromProps
shouldComponentUpdate

*************** this.forceUpdate()不会走shouldComponentUpdate 会走getDerivedStateFromProps

hooks 为什么不能放在条件判断里 ***************** https://interview2.poetries.top/excellent-docs/6-React.html#hooks-%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E6%94%BE%E5%9C%A8%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%E9%87%8C
以 setState 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在 memoizeState 属性中
update 阶段，每次调用 setState，链表就会执行 next 向后移动一步。如果将 setState 写在条件判断中，假设条件判断不成立，
没有执行里面的 setState 方法，会导致接下来所有的 setState 的取值出现偏移，从而导致异常发生。

高阶组件缺陷：
丢失静态函数 由于被包裹了一层，所以静态函数在外层是无法获取的
refs 属性不能透传  ref 属性由于被高阶组件包裹了一次，所以需要进行特殊处理才能获取。React 为我们提供了一个名为 React.forwardRef 的 API 来解决这一问题
props覆盖

"render prop"是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

以上可以看出，hook解决了hoc的prop覆盖的问题，同时使用的方式解决了render props的嵌套地狱的问题。hook的优点如下∶

使用直观；
解决hoc的prop 重名问题；
解决render props 因共享数据 而出现嵌套地狱的问题；
能在return之外使用数据的问题。

需要注意的是：hook只能在组件顶层使用，不可在分支语句中使用。
总结∶
Hoc、render props和hook都是为了解决代码复用的问题，但是hoc和render props都有特定的使用场景和明显的缺点。hook是react16.8更新的新的API，
让组件逻辑复用更简洁明了，同时也解决了hoc和render props的一些缺点。
链接：https://juejin.cn/post/6941546135827775525。

HOC的优缺点
优点∶ 逻辑服用、不影响被包裹组件的内部逻辑。
缺点∶hoc传递给被包裹组件的props容易和被包裹后的组件重名，进而被覆盖

对 React-Intl 的理解，它的工作原理？https://juejin.cn/post/6941546135827775525
在React-intl中，可以配置不同的语言包，他的工作原理就是根据需要，在语言包之间进行切换。

React的事件和普通的HTML事件有什么不同？
区别：
对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；
对于事件函数处理语法，原生事件为字符串，react 事件为函数；
react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为。

合成事件是 react 模拟原生 DOM 事件所有能力的一个事件对象，其优点如下：
兼容所有浏览器，更好的跨平台；
将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。
方便 react 统一管理和事务机制。

事件的执行顺序为原生事件先执行，合成事件后执行，合成事件会冒泡绑定到 document 上，
所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到document 上合成事件才会执行。
链接：https://juejin.cn/post/7073669367375855646

hook的优点如下∶
使用直观；
解决hoc的prop 重名问题；
解决render props 因共享数据 而出现嵌套地狱的问题；
能在return之外使用数据的问题。
需要注意的是：hook只能在组件顶层使用，不可在分支语句中使用。

30.给 DOM 设置和获取自定义属性
作用:有些要通过自定义属性传值
export default class Thirty extends React.Component {
  click = e => {
    console.log(e.target.getAttribute("data-row"));
  };

  render() {
    return (
      <div>
        <div data-row={"属性1"} data-col={"属性 2"} onClick={this.click}>
          点击获取属性
        </div>
      </div>
    );
  }
}

链接：https://juejin.cn/post/6844903993278201870

React 开发必须知道的 34 个技巧【近1W字】
https://juejin.cn/post/6844903993278201870#heading-52

JavaScript 引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待。
如果 JavaScript 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，
会导致页面响应度变差，用户可能会感觉到卡顿。

而这也正是 React 15 的 Stack Reconciler 所面临的问题，当 React 在渲染组件时，从开始到渲染完成整个过程是一气呵成的，无法中断。
如果组件较大，那么js线程会一直执行，然后等到整棵VDOM树计算完成后，才会交给渲染的线程。这就会导致一些用户交互、动画等任务无法立即得到处理，导致卡顿的情况。
原文链接：https://blog.csdn.net/sinat_17775997/article/details/121767902

为什么React Hook只能使用在函数最外层，不能用在条件判断或者循环语句中？
因为React Hook是按照顺序存的，组件每次render hooks必须一一对应，如果某个hook用在条件判断中
，渲染的时候有时出现，有时不出现，则会导致它后面所有的hooks信息错乱。
链接：https://juejin.cn/post/7080929061677039646

不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。
这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确

hooks 为什么不能放在条件判断里
以 setState 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在 memoizeState 属性中
update 阶段，每次调用 setState，链表就会执行 next 向后移动一步。如果将 setState 写在条件判断中，假设条件判断不成立，
没有执行里面的 setState 方法，会导致接下来所有的 setState 的取值出现偏移，从而导致异常发生。
https://interview2.poetries.top/excellent-docs/6-React.html#_34%E3%80%81hoc-%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6


深入理解React：懒加载（lazy）实现原理
https://blog.csdn.net/sinat_17775997/article/details/106794133
当 Webpack 解析到该 import() 语法时，会自动进行代码分割。
简单来说，React利用 React.lazy 与 import() 实现了渲染时的动态加载 ，并利用 Suspense 来处理异步加载资源时页面应该如何显示的问题。

5. 组件更新和渲染(fiber)
setState(newState) -> dirtyComponents（可能有子组件）
render() 生成 newVNode
patch 到 DOM 拆分成两个阶段（fiber优化）

reconciliation阶段 -> 执行diff（ js执行计算 ）
commit阶段（渲染） -> 将diff渲染DOM
fiber性能优化
  将reconciliation阶段的任务拆分
  DOM渲染时暂停执行js计算，空闲时恢复js计算
  使用的api：window.requestIdleCallback
  链接：https://juejin.cn/post/7081475500241059870


React v16.0的生命周期函数有哪些？

componentWillMount
render
componentDidMount
componentWillReciveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
componentWillUnmount

通过 React15 ~ 17 的优化迭代来简单聊聊 Fiber
https://juejin.cn/post/7077499405200261128

给 DOM 设置和获取自定义属性 https://juejin.cn/post/6844903993278201870#heading-52
export default class Thirty extends React.Component {
  click = e => {
    console.log(e.target.getAttribute("data-row"));
  };

  render() {
    return (
      <div>
        <div data-row={"属性1"} data-col={"属性 2"} onClick={this.click}>
          点击获取属性
        </div>
      </div>
    );
  }
}
代码分割的原理 https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/tgc3uo

1.  分片打包的原理
import动态加载的功能是webpack实现的，通过一些插件，在编译时候把动态import的模块单独打包，再在webpack运行时代码中将之拉取并执行。
动态import实际是返回一个Promise，该Promise成功时候会resolve该模块。因此使用异步加载的模块都需要在.then方法中获取该模块后再使用。
React.lazy是接受一个function，然后调用该function返回的一个Promise，在Promise的resolve中取到该组件进行渲染。
Suspense原理

Suspense组件用来实现组件未准备好时候的loading。
某个组件如果是异步加载的（动态import），或者依赖一些业务数据，当异步代码未加载完成或者业务数据网络请求未到达时候，
该组件应该渲染一个loading，等组件准备好后再替换掉loading。

React.lazy原理
React.lazy核心逻辑就是throw一个异步加载组件的promise，加载好后return这个组件（所以如果其外部不包裹Suspense，也没有ErrorBoundary的话，页面就会崩溃）。
React.lazy接收一个函数作为参数，这个函数需要返回一个thenable对象。React.lazy会先执行方法，得到异步加载组件的promise，然后throw这个promise。
promise被Suspense捕获后进入异步处理队列，等组件加载好后，React.lazy就返回thenable对象resolve的对象的default属性，这个default属性就是异步加载的组件。

const AsyncComponent = React.lazy(() => import('./MyComponent'));
MyComponent.jsexport default class MyComponent extends React.Component {

}
这里我们用到了webpack的动态import，动态import会返回一个promise，组件加载完成后会resolve模块，使用ESM模块规范，
resolve的模块的default属性就是组件MyComponent本身。
 
Link 的本质也是a 标签。只不过在Link 中禁用了 a 标签的默认事件，改用了history对象提供的方法进行跳转。
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/135     

移动端小案例,最好有react基础
https://www.bilibili.com/video/BV1uL4y1N7qn?p=7&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a