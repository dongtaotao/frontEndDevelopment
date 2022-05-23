「2021」高频前端面试题汇总之计算机网络篇
https://juejin.cn/post/6908327746473033741

「2021」高频前端面试题汇总之浏览器原理篇
https://juejin.cn/post/6916157109906341902 

1. 什么是HTTPS协议？ 
超文本传输安全协议（Hypertext Transfer Protocol Secure，简称：HTTPS）
是一种通过计算机网络进行安全通信的传输协议。HTTPS经由HTTP进行通信，
利用SSL/TLS来加密数据包。HTTPS的主要目的是提供对网站服务器的身份认证，
保护交换数据的隐私与完整性。

第一次握手： 客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 SYN-SENT 状态。
第二次握手： 服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便
进入 SYN-RECEIVED 状态。
第三次握手： 当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，
服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。

七、WebSocket
1. 对 WebSocket 的理解
WebSocket是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，
属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。
浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。

8. 对Service Worker的理解
Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。
使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker
中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。
Service Worker 实现缓存功能一般分为三个步骤：首先需要先注册 Service Worker，
然后监听到 install 事件以后就可以缓存需要的文件，那么在下次用户访问的
时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接
读取缓存文件，否则就去请求数据。以下是这个步骤的实现：
// index.js
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function(registration) {
      console.log('service worker 注册成功')
    })
    .catch(function(err) {
      console.log('servcie worker 注册失败')
    })
}
// sw.js
// 监听 `install` 事件，回调中缓存所需文件
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll(['./index.html', './index.js'])
    })
  )
})
// 拦截所有请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        return response
      }
      console.log('fetch source')
    })
  )
})
链接：https://juejin.cn/post/6916157109906341902

如何与服务器保持长连接？
ajax轮询： ajax每隔一段时间向服务端发起请求，保持数据的同步。缺点是效率低，资源浪费。
long poll长轮询： 请求头的connection需要设置为keep-alive，客户端发送请求后，如果没有数据返回，
服务端将这个请求挂起放入队列，直到有数据返回，客户端再次发起请求，以此轮询。优点是能减少无效的网络传输；缺点是无法处理高并发的场景。
iframe长连接：
在网页上嵌入一个iframe标签，它的src指向一个长连接请求。优点是消息传输及时；缺点是消耗服务器资源。

websocket： 双向通信，只需要连接一次，就可以相互传输数据，适合适时通讯，数据适时更新等场景。websoket协议
与http协议没有关系，它是一个建立在tcp协议上的全新协议，为了兼容http握手规范，在握手阶段依然使用http协议，握手完
成之后，数据通过tcp进行传输。
优点是双向通信，不存在跨域限制，只用建立一次连接；缺点是长连接受网络限制比较大，需要处理好重连，只支持ie10以上版本。 

websocket与http的区别：
url以ws：或wss：开头。
状态码是101。
请求头和响应头的connection的值是upgrade，表示协议升级。
请求头和响应头会有sec-websoket字段。


前端如何进行异常/性能监控？ ==============================================================
性能监控可以查看preformance或audis/lighthouse，在用户实时使用的过程中，监听到性能。
异常捕获：
try-catch：局部可疑代码错误捕获
window.onerror：可以捕获到同步错误，无法捕获静态资源异常和js代码错误
资源错误捕获：在资源文件上加上onerror事件
window.addEventListener('error', error=> {...})：在事件捕获阶段进行错误捕捉
unhandledrejection事件：捕获promise错误
Vue.config.errorHandler = (err, vm, info) => {...}：vue异常
作者：飞跃疯人院
链接：https://juejin.cn/post/6945025017834897422

1. http/https 协议
1.0 协议缺陷:
无法复用链接，完成即断开，重新慢启动和 TCP 3次握手
head of line blocking: 线头阻塞，导致请求之间互相影响
1.1 改进:
长连接(默认 keep-alive)，复用
host 字段指定对应的虚拟站点
新增功能:
  断点续传
  身份认证
  状态管理
  cache 缓存
  Cache-Control
  Expires
  Last-Modified
  Etag
2.0:
  多路复用
  二进制分帧层: 应用层和传输层之间
  首部压缩
  服务端推送
  https: 较为安全的网络传输协议

证书(公钥)
SSL 加密
端口 443
TCP:

三次握手
四次挥手
滑动窗口: 流量控制
拥塞处理
慢开始
拥塞避免
快速重传
快速恢复
缓存策略: 可分为 强缓存 和 协商缓存
Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，
Cache-Control的 max-age 优先级高于 Expires

当缓存已经过期时，使用协商缓存
唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag): 
服务器判断资源是否被修改，
最后一次修改时间: Last-Modified(response) & If-Modified-Since (request，上一次返回的Last-Modified)
如果一致，则直接返回 304 通知浏览器使用缓存
如不一致，则服务端返回新的资源
Last-Modified 缺点：
周期性修改，但内容未变时，会导致缓存失效
最小粒度只到 s， s 以内的改动无法检测到
Etag 的优先级高于 Last-Modified

2. 常见状态码
1xx: 接受，继续处理
200: 成功，并返回数据
201: 已创建
202: 已接受
203: 成为，但未授权
204: 成功，无内容
205: 成功，重置内容
206: 成功，部分内容
301: 永久移动，重定向
302: 临时移动，可使用原有URI
304: 资源未修改，可使用缓存
305: 需代理访问
400: 请求语法错误
401: 要求身份认证
403: 拒绝请求
404: 资源不存在
500: 服务器错误
作者：郭东东
链接：https://juejin.cn/post/6844903776512393224
25. 进程和线程的区别

进程：是并发执行的程序在执行过程中分配和管理资源的基本单位，是一个动态概念，竞争计算机系
统资源的基本单位。
线程：是进程的一个执行单元，是进程内科调度实体。比进程更小的独立运行的基本单位。线程也
被称为轻量级进程。
一个程序至少一个进程，一个进程至少一个线程。

HTTP1.x、HTTP2、HTTP3
https://wangyaxing.cn/blog/interview/HTTP/HTTP1.x%E3%80%81HTTP2%E3%80%81HTTP3.html

websocket
特点：
1.支持双向通行，实时性更强
2.可以发送文本也可以发送二进制
3.协议标识符ws加密后是wss,
4.较小的控制开销，
5.支持扩展，
6.无跨域问题

11 http2.0 做了哪些改进 3.0 呢
http2.0 特性如下
二进制分帧传输
多路复用
头部压缩
服务器推送

Http3.0 相对于 Http2.0 是一种脱胎换骨的改变！
http 协议是应用层协议，都是建立在传输层之上的。我们也都知道传输层上面不只有 TCP 协议，
还有另外一个强大的协议 UDP 协议，2.0 和 1.0 都是基于 TCP 的，因此都会有 TCP 带来
的硬伤以及局限性。
而 Http3.0 则是建立在 UDP 的基础上。所以其与 Http2.0 之间有质的不同。
http3.0 特性如下
连接迁移
无队头阻塞
自定义的拥塞控制
前向安全和前向纠错
链接：https://juejin.cn/post/7004638318843412493

https 加密过程是怎样的
使用了对称加密和非对称加密的混合方式

XSS跨域脚本攻击。

4 CSRF 和 XSS 的区别
区别一：
CSRF：需要用户先登录网站A，获取 cookie
XSS：不需要登录。
区别二：（原理的区别）
CSRF：是利用网站A本身的漏洞，去请求网站A的api。
XSS：是向网站 A 注入 JS代码，然后执行 JS

cookie
name　　字段为一个cookie的名称。
value　　字段为一个cookie的值。
domain　　字段为可以访问此cookie的域名。
path　　字段为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie。
expires/Max-Age 　　字段为此cookie超时时间。若设置其值为一个时间，那么当到达此时间后，此cookie失效。不设置的话默认值是Session，
  意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。
Size　　字段 此cookie大小。
http　　字段 cookie的httponly属性。若此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie。
secure　　 字段 设置是否只能通过https来传递此条cookie

常见的post提交数据方式对应的content-type取值
1)application/x-www-form-urlencoded:数据被编码为名称/值对,这是标准的编码格式。
2)multipart/form-data:数据被编码为一条消息，页上的每个控件对应消息中的一个部分。
3)application/json:告诉服务端消息主体是序列化后的 JSON 字符串.
4)text/xml

https://vue3js.cn/interview/webpack/proxy.html#%E4%BA%8C%E3%80%81%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86
面试官：说说webpack proxy工作原理？为什么能解决跨域?
webpack proxy，即webpack提供的代理服务
基本行为就是接收客户端发送的请求后转发给其他服务器
其目的是为了便于开发者在开发模式下解决跨域问题（浏览器安全策略限制）
想要实现代理首先需要一个中间服务器，webpack中提供服务器的工具为webpack-dev-server
proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器

Http2.0的多路复用和Http1.X中的长连接复用有什么区别？
Http/1.* 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接；
Http/1.1 Pipeling解决方式为，若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，
  后续请求只能被阻塞毫无办法，也就是人们常说的线头阻塞；
Http/2多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；
————————————————
原文链接：https://blog.csdn.net/erik_aaron/article/details/96425595

介绍 HTTPS 握手过程
客户端使用https的url访问web服务器,要求与服务器建立ssl连接
web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端
客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥
客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥
之后服务器与客户端使用秘钥加密传输

为什么需要 CA 机构对证书签名
如果不签名会存在中间人攻击的风险，签名之后保证了证书里的信息，比如公钥、服务器信息、企业信息等不被篡改，能够验证客户端和服务器端的“合法性”。

cookie通常是不能跨域访问的，那问什么会有csrf攻击
疑问：
csrf说用户访问了A网站，然后又访问恶意网站B, B中也发送请求到A，携带A站的cookie，这样就构成了csrf。 可是cookie好像是不支持跨域的吧？
回答
浏览器会依据加载的域名附带上对应域名cookie，又不是发送b站的cookie。
就是如果用户在a站登录了生成了授权的cookie 之类的，然后访问b站，b站故意构造请求a站的请求，如删除操作之类的，用script，img或者iframe之类的
加载a站着个地址，浏览器会附带上a站此登录用户的授权cookie信息，这样就构成crsf，会删除掉当前用户的数据

https缺点
HTTPS 握手阶段比较费时，会使页面加载时间延长 50%，增加 10%~20% 的耗电。
HTTPS 缓存不如 HTTP 高效，会增加数据开销。
SSL 证书也需要钱，功能越强大的证书费用越高。
SSL 证书需要绑定 IP，不能在同一个 IP 上绑定多个域名，IPV4 资源支持不了这种消耗。
链接：https://juejin.cn/post/6901070996732641294

Content-Type 字段来获知请求中的消息主体是用何种方式编码

Content-Type: application/json ： json 字符串
Content-Type: application/x-www-form-urlencoded ： & 将 key=value 进行拼接， jquery 默认使用这个
Content-Type: multipart/form-data ： 常用于文件上传
text/plain
text/html

链接：https://juejin.cn/post/6844904073737535496
 

HTTP2的缺点
TCP 以及 TCP+TLS建立连接的延时,HTTP/2使用TCP协议来传输的，而如果使用HTTPS的话，还需要使用TLS协议进行安全传输，而使用TLS也需要一个握手过程,
  在传输数据之前，导致我们需要花掉 3～4 个 RTT。
TCP的队头阻塞并没有彻底解决。在HTTP/2中，多个请求是跑在一个TCP管道中的。但当HTTP/2出现丢包时，整个 TCP 都要开始等待重传，那么就会阻塞该TCP连接中的所有请求。  

CSP白名单知道吗
白名单就是Content Security Policy（内容安全策略）
