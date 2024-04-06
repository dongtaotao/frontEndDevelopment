Web团队建设--自定义脚手架
https://juejin.cn/post/7156961879837900830

如果让我来搭建项目【规范篇】
https://juejin.cn/post/7201868291271016485?

5分钟读懂前端标准化之旅
https://juejin.cn/post/7201883287937597496?

前端项目重构的一些思考和复盘 
https://juejin.cn/post/7204471695544369207?

前端脚手架开发指南
https://cloud.tencent.com/developer/article/2227918

前端架构第一步，前端基建（个人总结）
https://juejin.cn/post/7207271372522782775


标准化大厂编程规范解决方案之ESLint + Prettier + Git Hooks
https://juejin.cn/post/7211539869805150263?

上传大文件中断了怎么恢复?
大文件一般都是采用分片上传，将大文件转换成二进制文件流，利用文件流可以切割的属性，将整个文件切分成多个chunk,
每个chunk都要有chunkIndex，chunkHash, 此外还要传chunkTotal,fileHash给服务器,以便服务端校验文件的正确性和完整性。
以并行或串行的方式传输，服务器接收分片并存储，收到合并请求后使用流将切片合并成最终文件。
在分片上传的过程中，如果因为由于意外因素（如网络中断或系统崩溃等异常因素)导致上传中断，网络恢复后，为了避免重新开始从头上传,
 需要在上传切片的时候记录上传的进度。再次上传时，可以继续从上次中断的地方进行继续上传。可以在客户端记录,服务端也可以提供
 已上传分片查询接口，让客户端查询已上传的分片数据，下一次从未上传的分片数据开始继续上传。

链接：https://juejin.cn/post/7212016466774048805

如何实现全网置灰？CSS3来解决
https://blog.csdn.net/aaqingying/article/details/128496253
filter: grayscale(100%);

2023前端求职经历回顾及面试题总结
https://juejin.cn/post/7211775653166219323?#mianshiti

前端如何优雅的实现跨终端开发（PC端+移动端）
https://blog.csdn.net/aaqingying/article/details/128429872
解决方案一：使用CSS媒体查询。
解决方案二：写两套代码，分别应用于PC端和移动端。 
推荐方案：使用CabloyJS
相关链接

在京东如何做好前端系统的可观测性
https://juejin.cn/post/7212268146580029501?

Vue接入富文本ckeditor4+mathtype+latex集成指南
https://juejin.cn/post/6844904135217659912


如何使用 pnpm+vite+vue3 搭建组件库并发布到私有仓库（人人都能学会）
https://juejin.cn/post/7212538330829996092?

vite+vue3+ts项目中使用eslint+prettier+StyleLint+husky规范代码
https://juejin.cn/post/7222460499493584955?


从零开始搭建规范的 TypeScript SDK 项目工程环境
本文主要介绍从零开始配置 TypeScript SDK 项目整体的环境配置，包括了以下几方面的配置

使用 Webpack 进行 工程搭建
使用 EditorConifg、Prettier、ESLint、Airbnb JavaScript Style Guide 来保证 团队代码风格规范
使用 husky、Commitlint 和 lint-staged 来 构建前端工作流
使用 standard-version 生成 changelog
使用 TypeDoc 或者 Vuepress 快速生成 文档。
使用 html-webpack-plugin、webpack-dev-server 进行 本地热更新代码调试
使用 Jest 进行 单元测试，并约束提交 正确的代码
使用 Github Actions 进行 自动部署发布
链接：https://juejin.cn/post/7038967786051207175


2023 最新最细 vite+vue3+ts 多页面项目架构，建议收藏备用！
https://juejin.cn/post/7223286759630127159?
vite + vue3 + ts + esint + prettier + stylelint + husky + lint-stage + commitlint 搭建一套多页面项目。



前端测试之Jest深入浅出
https://juejin.cn/post/6844904196244766728#heading-36


从 0 构建自己的脚手架/CLI知识体系（万字） 🛠
https://juejin.cn/post/6966119324478079007#heading-11

从零搭建属于你自己的前端规范+自动化部署
https://juejin.cn/post/7207617774633107512?utm_source=gold_browser_extension
🌈 eslint、prettier
📦 husky
🛡 git-cz
⚙️ 基于 nginx 部署的docker
🌍 在 pull request 时触发 CI/CD
🎨 基于 vitest 的功能测试（还在完善中...）

前端必备的nginx知识点  很不错
https://juejin.cn/post/7210958340712316983?utm_source=gold_browser_extension


Vite4.3+Typescript+Vue3+Pinia 最新搭建企业级前端项目
https://juejin.cn/post/7228978346502946874?utm_source=gold_browser_extension


大厂面试官：你做过什么有亮点的项目吗？ 好
前言
大数据量
场景1： 课程页面，增删改查
场景2： 文件上传
研发效率的提高
团队效率
研发质量的提高
性能优化
1. 更快的加载文件
2. 代码执行的更快
复杂场景
不要陷入成长陷阱
总结


【🔥开箱即用】vite+vue3.2+ts工程化脚手架搭建
https://juejin.cn/post/7232572368622485565?utm_source=gold_browser_extension#heading-6
背景介绍🏗️
工程化整体流程图示📸
拆分步骤🔧
Vite 创建 vue + ts 项目
Eslint 相关依赖
Prettier 相关依赖
Eslint 和 Prettier冲突问题👥
Stylelint 相关依赖
狠狠的踩坑 😭
lint-staged 相关依赖
husky 相关依赖
添加 pre-commit 钩子
添加 commit-msg 钩子
钩子添加完毕，配置husky钩子脚本
commitizen 相关依赖和配置
conventional-changelog-cli 相关依赖和配置
完整配置🗃️
安装依赖
package.json
tsconfig.json
.eslintrc.js & .eslintignore
.prettierrc.js & .prettierignore
.stylelintrc.js & .stylelintignore
.husky文件夹
pre-commit
commit-msg
commitlint.config.js
.cz-config.js


【前端架构进阶课程】手写Vue3核心源码，从零搭建vue3-UI组件库
https://www.bilibili.com/video/BV1VB4y137LF?p=10&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
VUE进阶-从0到1搭建UI组件库（1-3）
https://www.bilibili.com/video/BV1nJ411V75n/?spm_id_from=333.788.recommend_more_video.1&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


开篇：探索前端工程化、从零到一打造一个前端组件库
https://juejin.cn/post/7151961741776125989


基于Vue的前端架构，我做了这15点
https://juejin.cn/post/6901466994478940168

如何从0开始搭建1个前端项目？目录篇（超详细！持续更新中...）
https://juejin.cn/post/7101657948744581151


我是如何带领团队从零到一建立前端规范的？🎉🎉🎉
https://juejin.cn/post/7085257325165936648
开发者需要建立和遵守的规范
大致可以划分成这几个方向：

开发流程规范
代码规范
git commit规范
项目文件结构规范
UI设计规范


非大厂的我们，如何去卷一套标准的前端团队规范？https://juejin.cn/post/7151983972828839943  🔥🔥
非大厂的我们，要如何去搞前端基建？ https://juejin.cn/post/7144881028661723167


【前端工程化】webpack5从零搭建完整的react18+ts开发和打包环境
https://juejin.cn/post/7111922283681153038
前言
初始化项目
配置基础版react+ts环境
常用功能配置
配置react模块热替换
优化构建速度
优化构建结果文件
总结

【前端工程化】配置React+ts项目完整的代码及样式格式和git提交规范
https://juejin.cn/post/7101596844181962788

【前端工程化】使用dumi2搭建React组件库和函数库详细教程和最佳实践
https://juejin.cn/post/7222804347830206525 


前端工程化之脚本世界
https://juejin.cn/post/7239953755897839673?utm_source=gold_browser_extension


【前端工程化】配置React+ts企业级代码规范及样式格式和git提交规范
https://juejin.cn/post/7101596844181962788
前言
代码规范技术栈
创建react18+vite2+ts项目
editorconfig统一编辑器配置
prettier自动格式化代码
eslint+lint-staged检测代码
使用tsc检测类型和报错
代码提交时使用husky检测代码语法规范
代码提交时使用husky检测commit备注规范
配置commitizen方便添加commit辅助备注信息
stylelint规范样式和保存自动修复
总结
链接：https://juejin.cn/post/7101596844181962788

前端react基建
https://juejin.cn/post/7256393626682163237?utm_source=gold_browser_extension

【前端规范全攻略】开启高效开发之旅！ESLint + Prettier + husky + lint-staged+Commitizen
https://juejin.cn/post/7257441221761040444?utm_source=gold_browser_extension


从零开始搭建一个前端日志框架
https://juejin.cn/post/7257922419329957948?utm_source=gold_browser_extension

从0到1实践ESLint+Prettier+Stylelint+Commitlint+husky提交拦截、保存后自动fix
https://juejin.cn/post/7249297734866812983
 

前端之道：规范指南与工具推荐
https://juejin.cn/post/7261626714287095864?utm_source=gold_browser_extension#heading-56


前端工程化三十八讲
https://www.bilibili.com/video/BV18T4y1R72R/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
山月行
https://shanyue.tech/op/
https://q.shanyue.tech/engineering 
 