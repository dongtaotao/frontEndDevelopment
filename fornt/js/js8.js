2020年中大厂前端面试总结 https://juejin.cn/post/6865525477465931783#heading-8   

前端常见问题和技术解决方案 *************************************************************
https://juejin.cn/post/7088144745788080142

答：symbol 是 JS 在 ES6 时新增的特性，symbol是一个基本的数据类型，表示独一无二的值，用来防止对象属性名冲突问题。
防止对象属性名冲突
const obj = {
  name: 'lin',
  age: 18
}

obj.name = 'xxx'   // 给 obj.name 赋值，把以前的 name 覆盖了
console.log(obj) // { name: 'xxx', age: 18 }
复制代码
const obj = {
  name: 'lin',
  age: 18
}
const name = Symbol('name')
obj[name] = 'xxx'   // 使用 Symbol，不会覆盖

console.log(obj)    // { name: 'lin', age: 18, Symbol(name): 'xxx' }
console.log(obj.name)  // 'lin'
console.log(obj[name]) // 'xxx'

链接：https://juejin.cn/post/7069168967897579551

BigInt 是什么？ 解决了什么问题？ https://juejin.cn/post/7069010632615395335
答：BigInt 是 JS 的一种基本数据结构，类似于 Number 类型。用来精确（安全）地表示、存储和计算大整数。

JavaScript 字符串的常用方法有哪些？
https://juejin.cn/post/7073646349631094814

25个你不得不知道的数组reduce高级用法
https://juejin.cn/post/6844904063729926152#comment

如何用闭包实现一个单例模式？
https://juejin.cn/post/7079936635697102885
function Singleton () {}

const getSingletonInstance = (function () {
  let instance = null
  return function () {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

const s1 = getSingletonInstance()
const s2 = getSingletonInstance()
console.log(s1 === s2) // true

如何确认你们项目是否依赖某一个依赖项 https://q.shanyue.tech/fe/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/522.html
yarn list | grep xxx

如何为一个项目指定 node 版本号  https://q.shanyue.tech/fe/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/533.html
如果对于版本不匹配将会报错(yarn)或警告(npm)，那我们需要在 package.json 中的 engines 字段中指定 Node 版本号

更多质量工程问题，见 如何保障项目质量(opens new window)
{
  "engines": {
    "node": ">=14.0.0"
  }
}


~1.2.3 与 ^1.2.3 的版本号范围是多少https://q.shanyue.tech/fe/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/534.html#%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93
对于 ~1.2.3 而言，它的版本号范围是 >=1.2.3 <1.3.0
对于 ^1.2.3 而言，它的版本号范围是 >=1.2.3 <2.0.0

如何压缩前端项目中 JS 的体积 https://q.shanyue.tech/fe/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/644.html
压缩的具体操作

去除多余字符，eg：空格，换行、注释
压缩变量名，函数名、属性名
使用更简单的表达，eg：合并声明、布尔值简化

如何处理白屏错误页的监控的？ https://q.shanyue.tech/fe/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/739.html
用户反馈白屏了，你怎么处理？
排查兼容性。大部分原因是因为低端机型/浏览器低版本 polyfill 的问题导致报错
排查网络。js 是否下载成功 cdn 是否生效
做 js 错误上报。分析是否存在代码缺陷
做重试逻辑/诱导用户重试
Error Boundry 避免整页崩溃。限制在组件级别

如何检测出你们安装的依赖是否安全
npm audit

eslint，对代码不仅有风格的校验，更有可读性、安全性、健壮性的校验。


==实现模糊搜索结果的关键词高亮显示 https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/141
我的大概思路是，用正则替换掉关键词。

let panter = new RegExp(关键词, 'g')
该行字符串.replace(panter, '<b style="color: #2D7BFF">' + 关键词 + '</b>')
ps:如果是vue项目，直接与v-html结合使用更爽哦~

1.居中为什么要使用transform（为什么不使用marginLeft/Top）
https://juejin.cn/post/7075590655581356045


基于react的前端单元测试
https://juejin.cn/post/7075590655581356045
为什么需要单元测试
降低bug率：通过单元测试能更早的发现问题，减少线上出现的bug率
提升代码能力：单元测试可以让开发者去思考代码的逻辑，从而提高编程能力
提高信心：如果单元测试都能通过的话，无形中也会提高开发者的信心

web Storage
https://juejin.cn/post/6844904132134830087
第一问：字符串最大容量是5M，那么我如果存储容量溢出了怎么办？
溢出了报错， 不会存储

关于BOM十问 https://juejin.cn/post/6844904135364444167
你刚刚说建议少用setInterval（），可以用setIimeout（）代替，为什么呢？ https://juejin.cn/post/6844904135364444167
定时器指定的时间间隔，表示的是何时将定时器的代码添加到消息队列，而不是何时执行代码。所以真正何时执行代码的时间是不能保证的，取决于何时被主线程的事件循环取到，并执行。

script加载和执行 https://juejin.cn/post/6844904144851976199

LRU算法 *************************************************

实现一个每秒输出hello world的函数，要求第三次输出后停止，用闭包实现
function test(){
    var tom = null,count = 0
    return function(){
       tom = setInterval(()=>{
          if(count === 3){
             console.log("+")
             clearInterval(tom)
          }else{
            count++
            console.log("Hello World!")
          }
        },1000)
    }
}
var a = test()
a()  

sessionStorage的使用场景
敏感账号的一次性登陆，sessionId不想保存在cookie,就保存在sessionStorage里(只知道这么多，欢迎补充)。

HTTP状态码206是干什么的
小提示：工作中没有遇到过需要上传下载大型文件，所以这个问题当时老老实实回答不知道。具体应该和断点续传相关，分片请求。可能也需要回答一些range的头部信息等。

Service Worker有哪些作用
缓存以及HTTP请求拦截相关。

什么是HTTP持久化和管线化？
HTTP持久化是针对HTTP无连接的特点进行改进的，使用的是keep-live首部字段保持长连接
HTTP管线化是针对HTTP每次只能是请求一次回答一次的模式进行改进，使得可以连续发送多次请求。

断点续传的原理 http://www.woshipm.com/pd/891969.html
  断点续传支持从文件上次中断的地方开始传送数据，而并非是从文件开头传送。
  断点续传的原理如下：
  由于浏览器与服务端的通讯是基于HTTP协议，所以断点续传功能的原理就是靠HTTP请求来实现。
  断点续传功能最核心的原理就是利用HTTP请求中的两个字段：客户端请求头中的Range，和服务端响应头的Content-Range。
  Range:用于客户端到服务端的请求，可以通过改字段指定下载文件的某一段大小及其单位，字节偏移从0开始。典型格式：

有效三角形的个数 ++++++++++++++++ https://github.com/sisterAn/JavaScript-Algorithms/issues/93

数组切分问题，输入一个正序排列的整型数组，如果它可以被切分为1个或多个子序列，输出True，反之False。子序列需为连续的整型数组，并且长度至少为3。
例1：
输入： [1,2,3,3,4,5]
输出：True
解释：可以切分为2个各自连续的子序列：
1, 2, 3
3, 4, 5
例2：
输入： [1,2,3,3,4,4,5,5]
输出：True
解释：可以切分为2个各自连续的子序列：
1, 2, 3, 4, 5
3, 4, 5
例3：
输入： [1,2,3,4,4,5]
输出：False
解释：无法切分出长度至少为3的子序列。


跨域资源共享（CORS）
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
浏览器将CORS跨域请求分为简单请求和非简单请求。
只要同时满足一下两个条件，就属于简单请求
(1)使用下列方法之一：
head get post
(2)请求的Heder是
AcceptAccept-LanguageContent-LanguageContent-Type: 只限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain
不同时满足上面的两个条件，就属于非简单请求。浏览器对这两种的处理，是不一样的。
简单请求：
对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。
服务器根据这个值，决定是否同意这次请求。
非简单请求：
非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。
非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
预检请求：
预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。请求头信息里面，关键字段是Origin，表示请求来自哪个源。除了Origin字段，
"预检"请求的头信息包括两个特殊字段。

链接：https://juejin.cn/post/6844904137197371399

webpack打包原理
https://segmentfault.com/a/1190000021494964

token会不会被伪造

script放在body头部就一定会阻塞吗 
https://interview2.poetries.top/interview-exp/%E5%89%8D%E7%AB%AF%E9%9D%A2%E7%BB%8F%E6%B1%87%E6%80%BB.html#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%BC%9A%E9%98%BB%E5%A1%9E%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%8A%A0%E8%BD%BD

async和defer吧：

什么是GPU加速
在使用CSS3中的transform、opacity、filter这些属性的时候，能跳过布局和绘制流程，直接进入非主线处理的部分，即交给合成线程。

合成线程中会调用线程池进行GPU加速，因为GPU是比较擅长处理位图数据的
且它没有占有主线程

进程和线程的区别
进程：资源分配的最小单位
线程：资源调度的最小单位

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-sacle=1.0, maximum-scale=1.0, user-scalable=no" />

HTTP/2是如何压缩头部的 
主要是通过HPACK算法来实现压缩头部的功能，其主要有以下两个亮点：

为什么说HTTPS比HTTP安全呢
通过混合加密保证传输的数据不被窃听
通过数字签名的方式保证数据不会被篡改
通过数字证书保证服务器身份的真实性

你们项目一般是如何做缓存的
对于一些没有指纹信息的资源，例如index.html可以使用Cache-Control: no-cache开启协商缓存
对于带有指纹信息的资源，一般会使用splitChunksPlugin进行代码分割，来保证造成最小范围的缓存失效，再设置Cache-Control: max-age=3153600
不需要缓存的资源设置Cache-Control: no-store，即不强缓存也不进行协商缓存

深入理解JavaScript闭包之闭包的使用场景
https://segmentfault.com/a/1190000023425946

闭包的使用场景 
函数防抖
使用闭包设计实现单例模式
为多个组件独立属性，例如在闭包中进行id的累加
设置私有变量
解决经典问题for循环和setTimeout
使用闭包需要注意什么
闭包有三个特性：
函数嵌套函数；
内部函数使用外部函数的参数和变量；
参数和变量不会被垃圾回收机制回收。

所以可以看到它的缺点：https://interview2.poetries.top/interview-exp/%E5%89%8D%E7%AB%AF%E9%9D%A2%E7%BB%8F%E6%B1%87%E6%80%BB.html#%E9%97%AD%E5%8C%85%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF
常驻内存，增加内存使用量；
使用不当造成内存泄漏。
因此我们在使用时需要注意不用的变量要及时的清理掉。

用 promise 实现一个请求超时功能
实现关键在于 promise 的状态改变是单向且唯一的，即只能由 pending -> fulfilled 或者 pending -> rejected，所以可以使用 resolve + setTimeout 来实现。
function promiseWithTimeout(url, delay = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(Error('time is out!'))
    }, delay)
    fetch(url).then(data => resolve(data.json()))
  })
}

一个 TCP 连接可以发多少个 HTTP 请求
https://juejin.cn/post/6844904083703201806

一个 tcp 连接能发几个 http 请求
如果是 HTTP 1.0，默认不支持长连接，所以 一个 TCP 发送 一个 HTTP 请求；
如果是 HTTP 1.1，支持了长连接，只要 TCP 连接不断开，便可以一直发送 HTTP 请求，HTTP 2.0 同理

CSS Tree Shaking
https://segmentfault.com/a/1190000016242463

安全相关 XSS的反射型是什么，怎么避免
https://juejin.cn/post/6844904179182354439

浏览器是多进程的优点
默认新开 一个 tab 页面 新建 一个进程,所以单个 tab 页面崩溃不会影响到整个浏览器。
第三方插件崩溃也不会影响到整个浏览器。
多进程可以充分利用现代 CPU 多核的优势。
方便使用沙盒模型隔离插件等进程,提高浏览器的稳定性。

前端必会-闭包
https://juejin.cn/post/6989231061238546468

前端设计模式-适配器模式 https://juejin.cn/post/7077157067533844517

前端设计模式-单例模式
https://juejin.cn/post/7076490275278815239

class LoginForm {

    constructor() {
      this.state = 'hide'
    }
  
    static getInstance = (function(){
      let instance;
      return function() {
        if (!instance) {
          instance = new LoginForm()
        }
        return instance
      }
    })()
  
    show() {
      if (this.state === 'show') {
        console.log('显示！！！');
        return
      }
      this.state = 'show'
      console.log('登录框已经显示');
    }
  
    hide() {
      if (this.state === 'hide') {
        console.log('隐藏！！！');
        return
      }
      this.state = 'hide'
      console.log('登录框已经隐藏');
    }
  }
  
  let login_1 = LoginForm.getInstance()
  let login_2 =  LoginForm.getInstance()
  
  login_1.show()
  login_2.hide()
  
  console.log('login_1===login_2', login_1===login_2);
  

JavaScript 中queue队列相关算法 *************** JavaScript学习网站
  https://juejin.cn/post/7075962070139125791
链接：https://juejin.cn/post/7075963597758660615

2022新前端面试题（中高级） **********--------- https://juejin.cn/post/7080816244449869855

由 Babel 理解前端编译原理
https://juejin.cn/post/7080832945136599077
编译器工作流程
词法分析
语法分析
语义分析
中间代码生成与优化
生成目标代码

Babel 的编译流程
parse（解析）
transform（转化）
generate（生成）
链接：https://juejin.cn/post/7080832945136599077

未经声明直接赋值
str = "1";
console.log(str); 1
console.log(window.str); 1

https://juejin.cn/post/6989622505090580517  
function a() {
  console.log(b);
}
const b = 1;
a();
//1
  
带你“深入”节流
https://juejin.cn/post/6989041778221383717

从输入url到显示页面，都经历了什么？ https://juejin.cn/post/7081069242807746597
1、首先，在浏览器地址栏中输入url。
2、浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。
3、在发送http请求前，需要域名解析(DNS解析)(DNS（域名系统，Domain Name System）是互联网的一项核心服务，它作为可以将域名和IP地址相互映射的一个分布式数据库，
  能够使人更方便的访问互联网，而不用去记住IP地址。)，解析获取相应的IP地址。
4、浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。（TCP即传输控制协议。TCP连接是互联网连接协议集的一种。）
5、握手成功后，浏览器向服务器发送http请求，请求数据包。
6、服务器处理收到的请求，将数据返回至浏览器。
7、浏览器收到HTTP响应。
8、读取页面内容，浏览器渲染，解析html源码。
9、生成Dom树、解析css样式、js交互。
10、客户端和服务器交互。
11、ajax查询。


图片的懒加载和预加载 https://www.cnblogs.com/psxiao/p/11542930.html  🔥
预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载 则会增加服务器前端压力。

刷新页面对http缓存的影响
正常操作：地址栏输入 url ，跳转链接，前进后退等
强制缓存和协商缓存都有效。
手动刷新：F5，点击刷新按钮，右击菜单刷新
强制缓存失效，协商缓存有效。
强制刷新：ctrl + F5
强制缓存和协商缓存都失效。

链接：https://juejin.cn/post/7078908582594363405

ArrayBuffer 对象表示一段二进制数据，通过这个对象，JavaScript 可以读写二进制数据，操作内存。
Blob 对象表示一个二进制文件，通过这个对象，JavaScript 可以读写二进制文件，操作二进制文件。
FileReader() 是HTML5文件API的重要成员，用于读取文件，可读取Blob对象内容，即文件内容。
链接：https://juejin.cn/post/6934945095665844261

Vue配置compression-webpack-plugin实现Gzip压缩
https://blog.csdn.net/sinat_34849421/article/details/114313031
记录—gzip配置 npm i compression-webpack-plugin --save-dev
https://juejin.cn/post/7024399720206303268

跨域问题及前后端常见解决方案？
https://juejin.cn/post/7069932209590763550

手把手教你利用XSS攻击体验一次黑客
https://juejin.cn/post/7019958037364342797

H5 新增内容大全（包括Web Workers、SSE、WebSocket的详细使用代码）
https://juejin.cn/post/7081849484434489374

防抖与节流
防抖场景
窗口大小变化，调整样式 window.addEventListener('resize', debounce(handleResize, 200))
搜索框，输入后1000毫秒搜索 debounce(fetchSelectData, 300)
表单验证，输入 1000 毫秒后验证 debounce(validator, 1000)
节流场景
scroll 滚动 window.addEventListener('scroll', throttle(handleScroll, 200))
input 动态搜索 throttle(fetchInput, 300)
时间戳 + 定时器
为解决第一次和最后一次都可以触发，把两者结合起来
function throttle(event, wait) {
        let pre = 0, timer = null;
        return function (...args) {
            if (new Date() - pre > wait) {
                clearTimeout(timer);
                timer = null;
                pre = new Date();
                event.apply(this, args)
            } else {
                timer = setTimeout(() => {
                    event.apply(this, args)
                }, wait)
            }
        }
    }
    
链接：https://juejin.cn/post/7078520466603933709

JS为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象 https://www.cnblogs.com/bryanfu/p/15092515.html
String()
可以基本数据类型字符串转换为String对象
Number()
可以基本数据类型数字转换为Number对象
Boolean()
可以基本数据类型布尔值转换为Boolean对象

包装类 https://www.cnblogs.com/ljl-zszy/p/11996492.html
String()、Number()、Boolean()

instanceof它主要是用于检测某个构造函数的原型对象在不在某个对象的原型链上。

https://interview2.poetries.top/days/%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98.html#%E7%AC%AC55%E9%A2%98-js%E4%B8%AD-%E4%B8%8E-%E7%9A%84%E5%8C%BA%E5%88%AB
值1 ?? 值2
值1 || 值2
判断方式不同：

使用 ?? 时，只有当值1为null或undefined时才返回值2；
使用 || 时，值1会转换为布尔值判断，为true返回值1，false 返回值2

判断是否是promise对象
function isPromise (val) {
  return (
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

babel-plugin-import 原理 https://juejin.cn/post/7046709718605103134 
组件库按需加载 借助babel-plugin-import实现
https://juejin.cn/post/6905708824703795214
