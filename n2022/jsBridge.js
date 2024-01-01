Hybrid App从概念到实战 
https://www.cnblogs.com/chenwenhao/p/11218525.html 
 、
JSBridge实战
https://juejin.cn/post/6844903702721986568

JSBridge 的起源
https://www.zoo.team/article/jsbridge

WebViewJavascriptBridge详细使用
https://www.cnblogs.com/jiang-xiao-yan/p/5345755.html

h5 与原生 app 交互的原理--------------------
https://segmentfault.com/a/1190000016759517
h5 调用 app 的代码
因为 h5 不能直接访问宿主 app，所以这种调用就相对复杂一点。 

这种调用常用有两种方式：
由 app 向 h5 注入一个全局 js 对象，然后在 h5 直接访问这个对象
由 h5 发起一个自定义协议请求，app 拦截这个请求后，再由 app 调用 h5 中的回调函数


H5 和 Native 的双向通信通用方法
H5通信方式和兼容性如下表所示。指的是借助 Native 的 webview 加载H5页面，H5 和 Native 之间通过注入API、URL拦截、全局调用等形式，
实现消息通信。站在大厂的角度考虑，在实战的时候，会选择更兼容的方式。

H5调用Native方法
1.注入 API 方式的主要原理：通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，
直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。
说白了就是，Native 往 window 对象挂对象或方法，让 H5 可以调 Native 的方法。具体挂的对象或方法是 Native 定义的，
比如人家挂了个getName(arg)，H5 调用就是window.getName(arg)，当然调用时可以向 Native 传数据。

2.拦截 url scheme原理：先解释一下 url scheme： url scheme 是一种类似于 url 的链接，是为了方便app直接互相调用设计的，
形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的，
例如: httpsss://bridge_loaded/url?url=http://ymfe.tech，protocol 是 httpsss，host 则是 bridge_loaded。
拦截 url scheme 的主要流程是：**Web 端通过某种方式（例如 iframe.src）发送 url scheme 请求，之后 Native 拦截到请求并根据
url scheme（包括所带的参数）进行相关操作。 **

Native调用H5方法
Native 调用 JS 比较简单，只要 H5 将 JS 方法暴露在 Window 上给 Native 调用即可。


相比于 JavaScript 调用 Native， Native 调用 JavaScript 较为简单，毕竟不管是 iOS 的 UIWebView 还是 WKWebView，
还是 Android 的 WebView 组件，都以子组件的形式存在于 View/Activity 中，直接调用相应的 API 即可。
Native 调用 JavaScript，其实就是执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript
的方法必须在全局的 window 上。（闭包里的方法，JavaScript 自己都调用不了，更不用想让 Native 去调用了） 

 
聊一聊桥接（JSBridge）的原理 回调用
https://www.cnblogs.com/songyao666/p/14540073.html 


初探JSBridge
https://zhuanlan.zhihu.com/p/75543754

JsBridge基本原理与封装
https://www.cnblogs.com/zhangnan35/p/14620825.html

JsBridge的异步不执行的处理--promise异步变同步
https://www.cnblogs.com/leiting/p/9897759.html  


#JSBridge概述  http://know.shuerbuzuo.cn/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/JSBridge%E6%A6%82%E8%BF%B0.html#web-native

对于Web, 发送URL请求的方法有这么几种:
a标签 
location.href
使用iframe.src
发送ajax请求
这些方法中, a标签需要用户操作, href可能会引起页面的丢失, ajax请求在安卓中没有相应的拦截方法, 所以使用iframe.src是比较常见的方案:

安卓提供了shouldOverrideUrlLoading方法拦截
UIWebView使用shouldStartLoadWithRequest, WKWebView则使用decidePolicyForNavigationAction
这种方法从早期就存在了, 兼容性好. 缺点是基于URL, 长度受限, 并且不太直观.     


H5与App的通讯方式
https://juejin.cn/post/6844904020201455624 