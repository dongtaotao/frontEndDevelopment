electron 使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序  https://www.electronjs.org/

Electron 基于 Chromium 和 Node.js, 让你可以使用 HTML, CSS 和 JavaScript 构建应用。

基于node.js和chromium， 
跨平台-兼容mac windows，linux 
 
开发electron
需要html，js， css基础
深入浅出node.js
浏览器工作原理
electron Api应用

包括
主进程渲染进程
进程间通信

渲染进程： 用户所看到的web界面就是由渲染进程描绘出来的，

Electron是有github开发，用html，css和js来构建跨平台桌面应用程序的一个开源库，electron通过chromium和node.js合并到同一个运行时环境中，
并将其打包为Mac，window和linux系统下的应用来实现着一目的


Electron两小时轻松实现桌面应用_结合react和vue，免费实战开发视频前端web教程
https://www.bilibili.com/video/BV1Wo4y1X7cg?spm_id_from=333.337.search-card.all.click 

Electron-HTML+CSS+JS构建跨平台桌面应用程序教程
https://www.bilibili.com/video/BV147411v7vN?p=2&spm_id_from=pageDriver

Electron与react集成
Electron与vue集成
https://www.bilibili.com/video/BV147411v7vN?p=17&spm_id_from=pageDriver
https://www.bilibili.com/video/BV147411v7vN?p=16

如何从零开始搭建一套Electron+Vue3+Vite2+Ts的桌面客户端开发框架
https://juejin.cn/post/7201195953691983927?




Electron是一款基于Chromium和Node.js的跨平台桌面应用框架，能够使用Web前端技术（HTML、CSS、JavaScript）构建原生桌面应用程序。以下是Electron的原理和一个简单的使用demo详细：

原理
Electron的设计基于分层架构，分为主进程和渲染进程两部分：

主进程：负责整个应用的生命周期和整个应用的操作，渲染进程与主进程之间通过进程间通信（IPC）进行数据交换。
渲染进程：负责应用界面及渲染，可同时运行多个渲染进程，但仅有一个主进程。
整个框架的核心是Node.js和Chromium，Node.js提供了对原生操作系统的底层访问以及文件和网络I/O的支持，在主进程中运行；而Chromium则提供了浏览器页面的渲染，支持直接调用DOM接口、Web API和各种CSS样式和HTML标签。



electron-vite | 新一代electron开发构建工具
https://juejin.cn/post/7084126780390375461