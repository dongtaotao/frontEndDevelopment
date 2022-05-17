Vue2知识点总结：结合面试题 https://juejin.cn/post/7088305435370848263

vue终极性能优化方案，解决首页加载慢
https://juejin.cn/post/7067033205798354981  prerender-spa-plugin 预渲染

从0到1，带你搭建Vite+Vue3+Pinia+Naive UI后台（一） - 前置篇
https://juejin.cn/post/7094059996245147655

对比vue2总结vue3新特性(2022最全)
https://juejin.cn/post/7098575243240800286

vue3新特性 https://juejin.cn/post/6940454764421316644
Composition Api
自定义hooks
生命周期
Teleport
suspence
Fragment
tree-Shaking

五、Vue做权限管理
接口权限：使用jwt，登录完拿到token，将token存起来，通过axios请求拦截器进行拦截，每次请求的时候头部携带token
路由权限
a.  初始化全部路由，并标记权限信息，跳转由路由守卫进行校验
b.  初始化挂载不需要权限的路由，登录后，获取用户权限信息，筛选有权限访问的路由，在全局路由守卫里进行调用addRoutes添加路由
菜单权限：页面与路由解耦
a.  菜单与路由分离，菜单由后端返回
b.  菜单和路由都由后端返回
按钮权限
a.  v-if
b.  自定义指令
链接：https://juejin.cn/post/7088305435370848263

vuex刷新页面数据丢失怎么解决
https://www.php.cn/vuejs/467105.html

vuex刷新页面数据丢失的解决办法：
1、将vuex中的数据直接保存到浏览器缓存中；
2、在页面刷新的时候再次请求远程数据，使之动态更新vuex数据；
3、在页面刷新前将vuex的数据先保存至sessionStorage。

面试常问的 必考  vue面试
https://juejin.cn/post/7073364714759127047 

最全的 Vue 面试题+详解答案
https://juejin.cn/post/6961222829979697165

nextTick 使用场景和原理
nextTick 中的回调是在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
主要思路就是采用微任务优先的方式调用异步方法去执行 nextTick 包装的方法
Promise  MutationObserver  setImmediate setTimeout

32 写过自定义指令吗 原理是什么
指令本质上是装饰器，是 vue 对 HTML 元素的扩展，给 HTML 元素增加自定义功能。vue 编译 DOM 时，会找到指令对象，执行指令的相关方法。
自定义指令有五个生命周期（也叫钩子函数），分别是 bind、inserted、update、componentUpdated、unbind
链接：https://juejin.cn/post/6961222829979697165

34 Vue 模板编译原理
Vue 的编译过程就是将 template 转化为 render 函数的过程 分为以下三步
第一步是将 模板字符串 转换成 element ASTs（解析器）
第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）
链接：https://juejin.cn/post/6961222829979697165

生命周期钩子是如何实现的
Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的的生命周期钩子订阅好（内部采用数组的方式存储）
然后在创建组件实例的过程中会一次执行对应的钩子方法（发布）

能说下 vue-router 中常用的路由模式实现原理吗
history 模式
利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。
特点：虽然美观，但是刷新会出现 404 需要后端进行配置

Vue生命周期钩子是如何实现的?
Vue的生命周期钩子是回调函数，当创建组件实例的过程中会调用相应的钩子方法。 内部会对钩子进行处理，将钩子函数维护成数组的形式。

Vue.set方法是如何实现的？ https://juejin.cn/post/7043074656047202334
vue给对象和数组本身都增加了dep属性
当给对象新增不存在的属性的时候，就会触发对象依赖的watcher去更新
当修改数组索引的时候，就调用数组本身的splice方法去更新数组

vue中使用了哪些设计模式？
单例模式：new多次，只有一个实例
工场模式：传入参数就可以创建实例（虚拟节点的创建）
发布订阅模式：eventBus
观察者模式：watch和dep
中介者模式：vuex
策略模式
外观模式
装饰器模式
三十七个常见Vue面试题，背就完事了。 https://juejin.cn/post/7043074656047202334

Vue的渲染流程 https://juejin.cn/post/6869908820353810445
流程主要分为三个部分：
模板编译，parse 解析模板生成抽象语法树（AST）；optimize 标记静态节点，在后续页面更新时会跳过静态节点；generate 将AST转成 render 函数，
  render 函数用于构建 VNode。
构建VNode（虚拟dom），构建过程使用 createElement 构建 VNode，createElement 也是自定义 render 函数时接受到的第一个参数。
VNode转真实dom，patch 函数负责将 VNode 转换成真实dom，核心方法是createElm，递归创建真实dom树，最终渲染到页面上。

Vue 中的 computed 是如何实现缓存的
“计算属性Watcher”会带有一个 dirty 的属性，在初始化取值完成后，会将求值结果缓存起来，并把 dirty 设置为 false。
只要依赖属性不更新，dirty 永远为 false，重复取值也不会再去执行求值函数，而是直接返回缓存结果，从而实现缓存。
相反，依赖属性更新会将“计算属性 Watcher”的 dirty 设置为 true，在页面渲染对计算属性取值时，再次触发求值函数更新计算属性。

Object.defineProperty(target, key, {
    get() {
        const watcher = this._computedWatchers && this._computedWatchers[key]
        // 计算属性缓存
        if (watcher.dirty) {  
            // 计算属性求值
            watcher.evaluate()  
        }
        return watcher.value
    }
})
链接：https://juejin.cn/post/6869908820353810445

知道 keep-alive 吗？如何实现的？ https://juejin.cn/post/6869908820353810445
keep-alive 的缓存机制运用LRU(Least Recently Used)算法，

说一下 nextTick 的原理 https://juejin.cn/post/6869908820353810445
在下次 dom 更新结束之后执行延迟回调。nextTick 主要使用了宏任务和微任务。根据执行环境分别尝试采用：
Promise
MutationObserver
setImmediate
setTimeout

nextTick 主要用于内部 Watcher 的异步更新，对外我们可以使用 Vue.nextTick 和 vm.$nextTick。在 nextTick 中可以获取更新完成的 dom。

对比 Vue3 和 Vue2.x
使用 Proxy 代替 Object.defineProperty
新增 Composition API
模板允许多个根节点

vue-router的原理
vue-router 原理是更新视图而不重新请求页面。vue-router 共有3种模式：hash模式、history模式、abstract模式。
hash模式
hash 模式使用 hashchange 监听地址栏的 hash 值的变化，加载对应的页面。每次的 hash 值变化后依然会在浏览器留下历史记录，可以通过浏览器的前进后退按钮回到上一个页面。
history模式
history 模式基于History Api实现，使用 popstate 监听地址栏的变化。使用 pushState 和 replaceState 修改 url，而无需加载页面。但是在刷新页面时还是会向后端发起请求，需要后端配合将资源定向回前端，交由前端路由处理。
abstract
不涉及和浏览器地址的相关记录。通过数组维护模拟浏览器的历史记录栈。
链接：https://juejin.cn/post/6869908820353810445

vuex 如何实现持久化
vuex存储的状态在页面刷新后会丢失，使用持久化技术能保证页面刷新后状态依然存在。

使用本地存储配合，设置 state 同时设置 storage，在刷新后再初始化 vuex
vuex-persistedstate 插件

单页应用会随着项目越大，导致首屏加载速度很慢！！！以下给出在下知道的几种优化方案 https://segmentfault.com/a/1190000016155447
使用CDN资源,减小服务器带宽压力
路由懒加载
将一些静态js css放到其他地方（如OSS），减小服务器压力
按需加载三方资源，如iview,建议按需引入iview中的组件
使用nginx开启gzip减小网络传输的流量大小
若首屏为登录页，可以做成多入口，登录页单独分离为一个入口
使用uglifyjs-webpack-plugin插件代替webpack自带UglifyJsPlugin插件

Vue三要素
响应式: 例如如何监听数据变化,其中的实现方法就是我们提到的双向绑定
模板引擎: 如何解析模板
渲染: Vue如何将监听到的数据变化和解析后的HTML进行渲染

Vue nextTick实现原理  https://www.cnblogs.com/leiting/p/13174545.html

宏任务和微任务
JS任务又分为宏任务和微任务。
宏任务（macrotask）：setTimeout、setInterval、setImmediate、I/O、UI rendering
微任务（microtask）：promise.then、process.nextTick、MutationObserver、queneMicrotask(开启一个微任务)

46 nextTick
nextTick 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM
nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用
Promise
MutationObserver
setImmediate
如果以上都不行则采用setTimeout
定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列
https://interview2.poetries.top/excellent-docs/7-Vue.html#_45-vue-%E9%A1%B9%E7%9B%AE%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96


路由守卫
https://www.bilibili.com/video/BV1bV411r7mg?p=12&spm_id_from=pageDriver
全局路由守卫
组件局部守卫
路由守卫

【全网首发】Vue3.0光速上手「持续更新中」
https://www.bilibili.com/video/BV1Wh411X7Xp?p=10
29-vite项目配置：别名、代理、数据mock等


Vuex持久化插件-解决刷新数据消失的问题
import { Fragment } from 'react'
import createPersistedState from 'vuex-persistedstate'

provide / inject
提供 和 注入 是很简单理解的
实现跨层级组件(祖孙)间通信

最全的 Vue3 快速上手指南【值得收藏】
https://blog.csdn.net/qq_31967569/article/details/123548456?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-123548456-blog-123382023.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-123548456-blog-123382023.pc_relevant_paycolumn_v3&utm_relevant_index=1


Vue3 Composition API 快速上手
https://juejin.cn/post/7057725927739883551#heading-36
2.Vue3带来了什么
1.性能的提升
打包大小减少41%
初次渲染快55%, 更新渲染快133%
内存减少54%
......

2.源码的升级
使用Proxy代替defineProperty实现响应式
重写虚拟DOM的实现和Tree-Shaking
......

3.拥抱TypeScript
Vue3可以更好的支持TypeScript

4.新的特性
Composition API（组合API）
setup配置
ref与reactive
watch与watchEffect
provide与inject
......

新的内置组件

Fragment 在Vue2中: 组件必须有一个根标签  在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用
Teleport  什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。
Suspense  等待异步组件时渲染一些额外内容，让应用有更好的用户体验

其他改变

新的生命周期钩子
data 选项应始终被声明为一个函数
移除keyCode支持作为 v-on 的修饰符
......

链接：https://juejin.cn/post/7057725927739883551

beforeCreate：vue实例的挂载元素el和数据对象data都是undefined，还没用初始化
created：vue实例的数据对象data有了，可以访问里面的数据和方法，未挂载到DOM，el还没有
beforeMount：vue实例的el和data都初始化了，但是挂载之前未虚拟DOM节点
mounted：vue实例挂载到真实DOM上，就可以通过DOM获取DOM节点
beforeupdated：响应式数据更新时调用，发生在虚拟DOM打补丁之前，适合在更新之前访问现有的DOM，比如手动一处已添加的事件监听器
updated：虚拟DOM重新渲染和打补丁之后调用，组成新的DOM已经更新，避免在这个钩子函数中操作数据，防止死循环
beforeDestroy：实例销毁前调用，实例还可以用，this能获取到实例，常用于销毁定时器，解绑事件
destroyed：实例销毁后调用，调用后所有事件监听器会被移除，所有的子实例都会被销毁
链接：https://juejin.cn/post/7029162914158215176


如何在组件中监听Vuex的数据变化
第一种方案 我们可以在组件中通过组件的 watch方法来做, 因为组件可以将state数据映射到 组件的计算属性上,
然后 监听 映射的计算属性即可 代码如下

// vuex中的state数据
  state: {
    count: 0
  },
     
//  A组件中映射 state数据到计算属性
  computed: {
    ...mapState(['count'])
  }
// A组件监听 count计算属性的变化
   watch: {
    count () {
      // 用本身的数据进行一下计数
      this.changeCount++
    }
  }
第二种方案 vuex中store对象本身提供了**watch**函数 ,可以利用该函数进行监听
created () {
    this.$store.watch((state, getters) => {
      return state.count
    }, () => {
      this.changeCount++
    })
}

4.vue中双向绑定的原理
1、vue双向数据绑定原理，又称vue响应式原理，是vue的核心，双向数据绑定是通过数据劫持结合发布者订阅者模式的方式来实现的
，通过Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调来渲染视图。
也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变
2、vue实现双向数据绑定的核心是Object.defineProperty()方法
3、Object.defineProperty(obj, prop, descriptor)方法，接收三个参数，分别为obj（定义其上属性的对象）prop（定义或修改的属性）
descriptor（具体的改变方法），就是用这个方法来定义一个值，当调用时我们使用了它里面的get方法，当我们给这个属性赋值时，又用到了它里面的set方法
具体步骤：
第一步： 需要observer的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，
  那么就能监听到了数据变化
第二步： compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，
  一旦数据有变动，收到通知，更新视图
第三步： Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: 1、在自身实例化时往属性订阅器(dep)里面添加自己 
  2、自身必须有一个update()方法 3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
第四步： MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，
  最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。
链接：https://juejin.cn/post/7094897931106566152

13.那vue中是如何检测数组变化的呢？
数组就是使用object.defineProperty 重新定义数组的每一项，那能引起数组变化的方法我们都是知道的，pop 、push 、shift 、unshift 、splice 、sort 、reverse 
这七种，只要这些方法执行改了数组内容，我就更新内容就好了，是不是很好理解。

是用来函数劫持的方式，重写了数组方法，具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新。
数组里每一项可能是对象，那么我就是会对数组的每一项进行观测，（且只有数组里的对象才能进行观测，观测过的也不会进行观测）

6. 如何理解Vue的响应式系统？
简单概述 : 通过Object.defineProperty 完成对于数据的劫持, 通过观察者模式, 完成对于节点的数据更新

Vue事件绑定原理说一下
每一个Vue实例都是一个Event Bus，当子组件被创建的时候，父组件将事件传递给子组件，子组件初始化的时候是有$on方法将事件注册到内部，
在需要的时候使用$emit触发函数，而对于原生native事件，使用addEventListener绑定到真实的DOM元素上。

说说Vue2.0和Vue3.0有什么区别 https://segmentfault.com/a/1190000038848131
重构响应式系统，使用Proxy替换Object.defineProperty，使用Proxy优势：
  可直接监听数组类型的数据变化
  监听的目标为对象本身，不需要像Object.defineProperty一样遍历每个属性，有一定的性能提升
  可拦截apply、ownKeys、has等13种方法，而Object.defineProperty不行
  直接实现对象属性的新增/删除
新增Composition API，更好的逻辑复用和代码组织
重构 Virtual DOM
模板编译时的优化，将一些静态节点编译成常量
slot优化，将slot编译为lazy函数，将slot的渲染的决定权交给子组件
模板中内联事件的提取并重用（原本每次渲染都重新生成内联函数）
代码结构调整，更便于Tree shaking，使得体积更小
使用Typescript替换Flow

https://segmentfault.com/a/1190000038848131
为什么要新增Composition API，它能解决什么问题
Vue2.0中，随着功能的增加，组件变得越来越复杂，越来越难维护，而难以维护的根本原因是Vue的API设计迫使开发者使用watch
、，computed，methods选项组织代码，而不是实际的业务逻辑。
另外Vue2.0缺少一种较为简洁的低成本的机制来完成逻辑复用，虽然可以minxis完成逻辑复用，但是当mixin变多的时候，
会使得难以找到对应的data、computed或者method来源于哪个mixin，使得类型推断难以进行。
所以Composition API的出现，主要是也是为了解决Option API带来的问题，第一个是代码组织问题，Compostion API可以让开发者根据业务逻辑组织自己的代码，
让代码具备更好的可读性和可扩展性，也就是说当下一个开发者接触这一段不是他自己写的代码时，他可以更好的利用代码的组织反推出实际的业务逻辑，或者根据业务逻辑更好的理解代码。
第二个是实现代码的逻辑提取与复用，当然mixin也可以实现逻辑提取与复用，但是像前面所说的，多个mixin作用在同一个组件时，很难看出property是来源于哪个mixin，
来源不清楚，另外，多个mixin的property存在变量命名冲突的风险。而Composition API刚好解决了这两个问题。

keep-alive 的原理