网页开发渲染线程和脚本线程是互斥的，也是为什么长时间的脚本运行可能会导致页面失去响应  
小程序中，逻辑层和渲染层是分开的，双线程同时运行。渲染层的界面使用 WebView 进行渲染； 
逻辑层采用 JSCore 运行 JavaScript 代码
网页开发面对的主要是浏览器及移动端浏览器 WebView
小程序开发面对的是两大操作系统 iOS 和 Android 的 微信客户端，所以开发时候需要注意的
是微信客户端的版本号和小程序API 支持的基础库版本号

小程序的渲染层和逻辑层分别由2个线程管理：渲染层的界面使用了 WebView 进行渲染；逻辑层采用
JsCore 线程运行 JS 脚本。一个小程序存在多个界面，所以渲染层存在多个 WebView 线程，
这两个线程的通信会经由微信客户端做中转，逻辑层发送网络请求也经由 Native 转发，小程序 
的通信模型下图所示。

微信小程序底层原理
https://juejin.cn/post/6999654431729909767

双线程架构：渲染层和逻辑层
首先，我们来简单了解下小程序的运行环境。小程序是基于双线程模型的，在这个模型中，小程序的逻辑
层与渲染层分开在不同的线程运行，这跟传统的 Web 单线程模型有很大的不同，使得小程序架构上多
了一些复杂度，也多了一些限制。至于为何选择基于双线程模型来搭建小程序，以及因此而产生的问
题和解决方案，接下来我们将一一介绍。
小程序的渲染层和逻辑层分别由2个线程管理：渲染层的界面使用了 WebView 进行渲染；逻辑层采用
    JsCore 线程运行JS脚本。一个小程序存在多个界面，所以渲染层存在多个 WebView 线程，这两
    个线程的通信会经由微信客户端（下文中也会采用 Native 来代指微信客户端）做中转，逻辑层发
    送网络请求也经由 Native 转发，小程序的通信模型下图所示。

逻辑层和视图层必须通过 Native 层通信。逻辑层和视图层之间的工作方式为：数据变更通过 setData
驱动视图更新；视图层交互触发事件，然后触发逻辑层的事件响应函数，函数中修改数据再次触发视图更
新

为什么采用双线程架构？可能是出于以下原因：

安全可控，沙箱隔离，限制 DOM 和 BOM 能力
不允许跳转至其他网页；
不允许直接操作 DOM；
不允许随意使用 window 上的某些未知的可能有危险的 API；
性能
在浏览器网页中，虽然 JS 执行和 UI 渲染也是处于两个线程，但是 JS 线程和 UI 线
程是互斥的（之所以设计为互斥的主要是 JS 可以操作 DOM，所以必须设计为互斥的才能避免二者的不同步问题）；
在小程序中，逻辑层和渲染层是独立的，二者不会互相阻塞，因此性能更优（小程序限制了 JS 操作 DOM 的能力，因此不用担心二者的不同步问题）；

提供原生渲染能力和原生 API 能力；
以上只是个人理解，其实微信官方在这里详细介绍了采用双线程模型的原因，主要目的就是为了安全和管控。

小程序的逻辑层和渲染层是分开的两个线程。在渲染层，宿主环境会把 WXML 转化成相应的 JS 对象，在逻
辑层发生数据变更的时候，通过宿主环境提供的 setData 方法将数据从逻辑层传递到渲染层，再经过
对比前后差异，把差异应用在原来的 DOM 树上，进而渲染出正确的 UI 界面，如下图所示。其实就是采用了虚拟 DOM 的思想。
链接：https://juejin.cn/post/6999654431729909767

//================================================================
微信小程序面试题总结

小程序页面的生命周期函数
onLoad 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数(监听页面加载)
onShow() 页面显示/切入前台时触发(监听页面显示)
onReady() 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互(监听页面初次渲染完成)
onHide() 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等(监听页面隐藏)
onUnload() 页面卸载时触发。如 redirectTo 或 navigateBack 到其他页面时(监听页面卸载)
链接：https://juejin.cn/post/7039166101929852935 

详解小程序工作原理和性能优化
https://juejin.cn/post/7073121416605876237?utm_source=gold_browser_extension


问题与建议-问题
页面大小、打开页面数量都受到限制（目前最多打开10个页面栈） 
•在jscore 中JS 体积比较大的情况下，其初始化时间会产生影响
•传输数据中，序列化和反序列化耗时需要考虑•
  不能灵活操作DOM，无法实现较为复杂的效果
•小程序仍然使用WebView渲染，并非原生渲染 
•依赖浏览器环境的js库不能使用，因为是JSCore执行的，没有window、document对象
•除图片外，其他所有用到的资源都有域名限制
•包大小有限制（主包+分包=8M）

图片优化•
不要把所有数据都塞到data 中
•setData优化
•预加载数据
•分包加载

小程序可以嵌套
<web-view src="{{url}}"></web-view> 

从零开始搞监控系统（5）——小程序监控
https://juejin.cn/post/7090746709147402276

小程序异常监控收集
https://developers.weixin.qq.com/community/develop/doc/000e46078b015804f6d6c2dc156006
详解：如何监控小程序异常及处理错误？
https://cloud.tencent.com/developer/article/1683396
小程序错误异常监控方案 
https://www.wxapp-union.com/article-6184-1.html 