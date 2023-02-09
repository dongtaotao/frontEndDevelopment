谈谈react hooks的优缺点 **************************************=
https://www.cnblogs.com/ranyonsue/p/14700528.html

手写ReactHook核心原理，再也不怕面试官问我ReactHook原理
https://cloud.tencent.com/developer/article/1784501 

react hooks 万字总结,带你夯实基础
https://juejin.cn/post/6993139082054336548

关于 React 中的 hook 要顺序调用这件事
https://www.jianshu.com/p/87802403c222

React Fiber 原理介绍 🔥
https://segmentfault.com/a/1190000018250127

我打破了 React Hook 必须按顺序、不能在条件语句中调用的枷锁
https://zhuanlan.zhihu.com/p/357232384

使用 React Hooks 时要避免的6个错误
https://zhuanlan.zhihu.com/p/437923611

React Hooks面试题
https://blog.csdn.net/MichelleZhai/article/details/118392437

React之hooks
https://juejin.cn/post/7065674393803816967

手写React Hook核心原理
https://juejin.cn/post/6890349061019271182

react使用usestate踩坑
https://blog.csdn.net/glorydx/article/details/105676697

学习 React Hooks 可能会遇到的五个灵魂问题
https://cloud.tencent.com/developer/article/1521587

React 汇总了27个知识点
https://juejin.cn/post/7081475500241059870

hooks原理 https://juejin.cn/post/6891577820821061646
闭包 Fiber 链表 https://segmentfault.com/a/1190000040887783

手写hooks系列第一期，实现防抖hook：useDebounce
https://juejin.cn/post/7082424970910892045
手写hooks系列第二期，实现两个常用hook：useMount和useUnMounnt
https://juejin.cn/post/7083054747212578824
手写hooks系列第三期，实现常用hook：useUpdateEffect
https://juejin.cn/post/7083694236733800461

React 中怎么实现状态自动保存（KeepAlive）
react keepalive 百度  react利⽤react-activation实现⼦路由缓存
React 中保存页面状态/在react中实现vue的keep-alive/React Activation
https://blog.csdn.net/weixin_38649188/article/details/118578867
在React中实现keepAlive
https://blog.csdn.net/sinat_17775997/article/details/124518460?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22124518460%22%2C%22source%22%3A%22sinat_17775997%22%7D&ctrtid=swklW
如何在React中实现keep-alive？
https://blog.csdn.net/petertanjinjie/article/details/106654785
https://www.jianshu.com/p/13e11d1146c5
https://blog.csdn.net/Carol246/article/details/118201278

使用社区的轮子，当时选了GitHub 里的两个产品： React Keeper 和 react-router-cache-route
现在 React 多页签方案有啥新进展吗 ************************
https://juejin.cn/post/6941683774153293837
https://github.com/CJY0208/react-router-cache-route

redux数据持久化好帮手：redux-persist  ***************** 🔥
https://www.jianshu.com/p/a0406d72b19b

redux-persist管理redux, 解决刷新react-redux数据丢失！ 。redux-persist会将redux的store中的数据缓存到浏览器的localStorage中。
https://blog.csdn.net/weixin_43330752/article/details/103697636

React通过redux-persist持久化数据存储
https://www.cnblogs.com/crazycode2/p/13596807.html

浅析redux-persist
https://www.jianshu.com/p/0b04218817de

React 中保存页面状态/在react中实现vue的keep-alive/React Activation
https://blog.csdn.net/weixin_38649188/article/details/118578867

使用react-activation实现keepAlive，支持返回传参
https://juejin.cn/post/7098602213102059527


🔥 解决页面刷新redux数据丢失问题 https://blog.csdn.net/z591102/article/details/108096754 *******************
1.何时存只要用户刷新或者关闭页面时，都会默默记下当前的state状态。
window.onbeforeunload = (e) => {
  const state = store.getState();
  saveState(state);
};
2.何时清空
解决就是，state需要有个版本管理，当和代码的版本不一致时，至少进行个清空操作。

使用create-react-app加持typescript打造自己的组件库 🔥🔥
https://juejin.cn/post/7083508488759934989


React 单元测试
https://www.cnblogs.com/testopsfeng/p/14265218.html

中间件原理
async function fn1(next){
    console.log('fn1')
    next && await next()
    console.log('end fn1')
}
async function fn2(next){
    console.log('fn2')
    next && await next()
    console.log('end fn2')
}
fn1(() => fn2())

fn1
fn2
end fn2
end fn1

useLayoutEffect 和 componentDidMount 和 componentDidUpdate 触发时机一致（都在在 DOM 修改后且浏览器渲染之前）；
useLayoutEffect 要比 useEffect 更早的触发执行；
useLayoutEffect 会阻塞浏览器渲染，切记执行同步的耗时操作

两分钟搞懂从函数组合到中间件实现
https://juejin.cn/post/6844903986957402126

十五分钟读懂React 17
https://juejin.cn/post/6894204813970997256

react hooks 的原理是什么 https://q.shanyue.tech/fe/react/273.html
闭包 + 链表

什么是 virtual DOM，它的引入带了什么好处
虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，
    可以是近期很火热的小程序，也可以是各种 GUI。
    vdom 把渲染过程抽象化了，从而使得组件的抽象能力也得到提升，并且可以适配 DOM 以外的渲染目标。
    Virtual DOM 在牺牲(牺牲很关键)部分性能的前提下，增加了可维护性，这也是很多框架的通性。 实现了对 DOM 的集中化操作，
    在数据改变时先对虚拟 DOM 进行修改，再反映到真实的 DOM 中，用最小的代价来更新 DOM，提高效率(提升效率要想想是跟哪个阶段比提升了效率，别只记住了这一条)。
打开了函数式 UI 编程的大门。
可以渲染到 DOM 以外的端，使得框架跨平台，比如 ReactNative，React VR 等。
可以更好的实现 SSR，同构渲染等。这条其实是跟上面一条差不多的。
组件的高度抽象化。

虚拟 DOM 的缺点
    1.首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。
    2.虚拟 DOM 需要在内存中的维护一份 DOM 的副本(更上面一条其实也差不多，上面一条是从速度上，这条是空间上)。
    如果虚拟 DOM 大量更改，这是合适的。但是单一的，频繁的更新的话，虚拟 DOM 将会花费更多的时间处理计算的工作

Immutable Data 就是一旦创建，就不能再被更改的数据。
从问题说起：熟悉 React 组件生命周期的话都知道：调用 setState 方法总是会触发 render 方法从而进行 vdom re-render 相关逻辑，
哪怕实际上你没有更改到 Component.state
this.state = {count: 0}
this.setState({count: 0});// 组件 state 并未被改变，但仍会触发 render 方法 
为了避免这种性能上的浪费，React 提供了一个 shouldComponentUpdate 来控制触发 vdom re-render 逻辑的条件。
于是 PureRenderMixin 作为一种优化技巧被使用。它仅仅是浅比较对象，深层次的数据结构根本不管用  

useContext
函数式的组件，如果需要父传子，那么就需要使用useContext。
http://codesohigh.com/subject/react/chapter4.html#_3%E3%80%81useeffect
/* 
    createContext用于创建上下文
    useContext用于调用上下文
*/
import {useState, createContext, useContext} from 'react'
// 1、创建上下文
const NumContext = createContext();
// 子组件
function Count(){
  // 3、调用上下文内容
  const num = useContext(NumContext)
  return (
      <h3>{num}</h3>
  )
}
function App3(){
    const [num, setNum] = useState(0)
    return (
        <>
            {/* 2、设置提供器，并传入value，包含子组件 */}
            <NumContext.Provider value={num}>
                <Count />
            </NumContext.Provider>
            <button onClick={()=>{setNum(num+1)}}>累加</button>
        </>
    )
}
export default App3;

React 中什么是合成事件
提供统一的 API，抹平各大浏览器差异
所有事件绑定在 React Root Element 进行事件委托

react hooks方法获取不到最新的state解决方法
https://blog.csdn.net/sinat_17775997/article/details/123753758

https://blog.csdn.net/aminwangaa/article/details/107379851?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&utm_relevant_index=1
React hooks useState如何拿到更新后的值
https://mp.csdn.net/mp_blog/creation/editor/123753653

在class中,如果 我们想要拿到setState 最新的值,去调用api,直接通过this.setState的回调函数就可以了
https://blog.csdn.net/hzxOnlineOk/article/details/109103135?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.pc_relevant_default&spm=1001.2101.3001.4242.1&utm_relevant_index=3
this.setState({
	latestValue: "我是最新的"
},()=>{
	this.callApi(latestValue);   //这里就会拿到最新的值
});

const [modelStatus, setModelStatus] =useState("");
const modelStatusRef = useRef(null);
 
useEffect(()=>{
	// 每次 更新 把值 复制给 modelStatusRef
	modelStatusRef.current = modelStatus;
}, [modelStatus]); // 依赖的值 等modelStatus 改变了 才出发里面的值
 
function statusHandleChange(val) {
        setModelStatus(val);
        // **设置一个延迟 0毫秒,这个 很重要**
        setTimeout(search, 0);
    }
function search(value) {
	// 这里的值 就是 拿到最新的值了
    let _modelStatus = modelStatusRef.current;
	console.log(_modelStatus );  
	props.callApi(_modelStatus );
}

React hooks模拟forceUpdate
const [,updateState]=useState();
const forceUpdate=useCallback(()=>updateState({}),[]);
//使用
forceUpdate();

为何要合成事件 ===============================================
兼容性和跨平台
挂在统一的document上，减少内存消耗，避免频繁解绑
方便事件的统一管理（事务机制）
dispatchEvent事件机制

function Index(){
    const [ number , setNumber  ] = useState(0)
    const [ handerClick1 , handerClick2  ,handerClick3] = useMemo(()=>{
        const fn1 = ()=>{
            /* 一些操作 */
        }
        const fn2 = ()=>{
            /* 一些操作 */
        }
        const  fn3= ()=>{
            /* 一些操作 */
        }
        return [fn1 , fn2 ,fn3]
    },[]) /* 只有当数据里面的依赖项，发生改变的时候，才会重新声明函数。 */
    return <div>
        <a onClick={ handerClick1 } >点我有惊喜1</a>
        <a onClick={ handerClick2 } >点我有惊喜2</a>
        <a onClick={ handerClick3 } >点我有惊喜3</a>
        <button onClick={ ()=> setNumber(number+1) } > 点击 { number } </button>
    </div>
}
链接：https://juejin.cn/post/6908895801116721160

React-你有完全了解 Hooks 吗
https://juejin.cn/post/7064345263061598222 

Hooks优点:
没有破坏性改动：完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。100% 向后兼容的。 Hook 不包含任何破坏性改动。
更容易复用代码：它通过自定义hooks来复用状态，从而解决了类组件逻辑难以复用的问题
函数式编程风格：函数式组件、状态保存在运行环境、每个功能都包裹在函数中，整体风格更清爽、优雅
代码量少，复用性高
更容易拆分
Hooks缺点(Hoosk有哪些坑):
hooks 是 React 16.8 的新增特性、以前版本的就别想了
状态不同步（闭包带来的坑）:函数的运行是独立的，每个函数都有一份独立的闭包作用域。当我们处理复杂逻辑的时候，经常会碰到“引用不是最新”的问题
使用useState时候，使用push，pop，splice等直接更改数组对象的坑，demo中使用push直接更改数组无法获取到新值，
  应该采用析构方式原因：push，pop，splice是直接修改原数组，react会认为state并没有发生变化，无法更新)
useState 初始化只初始化一次
useEffect 内部不能修改 state
useEffect 依赖引用类型会出现死循环
不要在循环，条件或嵌套函数中调用Hook，必须始终在React函数的顶层使用Hook。这是因为React需要利用调用顺序来正确更新相应的状态，
   以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，就容易导致调用顺序的不一致性，从而产生难以预料到的后果
原文链接：https://blog.csdn.net/MichelleZhai/article/details/118392437

if else条件判断里使用hooks有什么问题
if else里面不能用hooks，hooks是有顺序的
不能用在if else 或者循环里面 还有非顶层的函数内部
hooks在初始化时候是以链表形式存储的，后续更新都是按照这个链表顺序执行的

常用的Hooks有哪些？
useState()状态钩子。为函数组建提供内部状态
useContext()共享钩子。该钩子的作用是，在组件之间共享状态。 可以解决react逐层通过Porps传递数据，它接受React.createContext()
   的返回结果作为参数，使用useContext将不再需要Provider 和 Consumer
useReducer()状态钩子。Action 钩子。useReducer() 提供了状态管理，其基本原理是通过用户在页面中发起action, 
   从而通过reducer方法来改变state, 从而实现页面和状态的通信。使用很像redux
useEffect()副作用钩子。它接收两个参数， 第一个是进行的异步操作， 第二个是数组，用来给出Effect的依赖项
useRef()获取组件的实例；渲染周期之间共享数据的存储(state不能存储跨渲染周期的数据，
    因为state的保存会触发组件重渲染）,useRef传入一个参数initValue，并创建一个对象{ current: initValue }给函数组件使用，在整个生命周期中该对象保持不变

useMemo和useCallback可缓存函数的引用或值，useMemo缓存数据，useCallback缓存函数，两者是Hooks的常见优化策略，
  useCallback(fn,deps)相当于useMemo(()=>fn,deps),经常用在下面两种场景:
1、要保持引用相等；对于组件内部用到的 object、array、函数等，
2、用在了其他 Hook 的依赖数组中，或者作为 props 传递给了下游组件，应该使用 useMemo/useCallback）

useEffect为什么有时候会出现无限重复请求的问题
可能1 在effect里做数据请求未设置依赖参数，没有依赖项effect 会在每次渲染后执行一次，然后在 effect 中更新了状态引起渲染并再次触发 effect
可能2 所设置的依赖项总是会变
解决：useCallback包一层，或者useMemo
useEffect的依赖项里类数组根据什么来判断有没有值变化
浅比较
原文链接：https://blog.csdn.net/MichelleZhai/article/details/118392437  

react 组件中新增属性可以用...解构对象直接放进去
https://blog.csdn.net/u010856177/article/details/103524388

为什么useState要写成[state,useState]的形式？ https://juejin.cn/post/6992562102007234567

React Hooks 避免的错误 https://blog.csdn.net/sinat_17775997/article/details/122884968
不要改变 hooks 的调用顺序；
不要使用旧的状态；
不要创建旧的闭包；
不要忘记清理副作用；
不要在不需要重新渲染时使用useState；
不要缺少useEffect依赖。

let createStore = (reducer) => {
    let state;
    //获取状态对象
    //存放所有的监听函数
    let listeners = [];
    let getState = () => state;
    //提供一个方法供外部调用派发action
    let dispath = (action) => {
        //调用管理员reducer得到新的state
        state = reducer(state, action);
        //执行所有的监听函数
        listeners.forEach((l) => l())
    }
    //订阅状态变化事件，当状态改变发生之后执行监听函数
    let subscribe = (listener) => {
        listeners.push(listener);
    }
    dispath();
    return {
        getState,
        dispath,
        subscribe
    }
}
let combineReducers=(renducers)=>{
    //传入一个renducers管理组，返回的是一个renducer
    return function(state={},action={}){
        let newState={};
        for(var attr in renducers){
            newState[attr]=renducers[attr](state[attr],action)
 
        }
        return newState;
    }
}
export {createStore,combineReducers};

function fetchData(url, params) {
    return (dispatch, getState) => {
        dispatch({
           type: 'FETCHR_INIT', // 请求开始
        });
        fetch(url, params)
            .then(result => {
                dispatch({
                    type: 'FETCHR_SUCCESS', data: result, // 请求成功
                });
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_ERROR', error: err, //请求失败
                });
            });
        };
}


五、总结https://blog.csdn.net/sinat_17775997/article/details/103532090
这篇文章里，我们一共提到了下面这些优化加载的点：

在 HTML 内实现 Loading 态或者骨架屏；
去掉外联 css；
缓存基础框架；
使用动态 polyfill；
使用 SplitChunksPlugin 拆分公共代码；
正确地使用 Webpack 4.0 的 Tree Shaking；
使用动态 import，切分页面代码，减小首屏 JS 体积；
编译到 ES2015+，提高代码运行效率，减小体积；
使用 lazyload 和 placeholder 提升加载体验。

如何使用 ref 回调去管理列表的 ref
https://juejin.cn/post/7030424680620097549

自定义Hook
可以很好的进行组件公共逻辑抽离。相比HOC优势：
减少组件嵌套
避免在组件间处理props透传

注意自定义Hook命名规范：useXxx (use开头)
这里以一个Dialog为Demo，自己手写一个Hook～

实现打开弹窗 showDialog
实现关闭弹窗 hideDialog
实现弹窗状态切换 switchStatus
// 自定义hook 控制 Dialog
function useDialog () {
    const [visible, setVisible] = useState(false)
    const showDialog = () => setVisible(true)
    const hideDialog = () => setVisible(false)
    const switchStatus = () => setVisible(!visible)
    
    return {
      visible,
      showDialog,
      hideDialog,
      switchStatus
    }
  }
  // 组件中使用useDialog
  function App() {
    // 使用自定义hook，接收状态、操作函数
    const {visible, showDialog, hideDialog, switchStatus} = useDialog()
    return (
      <div className="App">      
        { visible && <div>dialog</div> }
        <button onClick={showDialog}>打开弹窗</button>
        <button onClick={hideDialog}>关闭弹窗</button>
        <button onClick={switchStatus}>切换弹窗状态</button>
      </div>
    );
  }
  
链接：https://juejin.cn/post/7081475500241059870

11. Hook 规则
Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则。我们提供了一个 linter 插件来强制执行这些规则：

只在最顶层使用 Hook
不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。遵守这条规则，
  你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。
这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。
只在 React 函数中调用 Hook

不要在普通的 JavaScript 函数中调用 Hook。 你可以：
✅ 在 React 的函数组件中调用 Hook
✅ 在自定义 Hook 中调用其他 Hook
链接：https://juejin.cn/post/7061931724984287269

（1）不要在循环，条件或嵌套函数中调用Hook，必须始终在 React函数的顶层使用Hook
这是因为React需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，
就容易导致调用顺序的不一致性，从而产生难以预料到的后果。
链接：https://juejin.cn/post/6940942549305524238。

React测试
https://www.bilibili.com/video/BV1sS4y1m7MC?spm_id_from=333.337.search-card.all.click

React 依赖于 Hook 的调用顺序，如果能确保 Hook 在每一次渲染中都按照同样的顺序被调用。
那么React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确性

// 简单实现hooks https://github.com/lgwebdream/FE-Interview/issues/906

// 一、实现useState
const { render } = require("react-dom");
let memoriedStates = [];
let lastIndex = 0;
function useState(initialState) {
    memoriedStates[lastIndex] = memoriedStates[lastIndex] || initialState;
    function setState(newState) {
        memoriedStates[lastIndex] = newState;
        // 状态更新完毕，调用render函数。重新更新视图
        render();
    }
    // 返回最新状态和更新函数，注意index要前进
    return [memoriedStates[lastIndex++], setState];
}

// 二、实现useEffect
let lastDendencies; // 存放依赖项的数组
function useEffect(callback, dependencies) {
    if (lastDendencies) {
        // 判断传入的依赖项是不是都没有变化，只要有以一项改变，就需要执行callback
        const isChange = dependencies && dependencies.some((dep, index) => dep !== lastDendencies[index]);
        if (isChange) {
            // 一开始没有值，需要更新一次(相当于componentDidMount)
            typeof callback === 'function' && callback();
            // 更新依赖项
            lastDendencies = dependencies;
        }
    } else {
        // 一开始没有值，需要更新一次(相当于componentDidMount)
        typeof callback === 'function' && callback();
        // 更新依赖项
        lastDendencies = dependencies;
    }
}

// 三、实现useCallback
let lastCallback; // 最新的回调函数
let lastCallbackDependencies = []; // 回调函数的依赖项
function useCallback(callback, dependencies = []) {
    if (lastCallback) {
        const isChange = dependencies && dependencies.some((dep, index) = dep !== lastCallbackDependencies[index]);
        if (isChange) {
            // 只要有一个依赖项改变了，就更新回调(重新创建)
            lastCallback = callback;
            lastCallbackDependencies = dependencies;
        }
    } else {
        lastCallback = callback;
        lastCallbackDependencies = dependencies;
    }
    // 最后需要返回最新的函数
    return lastCallback;
}

// 四、实现useRef
let lastRef;
function useRef(initialValue = null){
    
    lastRef = lastRef != undefined ? lastRef : initialValue;
    // 本质上就是返回一个对象，对象种有一个current属性，值为初始化传入的值，如果没有传入初始值，则默认为null
    return {
        current: lastRef
    }
}

// 五、实现useContext
function useContext(context){
    // 很简单，就是返回context的_currentValue值
    return context._currentValue;
}

// 六、实现useReducer
let lastState;
function useReducer(reducer, initialState){
    lastState = lastState !== undefined ? lastState : initialState;
    // dispatch一个action，内部就是自动调用reducer来计算新的值返回
    function dispatch(action){
        lastState = reducer(lastState, action);
        // 更新完毕后，需要重新渲染视图
        render();
    }
    // 最后返回一个的状态值和派发action的方法
    return [lastState, dispatch];
}

说说 React 状态逻辑复用问题 ******************** 重要 https://juejin.cn/post/6899291168891207688

https://fe.ecool.fun/topic/559aab33-1ef2-4fb1-bdba-2233423fb845?orderBy=updateTime&order=desc&tagId=13
那为什么不要在循环、条件或嵌套函数中调用 Hook 呢？因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，
如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。

React中，能否直接将 props 的值复制给 state  可以  百度 https://zhuanlan.zhihu.com/p/83623692
https://www.baidu.com/s?wd=React%E4%B8%AD%2C%E8%83%BD%E5%90%A6%E7%9B%B4%E6%8E%A5%E5%B0%86%20props%20%E7%9A%84%E5%80%BC%E5%A4%8D%E5%88%B6%E7%BB%99%20state&rsv_spt=1&rsv_iqid=0xeb74bea10008174b&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=React%25E4%25B8%25AD%25EF%25BC%258C%25E8%2583%25BD%25E5%2590%25A6%25E7%259B%25B4%25E6%258E%25A5%25E5%25B0%2586%2520props%2520%25E7%259A%2584%25E5%2580%25BC%25E5%25A4%258D%25E5%2588%25B6%25E7%25BB%2599%2520state&rsp=6&inputT=508&rsv_sug4=508

https://fe.ecool.fun/topic/e246ac60-73f0-4e33-b0f9-b0d1e6c15af8?orderBy=updateTime&order=desc&tagId=13
为什么不能直接使用 this.state 改变数据？
react中不能直接修改state，因为并不会重新触发render。

以如下方式更新状态，组件不会重新渲染。
//Wrong
This.state.message =”Hello world”;
而是需要使用setState()方法，状态改变时，组件通过重新渲染做出响应。

//Correct
This.setState({message: ‘Hello World’});
setState通过一个队列机制来实现 state 更新。当执行 setState 的时候，会将需要更新的 state 合并后放入状态队列，
而不会立刻更新 this.state。队列机制可以高效的批量更新 state，如果不通过 setState 而直接修改 this.state，
那么该 state 将不会被放入状态队列中，当下次调用 setState 并对状态队列进行合并时，将会忽略之前被直接修改的 state，而造成无法预知的错误。

hook缺点
写useEffect、useMemo的依赖项比较考验心智
状态不同步，容易产生闭包，需要使用useRef去记录

不能在 if/循环语句中使用 React Hooks
界面会出现报错。因为 React Hooks 的底层是通过有序链表实现的，如果放到 if/循环语句就可能导致执行顺序发生改变，从而导致意料之外的错误 ❎

React-webpack ------基于antd-mobile等库的一套移动端完美脚手架配置
https://github.com/JinJieTan/react-webpack

React构建组件/React 组件设计模式的方式有哪些-面试题
https://juejin.cn/post/6952907248393781284

面试官:React 中如何做性能优化? 我:😰 ?😰 ? 😰 ?
https://juejin.cn/post/6953921338687881223#heading-10   