Vue 不重新打包，动态加载全局配置的实现过程 
https://wojiushiwo945you.blog.csdn.net/article/details/128033843

（持续更新中）Vue 小技巧 🔥👌
https://www.bilibili.com/video/BV1SA411G7o6/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

【Vue小知识】 👌
https://www.bilibili.com/video/BV1qG4y1z7Qg/?spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

我在项目中是这样配置Vue的
https://juejin.cn/post/6850037262441250829 

vue 项目开发，我遇到了这些问题 🔥🔥🔥🔥
https://juejin.cn/post/7119018849353072677

const mixin1 = {
  created() {
    console.log('我是第一个输出的')
  }
}

const mixin2 = {
  created() {
    console.log('我是第二个输出的')
  }
}
export default {
  mixins: [mixin1, mixin2],
  created() {
    console.log('我是第三个输出的')
  }
}
其他选项 对于值为对象的选项，如methods,components,filter,directives,props等等，
将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

Vue实战技巧https://juejin.cn/post/6844904200598454286

杂谈：vue中created、watch和computed的执行顺序
// main.js
import Vue from "vue";

new Vue({
  el: "#app",
  template: `<div>
    <div>{{computedCount}}</div>
  </div>`,
  data() {
    return {
      count: 1,
    }
  },
  watch: {
    count: {
      handler() {
        console.log('watch');
      },
      immediate: true,
    }
  },
  computed: {
    computedCount() {
      console.log('computed');
      return this.count + 1;
    }
  },
  created() {
    console.log('created');
  },
});
当前例子的执行顺序为：watch --> created --> computed
https://juejin.cn/post/7169990997223407646

Vue在子组件中判断父组件是否传来事件
resetFields() {
  //...
  if (this.$listeners.resetFields) {
  // 自定义事件
    this.$emit('resetFields')
  } else {
    // 默认刷新列表事件
    this.loadList()
  }
}

vue element 多个 Form 表单同时验证
给 slot 插槽绑定事件
https://juejin.cn/post/7119018849353072677

vue3 正式发布两年后，我才开始学 — vue3+setup+ts 🔥（万字总结）
https://juejin.cn/post/7158331832512020511

Vue3.2: 记Vite+ESLint与Prettier项目搭建实用配置
https://juejin.cn/post/7202108772923572285?

vuex页面刷新数据丢失问题的四种解决方式
https://juejin.cn/post/7159365139693568007

vuex-7-persist-持久化存储 (手写&vuex-persist)
https://developer.aliyun.com/article/922279

vuex中我们一般采用的是vuex-persist持久化插件，redux中我们可以使用网上提供的redux-persist插件来实现redux数据的持久化。

Vue 开发必须知道的 36 个技巧【近1W字】
https://juejin.cn/post/6844903959266590728

17.Vue2的初始化过程你有过了解吗，做了哪些事情 https://juejin.cn/post/7202639428132274234?
new Vue走到了vue的构造函数中：`src\core\instance\index.js`文件。
​
this._init(options)
​
然后从Mixin增加的原型方法看，initMixin(Vue)，调用的是为Vue增加的原型方法_init
​
// src/core/instance/init.js
​
function initMixin (Vue) {
  Vue.prototype._init = function (options) {
     var vm = this; 创建vm, 
     ...
     // 合并options 到 vm.$options
     vm.$options = mergeOptions(  
       resolveConstructorOptions(vm.constructor), 
       options || {},  
       vm 
     );
  }
  ...
   initLifecycle(vm); //初始生命周期
   initEvents(vm); //初始化事件
   initRender(vm); //初始render函数
   callHook(vm, 'beforeCreate'); //执行 beforeCreate生命周期钩子
   ...
   initState(vm);  //初始化data，props，methods computed，watch 
   ...
   callHook(vm, 'created');  //执行 created 生命周期钩子
   
   if (vm.$options.el) {
      vm.$mount(vm.$options.el); //这里也是重点，下面需要用到
   }
 }

总结

所以，从上面的函数看来，new vue所做的事情，就像一个流程图一样展开了，分别是

-  合并配置
-  初始化生命周期
-  初始化事件
-  初始化渲染
-  调用 `beforeCreate` 钩子函数
-  init injections and reactivity（这个阶段属性都已注入绑定，而且被 `$watch` 变成reactivity，但是 `$el` 还是没有生成，也就是DOM没有生成）
-  初始化state状态（初始化了data、props、computed、watcher）
-  调用created钩子函数。

在初始化的最后，检测到如果有 el 属性，则调用 vm.$mount 方法挂载 vm，挂载的目标就是把模板渲染成最终的 DOM。


18.Vue3初始化的一个大概流程
- 初始化的一个大概流程

createApp() => mount() => render() => patch() => processComponent() => mountComponent()

- 简易版流程编写

1.Vue.createApp() 实际执行的是renderer的createApp()
2.renderer是createRenderer这个方法创建
3.renderer的createApp()是createAppAPI()返回的
4.createAppApi接受到render之后，创建一个app实例，定义mount方法
5.mount会调用render函数。将vnode转换为真实dom
createRenderer() => renderer => renderer.createApp() <= createAppApi()

<div id="app"></div>

<script>
    // 3.createAppAPI
    const createAppAPI = render => {
        return function createApp(rootComponent) {
            // 返回应用程序实例
            const app = {
                mount(rootContainer) {
                    // 挂载vnode => dom
                    const vnode = {
                        tag: rootComponent
                    }
                    // 执行渲染
                    render(vnode, rootContainer)
                }
            }
            return app;
        }
    }
​
    // 1. 创建createApp
    const Vue = {
        createApp(options) {
            //实际执行的为renderer的createApp()
            // 返回app实例
            return renderer.createApp(options)
        }
    }
​
    // 2.实现renderer工厂函数
    const createRenderer = options => {
        // 实现patch
        const patch = (n1, n2, container) => {
            // 获取根组件配置
            const rootComponent = n2.tag;
            const ctx = { ...rootComponent.data()}
            // 执行render获取vnode
            const vnode = rootComponent.render.call(ctx);
​
            // 转换vnode => dom
            const parent = options.querySelector(container)
            const child = options.createElement(vnode.tag)
            if (typeof vnode.children === 'string') {
                child.textContent = vnode.children
            } else {
                //array
            }
            // 追加
            options.insert(child, parent)
        }
​
        // 实现render
        const render = (vnode, container) => {
            patch(container._vnode || null, vnode, container)
            container._vnode = vnode;
        }
​
        // 该对象就是renderer
        return {
            render,
            createApp: createAppAPI(render)
        }
    }
​
    const renderer = createRenderer({
        querySelector(el) {
            return document.querySelector(el)
        },
        createElement(tag) {
            return document.createElement(tag)
        },
        insert(child, parent) {
            parent.appendChild(child)
        }
    })
​
    Vue.createApp({
        data() {
            return {
                bar: 'hello,vue3'
            }
        },
        render() {
            return {
                tag: 'h1',
                children: this.bar
            }
        }
    }).mount('#app')
</script>


22.从0到1构建一个Vue项目你需要做哪些内容
*   架子：选用合适的初始化脚手架(`vue-cli2.0`或者`vue-cli3.0`)
*   请求：数据`axios`请求的配置
*   登录：登录注册系统
*   路由：路由管理页面
*   数据：`vuex`全局数据管理
*   权限：权限管理系统
*   埋点：埋点系统
*   插件：第三方插件的选取以及引入方式
*   错误：错误页面
*   入口：前端资源直接当静态资源，或者服务端模板拉取
*   `SEO`：如果考虑`SEO`建议采用`SSR`方案
*   组件：基础组件/业务组件
*   样式：样式预处理起，公共样式抽取
*   方法：公共方法抽离

Vue的事件绑定原理
原生事件绑定是通过 addEventListener 绑定给真实元素的，组件事件绑定是通过 Vue 自定义的$on 实现的。如果要在组件上使用原生事件，
需要加.native 修饰符，这样就相当于在父组件中把子组件当做普通 html 标签，然后加上原生事件。

链接：https://juejin.cn/post/7204670801243930682

Vue中Markdown转HTML【Vue】
https://www.bilibili.com/video/BV1kf4y1B7Mp/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

Vue中如何使用插件？（Plugins）
https://www.bilibili.com/video/BV1op4y1v7SQ/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

Vue中按钮级别的权限控制【Vue】
https://www.bilibili.com/video/BV1py4y1r7hB/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

$attrs?inheritAttrs?如何使用它们让你的组件可以更加灵活配置！！【Vue】
https://www.bilibili.com/video/BV14p4y1Y7p5/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

使用路由元信息控制路由访问权限【Vue】
https://www.bilibili.com/video/BV1LT4y1w7v7/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

vue中自定义插件----------
https://blog.csdn.net/qq_43287934/article/details/124082581

vue自定义插件
https://www.jianshu.com/p/fffb43ac029a

有些组件不想马上加载？使用异步组件！【Vue】 🔥🔥🔥
https://www.bilibili.com/video/BV1YT4y1w7FT/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

Vue 强大的插件功能，你也可以自定义实现！(真没你想得那么高大上~)
https://mp.weixin.qq.com/s?__biz=MjM5OTI2MTQ3OA==&mid=2652190221&idx=2&sn=eb26a6264d1a4f7e4473249547aaefd1&chksm=bcdfb2448ba83b5275e969e9b9fe9a2668f94eb59d7bf70c89520893a7acd04bb94826a9131b&scene=27
插件通常用来为 Vue 添加全局功能。

插件的功能范围没有严格的限制——一般有下面几种：

添加全局方法或者 property。如：vue-custom-element
添加全局资源：指令/过滤器/过渡等。如 vue-touch
通过全局混入来添加一些组件选项。如 vue-router
添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router
export default {
  install(Vue){
      //全局过滤器,只保留value的前三位
      Vue.filter('defineSlice',function (value) {
          return value.slice(0,3)
      })

      //定义全局指令,在bind指令所实现的内容基础上,增加自动获取焦点的功能
      Vue.directive('definebind',{
          //指令与元素成功绑定时（一上来）
          bind(element,binding){
              element.value = binding.value
          },
          //指令所在元素被插入页面时
          inserted(element,binding){
              element.focus()
          },
          //指令所在的模板被重新解析时
          update(element,binding){
              element.value = binding.value
          }
      })

      //定义混入
      Vue.mixin({
          data(){
              return {
                  province:"hubei",
                  city:"wuhan"
              }
          }
      })

      //给Vue原型上添加一个方法(vm和vc就都能用了)
      Vue.prototype.hello_world = ()=>{alert('你好，世界！')}
  }
}


全局引入 Sass 变量【Vue小知识】 👌👌hao
https://www.bilibili.com/video/BV1o14y1x7zL/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

有关于前端框架原理的面试问题汇总 很不错
https://juejin.cn/post/7207637337572196407

Vue中$attrs、$listeners的使用
https://juejin.cn/post/7155013276890300430

Vue 项目优化技巧 https://juejin.cn/post/6844904165718622215
一. Vue 批量注册全局组件
1.在全局组件 components 文件夹下新增 global.js 文件 该文件为全局组件配置文件，文件内容如下：
2.在main.js全局引入该global.js
二. Vue 主路由优化
1.在项目 router 文件夹下面新增 home.router.js 和 login.router.js 进行分区
2.在 router 文件夹的主路由文件夹中批量引入分区路由
三. Vue-Cli 3 引入 SCSS 全局变量
1.首先创建一个全局变量文件 global.scss
2.配置 vue.config.js
四. vue-cli2 打包开启 gzip 压缩
1.安装打包插件：compression-webpack-plugin
2.安装好之后，修改 config 文件夹下的 index.js 配置文件
3. 添加css文件压缩配置
4.运行 npm run build 进行打包
5.最后一步，上传到服务器之后，nginx 需要进行配置，配置文件如下
五. vue-cli3 打包开启 gzip 压缩
1.安装打包插件：compression-webpack-plugin
2.修改 vue.config.js 配置
3.运行 npm run build 进行打包
4.同上修改 nginx 服务器配置，就可以愉快地访问啦～

模板引擎调试
大多数时候，在template上面写一些逻辑非常难调试，都是直接看效果的，对于一些值来说，变得无法掌控，所以说在开发环境中，
我都会在原型上挂一个全局的console.log方法进行调试。
vue.prototype.$logs = window.console.log;
// 使用
<template>
	{{$logs('1111')}}
</template>
作者：wangly19
链接：https://juejin.cn/post/6859775573837742087

Vue 使用中的小技巧
https://juejin.cn/post/6844903598409646088

获取一个div的高度
https://juejin.cn/post/7202870410304438309
无内联样式
<div ref="datailForm" > </div>

//宽度
this.$refs.datailForm.$el.clientWidth;

//高度
this.$refs.datailForm.$el.clientHeight;

Vue.js实现大屏数字滚动翻转效果
https://juejin.cn/post/6860882844533653517

面试官问我按钮级别权限怎么控制，我说v-if，面试官说再见
https://juejin.cn/post/7209648356530896953   


【vue】项目环境变量配置及其思考   
https://juejin.cn/post/7292958028307251215?utm_source=gold_browser_extension


