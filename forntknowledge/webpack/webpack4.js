webpack原理 https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/vypyf0
一、webpack做了什么
用户使用webpack打包项目，只要写好配置，然后运行webpack，就可以得到打包结果了，webpack会根据配置项自动化构建项目。
因此webpack做的工作可以简单描述为项目 + 配置 => dist。
更进一步，webpack读取配置，根据入口开始遍历文件，解析依赖，使用loader处理各模块，然后将文件打包成bundle后输出到output指定的目录中。
二、webpack构建过程
Webpack CLI 启动打包流程，解析配置项参数；
载入 Webpack 核心模块，创建 Compiler 对象；
注册plugins
使用 Compiler 对象开始编译整个项目；
从入口文件开始，解析模块为AST，分析模块依赖，形成依赖关系树；
递归依赖树，将每个模块交给对应的 Loader 处理；
合并 Loader 处理完的结果，将打包结果输出到 dist 目录。
三、webpack插件机制
Webpack 的插件系统是基于官方自己的 Tapable 库实现的。
Tapable 是一个类似于 Node.js 中的 EventEmitter的库，但更专注于自定义事件的触发和处理，tapable控制钩子函数的发布与订阅，控制着webpack的插件系统，webpack的本质就是一系列的插件运行。
Tapable 中主要提供了同步与异步两种钩子。
四、compiler和compilation
compiler是编译器，控制webpack整个编译流程，compilation则是处理模块，包括调用loader编译模块，模块优化，生成hash，生成chunk等。
除了模块的处理，webpack还有很多其他操作，compiler负责处理初始化，插件注册，输出文件，编译失败处理等等。  


1、初始化阶段 - webpack

合并配置项
创建 compiler
注册插件

2、编译阶段 - build

读取入口文件
从入口文件开始进行编译
调用 loader 对源代码进行转换
借助 babel 解析为 AST 收集依赖模块
递归对依赖模块进行编译操作

3、生成阶段 - seal

创建 chunk 对象
生成 assets 对象

4、写入阶段 - emit

作者：明里人
链接：https://juejin.cn/post/7130999419582971912
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

13 个 Webpack 优化技巧 
https://blog.51cto.com/u_15315508/5590112

webpack4 的30个步骤打造优化到极致的 react 开发环境，如约而至
https://juejin.cn/post/6844903862898262024

loader本质就是一个函数
plugin是插件

webpack中异步加载(懒加载)原理  https://juejin.cn/post/7152516872330543141#heading-1  🔥🔥



webpack热更新原理
什么是webpack热更新
开发过程中，代码发生变动后，webpack会重新编译，编译后浏览器替换修改的模块，局部更新，无需刷新整个页面

原理
通过websocket实现，建立本地服务和浏览器的双向通信，当代码变化，重新编译后，通知浏览器请求更新的模块，替换原有的模块

步骤
通过webpack-dev-server开启server服务，本地server启动之后，再去启动websocket服务，建立本地服务器和浏览器双向通信
webpack每次编译后，会生成一个hash值，hash代表每一次编译的表示，作为下一次热更新的表示
webpack监听文件（通过文件的生成时间判断是否变化），当文件变化后，重新编译
编译结束后，通知浏览器请求变化的资源，同时将新生成的hash值传给浏览器，用于下次热更新使用
浏览器拿到更新的模块后，用新模块替换旧的模块，实现局部刷新
链接：https://juejin.cn/post/7156512771348103181


webpack环境变量在项目中的使用 https://juejin.cn/post/7189238123459510309

自用前端工程化面试题 全
https://juejin.cn/post/7198176378918830139


Tree Shaking
https://fe.ecool.fun/topic/a2580d1e-90e9-48bc-b93c-247425fb3e5f?orderBy=updateTime&order=desc&tagId=28
Tree Shaking 是一个术语，在计算机中表示消除死代码，依赖于ES Module的静态语法分析（不执行任何的代码，可以明确知道模块的依赖关系）

在webpack实现Trss shaking有两种不同的方案：

usedExports：通过标记某些函数是否被使用，之后通过Terser来进行优化的
sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用


说说webpack proxy工作原理？为什么能解决跨域?
proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器
举个例子：
在开发阶段，本地地址为http://localhost:3000，该浏览器发送一个前缀带有/api标识的请求到服务端获取数据，但响应这个请求的服务器只是将请求转发到另一台服务器中
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar


工程化面试题汇总https://juejin.cn/post/7206973995727765559

62. webpack的热更新
主要依赖webpack, express, websocket

使用express启动本地服务，当浏览器访问的时候做出相应
服务端和客户端使用websocket实现长连接
webpack监听源文件的变化
每次编译完成之后会生成hash值，已改动模块的json文件，已改动模块代码的js文件
编译完成后通过socket向客户端推送当前编译的hash值

客户端的websocket监听到有文件改动推送过来的hash值，会和上一次进行对比
一致就走缓存
不一致则通过ajax和jsonp获取最新的资源
使用内存文件系统去替换有修改的内容实现局部更新
链接：https://juejin.cn/post/6844904078288355341


回顾webpack在vue.config.js中写loader和plugin
https://juejin.cn/post/7208823936301826107#heading-21


webpack 热更新机制
热更新流程总结:
启动本地server，让浏览器可以请求本地的静态资源
页面首次打开后，服务端与客户端通过 websocket建立通信渠道，把下一次的 hash 返回前端
客户端获取到hash，这个hash将作为下一次请求服务端 hot-update.js 和 hot-update.json的hash
修改页面代码后，Webpack 监听到文件修改后，开始编译，编译完成后，发送 build 消息给客户端
客户端获取到hash，成功后客户端构造hot-update.js script链接，然后插入主文档
hot-update.js 插入成功后，执行hotAPI 的 createRecord 和 reload方法，获取到 Vue 组件的 render方法，重新 render 组件， 继而实现 UI 无刷新更新。

链接：https://juejin.cn/post/6991724298197008421


webpack性能优化方案(详细)
https://juejin.cn/post/7233298696292040741?utm_source=gold_browser_extension

3.去除多余的样式
随着项目越来越大，书写的不注意，不自然的就会产生一些多余的css，小项目还好，一旦项目大了以后，多余的css会越来越多，导致包越来越大，从而影响项目运行性能，所以有必要在正式环境去除掉这些多余的css，这里推荐一个库purgecss，支持CLI、JavascriptApi、Webpack等多种方式使用，通过这个库，我们可以很容易的去除掉多余的css。
javascript复制代码npm i glob-all purify-css purifycss-webpack --save-dev
 
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
plugins:[
    // 清除无用 css
    new PurifyCSS({
      paths: glob.sync([
        // 要做 CSS Tree Shaking 的路径文件
        path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
        path.resolve(__dirname, './src/*.js')
      ])
    })
]
链接：https://juejin.cn/post/6844903949883932679



常用的webpack10个优化技巧
https://juejin.cn/post/7288990479512748072?utm_source=gold_browser_extension