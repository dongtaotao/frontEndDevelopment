拼多多和酷家乐面试总结(已拿offer)
https://mp.weixin.qq.com/s/EG5HCgz_M1S2Xbky0lgDxg 

从输入url到页面展示发生了什么
http://www.zhuguannan.cn/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86/%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%B1%95%E7%A4%BA%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88.html
总体来说分为以下几个过程：
查看缓存
DNS解析
TCP连接
发送HTTP请求
服务器处理请求并返回HTTP报文
关闭TCP连接
浏览器解析渲染页面

浏览器缓存 http
强缓存， 协商缓存
http://www.zhuguannan.cn/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.html

同源策略
限制从同一个源加载的文档或脚本与另一个源的资源进行交互。

满足一下任一个条件即构成跨域

协议不同
域名(IP地址)不同
端口不同
如何解决跨域
nginx反向代理
CORS(Cross-origin resource sharing) 跨域资源共享，允许浏览器向跨源服务器发起XMLHttpRequest请求。服务端设置Access-Control-Allow-Origin就可以开启
jsonp利用script标签的src属性中的连接可以访问跨域的js脚本。利用这个特性，服务端返回一段调用某个函数的js代码，在src中进行调用，以实现跨域。
Websocket这是一种双向通信协议，在建立连接后，其server和client都能主动向对方发送或接受数据而不受同源策略的限制。

csrf, xss-CSRF:通常称为跨站请求伪造
Cross-site-request forgery缩写CSRF，攻击原理，防御措施。
CSRF防御措施：1.token验证；2.Referer验证；3.隐藏令牌
CSRF攻击原理：依赖用户点击登录，下发cookie，引诱点击，访问，指向的是网站A的api接口，特别是get类型。加token验证，注册成功以后，
没有手动上传token，没有带token就避免了攻击；Referer验证，指页面来源，是否来自我这个站点下的页面，是的话执行动作，不是就拦截。
XSS-Cross-site scripting跨域脚本攻击：XSS原理，向页面注入脚本，防御措施，让脚本不能执行

XSS和CSRF区别
XSS是向你页面注入JS去执行，然后JS函数体里做它想做的事情
CSRF是利用你本身的漏洞去帮助你主动执行那些接口，CSRF依赖于你这个用户要登录网站

异步加载的方式：动态脚本加载；defer；async

异步加载的区别：
defer是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行。
async是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关。

链接：https://juejin.cn/post/6977214179149086751

了解错误监控类：前端错误的分类，错误的捕获方式，上报错误的基本原理。前端错误的分类：即时运行错误，代码错误，资源加载错误。
  即时运行错误的捕获方式：try...catch...，window.onerror
 资源加载错误：object.onerror，performance.getEntries()，Error事件
 上报错误的基本原理：1. 采用ajax通信的方式上报；2. 利用Image对象上报。

缓存是为了提高页面性能优化的.

单例模式
class SingleDog{
    show() {
     console.log('我是单例对象')
    }
    static getInstance() {
     // 判断是否已经new过这个实例
     if(!SingleDog.instance) {
      SingleDog.instance = new SingleDog()
     }
     return SingleDog.instance
    }
   }

一个月面试大厂，中厂，小厂的总结｜2021 年中总结 
   https://juejin.cn/post/6977214179149086751#heading-9

面试官：为什么typeof null 是Object?
答：
因为在JavaScript中，不同的对象都是使用二进制存储的，如果二进制前三位都是0的话，系统会判断为是Object类型，而null的二进制全是0，自然也就判断为Object
这个bug是初版本的JavaScript中留下的，扩展一下其他五种标识位:
原文链接：https://blog.csdn.net/qq_33277654/article/details/122924692

localstorage 怎么存储图片⭐⭐⭐⭐
创建一个canvas对象，把图片保存在 canvas 中，然后 canvas 对象 toDataUrl,在把 dataurl 数据存储在 localstorage 中。
或者使用 blob 二进制流存储，canvas 对象toBlob
https://blog.csdn.net/qq_33277654/article/details/122924692

如何实现大文件上传？
使用 input 接受大文件，使用file.slice进行分割分块上传（制定好一个块的大小，然后进行分割），等所有块上传完毕之后，promise.all(),
运行成功回调

web worker是干什么的？
js是单线程的，而web worker可以多创建一个子线程，多出来的这个子线程执行代码时不会阻塞主线程。它有几个限制，
同源限制，子线程资源必须和主线程资源是同源
dom限制，子线程不能操作dom
文件限制，不能打开本机（file://）文件,只能来源于网络
通信限制，只能使用postmessage来传输信息
脚本限制，不能使用alert、confirm方法

e.target和e.currentTarget的区别
e.target是点击的那个对象，e.currentTarget是绑定该事件的对象

cookie设置HttpOnly
response.setHeader("Set-Cookie", "cookiename=value; Path=/;Domain=domainvalue;Max-Age=seconds;HTTPOnly");
cookie 没有提供删除的 API，如果想要删除的 的话可以把 max-age 设为0或者把 expire 设置为当前时间（立刻过期）即可 

缓存位置：
内存缓存Memory-Cache
离线缓存Service-Worker
磁盘缓存Disk-Cache
推送缓存Push-Cache

tcp 和udp有什么区别
连接方面
tcp面向连接，udp不需要连接
tcp需要三次握手四次挥手请求连接
可靠性
tcp是可靠传输；一旦传输过程中丢包的话会进行重传
udp是不可靠传输，但会最大努力交付
工作效率
UDP实时性高，比TCP工作效率高
因为不需要建立连接，更不需要复杂的握手挥手以及复杂的算法，也没有重传机制
是否支持多对多
TCP是点对点的
UDP支持一对一，一对多，多对多
首部大小
tcp首部占20字节
udp首部占8字节
原文链接：https://blog.csdn.net/qq_33277654/article/details/122924692

Vue中的nextTick是微任务还是宏任务
nextTick的内部实现如果支持 promise 那就使用 promise，没有就用MutationObserver（微任务），
在没有就用 setImmediate（宏任务），还没有就用 setTimeOut；所以nextTick 有可能是宏任务，也有可能是微任务

csrf 攻击原理
跨域请求伪造
用户登录了 A 页在不退出登录的情况下，访问了 危险网站B 页，这个时候 B 页带着 A 页的 cookie 向 A 的服务端发起请求，会让服务端认为这个是可信任用户，
从而达到攻击的目的
实现方式：
在 B 页中可以使用一个隐藏的 iframe 来向 A 页发起请求，只要用户没有登出 A 网站，临时 cookie 一直保存在内存中，
这个时候就可以危险网站B就可以拿着 cookie 为所欲为了
防御方式
添加token

为什么浏览器是多进程的？
因为避免一个 tab页出错而导致整个浏览器崩溃

在 Canvas 中如何处理跨域的图片
img.setAttribute("crossOrigin", "anonymous");

如何实现页面文本不可复制
有 CSS 和 JS 两种方法，以下任选其一或结合使用
使用 CSS 如下： https://q.shanyue.tech/fe/dom/454.html
user-select: none;
或使用 JS 如下，监听 selectstart 事件，禁止选中。
当用户选中一片区域时，将触发 selectstart 事件，Selection API 将会选中一片区域。禁止选中区域即可实现页面文本不可复制。
document.body.onselectstart = (e) => {
  e.preventDefault();
};
document.body.oncopy = (e) => {
  e.preventDefault();
};

在浏览器中点击 a 标签保存为文件如何做
有两种方式:
a.download 当指定 a 标签的 download 属性时，点击该链接会直接保存为文件，文件名为 download 属性
通过对 a 标签指定的 URL 在服务器设置响应头 Content-Disposition: attachment; filename="filename.jpg" 可直接下载

如何删除项目中没有使用到的 package
可以采用 depcheck (opens new window)来完成这件事
$ npm install depcheck -g
$ depcheck
Unused dependencies
* underscore
Unused devDependencies
* jasmine
Missing dependencies
* lodash

setInterval存在的一些问题：https://wangyaxing.cn/blog/interview/JavaScript/setTimeout%E5%92%8CrequestAnimationFrame.html#settimeout-%E5%92%8C-setinterval%E5%8C%BA%E5%88%AB
javaScript中使用 setInterval 开启轮询。定时器代码可能在代码再次被添加到队列之前还没有完成执行，结果导致定时器代码连续运行好几次，而之间没有任何停顿。

requestAnimationFrame会在每次屏幕刷新的时候被调用，
而requestIdleCallback则会在每次屏幕刷新时，判断当前帧是否还有多余的时间，如果有，则会调用requestIdleCallback的回调函数，
总结
从单线程模型和任务队列出发理解 setTimeout(fn, 0)，并不是立即执行。
JS 动画, 用requestAnimationFrame 会比 setInterval 效果更好
requestIdleCallback()常用来切割长任务，利用空闲时间执行，避免主线程长时间阻塞。 
#

总结
class是一个语法糖，其底层还是通过 构造函数 去创建的。
类的所有方法都定义在类的prototype属性上面。
静态方法：在方法前加static，表示该方法不会被实例继承，而是直接通过类来调用。
静态属性：在属性前加static，指的是 Class 本身的属性，而不是定义在实例对象（this）上的属性。
ES6的继承和ES5的继承区别在于：
ES5的继承，实质是先创建了子类的实例对象 this, 然后再将 父类的方法添加到 this上面
ES6的继承是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。
super
作为函数调用，代表父类的构造函数
作为对象调用，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

null是对象吗？为什么？
结论: null不是对象。
解释: 虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，
为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。
链接：https://juejin.cn/post/6844903974378668039

为什么要用 setTimeout 模拟 setInterval ？ https://segmentfault.com/a/1190000038829248
1.即使调用的代码报错了，setInterval会持续的调用
2.setInterval无视网络延迟。在使用ajax轮询服务器是否有新数据时，它会去一遍又一遍的发送请求，如果网络状况不良，一个请求发出，还没有返回结果，它会坚持不懈的继续发送请求，最后导致的结果就是请求堆积。 
3.setInterval不定时。如果它调用的代码执行的时间小于定时的时间，它会跳过调用，这就导致无法按照你需要的执行次数或无法得到你想要的结果。
解决办法：
　　用 setTimeout 代替

setInterval 有两个缺点：
使用 setInterval 时，某些间隔会被跳过；
可能多个定时器会连续执行；
关于setInterval 不准确的问题https://www.jianshu.com/p/f5bd2ec8fc1e

axios 如何取消请求
https://blog.csdn.net/sinat_17775997/article/details/123768484

https://www.jianshu.com/p/c383f45f98a7
最近在项目中遇到一个问题，在连续发送同一请求时，如果第二次请求比第一次请求快，
那么实际显示的是第一次请求的数据，这就会造成数据和我选择的内容不一致的问题。解决的方案：在后续发送请求时，
判断之前的请求是否完成（同一个接口），如果未完成则立即取消。然后在发送新的请求。

axios如何取消重复请求 https://www.cnblogs.com/Qooo/p/14054116.html
axios如何取消接口请求 https://www.jianshu.com/p/4c27f4a1ab7f

JavaScript --用ES5实现实现私有变量
function Person(name){
  var _name=name;
  this.getName=function(){
      console.log(_name)
  }
}

var p=new Person('bibibi');

console.log(p._name);//undefined
console.log(p.getName());//bibibi


js数组fill（）方法
https://www.cnblogs.com/pwindy/p/12971521.html
1.采用一默认值填初始化数组。
 
 const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr1.fill(7)
console.log('%s', arr1)
 
7,7,7,7,7,7,7,7,7,7,7
2.制定开始和结束位置填充。
实际填充结束位置是前一位。

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr3.fill(7, 2, 5)
console.log('%s', arr3)
 
 
1,2,7,7,7,6,7,8,9,10,11
3.结束位置省略。
从起始位置到最后。

onst arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr4.fill(7, 2)
console.log('%s', arr4)
 
1,2,7,7,7,7,7,7,7,7,7

[10,20,30].map(parseInt) 的返回结果是什么？ https://juejin.cn/post/7067099839103762439
10 NAN, NAN
主要考察拆解函数；parseInt()的第二个参数，进制转换（接收两个参数），parseInt方法还可以接受第二个参数（2到36之间），
表示被解析的值的进制，返回该值对应的十进制数。默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。详细请看该博文：blog.csdn.net/josavion/ar…

requestIdleCallback  

e.target
触发事件的元素
e.currentTarget
当前注册事件的元素

使用html2canvas在前端生成图片 https://www.jianshu.com/p/22bd5b98e38a

阿里一面：熟悉事件循环？那谈谈为什么会分为宏任务和微任务。
https://juejin.cn/post/7073099307510923295

const str = 'ssssssssss'

// 如果指定填充的位数小于等于str的长度，就不会进行填充
// 指定的位数需大于str的长度，就会填充str长度减去指定位数
// 如下指定了15，最终填充的只有5位，因为str的长度为10
console.log(str.padStart(15, '*')) // *****ssssssssss
console.log(str.padEnd(15, '-')) // ssssssssss-----

https://mp.weixin.qq.com/s/EG5HCgz_M1S2Xbky0lgDxg
组件库如何做按需加载
我常用的是babel-plugin-import  babel-pligin-component

组件库的按需加载 https://juejin.cn/post/6844904166586843149
那怎么去通过按需加载去使用组件库，答案是通过babel插件：babel-plugin-component（element 通过fork ant-design库的 ）
在babel转码的时候，把整个库element-ui的引用，变为element-ui/lib/button具体模块的引用。这样webpack收集依赖module就不是整个element-ui，而是里面的button

webpack 如何实现动态加载
讲道理 webpack 动态加载就两种方式：import()和 require.ensure，不过他们实现原理是相同的。
我觉得这道题的重点在于动态的创建 script 标签，以及通过 jsonp 去请求 chunk，推荐的文章是：webpack 是如何实现动态导入的

require 引入的模块 webpack 能做 Tree Shaking 吗？
不能，Tree Shaking 需要静态分析，只有 ES6 的模块才支持。

图片懒加载的实现原理  https://juejin.cn/post/6941278592215515143
<div class="container">
     <img src="loading.gif"  data-src="pic.png">
     <img src="loading.gif"  data-src="pic.png">
     <img src="loading.gif"  data-src="pic.png">
     <img src="loading.gif"  data-src="pic.png">
     <img src="loading.gif"  data-src="pic.png"> 
     <img src="loading.gif"  data-src="pic.png">
</div>
<script>
var imgs = document.querySelectorAll('img');
function lozyLoad(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var winHeight= window.innerHeight;
		for(var i=0;i < imgs.length;i++){
			if(imgs[i].offsetTop < scrollTop + winHeight ){
				imgs[i].src = imgs[i].getAttribute('data-src');
			}
		}
	}
  window.onscroll = lozyLoad();  
</script>  
    