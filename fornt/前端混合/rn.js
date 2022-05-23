React Native 框架构成  https://zhuanlan.zhihu.com/p/41920417
React Native 原理与实践 https://juejin.cn/post/6916452544956858382
React Native之原理浅析 http://blog.poetries.top/2019/10/02/rn-yuanli/

React Native 框架内部已提供了很多的内置组件，如图 3-1 所示。如 View、Text 等基本组件，
用于一些功能布局的 Button、Picker 等，用于列表展示的各种 List 组件和对应 iOS 平台与 Android 
平台的特定组件、API 等。
同时也提供了供编写与原生平台交互的接口，在后续的章节我们会进行与原生平台的混合实战开发实战。 

React Native 工作原理
图 3-2 React Native 渲染 在 React 框架中，JSX 源码通过 React 
框架最终渲染到了浏览器的真实 DOM 中，而在 React Native 框架中，
JSX 源码通过 React Native 框架编译后，通过对应平台的 Bridge
实现了与原生框架的通信。如果我们在程序中调用了 React Native 提供的 API，
那么 React Native 框架就通过 Bridge 调用原生框架中的方法。 
因为 React Native 的底层为 React 框架，所以如果是 UI 层的变更，
那么就映射为虚拟 DOM 后进行 diff 算法，diff 算法计算出变动后的 JSON 映射文件，
最终由 Native 层将此 JSON 文件映射渲染到原生 App 的页面元素上，
最终实现了在项目中只需要控制 state 以及 props 的变更来引起 iOS 与 Android 
平台的 UI 变更。 编写的 React Native代码最终会打包生成一个
 main.bundle.js 文件供 App 加载，此文件可以在 App 设
也可以存放于服务器上供 App 下载更新，后续章节讲解的热更新就会涉及到 main.bundle.js
 位置的设置问题。


3.3 React Native 与原生平台通信
在与原生框架通信中，如图 3-3 所示，React Native 
采用了 JavaScriptCore 作为 JS VM，中间通过 JSON 文件与 
Bridge 进行通信。而如果在使用 Chrome 浏览器进行调试时，
那么所有的 JavaScript 代码都将运行在 Chrome 的 V8 引擎中，
与原生代码通过 WebSocket 进行通信。

1.React Native相对于原生的ios和Android有哪些优势？
  1.性能媲美原生APP
  2.使用JavaScript编码，只要学习这一种语言
  3.绝大部分代码安卓和IOS都能共用
  4.组件式开发，代码重用性很高
  5.跟编写网页一般，修改代码后即可自动刷新，不需要慢慢编译，节省很多编译等待时间
  6.支持APP热更新，更新无需重新安装APP
缺点：
  内存占用相对较高
  版本还不稳定，一直在更新，现在还没有推出稳定的1.0版本
链接：https://juejin.cn/post/6844903583368871943

6.reactJS的props.children.map函数来遍历会收到异常提示，为什么？应该如何遍历？
this.props.children 的值有三种可能：
1.当前组件没有子节点，它就是 undefined;
2.有一个子节点，数据类型是 object ；
3.有多个子节点，数据类型就是 array 。
系统提供React.Children.map()方法安全的遍历子节点对象

8.加载bundle的机制
要实现RN的脚本热更新，我们要搞明白RN是如何去加载脚本的。 在编写业务逻辑的时候
，我们会有许多个js文件，打包的时候RN会将这些个js文件打包成一个叫index.android.bundle
(ios的是index.ios.bundle)的文件，所有的js代码(包括rn源代码、第三方库、业务逻辑的代码)
都在这一个文件里，启动App时会第一时间加载bundle文件，所以脚本热更新要做的事情就是替换掉
这个bundle文件。

10.请简述 code push 的原理
code push 调用 react native 的打包命令，将当前环境的非 native 代码全量打包成一个
bundle 文件，然后上传到微软云服务器（Windows Azure）。 在 app 中启动页（或 splash 页）
编写请求更新的代码（请求包含了本地版本，hashCode、appToken 等信息），微软服务端对比本地
 js bundle 版本和微软服务器的版本，如果本地版本低，就下载新的 js bundle 下来后实
 现更新(code push 框架实现)。

https://zhuanlan.zhihu.com/p/339317763
所以 React Native = JavaScript Core + React.js + Bridges
Java层: 主要负责 Native 的 UI 渲染和底层功能调用, Java 层的核心 jar 包是 react-native.jar, 封装了很多接口,
例如 Module, Registry, Bridge
C++层: 主要封装了 JavaScriptCore, 起到了解析 JS 代码的作用
JS 层: 利用 JS 代码去进行事件的分发和 UI 代码的编写, 主要以下几部分:
Component: 编写 JSX 来构建虚拟 DOM
Lifecycle: 生命周期必不可少, 可以在组件的各种时期器进行一些操作
Layout: 使用 FlexBox 进行布局, 用 css-layout, 不依赖 DOM, 可以编译成 Native 端代码, 用于布局样式的展示, 目前不支持 CSS3

Bridge
Bridge 顾名思义就是 JS 和 Native 通信的一个桥梁, 所有的本地存储、图片资源访问、图形绘制、3D加速、
网络访问、震动效果、NFC、原生控件绘制、地图、定位、通知等等很多功能都是由 Bridge 封装成 JS 接口以后
注入 JS Engine 供 JS 调用

每一个支持 RN 的原生功能必须有同一个原生模块和一个 JS 模块, JS 模块方便调用其接口,
原生模块去根据接口调用原生功能实现原生效果

Bridge 原生代码负责管理原生模块并能够方便的被 React 调用, 每个功能 JS 封装主要是对 React
 做适配, JS 和 Native 之间不存在任何指针传递, 所有的参数均由字符串传递

Bridge 如何工作
JS 和 IOS 通信用的是 JavaScript Core
JS 和 Android 通信用的是 Hermes

RN 现在主要有 3 个线程
JS Thread 执行线程, 负责逻辑层面的处理, Metro 将 React 源码打包成 bundle 文件, 然后传给 JS 引擎执行, 现在 IOS 和 Android
  统一的是 JSC
UI Thead 主要主责原生渲染 Native UI 和调用原生能力 (Native Module)
Shadow Thead 这个线程主要创建 Shadow Tree 来模拟 React 结构树, 
RN 使用 Flexbox 布局, 但是原生不支持, Yoga 引擎就是将 Flexbox 布局转换为原生布局的

Brige的缺点
有两个不同的领域 JS 和 Native, 他们彼此之间不能相互感知, 也并不能共享相同内存
通信基于 Bridge 的异步通信, 所以并不能保证数据百分百及时传达到另一侧
JSON 传输大数据非常慢, 内存不能共享, 所有的传输都是新的复制
无法同步更新 UI, 比方在渲染列表的时候, 滑动大量加载数据, 屏幕可能会发生卡顿或闪烁
RN 代码仓库很大, 库比较重, 所以修复 Bug 和开源社区贡献代码的效率也相应更慢
因此解决 Bridge 的缺点主要遵从三个原则
  JS 和 Native 不用通信, 或者直接不走 Bridge
  JS 和 Native 减少通信, 在两端无法避免的情况下, 避免通信减少次数, 多个请求可以合成一个
  减少 JSON 的大小

https://juejin.cn/post/6916452544956858382 React Native 原理与实践

React Native 的特点
跨平台
  React Native 使用了 Virtual DOM(虚拟 DOM)，只需编写一套代码，便可以将代码打包成不同平台的 App，极大提高了开发效率，并且相对全
  部原生开发的应用来说，维护成本也相对更低。
上手快
  相比于原生开发，JavaScript 学习成本低、语法灵活。允许让 Web 开发者更多地基于现有经验开发 App。React Native 只
  需使用 JavaScript 就能编写移动原生应用，它和 React 的设计理念是一样的，因此可以毫不夸张地说：你如果会写 React，就会写 React Native!
原生体验
  由于 React Native 提供的组件是对原生 API 的暴露，虽然我们使用的是 JavaScript 语言编写的代码，但是实际上是调用了
  原生的 API 和原生的 UI 组件。因此，体验和性能足以媲美原生应用。
热更新
  React Native 开发的应用支持热更新，因为 React Native 的产物是 bundle 文件，其实本质上就是 JS 代码，
  在 App 启动的时候就会去服务器上获取 bundle 文件，我们只需要更新 bundle 文件，从而使得 App 不需要重新前往商店
  下载包体就可以进行版本更新，开发者可以在用户无感知的情况下进行功能迭代或者 bug 修复。但是值得注意的是，AppStore 
  禁止热更新的功能中有调用私有 API、篡改原生代码和改变 App 的行为。

React Native 原理
JavaScriptCore
JavaScriptCore 是 JavaScript 引擎，通常会被叫做虚拟机，专门设计来解释和执行 JavaScript 代码。
在 React Native 里面，JavaScriptCore 负责 bundle 产出的 JS 代码的解析和执行。

JS Engine
React Native 需要一个 JS 的运行环境，因为 React Native 会把应用的 JS 代码编译成一个 JS
文件（x x.bundle），React Native 框架的目标就是解释运行这个 JS 脚本文件，如果是 Native
 拓展的 API，则直接通过 bridge 调用 Native 方法，最基础的比如绘制 UI 界面，映射 
  Virtual DOM 到真实的 UI 组件中。

(在 React Native 里所有 Native 和 JS 互调都是通过 Bridge 层的几个最基础的方法衔接的)

Hermes Engine
Hermes 是 Facebook 在 2019 年发布的新一代 JS Engine，Hermes 是一款小巧轻便的 JavaScript 引擎，专门针对在 Android 上运行 React Native 进
行了优化：应用启动时间减少、减少内存使用量并缩小应用程序大小，此外因为它采用 JavaScript 标准实现，所以很容易在 React Native 应用中集成。

Bridge
在 React Native 中，原生端和 JavaScript 交互是通过 Bridge 进行的，Bridge 的作用就是给
React Native 内嵌的 JS Engine 提供原生接口的扩展供 JS 调用。所有的本地存储、图片资源访
问、图形图像绘制、3D 加速、网络访问、震动效果、NFC、原生控件绘制、地图、定位、通知等都是通过
 Bridge 封装成 JS 接口以后注入 JS Engine 供 JS 调用。理论上，任何原生代码能实现的效果都可
 以通过 Bridge 封装成 JS 可以调用的组件和方法, 以 JS 模块的形式提供给 RN 使用。

三个线程
  在 React Native 里面，真正有三个重要的线程在执行，他们分别是 Shadow thread、UI thread 和 JS thread。
  JS thread： 其实是 JavaScript 线程，负责 JS 和原生代码的交互线程，因为 JS 是单线程模型，所以需要一个单独的线程来驱动，
    并且 JS 和 Native 交互是异步的。
  Shadow thread: 这个线程是负责 Native 布局，提供给 yoga 引擎使用。
  UI thread：这个可以看作是主线程，可以看作是 UI Manager 线程，负责页面的交互和控件绘制逻辑。
热更新
  React Native 的产物 bundle 文件，本质上是 JS 的逻辑代码加上 React Native 的 Runtime 的集合，所以在应用一启动
  的时候就会去获取 bundle 文件，之后解析 bundle 文件，最后再由 JS Engine 去执行具体的业务代码逻辑。这就可以允许开发
  者在云端去更新 bundle 文件，然后应用启动的时候获取最新的 bundle 文件，这一整个流程下来就实现了热更新。
增量更新（拆包）
  对于 React Native 的代码打包之后只会生成一个 Bundle 文件，这里面包含了基础业务逻辑、React Native 的基础库类，
  所以我们可以把一个包拆分成：一个基础包+ n 个业务包，其中基础包是不变的，这就是 runtime，业务包就是具体的业务，后面如
  果有更新，也只需要再打出一个业务包就行。
  目前行业的解决方案有 facebook 官方提供的 metro bundle：facebook.github.io/metro/

总结 & 拓展
React Native 的不足
由于 React Native 和原生交互依赖的只有一个 Bridge，而且 JS 和 Native 交互是异步的，所以对需要和 Native 大量实时交互的功
能可能会有性能上的不足，比如动画效率，性能是不如原生的。
React Native 始终是依赖原生的能力，所以摆脱不了对原生的依赖，相对 Flutter 的自己来画 UI 来说，React Native 显得有些尴尬。

和其他跨端技术比较
Flutter vs React Native
  首先来简单了解下 Flutter 和 React Native 的背景，Flutter 是由谷歌开发的软件开发工具包（SDK）。
  它可以帮助开发人员使用单一代码库构建 iOS 和 Android 应用程序。React Native 与 Flutter 具有
  相同的目的，但方式不同。它是由 Facebook 建立的，基于 React 用于创建移动应用程序，而不会影响
  应用程序的外观和感觉。
开发体验
  React Native 在界面开发延续了 React 开发风格，支持 css-in-js(其实就是用 js 来写 css)，
  而且在 0.59 版本之后支持了 React Hook 函数式编程，开发的时候大多只关心样式界面的搭建，原生能力有客户端或者 Bridge 实现。
  Flutter 最大的特点在于：Flutter 是一套平台无关的 UI 框架，并且在 Flutter 里面万物皆 Widget。
  很多时候开发一个控件需要嵌套多个 Widget 去实现，与 JS 里面的回调地狱有点像，而这也是被吐槽
  代码嵌套样式难看的原因。
状态管理
  React Native 和 Flutter 对于状态管理，两者有着很高的相似度，虽然内部实现很大差别，但是都可
  以获取 state 和 setState 的方式去更新页面的状态。
产物
  React Native 产生的是 bundle 文件，实际上就是 JS 脚本文件；而 Flutter 编译后 Android
  产生的主要是一些应用程序指令段、数据段，虚拟机数据段、指令段，iOS 则是 App.framework，其实也
  是一些原生的数据集。
原生能力 & 性能
  其实两者的在这方面的区别不是很大，性能方面 React Native 稍微差一点。但是在原生灵活性上
  React Native 要有优势。

链接：https://juejin.cn/post/6916452544956858382

JavaScriptCore + ReactJS + Bridges 就成了React Native

JavaScriptCore负责JS代码解释执行
ReactJS负责描述和管理VirtualDom,指挥原生组件进行绘制和更新，同时很多计算逻辑也在js里面进行。ReactJS自身是不直接绘制UI的，
UI绘制是非常耗时的操作，原生组件最擅长这事情。
Bridges用来翻译ReactJS的绘制指令给原生组件进行绘制，同时把原生组件接收到的用户事件反馈给ReactJS。
要在不同的平台实现不同的效果就可以通过定制Bridges来实现

1、首屏渲染问题。采用JS Bundle拆包解决。
2.图片上云   react-native-bundle-visualizer react-native-fast-image
3.缓存，有的数据需要缓存
4、延迟加载。减少图片资源,图片地址 cdn 化抽离公共包
6、响应速度。由于js是单线程，当在执行一些计算量很大的任务时可能会造成堵塞卡顿现象。此时可以将任务稍微延后执行，避免大量任务在同一个js
  事件循环中导致其他任务无法执行。相应的方法有InteractionManager,requestAnimationFrame,setTimeOut(0)等，原理都大同小异
7、刷新问题。每次setState导致的render都会进行一次内存中diff计算，尽管diff效率很高(O(n))，但是还是应该避免不必要的
  diff。 Pure组件、自定义shouldComponentUpdate实现避免不必要的刷新

9、FlatList的优化。
一、减少 re-render shouldComponentUpdate
React.memo React.PureComponent React.useMemo 和 React.useCallback
React Fragments
FlatList：使用 VirtualizedList，
useNativeDrive: true 开启原生动画驱动。

react-devtools

React Native 启动速度优化——JS 篇【全网最全，值得收藏】
https://juejin.cn/post/6951572207940141093

使用 react-native-bundle-visualizer 查看包体积

babel-plugin-import 的使用
其实社区还有一个非常实用的 babel 插件：babel-plugin-import，基本上它可以解决所有按需引用的问题。

React Native 原理与实践
https://juejin.cn/post/6916452544956858382

React Native 性能优化指南【全网最全，值得收藏】
https://juejin.cn/post/6844904041290432525

3.React Native工作原理与生命周期
3.1.框架工作原理
JSX源码通过React Native框架编译后，通过对应平台的Bridge实现了与原生框架的通信
UI层变更就映射为虚拟DOM后调用diff算法计算出变动后的JSON映射文件，最终由Native层将此JSON文件映射渲染到原生App的页面元素上，
实现了项目中只需控制state以及props的变更来引起IOS与Android平台的UI变更

3.2.与原生平台通信
与原生框架通信中，采用了JavaScriptCore作为JS VM，中间通过JSON文件与Bridge进行通信 
Chrome浏览器进行调试，那么所有的JavaScript代码都将运行在Chrome的V8引擎中，与原生代码通过WebSocket进行通信
链接：https://juejin.cn/post/6844904134252969992

8.加载bundle的机制
要实现RN的脚本热更新，我们要搞明白RN是如何去加载脚本的。 在编写业务逻辑的时候，我们会有许多个js文件，打包的时候RN会将这些个js文件打包成一个
叫index.android.bundle(ios的是index.ios.bundle)的文件，所有的js代码(包括rn源代码、第三方库、业务逻辑的代码)都在这一个文件里，
启动App时会第一时间加载bundle文件，所以脚本热更新要做的事情就是替换掉这个bundle文件。

10.请简述 code push 的原理
code push 调用 react native 的打包命令，将当前环境的非 native 代码全量打包成一个 bundle 文件，然后上传到微软云服务器（Windows Azure）。 
在 app 中启动页（或 splash 页）编写请求更新的代码（请求包含了本地版本，hashCode、appToken 等信息），
微软服务端对比本地 js bundle 版本和微软服务器的版本，如果本地版本低，就下载新的 js bundle 下来后实现更新(code push 框架实现)。
作者：ReactNative开发圈
链接：https://juejin.cn/post/6844903583368871943


Native Modules
App需要访问平台API，ReactNative可能还没有相应的模块包装，可以自己实现该特性的封装。
•流程：
1.继承ReactContextBaseJavaModule，重写getName()函数
2.把想暴露的函数使用@ReactMethod注解
3.实现一个类实现ReactPackage接口，在实现createNativeModules时，创建ReactContextBaseJavaModule子类
4.构建ReactInstanceManager时，通过addPackage()将ReactPackage添加进去。

Native UI Component
•RN中已有的组件满足不了需求，通过RN可以很简单把平台UI组件打包供JS调用
•流程：
1.创建ViewManager子类
2.使用@UIProp注释视图属性
3.重写createViewInstance方法
4.重写updataView方法
5.在应用程序软件包中createViewManagers中注册
6.Js中import

加载bundle文件
•loadScriptFromAssets 
•loadScriptFromFile

JSBundle 分包加载
React Native JSBundle拆包之原理篇
http://www.javashuo.com/article/p-cwdjwivv-cs.html
基于splitChunk的React-Native的分包与加载
https://www.jianshu.com/p/ee8c0aa0e232

最好的RN分包方案仍是facebook官方提供的metro bundle，
使用metro bundle进行差分包进行热更新。