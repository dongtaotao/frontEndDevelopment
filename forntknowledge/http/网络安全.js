XSS 攻击类型 
    存储型
    反射型
    文档型
https://juejin.cn/post/6899586271346163719#heading-5
XSS（Cross Site Script）跨站脚本攻击。指的是攻击者向网页注入恶意的客户端代码，通过恶意的脚本对客户
端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。 
防御 XSS 攻击：

输入检查：对输入内容中的 script 和 <iframe> 等标签进行转义或者过滤
设置 httpOnly：设置此属性可防止 JavaScript 获取 Cookie，只能在 HTTP 请求过程中使用 Cookie 

链接：https://juejin.cn/post/6899586271346163719

CSRF 攻击方式
    利用用户的登录状态，并通过第三方的站点来做一些坏事
    自动发 GET 请求
    自动发 POST 请求
    诱导点击发送 GET 请求
防御 CSRF 攻击：

验证 Token：浏览器请求服务器时，服务器返回一个 token，之后每个请求都需要同时带上 token 和 Cookie 才会被认为是合法请求
验证 Referer：通过验证请求头的 Referer 来验证来源站点，但请求头很容易伪造
设置 SameSite：设置 Cookie 的 SameSite，可以让 Cookie 不随跨站请求发出，但浏览器兼容不一

为什么说HTTPS比HTTP安全呢
使用了SSL/TSL协议，在传输中更有安全性，通过服务器证书去验证服务器身份，通过数字签名验证数据是否被篡改过

说一下对称加密和非对称加密
对称加密就是加密和解密都是一把密钥，传输速度上更快，但安全性较差。而非对称性加密私钥被存放在服务器，公钥加密只能私钥来解，私钥加密只能
公钥来解，传输效率低，但更加安全。另外这两种加密方式的公钥中都没有数字证书这类东西，所以无法验证服务器身份

HTTP请求的什么时候用的对称加密什么时候非对称加密
建立通信阶段使用非对称性加密，建立完毕后使用对称性加密进行传输

对称加密的原理
加密和解密都使用同一个密钥进行

如果让你去实现一个CSRF攻击你会怎做？
用户访问B站点，生成B的Cookie，用户没有退出，然后访问了C，C响应后拿B的Cookie对B发起请求，所以难点是如何跨域拿到Cookie，
拿不到Cookie是因为跨域问题，那么可以尝试使用抓包工具找到后台接口，然后使用nginx或者JSONP进行跨域请求

HTTP中的keep-alive有了解吗？
HTTP/1.1中默认开启长连接，在首部的Connection字段中设置，防止传输完之后就断开TCP，让TCP可以传递多条数据

为什么说HTTPS比HTTP安全呢
通过混合加密保证传输的数据不被窃听
通过数字签名的方式保证数据不会被篡改
通过数字证书保证服务器身份的真实性 

14 HTTPS握手过程 
总结
客户端发起 HTTPS 请求，
服务端返回证书，
客户端对证书进行验证，验证通过后本地生成用于构造对称加密算法的随机数
通过证书中的公钥对随机数进行加密传输到服务端（随机对称密钥）， 
服务端接收后通过私钥解密得到随机对称密钥，之后的数据交互通过
对称加密算法进行加解密。（既有对称加密，也有非对称加密）  

2 CSRF
https://interview2.poetries.top/docs/detail-expain.html#_2-2-csrf%E7%9A%84%E6%94%BB%E5%87%BB%E5%8E%9F%E7%90%86


缓存位置
从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络

浏览器缓存机制  https://interview2.poetries.top/excellent-docs/%E9%AB%98%E9%A2%91%E6%A8%A1%E5%9D%97.html#_19-%E5%AD%98%E5%82%A8
Service Worker
Memory Cache
Disk Cache
Push Cache
网络请求

页面有多张图片，HTTP 是怎样的加载表现？
HTTP 1： 浏览器对一个域名下最大 TCP 连接数为 6，所以会请求多次。可以用多域名部署解决。这样可以提高同时请求的数目，加快页面图片的获取速度。
HTTP 2： 可以一瞬间加载出来很多资源，因为，HTTP2 支持多路复用，可以在一个 TCP 连接中发送多个HTTP 请求。
链接：https://juejin.cn/post/7085622765113311269

301 永久重定向 
使用场景
当我们想换个域名，旧的域名不再使用时，用户访问旧域名时用301就重定向到新的域名。其实也是告诉搜索引擎收录的域名需要对新的域名进行收录。
在搜索引擎的搜索结果中出现了不带www的域名，而带www的域名却没有收录，这个时候可以用301重定向来告诉搜索引擎我们目标的域名是哪一个。
链接：https://juejin.cn/post/7085622765113311269
302 临时重定向 
使用场景
当我们在做活动时，登录到首页自动重定向，进入活动页面。
未登陆的用户访问用户中心重定向到登录页面。
访问404页面重新定向到首页。

206部分内容  https://juejin.cn/post/7081289594464895007
理解
客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求
适用场景
一般用来做断点续传，或者视频等大文件的加载


XSS怎么防御
xss: 跨站脚本攻击, 攻击方式是构造可执行的代码，
// 页面内容
{/* <input type="text" value="<%= getParameter("keyword") %>"> */}
<button>搜索</button>
<div>
  您搜索的关键词是：<%= getParameter("keyword") %>
</div>

// 攻击代码
http://xxx/search?keyword="><script>alert('XSS');</script>
复制代码
类型:

存储型: 恶意代码存在数据库里
反射性: 恶意代码存在 URL 里。
dom: 取出和执行恶意代码由浏览器端完成

防御
http-only: 只允许http或https请求读取cookie、JS代码是无法读取
转义: 使用waf, 避免使用v-html等
csp: 只允许加载指定的脚本及样式, 可以通过head属性Content-Security-Policy开启或设置meta标签属性：http-equiv=Content-Security-Policy

9. CSRF是什么？
跨站请求伪造，利用受害者在被攻击网站的登录凭证，冒充受害者提交操作，
攻击方式:
防御:

SameSite 可以让Cookie不随着跨域请求发送

Strict: 只允许相同站点请求的 Cookie
Lax: 允许部分第三方请求携带 Cookie
None: 都允许
Set-Cookie: flavor=choco; SameSite=None; Secure
复制代码

Token验证
cookie是发送时自动带上的，而不会主动带上Token，可以在每次发送时主动发送Token
简单token:uid(用户唯一的身份标识) + time(当前时间的时间戳) + sign(签名)。
3. Referer验证, Referer也容易被修改
4. 验证码，效果很好，但是体验较差 
链接：https://juejin.cn/post/7086060401745461262

XSS系列一：什么是XSS攻击
https://juejin.cn/post/6864111478904111111
XSS系列二：基于vue搭建的网站如何防范XSS攻击
https://juejin.cn/post/6867071794222727176      