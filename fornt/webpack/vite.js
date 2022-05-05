
vite 学习笔记
https://juejin.cn/post/6942018783007473695

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
Vite(读音类似于[weɪt]，法语，快的意思) 是一个由原生 ES Module 驱动的
Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，
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

有点
1.不需要打包， type = Module 
2.按需加在


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

作者：几米阳光
链接：https://juejin.cn/post/6991724298197008421
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




Vite 的使用限制
Vite 的使用限制如下：

面向支持 ES6 的现代浏览器，在生产环境下，编译目标参数 esBuildTarget 的默认值为 es2019，最低支持版本为 es2015（因为内部会使用 esbuild 处理编译压缩，用来获得最快的构建速度）。

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