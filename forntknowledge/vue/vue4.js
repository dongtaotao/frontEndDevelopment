v-for 中的 ref
https://juejin.cn/post/7098575243240800286
{/* <div v-for="item in list" :ref="setItemRef"></div> */}
export default {
    data() {
      return {
        itemRefs: []
      }
    },
    methods: {
      setItemRef(el) {
        if (el) {
          this.itemRefs.push(el)
        }
      }
    },
    beforeUpdate() {
      this.itemRefs = []
    },
    updated() {
      console.log(this.itemRefs)
    }
  }


关于Vue和React的一些对比及个人思考（中）
https://juejin.cn/post/6844904052812169229


Vue移动端 / PC端适配解决方案：postcss-px-to-viewport
https://juejin.cn/post/7018433228591595550
vue 自适应 PC端 移动端 postcss-px-to-viewport
https://juejin.cn/post/6850418113209925640
postcss-px-to-viewport 移动端适配方案
https://juejin.cn/post/6993150332700196877

"postcss": {
  "plugins": {
    "postcss-import": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      "viewportWidth": 375,
      "viewportHeight": 667,
      "unitPrecision": "2",
      "viewportUnit": "vw",
      "selectorBlackList": [
        ".hairlines"
      ],
      "minPixelValue": 1,
      "mediaQuery": false
    },
    "cssnano": {
      "autoprefixer": false,
      "postcss-zindex": false
    }
  }
},

Vue中 $attrs、$listeners 详解    props和方法透传
https://juejin.cn/post/6996483214629928967

如何使用addRoute来动态添加路由？【Vue】
https://www.bilibili.com/video/BV16t4y1S7Eh/?spm_id_from=333.788.recommend_more_video.2&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

【Vue进阶】——如何实现组件属性透传？
https://juejin.cn/post/6865451649817640968

一个合格的中级前端工程师应该掌握的 20 个 Vue 技巧
https://juejin.cn/post/6872128694639394830


vue 引入 iconfont
https://juejin.cn/search?query=vue%20%E5%BC%95%E5%85%A5%20iconfont

Vue 引入 iconfont 的项目实践
https://juejin.cn/post/7004445790202495006

吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《上》   🔥
https://juejin.cn/post/6844904034663399437
吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《中》
https://juejin.cn/post/6844903972050829320
吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《下》
https://juejin.cn/post/6844904087046062087


如何将当前组件的所有属性快速传递给子组件？【Vue小知识】
https://www.bilibili.com/video/BV1RP4y1n7XU/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


vue动态组件怎么动态绑定一个或多个v-bind属性
http://www.zuo11.com/blog/2020/8/component_vbind.html

vue中$attrs 和 $listeners 的使用场景http://www.zuo11.com/blog/2020/8/vue_attrs_listeners.html

使用.sync修饰符【Vue小技巧】https://www.bilibili.com/video/BV1mU4y1g74Y/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

认识Vue.use()和install方法【Vue小知识】
https://www.bilibili.com/video/BV1FS4y1d7q9/?spm_id_from=333.788.recommend_more_video.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

 
【前端开发】Vue『UI组件库』开发实践  🔥
https://www.bilibili.com/video/BV1pb4y1n7J7/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

使用路由元信息控制路由访问权限【Vue】
https://www.bilibili.com/video/BV1LT4y1w7v7/?spm_id_from=333.788.recommend_more_video.-1&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

.Sync的作用是什么？
vue 修饰符 sync 的功能是：当父组件提供了一个数据，而子组件想要去更改这个数据，但是 Vue 的规则不能让子组件去修改父组件的数据，就需要通过 this.$emit 和 $event，来实现数据修改的目的。
:money.sync="total" 
// 等价于 
:money="total" v-on:update:money="total = $event"

链接：https://juejin.cn/post/7064368176846340132

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


Vue中如何扩展一个组件
答题思路：
按照逻辑扩展和内容扩展来列举，
逻辑扩展有：mixins、extends、composition api；
内容扩展有slots；

分别说出他们使用方法、场景差异和问题。
作为扩展，还可以说说vue3中新引入的composition api带来的变化
链接：https://juejin.cn/post/7097067108663558151


从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织
回答范例
从0创建一个项目我大致会做以下事情：项目构建、引入必要插件、代码规范、提交规范、常用库和组件
目前vue3项目我会用vite或者create-vue创建项目
接下来引入必要插件：路由插件vue-router、状态管理vuex/pinia、ui库我比较喜欢element-plus和antd-vue、http工具我会选axios
其他比较常用的库有vueuse，nprogress，图标可以使用vite-svg-loader
下面是代码规范：结合prettier和eslint即可
最后是提交规范，可以使用husky，lint-staged，commitlint
目录结构我有如下习惯：
.vscode：用来放项目中的 vscode 配置
plugins：用来放 vite 插件的 plugin 配置
public：用来放一些诸如 页头icon 之类的公共文件，会被打包到dist根目录下
src：用来放项目代码文件
api：用来放http的一些接口配置
assets：用来放一些 CSS 之类的静态资源
components：用来放项目通用组件
layout：用来放项目的布局
router：用来放项目的路由配置
store：用来放状态管理Pinia的配置
utils：用来放项目中的工具方法类
views：用来放项目的页面文件

链接：https://juejin.cn/post/7097067108663558151

vue插件开发、文档书写、github发布、npm包发布一波流 https://juejin.cn/post/6844903679162581005


从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织 https://juejin.cn/post/7177543159080026167
综合实践类题目，考查实战能力。没有什么绝对的正确答案，把平时工作的重点有条理的描述一下即可
思路

构建项目，创建项目基本结构
引入必要的插件：
代码规范：prettier，eslint
提交规范：husky，lint-staged`
其他常用：svg-loader，vueuse，nprogress
常见目录结构

回答范例

从0创建一个项目我大致会做以下事情：项目构建、引入必要插件、代码规范、提交规范、常用库和组件
目前vue3项目我会用vite或者create-vue创建项目
接下来引入必要插件：路由插件vue-router、状态管理vuex/pinia、ui库我比较喜欢element-plus和antd-vue、http工具我会选axios
其他比较常用的库有vueuse，nprogress，图标可以使用vite-svg-loader
下面是代码规范：结合prettier和eslint即可
最后是提交规范，可以使用husky，lint-staged，commitlint
目录结构我有如下习惯： .vscode：用来放项目中的 vscode 配置


plugins：用来放 vite 插件的 plugin 配置
public：用来放一些诸如 页头icon 之类的公共文件，会被打包到dist根目录下
src：用来放项目代码文件
api：用来放http的一些接口配置
assets：用来放一些 CSS 之类的静态资源
components：用来放项目通用组件
layout：用来放项目的布局
router：用来放项目的路由配置
store：用来放状态管理Pinia的配置
utils：用来放项目中的工具方法类
views：用来放项目的页面文件

如何从真实DOM到虚拟DOM
涉及到Vue中的模板编译原理，主要过程：

将模板转换成 ast 树， ast 用对象来描述真实的JS语法（将真实DOM转换成虚拟DOM）
优化树
将 ast 树生成代码
链接：https://juejin.cn/post/7177543159080026167


Vue中修饰符.sync与v-model的区别  https://juejin.cn/post/7176081352104607803
sync的作用

.sync修饰符可以实现父子组件之间的双向绑定，并且可以实现子组件同步修改父组件的值，相比较与v-model来说,sync修饰符就简单很多了
一个组件上可以有多个.sync修饰符
<!-- 正常父传子 -->
<Son :a="num" :b="num2" />

<!-- 加上sync之后的父传子 -->
<Son :a.sync="num" :b.sync="num2" />

<!-- 它等价于 -->
<Son 
  :a="num" 
  :b="num2" 
  @update:a="val=>num=val" 
  @update:b="val=>num2=val" 
/>

<!-- 相当于多了一个事件监听，事件名是update:a, -->
<!-- 回调函数中，会把接收到的值赋值给属性绑定的数据项中。 -->