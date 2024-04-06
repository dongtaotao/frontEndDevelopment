有关于前端框架原理的面试问题汇总
https://juejin.cn/post/7207637337572196407
4.scoped原理
为组件实例生成一个唯一标识，给组件中的每个标签对应的dom元素添加一个标签属性，data-v-xxxx
给中的每个选择器的最后一个选择器添加一个属性选择器，原选择器[data-v-xxxx]，如：原选择器为.container #id div，则更改后选择器为.container #id div[data-v-xxxx]
链接：https://juejin.cn/post/7207637337572196407

7.vuex`的核心原理
vuex`的核心原理，通过全局混入`beforeCreate`，将`store`实例注入到每个`Vue`组件中，
因此每个组件都能通过`this.$store`来获取到唯一的`store`实例。通过借助`vue`的`data`和`computed`来实
现`state`的响应式和`getters`缓存特性。严格模式通过`vue`的`watch`来监听，如果`state`的修改不是通过`commit`方
\法则会抛出警告。`action`方法都会包裹一层`promise`，所以`action`返回的是`promise`。这也就是为什么说要在`mutation`里面处理同步，在`action`里面处理异步

** 6.vue编译原理**
第一步是将 模板字符串 转换成 element ASTs（解析器）
第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）
链接：https://juejin.cn/post/7207637337572196407   



抽丝剥茧带你复习vue源码（2023年面试版本）
https://juejin.cn/post/7195517440344211512
Vue3新特性
组合式API（composition API）
teleport
Fragment
diff算法优化
createRenderer
生命周期变更
vue3性能提升是通过哪些方面实现的
虚拟DOM
什么是虚拟DOM？如何实现虚拟DOM
为什么要使用虚拟DOM
虚拟DOM是怎么变为真实DOM的
Diff算法执行过程
组件是怎么渲染成DOM的
源码解析
依赖收集与响应式原理
什么是响应式
原理实现
事件机制原理
Vue事件机制API
初始化事件
$on
$off
$emit
$once
事件缓存
模板编译原理
template函数怎么编译成render函数的
Transition实现原理
Transition组件基本使用
Transition组件实现原理
keepAlive原理
基本使用
keepAlive实现原理
Supsense原理与异步
基本使用
Suspense实现原理
Teleport是怎么实现选择性挂载的
实现原理
nextTick实现原理
异步更新DOM策略
nextTick原理
watch函数实现原理
watch原理
computed原理
性能优化
页面加载速度优化
打包速度优化
打包体积优化
浏览器安全  