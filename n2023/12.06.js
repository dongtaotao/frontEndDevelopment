业务开发实现二维码、PDF下载记录 
https://juejin.cn/post/7307149707159617546?utm_source=gold_browser_extension

SheetJs总结
https://juejin.cn/post/7307105122962128930?utm_source=gold_browser_extension


前端文件上传预览下载
https://juejin.cn/post/7307471267481059339?utm_source=gold_browser_extension


视频上传 - 断点续传那点事
https://juejin.cn/post/7307587537295343631?utm_source=gold_browser_extension


适合vue项目的自动检测更新方案，无需任何库(直接复制可用)
https://juejin.cn/post/7307887970663792640?utm_source=gold_browser_extension


PC端大文件上传：分片上传、断点续传、上传进度条
https://juejin.cn/post/7308933897852420146?utm_source=gold_browser_extension

前端换肤方案 - element+less无感换肤（无需页面刷新）
https://juejin.cn/post/7282290326068641847?utm_source=gold_browser_extension

如何实现 H5 秒开？
https://juejin.cn/post/7249665163242307640?utm_source=gold_browser_extension

产品：请给我实现一个在web端截屏的功能！
https://juejin.cn/post/7276694924137463842

Vue3如何优雅的加载大量图片🚀🚀🚀
https://juejin.cn/post/7279346413915291703


使用 Vue 实现防篡改的水印
https://juejin.cn/post/7270900584466890806?utm_source=gold_browser_extension

Vue3 + Express 实现大文件分片上传、断点续传、秒传
https://juejin.cn/post/7297225106202968105?utm_source=gold_browser_extension


实践大文件上传，搞个demo玩玩原理
https://juejin.cn/post/7310032602130907199?utm_source=gold_browser_extension


《JavaScript设计模式与开发实践》最全知识点汇总大全
https://juejin.cn/post/6844903751870840839



34. Vue模版编译原理
vue中的模板template无法被浏览器解析并渲染，因为这不属于浏览器的标准，不是正确的HTML语法，所有需要将template转化成一个JavaScript函数，
这样浏览器就可以执行这一个函数并渲染出对应的HTML元素，就可以让视图跑起来了，这一个转化的过程，就成为模板编译。模板编译又分三个阶段，解析parse，
优化optimize，生成generate，最终生成可执行函数render。

解析阶段：使用大量的正则表达式对template字符串进行解析，将标签、指令、属性等转化为抽象语法树AST。
优化阶段：遍历AST，找到其中的一些静态节点并进行标记，方便在页面重渲染的时候进行diff比较时，直接跳过这一些静态节点，优化runtime的性能。
生成阶段：将最终的AST转化为render函数字符串。

链接：https://juejin.cn/post/7309921546612506651


5. Composition API与React Hook很像，区别是什么
从React Hook的实现角度看，React Hook是根据useState调用的顺序来确定下一次重渲染时的state是来源于哪个useState，所以出现了以下限制

不能在循环、条件、嵌套函数中调用Hook
必须确保总是在你的React函数的顶层调用Hook
useEffect、useMemo等函数必须手动确定依赖关系

而Composition API是基于Vue的响应式系统实现的，与React Hook的相比

声明在setup函数内，一次组件实例化只调用一次setup，而React Hook每次重渲染都需要调用Hook，使得React的GC比Vue更有压力，性能也相对于Vue来说也较慢
Compositon API的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用
响应式系统自动实现了依赖收集，进而组件的部分的性能优化由Vue内部自己完成，而React Hook需要手动传入依赖，而且必须必须保证依赖的顺序，让useEffect、useMemo等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降。

虽然Compositon API看起来比React Hook好用，但是其设计思想也是借鉴React Hook的。
链接：https://juejin.cn/post/7309921546612506651



13. 页面有多张图片，HTTP是怎样的加载表现？
在HTTP 1下，浏览器对一个域名下最大TCP连接数为6，所以会请求多次。可以用多域名部署解决。这样可以提高同时请求的数目，加快页面图片的获取速度。
在HTTP 2下，可以一瞬间加载出来很多资源，因为，HTTP2支持多路复用，可以在一个TCP连接中发送多个HTTP请求。
链接：https://juejin.cn/post/7310024732354592805



keep-alive 相关
keep-alive的实现原理是什么
与keep-alive相关的生命周期函数是什么，什么场景下会进行使用
keep-alive的常用属性有哪些


参考答案：
keep-alive 组件是 vue 的内置组件，用于缓存内部组件实例。这样做的目的在于，keep-alive 内部的组件切回时，不用重新创建组件实例，
  而直接使用缓存中的实例，一方面能够避免创建组件带来的开销，另一方面可以保留组件的状态。
keep-alive 具有 include 和 exclude 属性，通过它们可以控制哪些组件进入缓存。另外它还提供了 max 属性，
  通过它可以设置最大缓存数，当缓存的实例超过该数时，vue 会移除最久没有使用的组件缓存。
受keep-alive的影响，其内部所有嵌套的组件都具有两个生命周期钩子函数，分别是 activated 和 deactivated，它们分别在组件激活和失活时触发。第一次 activated 触发是在 mounted 之后
在具体的实现上，keep-alive 在内部维护了一个 key 数组和一个缓存对象
kotlin复制代码// keep-alive 内部的声明周期函数

created () {
    this.cache = Object.create(null)
    this.keys = []
}

key 数组记录目前缓存的组件 key 值，如果组件没有指定 key 值，则会为其自动生成一个唯一的 key 值
cache 对象以 key 值为键，vnode 为值，用于缓存组件对应的虚拟 DOM
在 keep-alive 的渲染函数中，其基本逻辑是判断当前渲染的 vnode 是否有对应的缓存，如果有，从缓存中读取到对应的组件实例；如果没有则将其缓存。
当缓存数量超过 max 数值时，keep-alive 会移除掉 key 数组的第一个元素。

链接：https://juejin.cn/post/7208005892313579576

React入门小白版：从零开始学核心概念
https://juejin.cn/post/7310151273004171275?utm_source=gold_browser_extension#heading-1


面试官：能否用原生JS手写一个虚拟列表...啊？你还真能写啊？
https://juejin.cn/post/7309786535934869504?utm_source=gold_browser_extension 


前端白屏检测：SDK的设计与实现
https://juejin.cn/post/7310112724945272832?utm_source=gold_browser_extension


// 阿里云购买 CDN 服务
如何使用阿里云CDN服务 🔥🔥🔥🔥🔥  bilibili
https://www.bilibili.com/video/BV1BQ4y1b7gZ/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
开通cdn服务
添加加速域名


//P111
111_express框架_防盗链介绍
https://www.bilibili.com/video/BV1gM411W7ex?p=112&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
请求头  referer



ali-oss是什么库，什么功能    GPT
ali-oss 是阿里云官方提供的 Node.js 客户端库，用于与阿里云对象存储服务（OSS）进行交互。OSS 是一种可扩展的云存储服务，
使你能够以低成本、高可用性的方式存储和检索任意类型的数据，包括文本和二进制数据。

Kubernetes
https://juejin.cn/book/6897616008173846543/section/6905555406571962368?enter_from=course_center&utm_source=course_center
通俗些讲，可以将 Kubernetes 看作是用来是一个部署镜像的平台。可以用来操作多台机器调度部署镜像，大大地降低了运维成本。


千锋教育云计算Kubernetes（K8s）入门基础全套教程
https://www.bilibili.com/video/BV1Ye411G7X8/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



监控篇 - 线上埋点、预警
https://juejin.cn/book/6948353204648148995/section/6959912004312104998?enter_from=course_center&utm_source=course_center
Sentry
为什么使用 Sentry
支持的开发框架非常多，基本涵盖了市面流行的所有框架


IntersectionObserver API实现图片懒加载、无限滚动
https://juejin.cn/post/7310977323484971071?utm_source=gold_browser_extension


牛客网如何监听你调到了其他页面 document.hidden，监听 docuemnt.vibibleChange事件
document.addEventListener("visibilitychange", function() {
console.log( document.hidden );
});
  

GraphQL能聊一聊么，为啥能够提升页面性能？
GraphQL能够根据页面展示需求请求所需要的数据，不会有冗余的数据，传输效率上会更高


字节三年，谈谈一线团队如何搞工程化一（全景篇）
https://juejin.cn/post/7311596602249134106?utm_source=gold_browser_extension

我在美团三年的前端工程化实践回顾
https://juejin.cn/post/7268533072995598347?utm_source=gold_browser_extension


性能优化问题：
静态资源上传到CND服务器
外部引用第三方的CND资源
如果第三方的资源出问题了有什么兼容方案（放公司自己的静态服务器）
链接：https://juejin.cn/post/7297526380334301203

web如何实现录制音频，满满干货（下篇）
https://juejin.cn/post/7311602994582634534?utm_source=gold_browser_extension

web如何实现录制音频，满满干货（上篇）
https://juejin.cn/post/7311596602262306825?utm_source=gold_browser_extension

解放双手，本地项目一键部署
ftp-local-transfer
https://juejin.cn/post/7311979022330544147?utm_source=gold_browser_extension


js上传大文件的方法
https://www.bilibili.com/video/BV1NM4y1f7i3/?p=7&spm_id_from=pageDriver


前端必学之Nginx与Linux       📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚
https://www.bilibili.com/video/BV1vQ4y1f7LF?p=4&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
01-课程介绍
02-服务器购买
03-重置实例密码
04-Linux基本命令
05-杀死进程
06-scp上传下载项目
07-ftp上传项目
08-nginx安装与运行
09-nvm安装
10-node与git的安装
11-项目部署
12-nginx解决跨域
13-gzip压缩

长任务的优化处理
https://juejin.cn/post/7311632859085176832?utm_source=gold_browser_extension
应该避免单个耗时任务
对于确实必要的长任务，对其干预分解
必要时可以使用 web worker


Linux
https://blog.csdn.net/qq1195566313/category_11727192.html
小满Linux（第一章认识Linux）
小满Linux（第二章Linux文件属性）
小满Linux（第三章Linux权限）】
小满Linux（第四章介绍Nginx）
小满Linux（第五章Linux安装Nginx）
小满Linux（第六章Nginx常用命令）
小满Linux（第七章Nginx配置文件）
小满Linux（第八章Nginx反向代理）
小满Linux（第九章Nginx-Vue-History-404问题）
小满Linux（第十章Nginx-Go-Access-日志分析器）
小满Linux（第十章Nginx-Go-Access-日志分析器）

支持远程调试的 "vConsole"
https://juejin.cn/post/7298161887882592310?utm_source=gold_browser_extension


前端预加载的3种方式 - 产品大佬都说好👍
https://juejin.cn/post/7295252900116332584?utm_source=gold_browser_extension
技术优化
import
react-router lazy 属性
webpack 预加载


前端是怎么解析Excel、PDF、Word、PPT等文件的？
https://juejin.cn/post/7313048171797544997?utm_source=gold_browser_extension


谈谈国内前端的三大怪啖
https://juejin.cn/post/7267091810366488632?utm_source=gold_browser_extension
小程序
微前端
模块加载


10分钟快速上手爬虫之Puppeteer
https://www.bilibili.com/video/BV13Z4y137Kt/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



node阿里云部署 bilibili
阿里云部署node.js
https://www.bilibili.com/video/BV1my4y1a7xN/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
https://www.yuque.com/uyyv8m/linux
阿里云服务器领取
1、安装node.js
2、上传node.js项目
3、pm2启动多个node项目
4、安装mongodb
5、nginx
6、Git
7、将本地mongodb移动到阿里云
8、安装mysql
一、Linux基本命令
1、常见命令
2、安装git
3、防火墙
二、node.js 安装
1、pm2
2、npm-cnpm-yarn
三、Linux安装Docker
1、安装Docker-mongo镜像
2、mongo-express
3、删除没有使用的docker容器
4、安装mysql
四、nginx
1、vue项目部署到Linux



pm2启动多个node项目
https://www.yuque.com/uyyv8m/linux/svk1wzodsbel7fo8


node阿里云部署 bilibili
阿里云部署node.js
https://www.bilibili.com/video/BV1my4y1a7xN/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
https://www.yuque.com/uyyv8m/linux/svk1wzodsbel7fo8



阿里云流水线自动化的持续集成与线下部署-尚硅谷微头条
java
https://www.bilibili.com/video/BV1k84y197c7/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

2. 上传代码到阿里云代码仓库
3. 编写dockerfile
4. 创建阿里云镜像
5. 编写流水线Flow，调试
6. 线下docker环境部署 调试
7. 线下k8s环境部署 调试


云效流水线部署vue项目
https://www.bilibili.com/video/BV1To4y157Cj/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
云效+docker-compose持续集成
https://www.bilibili.com/video/BV1Ka4y1G7KD/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


阿里云服务器部署及项目上线
https://www.bilibili.com/video/BV19E41157Gj/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


1v1 评审 100+ 前端简历，总结项目经验的 9 个问题
https://juejin.cn/post/7313242001113497638?utm_source=gold_browser_extension


都快 2024 年了还不会 vscode 插件开发？ ---- vscode 任务栏插件
https://juejin.cn/post/7312724111399239743?utm_source=gold_browser_extension


pnpm 为何节省空间
https://q.shanyue.tech/engineering/e751
它解决了 npm/yarn 平铺 node_modules 带来的依赖项重复的问题 (doppelgangers)


基于原生 js + html2canvas 实现网页放大镜
https://juejin.cn/post/7313242064196141065?utm_source=gold_browser_extension



面试官：你知道websocket的心跳机制吗？
前端实现WebSocket心跳机制的方式主要有两种：
使用setInterval定时发送心跳包。
在前端监听到WebSocket的onclose()事件时，重新创建WebSocket连接。
https://juejin.cn/post/7290005438153867283




面试官：你之前的工作发布过npm包吗？
https://juejin.cn/post/7287425222365364259

vue3 + mark.js | 实现文字标注功能
https://juejin.cn/post/7282950051319283770

面试官：做过性能优化？我：任务切片！
https://juejin.cn/post/7290753121702215691

前端实现单点登录（SSO）
https://juejin.cn/post/7282692430117748755



探索前端可视化大屏：创造令人惊叹的数据可视化体验🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯
https://juejin.cn/post/7288517000580694070
自适应所有布局


首屏时间(FCP) VS 白屏时间(FP)
https://juejin.cn/post/6844904112107044872



超越业务：前端监控   🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯
Sentry使用：
https://www.cnblogs.com/xakoy/p/9636393.html

前端错误监控使用：
https://juejin.im/post/5cc2b8b9e51d456e40377319

Sentry：
https://sentry.io

美团性能统计工具：
https://www.open-open.com/lib/view/open1414631044559.html



前端错误监控 -【Vue】与【Sentry】的结合
https://juejin.cn/post/6844903831256432648

记一次Sentry部署过程
https://juejin.cn/post/6844903826793709581


如何搭建npm 私服     verdaccio
https://juejin.cn/post/7261872148213415994

解决精度丢失的库
可以使用第三方库 https://www.npmjs.com/package/mathjs
decimal.js


彻底掌握前端文件上传
https://juejin.cn/post/7314571744354271284?utm_source=gold_browser_extension
一、文件上传方式
1、选择上传
2、拖拽上传
3、粘贴上传
二、多文件上传
三、文件上传限制
1、文件信息
2、文件大小限制
3、文件类型限制
4、文件数量限制
四、预览文件
五、单文件上传至服务器
1、客户端代码
2、服务端代码
六、目录上传
七、上传进度
1、单文件，单进度
2、多文件，单进度
1、方式一：已上传的大小 / 所有文件总大小
2、方式二：求已上传进度的平均值
八、上传状态
九、取消/暂停 上传
1、客户端暂停上传
2、服务端监听上传暂停
十、切片上传（大文件）
1、思路
2、客户端实现
1、基础结构
2、创建文件切片
3、生成文件唯一标识 hash 值
4、并发上传切片（控制异步并发请求的数量）
5、合并切片
3、服务端实现
1、存储切片
2、合并切片
十一、秒传（大文件）
1、客户端
2、服务端
十二、断点续传（大文件）
1、思路
2、客户端取消上传
3、服务端返回已上传的切片列表
4、客户端跳过已上传切片
十三、扩展和思考
参考资料



Vue 如何清除缓存？
https://juejin.cn/post/7314488568969134090?utm_source=gold_browser_extension

【译】Vue 内存泄漏的识别和解决方案
https://juejin.cn/post/7298655315753795634

【译】使用 Axios 拦截器中止 Vue 请求
https://juejin.cn/post/7301145359852994594


useImperativeHandle
useImperativeHandle 可以配合 forwardRef自定义暴露给父组件的实例值。这个很有用，我们知道，对于子组件，如果是class类组件，
我们可以通过ref获取类组件的实例，但是在子组件是函数组件的情况，如果我们不能直接通过ref的，那么此时useImperativeHandle和 forwardRef配合就能达到效果。


前端埋点上报的几种方式
https://juejin.cn/post/7291094895698460687


fluxy-admin后台管理系统开发记录
https://juejin.cn/column/7233324859932393528



Vite和Webpack的优缺点
https://juejin.cn/post/7254199067185823801
1. 原理对比
Vite
Vite是一种基于ES模块的构建工具，它利用浏览器原生的ES模块加载能力来实现快速的开发环境。Vite在开发过程中使用原生ES模块的方式加载模块，
而不需要将所有代码打包成一个或多个bundle。这种方式使得在开发环境下，只需要按需加载所需的模块，从而提供了更快的冷启动和热更新速度。
Webpack
Webpack是一种静态模块打包工具，它通过分析模块之间的依赖关系，将多个模块打包成一个或多个bundle。Webpack在打包过程中会将所有的模块转换成静态资源，
例如JavaScript、CSS、图片等，以便在浏览器中加载和执行。
2. 优缺点对比
3. 打包流程对比
链接：https://juejin.cn/post/7254199067185823801



静态资源缓存策略及发布更新
https://juejin.cn/post/7293803343082848271



一线开发破局，成为负责人到底到要负责什么？
https://juejin.cn/post/7314567553950482442?utm_source=gold_browser_extension


前端监控sdk开发（一）需求分析
https://juejin.cn/post/7314478702884470819
前端监控sdk开发（二）js错误捕获
https://juejin.cn/post/7314937895038517286
前端监控sdk开发（三）promise错误捕获
https://juejin.cn/post/7314947185866473523
前端监控sdk开发（四）长任务
https://juejin.cn/post/7314978984654635035
前端监控sdk开发（五）白屏检测
https://juejin.cn/post/7315244098491580425
前端监控sdk开发（六）性能时间指标相关
https://juejin.cn/post/7315244098491645961
前端监控sdk开发（七）pv
https://juejin.cn/post/7315280636930670642




React hooks实现生命周期函数
https://juejin.cn/post/7310151273005383691
React hooks实现生命周期函数
类组件的生命周期函数
Hooks 实现生命周期函数功能
1. 实现 componentDidMount 和 componentWillUnmount
2. 实现 shouldComponentUpdate
3. 实现 componentDidUpdate
4. 实拟 getSnapshotBeforeUpdate
5. 实拟 componentDidCatch
结论


文件上传的各个方案及优化（含nodejs后端）
https://juejin.cn/post/7315242945456160822?utm_source=gold_browser_extension


React实现 Excel 文件导出与在线预览
https://juejin.cn/post/7315260397371392015?utm_source=gold_browser_extension
npm install xlsx@0.17.1-alpha.3 react@18 react-dom@18 --save




变换风格：前端换肤的完整指南
https://juejin.cn/post/7315246744158355506?utm_source=gold_browser_extension
引言
静态样式切换
CSS文件切换
内联样式切换
CSS变量的运用
CSS变量基础
预处理器的支持
Less或Sass的变量与混合
CSS-in-JS：更灵活的主题切换
Styled-components或Emotion的基本使用
主题切换的性能优化
优化样式加载与切换过程
基于缓存的方案与性能比较
用户自定义主题
提供用户自定义主题的界面
保存用户偏好与下次访问的应用
跨浏览器兼容性
处理不同浏览器对主题切换的支持差异
兼容性测试与解决方案
安全性考虑与最佳实践
防止主题切换导致的安全隐患
最佳实践与代码规范
案例研究与最佳实践分享
行业领先公司的主题切换实践
优秀项目的主题切换案例
总结


浅谈前端出现率高的设计模式
https://juejin.cn/post/7274146202496041018?utm_source=gold_browser_extension


按钮防连点终极解决方案（内附非侵入源码）
https://juejin.cn/post/7304946949941608475?utm_source=gold_browser_extension


7. Vue.config.js配置proxy为什么能解决跨域
首先浏览器是禁止跨域的，但是服务端不禁止，在本地运行 npm run dev 等命令时实际上是用 node 运行了一个服务器，
因此 Vue 的转发机制 proxyTable 实际上是将请求发给自己的服务器，再由服务器转发给后台服务器，
做了一层代理。Vue的proxyTable 用的是 http-proxy-middleware 中间件, 因此不会出现跨域问题。

链接：https://juejin.cn/post/7208466455879221285


1213
flutter 🐯
RN 🐯
鸿蒙 🐯
React 🐯
vue 🐯
leet 🐯
小程序
koa2 🐯
taro 🐯
pm2
	负载均衡
	node进程守护
	日志查看
	监控
Linux🐯
docker&k8s  🐯🐯🐯🐯




Set（集合）
WeakSet（弱引用集合）
值的存储： WeakSet 只能存储对象引用，而不能存储基本数据类型。
弱引用： WeakSet 对象中存储的对象是弱引用的，这意味着如果在其他地方没有对该对象的引用，该对象可能会被垃圾回收，即使它仍然存在于 WeakSet 中。
迭代： WeakSet 不是可迭代的，因此不能使用 for...of 循环遍历其值。
API： WeakSet 提供了一些方法，如 add、delete、has，但没有像 Set 那样提供一些集合的操作方法，因为它是弱引用的，无法确保所有的元素都是有效的引用。
javascript
let myWeakSet = new WeakSet();
let obj = {};

myWeakSet.add(obj);
console.log(myWeakSet.has(obj)); // true

obj = null; // 在没有其他引用的情况下，对象可能被垃圾回收
console.log(myWeakSet.has(obj)); // false
总的来说，Set 适用于需要存储和操作唯一值的场景，而 WeakSet 适用于需要存储对象引用并且希望在其他地方没有引用时允许垃圾回收的场景。



Vue3问题：如何实现组件拖拽实时预览功能？
https://juejin.cn/post/7297093747703005235?utm_source=gold_browser_extension



Nest 实现大文件分片上传
https://juejin.cn/post/7315591545741197349?utm_source=gold_browser_extension


Web Worker：JS多线程的伪解药💊?
https://juejin.cn/post/7274146202496565306?utm_source=gold_browser_extension



计算LocalStorage，SessionStorage的大小
https://lv-z-l.github.io/front-end-blog/write/storage_size.html



React性能优化实战，解决不必要的重新渲染
https://juejin.cn/post/7316321509856755752?utm_source=gold_browser_extension
React.memo
用途：用于函数组件，通过对比组件的 props 变化来避免不必要的重新渲染。
useMemo
用途：用于记忆化计算结果，避免在每次渲染时都重新计算。
useCallback
用途：用于记忆化回调函数，避免在每次渲染时都重新创建回调。



工作踩坑之在浏览器关闭/刷新前发送请求
https://juejin.cn/post/7315846825344647194?utm_source=gold_browser_extension

网易云音乐 RN 低代码体系建设思考与实践
https://juejin.cn/post/7316145034691870754?utm_source=gold_browser_extension


lottie 动画在 vue 中的使用
https://juejin.cn/post/7316202809383845897?utm_source=gold_browser_extension


探索npm run dev的运行逻辑
https://juejin.cn/post/7315846825344237594?utm_source=gold_browser_extension


ref 为什么需要 .value
https://juejin.cn/post/7298978479399583755
Vue3 中为什么需要 ref？
https://juejin.cn/post/7298179365040635930
 

h5端调用手机摄像头实现扫一扫功能
https://juejin.cn/post/7316795553798815783?utm_source=gold_browser_extension

分享 100 道基础的前端面试题（附答案）
https://cloud.tencent.com/developer/article/1983792




1224

前端面试汇总🐯
算法🐯
flutter🐯
android🐯 
鸿蒙🐯