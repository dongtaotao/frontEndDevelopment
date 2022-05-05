//============================================================================
TCP 和 UDP 的区别
TCP 是面向连接的，udp 是无连接的即发送数据前不需要先建立链接
TCP 提供可靠的服务。也就是说，通过 TCP 连接传送的数据，无差错，不丢失， 不重复，且按序到达;
  UDP 尽最大努力交付，即不保证可靠交付。 并且因为 tcp 可靠， 面向连接，不会丢失数据因此适合
  大数据量的交换 
TCP 是面向字节流，UDP 面向报文，并且网络出现拥塞不会使得发送速率降低(因 此会出现丢包，对
   实时的应用比如 IP 电话和视频会议等)
TCP 只能是 1 对 1 的，UDP 支持 1 对 1,1 对多
TCP 的首部较大为 20 字节，而 UDP 只有 8 字节
TCP 是面向连接的可靠性传输，而 UDP 是不可靠的

http 和 https 的区别，相比于 http,https 是基于 ssl 加密的 http 协议

//============================================================================
6.20 http/https 协议总结
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

//============================================================================
Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，
  Cache-Control的 max-age 优先级高于 Expires
当缓存已经过期时，使用协商缓存
唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag): 
  服务器判断资源是否被修改
最后一次修改时间: Last-Modified(response) & If-Modified-Since(request，上一次
   返回的Last-Modified)
如果一致，则直接返回 304 通知浏览器使用缓存
如不一致，则服务端返回新的资源
Last-Modified 缺点：
周期性修改，但内容未变时，会导致缓存失效
最小粒度只到 s， s 以内的改动无法检测到
Etag 的优先级高于Last-Modified

//============================================================================
0 fetch 发送 2 次请求的原因
fetch 发送 post 请求的时候，总是发送 2 次，第一次状态码是 204，第二次才成功?
原因很简单，因为你用 fetch 的 post 请求的时候，导致 fetch 第一次发送了一个 Options 请求，
询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的 请求。
//============================================================================
GET 和 POST 的区别
GET在浏览器回退时是无害的，而POST会再次提交请求
GET请求会被浏览器主动缓存，而POST不会，除非手动设置
GET请求参数会被完整保留在浏览器的历史记录里，而POST中的参数不会被保留
GET请求在URL中传送的参数是有长度限制的，而POST没有限制
GET参数通过URL传递，POST放在Request body中
GET请求只能进行 url 编码，而POST支持多种编码方式
GET产生的URL地址可以被收藏，而POST不可以
对参数的数据类型，GET只接受ASCII字符，而POST没有限制
GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息
总结
get: 缓存、请求长度受限、会被历史保存记录
无副作用(不修改资源)，幂等(请求次数与资源无关)的场景
post: 安全、大数据、更多编码类型

//============================================================================
5.1 说一下 http2.0
首先补充一下，http 和 https 的区别，相比于 http,https 是基于 ssl 加密的 http 协议
简要概括:http2.0 是基于 1999 年发布的 http1.0 之后的首次更新
提升访问速度(可以对于，请求资源所需时间更少，访问速度更快，相比 http1.0)
允许多路复用:多路复用允许同时通过单一的 HTTP/2 连接发送多重请求-响应信息。
  改 善了:在 http1.1 中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限 制(连接数量)，
  超过限制会被阻塞
二进制分帧:HTTP2.0 会将所有的传输信息分割为更小的信息或者帧，并对他们进行二 进制编码
首部压缩
服务器端推送
//============================================================================
6.4 http与https区别
在回答这个问题之前，我们先看下http请求存在哪些不足：
通信使用明文（不加密），内容可能会被窃听
不会验证通信方的身份，因此可能会遭遇伪装
无法保证报文的完整性，请求或响应的内容被篡改也无法知道
//============================================================================
混合加密机制的好处是什么
对称密钥加密和非对称密钥加密都有它们各种的优缺点，而混合加密机制就是将两者结合利用它们各自的优点来
进行加密传输。
比如既然对称密钥的优点是加解密效率快，那么在客户端与服务端确定了连接之后就可以用它来进行加密传输。
不过前提是得解决双方都能安全的拿到这把对称密钥。这时候就可以里用非对称密钥加密来传输这把对称密钥，
因为我们知道非对称密钥加密的优点就是能保证传输的内容是安全的。
所以它的好处是即保证了对称密钥能在双方之间安全的传输，又能使用对称加密方式进行通信，这比单纯的使
用非对称加密通信快了很多。以此来解决了HTTP中内容可能被窃听的问题。
//============================================================================
中间人攻击过程如下：
服务器向客户端发送公钥。
攻击者截获公钥，保留在自己手上。
然后攻击者自己生成一个【伪造的】公钥，发给客户端。
客户端收到伪造的公钥后，生成加密hash值发给服务器。
攻击者获得加密hash值，用自己的私钥解密获得真秘钥。
同时生成假的加密hash值，发给服务器。
服务器用私钥解密获得假秘钥。
服务器用加秘钥加密传输信息

防范方法：
服务端在发送浏览器的公钥中加入CA证书，浏览器可以验证CA证书的有效性

//============================================================================
14 简单请求和复杂请求
简单请求
只要同时满足以下两大条件，就属于简单请求：
使用下列方法之一：
GET
HEAD
POST
Content-Type 的值仅限于以下三者之一：
text / plain
multipart / form-data
application / x-www-form-urlencoded
请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器；
XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。

复杂请求
不符合以上条件的就是复杂请求。复杂请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，
称为 预检请求 ，该请求的方法是 Option，通过该请求来查询服务端是否允许跨域请求。

单点登录
用户进入 A 系统，没有登录凭证（ticket），A 系统给他跳到 SSO
SSO 没登录过，也就没有 sso 系统下没有凭证（注意这个和前面 A ticket 是两回事），输入账号密码登录
SSO 账号密码验证成功，通过接口返回做两件事：一是种下 sso 系统下凭证（记录用户在 SSO 登录状态）；
二是下发一个 ticket
客户端拿到 ticket，保存起来，带着请求系统 A 接口
系统 A 校验 ticket，成功后正常处理业务请求
此时用户第一次进入系统 B，没有登录凭证（ticket），B 系统给他跳到 SSO
SSO 登录过，系统下有凭证，不用再次登录，只需要下发 ticket
客户端拿到 ticket，保存起来，带着请求系统 B 接口
作者：HenryLulu_几木
链接：https://juejin.cn/post/6898630134530752520

//============================================================================
前端常见登录实现方案 + 单点登录方案
用户访问网站  a.com 下的 pageA 页面。
由于没有登录，则会重定向到认证中心，并带上回调地址 www.sso.com?return_uri=a.com/pageA，以便登
录后直接进入对应页面。
用户在认证中心输入账号密码，提交登录。
认证中心验证账号密码有效，然后重定向  a.com?ticket=123 带上授权码 ticket，并将认证中心 sso.com
的登录态写入 Cookie。
在 a.com 服务器中，拿着 ticket 向认证中心确认，授权码 ticket 真实有效。
验证成功后，服务器将登录信息写入 Cookie（此时客户端有 2 个 Cookie 分别存有 a.com 和 sso.com 的
登录态）。
链接：https://juejin.cn/post/6933115003327217671

//============================================================================
https 的握手过程
客户端发出 https 请求，请求服务端建立 SSL 连接
服务端收到 https 请求，申请或自制数字证书，得到公钥和服务端私钥，并将公钥发送给客户端
客户端验证公钥，不通过验证则发出警告，通过验证则产生一个随机的客户端私钥
客户端将该随机生成的私钥与服务端公钥进行对称加密后传给服务端
服务端收到加密内容后，通过服务端私钥进行非对称解密，得到客户端私钥
服务端将客户端私钥和内容进行对称加密，并将加密内容发送给客户端
客户端收到加密内容后，通过客户端私钥进行对称解密，得到内容

//============================================================================
HTTP1.x、HTTP2、HTTP3
HTTP1.0 和HTTP1.1的一些区别
HTTP2.0和HTTP1.X相比的新特性
为什么 HTTP1.1 不能实现多路复用
多路复用和 keep alive区别

#http1.0 和HTTP1.1的一些区别
长连接
  在HTTP1.1中默认开启Connection： keep-alive，在一个TCP连接上可以传送多个HTTP请求和响应，减少
  了建立和关闭连接的消耗和延迟
缓存处理
  http1.0 主要使用header中的Exprires， If-Modified-Since来做为缓存判断的标准
  HTTP1.1 Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓
  存头来控制缓存策略。
带宽优化及网络连接的使用
  HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送
  过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即
  返回码是206（Partial Content）
Host头处理
  在HTTP/1.0中认为每台服务器都有唯一的IP地址，但随着虚拟主机技术的发展，多个主机共享一个IP地址
  愈发普遍，HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会400错误

#HTTP2.0和HTTP1.X相比的新特性
#HTTP1.x存在的问题：
  TCP连接数限制 对于同一个域名，浏览器最多只能同时创建6 ~ 8个TCP链接。为了解决数量的限制，
  出现 域名分片技术。
  队头阻塞(Head-Of-Line Blocking) 当HTTP开启长连接时，共用一个TCP连接，同一时刻只能处理一个请求，浏览器按 FIFO 原则
  处理请求，如果上一个响应没返回，后续请求 - 响应都会受阻。
  header内容多，并且每次请求 Header不会变化太多，没有相应的压缩传输优化方案
  为了尽可能减少请求数，需要做合并文件、雪碧图、资源内联等优化工作，但是这无疑造成了单个请求内容变大延迟变高的问题，且内嵌的资源不能有效地使用缓存机制
  明文传输不安全
#HTTP2
二进制传输 HTTP/2传输数据量的大幅减少,主要有两个原因:以二进制方式传输和Header 压缩， HTTP/2 采用二进制格式传输数据，而非HTTP/1.x 里纯文本形式
  的报文 ，二进制协议解析起来更高效 HTTP/2 将请求和响应数据分割为更小的帧，并且它们采用二进制编码。帧是数据传输的最小单位，
  以二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧。
多路复用 在一个TCP连接上，我们可以向对方不断发送帧，每帧的 stream identifier 标明这一帧属于哪个流，然后
  在对方接收时，根据 stream identifier 拼接每个流的所有帧组成一整块数据。 把 HTTP/1.1 每个请求都
  当作一个流，那么多个请求变成多个流，请求响应数据分成多个帧，不同流中的帧交错地发送给对方，这就是 HTTP/2 中的多路复用。
header压缩 使用 HPACK 算法来压缩首部内容 
   服务端推送 浏览器发送一个请求，服务器主动向浏览器推送与这个请求相关的资源，这样浏览器就不用发起后续请求。比如，
   在浏览器刚请求HTML的时候就提前把可能会用到的JS、CSS文件发给客户端，减少等待的延迟，这被称为"服务器推送"（ Server Push，也叫 Cache push）
   HTTP/1 的几种优化可以弃用: 合并文件、内联资源、雪碧图、域名分片对于 HTTP/2 来说是不必要的，使用 h2 尽可能将资源细粒化，文件分解地尽
   可能散，不用担心请求数多
服务端推送
//================================================================
#为什么 HTTP1.1 不能实现多路复用
HTTP/1.1 不是二进制传输，而是通过文本进行传输。由于没有流的概念，在使用并行传输（多路复用）传递数据时，接收端在
接收到响应后，并不能区分多个响应分别对应的请求，所以无法将多个响应的结果重新进行组装，也就实现不了多路复用。

#多路复用和 keep alive区别
队头阻塞（Head-of-Line Blocking），HTTP1.X虽然可以采用Keep alive来解决复用TCP的问题，但是还是无法解决请求阻塞；
所谓请求阻塞意思就是一条 TCP 的connection在同一时间只允许一个请求经过，这样假如后续请求想要复用这个链接就必须等到前一个完成才行，正如上图左边表示的。
之所以有这个问题就是因为HTTP1.x需要每条请求都是可以识别，按顺序发送，否则serve就无法判断该响应哪个具体的请求。
HTTP2采用多路复用是指，在同一个域名下，开启一个TCP的connection，每个请求以stream的方式传输，每个stream有唯一的标识，connection一旦建立，后
续的请求都可以复用这个connection并且可以同时发送，server端可以根据stream的唯一标识来响应对应的请求。

#http3
#HTTP/2 的缺点
尽管HTTP/2解决了很多1.1的问题，但HTTP/2仍然存在一些缺陷，这些缺陷并不是来自于HTTP/2协议本身，而是来源于底层的
TCP协议，我们知道TCP链接是可靠的连接，如果出现了丢包，那么整个连接都要等待重传，HTTP/1.1可以同时使用6个TCP连接，
一个阻塞另外五个还能工作，但HTTP/2只有一个TCP连接，阻塞的问题便被放大了。

#http3
由于TCP协议已经被广泛使用，我们很难直接修改TCP协议，基于此，HTTP/3选择了一个折衷的方法——UDP协议，
HTTP/2在UDP的基础上实现多路复用、0-RTT、TLS加密、流量控制、丢包重传等功能。

//================================================================
HTTPS通过什么保证是安全的
HTTP + 加密 + 认证 + 完整性保护 = HTTPS

//================================================================
20.2 缓存策略
通常浏览器缓存策略分为两种：强缓存和协商缓存，并且缓存策略都是通过设置 HTTP Header 来实现的

#20.2.1 强缓存
强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control 。强缓存表示在缓存期间不需要请求，state code为 200
Expires
Expires: Wed, 22 Oct 2018 08:41:00 GMT
Expires 是 HTTP/1 的产物，表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。并且 Expires 受限于本地时间，如果修改
了本地时间，可能会造成缓存失效。

Cache-control
Cache-control: max-age=30
Cache-Control 出现于 HTTP/1.1，优先级高于 Expires 。该属性值表示资源会在 30 秒后过期，需要再次请求。
Cache-Control 可以在请求头或者响应头中设置，并且可以组合使用多种指令

从图中我们可以看到，我们可以将多个指令配合起来一起使用，达到多个目的。比如说我们希望资源能被缓存下来，并且是客户端和代理服务
器都能缓存，还能设置缓存失效时间等
一些常见指令的作用
//================================================================
#20.2.2 协商缓存
如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag
当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。
Last-Modified 和 If-Modified-Since
Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更
新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。
但是 Last-Modified存在一些弊端：
如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源
因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源 因
为以上这些弊端，所以在 HTTP / 1.1 出现了 ETag
ETag 和 If-None-Match
ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。
并且 ETag优先级比 Last-Modified 高。
以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。如果什么缓存策略都没设置，那么浏览器会怎么处理？
对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 Date 减去 Last-Modified 值的 10% 作为缓存时间。

//================================================================
https://muyiy.cn/question/network/91.html
介绍 HTTPS 握手过程
客户端使用https的url访问web服务器,要求与服务器建立ssl连接
web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端
客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥
客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥
之后服务器与客户端使用秘钥加密传输

//================================================================
http1.0 http1.1 http2.0特性及区别
http1.0特性
无状态：服务器不跟踪不记录请求过的状态
无连接：浏览器每次请求都需要建立tcp连接
无状态
对于无状态的特性可以借助cookie/session机制来做身份认证和状态记录

无连接
无连接导致的性能缺陷有两种：
1. 无法复用连接
每次发送请求，都需要进行一次tcp连接（即3次握手4次挥手），使得网络的利用率非常低
2. 队头阻塞
http1.0规定在前一个请求响应到达之后下一个请求才能发送，如果前一个阻塞，后面的请求也给阻塞的 ***************
http1.1特性
为了解决http1.0的性能缺陷，http1.1出现了

http1.1特性：
长连接：新增Connection字段，可以设置keep-alive值保持连接不断开
管道化：基于上面长连接的基础，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回
缓存处理：新增字段cache-control
断点传输
长连接
http1.1默认保持长连接，数据传输完成保持tcp连接不断开,继续用这个通道传输数据

管道化
基于长连接的基础，我们先看没有管道化请求响应：
tcp没有断开，用的同一个通道
请求1 > 响应1 --> 请求2 > 响应2 --> 请求3 > 响应3
管道化的请求响应：
请求1 --> 请求2 --> 请求3 > 响应1 --> 响应2 --> 响应3
即使服务器先准备好响应2,也是按照请求顺序先返回响应1
虽然管道化，可以一次发送多个请求，但是响应仍是顺序返回，仍然无法解决队头阻塞的问题

缓存处理
当浏览器请求资源时，先看是否有缓存的资源，如果有缓存，直接取，不会再发请求，如果没有缓存，则发送请求
通过设置字段cache-control来控制

断点传输
在上传/下载资源时，如果资源过大，将其分割为多个部分，分别上传/下载，如果遇到网络故障，可以从已经上传/下载好的地方继续请求，不用从头开始，提高效率
在 Header 里两个参数实现的，客户端发请求时对应的是 Range 服务器端响应时对应的是 Content-Range

http2.0特性
二进制分帧
多路复用： 在共享TCP链接的基础上同时发送请求和响应
头部压缩
服务器推送：服务器可以额外的向客户端推送资源，而无需客户端明确的请求
  二进制分帧
  将所有传输的信息分割为更小的消息和帧,并对它们采用二进制格式的编码

多路复用
基于二进制分帧，在同一域名下所有访问都是从同一个tcp连接中走，http消息被分解为独立的帧，乱序发送，服务端根据标识符和首部将消息重新组装起来

区别
http1.0 到http1.1的主要区别，就是从无连接到长连接
http2.0对比1.X版本主要区别就是多路复用

//================================================================

http/1 :
默认不支持长连接，需要设置keep-alive参数指定
强缓存expired、协商缓存last-modified\if-modified-since 有一定的缺陷
http 1.1 :
默认长连接(keep-alive)，http请求可以复用Tcp连接，但是同一时间只能对应一个http请求(http请求在一个Tcp中是串行的)
增加了强缓存cache-control、协商缓存etag\if-none-match 是对http/1 缓存的优化
http/2 :
多路复用，一个Tcp中多个http请求是并行的 (雪碧图、多域名散列等优化手段http/2中将变得多余)
二进制格式编码传输
header压缩 
服务端推送

//================================================================
cookie 和 token 都存放在 header 中，为什么不会劫持 token？ https://muyiy.cn/question/browser/28.html
1攻击者通过xss拿到用户的cookie然后就可以伪造cookie了。
2或者通过csrf在同个浏览器下面通过浏览器会自动带上cookie的特性
在通过 用户网站-攻击者网站-攻击者请求用户网站的方式 浏览器会自动带上cookie
但是token
1 不会被浏览器带上 问题2 解决
2 token是放在jwt里面下发给客户端的 而且不一定存储在哪里 不能通过document.cookie直接拿到，通过jwt+ip的方式 可以防止 被劫持 即使被劫持
也是无效的jwt
//===================================
介绍下如何实现 token 加密
后端通过随机数加签名生成一个token，前端拿到token后通过拦截器在接口调用时添加token。

HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器该网页是从哪个页面链接过来的，
服务器因此可以获得一些信息用于处理。
https://blog.csdn.net/shenqueying/article/details/79426884
Referer  是  HTTP  请求header 的一部分，当浏览器（或者模拟浏览器行为）向web 服务器发送请求的时候，头信息里有包含  Referer  。
比如我在www.google.com 里有一个www.baidu.com 链接，那么点击这个www.baidu.com ，它的header 信息里就有：
Referer=http://www.google.com
由此可以看出来吧。它就是表示一个来源。看下图的一个请求的 Referer  信息。 

为什么 HTTP1.1 不能实现多路复用
HTTP/1.1 不是二进制传输，而是通过文本进行传输。由于没有流的概念，在使用并行传输（多路复用）传递数据时，接收端在接收到响应后，并不
能区分多个响应分别对应的请求，所以无法将多个响应的结果重新进行组装，也就实现不了多路复用。 

node实践彻底搞懂强缓存和协商缓存 ***************************
https://juejin.cn/post/6942264171870289956

怎么删除cookie？
把它的Max-age设置为0，也就是立马失效，也就是删除

列举三种禁止浏览器缓存的头字段，并写出响应的设置值
https://juejin.cn/post/7058520769994686500#heading-5

CDN缓存原理介绍 https://juejin.cn/post/7058520769994686500#heading-5
CDN就是内容分发网络，各地部署多套静态存储服务，自动选择最近的节点内容，不再请求原始服务器，适合存储更新很少的静态内容。

传统访问：用户在浏览器输入域名发送请求-解析域名获取服务器IP地址-根据IP地址找到对应的服务器-服务器响应并返回数据

npm 模块安装机制，为什么输入npm install就可以自动安装对应模块
发出npm install命令
查询node_modules目录之中是否已经存在指定模块
若存在，不再重新安装
若不存在

npm 向 registry 查询模块压缩包的网址
下载压缩包，存放在根目录下的.npm目录里
解压压缩包到当前项目的node_modules目录
链接：https://juejin.cn/post/7058520769994686500

对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略
对于某些不需要缓存的资源，可以使用 Cache-control: no-store ，表示该资源不需要缓存
对于频繁变动的资源，可以使用 Cache-Control: no-cache 并配合 ETag 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新
对于代码文件来说，通常使用 Cache-Control: max-age=31536000 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件
链接：https://juejin.cn/post/6844903928442667015

对于 cookie，我们还需要注意安全性

属性	作用
value	如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识
http-only	不能通过 JS访问 Cookie，减少 XSS攻击
secure	只能在协议为 HTTPS 的请求中携带
same-site	规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击

http/2的Server Push有什么优点
支持服务端推送，意味着服务端可以在发送页面HTML时主动推送其它资源，而不用等到浏览器解析到相应位置再发起请求
另外，服务端可以主动推送，客户端也有权选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送RST_STREAM帧来拒收


如何开启http2
nginx开启http2

配置http2.0
配置Nginx开启http 2.0特别简单，只要在Nginx配置文件中找到你要开启http2.0的域名server模块，然后将 listen 443 ssl;改成 listen 443 ssl http2; 即可。
server {
	listen 443 ssl http2;
	server_name domain.com;
} 


tcp 是如何保证可靠传输的⭐⭐⭐⭐⭐
校验和
  数据传输的过程中，每一个数据段都有一个16位的编号，将这些编号加起来并取反得出一个校验和，看收到后是否和之前的一致
序列号和确认应答
  每次发送数据的时候，服务端都会返回一个确认应答以及将要发送的序列号
超时重传、滑动窗口、拥塞控制

为什么 TCP 要进行流量控制？⭐⭐⭐
为了解决发送方和接收方的速率不一致问题，如果发送方的速率过快的话，接收方处理不过来，只能放在缓存区，缓存区满了，就只能丢包了。所以需要进行流量控制

TCP 为什么会重传？⭐⭐⭐⭐⭐

TCP 传输是一应一答的，如果中间丢包了的话，那么就会处于僵持状态，所以在发送发会设置一个定时器，一段时间（这个时间应该略大于一个发送来回的时间）如果没有收到对方ACK确认的话，就会重新发送数据，这就是超时重传

如果要发送12345中间丢包的话 只收到了1、3、4、5·，服务器检测出来，会连续发送三个Ack=2，触发快速重传，在定时器之前就完成重传
————————————————
版权声明：本文为CSDN博主「晟小明」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_33277654/article/details/122924692