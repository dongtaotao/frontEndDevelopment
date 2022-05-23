Taro 是什么？
Taro 是由京东 - 凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架。
使用 Taro，我们可以只书写一套代码，通过 Taro 的编译工具，将源代码分别编译出可以在不同端  
（微信小程序、H5、App、快应用等）运行的代码。 

React写多端应用
设计思想
1代码转换  编译
使代码可以在不同平台上运行
2.运行时适配
使代码在不同平台上有相同的表现

设计思路
用react语法定制一套前端熟悉的语法规范（DSL语言）
DSL：专注于某个应用程序领域的
特定语言

转换原理（编译阶段）
React语法代码-------编译工具---------web端，小程序段，RN端，快应用端 

babel运行机制
代码编译
输入源代码---词法分析---语法分析--语义分析----转换操作----目标代码
    代码字符串   分词    构建语法树  检查程序正确性  语法树转换
转换原理（jsx转小程序模版）
Javascript代码----获取ASt-----解析render----转换代码------js代码

编译阶段
if---else----    wx:if  wx:esle
data.map()   wx:for
this.props.children    <slot></slot>  

多端组建差异
多端API差异

性能优化
1.避免频繁地去setState，多个setState合并成一个
2.避免单次setState传递大量的数据
3.避免数据嵌套过深
使用shouldComponentUpadte钩子函数控制render

Taro框架原理综述
taro的起源
taro 1.x 的最初的想法就是想使用react的语法来编写小程序. 于是借助了Babel, 将jsx转译为template语法.
由于JSX的语法非常的灵活, taro团队只能通过穷举的方式, 把常用的, React官方推荐的写法作为转换规则加以支持.

JSBridge概述
http://know.shuerbuzuo.cn/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/JSBridge%E6%A6%82%E8%BF%B0.html#webview

Web -> Native
web调用Native端主要有两种方式
#1. 拦截WebView请求的URL Schema
URL Schema是类似URL的一种请求格式:
{/* <protocol>://<host>/<path>?<qeury>#fragment */}
我们可以自定义JSBridge的URL Schema, 比如: jsbridge://showToast?text=hello

Native加载Webview之后, web发送的所有请求都会经过webview组件, 所以native可以重写webview里的方法, 拦截web发起的请求, 我们对请求的格式进行判断:

如果符合我们自定义的URL Schema, 对URL进行解析, 拿到相关操作, 进而调用原生的Native方法
如果不符合我们自定义的URL Schema, 则直接转发, 请求真正的服务
对于Web, 发送URL请求的方法有这么几种:

a标签
location.href
使用iframe.src
发送ajax请求
这些方法中, a标签需要用户操作, href可能会引起页面的丢失, ajax请求在安卓中没有相应的拦截方法, 所以使用iframe.src是比较常见的方案:

安卓提供了shouldOverrideUrlLoading方法拦截
UIWebView使用shouldStartLoadWithRequest, WKWebView则使用decidePolicyForNavigationAction
这种方法从早期就存在了, 兼容性好. 缺点是基于URL, 长度受限, 并且不太直观.

#2. 向wenview中注入JS API
这个方法会通过webView提供的接口, App将Native的相关接口注入到JS的Context(window)的对象中, 一般来说这个对象内的方法名会与Native相关方法名是相
同的, Web端就可以直接在全局window下使用这个暴露的JS对象, 进而调用原生端的方法.

这个过程更加的简单直观, 不过有兼容性的问题, 大部分情况下会使用这种方式:

// 注入全局JS对象
webView.addJavascriptInterface(new NativeBridge(this), "NativeBridge");

class NativeBridge {
  private Context ctx;
  NativeBridge(Context ctx) {
    this.ctx = ctx;
  }

  // 增加JS调用接口
  @JavascriptInterface
  public void showNativeDialog(String text) {
    new AlertDialog.Builder(ctx).setMessage(text).create().show();
  }
}
然后在web端调用:

window.NativeBridge.showNativeDialog('hello');
iOS的UIWebView提供了JavaSciptCore

iOS的WKWebView提供了WKScriptMessageHandler

#带回调的调用
到目前为止, 我们现在还是一个单向通信的过程.
所以在对端操作并返回结果, 有输入有输出才是完整的调用.
基于单向通信就可以实现这种功能, 我们在一端调用的时候再参数中加一个callbackId标记对应的回调, 对端接收到调用请求以后, 进行实际操作,
如果带有callbackId, 对端在进行一次调用, 将结果, callbackId回传回来, 这端根据callbackId匹配响应的回调, 将结果传入执行即可.

以安卓, 在web端实现带有回调的jsb为例:
// Web端代码：
{/* <body>
  <div>
    <button id="showBtn">获取Native输入，以Web弹窗展现</button>
  </div>
</body>
<script>
  let id = 1;
  // 根据id保存callback
  const callbackMap = {};
  // 使用JSSDK封装调用与Native通信的事件，避免过多的污染全局环境
  window.JSSDK = {
    // 获取Native端输入框value，带有回调
    getNativeEditTextValue(callback) {
      const callbackId = id++;
      callbackMap[callbackId] = callback;
      // 调用JSB方法，并将callbackId传入
      window.NativeBridge.getNativeEditTextValue(callbackId);
    },
    // 接收Native端传来的callbackId
    receiveMessage(callbackId, value) {
      if (callbackMap[callbackId]) {
        // 根据ID匹配callback，并执行
        callbackMap[callbackId](value);
      }
    }
  };

  const showBtn = document.querySelector('#showBtn');
  // 绑定按钮事件
  showBtn.addEventListener('click', e => {
    // 通过JSSDK调用，将回调函数传入
    window.JSSDK.getNativeEditTextValue(value => window.alert('Natvie输入值：' + value));
  });
</script> */}
然后在安卓端:

// Android端代码
webView.addJavascriptInterface(new NativeBridge(this), "NativeBridge");

class NativeBridge {
  private Context ctx;
  NativeBridge(Context ctx) {
    this.ctx = ctx;
  }

  // 获取Native端输入值
  @JavascriptInterface
  public void getNativeEditTextValue(int callbackId) {
    MainActivity mainActivity = (MainActivity)ctx;
    // 获取Native端输入框的value
    String value = mainActivity.editText.getText().toString();
    // 需要注入在Web执行的JS代码
    String jsCode = String.format("window.JSSDK.receiveMessage(%s, '%s')", callbackId, value);
    // 在UI线程中执行
    mainActivity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        mainActivity.webView.evaluateJavascript(jsCode, null);
      }
    });
  }
}
#参考链接
深入浅出JSBridge：从原理到使用
https://juejin.cn/post/6936814903021797389?utm_source=gold_browser_extension

#http://interview.poetries.top/fe-mobile-docs/docs/taro.html#%E4%B8%89%E3%80%81taro-%E8%AE%BE%E8%AE%A1%E6%80%9D%E6%83
%B3%E5%8F%8A%E6%9E%B6%E6%9E%84

三、Taro 设计思想及架构
在 Taro 中采用的是编译原理的思想，所谓编译原理，就是一个对输入的源代码进行
语法分析，语法树构建，随后对语法树进行转换操作再解析生成目标代码的过程。

3.1 抹平多端差异
基于编译原理，我们已经可以将 Taro 源码编译成不同端上可以运行的代码了，但是这对
于实现多端开发还是远远不够。因为不同的平台都有自己的特性，每一个平台都不尽相同，这些
差异主要体现在不同的组件标准与不同的 API 标准以及不同的运行机制上

以小程序和 Web 端为例
可以看出小程序和 Web 端上组件标准与 API 标准有很大差异，这些差异仅仅通过代码编译手段是无法
抹平的，例如你不能直接在编译时将小程序的 <view /> 直接编译成 <div />，因为他们虽然看上去有
些类似，但是他们的组件属性有很大不同的，仅仅依靠代码编译，无法做到一致，同理，众多 API 也面
临一样的情况。
针对这样的情况，Taro 采用了定制一套运行时标准来抹平不同平台之间的差异。
这一套标准主要以三个部分组成，包括标准运行时框架、标准基础组件库、标准端能力 API，其中运行时 
框架和 API 对应 @taro/taro，组件库对应 @tarojs/components，通过在不同端实现这些标准，从
而达到去差异化的目的...  


