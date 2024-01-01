最新整理的25道前端面试真题（含答案与解析） ****************** 
https://juejin.cn/post/6899291168891207688 

收起
1.如何获取 html 元素实际的样式值？
代码实现
2.说一下对 React Hook 的理解，它的实现原理，和生命周期有哪些区别？
一、React Hook
1.1 什么是 React Hook
1.2.React Hook 要解决什么问题
1.3 实现原理
二、和生命周期的区别
3.移动端适配方案具体实现以及对比
常见的移动端适配方案
一、Meida Queries
二、Flex 弹性布局
三、rem+viewport 缩放
四、rem 实现
五、纯 vw 方案
六、vw + rem 方案
七、百分比
4.var arr =[[‘A’,’B’],[‘a’,’b’],[1,2]] 求二维数组的全排列组合 结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2
参考代码实现
5.说下工作流程（开发流程、代码规范、打包流程等）
一、拿到原型图，先自我解析需求，画出思维导图，流程图
二、产品召集项目相关人员，开需求讨论会，产品讲解原型
三、会后进一步整理需求
四、需求二次确认（开发中遇到不确定的，依旧需要找相关人员进行需求确认，杜绝做无用功）
五、开发
六、自测
七、提测---测试人员测试
八、上线
九、维护
6.Vue 中父组件可以监听到子组件的生命周期吗？
实现方式
一、使用 on 和 emit
二、使用 hook 钩子函数
7.怎么给 Vue 定义全局方法
实现方式
一、将方法挂载到 Vue.prototype 上面
二、利用全局混入mixin
三、使用Plugin方式
四、任意 vue 文件中写全局函数
8.说一下 vm.$set 原理
vm.$set()解决了什么问题
原理
源码位置: vue/src/core/instance/index.js
总结
9.深拷贝如何解决循环引用？
循环引用问题
循环应用问题解决
10.单元测试如何测试？代码覆盖率如何？
一、为什么要单元测试？
二、怎么测？
2.1 要写些什么样的测试？
2.2 不要写什么样的测试？
三、测试框架和周边配套
四、测试覆盖/效率报告
11.说说 React 状态逻辑复用问题
React 状态逻辑复用
一、Mixins
二、Higher - Order Components
三、Render Props
四、Hooks
12.组件库设计有什么原则？
组件库设计原则
1.1 标准性
1.2 独立性
1.3 复用与易用
1.4 适用SPOT法则
1.5 避免暴露组件内部实现
1.6 避免直接操作DOM，避免使用ref
1.7 入口处检查参数的有效性，出口处检查返回的正确性
1.8 无环依赖原则(ADP)
1.9 稳定抽象原则(SAP)
1.10 避免冗余状态
1.11合理的依赖关系
1.12 扁平化参数
1.13 良好的接口设计
1.14 API尽量和已知概念保持一致
13.写出代码输出值，并说明原因
答案
参考分析
14.把 10 万次 for 循环的代码插到 html 中间，会有什么现象？出现卡顿现象怎么解决？添加 defer 属性之后脚本会在什么时候执行？采用 defer 之后，用户点击页面会怎么样？如果禁用 WebWoker，还有其他方法吗？
一、十万次循环代码插入 body 中，页面会出现卡顿
二、解决
三、采用 defer 之后，用户点击问题
四、如果禁用 WebWoker，还有其他方法吗？
4.1 使用 Concurrent.Thread.js
4.2 使用虚拟列表
15.有 100 瓶水，其中有一瓶有毒，小白鼠只要尝一点带毒的水 3 天后就会死亡，至少要多少只小白鼠才能在 3 天内鉴别出哪瓶水有毒？
答案
分析
16.Promise.allSettled 了解吗？手写 Promise.allSettled
Promise.allSettled(iterable)概念
手写实现
17.浏览器为什么要阻止跨域请求？如何解决跨域？每次跨域请求都需要到达服务端吗？
一、什么是跨域
二、哪些网络资源涉及到跨域
三、如何解决跨域
四、关于跨域需要明确的问题
18.浏览器缓存了解吗？强缓存一般存放在哪里？计算整个文件得到 etag 会耗费性能，怎么解决？如果我不想要使用缓存了，每次都请求最新的，怎么做？no-store 和 no-cache 的区别是什么？
一、浏览器缓存
二、强缓存一般放在哪里
三、计算整个文件得到 etag 会耗费性能，怎么解决
四、不使用缓存的方式，让每次请求都是最新的
五、no-stroe & no-cache
19.说一下平时项目是怎么优化的？优化之后是怎么度量的？首屏时间是怎么计算的？
针对每个过程进行优化
1.1 网络连接方面优化
1.2 请求方面优化
1.3 响应优化
1.4 浏览器首屏渲染优化
1.5浏览器渲染优化
20.怎么计算组件在视口内出现了几次？IntersectionObserver 怎么使用的？怎么知道一个 DOM 节点出现在视口内？
一、监听 Scroll
二、IntersectionObserver
2.1 API
2.2 Callback 参数
2.3 Option 对象
21.versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数
22.什么是微服务，微服务跟单体应用的区别是啥，用微服务有啥好处？
23.动手实现一个 repeat 方法
24.请列出目前主流的 JavaScript 模块化实现的技术有哪些？说出它们的区别？
25.请描述下 JavaScript 中 Scope、Clo


2020最新：100道有答案的前端面试题（上）
https://juejin.cn/post/6847902225423925255

一个正经的前端学习 开源 仓库（每日更新）-572道知识点
https://juejin.cn/post/7090198438976946184

前端研发流程图
https://juejin.cn/post/7039330160885104653 

10个前端面试刷题网站 **************************
https://juejin.cn/post/7082193820187623461

刷题库 ******************************
https://juejin.cn/user/3043869648233181/posts

大前端面试题库碎片时间刷刷题 ******************************
http://bigerfe.com/

蚂蚁、字节、滴滴面试经历总结 ******************************
https://juejin.cn/post/6844904161830502407

在阿里我是如何当面试官的 ******************************
https://juejin.cn/post/6844904093425598471

两年经验字节前端面经(可能是最简单的了) ******************************
https://juejin.cn/post/6866082181455249422


大厂面试复盘(微信/阿里/头条，均拿offer)| 掘金技术征文 ********************************
https://juejin.cn/post/6844904154675183623

部署网站 https://www.imooc.com/video/23538
Netlify 是什么?
Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能。


小白同学的字节之旅 ｜ 经验分享 ｜面经好文｜ 个人成长  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
https://juejin.cn/post/7092806181856657445

程序员山月lv-5
https://juejin.cn/user/1556564164489389/posts

面试必问：前端性能监控Performance
https://juejin.cn/post/7031572366341701663?utm_source=gold_browser_extension

微前端qiankun的实战
https://www.bilibili.com/video/BV1CL4y1j7Zz?spm_id_from=333.337.search-card.all.click

什么项目适合为前端架构
1.拆分巨型应用，使应用变得更加可维护
2.兼容历史应用，实现增量开发

什么是微前端架构？它有什么优缺点以及构建思路 
https://blog.51cto.com/u_14785218/3007821

应用间通信
多个应用间通信，这里举个简单的例子：主应用中登录获取用户id，当加载微应用时，微应用需要根据不同的用户 id 展示不同的数据或者展示不同的页面。
这个时候就需要主应用中把对应的用户id传到微应用中去。传值方式，这里总结了三种方式：

挂载微应用时直接props传值
initGlobalState 定义全局状态
定义全局的状态池

props 传值
注册微应用的基础配置信息时，增加 props ,传入微应用需要的信息
{
    name: 'vue2',
    entry: 'http://localhost:8001',
    container: '#subContainer',
    activeRule: '/vue2',
    //props
    props: {
      id: 'props基础传值方式'
    },
    loader,
}
链接：https://juejin.cn/post/6986258669172490271

微前端qiankun从搭建到部署的实践 🔥🔥🔥 好文章 微前端qiankun从搭建到部署的实践
https://blog.csdn.net/a1998321/article/details/108758033
https://juejin.cn/post/6875462470593904653
有案例，实战

基于qiankun的微前端应用之间的通信方式
https://blog.csdn.net/qq_44606064/article/details/122722445

基于 qiankun 的微前端最佳实践（图文并茂） - 应用间通信篇
https://juejin.cn/post/6844904151231496200#heading-8

基于 qiankun 的微前端最佳实践（万字长文） - 从 0 到 1 篇---------------
https://juejin.cn/post/6844904158085021704

万字长文+图文并茂+全面解析微前端框架 qiankun 源码 - qiankun 篇
https://juejin.cn/post/6844904115999342600

什么是微前端 https://juejin.cn/post/7060511931488010247
概念：将多个独立的应用组合成一个更大的整体，由主框架根据路由加载子应用，不同的子应用状态隔离
适用场景：尝试更新颖的技术栈、降低耦合

微前端qiankun的应用与实践
https://juejin.cn/post/7099031319585226760

微前端架构具备以下几个核心价值：
技术栈无关
主框架不限制接入应用的技术栈，微应用具备完全自主权
独立开发、独立部署
微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
增量升级
在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
独立运行时
每个微应用之间状态隔离，运行时状态不共享
链接：https://juejin.cn/post/7099031319585226760

Verdaccio搭建npm私有仓库 https://www.bilibili.com/video/BV1C3411x7Nq?spm_id_from=333.999.0.0
在服务器上搭建npm私有仓库  

极速搭建npm私有仓库 https://mixed-dash-083.notion.site/npm-9f665db2160240278b2cc7ca95be1123
- 安全性：把公用组件放到私有npm库中，只有内网可以访问，这样可以避免敏感代码泄露；
- 下载速度：使用内部的地址，能够在开发下载 npm 包的同时，将包和其依赖包缓存到 npm 私有仓库服务器中，从而使后续的下载速度更快；

# **npm 私有仓库框架选型**

- Nexus: **[https://www.sonatype.com/nexus-repository-oss](https://www.sonatype.com/nexus-repository-oss)**
- cnpm: **[https://cnpmjs.org](https://cnpmjs.org/)**
- Verdaccio: **[https://verdaccio.org](https://verdaccio.org/)**
# **Verdaccio介绍**

> Verdaccio 是一个 Node.js 创建的轻量的私有 npm proxy registry。具有**零配置/轻量化**的特性，不需要额外配置数据库，它的内部自带小型的数据库。
- 基于 Node.js 的网页应用程序
- 私有 npm registry
- 本地网络 proxy
- 可插入式应用程序
- 易安装和使用
- 提供 Docker 和 Kubernetes 支持
- 与 yarn, npm 100% 兼容

使用 Verdaccio 搭建一个企业级私有 npm 库
https://juejin.cn/post/6932264833312096270
基于 Docker + Verdaccio 搭建 Npm 私有库，实现在私有库上发布、下载npm包
https://juejin.cn/post/7055478418204262436


前端工程化之用commintlint + husky实现git提交规范化
https://juejin.cn/post/6844904168004517901 


使用nexus2.13.0搭建npm私服
https://juejin.cn/post/7119392650674831367      