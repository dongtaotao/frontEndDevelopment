
【我的🐯年面试准备】 Vue这一块拿捏了 🔥🔥🔥 很好的文章，面试
https://juejin.cn/post/7064368176846340132

历时一个月，2.6W字！50+Vue经典面试题源码级详解，你值得收藏！
https://juejin.cn/post/7097067108663558151

Vue项目性能优化实操,从50分到80分
https://juejin.cn/post/7101560677688410125

超全面总结Vue面试知识点，助力金三银四
https://juejin.cn/post/7075130658820980772

完美回答之实现VUE数据绑定的原理
https://www.bilibili.com/video/BV1tL4y1z7Ws?spm_id_from=333.337.search-card.all.click

Vue 开发必须知道的 36 个技巧【近1W字】
https://juejin.cn/post/6844903959266590728

VUE进阶-从0到1搭建UI组件库（1-3） 🔥🔥🔥
https://www.bilibili.com/video/BV1nJ411V75n?spm_id_from=333.337.search-card.all.click

VUE进阶-从0到1搭建UI组件库  模仿element-ui封装vue组件库  https://blog.csdn.net/weixiaowei_2016  很不错的视频 好文章🔥
Vue封装组件并发布到npm仓库  https://juejin.cn/post/7054752084079411236
小猪课堂  https://space.bilibili.com/493520625/video

Composition API 是什么
setup 函数是一个新的Vue组件， 是Composition API 入口
ref() 声明单一基础数据类型时使用
Reactive() 声明单一对象时使用
watchEffect() 监听props
watch() 监听器   监听单个数据  监听多个数据
computed() 计算属性 可创建只读，和可读可写两种

一、生命周期对比
beforeCreate、created生命周期没有了，onBeforeUnmount取代beforeDestroy，onUnmounted取代destroyed
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted

二、setup函数介绍
setup是vue3新增的函数，为Composition Api的入口，所有生命周期函数，包括页面参数、方法都在其中书写；之后透过return向外暴露出来
export default {
    name: 'Test',
    components: {

    },
    setup() {
        // 存放数据，常用于复杂数据类型
        const state = reactive({
            count: 0,
            num: 0,
        })
        // 定义一些方法
        const getData = () => {
            console.log('初始化')
        }
        // 直接调用方法 类似于vue 2.x 中的 beforeCreate created 生命周期函数调用
        getData()
        // 存放数据，常用于简单数据类型
        const num = ref(0)
        // 页面点击事件函数
        const addCount = () => {
            state.count++
        }
        // 生命周期函数
        onMounted(() => {
            console.log('完成')
        })
        // 监听
        watch(() => state.count, (newVal) => {
            console.log(`count + num = ${newVal}`)
        })
        // 所有数据向外暴露展出
        return {
            ...toRefs(state),
            state,
            num,
            shiwo,
            addCount,
            addNum
        }
    }
}

三 Fragment（片段）
2.x中，vue template只允许有一个根节点
复制代码
    <template>
      <div id="app">
      </div>
    </template>
复制代码
3.x中，vue template支持多个根节点
复制代码
    <template>
      <div id="app">
      </div>
      <div id="app1">
      </div>
    </template>

链接：https://juejin.cn/post/6968390578622955551

Teleport（传送门）
新增了一个内置组件：Teleport；这个组件的作用主要用来将模板内的 DOM 元素移动到页面的其他位置。

Suspense
它允许我们的应用程序在等待异步组件时渲染一些其它内容，让用户有一个更好体验。

Vue2和Vue3的区别===========
重构响应式系统，使用Proxy替换Object.defineProperty，Proxy优势：
    可直接监听数组类型的数据变化
    监听的目标为对象本身，不需要像Object.defineProperty一样遍历每个属性，有一定的性能提升
    可拦截的东西更多，提供了apply、ownKeys、has等13种拦截器方法
新增Composition API，更好的逻辑复用和代码组织
重构 Virtual DOM
    模板编译时的优化，将一些静态节点编译成常量
    slot优化，将slot编译为lazy函数，将slot的渲染的决定权交给子组件
    模板中内联事件的提取并重用（原本每次渲染都重新生成内联函数）
代码结构调整，更便于Tree shaking，使得体积更小
使用Typescript替换Flow
链接：https://juejin.cn/post/6979502613793112095

nextTick的实现原理是什么？============
在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的 DOM。
nextTick主要使用了宏任务和微任务。
根据执行环境分别尝试采用Promise、MutationObserver、setImmediate，如果以上都不行则采用setTimeout定义了一个异步方法，
多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

vm.$set 的实现原理是：
如果目标是数组，直接使用数组的 splice 方法触发相应式；
如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，
则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时 ，
给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）

Vue事件绑定原理是什么？=============
原生事件绑定是通过addEventListener绑定给真实元素的，组件事件绑定是通过Vue自定义的$on实现的。

diff算法说一下
同级比较，再比较子节点
先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
比较都有子节点的情况(核心diff)
递归比较子节点

vue2.x中如何监测数组变化？
使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法，当调用数组api时，可以通知依赖更新。
如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

监听器 Observer 、订阅器 Dep 、订阅者 Watcher 和解析器 ·的实现，模拟初始化一个 Vue 实例

Vue的路由模式,实现方式？
hash模式 和 history模式
hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
hash 模式下:仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式:前端的 URL 必须和实际向后端发起请求的 URL 一致，
如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。Vue-Router 
https://juejin.cn/post/6844903875334537230

$route和$router的区别？
$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
$router是'路由实例'对象包括了路由的跳转方法，钩子函数等。

vue如何兼容ie的问题。babel-polyfill插件

beforeCreate：创建前，此时data、methods都还未初始化，所以不能调用
created：创建后，此时data、methods已经初始化，可以调用
beforeMount：挂载前，此时template已经生成但未挂载到页面，页面和created一样
mounted：挂在后，此时vue实例已经初始化完成，dom已经挂载到页面，可以操作dom和第三方dom
beforeUpdate：更新前，此时data等已经更新，但是没有同步到页面
updated：更新后，此时已经同步到页面中。
beforeDestory：销毁前，此时vue实例进入销毁阶段，data、methods、指令、过滤器都还没被销毁，可以正常使用
destoryed：销毁后，此时组件已经被销毁，不能调用data、methods

所以就是：
beforeCreate啥都没有
created：el没有、data有了
beforeMount：el没有、data有了（和created一样）
mounted：el有、data有
链接：https://juejin.cn/post/7097137269332508703

v-model 可以被用在自定义组件上吗？如果可以，如何使用？
如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：
父组件：
<ModelChild v-model="message"></ModelChild>
复制代码
子组件：
<div>{{value}}</div>

props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', '小红')
  },
}
链接：https://juejin.cn/post/7064368176846340132

https://juejin.cn/post/7064368176846340132
总结：通过 Observer 来监听自己的 model 数据变化， 
通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到一个数据响应式的效果。

Vue事件绑定原理说一下
原生事件绑定是通过addEventListener绑定给真实元素的，组件事件绑定是通过Vue自定义的$on实现的

52 Vue模版编译原理知道吗，能简单说一下吗？
https://interview2.poetries.top/excellent-docs/7-Vue.html#_51-vue%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86%E8%AF%B4%E4%B8%80%E4%B8%8B

十一、Keep-alive的实现原理
原理：
Vue.js内部将DOM节点抽象成了一个个的VNode节点，keep-alive组件的缓存也是基于VNode节点的而不是直接存储DOM结构。
它将满足条件（pruneCache与pruneCache）的组件在cache对象中缓存起来，在需要重新渲染的时候再将vnode节点从cache对象中取出并渲染。
常用的两个属性 include/exclude，允许组件有条件的进行缓存。
两个生命周期 activated/deactivated，用来得知当前组件是否处于活跃状态。
keep-alive的中还运用了 LRU(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰
链接：https://juejin.cn/post/7088305435370848263

一、$nextTick有什么用？
Vue是异步渲染的框架。
data改变之后，DOM不会立刻渲染。
$nextTick会在DOM渲染之后被触发，以获取最新的DOM节点。
连续多次的异步渲染，$nextTick只会执行最后一次渲染后的结果。

二、$nextTick的原理 🔥🔥🔥
$nextTick主要通过事件循环中的任务队列的方式异步执行传入的回调函数，
首先会判断当前的执行环境是否支持Promise，MutationObserver，setImmediate，setTimeout。
如果支持则创建对应的异步方法，这里的MutationObserver并不是监听DOM，而是利用其微任务特性。
需要注意的是更新DOM的方法也是通过nextTick进行调用的，因此就可以实现传入$.nextTick的回调函数在DOM渲染完成之后执行这些微任务。

三、循环调用的话nextTick里面有容错机制吗？
多次调用 nextTick 会将方法存入队列 callbacks 中，通过这个异步方法清空当前队列。
链接：https://juejin.cn/post/7084431185358618631

Vue的CSS隔离
使用：在<style> 标签加上scoped就可以实现样式隔离，只会作用在当前组件
原理：chrome上观察可以看见，后面多了个属性类似：[data-v-02asd93]，后面的一串字符是hash值，作为唯一标识
实现：处理vue文件同时需要vue-loader和VueLoaderPlugin插件，缺一不可，通过hash-sum模块计算出源文件对应的唯一的cacheKey
链接：https://juejin.cn/post/7088305435370848263

生命周期钩子是如何实现的
Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的的生命周期钩子订阅好（内部采用数组的方式存储）然后在创建组件实例的过程中会依次执行对应的钩子方法（发布）
export function callHook(vm, hook) {
    // 依次执行生命周期对应的方法
    const handlers = vm.$options[hook];
    if (handlers) {
      for (let i = 0; i < handlers.length; i++) {
        handlers[i].call(vm); //生命周期里面的this指向当前实例
      }
    }
  }
  
  // 调用的时候
  Vue.prototype._init = function (options) {
    const vm = this;
    vm.$options = mergeOptions(vm.constructor.options, options);
    callHook(vm, "beforeCreate"); //初始化数据之前
    // 初始化状态
    initState(vm);
    callHook(vm, "created"); //初始化数据之后
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };

Vue 模板编译原理
Vue 的编译过程就是将 template 转化为 render 函数的过程 分为以下三步
第一步是将 模板字符串 转换成 element ASTs（解析器）
第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）

https://vue3js.cn/interview/vue3/goal.html#%E4%B8%89%E3%80%81%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88  🔥
vue3在兼顾vue2的options API的同时还推出了composition API，大大增加了代码的逻辑组织和代码复用能力
这里当然说的就是composition API，其两大显著的优化：
优化逻辑组织-------
优化逻辑复用-------
相同功能的代码编写在一块，而不像options API那样，各个功能的代码混成一块

逻辑复用
在vue2中，我们是通过mixin实现功能混合，如果多个mixin混合，会存在两个非常明显的问题：命名冲突和数据来源不清晰

Composition API 可以说是Vue3的最大特点，那么为什么要推出Composition Api，解决了什么问题？

通常使用Vue2开发的项目，普遍会存在以下问题：
代码的可读性随着组件变大而变差
每一种代码复用的方式，都存在缺点
TypeScript支持有限

https://vue3js.cn/interview/vue3/composition.html#%E6%AD%A3%E6%96%87
小结
在逻辑组织和逻辑复用方面，Composition API是优于Options API
因为Composition API几乎是函数，会有更好的类型推断。
Composition API对 tree-shaking 友好，代码也更容易压缩
Composition API中见不到this的使用，减少了this指向不明的情况
如果是小型组件，可以继续使用Options API，也是十分友好的

Vue.set方法的原理？ https://juejin.cn/post/6984210440276410399
function set(target, key, val) {
  // 判断是否是数组
  if (Array.isArray(target)) {
      // 判断谁大谁小
      target.length = Math.max(target.length, key)
      // 执行splice
      target.splice(key, 1, val)
      return val
  }
  const ob = target.__ob__
  // 如果此对象没有不是响应式对象，直接设置并返回
  if (key in target && !(key in target.prototype) || !ob) {
      target[key] = val
      return val
  }
  // 否则，新增属性，并响应式处理
  defineReactive(target, key, val)
  return val
}
33. Vue.delete方法的原理？
function del (target, key) {
  // 判断是否为数组
  if (Array.isArray(target)) {
      // 执行splice
      target.splice(key, 1)
      return
  }
  const ob = target.__ob__
  // 对象本身就没有这个属性，直接返回
  if (!(key in target)) return
  // 否则，删除这个属性
  delete target[key]

  // 判断是否是响应式对象，不是的话，直接返回
  if (!ob) return
  // 是的话，删除后要通知视图更新
  ob.dep.notify()
}

36. 如果子组件改变props里的数据会发生什么
如果修改的是基本类型，则会报错
改变的props数据是引用类型
props: {
  item: {
    default: () => ({}),
  }
}
created() {
  // 不报错，并且父级数据会跟着变
  this.item.name = 'sanxin';
  
  // 会报错，跟基础类型报错一样
  this.item = 'sss'
},
watch的immediate属性有什么用？
使用immediate完全可以这么写，当它为true时，会初始执行一次

41. computed如何实现传参？
// html
{{ total(3) }}
// js
computed: {
  total() {
    return function(n) {
        return n * this.num
        }
  },
}

07-Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？
https://juejin.cn/post/7097067108663558151

首先判断两个节点是否为相同同类节点，不同则删除重新创建
如果双方都是文本则更新文本内容
如果双方都是元素节点则递归更新子元素，同时更新元素属性
更新子节点时又分了几种情况：

新的子节点是文本，老的子节点是数组则清空，并设置文本；
新的子节点是文本，老的子节点是文本则直接更新文本；
新的子节点是数组，老的子节点是文本则清空文本，并创建新子节点数组中的子元素；
新的子节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节blabla
链接：https://juejin.cn/post/7097067108663558151


Vue 中 $nextTick 作用与原理？
异步渲染、获取DOM、Promise 标准回答 Vue 在更新 DOM 时是异步执行的，在修改数据后，视图不会立刻更新，
而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。所以修改完数据，立即在方法中获取DOM，获取的仍然是未修改的DOM。 
nextTick的作用是：该方法中的代码会在当前渲染完成后执行，就解决了异步渲染获取不到更新后DOM的问题了。
链接：https://juejin.cn/post/7100817781825732621

双向绑定实现原理 
 当一个Vue实例创建时，Vue会遍历data选项的属性，用Object.defineProperty将它们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。
每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher重新计算，
从而致使它关联的组件得以更新。

 具体就三个步骤
 1.实现一个监听器0bserver，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
 2.实现一个订阅者watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
 3.实现一个解析器Compile,可以扫描和解析每个节点的相关指令，根据初始化模板数据。
作者：paradox_
链接：https://juejin.cn/post/7099053655411654664

diff算法
 diff算法就是进行虚拟节点对比，并返回一个patch对象，用来存储两个节点不同的地方,最后用patch记录的消息去局部更新真实Dom。
简单来说，Diff算法就是在虚拟DOM树从上至下进行同层比对，如果上层已经不同了，那么下面的DOM全部重新渲染。这样的好处是算法简单，减少比对次数，加快算法完成速度。
 平级比较，不考虑跨级比较的情况。内部采用深度递归的方式+双指针方式比较
 它有两个特点:
 1、比较只会在同层级进行，不会跨层级比较
 2、在Diff比较的过程中，循环从两边向中间比较
 Diff算法步骤:
 (1)用JavaScript对象结构表示DOM树的结构;然后用这个树构建一个真正的DOM树，插到文档当中
 (2)当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较(diff)，记录两棵树差异
 (3)把第二棵树所记录的差异应用到第一棵树所构建的真正的DOM树.上(patch)，, 视图就更新了
链接：https://juejin.cn/post/7099053655411654664

模板渲染原理 https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/msfggi 
Vue会根据将模板编译成render函数，调用render函数生成虚拟dom，然后将虚拟dom映射成真实dom。
当数据变化时候，Vue会触发更新视图，调用render函数返回新的虚拟dom，对比新旧虚拟dom，修改真实dom，从而更新界面。
有4个关键步骤：
1. 模板编译，生成渲染函数render。
2. 执行render生成虚拟DOM。
3. 首次渲染时候，根据虚拟DOM生成真实DOM。
4. 状态更新后，diff虚拟DOM，执行patch，生成真实DOM。

模板编译有三个步骤：
1. 将模板解析为AST。（Abstract Syntax Tree，抽象语法树）。
2. 遍历AST标记静态节点。
3. 使用AST生成渲染函数。