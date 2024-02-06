面试官：你如何实现大文件上传 https://juejin.cn/post/7177045936298786872
（1）读取文件
（2）创建切片
（3）上传切片
2、后端
（1）接收切片
（2）合并切片

大文件上传实现方法
实现大文件上传的方法有很多种，以下是其中一些常见的实现方式：
切片上传：将大文件拆分成若干个小文件，在客户端进行切片处理，并将每个小文件分别上传到服务器。服务器接收到这些切片后再合并成原始文件。
这种做法可以提高上传速度和可靠性，同时减少了网络传输失败的风险。
断点续传：当上传过程中出现网络故障或上传中断时，用户可以在重新连接到网络后恢复之前的上传进度，不必重新上传整个文件。
压缩文件上传：将待上传的大文件进行压缩，然后再上传到服务器上，服务器接收到文件后再进行解压操作，这种上传方式可以减小上传文件的大小，从而提高上传效率。
实现大文件上传主要涉及到两个方面：前端和后端。前端可以通过使用 File API 和 XMLHttpRequest 对象来实现大文件的切片上传，
而后端需要接收并处理传入的切片文件。以切片上传为例，具体的实现方法可以参考如下链接的文章[2]。如果你想要实现更加专业和高效的大文件上传系统，
可以考虑使用云存储服务，例如七牛云、阿里云等。
总之，大文件上传需要考虑很多问题，如性能、可靠性、安全性等，实现起来相对比较复杂。选择适合自己业务场景的上传方式，并结合优秀的第三方库或服务，才能达到更好的效果。


Vue 不重新打包，动态加载全局配置的实现过程
https://wojiushiwo945you.blog.csdn.net/article/details/128033843

Element UI 
动态生成的表单如何用 el-form 校验，你知道吗？https://wojiushiwo945you.blog.csdn.net/article/details/108990769

三分钟细数 el-form 表单校验的坑点，前车之鉴，可助你避坑
https://wojiushiwo945you.blog.csdn.net/article/details/108977668

CDN的概念
CDN（Content Delivery Network，内容分发网络）是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。
    
CDN的作用
CDN一般会用来托管Web资源（包括文本、图片和脚本等），可供下载的资源（媒体文件、软件、文档等），应用程序（门户网站等）。使用CDN来加速这些资源的访问。
（1）在性能方面，引入CDN的作用在于：

用户收到的内容来自最近的数据中心，延迟更低，内容加载更快
部分资源请求分配给了CDN，减少了服务器的负载

（2）在安全方面，CDN有助于防御DDoS、MITM等网络攻击：

针对DDoS：通过监控分析异常流量，限制其请求频率
针对MITM：从源服务器到 CDN 节点到 ISP（Internet Service Provider），全链路 HTTPS 通信

除此之外，CDN作为一种基础的云服务，同样具有资源托管、按需扩展（能够应对流量高峰）等方面的优势。
链接：https://juejin.cn/post/7176068610522415141

function ajax(url, success) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        }
      }
    };
    xhr.send();
  } 

面试官针对大文件上传的追问 https://juejin.cn/post/7182105299921141817


Javascript刷LeetCode: 228. 汇总区间  https://juejin.cn/post/7053215962031456293
输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const len = nums.length 
  const arr = []
  if(len === 1) {
    return [`${nums[0]}`]
  }
  for(let j = 1,i = 0; j < len; j++) {
    const diff = nums[j] - nums[j-1]
    if(diff === 1 && j === len - 1) {
      arr.push(`${nums[i]}->${nums[j]}`)
    } 
    if(diff > 1) {
      const value = j - i > 1 ? `${nums[i]}->${nums[j-1]}` : `${nums[i]}`
      arr.push(value)
      i = j
      if(j === len - 1) {
        arr.push(`${nums[j]}`)
      }
    }
  }
  return arr
};

前端白屏的检测方案，让你知道自己的页面白了 https://juejin.cn/post/7176206226903007292

import webSee from 'web-see';

Vue.use(webSee, {
  dsn: 'http://localhost:8083/reportData', // 上报的地址
  apikey: 'project1', // 项目唯一的id
  userId: '89757', // 用户id
  silentWhiteScreen: true, // 开启白屏检测
  skeletonProject: true, // 项目是否有骨架屏
  whiteBoxElements: ['html', 'body', '#app', '#root'] // 白屏检测的容器列表
});

链接：https://juejin.cn/post/7176206226903007292


大文件分片上传 https://juejin.cn/post/7185015074024030245

前端重新部署如何通知用户刷新网页？https://juejin.cn/post/7185451392994115645  🔥

在前端重新部署时，你可以使用不同的方式来通知用户刷新网页，以确保用户加载最新的应用程序版本。以下是一些常用的方法： GPT

使用 Web Push 通知：如果你的应用程序已经使用了 Web Push API，你可以发送一条通知消息给用户，提示他们重新加载页面以获取最新的更新。
使用 Service Worker：在 Service Worker 中，你可以监听到新的应用程序版本，并在用户下次加载页面时，通过发送一条消息或显示一条提示框告知用户需要刷新页面。
显示页面更新提示：当用户打开应用程序或与服务器进行通信时，可以检查应用程序的版本号。如果检测到新的版本可用，你可以显示一个提示框或浮动通知，建议用户刷新页面以获取更新。
实时连接：如果你的应用程序使用了实时连接（如 WebSocket），你可以在服务器端发送一条特殊消息给客户端，提示用户需要进行页面刷新。
嵌入监听器：将一个脚本嵌入到你的应用程序中，用于监听服务器的部署事件。当部署完成后，脚本将提示用户重新加载页面。

无论你选择哪种方式，重要的是要向用户提供清晰明确的指示，让他们知道何时需要刷新页面以获取最新的应用程序更新。请注意，这些方法的具体实现可能因你的应用程序结构和技术堆栈而有所不同。


CDN的概念
CDN（Content Delivery Network，内容分发网络）是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、
、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。
链接：https://juejin.cn/post/7184997495423336507


下载npm 包下载不下来的时候 清楚缓存
清除本地缓存的命令是：npm cache clean --force

Typescript + React17 +Eslint + Git hook 工作流
https://juejin.cn/post/6927475526202294285

2023 年前端工程化都在谈些什么
https://juejin.cn/post/7190273248615989285

面试系列：4000字长文，让你了解单点登录（一）
https://juejin.cn/post/7188501899887738939

虚拟列表是怎么做性能优化的?
https://segmentfault.com/a/1190000043342481

掰掰 Lottie https://juejin.cn/post/7189445206054273083

我是这样搭建 React + TypeScript 项目的！
https://juejin.cn/post/7139688651042062372

基于koa2+vue3的大文件上传和断点传续
https://juejin.cn/post/7194715277953597495

React面试题
https://juejin.cn/post/7194760495956492344

字节前端监控实践
https://juejin.cn/post/7195496297150709821

设计一个前端埋点监控插件有哪些要点 https://juejin.cn/post/7195908197572427832

Composition API和React Hook的区别
从React Hook的实现角度看，React Hook是根据useState调用的顺序来确定下一次重渲染时的state是来源于哪个useState，所以出现了以下限制
不能在循环、条件、嵌套函数中调用Hook
必须确保总是在你的React函数的顶层调用Hook
useEffect、useMemo等函数必须手动确定依赖关系

而Composition API是基于Vue的响应式系统实现的，与React Hook的相比
Composition API声明在setup函数内，一次组件实例化只调用一次setup，而React Hook每次重渲染都需要调用Hook，使得React的GC比Vue更有压力，性能也相对于Vue来说也较慢
Compositon API的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用
响应式系统自动实现了依赖收集，进而组件的部分的性能优化由Vue内部自己完成，而React Hook需要手动传入依赖，而且必须保证依赖的顺序，让useEffect、useMemo等
函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降

虽然Compositon API看起来比React Hook好用，但是其设计思想也是借鉴了React Hook
链接：https://juejin.cn/post/6979502613793112095

浅谈前端埋点 & 监控
https://juejin.cn/post/7114450860335169543

【高频】对于微前端的理解
概念/作用
粉碎巨石，一个主应用+多个子应用，技术栈、打包构建等都是完全独立的，负责不同应用的团队可以选取最合适自身情况的技术栈，这样不仅可以提高开发效率，
也可以降低团队人员学习的成本，也便于各个应用的技术栈更新（比如QQ，假设以前用的JQ，现在要用React，以前就只能直接推翻重写。而用微前端的话，
重写子应用就行，减少破坏的范围）。
实现方式
主体框架：iframe，后端路由分发，模块联邦，中心基座
样式隔离：css选择器加hash前缀，...（其他的忘了）
JS隔离：函数作用域，eval作用域，with关键字
链接：https://juejin.cn/post/7197061916903997496

【较多】设计文件分片上传
（input类型设置为file，多文件还要额外写multiple，结合JS的fileReader来获取上传的内容，要对其类型做校验，并且要对超过大小阈值的文件进行切片再重新封装）
转为二进制，然后按长度截断，封装成对象，维护两个值 当前对象的序号 和 切片总数，发送给后端后，要及时确认是否丢包，参考TCP的操作，如果丢包了，
那么在下一次成功请求的响应体里需要给出相应的信息。
为了防止是最后一个包丢了，还要额外发起一次请求询问是否接收到了所有包，如果是，那么后端开始合并文件；如果不是则根据响应内容重新发送。
（另外，HTTP报文里面有个range字段好像可以结合利用一下，但是我没有继续研究这一块了）
链接：https://juejin.cn/post/7197061916903997496

请说下封装 Vue 组件的过程？（必会）
**分析需求：**确定业务需求，把页面中可以服用的结构，样式以及功能，单独
抽离成一个文件，实现复用
具体步骤：
使用 Vue.component 方法注册组件，子组件需要数据，可以在 props 中接
受定义，而子组件修改好数据后，想把数据传递给父组件。可以采用$emit 方法向外抛数据
如果需要给组件传入模板，则定义为插槽 slot
如果需要 父组件主动调用子组件的方法 可以在 methods 选项中开放方法
链接：https://juejin.cn/post/7197009345475805245

【封装UI组件库】手摸手教你仿一下Element-ui的Button组件（发布至npm）
https://juejin.cn/post/7103081918266081287

Vue&React使用异步组件进行代码分包总结如下：

相同点
通过上述代码示例，可以发现Vue和React在引入异步组件时，都使用了Suspense这个组件，都采用动态import的方式进行异步组件的导入。
不同点
Vue引入动态import采用的是defineAsyncComponent,而React使用的是lazy。
除了异步组件，还可以通过路由懒加载的方式来进行代码分包，从而实现代码分包，减少首屏白屏时间的目的，感觉真不错~
链接：https://juejin.cn/post/7095733560899797028

Referer属性的作用 https://juejin.cn/post/7079373500267364359
Referer是HTTP协议中的一个请求报头，用于告知服务器用户的来源页面。
Referer属性的主要作用就是防盗，防止跨域访问服务器资源


记录域名地址是https的文件渲染不出本地http地址的图片
https://juejin.cn/post/7198163602628624443

渲染几万条数据不卡住页面 https://juejin.cn/post/7196808785976459320
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


热点面试题：什么是粘包/半包问题，该如何解决？ 
https://mp.weixin.qq.com/s/SORAN1c0_Pntajvjl-jK4g
热点面试题：常见的http code 及含义？  
https://juejin.cn/post/7196131493448630329    