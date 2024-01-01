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


Electron是一款基于Chromium和Node.js的跨平台桌面应用框架，能够使用Web前端技术（HTML、CSS、JavaScript）构建原生桌面应用程序。
以下是Electron的原理和一个简单的使用demo详细：

原理
Electron的设计基于分层架构，分为主进程和渲染进程两部分：

主进程：负责整个应用的生命周期和整个应用的操作，渲染进程与主进程之间通过进程间通信（IPC）进行数据交换。
渲染进程：负责应用界面及渲染，可同时运行多个渲染进程，但仅有一个主进程。
整个框架的核心是Node.js和Chromium，Node.js提供了对原生操作系统的底层访问以及文件和网络I/O的支持，在主进程中运行；而Chromium则提供了浏览器页面的渲染，支持直接调用DOM接口、Web API和各种CSS样式和HTML标签。


electron-vite | 新一代electron开发构建工具
https://juejin.cn/post/7084126780390375461
 
electron-vue3开发桌面应用 
https://www.bilibili.com/video/BV1so4y1X7ny?p=3&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



Electron超详细实战开发教程
https://www.bilibili.com/video/BV1QB4y1F722/?vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
00-最新Electron课程介绍
01-electron介绍与第一个应用
02-使用yarn快速创建electron项目
03-渲染进程的node环境调用
04-实现拖动文件渲染在页面中
05-webview的操控和使用
06-主进程和渲染进程的通讯
07-dialog窗口的配置
08-原生自带网络请求的库
09-electron-vue的环境搭建
10-项目的基本结构和使用
11-electron使用AntdUI组件
12-实现查找书籍功能
13-解决rowKey报错和获取下载链接地址
14-修改Axios实现后端请求
15-优化页面和功能
16-创建books页面和路由
17-解析EPUB文件
18-根据磁盘电子书生成书库列表
19-通过路由传参将书籍内容传递过去
20-电子生成书章节列表
21-获取图片解析到书籍里
22-解析epub的css内容渲染到书籍里
23-修改中文不能搜索bug和打包成软件