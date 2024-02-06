3.10 v-slot
2.6.0 新增
1.slot,slot-cope,scope 在 2.6.0 中都被废弃,但未被移除
2.作用就是将父组件的 template 传入子组件
3.插槽分类:
A.匿名插槽(也叫默认插槽): 没有命名,有且只有一个;
javascript复制代码// 父组件
<todo-list> 
    <template v-slot:default>
       任意内容
       <p>我是匿名插槽 </p>
    </template>
</todo-list> 

// 子组件
<slot>我是默认值</slot>
//v-slot:default写上感觉和具名写法比较统一,容易理解,也可以不用写

B.具名插槽: 相对匿名插槽组件slot标签带name命名的;
javascript复制代码// 父组件
<todo-list> 
    <template v-slot:todo>
       任意内容
       <p>我是匿名插槽 </p>
    </template>
</todo-list> 

//子组件
<slot name="todo">我是默认值</slot>

C.作用域插槽: 子组件内数据可以被父页面拿到(解决了数据只能从父页面传递给子组件)
javascript复制代码// 父组件
<todo-list>
 <template v-slot:todo="slotProps" >
   {{slotProps.user.firstName}}
 </template> 
</todo-list> 
//slotProps 可以随意命名
//slotProps 接取的是子组件标签slot上属性数据的集合所有v-bind:user="user"

// 子组件
<slot name="todo" :user="user" :test="test">
    {{ user.lastName }}
 </slot> 
data() {
    return {
      user:{
        lastName:"Zhang",
        firstName:"yue"
      },
      test:[1,2,3,4]
    }
  },
// {{ user.lastName }}是默认数据  v-slot:todo 当父页面没有(="slotProps")
链接：https://juejin.cn/post/6844903959266590728


5 属性事件传递
写过高阶组件的童鞋可能都会碰到过将加工过的属性向下传递的情况，如果碰到属性较多时，需要一个个去传递，非常不友好并且费时，有没有一次性传递的呢（比如react里面的{...this.props}）？答案就是v-bind和v-on。
举个例子，假如有一个基础组件BaseList，只有基础的列表展示功能，现在我们想在这基础上增加排序功能，这个时候我们就可以创建一个高阶组件SortList。
js复制代码<!-- SortList  -->
<template>
  <BaseList v-bind="$props" v-on="$listeners"> <!-- ... --> </BaseList>
</template>

<script>
  import BaseList from "./BaseList";
  // 包含了基础的属性定义
  import BaseListMixin from "./BaseListMixin";
  // 封装了排序的逻辑
  import sort from "./sort.js";

  export default {
    props: BaseListMixin.props,
    components: {
      BaseList
    }
  };
</script>

可以看到传递属性和事件的方便性，而不用一个个去传递
链接：https://juejin.cn/post/6844903848050589704

7个有用的Vue开发技巧
https://juejin.cn/post/6844903848050589704

重用相同路由的组件
开发人员经常遇到的情况是，多个路由解析为同一个Vue组件。问题是，Vue出于性能原因，默认情况下共享组件将不会重新渲染，如果你尝试在使用相同组件的路由之间进行切换，则不会发生任何变化。
ini复制代码const routes = [
  {
    path: "/a",
    component: MyComponent
  },
  {
    path: "/b",
    component: MyComponent
  },
];
如果你仍然希望重新渲染这些组件，则可以通过在 router-view 组件中提供 :key 属性来实现。
ruby复制代码<template>
	<router-view :key="$route.path"></router-view>
</template>
链接：https://juejin.cn/post/6844904120499830792


把所有Props传到子组件很容易
这是一个非常酷的功能，可让你将所有 props 从父组件传递到子组件。如果你有另一个组件的包装组件，这将特别方便。所以，与其把所有的 props 一个一个传下去，你可以利用这个，把所有的 props 一次传下去：
xml复制代码<template>
  <childComponent v-bind="$props" />
</template>
代替：
ruby复制代码<template>
  <childComponent :prop1="prop1" :prop2="prop2" :prop="prop3" :prop4="prop4" ... />
</template>

把所有事件监听传到子组件很容易
如果子组件不在父组件的根目录下，则可以将所有事件侦听器从父组件传递到子组件，如下所示：
xml复制代码<template>
	<div>
    ...
		<childComponentv-on="$listeners" />...	
  <div>
</template>
如果子组件位于其父组件的根目录，则默认情况下它将获得这些组件，因此不需要使用这个小技巧。

链接：https://juejin.cn/post/6844904120499830792

10个Vue开发技巧助力成为更好的工程师(二)
https://juejin.cn/post/6854573214371151886


列表渲染相关
v-for循环绑定model:
https://juejin.cn/post/6844903616101220365
// 数据    
  data() {
      return{
        obj: {
          ob: "OB",
          koro1: "Koro1"
        },
        model: {
          ob: "默认ob",
          koro1: "默认koro1"
        }   
      }
  },
// html模板
<div v-for="(value,key) in obj">
    <input type="text" v-model="model[key]">
</div>
// input就跟数据绑定在一起了，那两个默认数据也会在input中显示


Vue 实用开发技巧
https://juejin.cn/post/6844904121368051725
目录
1. 长列表性能优化
2. Vue组件渲染性能分析
开启Vue性能模式(适用于开发模式)
验证性能
3. 不使用Vuex创建Store(Vue.observable)
4. 属性&事件传递
5. 监听函数的生命周期函数
6. 函数式组件
7. 作用域插槽
简单示例
v-slot 高级使用
8. watch
9. 图片懒加载
10. .sync 修饰符
注意
11. provide / inject
12. 调试 Vue template
13. Vue组件局部样式 scoped
14. Vue组件样式之 deep选择器
15. Vue组件局部样式 Modules
用法
可选用法
和预处理器配合使用
自定义的注入名称
16. 始终验证Props
17. 自定义v-model
18. 动态指令参数


require.context()
require.context(directory,useSubdirectories,regExp)

directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式,一般是文件名
场景:如页面需要导入多个组件,原始写法:
js复制代码import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
components: {
  titleCom, bannerCom, cellCom
}

这样就写了大量重复的代码,利用 require.context 可以写成
js复制代码const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components: modules

链接：https://juejin.cn/post/6844904080960126989

基于VUE自定义指令实现按钮级权限控制
https://juejin.cn/post/6844903609151258631
手摸手，带你用vue撸后台 系列二(登录权限篇)
https://juejin.cn/post/6844903478880370701


全局样式======================================
全局样式 目录：@/styles
variable.scss: 全局变量管理
mixins.scss: 全局 Mixins 管理
global.scss: 全局样式
其中 variable.scss 和 mixins.scss 会优先于 global.css 加载，并且可以不通过 import 的方式在项目中任何位置使用这些变量和 mixins。
js复制代码// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/mixins.scss';
        `,
      },
    },
  },
}

体验优化
页面载入进度条
使用 nprogress 对路由跳转时做一个伪进度条，这样做在网络不好的情况下可以让用户知道页面已经在加载了：
js复制代码import NProgress from 'nprogress';

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

美化滚动条

静态资源加载页面
首次加载页面时，会产生大量的白屏时间，这时做一个 loading 效果看起来会很友好，其实很简单，直接在 public/index.html 里写一些静态的样式即可。

移动端 100vh 问题
在移动端使用 100vh 时，发现在 Chrome、Safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现：
你以为的 100vh === 视口高度
实际上 100vh === 视口高度 + 浏览器工具栏（地址栏等等）的高度
解决方案
安装 vh-check npm install vh-check --save
js复制代码import vhCheck from 'vh-check';
vhCheck('browser-address-bar');

定义一个 CSS Mixin
scss复制代码@mixin vh($height: 100vh) {
  height: $height;
  height: calc(#{$height} - var(--browser-address-bar, 0px));
}

之后就是哪里不会点哪里
链接：https://juejin.cn/post/6901466994478940168


父子组件间通过事件通信
https://juejin.cn/post/7237828040280375352?utm_source=gold_browser_extension
const app = Vue.createApp({
    data() {
        return {
            count: 1,
            text: 'hello world'
        }
    },
    methods:{
        handleAdd(newCount) {
            this.count = newCount
        }
    },
    template:`
    <div>
        <input v-model="text"/>
        <counter :count="count" @add="handleAdd"/>
    </div>
    `
})
app.component('counter',{
    props:["count"],
    emits:["add"],
    methods:{
        handleClick() {
            this.$emit('add',this.count + 2)
        }
    },
    template:`
      <div @click="handleClick">{{count}}</div>
    `
})
const vm = app.mount('#root')


父组件向子组件传很多值
https://juejin.cn/post/7237424021758918713
const app = Vue.createApp({
  data() {
      return {
          num: 1234,
          a: 456,
          b: 789,
          c: 666
      }
  },
  template:`
  <div>
     <test :content="num" :a="a" :b="b" :c="c"/>
  </div>
  `
})
app.component('test',{
  props:['content','a','b','c'],
  template:`<div>{{content}} -- {{a}}-- {{b}}-- {{c}}</div>`
})
const vm = app.mount('#root')


const app = Vue.createApp({
  data() {
      return {
          params:{
              content: 1234,
              a: 456,
              b: 789,
              c: 666
          }  
      }
  },
  template:`
  <div>
     <test v-bind="params"/>
  </div>
  `
})
app.component('test',{
  props:['content','a','b','c'],
  template:`<div>{{content}} -- {{a}}-- {{b}}-- {{c}}</div>`
})
const vm = app.mount('#root')


Vue和React权限控制的那些事
https://juejin.cn/post/7242677017034915899?utm_source=gold_browser_extension


如何将组件所有的props传递给子组件
$props
<children v-bind="$props"/>


题目25. Vue2，Vue3，React的diff算法有什么区别
答：传统的diff算法是遍历全部dom树来找到不同，时间复杂度为O(n^3),是不可用算法，vue和react都对diff算法做了优化，只进行同层比较，不进行跨级比较，
tag不同时删掉重建，子节点通过key区分,使得时间复杂度降到了O(n)。 
Vue2，采用了双端比较法
Vue3，采用了最长递增子序列比较
React，采用了仅右移比较
无论是哪种比较，它们有一个共同的目的，就是尽量减少DOM操作，能不动就不动，能移动DOM就不删除重建DOM
链接：https://juejin.cn/post/7240817505710112829 


Vue项目处理错误上报原来如此简单 
https://juejin.cn/post/7143144999515865118    