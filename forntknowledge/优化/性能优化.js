
RN性能优化 https://juejin.cn/post/6844904041290432525

「react进阶」年终送给react开发者的八条优化建议(篇幅较长，占用20-30分钟) 
https://juejin.cn/post/6908895801116721160

21 个 React 性能优化技巧
https://www.infoq.cn/article/kve8xtrs-upphptq5luz

性能优化
https://blog.gaogangsever.cn/javascript/performance/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E5%AE%9E%E8%B7%B5.html#%E4%B8%80%E3%80%81%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96

//==============================================================================================
react性能优化----------
定义 Render 过程
本文为了叙述方便， 将调和阶段中「计算目标虚拟 DOM 结构」过程称为 Render 过程 。触发 React 组件的 Render 过程目前有三种方式，
分别为 forceUpdate、State 更新、父组件 Render 触发子组件 Render 过程。

react性能优化思路
- 减少重新render的次数
- 减少渲染的节点
- 降低渲染计算量
- 合理设计组件

1.路由懒加载  react-loadable 避免首页加载很多页面导致包提及变大，使首页加快渲染
2.组件异步加载 延迟加载不是立即需要的组件 React.Lazy和React.Suspense
3.shouldComponentUpdate ,PureComponent 和 React.memo , React.useMemo,  React.useCallback， immetable.js以避免不必要的render 调用
   使用React.Memo来缓存组件 使用useMemo缓存大量的计算
4.学会使用的批量更新 合并state 合并状态更新 避免重复渲染 避免频繁地去setState，多个setState合并成一个
5.虚拟列表 长列表优化  虚拟化长列表：只加载可视范围内的数据。当网站需要加载大批量数据（成千上万）时，会加载特别慢。
  这个时候我们可以使用“虚拟滚动”技术（react-window或者react-virtualized），只渲染当前屏幕范围内的数据。
  虚拟列表
    虚拟列表是一种根据滚动容器元素的可视区域来渲染长列表数据中某一个部分数据的技术，在开发一些项目中，会遇到一些不是直接分页来加载列表数据的场景，
    在这种情况下可以考虑结合虚拟列表来进行优化，可以达到根据容器元素的高度以及列表项元素的高度来显示长列表数据中的某一个部分，而不是去完整地渲染长列表，
    以提高无限滚动的性能。
    可以关注下放两个比较常用的类库来进行深入了解
    react-virtualized
    react-window
    「前端进阶」高性能渲染十万条数据(虚拟列表)
    https://juejin.cn/post/6844903982742110216
6.如果页面图片比较多，使用react-lazyload插件 图片懒加载, 图片上云 cdn
7.学会使用redux数据共享。mobx。避免重复请求相同的数据，跨组建间共享数据
8.不可变数据-immutable
9.使用 React.Fragment 避免多层嵌套  使用React.Fragment避免添加额外的DOM  
10.不要使用内联函数定义  避免使用内联样式属性   避免使用匿名函数,避免每次函数都是新的实例导致组件渲染 
11.为组件创建错误边界 异常捕获边界（Error Boundaries） getDerivedStateFromError componentDidCatch
12.骨架屏 骨架屏插件以react-content-loader（svg图片生层）为基础。 用于在页面初始加载时，避免出现白屏现象。
13.根据性能优化工具修改代码
   1. 使用Chrome的Performance工具
   2. React Devtools的Profiler工具分析；
   通过React.Profiler组件包裹需要分析渲染时间的组件（不适合生产环境）。
14.key优化 防止用index做key 用唯一id作为key
// 15.减少组件嵌套 有很多种方式来代替，高阶组件/RenderProps，例如优先使用 props、React Hooks.
16.合理使用Context Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。正是因为其这个特点它是可以穿透
    React.memo或者shouldComponentUpdate的比对的，也就是说，一旦 Context 的 Value 变动，所有依赖该 Context 的组件会全部
17.尽量少用不可控的refs、DOM操作。
18.使用return null而不是CSS的display:none来控制节点的显示隐藏。保证同一时间页面的DOM节点尽可能的少。props和state的数据尽可能简单明了，扁平化
19.合理的组件分类，UI组件和容器组件
20.组件封装具有可复用性
21.在合适的时机使用防抖节流debounce、throttle 优化频繁触发的回调
22.在 Web 服务器上启用 gzip 压缩
22.使用 Web Workers 处理 CPU 密集任务 https://www.infoq.cn/article/kve8xtrs-upphptq5luz

// 1.避免频繁地去setState，多个setState合并成一个
// 2.避免单次setState传递大量的数据
// 3.避免数据嵌套过深

webpack----------------------------------------
① include 或 exclude 限制 loader 范围。
② happypack多线程编译
③ 缓存babel编译过的文件 babel-loader
④ tree Shaking 删除冗余代码
⑤ 按需加载，按需引入。 

Webpack 的优化瓶颈，主要是 2 个方面：
https://juejin.cn/post/6903295387302526990
Webpack 的构建过程太花时间  优化打包构建速度—开发体验和效率
Webpack 打包的结果体积太大  优化产出代码—产品性能

-. 针对 Webpack 
使用高版本的 Webpack 和 Node.js

1.构建费时分析 speed-measure-webpack-plugin
1.减小文件搜索范围 合理利用resolve 字段配置
    1.1 优化 resolve.modules 配置  直接指定项目根目录=========
       优化 resolve.modules 配置 配置resolve.modules:[path.resolve(__dirname,'node_modules')]避免层层查找
        resolve.modules 用于配置 Webpack 去哪些目录下寻找第三方模块，默认是 ['node_modules']。
        但是，它会先去当前目录的 ./node_modules 查找，没有的话再去 ../node_modules，最后到根目录 —— 即 npm 查找包的规则。
        所以可以直接指定项目根目录，这样代码就不需要一层一层查找。
        resolve: {
            modules: [path.resolve(__dirname, 'node_modules')],
        }
    1.2 使用resolve.extensions ，减少文件查找=======
        resolve.extensions 用来表明文件后缀列表，默认查找顺序是：['.js','.json']，
        如果你的导入文件没有添加后缀就会按照这个顺序查找文件。我们应该尽可能减少后缀列表长度，然后将出现频率高的后缀排在后面。
    1.3 使用别名 resolve.alias 可以通过别名的方式来映射一个路径，能让Webpack更快找到路径。========
    1.4.通过exclude、include 缩小搜索范围（优化 resolve.include/exclude 配置）========
        以 babel-loader 为例，可以通过 include 和 exclude 帮助我们避免 node_modules 这类庞大文件夹。
        即通过 include 告诉 Webpack 哪些我们是需要检测的，通过 exclude 告诉 Webpack 哪些我们是不需要检测的（例如已经收拾过的静态资源）
        module.exports = {
            module:{
                rules:[
                    {
                        test:/\.js$/,
                        loader:'babel-loader',
                        // 只在src文件夹中查找
                        include:[resolve('src')],
                        // 排除的路径
                        exclude:/node_modules/
                    }
                ]
            }
        }
2.通过 Loader 和 Plugin 优化
//   2.1 babel-loader  以 babel-loader 为例，可以通过 include 和 exclude 帮助我们避免 node_modules 这类庞大文件夹。
  2.3 可视化分析 speed-measure-webpack-plugin：测量出在构建过程中，每一个 Loader 和 Plugin 的执行时长。
      webpack-bundle-analyzer：通过矩阵树图的方式将包内各个模块的大小和依赖关系呈现出来。
  2.4 缓存  (开启缓存，明确范围) 提升二次构建速度
  cache-loader 在 babel-loader 开启 cache 后，将 loader 的编译结果写进硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。
3. 多进程编译文件 HappyPack(不维护了)thread-loader
   Happypack 可以将任务分解成多个子进程去并发执行，大大提升打包效率。
10.开启模块热替换提高开发效率
   不用整个页面刷新，而是局部替换掉部分模块代码并且使其生效，可以看到代码变更后的效果。所以，
   HMR 既避免了频繁手动刷新页面，也减少了页面刷新时的等待，可以极大地提高前端页面开发效率...
9.优化体验
   progress-bar-webpack-plugin：在终端底部，将会有一个构建的进度条，可以让你清晰的看见构建的执行进度。
   webpack-build-notifier：在构建完成时，能够像微信、Lark 这样的 APP 弹出消息的方式，提示构建已经完成。
   webpack-dashboard：对 Webpack 原始的构建输出不满意的话，也可以使用这样一款 Plugin 来优化你的输出界面。
////// ========减少打包体积

2.1 构建结果分析 webpack-bundle-analyzer 
4.提取公共代码 CommonsChunkPlugin splitChunks
   CommonsChunkPlugin 优化的思路就是通过将公共模块拆出来，最终合成的文件能在最开始的是加载一次，
   便于后续访问其余页面，直接使用浏览器缓存中的公共代码，这样无疑体验会更好
5.多进程代码压缩 （开启多进程压缩JS文件）
  因为自带的 UglifyJsPlugin 压缩插件是单线程运行的，而 ParallelUglifyPlugin 可以并行执行。所以通过 ParallelUglifyPlugin 
  代替自带的 UglifyJsPlugin 插件。
6. 代码分割 SplitChunksPlugin  拆包 合理分包，不重复加载
    代码分割code splitting （体积过大是很影响性能的一项。特别是对于移动端的设备而言简直是灾难。
      此外对于某些只要特定环境下才需要的代码，一开始就加载进来显然也不那么合理，这就引出了按需加载的概念了。
    为了解决这些情况，代码拆分就应运而生了。代码拆分故名思意就是将大的文件按不同粒度拆分，以满足解决生成文件体积过大、按需加载等需求。）
    在 Webpack 中，到底什么是代码分离？代码分离允许你把代码拆分到多个文件中。如果使用得当，你的应用性能会提高很多。因为浏览器能缓存你的代码。
    由于有了 SplitChunksPlugin，你可以把应用中的特定部分移至不同文件。如果一个模块在不止一个 chunk 中被使用，那么利用代码分离，该模块就
    可以在它们之间很好地被共享。
7.打包资源压缩
    JS 压缩：UglifyJSPlugin
    HTML 压缩：HtmlWebpackPlugin
    提取公共资源：splitChunks.cacheGroups
    CSS 压缩：MiniCssExtractPlugin
    Gzip 压缩：不包括图片
    图片压缩
8.按需加载 code-spliting: 代码分割技术，将代码分割成多份进行 懒加载 或 异步加载，避免打包成一份后导致体积过大，影响页面的首屏加载；
   通过 Code-Splitting 来做 React 的按需加载.
   想必大家在开发 SPA 项目的时候，项目中都会存在十几甚至更多的路由页面。
   如果我们将这些页面全部打包进一个 JS 文件的话，虽然将多个请求合并了，
   但是同样也加载了很多并不需要的代码，耗费了更长的时间。那么为了首页能更快地呈现给用户，
   我们肯定是希望首页能加载的文件体积越小越好，这时候我们就可以使用按需加载，将每个路由页面单独打包为一个文件
11.Scope Hoisting作用域提升
   scope Hoisting的作用是分析模块之前的依赖关系 ， 把打包之后的公共模块合到同一个函数中去。它会代码体积更小，因为函数申明语句会产生大量代码；
   代码在运行时因为创建的函数作用域更少了，内存开销也随之变小。
   scope hoisting: 作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；
=========tree Shaking 删除冗余代码

12.在配置文件中区分 mode 配置开发环境与生产环境 （拆分配置和merge） 
  3.1NODE_ENV=development 
  3.2拆分配置 webpack-merge  我们可以把 webpack 的配置按照不同的环境拆分成多个文件，运行时直接根据环境变量加载对应的配置即可
    webpack.base.js：基础部分，即多个文件中共享的配置
    webpack.development.js：开发环境使用的配置
    webpack.production.js：生产环境使用的配置
    webpack.test.js：测试环境使用的配置...
  3.3 启动本地服务
  3.4生成环境移除console
13.抽离css文件 ExtractTextPlugin 将 CSS 分离成单独的文件

14.按需引入
    不知道大家有没有体会到，当我们用antd等这种UI组件库的时候。
    明明只想要用其中的一两个组件，却要把整个组件库连同样式库一起引进来，
    就会造成打包后的体积突然增加了好几倍。为了解决这个问题，我们可以采取按需引入的方式。 babel-plugin-input
15 使用CDN加速  
16.无用代码消除 摇树优化 (Tree-shaking)，

code-spliting: 代码分割 技术，将代码分割成多份进行 懒加载 或 异步加载，避免打包成一份后导致体积过大，影响页面的首屏加载；
scope hoisting: 作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；

拿antd为例，需要我们在.babelrc文件中这样声明，

其他：
    1.小图片base64编码 
    2.bundle加hash
    3.懒加载
    4.提取公共代码
    //5.使用CDN加速  外部引入模块(CDN) <script src="//cdn.bootcss.com/autotrack/2.4.1/autotrack.js"></script>
    6.IngorePlugin
    7.使用production
    8.使用Scope Hosting
    9.sourceMap提高调试体验 提供一种到构建后代码映射技术，如果构建后代码报错，可以通过映射追踪到源代码。
    10.使用webpack-dev-server  修改代码自动刷新页面
    11.开启模块热替换HMR  模块热替换不刷新整个网页而只重新编译发生变化的模块，并用新模块替换老模块，所以预览反应更快，等待时间更少，
        同时不刷新页面能保留当前网页的运行状态
    12.区分环境--减小生产环境代码体积
    13.静态资源分离 通过 DllPlugin 或者 Externals 进行静态依赖包的分离。
//========

//================ 网络方面 
使用CDN加速静态资源加载
    CND加速的原理
    CDN通过将资源部署到世界各地，使得用户可以就近访问资源，加快访问速度。要接入CDN，需要把网页的静态资源上传到CDN服务上，在访问这些资源时，
    使用CDN服务提供的URL。


// ===========网络优化=========================
静态资源使用 CDN
Gzip资源
小图片base64编码   减少网络请求
配置hash值
开启http2
第三方资源使用cdn--------------
设置http缓存（强缓存和协商缓存，提高加载速度）
设置服务端渲染ssr

DNS 预解析
    DNS 解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的 IP https://interview2.poetries.top/excellent-docs/13-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%A8%A1%E5%9D%97.html#_1-2-%E7%BC%93%E5%AD%98
    //<link rel="dns-prefetch" href="//blog.poetries.top">
预加载 //<link rel="preload" href="http://example.com">
预渲染 //<link rel="prerender" href="http://poetries.com">
使用 HTTP / 2.0

开启gzip
使用浏览器缓存
服务端渲染

预渲染
可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染
{/* <link rel="prerender" href="http://blog.poetries.top"> */}

性能监测篇：Performance、LightHouse 与性能 API

https://juejin.cn/post/6903295387302526990
jsliang 求职系列 - 35 -Webpack 性能优化

你都做过哪些Vue的性能优化？
编码阶段
尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
v-if和v-for不能连用
如果需要使用v-for给每项元素绑定事件时使用事件代理
SPA 页面采用keep-alive缓存组件
在更多的情况下，使用v-if替代v-show
key保证唯一
使用路由懒加载、异步组件
防抖、节流
第三方模块按需导入
长列表滚动到可视区域动态加载
图片懒加载
SEO优化
预渲染
服务端渲染SSR
打包优化
压缩代码
Tree Shaking/Scope Hoisting
使用cdn加载第三方模块
多线程打包happypack
splitChunks抽离公共文件
sourceMap优化
用户体验
骨架屏 draw-page-structure
PWA
还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。
链接：https://juejin.cn/post/6989422484722286600

面试必问：前端性能监控Performance
https://juejin.cn/post/7031572366341701663?utm_source=gold_browser_extension

Vue 项目性能优化 — 实践指南（网上最全 / 详细）
https://juejin.cn/post/6844903913410314247

前端网站常规优化方案 
优化策略：减少请求次数、减小资源大小、提高响应和加载速度、优化资源加载时机、优化加载方式

合并、压缩、混淆html/css/js文件（webpack实现，减小资源大小）
Nginx开启Gzip，进一步压缩资源（减小资源大小）
图片资源使用CDN加速（提高加载速度）
符合条件的图标做base64处理（减小资源大小）
样式表放首部，JS放尾部（JS单线程，会阻塞页面；资源加载方式）
设置缓存（强缓存和协商缓存，提高加载速度）
link或者src添加rel属性，设置prefetch或preload可预加载资源。（加载时机）
如果使用了UI组件库，采用按需加载（减小资源大小）
SPA项目，通过import或者require做路由按需（减小资源大小）
服务端渲染SSR，加快首屏渲染，利于SEO页面使用骨架屏，提高首页加载速度（提高加载速度）
使用 JPEG 2000, JPEG XR, and WebP 的图片格式来代替现有的jpeg和png，当页面图片较多时，这点作用非常明显使用图片懒加载-lazyload
链接：https://juejin.cn/post/6844904142289256461

服务端渲染与客户端渲染 优缺点
https://www.csdn.net/tags/NtzakgwsODExOTMtYmxvZwO0O0OO0O0O.html 

Vue项目性能优化
https://blog.csdn.net/sinat_17775997/article/details/107492421

资源预加载 prefetch/preload
https://interview2.poetries.top/excellent-docs/1-HTML%E6%A8%A1%E5%9D%97.html#_8-%E8%AF%B4%E4%B8%80%E4%B8%8B-web-worker
prefetch：其利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档。<link href="/js/xx.js" rel="prefetch">
preload : 可以指明哪些资源是在页面加载完成后即刻需要的，浏览器在主渲染机制介入前就进行预加载，这一机制使得资源可以更早的得到加载并可用，
且更不易阻塞页面的初步渲染，进而提升性能。 <link href="/js/xxx.js" rel="preload" as="script">需要 as 指定资源类型目前可用的属性类型有如下：


🐢11s到⚡1s，性能优化之首屏加载🚀
https://juejin.cn/post/6949896020788690958