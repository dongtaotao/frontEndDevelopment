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

吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《上》   🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 
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
vue 修饰符 sync 的功能是：当父组件提供了一个数据，而子组件想要去更改这个数据，但是 Vue 的规则不能让子组件去修改父组件的数据，
就需要通过 this.$emit 和 $event，来实现数据修改的目的。
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

vue插件开发、文档书写、github发布、npm包发布一波流 https://juejin.cn/post/6844903679162581005m

从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织 https://juejin.cn/post/7177543159080026167
综合实践类题目，考查实战能力。没有什么绝对的正确答案，把平时工作的重点有条理的描述一下即可
思路

构建项目，创建项目基本结构
引入必要的插件：
代码规范：prettier，eslint
提交规范：husky，lint-staged
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

vue项目如何监听窗口变化，达到页面自适应？ https://segmentfault.com/a/1190000016512967
vue+elementUI前端表格excel文件下载
https://www.cnblogs.com/jerome92/p/14042784.html

使用.sync,更优雅的实现数据双向绑定
在Vue中，props属性是单向数据传输的,父级的prop的更新会向下流动到子组件中，但是反过来不行。可是有些情况，我们需要对prop进行“双向绑定”。
上文中，我们提到了使用v-model实
现双向绑定。但有时候我们希望一个组件可以实现多个数据的“双向绑定”，而v-model一个组件只能有一个(Vue3.0可以有多个)，这时候就需要使用到.sync。
.sync与v-model的异同
相同点：

两者的本质都是语法糖，目的都是实现组件与外部数据的双向绑定
两个都是通过属性+事件来实现的

不同点(个人观点，如有不对，麻烦下方评论指出，谢谢)：
一个组件只能定义一个v-model,但可以定义多个.sync
v-model与.sync对于的事件名称不同，v-model默认事件为input,可以通过配置model来修改，.sync事件名称固定为update:属性名
链接：https://juejin.cn/post/6844904191224184840


学习Vue3.0，先从搭建环境开始
https://juejin.cn/post/6864324361621995533

Vue SSR 踩坑之旅
https://juejin.cn/post/6844903824956588040

分享一个实用的 vite + vue3 组件库脚手架工具，提升开发效率
https://juejin.cn/post/7160962892618006558

Vitepress搭建组件库文档（下）—— 组件 Demo
Vue3 企业级优雅实战 - 组件库框架 - 1 搭建 pnpm monorepo
Vue3 企业级优雅实战 - 组件库框架 - 2 初始化 workspace-root
Vue3 企业级优雅实战 - 组件库框架 - 3 搭建组件库开发环境
Vue3 企业级优雅实战 - 组件库框架 - 4 组件库的 CSS 架构
Vue3 企业级优雅实战 - 组件库框架 - 5 组件库通用工具包
Vue3 企业级优雅实战 - 组件库框架 - 6 搭建example环境
Vue3 企业级优雅实战 - 组件库框架 - 7 组件库文档的开发和构建
Vue3 企业级优雅实战 - 组件库框架 - 8 搭建组件库 cli
Vue3 企业级优雅实战 - 组件库框架 - 9 实现组件库 cli - 上
Vue3 企业级优雅实战 - 组件库框架 - 10 实现组件库 cli - 下
Vue3 企业级优雅实战 - 组件库框架 - 11 组件库的打包构建和发布
https://juejin.cn/post/7198066637454803002


VitePress + Github Pages 搭建自己的个人博客
https://juejin.cn/post/7197972831795052599


基于Vue3+Node Koa+WebSocket实现的“宠物收养交流平台”
https://juejin.cn/post/7197714499348037689
相关技术栈🐈

Vue3、vue-router ：搭建前端用户界面，实现SPA单页应用；
Koa ：编写服务端应用程序、后端接口，调度Mysql数据库对用户数据持久化；
axios ：基于 promise 的网络请求库，是前端向后端获取数据的请求工具；
pinia ：更加轻量级的 Vue 存储库；
flexible ：移动端适配解决方案；
vant ：轻量、可靠的移动端组件库；
json web token (JWT) ：token验证登录；
ali-oss ：阿里云OSS对象存储服务；
链接：https://juejin.cn/post/7197714499348037689

一个项目让你熟悉 Vue3 以及相关生态
项目用到的那些技术？
都是都是都是最新的，放心吧，不会让你使用旧技术栈！

Vue 3.2.x：采用 TS + script setup，最新的 Vue3 组合式 API
Element Plus：对 Vue2 时代使用 Element UI 的朋友比较友好
Pinia: 就是 Vuex5
Vite 4.x：真的很快（别再说 Vite 不稳定了）
Vue Router 4.x：还是它，没得选
TypeScript：Vue3 时代请全面拥抱 TS（别再找借口说 TS 降低你的开发效率了）
PNPM：更快速，节省磁盘空间的包管理工具（你也不希望每次删除 node_modules 都很慢吧？）
Scss：相信大家都比较熟悉了吧？
CSS 变量：CSS 本身就有的功能，挺好用，主要控制项目的布局和颜色
ESlint：代码校验（已经配置好了，放心不会和 Prettier 冲突的）
Prettier：代码格式化（已经配置好了，放心不会和 ESlint 冲突的）
Axios：发送网络请求（已经封装好了）
UnoCSS：如果你体验原子化 CSS 引擎的话
链接：https://juejin.cn/post/7197681585977704508


让你写一个vue框架 该如何写 https://juejin.cn/post/7196859331696934967
第一步 首先要分析vue是一个mvvm 的思想 m是数据模型 v视图模型 
vm 监听数据的变化 然后通知视图更新
第二步 我们要创建一个vue的类 并且是单例模型 全局有且只有一个子类
第三步 我们要对data中的数据进行代理 监听数据属性的变化 会用到object.defineProperty 将他们转化为getter setter方法
第四步 我们实现一个compile类 实现模版编译  首先获取所有子节点 遍历节点  如果是元素节点 就解析指令。如果是文本节点 就是替换花括号内容  如果还在存在子节点 继续递归判断
第五步 我们要实现一个watcher类 观察者 当他观察的数据发生变化时 需要去更新视图
第六步 还需要一个订阅者dep 订阅数据 当数据发生 通知观察者更新视图。

.watch 与 watchEffect
watch 作用是对传入的某个或多个值的变化进行监听；触发时会返回新值和老值；也就是说第一次不会执行，只有变化时才会重新执行
watchEffect 是传入一个立即执行函数，所以默认第一次也会执行一次；不需要传入监听内容，会自动收集函数内的数据源作为依赖，在依赖变化的时候又会重新执行该函数，
如果没有依赖就不会执行；而且不会返回变化前后的新值和老值
watch加Immediate也可以立即执行
链接：https://juejin.cn/post/7166446028266733581

NextTick

$nextTick 可以让我们在下次 DOM 更新结束之后执行回调，用于获得更新后的 DOM；
使用场景在于响应式数据变化后想获取DOM更新后的情况；

NextTick 的原理

$nextTick 本质是对事件循环原理的一种应用，它主要使用了宏任务和微任务，采用微任务优先的方式去执行 nextTick 包装的方法；
并且根据不同环境，为了兼容性做了很多降级处理：
2.6版本中的降级处理：Promise > MutationObserver > setImmediate > setTimeout

因为 Vue是异步更新的，NextTick 就在更新DOM的微任务队列后追加了我们自己的回调函数
作者：菜猫子neko
链接：https://juejin.cn/post/7166446028266733581


「2022」寒冬下我的面试知识点复盘【Vue3、Vue2、Vite】篇
https://juejin.cn/post/7166446028266733581#heading-5


2022年我的面试万字总结（Vue3+TS）
https://juejin.cn/post/7160962909332307981

如何从0开始搭建 Vue 组件库https://juejin.cn/post/7200552990737367097?

VUEX实现https://juejin.cn/post/7064835127456563207?

Vite+TypeScript从零搭建Vue3组件库 🔥🔥🔥
https://juejin.cn/column/7118932817119019015

什么是插槽？具名插槽？作用域插槽？原理是什么？

slot 又名插槽，是 Vue 的内容分发机制，插槽 slot 是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。slot 又分三类，
默认插槽，具名插槽和作用域插槽。

默认插槽：又名匿名插槽，当 slot 没有指定 name 属性值的时候，默认显示的插槽，一个组件内只允许有一个匿名插槽。
具名插槽：带有具体名字的插槽，也就是带有 name 属性的 slot，一个组件可以出现多个具名插槽。
作用域插槽：可以是匿名插槽，也可以是具名插槽，该插槽在渲染时，父组件可以使用子组件内部的数据。

实现原理：当子组件 vm 实例化时，获取到父组件传入的 slot 标签的内容，存放在 vm.$slot 中，默认插槽为 vm.$slot.default，
具名插槽为 vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到 slot 标签，使用 $slot 中的内容进行替换，
此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。


assets和static的区别
 
相同点： assets 和 static 两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点
不相同点： assets 中存放的静态资源文件在项目打包时，也就是运行 npm run build 时会将 assets 中放置的静态资源文件进行打包上传，
所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在 static 文件中跟着 index.html 一同上传至服务器。
static 中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，
在打包时会提高一定的效率，但是 static 中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于 assets 中打包后的文件提交较大点。在服务器中就会占据更大的空间。
建议： 将项目中 template需要的样式文件js文件等都可以放置在 assets 中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css
 等文件可以放置在 static 中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。
作者：一尾流莺
链接：https://juejin.cn/post/7064368176846340132

拆解：从0-1用webpack创建工程项目https://juejin.cn/post/7200396667505836069

关于首屏优化，我做了哪些
https://juejin.cn/post/7117515006714839047

vue3从零开始学习
https://juejin.cn/column/7047339332159406093

watchEffect如果监听reactive定义的对象是不起作用的，只能监听对象中的属性
https://juejin.cn/post/7205489514361356345

前端组件库的开发与维护 🔥🔥🔥
组件库从开发到维护全链路讲解（一）基础框架
https://juejin.cn/post/7189065824504643621
组件库从开发到维护全链路讲解（二）日历组件的核心逻辑与设计
组件库从开发到维护全链路讲解（三）小型组件换肤的最佳实践
组件库从开发到维护全链路讲解（四）覆盖单元测试的最佳实践
组件库从开发到维护全链路讲解（五）如何优雅的提交代码——规范化
组件库从开发到维护全链路讲解（六）自动且高效的生成changelog
组件库从开发到维护全链路讲解（七）搭建美观且实用的文档站点｜细节满满


记一次用webpack搭建vue项目
https://juejin.cn/post/6844904183150149639   