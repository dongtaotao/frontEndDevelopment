跳槽面试技巧记录 很好的文章 https://juejin.cn/post/7090733245590929421 🔥🔥🔥🔥  

【🐯初/中级前端面经】中小型公司面试时都会问些什么? 🔥🔥
https://juejin.cn/post/7064740689178787871#heading-5

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Lazy-Load</title>
//   <style>
//     .img {
//       width: 200px;
//       height:200px;
//       background-color: gray;
//     }
//     .pic {
//       // 必要的img样式
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="img">
//       // 注意我们并没有为它引入真实的src
//       <img class="pic" alt="加载中" data-src="./images/1.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/2.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/3.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/4.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/5.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/6.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/7.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/8.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/9.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/10.png">
//     </div>
//   </div>
// </body>
// </html>

在懒加载的实现中，有两个关键的数值：一个是当前可视区域的高度，另一个是元素距离可视区域顶部的高度。

{/* <script> */}
    // 获取所有的图片标签
    const imgs = document.getElementsByTagName('img')
    // 获取可视区域的高度
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
    let num = 0
    function lazyload(){
        for(let i=num; i<imgs.length; i++) {
            // 用可视区域高度减去元素顶部距离可视区域顶部的高度
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
            if(distance >= 0 ){
                // 给元素写入真实的src，展示图片
                imgs[i].src = imgs[i].getAttribute('data-src')
                // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
                num = i + 1
            }
        }
    }
    // 监听Scroll事件
    window.addEventListener('scroll', lazyload, false);
// </script>

https://juejin.cn/book/6844733750048210957/section/6844733750119514126  图片懒加载

为什么npm run dev就能启动一个项目？
https://www.bilibili.com/video/BV1L34y1i7Ei?spm_id_from=333.999.0.0

webpack源码分析
https://juejin.cn/column/7004269262806188069

手把手实现输入框@功能（完结）
https://juejin.cn/post/7093142333201317901
聊天输入框如何实现回车发送、粘贴文本和图片？
https://juejin.cn/post/7089428335700377613

postcss-px2rem，插件

移动端1px解决方案 https://juejin.cn/post/7093300285765845028#heading-7
使用伪元素 transform scale
.line5 {
    margin-top: 50px;
    position: relative;
    height: 60px;
}
.line5:after{
    content:" ";
    position:absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
    box-sizing: border-box;
    border: 1px solid red;
    border-radius: 4px;
}
我们可以使用 css 伪类 + transform 来优化这一问题。即把默认的 1px 宽度给压缩 0.5 倍。

拦截 URL SCHEME
URL SCHEME是一种类似于url的链接，是为了方便app直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的，
例如: qunarhy://hy/url?url=ymfe.tech，protocol 是 qunarhy，host 则是 hy。
拦截 URL SCHEME 的主要流程是：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 
URL SCHEME（包括所带的参数）进行相关操作。
在实践过程中，这种方式有一定的缺陷：
使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。
创建请求，需要一定的耗时，比注入 API 的方式调用同样的功能，耗时会较长。

js-bridge 原理
封装 sdk
方式1 - 注入 API
客户端为 webview 做定制开发，在 window 增加一些 API ，共前端调用。
例如增加一个 window.getVersion API ，前端 JS 即可调用它来获取 app 版本号。
const v = window.getVersion()
但这种方式一般都是同步的。
因为你即便你传入了一个 callback 函数，app 也无法执行。app 只能执行一段全局的 JS 代码（像 eval）

方式2 - 劫持 url scheme
一个 iframe 请求 url ，返回的是一个网页。天然支持异步。
const iframe1 = document.getElementById('iframe1')
iframe1.onload = () => {
  console.log(iframe1.contentWindow.document.body.innerHTML)
}
iframe1.src = 'http://127.0.0.1:8881/size-unit.html'
上述 url 使用的是标准的 http 协议，如果要改成 'my-app-name://api/getVersion' 呢？—— 默认会报错，'my-app-name' 是一个未识别的协议名称。

既然未识别的协议，那就可以为我所用：app 监听所有的网络请求，遇到 my-app-name: 协议，就分析 path ，并返回响应的内容。
const iframe1 = document.getElementById('iframe1')
iframe1.onload = () => {
    console.log(iframe1.contentWindow.document.body.innerHTML) // '{ version: '1.0.1' }'
}
iframe1.src = 'my-app-name://api/getVersion'
这种自定义协议的方式，就叫做“url scheme”。微信的 scheme 以 'weixin://' 开头，可搜索“微信 scheme”。

chrome 也有自己的 scheme
chrome://version 查看版本信息
chrome://dino 恐龙小游戏
其他可参考 https://mp.weixin.qq.com/s/T1Qkt8DTZvpsm8CKtEpNxA

封装 sdk
scheme 的调用方式非常复杂，不能每个 API 都写重复的代码，所以一般要封装 sdk ，就像微信提供的 jssdk 。
const sdk = {
  invoke(url, data, success, err) {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      document.body.appendChild(iframe)

      iframe.onload = () => {
          const content = iframe.contentWindow.document.body.innerHTML
          success(JSON.parse(content))
          iframe.remove()
      }
      iframe.onerror = () => {
          err()
          iframe.remove()
      }
      iframe.src = `my-app-name://${url}?data=${JSON.string(data)}`
  }

  fn1(data, success, err) {
    invoke('api/fn1', data, success, err)
  }

  fn2(data, success, err) {
    invoke('api/fn2', data, success, err)
  }
}

// 使用
sdk.fn1(
    {a: 10},
    (data) => { console.log('success', data) },
    () => { console.log('err') }
)
答案
常用方法：劫持 url scheme
扩展
url 长度不够怎么办？—— 可以扩展 ajax post 方式。 


JavaScript 事件循环(EventLoop) —— 浏览器 & Node
异步执行的运行机制（同步执行也是如此，因为它可以被视为没有异步任务的异步执行）
（1）所有同步任务都在 主线程 上执行，形成一个 执行栈（execution context stack）。
（2）主线程之外，还存在一个 "任务队列"（task queue）。只要 异步任务 有了运行结果，就在 "任务队列" 之中放置一个事件。
（3）一旦 "执行栈" 中的 所有同步任务执行完毕，系统就会 读取 "任务队列" ，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
（4）主线程不断重复上面的第三步。
主线程从 "任务队列" 中读取事件，这个过程是循环不断的，所以整个的运行机制又被称为 事件循环(Event Loop)

Node六个阶段
timers (定时器)：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
pending callbacks (待定回调)：执行延迟到下一个循环迭代的 I/O 回调。
idle, prepare：仅系统内部使用。
poll (轮询)：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞。
check (检测)：setImmediate() 回调函数在这里执行。
close callback (关闭的回调函数)：一些关闭的回调函数，如：socket.on('close', ...)。
链接：https://juejin.cn/post/7029988970574561294

为什么Proxy一定要配合Reflect使用？https://juejin.cn/post/7080916820353351688#heading-5

从零开始搞监控系统（1）——SDK https://juejin.cn/post/7090741336294293540 https://github.com/pwstrick/shin-admin/blob/main/public/shin.js
🔥面试官：如何设计一个埋点SDK https://juejin.cn/post/7080797016086806536
腾讯二面：现在要你实现一个埋点监控SDK，你会怎么设计？ https://juejin.cn/post/7085679511290773534  🔥🔥🔥🔥

前端搞监控|Allan - 如何实现一套多端错误监控平台
https://zhuanlan.zhihu.com/p/158079491  好文章

数据发送
数据发送是一个最基础的api，后面的功能都要基于此进行。通常这种前后端分离的场景会使用AJAX的方式发送数据，但是这里使用图片的src属性。原因有两点：
1.没有跨域的限制，像srcipt标签、img标签都可以直接发送跨域的GET请求，不用做特殊处理；
2.兼容性好，一些静态页面可能禁用了脚本，这时script标签就不能使用了；

1X1 Gif
兼容性高，所有的浏览器都支持。
不存在跨域问题。
不会携带当前域名中的 cookie。
不会阻塞页面加载。
相比于其他类型的图片格式（BMP、PNG等），能节约更多的网络资源。
5.1、为什么使用 1 x 1 的 gif ？ https://zhuanlan.zhihu.com/p/158079491
原因是：
1、没有跨域问题
2、发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
3、不会携带当前域名 cookie！
4、不会阻塞页面加载，影响用户的体验，只需 new Image 对象
5、相比于 BMP/PNG 体积最小，可以节约 41% / 35% 的网络资源小

但要注意，这个图片不是用来展示的，我们的目的是去「传递数据」，只是借助img标签的的src属性，在其url后面拼接上参数，服务端收到再去解析。
class StatisticSDK {
    constructor(productID){
      this.productID = productID;
    }
    send(baseURL,query={}){
      query.productID = this.productID;
      let queryStr = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')
      let img = new Image();
      img.src = `${baseURL}?${queryStr}`
    }
  }
  img标签的优点是不需要将其append到文档，只需设置src属性便能成功发起请求。

  通常请求的这个url会是一张1X1px的GIF图片，网上的文章对于这里为什么返回图片的是一张GIF都是含糊带过，这里查阅了一些资料并测试了：
  同样大小，不同格式的的图片中GIF大小是最小的，所以选择返回一张GIF，这样对性能的损耗更小；
如果返回204，会走到img的onerror事件，并抛出一个全局错误；如果返回200和一个空对象会有一个CORB的告警；
  
链接：https://juejin.cn/post/7085679511290773534

页面的性能数据可以通过performance.timing这个API获取到，获取的数据是单位为毫秒的时间戳。

换肤相关技术
https://juejin.cn/post/7044759800055332878

vue移动端适配（postcss-pxtorem和amfe-flexible） amfe-flexible 库
https://juejin.cn/post/6893166229226258439
Vue移动端 amfe-flexible

为什么要使用flex布局?
https://juejin.cn/post/7063823914136256543

vue动态权限路由
https://juejin.cn/post/7094506830230978591

prelode:资源在当前页面使用,会优先加载; prefetch:资源在未来页面使用,空闲时加载; https://juejin.cn/post/7094219863966613517
prefetch 是资源的预获取;
dns-prefetch 是 DNS 的预查询;
<!-- 需要使用link标签加载资源,使用rel属性加载资源 -->
{/* <link rel="prelode" href="style.css" as="style">
<link rel="profetch" href="main.js" as="script"> */}
dns-prefetch:DNS 的预查询;
preconnet:DNS 的预连接;
{/* <link rel="dns-prefetch" href="https://www.baidu.com">
<link ref="preconnet" href="https://www.baidu.com" corssorigin> */}

短链接你真的了解吗？ https://juejin.cn/post/7056635909986320397 🔥🔥🔥
发送短信的时候里面有个链接看到没？这就是短链接，然后我们把短链接复制到浏览器打开，发现跳转之后立马就换了个地址，而且链接还很长很长。先暂停一下，思考背后的原理是什么？
// 原地址
https://u.10010.cn/qAPZU

// 目标地址
'https://m.client.10010.com/mobileService/clickCountLogRecord/pageClickCount.htm?flag=new&title=礼包&openUrl=https://m.client.10010.com/myPrizeForActivity/tenth517/homePage&duanlianjieabc=qAPZU'
短链接跳转长链接，其实原理很简单，通过 302 临时重定向即可完成。

1浏览器先向 u.10010.cn/qAPZU 地址发送 GET 请求。
2根据参数 qAPZU 去查找数据库，找到对应的活动的真实链接。
3后端返回了 302 重定向，并且指定了目标地址。
4浏览器跳转到目标地址。
链接：https://juejin.cn/post/7056635909986320397

将数组转成树结构 (动态路由权限)(后端下发数据转换成动态路由) 🔥🔥🔥
https://juejin.cn/post/7057288955145748494
const data = [
    { parentId: -1, id: 1, name: '首页', path: '/home', auth: 'home' },
    { parentId: 1, id: 2, name: '列表', path: '/list', auth: 'list' },
    { parentId: -1, id: 3, name: '推荐', path: '/rank', auth: 'rank' },
    { parentId: -1, id: 4, name: '关于', path: '/about', auth: 'about' },
]
// 定义默认路由
export let defaultRoutes = [
    {
      path: '/about',
      component: about
    },
    {
      path: '*',
      component: about
    }
  ]
  // 定义动态路由
  export let authRoutes = [
    {
      path: '/home',
      component: home,
      name: 'home'
      children: [
        {
          path: 'list',
          component: list,
          name: 'list'
        }
      ]
    },
    {
      path: '/rank',
      component: rank,
      name: 'rank'
    }
  ]
  
  export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: defaultRoutes // 默认
  })


🔥🔥🔥  websocket如何保证稳定性 https://juejin.cn/post/7071440230284263431
websocket+心跳包+重接+轮询
心跳包是什么？就是客户端每隔一段时间向服务器发送一条消息，那么服务端也需要配合我们，发了消息之后需要立马应答我，
然后客户端就知道两人都一切正常没毛病，过几秒钟之后再次发消息。这样就确保两端之间正常。

后端一次给你10万条数据，如何优雅展示，到底考察我什么?
https://juejin.cn/post/7031923575044964389

url****到页面显示的过程，还有页面显示出来的时候发生了什么
1、⾸先，在浏览器地址栏中输⼊url
2、浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显⽰页⾯内容。若没有，则跳到第三步操作。
3、在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址。
4、浏览器向服务器发起tcp连接，与浏览器建⽴tcp三次握⼿。
5、握⼿成功后，浏览器向服务器发送http请求，请求数据包。
6、服务器处理收到的请求，将数据返回⾄浏览器
7、浏览器收到HTTP响应
8、读取页⾯内容，浏览器渲染，解析html源码
9、⽣成Dom树、解析css样式、js交互
10、客户端和服务器交互
11、ajax查询
链接：https://juejin.cn/post/7094047869795041311

火山引擎推出基于全新视角的 Web 端性能监控方案 https://juejin.cn/post/7094824734445010980

前端两年经验，历时一个月的面经和总结
https://juejin.cn/post/7013953652578582558

前端技术专家面试都问什么？（大家感受一下）  🔥不错
https://juejin.cn/post/7089672110716485639

偏函数： https://blog.csdn.net/qq_42129063/article/details/81874314
所谓偏函数，就是固定一个函数的一个或者多个参数，返回一个新的函数，这个函数用于接受剩余的参数
function add(a,b,c,d,e){
    return a + b + c + d + e;
}
function partial(fn,a,b,c){
    return function(d,e){
        return fn(a,b,c,d,e);
    }
}
var parAdd = partial(add,1,2,3);
console.log(parAdd(2,1));
console.log(parAdd(3,7));
console.log(parAdd(4,8));

draw-page-structure 骨架屏

今天扒一扒浏览器中的缓存策略（看过不后悔系列)
https://juejin.cn/post/6987937972100268046

前端两年经验，历时一个月的面经和总结
https://juejin.cn/post/7013953652578582558

栅格化系统的原理以及实现 https://zhuanlan.zhihu.com/p/61401978
通俗点来说，就是人为的把网页中的一行，等比例划分,比如将一行划分为 12 等分。然后在每个格子里进行页面开发，这就栅格化。
百分比
.col1  {width: 8.33%}
.col2  {width: 16.66%}
.col3  {width: 25%}
.col4  {width: 33.33%}

同一个系统开两个网页,两个网页的sessionStorage共享吗  不会

同一域名端口下sessionStorage会被共享吗 不会

sessionStorage 的数据会在同一网站的多个标签页之间共享吗？这取决于标签页如何打开 https://www.bbsmax.com/A/LPdobyqg53/
通过点击链接（或者用了 window.open）打开的新标签页之间是属于同一个 session 的，但新开一个标签页总是会初始化一个新的 session，即使网站是一样的，它们也不属于同一个 session。

关于http首部字段cache-control中的no-cache与no-store区别
no-cache 代表不缓冲过期的资源，缓存会向源服务器进行有效确认（可以在客户端存储资源，每次都必须去服务端做新鲜度校验，来决定从服务端获取新的资源（200）
  还是使用客户端缓存（304）。也就是所谓的协商缓存。）
no-store 则是不进行任何数据的缓存

react context的实现原理 ***************

一文带你了解如何排查内存泄漏导致的页面卡顿现象 https://juejin.cn/post/6947841638118998029

Babel 是一个 JavaScript 编译器

pageage.json文件
{
  "name": "es6demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src -d lib"  //这里配置编译路径： -src 原es6目录  -lib 编译后的es5目录
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.7.5",
    "babel-preset-es2015": "^6.6.0"
  }
}
链接：https://juejin.cn/post/7091274973855088647

图片懒加载
可以给img标签统一自定义属性data-src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。
function lazyload() {
  const imgs = document.getElementsByTagName('img');
  const len = imgs.length;
  // 视口的高度
  const viewHeight = document.documentElement.clientHeight;
  // 滚动条高度
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src;
      imgs[i].src = src;
    }
  }
}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload);

🔥🔥🔥前端常见问题以及解决方案（ https://juejin.cn/post/7090926280127807501#heading-9
一、跨域
二、轮播图实现
三、图片懒加载
四、单点登录（SSO）实现
五、前端水印
六、大文件断点续传
七、扫描二维码登录的原理
八、前端文件下载
  1、实现方法
  1）form表单提交
    为一个下载按钮添加click事件，点击时动态生成一个表单，利用表单提交的功能来实现文件的下载
  2）a标签的download
    <a href="example.jpg" download>点击下载</a>
    <a href="example.jpg" download="test">点击下载</a> // 指定文件名
    // 检测浏览器是否支持download属性
    const isSupport = 'download' in document.createElement('a');
  3）open或location.href
  本质上和a标签访问下载链接一样
  window.open('downloadFile.zip');
  location.href = 'downloadFile.zip';
  4）Blob对象
  调用api，将文件流转为Blob二进制对象，
  5）利用Base64
十、渲染大数据
渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行。
setTimeout(() => {
  // 插入十万条数据
  const total = 100000;
  // 一次插入的数据
  const once = 20;
  // 插入数据需要的次数
  const loopCount = Math.ceil(total / once);
  let countOfRender = 0;
  const ul = document.querySelector('ul');
  // 添加数据的方法
  function add() {
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < once; i++) {
      const li = document.createElement('li');
      li.innerText = Math.floor(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
  }
  function loop() {
    if(countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }
  loop();
}, 0)

十一、VDOM转真实DOM基本原理
// vnode结构：
// {
//   tag,
//   attrs,
//   children,
// }

//Virtual DOM => DOM
function render(vnode, container) {
  container.appendChild(_render(vnode));
}
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    })
  }
  // 子数组进行递归操作
  vnode.children.forEach(child => render(child, dom));
  return dom;
}

async和defer的作用是什么？有什么区别?
https://juejin.cn/post/7088183352343134221
async需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件

promise构造函数是同步执行的，then方法是异步执行的

短链系统 短链顾名思义是一种很短的地址，应用广泛  短链接 长链接
https://juejin.cn/post/7090735092011794446

从零开始搞监控系统（1）——SDK https://juejin.cn/post/7090741336294293540  🔥🔥🔥
从零开始搞监控系统（2）——存储和分析 https://juejin.cn/post/7090742978045542436

前端搞监控|Allan - 如何实现一套多端错误监控平台
https://zhuanlan.zhihu.com/p/158079491


前端监控系统🔥🔥🔥
https://juejin.cn/column/7090542280624472077 
从零开始搞监控系统（1）——SDK
从零开始搞监控系统（2）——存储和分析
从零开始搞监控系统（3）——性能监控
从零开始搞监控系统（4）——内存泄漏
从零开始搞监控系统（5）——小程序监控
从零开始搞监控系统（6）——较长的白屏时间
从零开始搞监控系统（7）——监控页面奔溃 https://juejin.cn/post/7090747729965498381

前端搞监控|Allan - 如何实现一套多端错误监控平台 🔥🔥🔥
https://zhuanlan.zhihu.com/p/158079491

手写ReactHook核心原理，再也不怕面试官问我ReactHook原理
https://cloud.tencent.com/developer/article/1784501

react的usememo原理 https://www.1024sou.com/article/645783.html

前端图片canvas，file，blob，DataURL等格式转换
https://juejin.cn/post/6844903645687857166

如何监听页面关闭或刷新动作
https://juejin.cn/post/6844903620404592653


阿里三面：灵魂拷问——有react fiber，为什么不需要vue fiber呢？
https://juejin.cn/post/7077545184807878692
react因为先天的不足——无法精确更新，所以需要react fiber把组件渲染工作切片；而vue基于数据劫持，更新粒度很小，没有这个压力；
react fiber这种数据结构使得节点可以回溯到其父节点，只要保留下中断的节点索引，就可以恢复之前的工作进度；
链接：https://juejin.cn/post/7077545184807878692

跨域chrome 插件 Allow CORS: Access-Control-Allow-Origin
https://mybrowseraddon.com/access-control-allow-origin.html?v=0.1.7&type=install

浅说虚拟列表的实现原理 
https://github.com/dwqs/blog/issues/70

「前端进阶」高性能渲染十万条数据(虚拟列表)
https://juejin.cn/post/6844903982742110216