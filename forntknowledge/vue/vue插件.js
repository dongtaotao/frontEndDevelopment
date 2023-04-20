vue自定义插件
https://www.cnblogs.com/vant-xie/p/16785056.html
自定义插件的用法
a)插件通常会为 Vue 添加全局功能，一般是添加全局方法/全局指令/过滤器等
b)Vue 插件有一个公开方法 install ，通过 install 方法给 Vue 添加全局功能
c)通过全局方法 Vue.use() 使用插件，它需要在你调用 new Vue() 启动应用之前完成

自定义插件的
//第一种：对象插件
export default{
    /**
     * 对象插件需要暴露一个install方法，
     * @param {*} Vue：Vue 构造器
     * @param {*} options：传入的参数，可选
     */
    install(Vue, options) {
        console.log('执行插件install函数', options)
        // 1. 添加全局资源
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
            // 逻辑...
            }
        })
 
        // 2. 注入组件选项
        Vue.mixin({
            created: function () {
            // 逻辑...
            }
        })
 
        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('插件添加的方法')
        }
    }
}
----------------------------------------------------------------------------------------------------------
//第二种：函数插件（vue会将函数当成install函数来执行）
export default function(Vue, options) {
    console.log('执行插件install函数', options)
   // 1.添加指令 
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
        // 逻辑...
        }
    })

    // 2. 注入组件选项
    Vue.mixin({
        created: function () {
        // 逻辑...
        }
    })

    // 3. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        console.log('插件添加的方法')
    }
}


引入插件并使用

// 引入插件
import MyPlugin from './MyPlugin'
// 使用插件，第二个参数为传入的变量，可选
Vue.use(MyPlugin, {name: 'liang'})

vue 自定义插件
https://blog.csdn.net/weixin_43294560/article/details/104643340

写给小白的 Vue 插件篇 很不错
https://juejin.cn/post/7208046833330143292 

vite+vue3+ts项目中使用eslint+prettier+StyleLint+husky规范代码
https://juejin.cn/post/7222460499493584955?