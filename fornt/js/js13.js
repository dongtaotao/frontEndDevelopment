《前端那些事》聊聊前端的按需加载 好文章
https://juejin.cn/post/6844904166586843149

聊聊前端开发日常的协作工具（全）
https://juejin.cn/post/6844904176330375181

面试官：vue项目本地开发完成后部署到服务器后报404是什么原因呢？
https://vue3js.cn/interview/vue/404.html#%E4%B8%80%E3%80%81%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2
为什么hash模式下没有问题
router hash 模式我们都知道是用符号#表示的，如 website.com/#/login, hash 的值为 #/login
它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对服务端完全没有影响，因此改变 hash 不会重新加载页面
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 website.com/#/login 只有 website.com 会被包含在请求中 ，因此对于服务端来说，
即使没有配置location，也不会返回404错误

H5如何实现唤起APP
URL Scheme（通用）
Universal Link （iOS）
App Link、Chrome Intents（android）
https://juejin.cn/post/7097784616961966094

手把手教前端从0到1通过 Node + Express 开发简易接口，项目开发+部署服务器
https://juejin.cn/post/7097831496550973454

聊一聊桥接（JSBridge）的原理
https://juejin.cn/post/6940242236701409287

Vue与React的区别和优势对比
https://www.jb51.net/article/202405.htm

扫码登录的原理你真的了解吗？
https://juejin.cn/post/7089575174537740296

如何做Antd Upload单个图片的校验和上传？
https://juejin.cn/post/6977266040803852301#heading-7

VUE+NodeJS 实现大文件上传
https://juejin.cn/post/7098749140548452365

node+koa+axios实现一个简单的图片上传和回显功能
https://juejin.cn/post/7098716021048999972

大文件上传 Vue完整代码（切片上传、秒传、断点续传）
https://juejin.cn/post/7099362510532247589

前端大文件上传，即以流的方式上传
https://juejin.cn/post/7099098828187385886

一个简单打包器打包实现
https://juejin.cn/post/7098704112803381256

抛弃 npm/yarn，拥抱 pnpm
https://juejin.cn/post/7098637533646422024

低代码漫谈
https://juejin.cn/column/7096011804651831333

LowCode 低代码
https://juejin.cn/column/7087083299885023239

React - 优化长列表
手写
https://juejin.cn/post/6972172870164152333

Redux 技术分享
https://juejin.cn/post/6978111642970259487

babel-plugin-import 使用
https://juejin.cn/post/7051206427402043423

移动 H5 唤起 APP
https://juejin.cn/post/7077520049963008013

观察者模式和发布订阅者模式
https://juejin.cn/post/7087346429311598622

Koa的洋葱模型到底是什么？
https://juejin.cn/post/7086243900775464996

6.什么是函数式编程
函数式编程是声明式编程的一部分。javascript中的函数是第一类公民，这意味着函数是数据，你可以像保存变量一样在应用程序中保存、检索和传递这些函数。
函数式编程有些核心的概念，如下：
不可变性(Immutability)
纯函数(Pure Functions)
数据转换(Data Transformations)
高阶函数 (Higher-Order Functions)
递归
组合
链接：https://juejin.cn/post/7083050992471638052

compression-webpack-plugin
可以配置gizp压缩

rem文件的导入问题：
我们在做手机端时，适配是必须要处理的一个问题。例如，我们处理适配的方案就是通过写一个rem.js，原理很简单，就是根据网页尺寸计算html的font-size大小，
基本上小伙伴们都知道，这里直接附上代码，不多做介绍。;
(function(c,d){var e=document.documentElement||document.body,a="orientationchange" in window?"orientationchange":"resize",b=function(){var f=e.clientWidth;e.style.fontSize=(f>=750)?"100px":100*(f/750)+"px"};b();c.addEventListener(a,b,false)})(window);
这里说下怎么引入的问题，很简单。在main.js中，直接import './config/rem'导入即可。import的路径根据你的文件路径去填写。
链接：https://juejin.cn/post/6844903632815521799

前端进阶必读文章
https://juejin.cn/post/6993628735354191909

常用的网络命令
https://mp.weixin.qq.com/s/N-_jsA6eoM0f_7LCM-il5A

《前端那些事》从0到1开发工具库
https://juejin.cn/post/6844904127923765256

前端测试之Jest深入浅出
https://juejin.cn/post/6844904196244766728#heading-36

组件库的按需加载  https://juejin.cn/post/6844904166586843149
那怎么去通过按需加载去使用组件库，答案是通过babel插件：babel-plugin-component（element 通过fork ant-design库的 ）
在babel转码的时候，把整个库element-ui的引用，变为element-ui/lib/button具体模块的引用。这样webpack收集依赖module就不是整个element-ui，而是里面的button

两个node程序之间怎样交互?https://juejin.cn/post/6844904177466867726
答案是：通过fork，原理是子程序用process.on来监听父程序的消息，
用 process.send给子程序发消息，父程序里用child.on,child.send进行交互，来实现父进程和子进程互相发送消息


Babel配置傻傻看不懂？
https://juejin.cn/post/6863705400773083149
Babel工作原理本质上就是三个步骤：解析、转换、输出，

浅谈前端模块化
https://juejin.cn/post/6893376571978022926

不同角度看跨域那些事
https://juejin.cn/post/6906078670210007053
cors-anywhere

规划&记录，有她就够了！  
https://juejin.cn/post/6991366537961537567  记事本

聊聊开发日常的效率提升工具（全）
https://juejin.cn/post/7019183422320934948


内存泄露 https://interview2.poetries.top/excellent-docs/5-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A8%A1%E5%9D%97.html#_6-7-cookie%E5%92%8Clocalsrorage%E3%80%81session%E3%80%81indexdb-%E7%9A%84%E5%8C%BA%E5%88%AB
意外的全局变量: 无法被回收
定时器: 未被正确关闭，导致所引用的外部变量无法被释放
事件监听: 没有正确销毁 (低版本浏览器可能出现)
闭包: 会导致父级中的变量无法被释放
dom 引用: dom 元素被删除时，内存中的引用未被正确清空
可用 chrome 中的 timeline 进行内存标记，可视化查看内存的变化情况，找出异常点。

大文件处理（上传，下载）思考
https://juejin.cn/post/7100086067264487432

网站性能优化实战之—— gzip （webpack, vite 开启gzip 部署）
https://juejin.cn/post/6983486365740564511#heading-9

双10期|基本对象Error及8种错误类型
https://juejin.cn/post/7100160801528365070

https://www.pzijun.cn/blog/1/1.5.html#a-%E9%A1%B5%E9%9D%A2%E6%89%93%E5%BC%80-b-%E9%A1%B5%E9%9D%A2%EF%BC%8Ca%E3%80%81b-%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F
B 页面正常关闭，如何通知 A 页面
页面正常关闭时，会先执行 window.onbeforeunload ，然后执行 window.onunload ，我们可以在这两个方法里向 A 页面通信
#B 页面意外崩溃，又该如何通知 A 页面
页面正常关闭，我们有相关的 API，崩溃就不一样了，页面看不见了，JS 都不运行了，那还有什么办法可以获取B页面的崩溃？

全网搜索了一下，发现我们可以利用 window 对象的 load 和 beforeunload 事件，通过心跳监控来获取 B 页面的崩溃


vs code画流程图---draw.io integration
https://www.bilibili.com/video/av586758774/

前端八股文
https://juejin.cn/column/7067422830543470599