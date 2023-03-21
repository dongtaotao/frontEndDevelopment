最新整理的25道前端面试真题（含答案与解析） ****************** 
https://juejin.cn/post/6899291168891207688 

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

春招腾讯50题计划
https://juejin.cn/column/7070454142849777678

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