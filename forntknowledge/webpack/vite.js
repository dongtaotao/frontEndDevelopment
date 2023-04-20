vite 学习笔记
https://juejin.cn/post/6942018783007473695 

Vite工作原理和手写实现「基本完结」
https://www.bilibili.com/video/BV1dh411S7Vz?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

Vite零基础快速入门 https://www.imooc.com/learn/1315 **************************************************

vite简介、原理及简单实现 https://blog.csdn.net/qq_34425377/article/details/120906771 介绍一下 vite

Vite工作原理和手写实现「基本完结」*******************
https://www.bilibili.com/video/BV1dh411S7Vz?p=1

1-2 什么是 Vite
https://www.bilibili.com/video/BV1DS4y137xT/?spm_id_from=333.788


介绍一下 vite
为什么 Vite 启动这么快
Webpack 会 先打包 ，然后启动开发服务器，请求服务器时直接给予打包结果。
而 Vite 是 直接启动 开发服务器，请求哪个模块再对该模块进行 实时编译 。
Vite 将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像 Webpack 那样进行 打包合并 。
由于 Vite 在启动的时候 不需要打包 ，也就意味着 不需要分析模块的依赖 、 不需要编译 。因此启动速度非常快。当浏览器请求某个模块时
再根据需要对模块内容进行编译

Vite是什么？
Vite是一个由原生ES Module 驱动的Web开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，
在生产环境下基于 Rollup 打包。

Vite概念及设计思想 https://www.imooc.com/video/23528 
Vite 快速的， 是一种新型前端构建工具，能够显著提升前端开发体验。 下一代前端开发与构建工具 
Vite由两个部分组成
1.一套开发服务，服务预开发环境，ESM+HMR;
2.一套构建指令，服务于生产环境，用Rollup打包 

Vite 的特点
快速的冷启动
即时的模块热更新
真正的按需编译 

Vite 到底是什么。主要原因可能是它主要包括两个部分，一个基于 ESM 的利用 esbuild 的开发服务器，另一个部分是基于 Rollup 的配置化的打包器。

优点
1.不需要打包， type = Module 
2.按需加载

Vite和webpack有什么区别⭐⭐⭐⭐

webpack是node编写的，而vite是采用Go语言编写，更接近机器码，而且使用esbuild预购建依赖，打包会比之前快10～100倍
热更新的时候，webpack需要重新构建整个包；而vite只需构建修改了的模块，而且vite使用了浏览器缓存来加速构建
vite的生态没有webpack丰富，webpack的plugin和loader相当的丰富
原文链接：https://blog.csdn.net/qq_33277654/article/details/122924692 

为什么 Vite 启动这么快
Webpack 会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。
而 Vite 是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
Vite 将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像 Webpack 那样进行打包合并。
由于 Vite 在启动的时候是通过esbuild方式进行EsModel原生引入浏览器且按需更新。也就意味着不需要分析模块的依赖、不需要编译。因此启动速度非常快。
当浏览器请求某个模块时，再根据需要对模块内容进行编译。
链接：https://juejin.cn/post/6991724298197008421

Vite 的使用限制如下：
面向支持 ES6 的现代浏览器，在生产环境下，编译目标参数 esBuildTarget 的默认值为 es2019，最低支持版本为 es2015（因为内部会使用 esbuild 处理编译压缩，
用来获得最快的构建速度）。
对 Vue 框架的支持目前仅限于最新的 Vue 3 版本，不兼容更低版本。


无包构建的优点
https://kaiwu.lagou.com/course/courseInfo.htm?courseId=416#/detail/pc?id=4430
无包构建的最大优势在于构建速度快，尤其是启动服务的初次构建速度要比目前主流的打包构建工具要快很多，原因如下：
初次构建启动快
按需编译
增量构建速度快

无包构建的缺点
浏览器网络请求数量剧增：
浏览器的兼容性：


vite工程创建和工程原理解析 
https://www.bilibili.com/video/BV1Wh411X7Xp?p=25&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

你要选 Vite 还是 Webpack ？
https://juejin.cn/post/7106136866381889573

什么是 Vite？
https://blog.csdn.net/huangpb123/article/details/123313589

什么是 Vite https://juejin.cn/post/7166446028266733581#heading-10
Vite是新一代的前端构建工具
Vite 核心原理

Vite其核心原理是利用浏览器现在已经支持ES6的import，碰见import就会发送一个HTTP请求去加载文件。
Vite启动一个 koa 服务器拦截这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再以ESM格式返回给浏览器。
Vite整个过程中没有对文件进行打包编译，做到了真正的按需加载，所以其运行速度比原始的webpack开发编译速度快出许多！

它具有以下特点：

快速的冷启动：采用No Bundle和esbuild预构建，速度远快于Webpack
高效的热更新：基于ESM实现，同时利用HTTP头来加速整个页面的重新加载，增加缓存策略：源码模块使用协商缓存，依赖模块使用强缓；因此一旦被缓存它们将不需要再次请求。
基于 Rollup 打包：生产环境下由于esbuild对css和代码分割并使用Rollup进行打包；

基于 ESM 的 Dev server

在Vite出来之前，传统的打包工具如Webpack是先解析依赖、打包构建再启动开发服务器，Dev Server 必须等待所有模块构建完成后才能启动，当我们修改了 bundle模块中的一个子模块， 整个 bundle 文件都会重新打包然后输出。项目应用越大，启动时间越长。

而Vite利用浏览器对ESM的支持，当 import 模块时，浏览器就会下载被导入的模块。先启动开发服务器，当代码执行到模块加载时再请求对应模块的文件，本质上实现了动态加载。

基于 ESM 的 HMR 热更新
所有的 HMR 原理：
目前所有的打包工具实现热更新的思路都大同小异：主要是通过WebSocket创建浏览器和服务器的通信监听文件的改变，当文件被修改时，服务端发送消息通知客户端修改相应的代码，客户端对应不同的文件进行不同的操作的更新。
Vite 的表现：

Vite 监听文件系统的变更，只用对发生变更的模块重新加载，这样HMR 更新速度就不会因为应用体积的增加而变慢

而 Webpack 还要经历一次打包构建。

所以 HMR 场景下，Vite 表现也要好于 Webpack。

基于 Esbuild 的依赖预编译优化
Vite预编译之后，将文件缓存在node_modules/.vite/文件夹下
为什么需要预编译 & 预构建

支持 非ESM 格式的依赖包：Vite是基于浏览器原生支持ESM的能力实现的，因此必须将commonJs的文件提前处理，转化成 ESM 模块并缓存入 node_modules/.vite
减少模块和请求数量：Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能。

如果不使用esbuild进行预构建，浏览器每检测到一个import语句就会向服务器发送一个请求，如果一个三方包被分割成很多的文件，这样就会发送很多请求，会触发浏览器并发请求限制；

为什么用 Esbuild
Esbuild 打包速度太快了，比类似的工具快10~100倍，
Esbuild 为什么这么快

Esbuild 使用 Go 语言编写，可以直接被转化为机器语言，在启动时直接执行；

而其余大多数的打包工具基于 JS 实现，是解释型语言，需要边运行边解释；

JS 本质上是单线程语言，GO语言天生具有多线程的优势，充分利用 CPU 资源；

链接：https://juejin.cn/post/7166446028266733581


Vite 和Webpack的区别

都是现代化打包工具
启动方式不一样。vite在启动的时候不需要打包，所以不用分析模块与模块之间的依赖关系，不用进行编译。这种方式就类似于我们在使用某个UI框架的时候，可以对其进行按需加载。同样的，vite也是这种机制，当浏览器请求某个模块时，再根据需要对模块内容进行编译。按需动态编译可以缩减编译时间，当项目越复杂，模块越多的情况下，vite明显优于webpack.
热更新方面，效率更高。当改动了某个模块的时候，也只用让浏览器重新请求该模块，不需要像webpack那样将模块以及模块依赖的模块全部编译一次。
缺点
vite相关生态没有webpack完善，vite可以作为开发的辅助。
链接：https://juejin.cn/post/7160962909332307981

Vite原理分析
https://www.bilibili.com/video/BV1bT4y1C7Rp/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

漫谈构建工具(三):关于常用构建工具的一些总结(面试可用，建议收藏)
https://juejin.cn/post/7125753214489591821
为什么有人说 vite 快，有人却说 vite 慢？
https://juejin.cn/post/7129041114174062628
常用构建工具的实践总结及原理分析 🔥
https://juejin.cn/column/7139812497414389773 


你还不会写 vite 插件吗？没关系，我教你啊！
https://juejin.cn/post/7103165205483356168

vite工程化实践，建议收藏
https://juejin.cn/post/6910014283707318279

十八.vite之插件实现篇
https://juejin.cn/post/7210278786592292920? 


📢 面试官快问快答：webpack VS vite
https://juejin.cn/post/7219567168316276796?
目录
1、核心理念 — bundle与否
2、首屏、懒加载性能
3、服务启动速度
3、热更新速度
4、prod环境打包区别
5、生态成熟度
总结
混乱是进步的阶梯 —— ESM规范的崛起【上】
如果能重来，你要选 Vite 还是 Webpack ？
【打包工具】- Vite 和 webpack 原理、优缺点对比
vite 相比webpack的优缺点
Vite和Webpack 优缺点对比
Vite 的好与坏
Vite和Webpack综合对比

链接：https://juejin.cn/post/7219567168316276796

Vite 核心原理
Vite其核心原理是利用浏览器现在已经支持ES6的import，碰见import就会发送一个HTTP请求去加载文件。
Vite启动一个 koa 服务器拦截这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再以ESM格式返回给浏览器。
Vite整个过程中没有对文件进行打包编译，做到了真正的按需加载，所以其运行速度比原始的webpack开发编译速度快出许多！

它具有以下特点：

快速的冷启动：采用No Bundle和esbuild预构建，速度远快于Webpack
高效的热更新：基于ESM实现，同时利用HTTP头来加速整个页面的重新加载，增加缓存策略：源码模块使用协商缓存，依赖模块使用强缓；因此一旦被缓存它们将不需要再次请求。
基于 Rollup 打包：生产环境下由于esbuild对css和代码分割并使用Rollup进行打包；
链接：https://juejin.cn/post/7166446028266733581
