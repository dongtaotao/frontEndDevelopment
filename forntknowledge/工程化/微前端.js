什么是微前端？
多个小型前端应用合并为一个应用。并做到项目分离和运营聚合。
https://blog.gaogangsever.cn/engine/%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%96%B9%E6%A1%88.html#%E4%B8%80%E3%80%81spa-%E5%BC%80%E5%8F%91%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98

优点：
框架无关
独立开发，测试部署
应用隔离100%

qiankun的基本使用 https://www.bilibili.com/video/BV1G34y1x7Cm?spm_id_from=333.999.0.0

微前端qiankun快速入门 
https://www.bilibili.com/video/BV16T4y1e7TC/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

谈谈微前端 https://febook.hzfe.org/awesome-interview/book4/engineer-mfa
独立开发 独立运行 独立部署 自治

用 qiankun 接入十几个子应用后，我遇到了这些问题
微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

微前端具备以下特点：

技术栈无关：主框架不限制接入应用的技术栈，微应用具备完全自主权
独立开发、独立部署：既可以组合在一起运行，也可以单独运行。
增量升级：在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
独立运行时：每个微应用之间状态隔离，运行时状态不共享
链接：https://juejin.cn/post/7202108772924325949

前端工程化实践｜微前端是如何在团队落地的(一)？
https://juejin.cn/post/7202593633332363324?

超大体量项目，微前端落地方案，看完后悔来找我
https://juejin.cn/post/7121244973558661150

一文了解，关于微前端那些事儿
https://juejin.cn/post/7208057259053006906?

微前端qiankun简易上手指南
项目demo
https://juejin.cn/post/7208082990810546237?


基于 qiankun 的微前端最佳实践（万字长文） - 从 0 到 1 篇---------------
https://juejin.cn/post/6844904158085021704


了解微前端吗？微前端目前业内的解决方案 阿里的乾坤了解吗
微前端是一种将前端应用程序拆分为更小、更容易管理的部分的架构风格，每个部分可以独立地开发、测试、部署和扩展。它的主要
目的是解决单体应用程序的复杂性和可维护性问题，以及不同应用程序之间的耦合问题。
在业内，目前有许多微前端的解决方案，包括Single-SPA、qiankun、Mosaic、Piral、Luigi等等。这些解决方案都有各自的优缺点和
适用场景，可以根据实际需求进行选择。
阿里的qiankun是一种在React、Vue、Angular等前端框架上实现微前端的解决方案。它使用了主应用和子应用的概念，主应用负责整体框
架的搭建和管理子应用，子应用则可以使用不同的前端框架进行开发。qiankun提供了统一的路由、状态管理、样式隔离等功能，可以有效地实现微前端架构
微前端的好处

技术栈无关性：不同的团队可以使用不同的技术栈来开发不同的微前端应用，而这些应用可以无缝地集成到一个统一的应用中，不会出现技术栈不一致的问题。
模块化开发：每个微前端应用都是独立开发的，可以根据需求进行拆分成多个小模块，每个模块可以独立开发、测试、部署和升级，
   从而提高了开发效率和代码质量。
独立部署：每个微前端应用都是独立部署的，可以快速部署新的功能和修复bug，而不需要整个应用重新部署，从而提高了部署效率和灵活性。
高可维护性：由于每个微前端应用都是独立开发、测试、部署和升级的，因此可以更容易地维护和更新每个应用，从而提高了整个应用的可维护性。
更好的扩展性：微前端应用可以在需要时独立开发和扩展，可以更好地满足业务需求，同时也可以更容易地扩展到新的平台和设备
链接：https://juejin.cn/post/7215226343713620029


微前端知识梳理
https://juejin.cn/post/7221046247262781499?utm_source=gold_browser_extension

微前端（无界）
https://juejin.cn/post/7212603829572911159
微前端概念
微前端是借鉴了微服务的理念，将一个庞大的应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发，独立运行，独立部署，还可以随意组合，这样就降低了耦合度，从而更加灵活。
微前端特性

技术栈无关 主框架不限制接入应用的技术栈，子应用可自主选择技术栈（vue，react，jq，ng等）
独立开发/部署 各个团队之间仓库独立，单独部署，互不依赖
增量升级 当一个应用庞大之后，技术升级或重构相当麻烦，而微应用具备渐进式升级的特性
独立运行时 微应用之间运行时互不依赖，有独立的状态管理
链接：https://juejin.cn/post/7212603829572911159



黑马前端基于qiankun搭建微前端项目实战教程
https://pan.baidu.com/s/18n1WgUJWD5Znfd8xloW9Dg?pwd=i8em
https://www.bilibili.com/video/BV12T411q7dq/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



微前端架构初探以及我的前端技术盘点
https://juejin.cn/post/6844904113445011469

微前端知识梳理
https://juejin.cn/post/7221046247262781499


作为面试官，为什么我推荐微前端作为前端面试的亮点？ 
https://juejin.cn/post/7252342216843296828?utm_source=gold_browser_extension  


假设面试官问你有关“微前端”的问题，你能答多少...
https://juejin.cn/post/7304946949940674587?utm_source=gold_browser_extension


🥇🥇🥇一文带你打通微前端-qiankun/microapp/icestark/wujie全解析
https://juejin.cn/post/7308583491934994470#heading-3

🥇🥇🥇一网打尽主流的微前端框架生命周期/路由/资源系统：原理篇
https://juejin.cn/post/7311907901047324722?utm_source=gold_browser_extension
