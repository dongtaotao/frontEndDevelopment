每个前端都必须要学会的Webpack优化手段
https://juejin.cn/post/7083519723484708878

打包的3种hash值你知道吗？当年我校招时被这题难倒了！
https://juejin.cn/post/7060688758370205733

webpack源码分析
https://juejin.cn/column/7004269262806188069


当面试官问Webpack的时候他想知道什么 ************************
https://juejin.cn/post/6943468761575849992?utm_source=gold_browser_extension 
https://webpack.js.org/api/compiler-hooks/

90 行代码的 webpack，你确定不学吗？
https://mp.weixin.qq.com/s/vpQq3FcJuQkKXvxsq8c9Bw

玩转 webpack，使你的打包速度提升 90%
https://juejin.cn/post/6844904071736852487

窥探原理：手写一个 JavaScript 打包器 *****************************
https://juejin.cn/post/6844904032587382797

4. 说一下 Webpack 的热更新原理(必会)
​	webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
​    HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，
实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，
WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。
客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，
这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。

链接：https://juejin.cn/post/7077870547358449677

总结几个webpack打包优化的方法
https://juejin.cn/post/6844904004825120782


一份不可多得的 Webpack 学习指南（1万字长文带你入门 Webpack 并掌握常用的进阶配置） ******************
https://juejin.cn/post/7068256695620730910#heading-20
自定义 Loader
自定义一个 Plugin
首先明确最基本的，编写 plugin 其实就是编写一个类并暴露出去给 Webpack 在打包的某个生命周期进行相关操作。

例如编写一个 copyright-webpack-plugin
// copyright-webpack-plugin.js  我定义该文件位于根目录的 plugins 文件夹下
​
class CopyrightWebpackPlugin {
    constructor() {
        console.log('插件被使用了')
    }
    
    apply(compiler) {
    
    }
}
​
module.exports = CopyrightWebpackPlugin;

// webpack.config.js
​
const path = require('path');
const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin');
​
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    plugins: [
        new CopyRightWebpackPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
} 


webpack详解&HMR
https://juejin.cn/post/7084161722960838693


Tree Shaking 指基于 ES Module 进行静态分析，通过 AST 将用不到的函数进行移除，从而减小打包体积。

core-js (opens new window)是关于 ES 标准最出名的 polyfill，polyfill 意指当浏览器不支持某一最新 API 时，它将帮你实现，中文叫做垫片。你也许每天都与它打交道，但你毫不知情。

Browserslist 用于配置项目适用的目标浏览器

301应用场景: 域名到期不想继续用这个,换了地址
302应用场景: 做活动时候,从首页跳到活动页面,


基本概念

webpack是一个静态资源模块化打包工具

静态资源指css|js|imgs(jpg|png|gif|webp...)|medio(fonts|mp4|mp3...)
模块化指webpack会将每个入口引入的资源作为单独的模块进行打包
打包指将我们本地开发环境的各种资源通过webpack的各种loader处理转换成浏览器可识别的资源，当然绝大部分我们还需要很多webpack的plugin参与进来


webpack总体分为四个模块
entry
打包的入口文件，可以单入口，也可以多入口。一切在入口文件中引入的资源都会被webpack打包

output
webpack打包之后输出的文件目录，可以单目录也可以多目录

module
主要是用来配置各种loader，loader是webpack的翻译官，负责将webpack不认识的资源转化成webpack认识的资源（webpack只认识js和json，可想而知loader们有多么重要）

plugins
用于拓展webpack打包过程中的其他功能，比如集成,压缩,优化等
综上，我们得知了webpack其实就是一个大的node包，这个node包做了什么事情呢？
他将我们在开发过程中引入的各种小包（包括我们自己的工具包、资源包，也包括我们又引入的其他node包）通过构建编译成一个浏览器可以正常识别的资源包

作者：我是小阵不悲催
链接：https://juejin.cn/post/7085961358507769869
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


webpack的异步加载原理及分包策略 **********************************************************************
https://juejin.cn/post/6895546761255845901
require.ensure 异步加载
import() 按需加载

从零开始构建一个webpack项目
https://juejin.cn/post/6844904005286494215


手撸loader和plugin全解析
https://juejin.cn/post/6844903891180453901


前端工程化：WebPack https://juejin.cn/post/7086661405683744782  *********************************8

css-loader只是帮我们解析了css文件里面的css代码，想要应用样式我们要把解析完的css代码拿出来加入到style标签中。
style-loader就是帮我们直接将css-loader解析后的内容挂载到html页面当中


我用webpack把公司的老项目做了下优化
https://juejin.cn/post/7072012773730811941

前端面试题整理——webpack相关考点
https://www.cnblogs.com/MarsPGY/p/15973411.html?utm_source=tuicool&utm_medium=referral

compiler和compilation https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/vypyf0
compiler是编译器，控制webpack整个编译流程，compilation则是处理模块，包括调用loader编译模块，模块优化，生成hash，生成chunk等。
除了模块的处理，webpack还有很多其他操作，compiler负责处理初始化，插件注册，输出文件，编译失败处理等等。


使用webpack构建项目时候，有两种方法可以实现动态加载：require.ensure和import()
https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/to1m2y

require.ensure
require.ensure是webpack提供的用于动态加载的API，目前不推荐使用，可以用动态import代替。

import()
import进行动态加载是ECMAScript的新提案，虽然还没有被ECMA委员会批准，但是webpack已经开始用了。
import('./asyncModule').then(({default}) => console.log('module: ', default));
import接收一个字符串参数，代表模块路径，返回一个promise，异步加载成功后，这个promise会resolve一个对象，对象的default属性就是模块。

webpack是如何实现动态导入的 *************************************************************************
https://juejin.cn/post/6844903888319954952
在单页应用中，经常使用 webpack 的 动态导入 功能来异步加载模块，从而减少部分文件的体积。
我们可以通过webpack 提供的 import() 和 require.ensure 两个 API 来使用该功能。
由于两个方法根本实现都是相同的，本文的示例都基于 import() 方法。


如何编写一个 Webpack Plugin
https://segmentfault.com/a/1190000037513682

如何编写一个 Webpack Loader
https://juejin.cn/post/6882895689773383694


一看就会的代码分离优化首屏加载
https://juejin.cn/post/7092714465631666212

从基础到实战 手摸手带你掌握新版Webpack4.0详解 一起读文档  **********
https://juejin.cn/post/6844903821408206855

webpack5全套教程，全网最完整的webpack教程（基础+高级）
https://www.bilibili.com/video/BV1YU4y1g745?spm_id_from=333.337.search-card.all.click