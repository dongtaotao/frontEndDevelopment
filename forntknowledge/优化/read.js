3. fiber核心(react 16)  
旧: 浏览器渲染引擎单线程, 计算DOM树时锁住整个线程, 所有行为同步发生,
有效率问题, 期间react会一直占用浏览器主线程，如果组件层级比较深，相应的堆栈也会很深， 
长时间占用浏览器主线程, 任何其他的操作（包括用户的点击，鼠标移动等操作）都无法执行
新: 重写底层算法逻辑, 引入fiber时间片, 异步渲染, react会在渲染一部分树后检查是
否有更高优先级的任务需要处理(如用户操作或绘图), 处理完后再继续渲染, 并可以更新优
先级, 以此管理渲染任务. 加入fiber的react将组件更新分为两个时期（phase 1 && phase 2）
，render前的生命周期为phase1，render后的生命周期为phase2, 1可以打断,
2不能打断一次性更新. 三个will生命周期可能会重复执行, 尽量避免使用

webpack构建完整过程
初始化：启动构建，读取与合并配置参数， 加载Plugin, 实例化 Compiler 
编译：从Entry发出，针对每个Module串行调用对应的Loader去翻译文件内容，
  再找到该Module依赖的Module, 递归地进行编译处理。
输出：对编译后的Module组合成Chunk, 把Chunk转换成文件，输出到本地。

JS算法之深度优先遍历(DFS)和广度优先遍历(BFS)
https://segmentfault.com/a/1190000018706578
CORS跨域的原理

7. Web Worker
现代浏览器为JavaScript创造的 多线程环境。可以新建并将部分任务分配到worker线程并行运行，
两个线程可 独立运行，互不干扰，可通过自带的 消息机制 相互通信。 
基本用法:
// 创建 worker
const worker = new Worker('work.js');
// 向 worker 线程推送消息
worker.postMessage('Hello World');
// 监听 worker 线程发送过来的消息
worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
}

限制:
同源限制
无法使用 document / window / alert / confirm
无法加载本地资源
作者：郭东东
链接：https://juejin.cn/post/6844903776512393224

要了解 Fiber，我们首先来看为什么需要它
问题: 随着应用变得越来越庞大，整个更新渲染的过程开始变得吃力，大量的组件渲染会导致主进程长时间被占用，
导致一些动画或高频操作出现卡顿和掉帧的情况。而关键点，便是 同步阻塞。在之前的调度算法中，React 需要实例化
每个类组件，生成一颗组件树，使用 同步递归 的方式进行遍历渲染，而这个过程最大的问题就是无法 暂停和恢复。
解决方案: 解决同步阻塞的方法，通常有两种: 异步 与 任务分割。而 React Fiber 便是为了实现任务分割而诞生的
简述
在 React V16 将调度算法进行了重构， 将之前的 stack reconciler 重构成新版的 fiber reconciler，
变成了具有链表和指针的 单链表树遍历算法。通过指针映射，每个单元都记录着遍历当下的上一步与下一步，从而
使遍历变得可以被暂停和重启
这里我理解为是一种 任务分割调度算法，主要是 将原先同步更新渲染的任务分割成一个个独立的 小任务单位，根
据不同的优先级，将小任务分散到浏览器的空闲时间执行，充分利用主进程的事件循环机制
核心
Fiber 这里可以具象为一个 数据结构
当遇到进程阻塞的问题时，任务分割、异步调用 和 缓存策略 是三个显著的解决思路。
https://blog.poetries.top/FE-Interview-Questions/excellent-docs/6-React.html#_32%E3%80%81fiber

42 diff 算法?
  把树形结构按照层级分解，只比较同级元素
  给列表结构的每个单元添加唯一的 key 属性，方便比较
  React 只会匹配相同 class 的 component(这里面的 class 指的是组件的名字)
  合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个 事件循环结束,
  React 检查所有标记 dirty 的 component 重新绘制.
  选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

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

45 React的Fiber工作原理，解决了什么问题
  React Fiber 是一种基于浏览器的单线程调度算法。
  React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。
  但是之前数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，
  将原来的 递归diff 变成了现在的 遍历diff，这样就能做到异步可更新了

46 setState 是同步的还是异步的
  有时表现出同步，有时表现出异步

  setState 只有在 React 自身的合成事件和钩子函数中是异步的，在原生事件和 setTimeout 中都是同步的
  setState 的异步并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，
  只是合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的异步。
  当然可以通过 setState 的第二个参数中的 callback 拿到更新后的结果
  setState 的批量更新优化也是建立在异步（合成事件、钩子函数）之上的，
  在原生事件和 setTimeout 中不会批量更新，在异步中如果对同一个值进行多次 setState，setState
  的批量更新策略会对其进行覆盖，去最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新
  合成事件中是异步
  钩子函数中的是异步
  原生事件中是同步
  setTimeout中是同步

hooks 为什么不能放在条件判断里
  以 setState 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在 memoizeState 属性中
  update 阶段，每次调用 setState，链表就会执行 next 向后移动一步。如果将 setState 写在条件判断中，
  假设条件判断不成立，没有执行里面的 setState 方法，会导致接下来所有的 setState 的取值出现偏移，
  从而导致异常发生。

了解JsBridge原理吗？ Hybrid最核⼼的就是Navite和H5的双向通讯,
  ⽽通讯是完全依赖于native提供的webview容 器，那native提供的这个webview
  容器有什么特点能⽀撑起h5和native的通讯呢？具体的通讯 流程到底是什么样⼦呢？
  ⾸先说明有两种⽅式： URL Schema， 客户端通过拦截webview请求来完成通讯
  native向webview中的js执⾏环境, 注⼊API, 以此来完成通讯

22.Hybrid如何通信的?
  API注入，原理其实就是 Native 获取 JavaScript环境上下文，
  并直接在上面挂载对象或者方法，使 js 可以直接调用，Android 与 IOS 分别拥有对应的挂载方式
  WebView 中的 prompt/console/alert 拦截，通常使用 prompt，因为这
  个方法在前端中使用频率低，比较不会出现冲突
  WebView URL Scheme 跳转拦截 
链接：https://juejin.cn/post/6896810576778166280

拦截 URL SCHEME
URL SCHEME是一种类似于url的链接，是为了方便app直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的，
例如: qunarhy://hy/url?url=ymfe.tech，protocol 是 qunarhy，host 则是 hy。
拦截 URL SCHEME 的主要流程是：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（
包括所带的参数）进行相关操作。
在实践过程中，这种方式有一定的缺陷：
使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。
创建请求，需要一定的耗时，比注入 API 的方式调用同样的功能，耗时会较长。

webpack的基本功能和工作原理？
  1、代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等
  2、文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等
  3、代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
  4、模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件
  5、自动刷新：监听本地源代码的变化，自动构建，刷新浏览器
  6、代码校验：在代码被提交到仓库前需要检测代码是否符合规范，以及单元测试是否通过
  7、自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

关于webpack问答记录
https://blog.csdn.net/sinat_17775997/article/details/104058468

7.聊聊 redux-thunk 是如何实现异步 action 的？ 
  在 redux-thunk 中会判断 action 的类型，如果 action 的类型为函数，
  则执行 该 action 函数，并且将 dispatch 作为参数，将自身的 dispatch
  操作延迟 到 action 函数中执行，由 action 函数决定何时（可能是异步操作后）执 行 dispatch

9.介绍下 webpack 热更新原理，是如何做到 在不刷新浏览器的前提下更新页面的
  1).当修改了一个或多个文件；
  2).文件系统接收更改并通知 webpack；
  3).webpack 重 新 编译 构 建 一个 或 多 个模 块 ， 并通 知 HMR （ Hot Module Replacement） 
    服务器进行更新；
  4).HMR Server 使用 Websocket 通知 HMR runtime 需要更新，HMR runtime 通过 HTTP 请求更新 jsonp；
  5).HMR runtime 替换更新中的模块，如果确定这些模块无法更新，则触发整 个页面刷新；

简述:
在 React V16 将调度算法进行了重构， 将之前的 stack reconciler 重构成新版的
fiber reconciler，变成了具有链表和指针的 单链表树遍历算法。通过指针映射，
每个单元都记录着遍历当下的上一步与下一步，从而使遍历变得可以被暂停和重启。
这里我理解为是一种 任务分割调度算法，主要是 将原先同步更新渲染的任务分割
成一个个独立的 小任务单位，根据不同的优先级，将小任务分散到浏览器的空闲时间
执行，充分利用主进程的事件循环机制。

fiber
react在进行组件渲染时，从setState开始到渲染完成整个过程是同步的（“一气呵成”）。
如果需要渲染的组件比较庞大，js执行会占据主线程时间较长，会导致页面响应度变差，
使得react在动画、手势等应用中效果比较差。

为了解决这个问题，react团队经过两年的工作，重写了react中核心算法——reconciliation。
并在v16版本中发布了这个新的特性。为了区别之前和之后的reconciler，
通常将之前的reconciler称为stack reconciler，重写后的称为fiber reconciler，简称为Fiber。

卡顿原因
Stack reconciler的工作流程很像函数的调用过程。父组件里调子组件，可以类比为函数的递归
（这也是为什么被称为stack reconciler的原因）。在setState后，react会立即开始
reconciliation过程，从父节点（Virtual DOM）开始遍历，以找出不同。
将所有的Virtual DOM遍历完成后，reconciler才能给出当前需要修改真实DOM的信息，
并传递给renderer，进行渲染，然后屏幕上才会显示此次更新内容。对于特别庞大的vDOM树来说，
reconciliation过程会很长(x00ms)，在这期间，主线程是被js占用的，
因此任何交互、布局、渲染都会停止，给用户的感觉就是页面被卡住了。

useCallback 和 useMemo 总结
简单理解呢 useCallback 与 useMemo 一个缓存的是函数，一个缓存的是函数的返回的结果。
useCallback 是来优化子组件的，防止子组件的重复渲染。useMemo 可以优化当前组件也可以优
化子组件，优化当前组件主要是通过 memoize 来将一些复杂的计算逻辑进行缓存。当然如果只是
进行一些简单的计算也没必要使用 useMemo。
链接：https://juejin.cn/post/6993139082054336548
 
打包结果优化 ************************************************************===================
  删除无用的代码 Tree-Shaking 
  提取公共以来的模块代码commonsChunkplugin
  按需加载 babel-plugin-import
  压缩代码js css
  代码分割
  利用cdn加速， 在构建过程中将引用的静态资源路径修改为CDN上对应的路径
  作用域提升 Scope Hoisting 会分析出模块之间的依赖关系，
    尽可能的把打包出来的模块合并到一个函数中去。
  分离css抽取

构建
1.缩小文件范围
2.resolve.modules: 用于配制webpack去哪些目录下寻找第三方模块（node-modules）
3.resolve.extensions:在导入没带文件后缀的路径时，webpack会自动带上后缀去尝试文件是否存在 [js, json]
4.使用resolve.include/exclude： 以babel-loader为例，可以通过include和exclude帮助我们避免node-modules这类下文件
5.缓存loader ： cache-loader和uglifyjs-webpack-plugin，将编译结果写进硬盘缓存，下次文件如果没有变化直接拉取缓存
6.开启多进程编译： happypack和thread-loader。提高打包效率
7.静态资源分离，避免每次都需要打包静态资源
8.打包资源压缩 js压缩，html压缩，css压缩，图片压缩，Gzip压缩
9.Tree Shaking可以实现删除项目中未被引用的代码，比如
10.scope Hoisiting
11按需加载 像vue 和 react spa应用，首次加载的过程中，由于初始化要加载很多路由，加载很多组件页面。会导致 首屏时间 非常长。
  一定程度上会影响到用户体验。所以我们需要换一种按需加载的方式。一次只加载想要看到的内容
12按需引入不知道大家有没有体会到，当我们用antd等这种UI组件库的时候。明明只想要用其中的一两个组件，却要把整个组件库
  连同样式库一起引进来，就会造成打包后的体积突然增加了好几倍。为了解决这个问题，我们可以采取按需引入的方式。
13开启 JS 多进程压缩
14.抽离公共代码

带你深度解锁Webpack系列(优化篇)
https://juejin.cn/post/6844904093463347208#heading-5

mobx && redux ****
Mobx是一个透明函数响应式编程的状态管理库
https://juejin.cn/post/6924572729886638088#heading-2

* 体积更小
* 合理分包，不重复加载
* 速度更快，内存使用更少

1.小图片base64编码
2.bundle加hash
3.懒加载
4.提取公共代码
5.使用CDN加速
6.IngorePlugin
7.使用production
8.使用Scope Hosting

webpack是一个串行的过程，从启动到结束会依次执行以下流程

初始化参数： 从shell参数和配置文件合并参数，得出最终的参数
开始编译：从上一步获得的参数初始化compiler对象，加载所有的插件，通过run方法执行编译。
确定入口：根据配置文件的entry找出所有入口文件。
编译模块：从入口文件开始，调用所有配置的loader对模块进行翻译成compliation，然后递归所有依赖的模块，然后重复编译。
  得到每个模块翻译后的最终内容以及它们之间的依赖关系。
输出资源：根据入口和模块的依赖关系，组装成一个个包含多个模块的chunk，然后将chunk转换成一个单独的文件加入输出列表，这是可以修改输出内容的最后机会
输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统上。

链接：https://juejin.cn/post/6844903614780030984

MobX 和 Redux 的比较------
Redux 是单一数据源，而 MobX 往往是多个 store。MobX 可以根据应用的 UI、数据或业务逻辑来组织 store，
   具体如何进行需要你自己进行权衡
Redux store 使用普通的 JavaScript 对象结构，MobX 将常规 JavaScript 对象包裹
  ，赋予 observable 的能力，通过隐式订阅，自动跟踪 observable 的变化。MobX 是观察引用的，
   在跟踪函数中（例如：computed value、reactions等等），任何被引用的 observable 的属性都会被记录，
   一旦引用改变，MobX 将作出反应。注意，不在跟踪函数中的属性将不会被跟踪，在异步中访问的属性也不会被跟踪
Redux 的 state 是只读的，只能通过将之前的 state 与触发的 action 结合，产生新的 state，
  因此是纯净的（pure）。
  而 MobX 的 state 即可读又可写，action 是非必须的，可以直接赋值改变，因此是不纯净的（Impure）
Redux 需要你去规范化你的 state，Immutable 数据使 Reducer 在更新时需要将状态树的祖先数据进行复制和更新
，新的对象会导致与之 connect的所有 UI 组件都重复渲染。因此Redux state 不建议进行深层嵌套，或者需要我们在组件中用 
  shouldComponentUpdate 优化。而 MobX 只自动更新你所关心的，不必担心嵌套带来的重渲染问题
redux 管理的是 (STORE -> VIEW -> ACTION) 的整个闭环，而 mobx 只关心 STORE -> VIEW 的部分
优点

基于运行时的数据订阅 mobx 的数据依赖始终保持了最小，而且还是基于运行时。而如果用 redux，
可能一不小心就多订阅或者少订阅了数据。所以为了达到高性能，我们需要借助
 PureRenderMixin 以及 reselect 对 selector 做缓存
通过 OOP 的方式组织领域模型 (domain model) OOP 的方式在某些场景下会比较方便，尤其是容易抽取 domain model 的时候。
进而由于 mobx 支持引用的方式引用数据，所以可以非常容易得形成模型图 (model graph )，这样可以更好地理解我们的应用。
修改数据方便自然 mobx 是基于原生的 JavaScript 对象、数组和 Class实现的。所以修改数据不需要额外语法成本，也不需要始
终返回一个新的数据，而是直接操作数据
缺点

缺最佳实践和社区 mobx 比较新，遇到的问题可能社区都没有遇到过。并且，mobx 并没有很好的扩展/插件机制
随意修改 store
我们都知道 redux 里唯一可以改数据的地方是 reducer，这样可以保证应用的安全稳定；而 mobx 可以随意修改数据，触发更新，给人一种不安全的感觉
最新的mobx 2.2 加入了 action 的支持。并且在开启 strict mode 之后，就只有 action 可以对数据进行修改，限制数据的修改入口。
可以解决这个问题
逻辑层的限制

如果更新逻辑不能很好地封装在 domain class 里，用 redux 会更合适。另外，mobx缺类 redux-saga 的库，业务逻辑的整合不知道放哪合适
https://blog.poetries.top/FE-Interview-Questions/principle-docs/react/03-MobX%E6%80%BB%E7%BB%93.html#%E4%B8%80%E3%80%81%E8%AE%A4%E8%AF%86mobx

1.2 redux-thunk源码
在redux中，thunk是redux作者给出的中间件，实现极为简单，10多行代码
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

useEffect执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。
useLayoutEffect 执行顺序: 组件更新挂载完成 -> 执行 useLayoutEffect 回调-> 浏览器dom绘制完成。

useLayoutEffect:是在所有DOM变更之后浏览器渲染之前调用，既同步调用
useEffect:是在组件渲染到屏幕之后执行，既异步调用

requestAnimationFrame属于宏任务还是微任务
https://blog.csdn.net/weixin_33874713/article/details/91436408
window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
所以，requestAnimationFrame的回调时机也是在当前的tick中，所以不属于宏任务，
但也不是微任务，排在微任务之后。

requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，
造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，
让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果
【1】requestAnimationFrame会把每一帧中的所有DOM操作集中起来，
在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
【2】在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，
这当然就意味着更少的CPU、GPU和内存使用量
【3】requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会
自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销

介绍一下HTTP/2.0新特性
多路复用： 即多个请求都通过一个TCP连接并发地完成
服务端推送： 服务端能够主动把资源推送给客户端
新的二进制格式： HTTP/2采用二进制格式传输数据，相比于HTTP/1.1的文本格式，二进制格式具有更好的解析性和拓展性
header压缩： HTTP/2压缩消息头，减少了传输数据的大小

redux-saga 和 mobx 的比较
1）状态管理
redux-sage 是 redux 的一个异步处理的中间件。
mobx 是数据管理库，和 redux 一样。
2）设计思想
redux-sage 属于 flux 体系， 函数式编程思想。
mobx 不属于 flux 体系，面向对象编程和响应式编程。
3）主要特点
redux-sage 因为是中间件，更关注异步处理的，通过 Generator 函数来将异步变为同步，
使代码可读性高，结构清晰。action 也不是 action creator 而是 pure action，
在 Generator 函数中通过 call 或者 put 方法直接声明式调用，并自带一些方法，
如 takeEvery，takeLast，race等，控制多个异步操作，让多个异步更简单。
mobx 是更简单更方便更灵活的处理数据。 Store 是包含了 state 和 action。state
包装成一个可被观察的对象， action 可以直接修改 state，
之后通过 Computed values 将依赖 state 的计算属性更新 ，
之后触发 Reactions 响应依赖 state 的变更，输出相应的副作用 ，但不生成新的 state。
4）数据可变性
redux-sage 强调 state 不可变，不能直接操作 state，
通过 action 和 reducer 在原来的 state 的基础上返回一个新的
state 达到改变 state 的目的。
mobx 直接在方法中更改 state，同时所有使用的 state 都发生变化，不生成新的 state。
5）写法难易度
redux-sage 比 redux 在 action 和 reducer 上要简单一些。
需要用 dispatch 触发 state 的改变，需要 mapStateToProps 订阅 state。
mobx 在非严格模式下不用 action 和 reducer，在严格模式下需要在 action 中修改 state，并且自动触发相关依赖的更新。
6）使用场景
redux-sage 很好的解决了 redux 关于异步处理时的复杂度和代码冗余的问题，
数据流向比较好追踪。但是 redux 的学习成本比 较高，代码比较冗余，
不是特别需要状态管理，最好用别
的方式代替。
mobx 学习成本低，能快速上手，代码比较简洁。但是可能因为代码编写的原因和数据更新时相对黑盒，
导致数据流向不利于追踪。

用 React 实现服务器渲染有以下好处：
1. 利于 SEO：React 服务器渲染的方案使你的页面在一开始就有一个 HTML DOM 结构，
方便 Google 等搜索引擎的爬虫能爬到网页的内容。
2. 提高首屏渲染的速度：服务器直接返回一个填满数据的 HTML，而不是在请求了 HTML
 后还需要异步请求首屏数据。
3. 前后端都可以使用 js

tree shaking的原理是什么?https://segmentfault.com/a/1190000038962700
ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码

webpack构建流程
1 初始化参数：解析webpack配置参数，合并shell传入和webpack.config.js文件配置的参数，形成最后的配置结果；
2 开始编译：上一步得到的参数初始化compiler对象，注册所有配置的插件，插件监听webpack构建生命周期的事件节点，做出相应的反应，
  执行对象的 run 方法开始执行编译；
3 确定入口：从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去；
4 编译模块：递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖
  的文件都经过了本步骤的处理；
5 完成模块编译并输出：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据entry或分包配置生成代码块chunk；
6 输出完成：输出所有的chunk到文件系统；

注意：在构建生命周期中有一系列插件在做合适的时机做合适事情，
比如UglifyPlugin会在loader转换递归完对结果使用UglifyJs压缩覆盖之前的结果。

有哪些方式可以减少 Webpack 的打包时间
有哪些方式可以让 Webpack 打出来的包更小

优化 Loader HappyPack 代码压缩 resolve.extensions resolve.alias
按需加载 Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。 Tree Shaking

timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调
I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调
idle, prepare 阶段：仅 node 内部使用
poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里
check 阶段：执行 setImmediate() 的回调
close callbacks 阶段：执行 socket 的 close 事件回调


2
牛客网华为机试在线训练JavaScript版解答
https://blog.csdn.net/qq_25073545/article/details/80489694

牛客网华为机试考试java_牛客网华为机试题（JavaScript）
https://blog.csdn.net/weixin_34803977/article/details/114524607?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242

牛客网华为机试题（JavaScript）
https://blog.csdn.net/qq_25481047/article/details/104543214?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

牛客网华为机试在线训练JavaScript版解答
https://www.daimajiaoliu.com/daima/47970fc3d9003f8


7.聊聊 redux-thunk 是如何实现异步 action 的？
在 redux-thunk 中会判断 action 的类型，如果 action 的类型为函数，
则执行 该 action 函数，并且将 dispatch 作为参数，将自身的 dispatch 操
作延迟 到 action 函数中执行，由 action 函数决定何时（可能是异步操作后）执行 dispatch.

9.介绍下 webpack 热更新原理，是如何做到 在不刷新浏览器的前提下更新页面的
1).当修改了一个或多个文件；
2).文件系统接收更改并通知 webpack；
3).webpack 重新编译 构 建 一个 或 多 个模 块 ， 并通 知 HMR （ Hot Module Replacement）
服务器进行更新；
4).HMR Server 使用 Websocket 通知 HMR runtime 需要更新，HMR runtime 通过 HTTP 请求更新 jsonp；
5).HMR runtime 替换更新中的模块，如果确定这些模块无法更新，则触发整 个页面刷新；
 
《剑指Offer》JavaScript实战汇总 https://blog.csdn.net/weixin_42148873/category_9848133_2.html
剑指 offer -- JavaScript 版 精 https://www.nowcoder.com/discuss/49349
https://www.cnblogs.com/wuguanglin/p/code-interview.html  JS版剑指offer

https://www.nowcoder.com/company/home/code/665?codeType=1 字节

https://blog.csdn.net/weixin_42148873/category_10794148.html   
牛客题  
 
