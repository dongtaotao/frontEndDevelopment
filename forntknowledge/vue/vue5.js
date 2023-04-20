vue的computed和watch的实现原理 https://www.lingtiku.com/quiz/detail/9
讲一下vue的computed和watch的实现原理？computed是怎么收集依赖的？
参考答案
computed：
computed是data属性的一个订阅者，它在初始化时候被data属性收集依赖，当computed依赖的data属性改变后，标记该computed为dirty，即数据更改过，当渲染使用到computed时候，再计算出computed的值从而得到最新的正确的值。
watch：
在组件初始化时候，遍历所有的watch，对每个watch创建订阅者，绑定依赖的data属性，当data属性改变后发布给订阅者，然后会执行相应地回调。

1.vue2 vue3的区别
vue3新特性：

性能的提升
Tree-shaking 支持（tree shaking的作用是把项目中没必要的代码全部抖落掉，消除被引用，删除没被调用的无用模块代码，该优化最终实现的是代码体积的减少，也属于项目性能优化的一部分。）
Composition API
更好的 TS 支持（ts和js的区别）点击链接查看区别+学习
自定义渲染 API

vue3性能方面的优化：

引入 tree-shaking 的技术，减少打包体积
数据劫持优化，使用 Proxy 代替 defineProperty 实现数据响应式。
由于改进了补丁算法，将避免不必要的 parent/children 重新渲染
输出代码将更易于针对 JavaScript 编译器进行优化
输出代码将会更好地优化
链接：https://juejin.cn/post/7200762602804789307

Vue2：使用provide和inject时，无法获取到实时更新的数据
https://blog.csdn.net/m0_47135993/article/details/127869452?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-127869452-blog-122679207.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-127869452-blog-122679207.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=1

Vue— provide/inject实现响应式数据更新
https://blog.csdn.net/yu17310133443/article/details/122702425?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-122702425-blog-127869452.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-122702425-blog-127869452.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=3


梳理 Vue3 相比于 Vue2 的有哪些 “与众不同” ？
https://juejin.cn/post/7011372376969445413

vue的两种服务器端渲染方案 https://juejin.cn/post/7204480721435492407?

Vue.js关于父子组件数据双向绑定的思考以及四种实现方案 https://juejin.cn/post/7204735262961188921?

面试官：vue2和vue3的区别有哪些？
https://juejin.cn/post/7204844328111308855?
一、Vue3 与 Vue2 区别详述
1. 生命周期
2. 多根节点
3. Composition API
4. 异步组件（Suspense）
5. Teleport
6. 响应式原理
7. 虚拟DOM
8. 事件缓存
9. Diff算法优化
10. 打包优化
11. TypeScript支持
二、Options API 与 Composition API
1. Options API
2. Composition API

为什么要使用异步组件 https://juejin.cn/post/7204844328111358007?
节省打包出的结果，异步组件分开打包，采用jsonp的方式进行加载，有效解决文件过大的问题。
核心就是包组件定义变成一个函数，依赖import() 语法，可以实现文件的分割加载。
components:{ 
  AddCustomerSchedule:(resolve)=>import("../components/AddCustomer") // require([]) 
}

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
vue2中组件确实只能有一个根，但vue3中组件已经可以多根节点了。
之所以需要这样是因为vdom是一颗单根树形结构，patch方法在遍历的时候从根节点开始遍历，它要求只有一个根节点。组件也会转换为一个vdom
vue3中之所以可以写多个根节点，是因为引入了Fragment的概念，这是一个抽象的节点，如果发现组件是多根的，就创建一个Fragment节点，把多个根节点作为它的children。
将来patch的时候，如果发现是一个Fragment节点，则直接遍历children创建或更新
链接：https://juejin.cn/post/7204844328111358007

Vue 修饰符有哪些 https://juejin.cn/post/7204844328111358007?
vue中修饰符分为以下五种
表单修饰符
事件修饰符
鼠标按键修饰符
键值修饰符
v-bind修饰符

watchEffect 监听函数
watchEffect 不需要手动传入依赖
watchEffect 会先执行一次用来自动收集依赖
watchEffect 无法获取到变化前的值， 只能获取变化后的值

vuex实现原理：
Vue.use(vuex)会调用vuex的install方法
在beforeCreate钩子前混入vuexInit方法，vuexInit方法实现了store注入vue组件实例，并注册了
vuex store的引用属性$store。
Vuex的state状态是响应式，是借助vue的data是响应式，将state存入vue实例组件的data中；
Vuex的getters则是借助vue的计算属性computed实现数据实时监听。
链接：https://juejin.cn/post/6991724298197008421

v-html预防xss攻击
https://blog.csdn.net/weixin_47084275/article/details/128019936
安装vue-dompurify-html这个插件

Vue解决V-HTML指令潜在的XSS攻击
http://events.jianshu.io/p/8167d44122a0
https://www.cnblogs.com/LylePark/p/16977781.html

Vue事件绑定原理是什么？
原生事件绑定是通过addEventListener绑定给真实元素的，组件事件绑定是通过Vue自定义的$on实现的。

需求：vue v-html预防xss  第三方插件
DOMPurify、Vue-html-secure 和 Sanitize-html 都是常用的用于预防 XSS 攻击的 Vue.js 插件，每个插件都有其特点和优势，在使用时需要根据实际需求选择合适的插件。

21 Vue的事件绑定原理
https://interview.poetries.top/docs/excellent-docs/7-Vue.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8
原生事件绑定是通过 addEventListener 绑定给真实元素的，组件事件绑定是通过 Vue 自定义的$on 实现的。如果要在组件上使用原生事件，需要加.native 修饰符，
这样就相当于在父组件中把子组件当做普通 html 标签，然后加上原生事件。

Vue Test Utils/Jest单元测试
https://juejin.cn/post/7074763876487102478

vue3组件开发
https://juejin.cn/column/7205151554994503741

composition Api对比 option Api的优势
更好的代码组织
更好的逻辑复用
更好的类型推导

【文章解读】使用nginx部署vue项目及常见问题
https://www.bilibili.com/video/BV1x84y1k7qf/?spm_id_from=333.788.recommend_more_video.-1&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

搭建一个vue-cli4+webpack移动端框架（开箱即用）
https://juejin.cn/post/6844904152389124103#heading-19
vue-cli4脚手架
vant按需引入
移动端rem适配
axios拦截封装
util工具类函数封装
vue-router配置
登录权限校验
多环境变量配置
vue.config.js配置
toast组件封装
dialog组件封装
跨域代理设置
webpack打包可视化分析
CDN资源优化
gzip打包优化
首页添加骨架屏
链接：https://juejin.cn/post/6844904152389124103


Vue项目如何进行部署？是否有遇到部署服务器后刷新404问题？
https://fe.ecool.fun/topic/252525e4-0c4c-4e41-9279-41bc59f06f85?orderBy=updateTime&order=desc&tagId=14

vue3中怎么设置全局变量？
方法一 config.globalProperties
https://fe.ecool.fun/topic/3e2c519b-9142-40e9-bef6-6b1d975be351?orderBy=updateTime&order=desc&tagId=14
vue2.x挂载全局是使用 Vue.prototype.$xxxx=xxx 的形式来挂载，然后通过 this.$xxx来获取挂载到全局的变量或者方法。

这在 Vue 3 中，就等同于 config.globalProperties。这些 property 将被复制到应用中作为实例化组件的一部分。

// 之前 (Vue 2.x)
Vue.prototype.$http = () => {}

// 之后 (Vue 3.x)
const app = createApp({})
app.config.globalProperties.$http = () => {}

方法二 Provide / Inject
vue3新的 provide/inject 功能可以穿透多层组件，实现数据从父组件传递到子组件。

可以将全局变量放在根组件的 provide 中，这样所有的组件都能使用到这个变量。
如果需要变量是响应式的，就需要在 provide 的时候使用 ref 或者 reactive 包装变量。

刷新浏览器后，Vuex的数据是否存在？如何解决？
https://fe.ecool.fun/topic/7e9fd9a8-e8d8-44e6-8ffd-73faf1372a1b?orderBy=updateTime&order=desc&tagId=14

Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同
小结
在逻辑组织和逻辑复用方面，Composition API是优于Options API
因为Composition API几乎是函数，会有更好的类型推断。
Composition API 对 tree-shaking 友好，代码也更容易压缩
Composition API中见不到this的使用，减少了this指向不明的情况
如果是小型组件，可以继续使用Options API，也是十分友好的

问题：
ref接受一个参数之后，为什么返回的是一个对象？
ref就是把传入的值和对象统一转化成Proxy对象，因为Proxy只支持引用对象，所以对于值对象会转化成{ value: "值"} 再转化成Proxy对象，此时就可以监听到value值的变化。
为什么要用ref？
相当vue2中data定义的数据，这样vue底层就知道了它是响应式变量。

作者：云积分大前端团队
链接：https://juejin.cn/post/7019253626602258469

Vue3在项目中的实践和总结
https://juejin.cn/post/7019253626602258469


都说Composition API与React Hook很像，说说区别
从React Hook的实现角度看，React Hook是根据useState调用的顺序来确定下一次重渲染时的state是来源于哪个useState，所以出现了以下限制
不能在循环、条件、嵌套函数中调用Hook
必须确保总是在你的React函数的顶层调用Hook
useEffect、useMemo等函数必须手动确定依赖关系

而Composition API是基于Vue的响应式系统实现的，与React Hook的相比

声明在setup函数内，一次组件实例化只调用一次setup，而React Hook每次重渲染都需要调用Hook，使得React的GC比Vue更有压力，性能也相对于Vue来说也较慢
Compositon API的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用
响应式系统自动实现了依赖收集，进而组件的部分的性能优化由Vue内部自己完成，而React Hook需要手动传入依赖，而且必须必须保证依赖的顺序，让useEffect、
useMemo等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降。
虽然Compositon API看起来比React Hook好用，但是其设计思想也是借鉴React Hook的。

链接：https://juejin.cn/post/7210596158934614077
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

如何使用 pnpm+vite+vue3 搭建组件库并发布到私有仓库（人人都能学会）
https://juejin.cn/post/7212538330829996092?


14、vue2 和vue 3的区别
Vue 3 是 Vue.js 的最新版本，与 Vue 2 相比，Vue 3 有以下主要的区别：

更快的渲染速度：Vue 3 引入了新的响应式系统，提高了性能，特别是在大型应用程序中。
更小的体积：Vue 3 的体积比 Vue 2 更小，这得益于新的编译器和优化的 Tree-Shaking。
更好的 TypeScript 支持：Vue 3 支持更好的 TypeScript 集成，提供了完整的类型定义文件，并改进了响应式 API，使其更好地适用于 TypeScript。
Composition API：Vue 3 引入了 Composition API，可以更好地组织代码，解决了 Vue 2 中代码复用和逻辑复杂性的问题。
Teleport 组件：Vue 3 引入了 Teleport 组件，可以方便地将组件插入到应用程序中的任何位置，而无需重构 DOM。
Suspense 组件：Vue 3 引入了 Suspense 组件，可以更好地处理异步数据和代码分割。
更好的自定义指令：Vue 3 改进了自定义指令的 API，使其更容易编写和测试自定义指令。
更好的可访问性支持：Vue 3 增加了更多的可访问性支持，包括 ARIA 和无障碍键盘导航。

总之，Vue 3 在性能、体积、可维护性和可访问性等方面都得到了显著的改进，同时也引入了一些新的特性和改进，为开发人员提供了更好的开发体验。不过，由于 Vue 3 的一些 API 与 Vue 2 不兼容，所以升级到 Vue 3 时需要进行相应的更新。
链接：https://juejin.cn/post/7216319218504564791


Webpack 5.0 从零开始搭建 Vue 开发环境 
https://juejin.cn/post/7218098727608025144?