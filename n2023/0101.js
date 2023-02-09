面试官：你如何实现大文件上传 https://juejin.cn/post/7177045936298786872
（1）读取文件
（2）创建切片
（3）上传切片
2、后端
（1）接收切片
（2）合并切片

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

大文件分片上传 https://juejin.cn/post/7185015074024030245

前端重新部署如何通知用户刷新网页？https://juejin.cn/post/7185451392994115645

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
、
设计一个前端埋点监控插件有哪些要点https://juejin.cn/post/7195908197572427832

Composition API和React Hook的区别
从React Hook的实现角度看，React Hook是根据useState调用的顺序来确定下一次重渲染时的state是来源于哪个useState，所以出现了以下限制

不能在循环、条件、嵌套函数中调用Hook
必须确保总是在你的React函数的顶层调用Hook
useEffect、useMemo等函数必须手动确定依赖关系

而Composition API是基于Vue的响应式系统实现的，与React Hook的相比

Composition API声明在setup函数内，一次组件实例化只调用一次setup，而React Hook每次重渲染都需要调用Hook，使得React的GC比Vue更有压力，性能也相对于Vue来说也较慢
Compositon API的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用
响应式系统自动实现了依赖收集，进而组件的部分的性能优化由Vue内部自己完成，而React Hook需要手动传入依赖，而且必须必须保证依赖的顺序，让useEffect、useMemo等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降

虽然Compositon API看起来比React Hook好用，但是其设计思想也是借鉴了React Hook
链接：https://juejin.cn/post/6979502613793112095
