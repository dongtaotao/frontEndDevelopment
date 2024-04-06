vue3怎么定义全局变量，vue2可以挂在Vue.prototype

在Vue 3中，定义全局变量和Vue 2有一些不同。Vue 2中常用的方式是通过Vue.prototype添加全局变量，但在Vue 3中，
你可以使用app.config.globalProperties来实现类似的功能。
下面是在Vue 3中定义全局变量的步骤：

1.创建一个Vue实例或应用程序实例：首先，你需要创建一个Vue 3应用程序实例或Vue实例。这通常是在入口文件（如main.js）中完成的。

   import { createApp } from 'vue';
   import App from './App.vue';

   const app = createApp(App);

或者，如果你只是在一个组件中使用全局变量，你可以在组件中使用getCurrentInstance函数获取当前实例。

2.定义全局变量：使用app.config.globalProperties来定义全局变量。你可以在Vue 3应用程序实例或Vue实例上添加需要的全局属性或方法。

   app.config.globalProperties.$myGlobalVar = 'This is a global variable';
   app.config.globalProperties.myGlobalFunction = () => {
     console.log('This is a global function');
   };

或者，在组件中使用getCurrentInstance：
   import { ref, getCurrentInstance } from 'vue';

   export default {
     setup() {
       const instance = getCurrentInstance();
       instance.appContext.config.globalProperties.$myGlobalVar = 'This is a global variable';

       return {
         // ...
       };
     },
   };


3.使用全局变量：一旦定义了全局变量，你可以在整个应用程序中的任何组件中访问它。

   // 在组件中访问全局变量
   export default {
     setup() {
       const myVar = app.config.globalProperties.$myGlobalVar;
       app.config.globalProperties.myGlobalFunction();

       return {
         myVar,
       };
     },
   }; 

这是在Vue 3中定义和使用全局变量的一种方法。记住，全局变量可能会导致命名冲突，因此请谨慎使用，以确保不会与其他全局变量发生冲突。


【我是哈默】Vue3中如何使用全局过滤器【Vue小知识】
https://www.bilibili.com/video/BV1qG4y1z7Qg/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


vite + vue3 关于项目性能优化 
https://juejin.cn/post/7306329426282348582?utm_source=gold_browser_extension


Nexus私有库发包流程  
https://juejin.cn/post/7306584260421615631?utm_source=gold_browser_extension

