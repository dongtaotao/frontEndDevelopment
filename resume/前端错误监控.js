前端监控：用户行为/性能监控/异常捕获上报
https://juejin.cn/post/7067519550161420295

前端异常捕获 🔥
https://blog.csdn.net/sinat_17775997/article/details/115215082?spm=1001.2014.3001.5502

如何搭建前端异常监控系统
https://juejin.cn/post/6846687589592743943

常见的前端异常处理
https://juejin.cn/post/7048450212431396878?utm_source=gold_browser_extension

从0到1搭建前端异常监控系统(Vue + Webpack + Node.js + Egg.js + Jest)
https://juejin.cn/post/6844904119136698381#heading-13

🔥面试官：如何设计一个埋点SDK **********************8 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
https://juejin.cn/post/7080797016086806536

前端性能与异常上报
https://juejin.cn/post/6844903648355418120

前端监控和前端埋点方案设计
https://juejin.cn/post/6844903650603565063


1.前端监控和前端埋点方案设计 https://juejin.cn/post/6844903650603565063 https://www.jianshu.com/p/a1c7a8c3f07a
一、为什么需要前端监控
获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，指明产品优化的方向。
(1)数据监控
    数据监控，顾名思义就是监听用户的行为。常见的数据监控包括：
    PV/UV:PV(page view)，即页面浏览量或点击量。UV:指访问某个站点或点击某条新闻的不同IP地址的人数
    用户在每一个页面的停留时间
    用户通过什么入口来访问该网页
    用户在相应的页面中触发的行为

(2)性能监控
  性能监控指的是监听前端的性能，主要包括监听网页或者说产品在用户端的体验。常见的性能监控数据包括：
    不同用户，不同机型和不同系统下的首屏加载时间
    白屏时间
    http等请求的响应时间
    静态资源整体下载时间
    页面渲染时间
    页面交互动画完成时间
(3)异常监控
Javascript的异常监控
样式丢失的异常监控

https://github.com/lmk123/blog/issues/66
sessionStorage 的数据会在同一网站的多个标签页之间共享吗？这取决于标签页如何打开
通过点击链接（或者用了 window.open）打开的新标签页之间是属于同一个 session 的，但新开一个标签页总是会初始化一个新的 session，即使网站
是一样的，它们也不属于同一个 session。

静态资源缓存设置，js，css3
实现缓存的几种方法
一、修改html文件 
第一种方法就是在html文件的最上面加上这样一行代码：
<meta http-equiv="Cache-Control" content="max-age=7200" />

二、springboot配置
第二种方法原理相同，修改响应头。

三、修改nginx配置文件
什么是静态资源文件
顾名思义，静态资源文件就是js、css、img等非服务器动态运行生成的文件，统称为静态资源文件。
为什么要缓存静态资源文件
静态资源文件是基本不会改变的，没必要每次都从服务器中获取。也就是说，我们每次向
服务器发送请求得到的静态资源是相同的。所以我们可以把静态资源缓存再浏览器，也就是客户端，来进行性能优化。

https://jishuin.proginn.com/p/763bfbd5505b
JavaScript 为什么要区分微任务和宏任务
区分微任务和宏任务是为了将异步队列任务划分优先级，通俗的理解就是为了插队。

为什么要有微任务呢？
既然我们知道了微任务与宏任务，但异步任务为什么要区分宏任务与微任务呢，只有宏任务不可以吗？
因为事件队列其实是一个“先进先出”的数据结构，排在前面的事件会优先被主线程读取， 那如果突然来了一个优先级更高的任务，还让
去人家排队，就很不理性化， 所以需要引入微任务。

//=========================================
前端错误监控
https://www.cnblogs.com/lhh520/p/10198194.html

前端错误监控指南
https://juejin.cn/post/6844903925678604296#heading-8

从 0 到 1 搭建前端异常监控系统
https://segmentfault.com/a/1190000022607559

前端异常监控-看这篇就够了
https://segmentfault.com/a/1190000016959011

深入前端错误/异常
https://juejin.cn/post/6844904138334011406


1.脚本错误
    语法错误
    运行时错误
        同步错误
        异步错误
        Promise 错误
2.网络错误
        资源加载错误
        自定义请求错误
//================================================================
为了便于分析发生的错误，一般利用 window.onerror 事件来监听错误的发生。 它比try catch的捕获错误信息的能力要强大。
window.onerror 最大的好处就是同步任务、异步任务都可捕获
/**
 * @param {String}  msg    错误描述
 * @param {String}  url    报错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误Error对象
 */
 window.onerror = function (msg, url, row, col, error) {
    console.log('我知道错误了');
    // return true; // 返回 true 的时候，异常不会向上抛出，控制台不会输出错误
  };

//================================================================
监听error事件:
其实 onerror 固然好但是还是有一类异常无法捕获。这就是网络异常的错误。
由于网络请求异常不会冒泡，应此需要在事件捕获阶段才能获取到。 我们可以利用 window.addEventListener。
比如代码、图片等重要 CDN 资源挂了，能及时获得反馈是极为重要的。
window.addEventListener('error', (error) => {
    console.log('404 错误');
    console.log(error);
    // return true; // 中断事件传播
}, true);

//================================================================
Promise异常捕获：
Promise 的出现主要是为了让我们解决回调地域问题。
这种情况无论是onerror还是监听错误事件都是无法捕获的。
除非每个Promise都添加一个catch方法。

但显然，我们不能这样做。
监听unhandledrejection事件，即可捕获到未处理的Promise错误：
window.addEventListener("unhandledrejection", e => {
    console.log('unhandledrejection',e)
});

try catch

通常在发送数据埋点请求的时候使用的是 1x1 像素的图片？
不存在跨域问题 执行过程无阻塞 体积较小 不占用ajax的请求限额

日志上报的方式
异步请求上报, 后端提供接口，或者直接发到日志服务器
img请求上报, url参数带上错误信息

eg:(new Image()).src = 'http://baidu.com/tesjk?r=tksjk'

总结
Web规范中相关前端异常

DOM处理异常
    ECMAScript处理异常
    异常按照捕获方式分类

运行时异常
    资源加载异常
    异步请求异常
    Promise异常
异常的捕获方式
try-catch (ES提供基本的错误捕获语法)

只能捕获同步代码的异常
    回调
    setTimeout
    promise
window.onerror = cb (DOM0)
    img
    script
    link
window.addEventListener('error', cb, true) (DOM2)
window.addEventListener("unhandledrejection", cb) (DOM4)
Promise.then().catch(cb)
封装XMLHttpRequest&fetch | 覆写请求接口对象
注意点：跨源脚本异常的捕获

日志上报的方式
    异步请求上报
    new img上报 避免跨域问题
扩展阅读

业界已有的异常监控平台
几个跟异常监控有关的问题

//================================================
异常上报如何选择通讯方式

动态创建img标签：
其实上报就是要将捕获的异常信息发送到后端。最常用的方式首推动态创建标签方式。
因为这种方式无需加载任何通讯库，而且页面是无需刷新的。
基本上目前包括百度统计 Google统计都是基于这个原理做的埋点。
new Image().src = 'http://localhost:7001/monitor/error'+ '?info=xxxxxx
通过动态创建一个img,浏览器就会向服务器发送get请求。
可以把你需要上报的错误数据放在querystring字符串中，利用这种方式就可以将错误上报到服务器了。

Ajax上报：
实际上我们也可以用ajax的方式上报错误，这和我们在业务程序中并没有什么区别

https://www.tuicool.com/articles/ZFvqUzJ
前端监控
前端监控通常包括 行为监控 (PV/UV,埋点接口统计)、 异常监控 、 性能监控 。

一个监控系统，大致可以分为四个阶段： 日志采集 、 日志存储 、 统计与分析 、 报告和警告 。

错误监控
Vue专门的错误警告的方法 Vue.config.errorHandler ,（Vue提供只能捕获其页面生命周期内的函数，比如created,mounted）

Vue.config.errorHandler = function (err) {
console.error(‘Vue.error’,err.stack)
// 逻辑处理
};
window.onerror() 当有js运行时错误触发时,onerror可以接受多个参数(message, source, lineno, colno, error)。
window.addEventListener('error'), function(e) {}, true 会比window.onerror先触发,不能阻止默认事件处理函数的执行，
但可以全局捕获资源加载异常的错误
前端JS错误捕获--sourceMap

如何监控网页崩溃？**崩溃和卡顿有何差别？**监控错误
Service Worker 有自己独立的工作线程，与网页区分开，网页崩溃了，Service Worker 一般情况下不会崩溃；

Service Worker 生命周期一般要比网页还要长，可以用来监控网页的状态；

卡顿：加载中，渲染遇到阻塞

性能监控 && 性能优化
性能指标：

FP （首次绘制）
FCP （首次内容绘制 First contentful paint）
LCP （最大内容绘制时间 Largest contentful paint）
FPS （每秒传输帧数）
TTI （页面可交互时间 Time to Interactive）
HTTP 请求响应时间
DNS 解析时间
TCP 连接时间
性能数据采集需要使用 window.performance API ，   JS库 web-vitals ： import {getLCP} from 'web-vitals' ;
    // 重定向耗时
    redirect: timing.redirectEnd - timing.redirectStart,
    // DOM 渲染耗时
    dom: timing.domComplete - timing.domLoading,
    // 页面加载耗时
    load: timing.loadEventEnd - timing.navigationStart,
    // 页面卸载耗时
    unload: timing.unloadEventEnd - timing.unloadEventStart,
    // 请求耗时
    request: timing.responseEnd - timing.requestStart,
    // 获取性能信息时当前时间
    time: new Date().getTime(),
    // DNS查询耗时
    domainLookupEnd - domainLookupStart
 // TCP链接耗时
    connectEnd - connectStart
 // request请求耗时
    responseEnd - responseStart
 // 解析dom树耗时
    domComplete - domInteractive
 // 白屏时间
    domloadng - fetchStart
 // onload时间
    loadEventEnd - fetchStart
性能优化常用手段：缓存技术、   预加载技术、   渲染方案。
缓存：主要有 cdn、浏览器缓存、本地缓存以及应用离线包
预加载：资源预拉取（prefetch）则是另一种性能优化的技术。通过预拉取可以告诉浏览器用户在未来可能用到哪些资源。
prefetch支持预拉取图片、脚本或者任何可以被浏览器缓存的资源。
在head里 添加 <linkrel="prefetch"href="image.png">
prerender是一个重量级的选项，它可以让浏览器提前加载指定页面的所有资源。
subresource可以用来指定资源是最高优先级的。当前页面需要，或者马上就会用到时。

渲染方案：
静态渲染（SR）
前端渲染（CSR）
服务端渲染（SSR）
客户端渲染（NSR）：NSR 数据请求，首屏数据请求和数据线上与 webview 的一个初始化和框架 JS 初始化并行了起来，大大缩短了首屏时间。 

前端性能监控方案（首屏、白屏时间等） https://juejin.cn/post/6844904020482457613
前端优化-如何计算白屏和首屏时间 https://juejin.cn/post/7041571419381039118


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>白屏时间</title>
//     <script>
//         // 开始时间
//         window.pageStartTime = Date.now();
//     </script>
//     <link rel="stylesheet" href="">
//     <link rel="stylesheet" href="">
//     <script>
//         // 白屏结束时间
//         window.firstPaint = Date.now()
//     </script>
// </head>
// <body>
//     <div>123</div>
// </body>
// </html>

白屏时间 = firstPaint - pageStartTime  

http://www.alloyteam.com/2020/01/14184/   ************************如何进行 web 性能监控？

http://www.alloyteam.com/2020/01/14184/</meta> 
3. 异常上报
1）js error
监听 window.onerror 事件 
2）promise reject 的异常
监听 unhandledrejection 事件

window.addEventListener("unhandledrejection", function (event) {
    console.warn("WARNING: Unhandled promise rejection. Shame on you! Reason: "
        + event.reason);
});
3）资源加载失败 =============================
window.addEventListener('error')
4）网络请求失败
重写 window.XMLHttpRequest 和 window.fetch 捕获请求错误
5）iframe 异常
window.frames[0].onerror
6）window.console.error


前端监控和埋点能做什么   https://www.cnblogs.com/ygunoil/p/12099319.html
前端埋点
前端埋点主要是为了服务运营人员采集用户行为数据，进行后续的数据分析工作。


前端错误监控和异常捕获问题 **************************
https://juejin.cn/post/7072179884247744526

错误的捕获方式
1.2.1 运行错误的捕获方式（try catch）
1.2.2 window.onerror
只能捕获即时运行错误，不能捕获资源加载错误(原理：资源加载错误，并不会向上冒泡，object.onerror捕获后就会终止，所以window.onerror并不能捕获资源加载错误)；
相比try catch来说window.onerror提供了全局监听异常的功能：
window.onerror = function(errorMessage, scriptURI, lineNo, columnNo, error) {
    console.log('errorMessage: ' + errorMessage); // 异常信息
    console.log('scriptURI: ' + scriptURI); // 异常文件路径
    console.log('lineNo: ' + lineNo); // 异常行号
    console.log('columnNo: ' + columnNo); // 异常列号
    console.log('error: ' + error); // 异常堆栈信息
};

console.log(a);



js异常
总结 https://blog.csdn.net/sinat_17775997/article/details/115215082?spm=1001.2014.3001.5502
可疑区域增加 try...catch
全局监控JS异常： window.onerror
全局监控静态资源异常： window.addEventListener
全局捕获没有 catch 的 promise 异常：unhandledrejection
iframe 异常：window.error
VUE errorHandler 和 React componentDidCatch
监控网页崩溃：window 对象的 load 和 beforeunload ，或者Service Worker 
Script Error跨域 crossOrigin 解决

一般情况，如果出现 Script error 这样的错误，基本上可以确定是出现了跨域问题。这时候，是不会有其他太多辅助信息的，但是解决思路无非如下：
跨源资源共享机制( CORS )：我们为 script 标签添加 crossOrigin 属性。
<script src="http://jartto.wang/main.js" crossorigin></script>
或者动态去添加 js 脚本：

const script = document.createElement('script');
script.crossOrigin = 'anonymous';
script.src = url;
document.body.appendChild(script);


十二、错误上报  http://jartto.wang/2018/11/20/js-exception-handling/
1.通过 Ajax 发送数据
因为 Ajax 请求本身也有可能会发生异常，而且有可能会引发跨域问题，一般情况下更推荐使用动态创建 img 标签的形式进行上报。

2.动态创建 img 标签的形式
function report(error) {
  let reportUrl = 'http://jartto.wang/report';
  new Image().src = `${reportUrl}?logs=${error}`;
}

十三、总结
回到我们开头提出的那个问题，如何优雅的处理异常呢？

1.可疑区域增加 Try-Catch
2.全局监控 JS 异常 window.onerror
3.全局监控静态资源异常 window.addEventListener
4.捕获没有 Catch 的 Promise 异常：unhandledrejection
5.VUE errorHandler 和 React componentDidCatch
6.监控网页崩溃：window 对象的 load 和 beforeunload
7.跨域 crossOrigin 解决 <script src="http://jartto.wang/main.js" crossorigin></script>

一般情况，如果出现 Script error 这样的错误，基本上可以确定是出现了跨域问题。这时候，是不会有其他太多辅助信息的，但是解决思路无非如下：
跨源资源共享机制( CORS )：我们为 script 标签添加 crossOrigin 属性。
或者动态去添加 js 脚本：
const script = document.createElement('script');
script.crossOrigin = 'anonymous';
script.src = url;
document.body.appendChild(script);

iframe 异常 也是用window.onerror

十一、崩溃和卡顿
1.利用 window 对象的 load 和 beforeunload 事件实现了网页崩溃的监控。不错的文章，推荐阅读：Logging Information on Browser Crashes。
2.基于以下原因，我们可以使用 Service Worker 来实现网页崩溃的监控：

Service Worker 有自己独立的工作线程，与网页区分开，网页崩溃了，Service Worker 一般情况下不会崩溃；Service Worker 
生命周期一般要比网页还要长，可以用来监控网页的状态；网页可以通过 navigator.serviceWorker.controller.postMessage API
 向掌管自己的 SW 发送消息。

很不错🔥🔥🐯 如何优雅处理前端异常？(史上最全前端异常处理方案) https://mp.weixin.qq.com/s/prf-mXexBh1Ie-ctq9FnzA  *******************************

一文带你了解如何排查内存泄漏导致的页面卡顿现象 https://juejin.cn/post/6947841638118998029 🔥🔥


前端搞监控|Allan - 如何实现一套多端错误监控平台 好
https://zhuanlan.zhihu.com/p/158079491  好文章

面试必问：前端性能监控Performance https://juejin.cn/post/7031572366341701663?utm_source=gold_browser_extension 🔥好文章


前端监控  珠峰架构
https://www.bilibili.com/video/BV19a411A72Y?p=1

万字前端效率大提速系列 🚀 ：十、前端错误监控、数据监控专题
https://juejin.cn/post/7086378709560590343

一篇讲透自研的前端错误监控
https://juejin.cn/post/6987681953424080926

来，跟我一起 ，自研多端错误监控平台（完整版） 🔥 es查询数据
https://juejin.cn/post/6844904202917904391
SDK 小结
我们用一句话对 SDK 进行小结:
监听 / 劫持 原始方法，获取需要上报的数据，在错误发生时 触发 函数使用 gif 上报。
为了方便记忆，提炼 3 个关键词：劫持、原始方法、gif！（如果你还记不住，那也别打我）
从 ES 中获取数据非常简单，ES 底层是基于 Lucene 的搜索服务器的，它提供了一个分布式多用户能力的全文搜索引擎，基于 RESTful web 接口。
所以我们前端开发只需要想平时开发业务调用接口一样去调用就可以了。


前端监控SDK开发分享
https://mp.weixin.qq.com/s/1RNw1W2AgAylcd7Gindm4w
https://www.cnblogs.com/1wen/p/14417475.html


使用 Chrome 开发者工具的 Memory 标签页分析内存泄漏问题
https://juejin.cn/post/7098674170044612622


一文摸清前端监控实践要点（二）行为监控
https://juejin.cn/post/7098656658649251877

一文摸清前端监控实践要点（一）性能监控
https://juejin.cn/post/7097157902862909471

前端异常的捕获与处理 
https://segmentfault.com/a/1190000039264963


100、为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
可以发送get请求，且不需要获取和处理数据
可以跨域
执行过程无阻塞
相比XMLHttpRequest，性能更好
gif体积小

最后一次分享是react ssr 服务端渲染
项目难点2：
埋点SDK


🔥🔥🔥🔥 🔥🔥🔥🔥封装统计SDK(数据监控，性能监控，异常监控)，保证项目的数据采集以及监控项目质量。
    面试官：如何设计一个前端统计埋点SDK？
    埋点的核心作用就是1.监控用户数据->2.然后分析用户数据->3.最后再优化我们的产品，这也是一个闭环的过程。
    首先设计一个class类来编写我们的SDK，所谓sdk就是一个工具类库而已，只是底层帮我们封装了一些事件方便我们使用。
    简单：前端埋点大致可分为数据监控、性能监控、错误监控。其中数据监控包括监控pv以及自定义事件的监控。
    性能监控可以使用浏览器给我们提供的performance api。
    而错误监控我们可以监听window对象的error事件以及监听promise没有catch情况的unhandlerejected api。
    其中需要注意的是我们必须使用img等来进行上报，因为img标签不会跨域且兼容性较好。
    最后，react/vue内部提供了一些api如ComponentDidCatch（react）/errorCaptured（vue）等api方便我们调用自定义事件进行发送。
链接：https://juejin.cn/post/7080797016086806536
🔥面试官：如何设计一个埋点SDK https://juejin.cn/post/7080797016086806536
腾讯二面：现在要你实现一个埋点监控SDK，你会怎么设计？ https://juejin.cn/post/7085679511290773534  🔥🔥🔥
从零开始搞监控系统（1）——SDK https://juejin.cn/post/7090741336294293540


一文摸清前端监控自研实践（三）错误监控 https://juejin.cn/post/7100841779854835719
一文摸清前端监控实践要点（一）性能监控
一文摸清前端监控实践要点（二）行为监控


谈谈前端异常捕获 
https://www.cnblogs.com/chenwenhao/p/12184733.html#_label1_5

使用vue+node搭建前端异常监控系统
https://juejin.cn/post/6844904080628776967