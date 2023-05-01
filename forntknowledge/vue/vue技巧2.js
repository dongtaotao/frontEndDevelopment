1.使用 async-computed 插件解决异步计算属性的问题。
import AsyncComputed from 'vue-async-computed'

 Vue项目处理错误上报原来如此简单 
https://juejin.cn/post/7143144999515865118

vue refs操作、操作dom、区别
Vue 的 ref 操作和操作 DOM 的区别在于，ref 操作更加简单、直观，且不需要手动操作 DOM 节点。
Vue 的 refs 可以用来获取组件或元素的引用，例如通过 $refs 访问组件实例或者访问 DOM 元素。与传统 DOM 操作方式不同，使用 refs 可以直接访问到
对应组件或元素的属性和方法，而无需再从 DOM 中进行查找。
同时，Vue 提供了一些辅助函数（如 this.$nextTick()），方便开发者在组件、DOM 更新后执行相应的逻辑。
相比之下，操作 DOM 则需要手动获取 DOM 元素，再通过原生 JS 方法或 jQuery 等框架的方法进行操作。在进行 DOM 操作的过程中，需要注意避免使用
嵌套循环、频繁调用操作 DOM 的 API 等会导致性能问题的操作。

参考资料：

[1]Vue.js 官方文档 - Refs

[2]Vue2.x 入门系列（2） Vue中的模板渲染机制

[3]MDN 文档 - 操作文档



玩转组件库搭建全流程
https://www.imooc.com/learn/1316

第1章 课程介绍
本章节主要介绍课程目标，课程大纲，相关知识点及学习建议。
1-1 课程介绍 (11:39)
第2章 从搭建一个vue项目开始
2-1 用脚手架生成 vue 项目 1 (04:55)
2-2 用脚手架生成 vue 项目 2 (17:10)
第3章 一个卡片组件的诞生
视频：
3-1 设计组件 (06:27)
3-2 编写html结构和样式代码 (15:18)
3-3 编写逻辑代码 (03:50)
3-4 测试组件 (07:04)
第4章 打包你的组件库
本章节主要介绍前端模块化的演进(amd、commonjs、umd)、如何用webpack打包组件库的js代码、以及如何用gulp打包样式代码。
4-1 前端模块化 (07:01)
4-2 webpack打包js为umd模块1 (04:45)
4-3 webpack打包js为umd模块2 (17:13)
4-4 gulp打包css (08:42)
第5章 发布你的组件库
本章节主要介绍如何发布组件库到 npm 上。
5-1 发布到npm (11:01)
视频：
5-2 测试发布后的组件库 (03:34)
第6章 搭建组件库文档站点
本章节主要介绍如何用 vuepress 搭建一个文档站点、卡片组件文档的编写、以及如何把文档站点打包并部署到 githut.io 上。
6-1 关于vuepress (06:20)
6-2 初始化组件库文档结构 (11:01)
6-3 编写卡片组件文档 (09:36)
6-4 在github上创建个人站点 (05:02)
6-5 将文档站点部署到github.io (12:02)
第7章 课程回顾与总结
7-1 课程回顾和总结 (03:30)


让你的Vue代码 “学会” 自动按需引入
https://juejin.cn/post/7062648728405934087

这不，最近学习到了几个全新的插件，整理成文分享出来。

你是否厌烦了每次使用 vue 时，需要额外的 import vue 的 api
你是否厌烦了每次使用 组件库 时，需要额外的 按需引入 组件
你是否厌烦了有时使用 第三方组件库 时，需要额外的 引入 css 样式
你是否厌烦了每次使用 图标 时，需要额外的 import

现在有几个插件可以帮我们一次性解决这些问题，我们在调用时可以不需要import而直接使用，且最终打包时，只有实际使用过的api和组件才会被build进最终产物
unplugin-auto-import：自动按需引入 vue\vue-router\pinia 等的 api
unplugin-vue-components：自动按需引入 第三方的组件库组件 和 我们自定义的组件
unplugin-icons：可以自动按需引入 所使用的图标，而不用手动 import
vite-plugin-style-import：自动按需引入 我们手动引入的组件的css样式
链接：https://juejin.cn/post/7062648728405934087

17.Vue style scoped
scoped可以让css的样式只在当前组件生效
scoped的原理？
vue-loader构建时会动态给 scoped css 块与相应的 template 标签加上随机哈希串 data-v-xxx
如何实现样式穿透
scoped虽然避免了组件间样式污染，但是很多时候我们需要修改组件中的某个样式，但是又不想去除scoped属性

使用/deep/
使用两个style标签
链接：https://juejin.cn/post/7166446028266733581


2023 最新最细 vite+vue3+ts 多页面项目架构，建议收藏备用！
https://juejin.cn/post/7223286759630127159?
vite + vue3 + ts + esint + prettier + stylelint + husky + lint-stage + commitlint 搭建一套多页面项目。

vue管理系统权限管理（从后端到前端整个流程）
https://juejin.cn/post/7038591120565075975

【css作用域】scoped css和css module的区别
https://juejin.cn/post/7036282734293024799

Vue2 项目中一定要会的性能优化措施
https://juejin.cn/post/7226387497566257212?utm_source=gold_browser_extension
01 性能标准
02 性能检测
2.1 Chrome 性能面板
12.2 Network 瀑布图
2.3 Lighthouse
2.4 webpack 包内容分析
03 优化措施
3.1 路由懒加载
3.2 异步组件
3.3 函数式组件
3.4 Vue 内置指令的使用注意
3.4.1 v-for 须为每一项设置唯一 key 属性
3.4.2 v-for 与 v-if
3.5 Vue 内置 API 的使用注意
3.5.1 区分 computed 和 方法 的使用场景
3.5.2 区分 computed 和 watch 的使用场景
3.6 组件销毁时，需移除手动绑定的事件
3.7 Object.freeze() 优化静态数据
3.8 虚拟滚动技术
3.9 图片懒加载
3.10 生产环境打包禁止生成 Source Map
3.11 生产环境打包移除 console 和 debugger
3.12 分割大块代码
3.13 提取公共代码（Vue CLI 4 无需配置）
3.14 按需引入第三方库
3.14.1 UI 框架组件的按需引入
3.14.2 Moment.js 2.x 的优化
3.14.3 Lodash 4.x 的按需引入
3.14.4 ECharts 5.x 的按需引入
3.15 使用 CDN 提升加载速度
3.16 使用 Gzip 提升加载速度
3.16.1 开启服务端 Gzip 功能
3.16.2 开启静态压缩时，前端打包时需准备好 .gz 文件