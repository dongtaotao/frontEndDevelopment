vue 高频试题 miashi 全 🐯🐯🐯 https://www.html5iq.com/5fe8029ca1fe3d72b82e0b45.html


Vue中使用JSX语法【Vue小知识】
https://www.bilibili.com/video/BV1hM4y1F7SU?spm_id_from=333.337.search-card.all.click

Vue3生命周期、组合函数（自定义hooks）【Vue3】
https://www.bilibili.com/video/BV1yi4y177ss?spm_id_from=333.337.search-card.all.click

Vue中Markdown转HTML
https://www.bilibili.com/video/BV1kf4y1B7Mp?spm_id_from=333.999.0.0

Vue中插槽全解析！！！快来学学吧！【Vue】
https://www.bilibili.com/video/BV1Vi4y1u7XX?spm_id_from=333.999.0.0

如何使用addRoute来动态添加路由？【Vue】
https://www.bilibili.com/video/BV16t4y1S7Eh?spm_id_from=333.999.0.0

什么是Vue Mixins（混入）？【Vue】
https://www.bilibili.com/video/BV1rK411T77m?spm_id_from=333.999.0.0

什么是导航守卫？【Vue路由】
https://www.bilibili.com/video/BV15V411U7oN?spm_id_from=333.999.0.0

Vue3中v-model的变化【Vue3】
https://www.bilibili.com/video/BV1kk4y1m73M?spm_id_from=333.999.0.0

抽离公共代码【Webpack面试题】🍒
https://www.bilibili.com/video/BV1R54y1h7Xr?spm_id_from=333.999.0.0

vue开发看这篇文章就够了
https://segmentfault.com/a/1190000012692321

Vue项目如何进行部署？是否有遇到部署服务器后刷新404问题？
https://fe.ecool.fun/topic/252525e4-0c4c-4e41-9279-41bc59f06f85?orderBy=updateTime&order=desc&tagId=14
Vue项目中如何解决跨域问题？
https://fe.ecool.fun/topic/38c7340e-cb35-43e0-8ea0-20e75b2780a5?orderBy=updateTime&order=desc&tagId=14
 
vue框架原理 https://www.lingtiku.com/quiz/detail/5
new Vue()之后，Vue会从根组件开始，遍历整个组件树，对每个组件进行处理。
对于一个Vue组件，Vue首先会进行模板编译，将模板编译为render函数，render函数返回虚拟DOM，如果遇到子组件，也对子组件做同样操作，最终形成一个虚拟DOM树。
Vue会把虚拟DOM映射到真实DOM并渲染到指定节点上，这样就实现了视图的渲染。
Vue在组件初始化时候还会设置数据为响应式，并将依赖于数据的渲染方法、computed、watch收集起来。
当数据改变后，Vue会根据初始化时候收集的依赖，更新视图，这时候我们就看到最新的界面了。

Vuex工作机制 https://www.lingtiku.com/quiz/detail/5
Vuex的数据流是组件中触发action，action提交mutations，mutations修改states。 组件根据 states或getters来渲染页面。
Vuex是个状态管理器。
它Vuex通过createStore创建了一个数据中心，然后通过发布-订阅模式来让订阅者监听到数据改变。
Vuex的store注入 vue的实例组件的方式，是通过vue的 mixin机制，借助vue组件的生命周期钩子beforeCreate 完成的。这样Vue组件就能通过this.$store获取到store了。
Vuex使用vue中的reactive方法将state设置为响应式，这样组件就可以通过computed来监听状态的改变了。

vue的模板渲染
Vue会根据将模板编译成render函数，调用render函数生成虚拟dom，然后将虚拟dom映射成真实dom。
当数据变化时候，Vue会触发更新视图，调用render函数返回新的虚拟dom，对比新旧虚拟dom，修改真实dom，从而更新界面

Vue.use方法的使用 https://www.lingtiku.com/quiz/detail/5
通过调用Vue.use()方法来安装插件，插件是一个构造函数，它必须实现一个install方法，Vue会调用install方法，并传入Vue变量，让插件可以使用Vue来向Vue添加全局功能。

Vue中组件和插件有什么区别？
https://fe.ecool.fun/topic/51699bda-02be-4433-b2bf-450c2655594f?orderBy=updateTime&order=desc&tagId=14