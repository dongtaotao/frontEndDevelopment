vuex
Vuex 集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以可预测的方式发生变化

核心概念
state: 状态中心
mutations: 更改状态
actions: 异步更改状态
getters: 获取状态
modules: 将state分成多个modules，便于管理

http://interview.poetries.top/docs/simply.html#_10-vue3%E5%B8%A6%E6%9D%A5%E7%9A%84%E6%96%B0%E7%89%B9%E6
%80%A7-%E4%BA%AE%E7%82%B9

vue3带来的新特性/亮点
1. 压缩包体积更小
2. Object.defineProperty -> Proxy
3. Virtual DOM 重构
4. Performance  vue3在性能方面比vue2快了2倍。
5. Tree-shaking support
6. Composition API
7. 新增的三个组件Fragment、Teleport、Suspense
8. Better TypeScript support

你都做过哪些Vue的性能优化
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

80 vue中是如何检测数组变化的呢
数组就是使用 object.defineProperty 重新定义数组的每一项，那能引起数组变化的方法我们都是知道的，
pop 、 push 、 shift 、 unshift 、 splice 、 sort 、 reverse 这七种，只要这些方法执行改了数组内容，我就更新内容就好了，是不是很好理解

是用函数劫持的方式，重写了数组方法，具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新
数组里每一项可能是对象，那么我就是会对数组的每一项进行观测，（且只有数组里的对象才能进行观测，观测过的也不会进行观测）
vue3：改用 proxy ，可直接监听对象数组的变化

mapState, mapGetters, mapActions, mapMutations

既然 Vue 通过数据劫持可以精准探测数据变化,为什么还需要虚拟 DOM 进行 diff 检测差异?
考点: Vue 的变化侦测原理
前置知识: 依赖收集、虚拟 DOM、响应式系统
现代前端框架有两种方式侦测变化，一种是pull，一种是push
pull: 其代表为React，我们可以回忆一下React是如何侦测到变化的,我们通常会用setStateAPI显式更新，然后React会进行一层层的Virtual Dom
Diff操作找出差异，
  然后Patch到DOM上，React从一开始就不知道到底是哪发生了变化，只是知道「有变化了」，然后再进行比较暴力的Diff操作查找「哪发生变化了」，
  另外一个代表就是Angular的脏检查操作。
push: Vue的响应式系统则是push的代表，当Vue程序初始化的时候就会对数据data进行依赖的收集，一但数据发生变化,响应式系统就会立刻得知。
  因此Vue是一开始就知道是「在哪发生变化了」，但是这又会产生一个问题，如果你熟悉Vue的响应式系统就知道，通常一个绑定一个数据就需要一个Watcher，
  一但我们的绑定细粒度过高就会产生大量的Watcher，这会带来内存以及依赖追踪的开销，而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的
  方案,在组件级别进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更
  加具体的差异，而Virtual Dom Diff则是pull操作，Vue是push+pull结合的方式进行变化侦测的。
Vue和React的视图更新机制对比
https://www.cnblogs.com/chenwenhao/p/11258895.html

watch、methods 和 computed 的区别?
watch 为了监听某个响应数据的变化。computed 是自动监听依赖值的变化，从而动态返回内容，主要目的是简化模板内的复杂运算。所以区别来源于用法，
只是需要动态值，那就用 computed ；需要知道值的改变后执行业务逻辑，才用 watch。
methods是一个方法，它可以接受参数，而computed 不能，computed 是可以缓存的，methods 不会。computed 可以依赖其他 computed，甚至是其他组
件的 data。

vuejs与angularjs以及react的区别？

与AngularJS的区别
相同点：
都支持指令：内置指令和自定义指令。
都支持过滤器：内置过滤器和自定义过滤器。
都支持双向数据绑定。
都不支持低端浏览器。

不同点：
1.AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观。
2.在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。
Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。
对于庞大的应用来说，这个优化差异还是比较明显的。

与React的区别
相同点：
React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。
中心思想相同：一切都是组件，组件实例之间可以嵌套。
都提供合理的钩子函数，可以让开发者定制化地去处理需求。
都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载。
在组件开发中都支持mixins的特性。

不同点：
React依赖Virtual DOM,而Vue.js使用的是DOM模板。React采用的Virtual DOM会对渲染出来的结果做脏检查。
Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作Virtual DOM。

vue-router 有哪些钩子函数?
全局前置守卫 router.beforeEach
全局解析守卫 router.beforeResolve
全局后置钩子 router.afterEach
路由独享的守卫 beforeEnter
组件内的守卫 beforeRouteEnter 、 beforeRouteUpdate 、 beforeRouteLeave

一、创建前 / 后
在beforeCreate生命周期函数执行的时候，data和method 还没有初始化
在created 生命周期函数执行的时候，data和method已经初始化完成
二、渲染前/后
在beforeMount 生命周期函数执行的时候，已经编译好了模版字符串、但还没有真正渲染到页面中去
在mounted 生命周期函数执行的时候，已经渲染完，可以看到页面
三、数据更新前/后
在beforeUpdate生命周期函数执行的时候，已经可以拿到最新的数据，但还没渲染到视图中去。
在updated生命周期函数执行的时候，已经把更新后的数据渲染到视图中去了。
四、销毁前/后
在beforeDestroy 生命周期函数执行的时候，实例进入准备销毁的阶段、此时data 、methods 、指令等还是可用状态
在destroyed生命周期函数执行的时候，实例已经完成销毁、此时data 、methods 、指令等都不可用

计算属性不能执行异步任务，计算属性必须同步执行。也就是说计算属性不能向服务器请求或者执行异步任务。如果遇到异步任
务，就交给侦听属性。watch也可以检测computed属性。

组件中写name选项有什么作用？
1）项目使用keep-alive时，可搭配组件name进行缓存过滤
2）DOM做递归组件时需要调用自身name
3）vue-devtools调试工具里显示的组件名称由vue中组件name决定

defineProperty缺点
无法检测对象属性的添加或移除，为此我们需要使用 Vue.set 和 Vue.delete 来保证响应系统的运行符合预期
无法监控到数组下标及数组长度的变化，当直接通过数组的下标给数组设置值或者改变数组长度时，不能实时响应
性能问题，当data中数据比较多且层级很深的时候，因为要遍历data中所有的数据并给其设置成响应式的，会导致性能下降

5.2 对比区别
Object.defineProperty只能劫持对象的属性，对新增属性需要手动进行 Observe，而 Proxy 是直接代理对象
为什么 Proxy 可以解决以上的痛点呢？ 本质的原因在于 Proxy 是一个内置了拦截器的对象，所有的外部访问都得先经过这一层拦截
不管是先前就定义好的，还是新添加属性，访问时都会被拦截（proxy具体学习请看阮一峰老师的ES6教程 Proxy）

在哪个生命周期内调用异步请求
可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，
可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点
能更快获取到服务端数据，减少页面 loading 时间
ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性

//================================================================
直接给一个数组项赋值，Vue 能检测到变化吗？}
由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：

当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength

为了解决第一个问题，Vue 提供了以下操作方法：

// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

为了解决第二个问题，Vue 提供了以下操作方法：

// Array.prototype.splice
vm.items.splice(newLength)
链接：https://juejin.cn/post/7002886646840426527

v-model 的原理？
我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，
v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

text 和 textarea 元素使用 value 属性和 input 事件；
checkbox 和 radio 使用 checked 属性和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。

以 input 表单元素为例：
<input v-model='something'>
相当于

<input v-bind:value="something" v-on:input="something = $event.target.value">
复制代码
如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：
父组件：
<ModelChild v-model="message"></ModelChild>

子组件：
<div>{{value}}</div>

props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', '小红')
  },
}

链接：https://juejin.cn/post/7002886646840426527

https://vue3js.cn/interview/vue/vue3_vue2.html#%E5%93%AA%E4%BA%9B%E5%8F%98%E5%8C%96 
Vue3的新特性，如下：
速度更快
体积减少
更易维护
更接近原生
更易使用


vue长列表优化-虚拟滚动
https://juejin.cn/post/7063898544008069127