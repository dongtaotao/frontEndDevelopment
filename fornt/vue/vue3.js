
【我的🐯年面试准备】 Vue这一块拿捏了 🔥🔥🔥 很好的文章，面试
https://juejin.cn/post/7064368176846340132

历时一个月，2.6W字！50+Vue经典面试题源码级详解，你值得收藏！
https://juejin.cn/post/7097067108663558151

超全面总结Vue面试知识点，助力金三银四
https://juejin.cn/post/7075130658820980772

完美回答之实现VUE数据绑定的原理
https://www.bilibili.com/video/BV1tL4y1z7Ws?spm_id_from=333.337.search-card.all.click

Vue 开发必须知道的 36 个技巧【近1W字】
https://juejin.cn/post/6844903959266590728

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

你都做过哪些Vue的性能优化？
编码阶段
尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
v-if和v-for不能连用
如果需要使用v-for给每项元素绑定事件时使用事件代理
SPA 页面采用keep-alive缓存组件
在更多的情况下，使用v-if替代v-show
key保证唯一
使用路由懒加载、异步组件
防抖、节流
第三方模块按需导入
长列表滚动到可视区域动态加载
图片懒加载

SEO优化
预渲染
服务端渲染SSR

打包优化
压缩代码
Tree Shaking/Scope Hoisting
使用cdn加载第三方模块
多线程打包happypack
splitChunks抽离公共文件
sourceMap优化

用户体验
骨架屏
PWA
还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。

vue2.x中如何监测数组变化？
使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法，当调用数组api时，可以通知依赖更新。
如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

总结
vuex整体思想诞生于flux,可其的实现方式完完全全的使用了vue自身的响应式设计，
依赖监听、依赖收集都属于vue对对象Property set get方法的代理劫持。
最后一句话结束vuex工作原理，vuex中的store本质就是没有template的隐藏着的vue组件；

监听器 Observer 、订阅器 Dep 、订阅者 Watcher 和解析器 ·的实现，模拟初始化一个 Vue 实例

Vue的双向数据绑定原理是什么
vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，
在数据变动时发布消息给订阅者，触发相应的监听回调。 具体实现步骤，感兴趣的可以看看:
当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 
  都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，
   添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: 
  1、在自身实例化时往属性订阅器(dep)里面添加自己 2、自身必须有一个update()方法 
  3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，
通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，
达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果

Vue的路由模式,实现方式？

hash模式 和 history模式
hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
hash 模式下:仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式:前端的 URL 必须和实际向后端发起请求的 URL 一致，
如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。Vue-Router 
官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，
你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”
链接：https://juejin.cn/post/6844903875334537230

$route和$router的区别？
$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
$router是'路由实例'对象包括了路由的跳转方法，钩子函数等。

vue如何兼容ie的问题。
babel-polyfill插件

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
},

链接：https://juejin.cn/post/7064368176846340132

https://juejin.cn/post/7064368176846340132
总结：通过 Observer 来监听自己的 model 数据变化， 
通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到一个数据响应式的效果。

46 nextTick
nextTick 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM
nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用
Promise
MutationObserver
setImmediate
如果以上都不行则采用setTimeout
定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列

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

二、$nextTick的原理
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

Keep-alive的实现原理
原理：
Vue.js内部将DOM节点抽象成了一个个的VNode节点，keep-alive组件的缓存也是基于VNode节点的而不是直接存储DOM结构。
它将满足条件（pruneCache与pruneCache）的组件在cache对象中缓存起来，在需要重新渲染的时候再将vnode节点从cache对象中取出并渲染。

常用的两个属性 include/exclude，允许组件有条件的进行缓存。
两个生命周期 activated/deactivated，用来得知当前组件是否处于活跃状态。
keep-alive的中还运用了 LRU(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰
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
优化逻辑组织
优化逻辑复用
#
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
\如果修改的是基本类型，则会报错
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
<div>{{ total(3) }}

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