【面试题解】vue-router有几种钩子函数？具体是什么及执行流程是怎样的？
https://juejin.cn/post/6987267852575195143#heading-11
全局守卫、路由守卫、组件守卫。

15 说一说keep-alive实现原理
http://interview.poetries.top/docs/simply.html#_14-vue-%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B
keep-alive组件接受三个属性参数：include、exclude、max
include 指定需要缓存的组件name集合
exclude
keep-alive实例会缓存对应组件的VNode,如果命中缓存，直接从缓存对象返回对应VNode

2021 Vue.js 面试题汇总及答案
https://jackniu81.github.io/2021/04/12/Vue-js-Interview-Questions-and-Answers-2021/

【前端面试】使用过Vue的自定义指令吗？ https://www.bilibili.com/video/BV1FR4y1c7bt?spm_id_from=333.337.search-card.all.click
https://zhuanlan.zhihu.com/p/484670867

LRU（Least recently used） 算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。
(墨菲定律：越担心的事情越会发生)
https://leetcode-cn.com/problems/lru-cache/%EF%BC%8C%E8%80%83keep-alive%E7%AE%97%E6%B3%95%E7%9A%84%E6%97%B6%E5%80%99%E5%96%9C%E6%AC%A2%E9%97%AE/
实现 LRUCache 类：
 get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
v put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；
如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
class LRU {
    constructor(max) {
        this.max = max
        this.cache = new Map()
    }
    get(key) {
        const { cache } = this
        const value = cache.get(key)
        if (!value) return -1
        cache.delete(key)
        cache.set(key, value)
        return value
    }
    set(key, value) {
        const { cache, max } = this
        if (cache.has(key)) {
            cache.delete(key)
        }
        if (cache.size === max) {
            cache.delete(cache.keys().next().value)
        }
        cache.set(key, value)
    }
}

Vue 如何清除浏览器缓存？
项目打包的时候给每个打包文件加上 hash 值，一般是在文件后面加上时间戳； 
在 html 文件中加入 meta 标签，content属性设置为no-cache; 
在后端服务器中进行禁止缓存设置。

50 说一下v-model的原理
v-model本质就是一个语法糖，可以看成是value + input方法的语法糖。 可以通过model属性的prop和event属性来进行自定义。原生的v-model，
会根据标签的不同生成不同的事件和属性
{/* <input v-model='searchData'> */}
等价于
{/* <input 
	v-bind:value = 'searchData'
	v-on:input = 'searchData = $event.target.value' 
> */}
当在input元素中使用v-model实现双数据绑定，其实就是在输入的时候触发元素的input事件，通过这个语法糖，实现了数据的双向绑定

47. 为什么Vuex要分为Action和Mutation，Mutation为啥只能是同步的？
区分 actions 和 mutations 并不是为了解决竞态问题，而是为了能用 devtools 追踪状态变化。
vuex 真正限制你的只有 mutation 必须是同步的，同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态，这样 devtools 就可
以打个 snapshot 存下来，然后就可以随便 time-travel 了。
链接：https://juejin.cn/post/6905913905152065544 

Vue 如何清除浏览器缓存？=====================
在HTTP协议中，只有后端返回 expires 或 Cache-Control:max-age=XXX， 前端才缓存。但在浏览器中，默认会对 html css js 等静态文件、以及重定向进行缓存，
最常用的方法就是，在打包的时候给每个打包文件加上hash 值，一般是在文件后面加上时间戳或者随机数
在脚本加载时加入一个时间戳，修改 webpack.prod.conf.js 文件。(未使用过该方法，需要实践)
链接：https://juejin.cn/post/7083444395747311630

Vue为什么没有类似于React中shouldComponentUpdate的生命周期？
根本原因是Vue与React的变化侦测方式有所不同
React是pull的方式侦测变化,当React知道发生变化后,会使用Virtual Dom Diff进行差异检测,但是很多组件实际上是肯定不会发生变化的,
这个时候需要用shouldComponentUpdate进行手动操作来减少diff,从而提高程序整体的性能.

Vue是pull+push的方式侦测变化的,在一开始就知道那个组件发生了变化,因此在push的阶段并不需要手动控制diff,
而组件内部采用的diff方式实际上是可以引入类似于shouldComponentUpdate相关生命周期的,但是通常合理大小的组件不会有过量的diff,
手动优化的价值有限,因此目前Vue并没有考虑引入shouldComponentUpdate这种手动优化的生命周期
链接：https://juejin.cn/post/7083444395747311630

Vue2（3）全家桶+TS
https://juejin.cn/column/7054086173311893512

watch可以监听computed中的属性

vue的nextTick原理
nextTick理解
因为vue更新dom是一个异步操作，并不是数据变化会马上更新，会进入一个异步队列，等全部数据变化之后才渲染页面。因此要基于新的DOM操作时，需要用到这个函数。

插槽
让父组件给子组件指定位置插入html结构，子组件利用solt决定位置。

https://jackniu81.github.io/2021/04/12/Vue-js-Interview-Questions-and-Answers-2021/

Vue.js 双向绑定的原理
Vue.js 2.0 采用数据劫持（Proxy 模式）结合发布者-订阅者模式（PubSub 模式）的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，
在数据变动时发布消息给订阅者，触发相应的监听回调。
每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，
之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。
Vue.js 3.0, 放弃了Object.defineProperty ，使用更快的ES6原生 Proxy (访问对象拦截器, 也称代理器)
步骤：

需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，
  给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，
  并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: 
  ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 
  ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，
通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，
达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？
不会立即同步执行重新渲染。
Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。
Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。
然后，在下一个的事件循环”tick”中，Vue 刷新队列并执行实际（已去重的）工作。

批量异步更新策略
Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
换句话说，只要观察到数据变化，就会自动开启一个队列，并缓冲在同一个事件循环中发生的所有数据改变。在缓冲时会去除重复数据，从而避免不必要的计算和 DOM 操作。

vue-router有哪几种导航钩子？
全局导航钩子：router.beforeEach(to,from,next)
组件内的钩子beforeRouteEnter (to, from, next) beforeRouteUpdate (to, from, next) beforeRouteLeave (to, from, next)
单独路由独享组件 beforeEnter: (to, from, next)

什么是动态组件？动态组件的钩子如何执行？ https://juejin.cn/post/7064368176846340132#heading-95
让多个组件使用同一个挂载点，并动态切换，这就是动态组件 

vue2、vue3 diff 算法源码解析
https://juejin.cn/post/7100092670566989861
vue2——双端diff算法
具体来说就是新旧 VNode 节点的左右头尾两侧都有一个指针，用来遍历对比新旧 VNode 列表。
vue3——快速diff算法


vue和react区别
数据流：
react主张函数式编程，所以推崇纯组件，数据不可变，单向数据流，
vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。

监听数据变化实现原理：
Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
React 默认是通过比较引用的方式进行的，如果不优化(PureComponent/shouldComponentUpdate)可能导致大量不必要的VDOM的重新渲染。
组件通信的区别：jsx和.vue模板。
HoC和Mixins(在Vue中我们组合不同功能的方式是通过Mixin，而在React中我们通过HoC(高阶组件))。

性能优化
React: shouldComponentUpdate
Vue:内部实现shouldComponentUpdate的优化，由于依赖追踪系统存在，通过watcher判断是否需要重新渲染(当一个页面数据量较大时，
  Vue的性能较差，造成页面卡顿，所以一般数据比较大的项目倾向使用React)。
链接：https://juejin.cn/post/7099053655411654664 前端面试自用总结--vue

Vue2.x和Vue3.x渲染器的diff算法分别说一下
同级比较，再比较子节点
先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
比较都有子节点的情况(核心diff)
递归比较子节点
正常Diff两个树的时间复杂度是O(n^3)，但实际情况下我们很少会进行跨层级的移动DOM，所以Vue将Diff进行了优化，从O(n^3) -> O(n)，
只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。

Vue2的核心Diff算法采用了双端比较的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，
再进行相关操作。相比React的Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

Vue3.x借鉴了
在创建VNode时就确定其类型，以及在 mount/patch 的过程中采用位运算来判断一个VNode的类型，
在这个基础之上再配合核心的Diff算法，使得性能上较Vue2.x有了提升。(实际的实现可以结合Vue3.x源码看。)
该算法中还运用了动态规划的思想求解最长递归子序列。

十四、Vue的diff算法原理是什么?
Vue的diff算法是平级比较，不考虑跨级比较的情况。内部采用深度递归的方式+双指针方式比较
先比较两个节点是不是相同节点
相同节点比较属性，复用老节点
先比较儿子节点，考虑老节点和新节点儿子的情况
优化比较：头头、尾尾、头尾、尾头
比对查找，进行复用

