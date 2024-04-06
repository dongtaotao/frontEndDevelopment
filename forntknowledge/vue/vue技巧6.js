
console.log('====================================');

Vue项目，我现在有三个文件夹分别为a,b,c每个文件夹有一个组件，分别为a.vue,b.vue和c.vue。我想全局注册这些组件，
帮我这一个方法能注册a,b,c里面的组件，如果我们文件夹有很多也可以通用。

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const requireComponent = require.context('./components', true, /[A-Za-z0-9-_,\s]+\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // 获取组件文件夹的名称
  const folderName = fileName.split('/')[1]
  // 获取组件的 PascalCase 命名
  const componentName = folderName
  // 全局注册组件
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
确保你的组件文件夹的路径与上述代码中定义的路径相匹配，并且组件文件的命名使用 PascalCase 格式，并且与文件夹的名称相同。
console.log('====================================');

console.log('====================================');
Vue如何 加载远程组件
在Vue中，你可以通过使用动态导入（Dynamic Imports）的方式来加载远程组件。其中，Vue提供了一个内置的函数import()，它可以用于动态导入远程组件。

下面是一种加载远程组件的示例方法：

首先，确保你的项目支持ES2015模块。你可以通过在项目配置文件（例如.babelrc或babel.config.js）中配置相关选项来进行支持。

在你需要加载远程组件的地方，使用import()函数来动态导入远程组件。例如：

import('http://example.com/remote-component.js').then(module => {
  // 远程组件加载成功
  const RemoteComponent = module.default;
  // 在这里使用RemoteComponent
}).catch(error => {
  // 远程组件加载失败
});
在上面的示例中，import()函数返回一个Promise对象，当远程组件加载成功时，可以通过module.default来获取导出的远程组件对象。

远程组件加载后，你可以在then回调函数中对其进行处理。例如，你可以使用它来注册为本地的Vue组件：
import('http://example.com/remote-component.js').then(module => {
  const RemoteComponent = module.default;
  Vue.component('remote-component', RemoteComponent);
}).catch(error => {
  // 远程组件加载失败
});
在上述示例中，我们使用Vue.component方法将远程组件注册为全局组件，这样你就可以在整个Vue应用程序中使用它了。

需要注意的是，动态导入的远程组件需要在加载完成后进行注册和使用，所以你可能需要考虑如何在组件中处理加载过程中的等待状态，例如显示加载动画或占位符。

另外，需要确保你的远程组件在加载后能够正确解析和执行，这包括了正确的依赖项和Vue组件定义等。
console.log('====================================');


React&Vue 系列：CSS 知识要点
https://juejin.cn/post/7264503433948086308?utm_source=gold_browser_extension#heading-11

目录
React：CSS
内联样式
命名规范
css module
css in js
Vue：CSS
scoped 实现原理
样式穿透
css 中 v-bind
vue3 也可以使用 css module
额外知识
React 配置 css module 支持 less
webpack 配置
vite
ES6 的标签模板字符串
总结


成为Vue高手，必须掌握的37个知识点 🔥
https://juejin.cn/post/7124835773873913893


Vue3组件通信的7种方法，值得收藏！
https://juejin.cn/post/7280430881965080630?utm_source=gold_browser_extension


如何解决vue3中的内存泄漏？
https://juejin.cn/post/7260815743661899813?utm_source=gold_browser_extension

https://juejin.cn/post/7124835773873913893
// 1、JS文件中，直接使用 @
import chartItem from "@/components/report";




// 2、css(scss等预处理)文件中，使用 ~@ 开头
@import '~@/assets/css/global.less';
background-image: url("~@/assets/img/login/user.png");

// 3、template模板中，@、~@ 均可
<img src="@/assets/img/login/logo.png"> 


Vue3实现详情页返回列表页时保持表格滚动条的位置
https://juejin.cn/post/7304234672895819813?utm_source=gold_browser_extension



4种方案带你探索 Vue.js 代码复用的前世今生
在Vue.js中我们可通过以下4种方案来实现代码逻辑复用：
https://juejin.cn/post/7238604002354987064
mixin
高阶组件
作用域插槽（scoped slots）
Composition API 组合式函数



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
链接：https://juejin.cn/post/7317926149120196643

在Vue2中，diff算法采用的是双指针进行头头相比、尾尾相比、头尾相比，最终通过映射关系来确认可复用的节点，进行更新。
在Vue3中，diff算法分为有key和无key和快速diff三种方式，快速diff通过静态标记，对一些文本、空节点进行快速更新，无key方式简单粗暴对比每一项，判断是否可以复用节点，有key的方式依旧采用双指针，但是只进行头头相比、尾尾相比，最终会根据求取无序列表的最长递增子序列的方式，对能复用的节点进行patch，需要移动的节点进行移动节点，最终完成diff更新。
链接：https://juejin.cn/post/7317926149120196643


第26题：Vue项目如何进行部署？是否有遇到部署服务器后刷新404问题？
https://fe.ecool.fun/topic/252525e4-0c4c-4e41-9279-41bc59f06f85?orderBy=updateTime&order=desc&tagId=14


第53题：Vue项目中如何解决跨域问题？ 
https://fe.ecool.fun/topic/38c7340e-cb35-43e0-8ea0-20e75b2780a5?orderBy=updateTime&order=desc&tagId=14


vant项目使用postcss-pxtorem和amfe-flexible 进行移动端适配 
https://wangziqi.tech/pages/b275f3/#%E6%AD%A5%E9%AA%A4



//父组件:
provide: { //provide 是一个对象,提供一个属性或方法
  foo: '这是 foo',
  fooMethod:()=>{
    console.log('父组件 fooMethod 被调用')
  }
},

// 子或者孙子组件
inject: ['foo','fooMethod'], //数组或者对象,注入到子组件
mounted() {
  this.fooMethod()
  console.log(this.foo)
}
//在父组件下面所有的子组件都可以利用inject
https://juejin.cn/post/6844903959266590728 