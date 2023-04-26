一步步写一个react组件库并打包发布到npm 
https://juejin.cn/post/7111717904374038536

从零开始搭建react基础开发环境（基于webpack5）🐯 
https://juejin.cn/post/7135078555033010213
https://github.com/handsomezyw/my-webpack

react如何拥有自己的keep-alive
https://juejin.cn/post/7069677786985660446

React状态保存（Keep-Alive）实现方式概览
https://juejin.cn/post/7154309586671894542

React组件库完整搭建流程
https://juejin.cn/post/6930876951439605767

Braft Editor，美观好用的React富文本编辑器 https://braft.margox.cn/

如何从零开源一个React组件          
https://zhuanlan.zhihu.com/p/73605806

从零开发一款轻量级滑动验证码插件
https://juejin.cn/post/7007615666609979400

如何在React项目中使用ECharts图表库 https://juejin.cn/post/6920424288122044424

webpack5+react18+ts+antd5 https://juejin.cn/post/7184809135504883773

React修改Antd组件样式的方法
https://juejin.cn/post/6844903732182777869

React 如何修改 antd 组件样式
https://blog.csdn.net/qq_40868156/article/details/128553322

【React】万字长文！100+个让你事半功倍的常用 React Hooks 和工具包 https://juejin.cn/post/7196943285381464101

如何正确的捕获React中的错误
https://juejin.cn/post/7202541740934479927?

fiber 架构： https://q.shanyue.tech/fe/react/165.html
循环条件：利用 requestIdeCallback 空闲时间递减.
遍历过程：利用链表，找孩子找兄弟找父亲

react hooks 的原理是什么
闭包 + 链表

React 17.0 有什么变化
1.合成事件的变化，事件委托放在了 root 元素上，同时去掉了事件池 
2.全新 jsx 的变化，可以单独使用 jsx，不需要手动引入 react;旧版 jsx 会被转换为 React.createElement, 新版 jsx 转换为_jsx()

react 将所有事件统一映射托管到 FiberRoot，这样做有如下优势：

提供统一的 API，抹平各大浏览器差异
所有事件绑定在 React Root Element 进行事件委托

用户不用再考虑浏览器兼容性问题，可以专心于功能实现
便于对事件的管理，比如新增、删除、修改事件均可在此处做处理

在 React hooks 中如何模拟 forceUpdate https://q.shanyue.tech/fe/react/616.html
const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
function handleClick() {
  forceUpdate();
}

useEffect 和 useLayoutEffect 的区别
https://juejin.cn/post/6844904008402862094

useLayoutEffect 和 useEffect 有什么区别
useLayoutEffect 要比 useEffect 更早的触发执行；
useLayoutEffect 会阻塞浏览器渲染，切记执行同步的耗时操作

「React 深入」一文吃透React v18全部Api（1.3w+）
https://juejin.cn/post/7124486630483689485#heading-13


React Hooks 实现原理 🔥🔥🔥

原理？
Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。
在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用。
链接：https://juejin.cn/post/7085609851720024072

react-32-样式隔离-引入css方式-vue对比
https://www.jianshu.com/p/8df30aed781e

React 样式与隔离
https://www.jianshu.com/p/1c517b1fa643
React中组件样式隔~index.module.css（详细版）
https://blog.csdn.net/weixin_48037671/article/details/123802244

React 代码拆分的几种方式
https://juejin.cn/post/7207063000146051128?
动态加载（import）
loadable component
React Lazy 和 React Suspense

react-window虚拟渲染(不固定高度)
https://juejin.cn/post/7120463085856358414

React 重新渲染指南
https://juejin.cn/post/7129670327725981732

【React】面试官：如何在页面刷新之后保持状态？看看你知道几种~
https://juejin.cn/post/7197372790398402615
1、LocalStorage
1.1 useLocalStorage
2、URL 参数
3、@reduxjs/toolkit 结合 Redux-persist
3.1 Nested persists
3.2 状态如何合并
3.3 自定义持久化内容
3.4 其他Redux相关的持久化库
4、recoil + recoil-persist
5、zustand（自带persist）
5.1 zustand 基本用法
5.2 处理异步数据
5.3 zustand 实现状态持久化

「React进阶」 React全部api解读+基础实践大全(夯实基础2万字总结)
https://juejin.cn/post/6950063294270930980

React实战精讲(React_TS/API)
https://mp.weixin.qq.com/s/HHN7b3kyJS5jeRDi-JdeAA

 =============0421

【从0-1实现组件系列（1）】实现一个 Tag 组件
https://juejin.cn/post/7204285137046978620
【从0-1实现一个组件库（2）】实现一个 Button
https://juejin.cn/post/7205092873326247973


React 时间切片是一种通过将任务分割成小的时间片然后分批次处理任务以提高应用程序性能的技术。除了优化应用程序性能，时间切片还可以更好地控制渲染过程，以便用户可以快速看到应用程序的变化。
要实现时间切片，React 提供了 Scheduler API 作为一组工具和算法来管理任务并将它们排入队列。开发者可以使用 Scheduler API 来实现任务的优先级和任务的调度，来提高应用程序的性能和用户体验。

链接：https://juejin.cn/post/7211064454574014521


React 17 的那些变更
https://www.bilibili.com/video/BV12i4y1L7nq/
https://juejin.cn/post/7212529038875443259
（本文章配有b站讲解视频）
一、全新的 JSX 转换
二、事件委托的变更
三、事件系统相关更改
四、去除事件池
五、副作用清理时间
六、返回一致的 undefined 错误
七、原生组件栈
八、移除私有导出
九、启发式更新算法更新

React懒加载原理
React利用 React.lazy与import()实现动态加载 ，利用Suspense来处理异步加载资源时页面如何显示。

8. React中hooks为什么不能用if判断
可能会导致 hooks 的执行顺序发生改变，因为 React Hooks 内部是通过 hooks 的调用顺序来区分是哪个 hook
以 useState 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在 memoizeState。
update 阶段，每次调用 useState，链表就会执行 next 向后移动一步。如果将 useState 写在条件判断中，假设条件判断不成立，没有执行里面的 useState 方法，会导致接下来所有的 useState 的取值出现偏移，从而导致异常发生。
链接：https://juejin.cn/post/7219097755737636901


竟然可以在react中使用vue指令，快来看看吧。
https://juejin.cn/post/7219862257644732473? 


【React错误处理】超全指南来了
https://juejin.cn/post/7225076114561253413?utm_source=gold_browser_extension
方法汇总
1. try...catch
2. window.onerror
3. addEventListener('error')
4. addEventListener('unhandledrejection')