作用域插槽【Vue面试题】 🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯
https://www.bilibili.com/video/BV1if4y1x7id/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


ref原理【我是哈默 | Vue小知识】🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯
https://www.bilibili.com/video/BV12C4y1V7Sv/?spm_id_from=autoNext&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



在这个寒冬该如何准备面试
https://juejin.cn/post/7310168607342329896


vue3中做了哪些优化？
Vue 3 带来了许多重要的改进和优化，使其成为一个更快、更轻量、更易于维护的框架。以下是 Vue 3 中的一些关键优化和特性：
Composition API: Vue 3 引入了 Composition API，这是一种新的编写组件的方式，旨在解决 Vue 2 中的一些限制，如逻辑重用和代码组织。Composition API 提供了更好的逻辑复用和组织能力，使得代码更加清晰和易于维护。
性能提升: Vue 3 在渲染性能方面进行了大幅优化。框架的大小减小，渲染速度和更新效率提高。它使用了 Proxy 作为其响应性系统的基础，这比 Vue 2 使用的 Object.defineProperty 方法更高效。
Tree Shaking 支持: Vue 3 是模块化的，支持 Tree Shaking，这意味着如果你不使用某个特性或组件，它们就不会被包含在最终的构建中，从而减小应用的体积。
更好的 TypeScript 支持: Vue 3 从一开始就考虑了 TypeScript 的兼容性，为 TypeScript 用户提供了更好的开箱即用体验。
Fragment, Teleport 和 Suspense: Vue 3 引入了几个新的内置组件，如 Fragment (允许多个根节点)、Teleport (可以将子节点传输到 DOM 树的其他位置) 和 Suspense (用于异步组件的等待状态处理)。
响应式系统的重写: Vue 3 的响应式系统从使用 Object.defineProperty 重写为使用 ES6 的 Proxy。这个变化带来了更好的性能和更少的限制（例如，可以检测属性的添加和删除）。
自定义渲染器 API: Vue 3 提供了一个更低层次的 API，允许开发者创建自己的渲染器。这意味着 Vue 可以用于不同的环境，不仅限于浏览器 DOM。
更好的组件挂载和卸载性能: Vue 3 优化了组件的挂载和卸载过程，使得大型应用中的页面切换更加流畅。
更细粒度的代码拆分: Vue 3 允许更细粒度的代码拆分和延迟加载，进一步减少了应用的初始负载时间。
这些改进使得 Vue 3 成为一个更加强大和灵活的前端框架，适用于从小型项目到大型企业级应用的广泛场景。



js文件相互引用有什么问题？如何解决
JavaScript 文件相互引用，通常指的是模块之间的循环依赖（circular dependencies）。这种情况在较大或较复杂的项目中较为常见，可能会导致一些问题：

问题
初始化顺序不明确：当两个或多个模块相互依赖时，它们的加载和初始化顺序可能变得不可预测，这可能导致运行时错误。
未定义的状态：在循环依赖中，一个模块可能在另一个模块完成加载之前就尝试使用它，这可能导致“undefined”或未初始化的状态。
维护困难：循环依赖使得代码的理解和维护变得更加困难，特别是在大型代码库中。
打包和构建问题：在使用某些打包工具时，循环依赖可能导致构建失败或产生非预期的打包结果。
解决方法
重构代码以消除循环依赖：

拆分模块：将大模块拆分为小的、功能单一的模块。
抽象共享功能：创建一个单独的模块，将共享功能抽象出来，以此减少或消除循环依赖。
使用设计模式：

事件驱动：使用事件监听和触发机制来代替直接的模块间调用。
依赖注入：通过依赖注入来减少模块间的直接依赖。
使用中间件或服务层：

创建一个独立的服务层或中间件来管理不同模块间的交互，这样可以减少模块之间的直接联系。
使用异步导入（如果适用）：

在一些场景中，可以使用异步导入（如 import()）来延迟加载模块，这有助于处理某些循环依赖的场景。
使用设计原则：

遵循单一职责原则（SRP）和最少知识原则（LoD），以减少模块间的紧密耦合。
工具和静态分析：

使用像 ESLint 这样的工具可以帮助识别循环依赖的问题。
利用模块依赖图工具来可视化项目的依赖关系，有助于识别和解决循环依赖。
通过这些方法，可以有效地解决或减轻 JavaScript 文件相互引用带来的问题，使得项目结构更加清晰，易于维护和扩展。



一个很大的json文件，前端读取如何优化
对于大量的 JSON 数据，前端需要进行相应的优化以提高性能：

分页读取：如果服务器端支持，你可以一次性只查询一小部分数据，而不是一次性获取所有数据。这可以通过为 API 添加分页参数（例如 limit 和 offset 或 page 和 pageSize）来实现。同时，前端也可以通过"懒加载"（滚动到底部再加载更多数据）或者"分页加载"（每页只加载一定数量的数据）来逐步显示数据。

流处理：对于非常大的 JSON 文件，一次性读取和解析可能会消耗大量的内存甚至导致浏览器崩溃。一种解决方案是使用Streaming JSON Parser，如 Oboe.js 或 JSONStream。这类库允许你一边下载一边解析 JSON，无需等待完整的 JSON 文件被下载。

选择性读取：如果你仅需要 JSON 中的某部分数据，而且服务端支持 GraphQL 或者类似的 API，那么你可以只获取需要的数据。这样可以减少网络传输的数据量，也减轻了解析和处理 JSON 的负担。

在 Web Worker 中解析 JSON： 如果 JSON 文件非常大，主线程中的 JSON 解析可能会阻塞 UI，导致页面卡顿。使用 Web Worker 可以在后台线程中进行解析，这样就不会影响 UI 的流畅性。

压缩和解压缩：如果可以的话，服务器应该压缩 JSON 响应，在浏览器端使用 gzip 或者 brotli 等解压，这样可以显著降低数据的传输量。

对数据进行索引：如果你需要对大量数据进行搜索或过滤，那么在数据上创建索引可能会很有用。虽然创建索引需要额外的内存和一些处理时间，但是对于复杂的查询，这可能会大大提高性能。

使用适合的数据结构和算法：对于大量的 JSON 数据，选择合适的数据结构和算法进行处理也非常重要，能够有效提高数据处理的性能。
总之，前端处理大 JSON 文件的最佳策略取决于具体的应用场景和需求，可能需要试验不同的优化策略来找出最适合自己的方案。



js   tree-shaking的操作是文件级别还是函数级别的
Tree shaking 是 JavaScript 打包工具（例如 Webpack）中使用的一种技术，用于从最终的打包文件中消除未使用的代码。"Tree shaking" 这个术语来源于摇晃树以使枯叶脱落的概念。
Tree shaking 在函数或变量的级别上操作，而不是整个文件。它是现代 JavaScript 打包工具的一个特性，有助于从最终的打包中消除未使用的代码，从而实现更小的文件大小和更好的性能。
当你将一个模块或库导入到你的代码中，而你只使用该模块中的特定函数或变量时，tree shaking 可以识别并删除未被使用的模块部分。这是在打包过程中通过对代码的静态分析来实现的。
为了使 tree shaking 生效，使用 ES6 模块语法（import 和 export）非常重要，因为它提供了一个清晰的结构，让打包工具分析依赖关系。此外，代码应该以一种允许静态分析的方式编写，
这意味着打包工具可以在不执行代码的情况下确定依赖关系。
总的来说，JavaScript 中的 tree shaking 在函数或变量级别上操作，允许打包工具消除未使用的代码并优化最终的打包大小。


如何从真实DOM到虚拟DOM
涉及到Vue中的模板编译原理，主要过程：
将模板转换成ast 树，ast 用对象来描述真实的JS语法（将真实DOM转换成虚拟DOM）
优化树
将ast 树生成代码

为什么要使用异步组件？
节省打包出的结果，异步组件分开打包，采用jsonp的方式进行加载，有效解决文件过大的问题。
核心就是包组件定义变成一个函数，依赖import（） 语法，可以实现文件的分割加载。


组件中写name 选项有什么作用？
1, 项目使用keep-alive 时，可搭配组件name 进行缓存过滤
2, DOM 做递归组件时需要调用自身name
3, Vue-devtools 调试工具里显示的组见名称是由Vue中组件name决定的


fetch发送2次请求的原因参考回答：
fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？
原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，
询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。


Sentry
Sentry 是一个开源实时事件日志记录和聚合平台。它专门用于监视错误和提取执行适当的事后操作所需的所有信息, 而无需使用标准用户反馈循环的任何麻烦。
Sentry发展多年，几乎没有同类产品可与其媲美。它能覆盖大部分的主流编程语言与框架，很适合应用到实际生产环境中采集异常日志。
采用 C/S 架构，我们需要在私有应用中集成 Sentry 的 SDK 才能在发生错误时将错误发送给服务端。
Sentry 本身有云服务，可以快速接入与体验，不过长期使用是需要收费的，因此一会将带来 Sentry服务搭建演示。



超越业务：前端监控
Sentry使用：
https://www.cnblogs.com/xakoy/p/9636393.html

前端错误监控使用：
https://juejin.im/post/5cc2b8b9e51d456e40377319

Sentry：
https://sentry.io

美团性能统计工具：
https://www.open-open.com/lib/view/open1414631044559.html



前端错误监控 -【Vue】与【Sentry】的结合
https://juejin.cn/post/6844903831256432648

记一次Sentry部署过程
https://juejin.cn/post/6844903826793709581



Vue React diff
React diff 特点 - 仅向右移动
Vue2 diff 特点 - 双端比较
Vue3 diff 特点 - 最长递增子序列


Vue中v-html会导致哪些问题
可能会导致 xss 攻击
v-html 会替换掉标签内部的子元

过滤和转义： 在插入 HTML 内容之前，确保对内容进行过滤和转义，以防止 XSS 攻击。可以使用专门的库，如 DOMPurify，来过滤不安全的 HTML。
// 使用 DOMPurify 过滤 HTML
import DOMPurify from 'dompurify';

data() {
  return {
    htmlContent: '<div>Some HTML content</div>',
  };
},
computed: {
  sanitizedHTML() {
    return DOMPurify.sanitize(this.htmlContent);
  },
},
<div v-html="sanitizedHTML"></div>


「历时 8 个月」10 万字前端知识体系总结（基础知识篇）
「历时 8 个月」10 万字前端知识体系总结（算法篇）
「历时 8 个月」10 万字前端知识体系总结（前端框架+浏览器原理篇）
https://juejin.cn/post/7146976516692410376#heading-71


vue css scoped原理
1）编译时，会给每个vue文件生成一个唯一的id，会将此id添加到当前文件中所有html的标签上
如<div class="demo"></div>会被编译成<div class="demo" data-v-27e4e96e></div>
2）编译style标签时，会将css选择器改造成属性选择器，如.demo{color: red;}会被编译成.demo[data-v-27e4e96e]{color: red;}

vuex原理
1）vuex中的store本质就是一个没有template模板的隐藏式的vue组件
2）vuex是利用vue的mixin混入机制，在beforeCreate钩子前混入vuexInit方法
3）vuexInit方法实现将vuex store注册到当前组件的$store属性上
4）vuex的state作为一个隐藏的vue组件的data，定义在state上面的变量，相当于这个vue实例的data属性，凡是定义在data上的数据都是响应式的
5）当页面中使用了vuex state中的数据，就是依赖收集的过程，当vuex中state中的数据发生变化，就通过调用对应属性的dep对象的notify方法，去修改视图变化

链接：https://juejin.cn/post/7146996646394462239

介绍下中间人攻击
中间人攻击过程如下：
1）客户端向服务器发送建立连接的请求
2）服务器向客户端发送公钥
3）攻击者截获公钥，保留在自己手上
4）然后攻击者自己生成一个【伪造的】公钥，发给客户端
5）客户端收到伪造的公钥后，生成加密的秘钥值发给服务器
6）攻击者获得加密秘钥，用自己的私钥解密获得秘钥
7）同时生成假的加密秘钥，发给服务器
8）服务器用私钥解密获得假秘钥
9）服务器用假秘钥加密传输信息
防范方法：
服务端在发送浏览器的公钥中加入CA证书，浏览器可以验证CA证书的有效性
介绍下 HTTPS 中间人攻击

作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




react native和flutter的区别   GPT
React Native和Flutter都是用于移动应用程序开发的框架，但它们有一些关键的区别，包括语言、性能、UI组件等方面。以下是它们之间的一些主要区别：

1. **编程语言：**
   - React Native: 使用JavaScript和React库进行开发。React Native使用JavaScript的扩展，称为JSX，来定义UI组件。
   - Flutter: 使用Dart语言进行开发。Dart是一种由Google推出的客户端优化的语言。

2. **性能：**
   - React Native: 通过使用原生组件和JavaScript之间的桥接来实现性能。性能通常良好，但在一些复杂的场景中可能存在性能差异。
   - Flutter: 使用自己的渲染引擎，并将所有的组件都编译为本机代码，因此在性能方面通常表现得更好。

3. **UI组件：**
   - React Native: 使用原生组件，可以访问设备的原生UI元素。React Native还提供了一些内置的UI组件，同时也支持第三方组件。
   - Flutter: 使用自己的渲染引擎，提供了丰富的自定义UI组件。Flutter的UI完全是自己绘制的，不依赖于平台的原生组件。

4. **开发体验：**
   - React Native: Hot Reloading功能使开发过程更加迅速，开发者可以在不重新启动应用的情况下即时看到代码变更的效果。
   - Flutter: Hot Reload功能同样提供了快速的开发迭代体验，可以在运行时快速查看代码变更的效果。

5. **社区和生态系统：**
   - React Native: 由Facebook维护，有庞大的社区支持和丰富的第三方库。因为使用JavaScript，React Native可以直接使用许多现有的JavaScript库。
   - Flutter: 由Google维护，社区相对较小，但正在迅速增长。Flutter有一个独特的Widget系统，其生态系统在不断发展。

6. **学习曲线：**
   - React Native: 对于熟悉JavaScript和React的开发者来说，学习曲线相对较平滑。
   - Flutter: 对于有经验的开发者来说，学习Dart和Flutter的Widget系统可能需要一些时间。

选择使用React Native还是Flutter通常取决于项目的具体需求、团队的技能和个人偏好。两者都有各自的优势，可以根据具体情况做出选择。



Flutter是如何做到高性能表现的？
https://fe.ecool.fun/topic/1277e171-1422-40c6-89db-53d81036dc37?orderBy=updateTime&order=desc&tagId=74
首先高或低是个相对的概念，而 Flutter 的高性能来自于两个比较：

以下两点引用自《Flutter 实战》一书

Flutter APP 采用 Dart 语言开发。Dart 在 JIT（即时编译）模式下，速度与 JavaScript 基本持平。但是 Dart 支持 AOT，当以 AOT 模式运行时，JavaScript 便远远追不上了。速度的提升对高帧率下的视图数据计算很有帮助。
Flutter 使用自己的渲染引擎来绘制 UI ，布局数据等由 Dart 语言直接控制，所以在布局过程中不需要像 RN 那样要在 JavaScript 和 Native 之间通信，这在一些滑动和拖动的场景下具有明显优势，因为在滑动和拖动过程往往都会引起布局发生变化，所以 JavaScript 需要和 Native 之间不停的同步布局信息，这和在浏览器中要 JavaScript 频繁操作 DOM 所带来的问题是相同的，都会带来比较可观的性能开销。



第6题：taro 的实现原理是怎么样的？
https://fe.ecool.fun/topic/bb332cca-7fb4-4fc9-ac23-ea9100c88a50?orderBy=updateTime&order=desc&tagId=74
难度：
更新时间：2023-04-28
参考答案：

Taro 是一个多端统一开发框架，可以使用一套代码编译成微信小程序、支付宝小程序、百度智能小程序、字节跳动小程序、QQ 小程序、快应用、H5 等多个平台的应用。

Taro 的实现原理主要基于以下几个方面：
JSX 转换：Taro 使用 Babel 插件将类似 HTML 的语法转换为 React 组件。在编译过程中，Taro 还会对 JSX 语法进行优化和压缩，以避免生成不必要的代码。
多端适配：Taro 通过封装原生 API 和提供不同的 Polyfill 实现多端适配。例如，在微信小程序中，Taro 封装了 wx 对象，使得可以使用类似 React Native 的组件化开发方式；在 H5 中，Taro 则提供了针对浏览器的 Polyfill。
跨端样式处理：Taro 通过 CSS Modules 技术和 PostCSS 插件来处理 CSS 样式。在编译过程中，Taro 会将样式文件转换为 JavaScript 对象，并按需导入到组件中。同时，Taro 提供了 @import 指令或 scss 语法等方式来支持复杂的样式表达。
构建系统：Taro 使用 webpack 构建工具来打包编译后的代码，并提供了一系列开箱即用的插件、规则和配置项，例如自动化导入组件、静态资源压缩、TypeScript 支持等。
运行时性能优化：Taro 在运行时对代码进行了一些优化，例如使用字典树实现 JSX 解析、避免使用内置事件监听器、减少对原生 API 的调用等方式来优化性能。
Taro 利用 Babel、React、Webpack 等技术，通过封装原生 API 和提供不同的 Polyfill 实现了多端适配，同时也支持复杂的样式表达和自动化导入组件等特性。这些技术的应用使得 Taro 框架在性能、可维护性、跨平台等方面都表现出色。



tree shaking的原理是什么?
ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码


第17题：说说webpack proxy工作原理？为什么能解决跨域?
https://fe.ecool.fun/topic/03d5dfc7-9bb9-4129-9145-b4da4d4fa11f?orderBy=updateTime&order=desc&tagId=28  
proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器
webpack proxy，即webpack提供的代理服务

基本行为就是接收客户端发送的请求后转发给其他服务器



Vue3的v-if 和v-for优先级详解
https://juejin.cn/post/7128328827981266980
结论
在vue2中，v-for的优先级高于v-if
在vue3中，v-if的优先级高于v-for
两种混在一起写法均不被官方推荐


Vue2和Vue3怎样挂载全局属性
在Vue2中，可以通过将一些公共属性挂载到Vue的原型上，实现各个组件的共享，在组件中可以通过this来访问。
js复制代码Vue.prototype.a = 'a'

在Vue3中，不再导出Vue构造函数了，并且在composition API中无法使用this，因此如果我们想挂载全局属性，应该使用这种方法：
js复制代码// 添加
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.a = 'a'

app.mount('#app')

// 使用
import { getCurrentInstance } from 'vue'
const { a } = getCurrentInstance().appContext.config.globalProperties

作者：LeeHi
链接：https://juejin.cn/post/7317926149120196643
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


在Vue2中，diff算法采用的是双指针进行头头相比、尾尾相比、头尾相比，最终通过映射关系来确认可复用的节点，进行更新。
在Vue3中，diff算法分为有key和无key和快速diff三种方式，快速diff通过静态标记，对一些文本、空节点进行快速更新，无key方式简单粗暴对比每一项，判断是否可以复用节点，有key的方式依旧采用双指针，但是只进行头头相比、尾尾相比，最终会根据求取无序列表的最长递增子序列的方式，对能复用的节点进行patch，需要移动的节点进行移动节点，最终完成diff更新。
链接：https://juejin.cn/post/7317926149120196643


Vue生命周期钩子是如何实现的
https://interview.poetries.top/docs/excellent-docs/7-Vue.html#vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84
vue的生命周期钩子就是回调函数而已，当创建组件实例的过程中会调用对应的钩子方法
内部会对钩子函数进行处理，将钩子函数维护成数组的形式
Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的的生命周期钩子订阅好（内部采用数组的方式存储）然后在创建组件实例的过程中会一次执行对应的钩子方法（发布）


Vue组件为什么只能有一个根元素
vue3中没有问题

Vue.createApp({
  components: {
    comp: {
      template: `
        <div>root1</div>
        <div>root2</div>
      `
    }
  }
}).mount('#app')
 
        @程序员poetry: 代码已经复制到剪贴板
    
vue2中组件确实只能有一个根，但vue3中组件已经可以多根节点了。
之所以需要这样是因为vdom是一颗单根树形结构，patch方法在遍历的时候从根节点开始遍历，它要求只有一个根节点。组件也会转换为一个vdom
vue3中之所以可以写多个根节点，是因为引入了Fragment的概念，这是一个抽象的节点，如果发现组件是多根的，就创建一个Fragment节点，把多个根节点作为它的children。将来patch的时候，如果发现是一个Fragment节点，则直接遍历children创建或更新


写过自定义指令吗？原理是什么
https://interview.poetries.top/docs/excellent-docs/7-Vue.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8
原理
指令本质上是装饰器，是 vue对 HTML 元素的扩展，给 HTML 元素增加自定义功能。vue 编译 DOM 时，会找到指令对象，执行指令的相关方法。
自定义指令有五个生命周期（也叫钩子函数），分别是 bind、inserted、update、componentUpdated、unbind
原理

在生成 ast 语法树时，遇到指令会给当前元素添加 directives 属性
通过 genDirectives 生成指令代码
在 patch 前将指令的钩子提取到 cbs 中,在 patch 过程中调用对应的钩子
当执行指令对应钩子函数时，调用对应指令定义的方法


洗牌算法(shuffle)的js实现
https://fe.ecool.fun/topic/4fabe17b-9140-475e-acce-4f49e60c6840?orderBy=updateTime&order=desc&tagId=15
function shuffle(arr){
  var result = [],
      random;
  while(arr.length>0){
      random = Math.floor(Math.random() * arr.length);
      result.push(arr[random])
      arr.splice(random, 1)
  }
  return result;
}


第6题：vue 中怎么实现样式隔离？
https://fe.ecool.fun/topic/d23c0c59-8096-4636-8c77-e74279986a18?orderBy=updateTime&order=desc&tagId=14
Vue 提供了几种方式来实现样式的隔离：
作用域样式（Scoped Styles）
CSS Modules：
CSS-in-JS 方案：

通过Tree shaking，Vue3给我们带来的好处是：
减少程序体积（更小）
减少程序执行时间（更快）
便于将来对程序架构进行优化（更友好）


第30题：vue3中怎么设置全局变量？
https://fe.ecool.fun/topic/3e2c519b-9142-40e9-bef6-6b1d975be351?orderBy=updateTime&order=desc&tagId=14
方法一 config.globalProperties
vue2.x挂载全局是使用 Vue.prototype.$xxxx=xxx 的形式来挂载，然后通过 this.$xxx来获取挂载到全局的变量或者方法。

这在 Vue 3 中，就等同于 config.globalProperties。这些 property 将被复制到应用中作为实例化组件的一部分。

// 之前 (Vue 2.x)
Vue.prototype.$http = () => {}

// 之后 (Vue 3.x)
const app = createApp({})
app.config.globalProperties.$http = () => {}
方法二 Provide / Inject


第26题：Vue项目如何进行部署？是否有遇到部署服务器后刷新404问题？
https://fe.ecool.fun/topic/252525e4-0c4c-4e41-9279-41bc59f06f85?orderBy=updateTime&order=desc&tagId=14


第53题：Vue项目中如何解决跨域问题？
https://fe.ecool.fun/topic/38c7340e-cb35-43e0-8ea0-20e75b2780a5?orderBy=updateTime&order=desc&tagId=14



React 中怎么实现状态自动保存（KeepAlive）？
https://fe.ecool.fun/topic/321f6c36-eff4-4fc4-8a86-c989bb1a2779?orderBy=updateTime&order=desc&tagId=13