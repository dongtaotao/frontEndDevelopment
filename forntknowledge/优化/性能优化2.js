react性能优化思路 
- 减少重新render的次数
- 减少渲染的节点

- 降低渲染计算量
- 合理设计组件

react=====

1.路由懒加载  react-loadable https://blog.csdn.net/homexs/article/details/115033308
2.组件异步加载 延迟加载不是立即需要的组件 React.Lazy和React.Suspense
3.使用shouldComponentUpdate ,PureComponent 和 React.memo , React.useMemo,  React.useCallback， immetable.js以避免不必要的render
4.避免频繁地去setState，多个setState合并成一个 合并状态更新 避免重复渲染 
5.虚拟列表 长列表优化  虚拟化长列表：只加载可视范围内的数据   react-virtualized  react-window
6.如果页面图片比较多，使用react-lazyload插件 图片懒加载, 图片上云 cdn
7.学会使用redux数据共享
8.不可变数据-immutable
9.使用React.Fragment避免添加额外的DOM 使用 React.Fragment 避免多层嵌套
11.异常捕获边界（Error Boundaries） getDerivedStateFromError componentDidCatch
10.避免使用匿名函数,避免每次函数都是新的实例导致组件渲染
14.key优化 防止用index做key 用唯一id作为key
15.减少组件嵌套 有很多种方式来代替高阶组件/RenderProps，例如优先使用 props、React Hooks.
16.合理使用Context Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。正是因为其这个特点它是可以穿透 
   React.memo或者shouldComponentUpdate的比对的，也就是说，一旦 Context 的 Value 变动，所有依赖该 Context 的组件会全部
17.尽量少用不可控的refs、DOM操作。
19.合理的组件分类，UI组件和容器组件
21.在合适的时机使用防抖节流debounce、throttle 优化频繁触发的回调

Webpack 的优化瓶颈，主要是 2 个方面：
https://juejin.cn/post/6903295387302526990
Webpack 的构建过程太花时间  优化打包构建速度—开发体验和效率
Webpack 打包的结果体积太大  优化产出代码—产品性能

1.减小文件搜索范围 合理利用resolve 字段配置
    优化 resolve.modules 配置  直接指定项目根目录
    使用resolve.extensions ，减少文件查找
    使用别名 resolve.alias 可以通过别名的方式来映射一个路径，能让Webpack更快找到路径。
    通过exclude、include 缩小搜索范围
    开启缓存 cache-loader 在 babel-loader 开启 cache 后，将 loader 的编译结果写进硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。
2.多进程编译文件 HappyPack(不维护了)thread-loader

3.提取公共代码 CommonsChunkPlugin
4.多进程代码压缩 （开启多进程压缩JS文件）
5.代码分割 SplitChunksPlugin  拆包 合理分包，不重复加载
6.打包资源压缩
7.按需加载 code-spliting: 代码分割技术，将代码分割成多份进行 懒加载 或 异步加载，避免打包成一份后导致体积过大，影响页面的首屏加载；
8.开启模块热替换提高开发效率
9.Scope Hoisting作用域提升 scope hoisting: 作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；
10.tree Shaking 删除冗余代码
11.在配置文件中区分 mode 配置开发环境与生产环境 （拆分配置和merge）   区分环境--减小生产环境代码体积
13.抽离css文件 ExtractTextPlugin 将 CSS 分离成单独的文件
14.第三方模块按需导入
15.使用CDN加速  外部引入模块(CDN) <script src="//cdn.bootcss.com/autotrack/2.4.1/autotrack.js"></script>
16.sourceMap提高调试体验 提供一种到构建后代码映射技术，如果构建后代码报错，可以通过映射追踪到源代码。

1.小图片base64编码
2.bundle加hash

利用cdn加速， 在构建过程中将引用的静态资源路径修改为CDN上对应的路径


1.构建速度https://juejin.cn/post/7023242274876162084#heading-23 **********
1.构建费时分析 speed-measure-webpack-plugin
2.优化 resolve 配置
   alias extensions modules
3.缩小范围  在配置 loader 的时候，我们需要更精确的去指定 loader 的作用目录或者需要排除的目录，通过使用 include 和 exclude 两个配置项
    noParse
    不需要解析依赖的第三方大型类库等，可以通过这个字段进行配置，以提高构建速度
    使用 noParse 进行忽略的模块文件中不会解析 import、require 等语法
    IgnorePlugin
4.多进程配置  thread-loader happypack ❌ 同样为开启多进程打包的工具，webpack5 已弃用。
5.利用缓存 babel-loader 开启缓存  cache-loader 
6.开启多进程压缩
7.开启模块热替换提高开发效率

2. 优化构建结果
2.1 构建结果分析 webpack-bundle-analyzer
2.2 压缩 CSS optimize-css-assets-webpack-plugin 
2.3 压缩 JS 因为 webpack5 内置了terser-webpack-plugin 插件，所以我们不需重复安装，直接引用就可以了
2.4 清除无用的 CSS purgecss-webpack-plugin 会单独提取 CSS 并清除用不到的 CSS
2.5 Tree-shaking  Tree-shaking 作用是剔除没有使用的代码，以降低包的体积
2.6 Scope Hoisting
    Scope Hoisting 即作用域提升，原理是将多个模块放在同一个作用域下，并重命名防止命名冲突，通过这种方式可以减少函数声明和内存开销。
    webpack 默认支持，在生产环境下默认开启
    只支持 es6 代码
2.7抽离css文件 ExtractTextPlugin 将 CSS 分离成单独的文件
2.8在配置文件中区分 mode 配置开发环境与生产环境 （拆分配置和merge）   区分环境--减小生产环境代码体积
2.9sourceMap提高调试体验 提供一种到构建后代码映射技术，如果构建后代码报错，可以通过映射追踪到源代码。

3. 优化运行时体验
运行时优化的核心就是提升首屏的加载速度，主要的方式就是

降低首屏加载文件体积，首屏不需要的文件进行预加载或者按需加载
3.1 入口点分割 配置多个打包入口，多页打包，这里不过多介绍
3.2 splitChunks 分包配置
3.3 代码懒加载
3.4 prefetch 与 preload

预加载 preload
preload和prefetch

preload资源在当前页面使用，会优先加载
prefetch 资源在未来页面使用，空闲时加载
<link rel="preload" href="https://fonts.gstatic.com/s/longcang/v5/LYjAdGP8kkgoTec8zkRgqHAtXN-dRp6ohF_hzzTtOcBgYoCKmPpHHEBiM6LIGv3EnKLjtw.119.woff2" as="font" crossorigin="anonymous"/> 
链接：https://juejin.cn/post/6911472693405548557

前端性能优化常见方法 https://juejin.cn/post/6931157334508961799

Vue 项目性能优化 — 实践指南（网上最全 / 详细）
https://juejin.cn/post/6844903913410314247


网络层面优化， https://juejin.cn/post/6979172700254109709

网站设置成http2，通过nginx可以配置，适用http2的新特性，多路复用，二进制传输，头部压缩，服务端推送等  更快的传输: http2
Nginx开启Gzip，进一步压缩资源（减小资源大小）
服务端渲染SSR，加快首屏渲染，利于SEO页面使用骨架屏，提高首页加载速度（提高加载速度）
   link或者src添加rel属性，设置prefetch或preload可预加载资源。（加载时机）
使用CDN  更快的传输: CDN
合理设置：浏览器缓存 强缓存，协商缓存

Web Worker

聊一聊前端性能优化
https://juejin.cn/post/6911472693405548557

.cdn引入公共库
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="https://cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>

Vue项目性能优化实操,从50分到80分
https://juejin.cn/post/7101560677688410125  

当面试官问我前端可以做的性能优化有哪些
https://juejin.cn/post/7194400984490049573?
前端优化大概可以有以下几个方向：

网络优化
页面渲染优化
JS优化
图片优化
webpack打包优化
React优化
Vue优化

关于首屏优化，我做了哪些
https://juejin.cn/post/7117515006714839047


前端面试相关：性能优化篇
https://juejin.cn/post/7206540113571758136?
1. 减少HTTP请求
2. 使用浏览器缓存
3. 使用LocalStorage
4. 使用CDN
CDN预解析（CDN Prefetching）
5. 使用预加载和懒加载
6. 使用防抖和节流
7. 压缩和优化图片
8. 使用Webpack和Babel
9. 使用Web Workers
10. 减少重排和重绘
11. 使用Chrome DevTools进行性能优化
12. 总结

5000字总结面试常问前端项目优化究竟怎么来做？
https://juejin.cn/post/7214880895093735479?

前端性能实践总结-图片过大+视频加载缓慢
https://juejin.cn/post/7221830072985976893?
npm i yx-tiny -D 


5 scope Hoisting
scope Hoisting的作用是分析模块之前的依赖关系 ， 把打包之后的公共模块合到同一个函数中去。它会代码体积更小，因为函数申明语句会产生大量代码；代码在运行时因为创建的函数作用域更少了，内存开销也随之变小。
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

module.exports = {
 resolve: {
   // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
   mainFields: ['jsnext:main', 'browser', 'main']
 },
 plugins: [
   // 开启 Scope Hoisting
   new ModuleConcatenationPlugin(),
 ],
};
链接：https://juejin.cn/post/6871024909674364942


前端性能优化知识梳理(29种优化方案+13种定位方式)
https://juejin.cn/post/7222862599850557497?

2023 前端性能优化清单
https://juejin.cn/post/7214026775142760505
前言 🎉
一、页面渲染 🌈
1. 减少页面重绘(repaint)和回流(reflow)
2. 图片压缩，图片分割，精灵图
3. 字体包压缩
4. 懒加载/预加载资源
二、打包优化 🌞
1. webpack优化resolve.alias配置（vite同理）
2. webpack优化resolve.extensions配置（vite同理）
3. webpack缩小loader范围
4. split chunks代码分包
5. tree shaking
6. vite关闭一些打包配置项()
三、总体优化 🌻
1. SSR服务端渲染
2. 开启 gzip 压缩
3. Brotli 算法压缩
4. 缓存
5. Ajax可缓存
6. 组件按需引入
7. 动态加载
8. 组件异步加载
9. 路由懒加载
10. CDN内容分发
11. 域名发散（域名收敛）
12. DNS预解析
13. web worker



webpack 性能优化 
https://juejin.cn/post/7252569524029227069?utm_source=gold_browser_extension
前言
构建时间优化
缩小范围
文件后缀
别名
缓存
并行构建
定向查找第三方模块
构建结果优化
压缩代码
压缩 js
压缩 css
压缩 html
压缩图片
按需加载
prload、prefetch
代码分割
tree shaking
gzip
作用域提升 
最后


低代码的前端性能优化
https://juejin.cn/post/7268173090915549238?utm_source=gold_browser_extension



【前端工程化-性能优化】性能优化系列之用户体验（概要篇）
https://juejin.cn/post/7306800304250437644
【前端工程化-性能优化】性能优化系列之用户体验（概要篇）
【前端工程化-性能优化】性能优化系列之用户体验的问题分析与定位
【前端工程化-性能优化】性能优化系列之用户体验的优化方案（网络层面）
【前端工程化-性能优化】性能优化系列之用户体验的优化方案（渲染层面）
【前端工程化-性能优化】性能优化系列之用户体验的应用案例

链接：https://juejin.cn/post/7315846848459440165




Web极致性能优化指南 
https://juejin.cn/post/7338614904393367603?utm_source=gold_browser_extension