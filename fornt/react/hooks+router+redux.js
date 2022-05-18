区别于useState 
Reducer注重状态变化的过程
Sate关注状态
useReducer是useState的替换方案，useReducer更适合管理包含多个值的state对象 
const initialState = {count:0};

function reducer(state, action){
  switch(action){
    case 'increment1':
      return {count: state.count + 1};
    case 'increment2':
      return {count: state.count + 2};
    default:
      throw new Error();
  }
}

function Counter(){
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment1'})}>+1</button>
      <button onClick={() => dispatch({type: 'increment2'})}>+2</button>
    </>
  )
}

React 自定义hooks
实时获取当前浏览器窗口大小
/**
* hooks.js
*/
import React, { useState, useCallback, useEffect } from "react";

export const useWinSize = () => {
  // 1. 使用useState初始化窗口大小state
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const changeSize = useCallback(() => {
    // useCallback 将函数缓存起来 节流
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  // 2. 使用useEffect在组件创建时监听resize事件，resize时重新设置state (使用useCallback节流)
  useEffect(() => {
    //绑定一次页面监听事件 组件销毁时解绑
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return size;
};

import React from "react";
import { useWinSize } from "../hooks";
export default () => {
  const size = useWinSize();
  return (
    <div>
      页面大小: `{size.width}*{size.height}`
    </div>
  );
};

//https://juejin.cn/post/6972893133243695141
再学 React Hooks (一）：闭包陷阱 
https://juejin.cn/post/6972893133243695141
const FunctionComponent = () => {
  const [value, setValue] = useState(1)
  const log = () => {
    setTimeout(() => {
      alert(value)
    }, 2000);
  }
  return (
    <div>
      <p>FunctionComponent</p>
      <div>value: {value}</div>
      <button onClick={() => setValue(value + 1)}>add</button>
      <br/>
      <button onClick={log}>alert</button>
    </div>
  )
}
在上面的函数式组件中，我们点击 alert 按钮后会在 2s 后弹出 value 的值，我们在这 2s 的时间内可以继续点击 add 按钮增加 value 的值。

解决闭包陷阱的方案   *************************************************
使用 useRef 解决闭包陷阱的问题
const FunctionComponent = () => {
  const [value, setValue] = useState(1)
  const countRef = useRef(value)

  useEffect(() => {
    countRef.current = value
  }, [value])

  const log = useCallback(
    () => {
      setTimeout(() => {
        alert(countRef.current)
      }, 1000);
    },
    [value],
  )

  return (
    <div>
      <p>FunctionComponent</p>
      <div>value: {value}</div>
      <button onClick={() => setValue(value + 1)}>add</button>
      <br/>
      <button onClick={log}>alert</button>
    </div>
  )
}

React函数组件中的闭包陷阱
https://blog.csdn.net/weixin_38080573/article/details/115178502
import React, { useState, useRef } from "react"; *************************************************

const Demo2 = () => {
  let [count, setCount] = useState(0);
  // useRef 返回的是同一个对象，类似 {current:''}
  const countRef = useRef();
  countRef.current = count;

  const addCount = () => {
    setCount(count + 1);
  };

  const alertCount = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 3000);
  };

  return (
    <div>
      <button onClick={addCount}>add Count</button>
      <button onClick={alertCount}>alertCount</button>
      <div>count: {count}</div>
    </div>
  );
};

export default Demo2;

//================================================================
react-router等前端路由的原理大致相同，可以实现无刷新的条件下切换显示不同的页面
路由的本质就是页面的URL发生改变时，页面的显示结果可以根据URL的变化而变化，但是页面不会刷新

react-router里的<Link>标签和<a>标签有什么区别
对比<a>,Link组件避免了不必要的重渲染

//================================================================
react-redux将组件分成：
容器组件：存在逻辑处理
UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制

通过redux将整个应用状态存储到store中，组件可以派发dispatch行为action给store
其他组件通过订阅store中的状态state来更新自身的视图

使用react-redux分成了两大核心：

Provider
connection
Provider
在redux中存在一个store用于存储state，如果将这个store存放在顶层元素中，其他组件都被包裹在顶层元素之上
那么所有的组件都能够受到redux的控制，都能够获取到redux中的数据
// <Provider store = {store}>
//     // <App />
// <Provider>

connect方法将store上的getState和 dispatch包装成组件的props
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
mapStateToProps
把redux中的数据映射到react中的props中去
mapDispatchToProps
将redux中的dispatch映射到组件内部的props中

什么是高阶组件
高阶组件不是组件，是增强函数。如果一个函数接受一个或多个组件作为参数并且返回一个组件就可称之为高阶组件。、
高阶组件的形式：
1. 属性代理props proxy
// 无状态
function HigherOrderComponent(WrappedComponent) {
    return props => <WrappedComponent {...props} />; 
}
// or
// 有状态
function HigherOrderComponent(WrappedComponent) {
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
2. 反向继承
function HigherOrderComponent(WrappedComponent) {
    return class extends WrappedComponent {
        render() {
            return super.render();
        }
    };
}

高阶组件的缺点：
1. 静态方法丢失：
因为原始组件被包裹于一个容器组件内，也就意味着新组件会没有原始组件的任何静态方法

2. refs 属性不能透传：**一般来说高阶组件可以传递所有的 props 给包裹的组件，但是有一种属性不能传递，它就是ref。
与其他属性不同的地方在于React对其进行了特殊的处理。 如果你向一个由高阶组件创建的组件的元素添加 ref 引用，那么 ref 指向的是最外层容器
组件实例的，而不是被包裹的 WrappedComponent 组件。 那如果一定要传递 ref 的话，React 为我们提供了一个名为 React.forwardRef 的 API
来解决这一问题

3. 反向继承不能保证完整的子组件树被解析：React 组件有两种形式，分别是 class 类型和 function 类型（无状态组件）。像反向继承的渲染
持可以控制 WrappedComponent 的渲染过程，也就是说这个过程中我们可以对 elements tree、state、props 或 render() 的结果做各种
操作。 但是如果渲染 elements tree 中包含了 function 类型的组件的话，这时候就不能操作组件的子组件了。

HOC可用于许多用例
代码重用、逻辑和引导抽象
渲染劫持
state抽象和操作
props处理

HOC应用场景
利用高阶组件的 条件渲染 特性可以对页面进行权限控制，权限控制一般分为两个维度：页面级别 和 页面元素级别
借助父组件子组件生命周期规则捕获子组件的生命周期，可以方便的对某个组件的渲染时间进行记录
页面复用

//=================
React 高阶组件、Render props、hooks 有什么区别，为什么要不断迭代
这三者是目前react解决代码复用的主要方式：

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模
式。具体而言，高阶组件是参数为组件，返回值为新组件的函数。
render props是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，更具体的说，render prop 是一个用于告知组件需要渲染什么内
容的函数 prop。
通常，render props 和高阶组件只渲染一个子节点。让 Hook 来服务这个使用场景更加简单。这两种模式仍有用武之地，（例如，一个虚拟滚动条组件或许会
有一个 renderltem 属性，或是一个可见的容器组件或许会有它自己的 DOM 结构）。但在大部分场景下，Hook 足够了，并且能够帮助减少嵌套。

（1）HOC
官方解释∶
高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。
简言之，HOC是一种组件的设计模式，HOC接受一个组件和额外的参数（如果需要），返回一个新的组件。HOC 是纯函数，没有副作用。
// hoc的定义
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    // 一些通用的逻辑处理
    render() {
      // ... 并使用新数据渲染被包装的组件!
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };

// 使用
const BlogPostWithSubscription = withSubscription(BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id));
复制代码
HOC的优缺点∶

优点∶ 逻辑服用、不影响被包裹组件的内部逻辑。
缺点∶ hoc传递给被包裹组件的props容易和被包裹后的组件重名，进而被覆盖，静态方法属性丢失

（2）Render props
官方解释∶

"render prop"是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

具有render prop 的组件接受一个返回React元素的函数，将render的渲染逻辑注入到组件内部。在这里，"render"的命名可以是任何其他有效的标识符。
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

复制代码
由此可以看到，render props的优缺点也很明显∶

优点：数据共享、代码复用，将组件内的state作为props传递给调用者，将渲染逻辑交给调用者。
缺点：无法在 return 语句外访问数据、嵌套写法不够优雅

（3）Hooks
官方解释∶
Hook是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。通过自定义hook，可以复用代码逻辑。

// 自定义一个获取订阅数据的hook
function useSubscription() {
  const data = DataSource.getComments();
  return [data];
}
// 
function CommentList(props) {
  const {data} = props;
  const [subData] = useSubscription();
    ...
}
// 使用
<CommentList data='hello' />
复制代码
以上可以看出，hook解决了hoc的prop覆盖的问题，同时使用的方式解决了render props的嵌套地狱的问题。hook的优点如下∶

使用直观；
解决hoc的prop 重名问题；
解决render props 因共享数据 而出现嵌套地狱的问题；
能在return之外使用数据的问题。

需要注意的是：hook只能在组件顶层使用，不可在分支语句中使用。
总结∶
Hoc、render props和hook都是为了解决代码复用的问题，但是hoc和render props都有特定的使用场景和明显的缺点。hook是react16.8更新
的新的API，让组件逻辑复用更简洁明了，同时也解决了hoc和render props的一些缺点。

链接：https://juejin.cn/post/6941546135827775525

1）HOC的优缺点

优点∶ 逻辑服用、不影响被包裹组件的内部逻辑。
缺点∶hoc传递给被包裹组件的props容易和被包裹后的组件重名，进而被覆盖,  无法获取原始 class 组件的静态方法  无法获取原始组件的 ref
2）适用场景

代码复用，逻辑抽象
渲染劫持
State 抽象和更改
Props 更改

//================================================================
class 组件	Hooks 组件 生命周期对比
https://juejin.cn/post/6940942549305524238

谈谈react hooks的优缺点 **************************************
https://www.cnblogs.com/ranyonsue/p/14700528.html

这里主要讲述的是react-router-dom的常用API，主要是提供了一些组件：
BrowserRouter、HashRouter
Route
Link、NavLink
switch
redirect 
#

hook的使用限制
上面简介中我们说了，不可以在循环、条件或嵌套函数中调用 Hook，这是为什么呢？
因为 Hooks 的设计是基于数组实现的。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，
执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。
链接：https://juejin.cn/post/7065674393803816967 