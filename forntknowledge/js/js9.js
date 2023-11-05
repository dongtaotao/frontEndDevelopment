
2022新前端面试题（中高级）
链接：https://juejin.cn/post/7080816244449869855 

和服务端交互的时候，如何保证数据的安全性？不被第三方修改 **************************************************************
前后端交互如何保证数据安全？
https://netsecurity.51cto.com/article/610473.html

前后端API交互如何保证数据安全性？
https://cloud.tencent.com/developer/article/1431882

如何保证API调用时数据的安全性？
通信使用https
请求签名，防止参数被篡改
身份确认机制，每次请求都要验证是否合法
APP中使用ssl pinning防止抓包操作
对所有请求和响应都进行加解密操作 

前端sign签名 **************************************************************
https://www.jianshu.com/p/a47477e8126a
前端 crypto-js aes 加解密

【完整版】前端签名加密算法
https://www.cnblogs.com/ivan5277/p/12003796.html

// js 在 map 里面怎么写异步操作 百度
js的.map() 里使用异步方法 https://www.dandelioncloud.cn/article/details/1507215218789928962
.map()里的处理方法是同步的，若想做异步操作，可以这样写。

// 使用async await 处理异步操作
let results = await Promise.all(arr.map(async (item) => { 
    // 等待异步操作完成，返回执行结果
    return await asyncWorker(item);
}));
js在数组map时使用异步 https://blog.csdn.net/kuilaurence/article/details/117931829

react中异步加载利用import() 编写 asyncComponent.js  **************************************************************
es6提供import()函数，它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。
import()返回一个 Promise 对象:

react中使用webpack的import()异步加载组件的实现 https://blog.csdn.net/sinat_17775997/article/details/82689985

ES6中的import()函数  https://www.cnblogs.com/Joe-and-Joan/p/10309419.html?ivk_sa=1024320u
import()返回一个 Promise 对象
const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });

Babel 是如何工作的 https://zhuanlan.zhihu.com/p/85915575
  首先得要先了解一个概念：抽象语法树（Abstract Syntax Tree, AST），Babel 本质上就是在操作 AST 来完成代码的转译。
  Babel 工作过程
了解了 AST 是什么样的，就可以开始研究 Babel 的工作过程了。
上面说过，Babel 的功能很纯粹，它只是一个编译器。
大多数编译器的工作过程可以分为三部分：
Parse(解析)：将源代码转换成更加抽象的表示方法（例如抽象语法树）
Transform(转换)：对（抽象语法树）做一些特殊处理，让它符合编译器的期望
Generate(代码生成)：将第二步经过转换过的（抽象语法树）生成新的代码

js之初始化二维数组 https://juejin.cn/post/7043324738780790791
const arr = new Array(2);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(2).fill(0);
}
arr[0][0] = 1;  // 正确 [ [ 1, 0 ], [ 1, 0 ] ]

Xss js-xss  https://interview2.poetries.top/docs/excellent.html#_22-1-xss  *************** 跨站脚本攻击 

Token和Jwt存在什么区别 https://www.jianshu.com/p/7598a5e9220e https://www.cnblogs.com/zxdeblog/p/15175710.html
token需要查库验证token 是否有效，而JWT不用查库或者少查库，直接在服务端进行校验，并且不用查库

Token和Jwt的区别 https://www.csdn.net/tags/MtTaYg5sMzUyNjktYmxvZwO0O0OO0O0O.html
Token需要查库验证token 是否有效，而JWT不用查库，直接在服务端进行校验,因为用户的信息及加密信息,和过期时间,
都在JWT里，只要在服务端进行校验就行，并且校验也是JWT自己实现的。

https://juejin.cn/post/6896810576778166280
节流表示的是不一直触发，一定时间触发一次，常用在滑动滚动或者视窗大小变化的控制
function throttle(fn, delay) {
  let start = +Date.now()
  let timer = null
  return function(...args) {
      const now = +Date.now()
      if (now - start >= delay) {
          clearTimeout(timer)
          timer = null
          fn.apply(this, args)
          start = now
      } else if (!timer){
          timer = setTimeout(() => {
              fn.apply(this, args)
          }, delay)
      }
  }
}

防抖 一定时间内持续触发是不会重复调用，当超过一定时间后再回执行，主要应用在输入框这种地方，当需要查询一个东西的时候，持续输入是不会请求接口
function debounce(fn, delay) {
  let timer = null
  return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
  }
}
class LRU {
  constructor(max) {
      this.max = max
      this.cache = new Map()
  }
  get(key) {
      const { cache } = this
      const value = cache.get(key)
      if (!value) return -1
      cache.delete(key)
      cache.set(key, value)
      return value
  }
  set(key, value) {
      const { cache, max } = this
      if (cache.has(key)) {
          cache.delete(key)
      }
      if (cache.size === max) {
          cache.delete(cache.keys().next().value)
      }
      cache.set(key, value)
  }
}
Promise.all = function(promises) {
  const values = []
  let count = 0
  return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
          Promise.resolve(promise).then(res => {
              count++
              values[index] = res
              if (count === promises.length) {
                  resolve(values)
              }
          }, err => {
              reject(err)
          })
      })
  })
}

Promise.allSeleted = function(promises) {
  let count = 0
  let result = []
  return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
          Promise.resolve(promise).then(res => {
              result[index] = {
                  value: res,
                  reason: null,
              }
          }, err => {
              result[index] = {
                  value: null,
                  reason: err,
              }
          }).finally(() => {
              count++
              if (count === promises.length) {
                  resolve(result)
              }
          })
      })
  })
}

11.实现maxRequest，成功后resolve结果，失败后重试，尝试超过一定次数才真正的reject
https://juejin.cn/post/6896810576778166280
function maxRequest(fn, maxNum) {
  return new Promise((resolve, reject) => {
      function help(index) {
          Promise.resolve(fn()).then(value => {
              resolve(value)
          }).catch(error => {
              if (index - 1 > 0) {
                  help(index - 1)
              } else {
                  reject(error)
              }
          })
      }
      help(maxNum)
  })
}

前端换肤的N种方案  https://juejin.cn/post/6844904122643120141
覆盖样式实现
sass变量实现
生成多套皮肤css
CSS变量实现

google 有哪些监控网页卡顿的方法 ***********************************************
如何监控网页卡顿和崩溃？  https://www.daimajiaoliu.com/daima/56a0465aad5b801
如何监控网页的卡顿？ https://zhuanlan.zhihu.com/p/39292837
如何监控网页崩溃？https://zhuanlan.zhihu.com/p/40273861
如何监控网页卡顿和崩溃？ https://www.daimajiaoliu.com/daima/56a0465aad5b801
前端崩溃监控  https://www.jackpu.com/web-qian-duan-crash-jian-kong-you-hua-li-cheng/
https://blog.csdn.net/sinat_17775997/article/details/124649834?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22124649834%22%2C%22source%22%3A%22sinat_17775997%22%7D&ctrtid=NLHCH
5.如何监控网页崩溃？
基于 Service Worker 的崩溃统计方案
随着 PWA 概念的流行，大家对 Service Worker 也逐渐熟悉起来。基于以下原因，我们可以使用 Service Worker 来实现网页崩溃的监控：

Service Worker 有自己独立的工作线程，与网页区分开，网页崩溃了，Service Worker 一般情况下不会崩溃；
Service Worker 生命周期一般要比网页还要长，可以用来监控网页的状态；
网页可以通过navigator.serviceWorker.controller.postMessage API 向掌管自己的 SW 发送消息。

基于以上几点，我们可以实现一种基于心跳检测的监控方案：
p1：网页加载后，通过postMessageAPI 每5s给 sw 发送一个心跳，表示自己的在线，sw 将在线的网页登记下来，更新登记时间；
p2：网页在beforeunload时，通过postMessageAPI 告知自己已经正常关闭，sw 将登记的网页清除；
p3：如果网页在运行的过程中 crash 了，sw 中的running状态将不会被清除，更新时间停留在奔溃前的最后一次心跳；
sw：Service Worker 每10s查看一遍登记中的网页，发现登记时间已经超出了一定时间（比如 15s）即可判定该网页 crash 了。
链接：https://juejin.cn/post/6844904129031045128

简单地说就是一种心跳检测机制，在页面的脚本中创建Service Worker工作线程，然后定时地向该线程发送消息，即使网页奔溃了，线程还能存活。 https://juejin.cn/post/7090747729965498381

2. 有哪些监控网页卡顿的方法？
https://juejin.cn/post/6844904034411741191

15.对象数组去重
输入:
[{a:1,b:2,c:3},{b:2,c:3,a:1},{d:2,c:2}]
输出:
[{a:1,b:2,c:3},{d:2,c:2}]

首先写一个函数把对象中的key排序，然后再转成字符串
遍历数组利用Set将转为字符串后的对象去重

flex属性详解0，1，auto  flex: 0 1 auto 的含义
https://www.bilibili.com/video/BV1n54y1n7mC?spm_id_from=333.337.search-card.all.click

数组交集
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
const result = arr2.filter(function (v) {
  return arr1.some(n => JSON.stringify(n) === JSON.stringify(v))
})
console.log(result); // [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]

回收堆空间 https://www.pzijun.cn/algorithms/stack/1.html#js-%E5%86%85%E5%AD%98%E6%9C%BA%E5%88%B6%EF%BC%9A%E6%A0%88%EF%BC%88%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E3%80%81%E5%BC%95%E8%A8%80%E7%B1%BB%E5%9E%8B%E5%9C%B0%E5%9D%80%EF%BC%89%E4%B8%8E%E5%A0%86%EF%BC%88%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%EF%BC%89
V8 中把堆分成新生代与老生代两个区域：

新生代：用来存放生存周期较短的小对象，一般只支持1～8M的容量
老生代：用来存放生存周期较长的对象或大对象
V8 对这两块使用了不同的回收器：

新生代使用副垃圾回收器
老生代使用主垃圾回收器

线程和进程的区别是什么？ https://www.zhihu.com/question/25532384
进程是资源分配的最小单位，线程是CPU调度的最小单位
做个简单的比喻：进程=火车，线程=车厢

说一下单点登录实现原理 ******************
https://juejin.cn/post/6933111691215372302

前端干货预警🚨马上金三银四，精选10道最新面试题带你起飞🛫️ https://juejin.cn/post/6933111691215372302

前端鉴权必须了解的 5 个兄弟：cookie、session、token、jwt、单点登录
https://mp.weixin.qq.com/s/rwp9sXi4Y8Ht0UbA6z4hSg

腾讯二面：现在要你实现一个埋点监控SDK，你会怎么设计？🔥🔥🔥
https://juejin.cn/post/7085679511290773534

JS ｜ 防盗链
HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器我是从哪个页面链接过来的，
服务器藉此可以获得一些信息用于处理。通过该头域的值，我们可以检测到访问目标资源的源地址
https://juejin.cn/post/6911242598266978311


程序员山月 🔥🔥🔥
https://juejin.cn/user/1556564164489389/posts

霖呆呆的近期面试128题汇总(含超详细答案) | 掘金技术征文
https://juejin.cn/post/6844904151369908232

看到一个不错的前端面试题开源项目
https://mp.weixin.qq.com/s/h2M2RCNNL2cnC0VskXz7JQ

一名【合格】前端工程师的自检清单
https://juejin.cn/post/6844903830887366670#heading-20

关于图片懒加载的几种方案
https://mp.weixin.qq.com/s/BOdnCYbMQfmCpUC3w3KZqw

前端性能优化之谈谈常见的性能指标及上报策略
https://mp.weixin.qq.com/s/wDKKj5R8SYm-_75Zn1y30A
前端性能优化之利用 Chrome Dev Tools 进行页面性能分析
https://mp.weixin.qq.com/s/azeUIx0EA86EFQrtIRUKwQ
前端性能优化之自定义性能指标及上报方法详解
https://mp.weixin.qq.com/s/DJ8Fdq1_cIoW0_NYekZwFw
Webpack性能优化总结大全
https://mp.weixin.qq.com/s/dy1u2g9TeCoq2WOdPLqAXw
如何分析 Node.js 中的内存泄漏
https://zhuanlan.zhihu.com/p/25736931


如何优雅处理前端异常？(史上最全前端异常处理方案) https://mp.weixin.qq.com/s/prf-mXexBh1Ie-ctq9FnzA  *******************************
http://jartto.wang/2018/11/20/js-exception-handling/
十三、总结
回到我们开头提出的那个问题，如何优雅的处理异常呢？
可疑区域增加 Try-Catch
全局监控 JS 异常 window.onerror
全局监控静态资源异常 window.addEventListener
捕获没有 Catch 的 Promise 异常：unhandledrejection
VUE errorHandler 和 React componentDidCatch
监控网页崩溃：window 对象的 load 和 beforeunload
跨域 crossOrigin 解决


JS代码是如何被压缩的
代码压缩原理 https://www.h5w3.com/19480.html
了解了AST之后，我们再分析一下JS的代码压缩原理。简单的说，就是
1. 将code转换成AST
2. 将AST进行优化，生成一个更小的AST
3. 将新生成的AST再转化成code

前端工程化探索之页面资源治理方案介绍
https://mp.weixin.qq.com/s/FdG7uVIDXltNyskL3qh8Cw
面试官：浏览器输入URL后发生了什么？
https://mp.weixin.qq.com/s/DLq_GIkdnuOayThfi3jI0A
面试题：说说事件循环机制(满分答案来了)
https://mp.weixin.qq.com/s/QgfE5Km1xiEkQqADMLmj-Q
浏览器相关原理(面试题)详细总结一
https://mp.weixin.qq.com/s/klZ6j3Gj9cwHGQFys6Hdjg
「知识拾遗」你应该知道的 https
https://mp.weixin.qq.com/s/aMYp6Y5n26r9vdQIom4g0w
你连 HTTPS 原理都不懂，还讲“中间人攻击”？
https://mp.weixin.qq.com/s/sHtZhRTNOihmxap5sDD6xQ
Web 安全总结(面试必备良药)
https://mp.weixin.qq.com/s/rU32rVM6Q-ele01ZB3RFzg

进程间和线程间的通信方式

前端面试题（基础篇）
https://blog.csdn.net/sysuzjz/article/details/80613184
前端面试题（三）https://blog.csdn.net/sysuzjz/article/details/104858308

4. 复制文本 https://juejin.cn/post/7091309001471852580#heading-4
复制文本带版权信息 https://juejin.cn/post/7091309001471852580#heading-6
document.body.oncopy = (event) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    let text = window.getSelection(0).toString();
    text = `${text}\n这是插入的文本\n 作者：于五五\n`;
    if (clipboardData) {
      clipboardData.clearData();
      clipboardData.setData("Text", text);
      return true;
    } else if (document.execCommand) {
      window.clipboardData.setData("Text", text);
    }
    return false;
};

eslint 作为项目代码风格管理工具(代码检测工具) 

Prettier 可以认为是帮助代码格式化的工具(代码格式化的工具) 

axios 超时重试 https://juejin.cn/post/6999515520932249608
安装 axios-retry

IntersectionObserver应用 https://zhuanlan.zhihu.com/p/293581400
Intersection Observer API提供了一种异步观察目标元素与祖先元素或顶级文档viewport的交集中的变化的方法。
这使得以往较难实现的功能，更加简单，例如，监听图片元素，在适当的时候懒加载图片。
链接：https://www.jianshu.com/p/4e6ec9e709ca
IntersectionObserver，监听元素是否在视口内，支持多个元素同时监听。

利用IntersectionObserver 分分钟实现图片懒加载
https://juejin.cn/post/7067002674863931422 

响应式布局与自适应布局的区别？
https://baijiahao.baidu.com/s?id=1627060039271152391&wfr=spider&for=pc

为什么说你的数组乱序不够乱？
https://juejin.cn/post/7066821556541849630
arr.sort(() => Math.random() - 0.5)    