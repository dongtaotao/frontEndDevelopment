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

手把手，如何搭建一个通用组件库？（文档+样式+按需打包）
https://juejin.cn/post/7224051399256309821?utm_source=gold_browser_extension
手把手，如何搭建一个通用组件库，并发布到npm？ 很不错🔥🔥
https://juejin.cn/post/7223676609793376311


保姆级教程带你创建 Vue3 项目模版
开箱即用功能

Vue3 - 更好的性能和开发体验，提供更多新的特性和改进的API
Vite4 - 快速的Web开发构建工具，它基于ESM原生模块系统，支持快速的冷启动和热模块替换
Vue Router - 可配置的、方便的路由管理
Pinia - 新一代的全局状态管理
TypeScript - JavaScript 超集，提供类型检查、更好的 IDE 支持和其他强大的特性
VueUse - 提供了许多实用的、经过优化的自定义 Hooks 函数，简化应用程序开发
Pnpm - 快速、高效、可靠且易于使用的包管理器
Icones - 大量、精美的免费图标库
Arco Design Vue - 完善、灵活的基于 Vue3 的 UI组件库
Axios - 基于 Promise 的 HTTP 请求库
Tailwind CSS - 高度可定制、实用的 CSS 框架
Less - 实用、灵活、易于上手的CSS预处理器
Eslint、Prettier - 保证团队代码的质量和可读性，减少语法错误和风格不一致
husky、lint-staged、commitlint - 帮助团队规范 Git 提交规范和代码质量，避免错误和重构
Airbnb Style - 代码风格
@vitejs/plugin-vue-jsx - 支持 tsx/jsx 写法
unplugin-vue-components - 自动按需引入Vue 组件
unplugin-auto-import - 自动按需引入 Vue、Vue Router、Pinia 和 VueUse 中的 API
unplugin-icons - 图标库自动按需引入
vite-svg-loader - 以组件形式使用 SVG 图片
链接：https://juejin.cn/post/7224509927913308218
