彻底理解浏览器的缓存机制 
https://juejin.cn/post/6844903593275817998
expires和Cache-control都是响应头中控制网页缓存的，
expires是http1.0时的头， Cache-Control是http1.1中的规则
参见：https://juejin.cn/post/6844903593275817998

2. 什么文件用强制缓存，什么文件用协商缓存
静态文件强制缓存 

web安全之XSS实例解析
https://juejin.cn/post/6844904179182354439

前端面试必会网络系列面试题汇总 🔥🔥🔥
https://juejin.cn/post/7095945284504518663

XSS
反射型
存储型
基于DOM(DOM based XSS)
防御XSS
    HttpOnly
    输入和输出的检查
    防御 DOM Based XSS
    利用CSP

Web安全之CSRF实例解析
    https://juejin.cn/post/6844904180918779918

XSS攻击，这次一定会！
https://juejin.cn/post/7071893245575299109

存储型 XSS 攻击
特点：恶意代码已经落库，被拼接到HTML中返回。
反射型 XSS 攻击
特点：恶意代码被拼接到URL上，被拼接到HTML中返回。
DOM 型 XSS 攻击
特点：恶意代码被拼接到URL上，被前端JavaScript代码执行。

最后一次，搞懂CSRF攻击！
https://juejin.cn/post/7072338495171362830

XSS
XSS(Cross Site Script)跨站脚本攻击。指的是攻击者向网页注入恶意的客户端代码，通过恶意的脚本对客户端网页进行篡改，
从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。
主要是分为三种：
存储型：即攻击被存储在服务端，常见的是在评论区插入攻击脚本，如果脚本被储存到服务端，那么所有看见对应评论的用户都会受到攻击。
反射型：攻击者将脚本混在URL里，服务端接收到URL将恶意代码当做参数取出并拼接在HTML里返回，浏览器解析此HTML后即执行恶意代码
DOM型：将攻击脚本写在URL中，诱导用户点击该URL，如果URL被解析，那么攻击脚本就会被运行。和前两者的差别主要在于DOM型攻击不经过服务端
如何防御XSS攻击

输入检查：对输入内容中的script和<iframe>等标签进行转义或者过滤
设置httpOnly：很多XSS攻击目标都是窃取用户cookie伪造身份认证，设置此属性可防止JS获取cookie
开启CSP，即开启白名单，可阻止白名单以外的资源加载和运行

CSRF
CSRF攻击(Cross-site request forgery)跨站请求伪造。是一种劫持受信任用户向服务器发送非预期请求的攻击方式，通常情况下，
它是攻击者借助受害者的 Cookie 骗取服务器的信任，但是它并不能拿到Cookie，也看不到Cookie的内容，它能做的就是给服务器发送请求，
然后执行请求中所描述的命令，以此来改变服务器中的数据，也就是并不能窃取服务器中的数据。
防御主要有三种：
验证Token：浏览器请求服务器时，服务器返回一个token，每个请求都需要同时带上token和cookie才会被认为是合法请求
验证Referer：通过验证请求头的Referer来验证来源站点，但请求头很容易伪造
设置SameSite：设置cookie的SameSite，可以让cookie不随跨站请求发出，但浏览器兼容不一

点击挟持
诱使用户点击看似无害的按钮（实则点击了透明 iframe 中的按钮）.
监听鼠标移动事件，让危险按钮始终在鼠标下方.
使用 HTML5 拖拽技术执行敏感操作（例如 deploy key）.

预防策略：
服务端添加 X-Frame-Options 响应头,这个 HTTP 响应头是为了防御用 iframe 嵌套的点击劫持攻击。 这样浏览器就会阻止嵌入网页的渲染。
----- JS 判断顶层视口的域名是不是和本页面的域名一致，不一致则不允许操作，top.location.hostname === self.location.hostname；
敏感操作使用更复杂的步骤（验证码、输入项目名称以删除）。

// (这个来源于LuckyWinty: www.imooc.com/article/295…)
作者：LinDaiDai_霖呆呆
链接：https://juejin.cn/post/6844904151369908232

为什么是tcp而不是udp。tcp丢包怎么办，怎么知道丢包，怎么知道已经重传成功了【描述】
TCP三次握手保证可靠性，而UDP就没有了，信息发出后,不验证是否到达，不可靠。丢包就重传。
有seq，是连续的，如果收到的是不连续，说明中间缺了包；或者是超时了还没收到。因为有seq吧，所以多一个少一个也是知道的

链接：https://juejin.cn/post/6844904137495150599

no-stroe & no-cache

no-store 禁止浏览器和中间服务器缓存。每次都从服务器获取。
注意，no-store 才是真正的完完全全的禁止本地缓存。
no-cache 每次请求都会验证该缓存是否过期。可以在本地缓存，可以在代理服务器缓存，但是这个缓存要服务器验证才可以使用
注意，no-cache 不是不缓存的意思。
链接：https://juejin.cn/post/6899291168891207688

什么是CDN？ https://fe.ecool.fun/topic/73f7c98b-68fd-455b-bc85-e94e1aa20ac1?orderBy=updateTime&order=desc&tagId=16
即内容分发网络
CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，
通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。
CDN的关键技术主要有内容存储和分发技术。

107、cookie的secure这个属性是干啥的
1、secure属性
当设置为true时，表示创建的 Cookie 会被以安全的形式向服务器传输，也就是只能在 HTTPS 连接中被浏览器传递到服务器端进行会话验证，如果是 HTTP 连接则不会传递该信息，
所以不会被窃取到Cookie 的具体内容。
2 、HttpOnly属性
如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。
链接：https://juejin.cn/post/7065497579554865159

108、如何设置一个n秒后失效的localStorage
设置key为一个时间戳，获取后拿当前时间和这个时间戳对比 


TCP 3次握手、4次挥手-----------
TCP 3次握手 
建立连接，客户端向服务端发包
服务端收到包，向客户端发送自己的包
客户端向服务端发送确认包

TCP 4次挥手-----------
客户端向服务端发送连接释放请求
服务端发送确认并同意关闭请求 
服务端发送请求关闭连接
客户端确认包
链接：https://juejin.cn/post/7096496584510636046