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

vs code画流程图---draw.io integration  -----------
https://www.bilibili.com/video/av586758774/

前端八股文
https://juejin.cn/column/7067422830543470599

哪些情况会导致内存泄漏
1、意外的全局变量：由于使用未声明的变量,而意外的创建了一个全局变量,而使这个变量一直留在内存中无法被回收
2、被遗忘的计时器或回调函数：设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
3、脱离 DOM 的引用：获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
4、闭包：不合理的使用闭包，从而导致某些变量一直被留在内存当中。

链接：https://juejin.cn/post/7073869980411887652


做了一份前端面试复习计划，保熟～
https://juejin.cn/post/7061588533214969892

一文带你了解如何排查内存泄漏导致的页面卡顿现象
https://juejin.cn/post/6947841638118998029


HTTP请求头referer字段详解与图片防盗链实战
https://juejin.cn/post/7101301631668453406
referer的作用    request
包含当前请求页面的来源页面的地址，即当前页面是通过此来源页面的链接进入的。
实战 - 图片防盗链
location ~ .*\.(jpg|jpeg|gif|png|js|css)$
{
    expires      30d;
    access_log /dev/null;
    valid_referers none blocked wangxiaokai.vip www.wangxiaokai.vip;
    if ($invalid_referer){
        return 404;
    }
}

都2022年了，一个还不知道Lottie动画的前端已经OUT啦！
https://juejin.cn/post/7101629986427109383

如果页面卡顿
先会检查是否是网络请求太多，导致数据返回较慢，可以适当做一些缓存
也有可能是某块资源的bundle太大，可以考虑拆分一下
然后排查一下js代码，是不是某处有过多循环导致占用主线程时间过长
浏览器某帧渲染的东西太多，导致的卡顿
在页面渲染过程中，可能有很多重复的重排重绘
链接：https://juejin.cn/post/6947841638118998029


最详细的前端二进制数据流
https://juejin.cn/post/7100759219397197831

前后端文件上传过程以及方法 ------ 
https://zhuanlan.zhihu.com/p/120834588

面试官：面向对象和函数式编程你有了解吗？
https://juejin.cn/post/70767195356041052 
2、 函数式编程的特点
函数是一等公民
声明式编程
纯函数
数据不可变

函数式编程的优缺点：
代码简洁，易于理解
并发速度快
出错率少

面向对象编程
2、面向对象编程的特点
封装  继承  多态

Tree-Shaking深入解析
https://juejin.cn/post/7073360158671241246

前端性能优化 24 条建议
https://juejin.cn/post/6892994632968306702

js实现文件上传、文件预览、拖拽上传的方法 https://juejin.cn/post/7102292023386275876

将base64图片以form-data格式上传到图片服务器
https://juejin.cn/post/7102324958671405069

Flutter屏幕适配方案  flutter_screenutil
https://juejin.cn/post/7102060695490920462

Github黑科技之GitHub1s
https://juejin.cn/post/7056974964401897480

从 0 构建自己的脚手架/CLI
https://juejin.cn/post/7069280579245572104

图片加载会阻塞dom渲染吗？⭐⭐⭐⭐⭐ https://blog.csdn.net/qq_33277654/article/details/122924692
图片不会阻塞dom解析和渲染，但是如果网页中有很多图片的话，会消耗大量的资源（引擎吞吐量、请求数等等），并发请求数量是有限的，
如果多个图片同时请求可能会造成请求拥堵，导致其他资源无法被及时请求到，所以图片最好做成懒加载。


react跨域 https://www.bilibili.com/video/BV1h3411y7dy?p=2&spm_id_from=pageDriver
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://www.ahsj.link/rambo",
            changeOrigin: true,
            pathRewrite: {
                "/api": "",
            },
        })
    );
};

小猪课堂  https://space.bilibili.com/493520625/video


基于原生js和node实现文件上传和大文件切片上传
https://www.bilibili.com/video/BV1zS4y1B7Eg?spm_id_from=333.999.0.0

#JSBridge概述
对于Web, 发送URL请求的方法有这么几种: http://know.shuerbuzuo.cn/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/JSBridge%E6%A6%82%E8%BF%B0.html#web-native
a标签
location.href
使用iframe.src
发送ajax请求
这些方法中, a标签需要用户操作, href可能会引起页面的丢失, ajax请求在安卓中没有相应的拦截方法, 所以使用iframe.src是比较常见的方案:

安卓提供了shouldOverrideUrlLoading方法拦截
UIWebView使用shouldStartLoadWithRequest, WKWebView则使用decidePolicyForNavigationAction
这种方法从早期就存在了, 兼容性好. 缺点是基于URL, 长度受限, 并且不太直观.

#移动端前端技巧指南
http://know.shuerbuzuo.cn/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%89%8D%E7%AB%AF%E6%8A%80%E5%B7%A7%E6%8C%87%E5%8D%97.html#html

Mutation Observer API 用来监听DOM的变动事件
http://know.shuerbuzuo.cn/%E6%B5%8F%E8%A7%88%E5%99%A8&HTML/%5BAPI%5DMutationObserver.html#%E5%8F%96%E4%BB%A3domcontentloaded%E4%BA%8B%E4%BB%B6
IntersectionObserver API
IntersectionObserver API可以自动的"观察"元素是否是可见的. 由于可见的本质是目标元素与视图产生一个交叉去, 所以这个API叫做 "交叉观察器".


实战：使用nodejs的第三方插件nodemailer实现邮件发送
https://blog.csdn.net/bertil/article/details/121345946
https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/vqxe0g

讲一下变量提升 https://www.lingtiku.com/quiz/detail/5
javaScript在执行之前会先进行预编译，主要做两个工作：
1. 将全局作用域或者函数作用域内所有函数声明提前。
2. 将全局作用域或者函数作用域内所有var声明的变量提前声明，并赋值为undefined。
这就是变量提升。


前端面试实录：5年大厂前端架构师，期望38k，很强，我无话可说！ 看
https://www.bilibili.com/video/BV1jL4y1G7dz?spm_id_from=333.337.search-card.all.click

ArrayBuffer实战-识别文件类型
https://juejin.cn/post/7100499008279281677


前端进阶学习指南
https://juejin.cn/post/7068506779533410312
2022金三银四前端面试笔记
https://juejin.cn/post/7085609851720024072#heading-7

Cookie、Session、Storage、Token、JWT、单点登录、OAuth第三方登录一次性弄懂
https://juejin.cn/post/7044094195404898311

前端文件的上传和下载
https://juejin.cn/post/7074869887759286280

mac抓包神器charles抓包详解
https://juejin.cn/post/7076399416956944414

监控上传和下载进度
https://juejin.cn/post/7103188024887869476

大文件分段上传断点存续
https://juejin.cn/post/7103799605623521294

【VUE】后台管理中使用富文本编辑器
https://juejin.cn/post/7005107384611766285

worker和sharedworker
https://blog.csdn.net/sinat_17775997/article/details/123701969

react-router是否有vue-router中addRoutes这样的api
https://segmentfault.com/q/1010000020777339
最新的React-router也是以组件的形式来写，所以可以根据权限信息来决定渲染哪些路由，例如下面的方式：

   {isDisplay?<Route path="/hello" component={Hello} />:null}
或者

<Route path="/hello"  render={props => {
    return isDisplay
        ? <Hello {...props} />
        : <Redirect to="/login" />
}} />
：高阶组件就行了


【高频JS手写】20+高频JS手写题总结
https://blog.csdn.net/weixin_44523860/article/details/108949531

字符串常用的十个函数
charAt()   // 返回在指定位置的字符。
concat()   // 连接字符串。
fromCharCode()   // 从字符编码创建一个字符串。
indexOf()  // 检索字符串。
match()   // 找到一个或多个正则表达式的匹配。
replace()   // 替换与正则表达式匹配的子串。
search()   // 检索与正则表达式相匹配的值。
slice()   // 提取字符串的片断，并在新的字符串中返回被提取的部分。
split()   // 把字符串分割为字符串数组。
substr()   // 从起始索引号提取字符串中指定数目的字符。
substring()   // 提取字符串中两个指定的索引号之间的字符。
toLocaleLowerCase()   // 把字符串转换为小写。
toLocaleUpperCase()   // 把字符串转换为大写。
toLowerCase()   // 把字符串转换为小写。
toUpperCase()   // 把字符串转换为大写。
toString()   // 返回字符串。
valueOf()   // 返回某个字符串对象的原始值。 

array 方法
https://www.cnblogs.com/lhh520/p/10373802.html 

如何判断一个变量是对象还是数组
function isObjArr(variable){
    if (Object.prototype.toString.call(value) === "[object Array]") {
           console.log('value是数组');
    }else if(Object.prototype.toString.call(value)==='[object Object]'){//这个方法兼容性好一点
        console.log('value是对象');
    }else{
        console.log('value不是数组也不是对象') 
    }
}
 
// 注意:千万不能使用typeof来判断对象和数组，因为这两种类型都会返回"object"。
 

富文本原理了解一下？
https://juejin.cn/post/6865525477465931783#heading-8

Vue 搭建带预览的「上传图片」管理后台
https://juejin.cn/post/7077362737575100424
最好用的 7 款 Vue admin 后台管理框架测评
顶级好用的 5 款 Vue table 表格组件测评与推荐
最好用的 5 款 React 富文本编辑器
Axios 教程：Vue + Axios 安装及实战 - 手把手教你搭建加密币实时价格看板
最好的 6 个免费天气 API 接口对比测评
如何在 Vue 中导出数据至 Excel 表格
链接：https://juejin.cn/post/7077362737575100424
Video.js 使用教程 - 手把手教你基于 Vue 搭建 HTML 5 视频播放器
https://juejin.cn/post/7080220673812987940

实现一个大文件切片上传+断点续传 
https://www.tuicool.com/articles/aY7Vn2U 