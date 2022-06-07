最新的前端大厂面经（详解答案）
https://juejin.cn/post/7004638318843412493

前端错误监控和异常捕获问题 **************************
https://juejin.cn/post/7072179884247744526

前端高频面试题整理 前端两年-月入30K | 掘金技术征文
https://juejin.cn/post/6844904148899463175

https://juejin.cn/post/7017655711291146253
迟到的大厂前端面试记录（面试题+部分答案）

https://blog.csdn.net/u013491829/article/details/108566868
final可修饰实例变量、const不可以修饰实例变量 

final A a= new A();
const A a= new A(); XXXXXX
const修饰的List集合任意索引不可修改，final修饰的可以修改

// 事件循环
js是单线程的，一个任务执行完以后才可以执行下一个任务，js线程和渲染线程是互斥的。
为什么要有事件循环，事件循可以让开发者明白js的运行机制是怎么样的
事件循环机制用于管理异步API的回调函数什么时候回到主线程中执行

js分为同步任务和异步任务 

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，
就在"任务队列"之中放置一个事件。
（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，
看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
（4）主线程不断重复上面的第三步。
主线程从“任务队列”中读取事件，这个过程是循环不断的，所以称之为事件循环

宏任务和微任务 

事件循环由宏任务和在执行宏任务期间产生的所有微任务组成。完成当下的宏任务后，会立刻执行所有在此期间入队的微任务。
这种设计是为了给紧急任务一个插队的机会，否则新入队的任务永远被放在队尾。区分了微任务和宏任务后，本轮循环中的微任务实际上就是在插队，
  这样微任务中所做的状态修改，在下一轮事件循环中也能得到同步。

// 常见的宏任务有：script（整体代码）/setTimout/setInterval/setImmediate(node 独有)/requestAnimationFrame(浏览器独有)/IO/UI render（浏览器独有）
// 常见的微任务有：process.nextTick(node 独有)/Promise.then()/Object.observe/MutationObserver

常见的宏任务有：script（整体代码）/setTimout/setInterval/setImmediate(node 独有)/ ajax/ 读取文件
常见的微任务有：process.nextTick(node 独有)/Promise.then()/

setTimeout的回调不一定在指定时间后能执行。而是在指定时间后，将回调函数放入事件循环的队列中。
如果时间到了，JS引擎还在执行同步任务，这个回调函数需要等待；如果当前事件循环的队列里还有其他回调，需要等其他回调执行完。
另外，setTimeout 0ms 也不是立刻执行，它有一个默认最小时间，为4ms。
链接：https://juejin.cn/post/7073099307510923295


node事件循环 https://www.bilibili.com/video/BV1Cg411A74L/?spm_id_from=333.788
事件循环分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。
当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段。

Event Loop的六个阶段
事件循环是一个循环体，在循环体中有六个阶段，在每个阶段中，都有一个事件队列，不同的事件队列存储了不同的类型的一步API的回调函数
1.Timers： 用于存储定时器的回调函数（setTimeout， setInterval）
2.pending callback： 执行操作系统相关的回调函数，比如启动服务器端应用时监听端口操作的回调函数就是在这里调用
3.Idle，prepare：系统内部调用
4.IO Poll： 存储I/O操作的回调函数队列，比如文件的读写操作的回调函数
5.Check：存储setImmediate 事件循环机制用于管理异步API的回调函数什么时候回到主线程中执行
6.Closing callbacks： 执行与关闭事件相关的回调函数，例如关闭数据库连接的回调函数
循环体会不断运行以检测是否存在没有调用的回调函数，事件循环机制会按照先进先出的方式执行他们直到队列为空


Node的Event loop一共分为6个阶段，每个细节具体如下：
timers: 执行setTimeout和setInterval中到期的callback。
pending callback: 上一轮循环中少数的callback会放在这一阶段执行。
idle, prepare: 仅在内部使用。
poll: 最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。
check: 执行setImmediate的callback。
close callbacks: 执行close事件的callback，例如socket.on('close'[,fn])或者http.server.on('close, fn)。
链接：https://juejin.cn/post/6913368493035356167


process.nextTick(() => {}) // 同步之后，异步执行前调用

-------------------------------------------------------------------------------------
一次事件循环
1.同步
2.process.nextTick
3.微任务（promise.then）
4.宏任务（计数器，ajax,读取文件）
5.setImmediate （当前时间循环结束执行）

事件循环  https://www.bilibili.com/video/BV1964y147NA?spm_id_from=333.337.search-card.all.click 
https://www.bilibili.com/video/BV1Av411n77n/?spm_id_from=autoNext 🔥🔥🔥🔥

setImmediat(() => {
    console.log(1)
})
process.nextTick(() => {
    console.log(2)
})
console.log(3)
setTimeout(() => {console.log(4)},0)
setTimeout(() => {console.log(5)},1000)
setTimeout(() => {console.log(6)},0)
console.log(7)

3 7 2 4 6 1 5

setImmediat(() => {
    console.log(1)
})
process.nextTick(() => {
    console.log(2)
})
console.log(3)
setTimeout(() => {console.log(4)},0)
setTimeout(() => {console.log(5)},1000)
setTimeout(() => {console.log(6)},10)
console.log(7)

3 7 2 4 1 6 5


setTimeout(() => {
    console.log(1);
}, 0)

setImmediate(() => {
    console.log(2);
})

new Promise(resolve => {
    console.log(3);
    resolve()
    console.log(4);
})
.then(() => {
    console.log(5);
})

console.log(6);

process.nextTick(() => {
    console.log(7);
})

console.log(8);

/* 打印结果：
			3
			4
			6
			8
			7
			5
			1
			2
*/


JavaScript中对象属性的描述，可枚举，可配置
https://www.bilibili.com/video/BV13h411z78E?spm_id_from=333.999.0.0

Object.defineProperty(student,"id", {
    configurable: false, // 属性是否可以删除
    enumerable: false, //属性是否可枚举
    valve: '1',
    writable: false, // 属性是否可以修改
})

node实践彻底搞懂强缓存和协商缓存
https://juejin.cn/post/6942264171870289956

**********************************
今天主要是刷算法 ，js， 以及react webpack promias

介绍一下引用计数和标记清除

引用计数：给一个变量赋值引用类型，则该对象的引用次数+1，如果这个变量变成了其他值，那么该对象的引用次数-1，
   垃圾回收器会回收引用次数为0的对象。但是当对象循环引用时，会导致引用次数永远无法归零，造成内存无法释放。
标记清除：垃圾收集器先给内存中所有对象加上标记，然后从根节点开始遍历，去掉被引用的对象和运行环境中对象的标记，剩下的被标记的对象就是无法访问的等待回收的对象。

3. V8如何进行垃圾回收
链接：https://juejin.cn/post/6844904116552990727

3. 两数相加
var add = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let curry = 0;
    while(p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1+v2 +curry;
        curry = Math.floor(val/10);
        p3.naxt = new ListNode(val % 10);
        if(p1) {
            p1 = p1.next
        }
        if(p2) {
            p2 = p2.next;
        }
        p3 = p3.next
    }
    if(curry) {
        p3.next = new ListNode(curry);
    }
    return l3.next
}

// 删除排序链表的重复元素
var delete = function (head) {
    let p = head;
    while(p&p.next) {
        if(p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
}

var intersection = function(nums1, nums2) {
    let set = new Set(nums1)
    let set2 = new Set(nums2)
    return [...set].filter(item => set2.has(item))
}

最全的手写JS面试题
https://juejin.cn/post/6968713283884974088#heading-26

42+JavaScript高频手写实现及详细答案，胖头鱼喊你一起学源码啦！
https://juejin.cn/post/7020562888657993741

15、不同路径（动态规划）
https://juejin.cn/post/7026672593285414948
var uniquePaths = function (m,n){
    //在数组里面使用for循环 里面放空数组 就变成二维数组
    const memo = [];
    for(let i = 0;i<n;i++){
        memo.push([]);
    }
    //第一行路径都是1  只有一条路径
    for(let row = 0; row <n; row ++){
        memo[row][0] = 1;
    }
    // 这个是第一列
    for (let col = 0; col<m; col ++){
        memo[0][col] = 1;
    }
    // 这个才是正式开始算后面格子的路径
    // 两层循环就是行列二维数组 
    for (let row = 1; row <n; row ++){
        for (let col = 1; col <m ;col++){
            // 最终路径等于他上面的格子的路径加左面格子的路径
            memo[row][col]= memo[row-1][col]+memo[row][col-1];
        }
    }
    return  memo[n-1][m-1]; //最后终点的值是n-1，m-1  所以返回这

}

什么是深/浅拷贝
浅拷贝共用一个引用地址，深拷贝会创建新的内存地址。
  function deepClone(obj, cache = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    
    if (cache.has(obj)) return cache.get(obj) // 如果出现循环引用，则返回缓存的对象，防止递归进入死循环
    let cloneObj = new obj.constructor() // 使用对象所属的构造函数创建一个新对象
    cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
      }
    }
    return cloneObj
  }

https://juejin.cn/post/6844904142289256461
前端网站常规优化方案
合并、压缩、混淆html/css/js文件（webpack实现，减小资源大小）

Nginx开启Gzip，进一步压缩资源（减小资源大小）
图片资源使用CDN加速（提高加载速度）
符合条件的图标做base64处理（减小资源大小）
样式表放首部，JS放尾部（JS单线程，会阻塞页面；资源加载方式）
设置缓存（强缓存和协商缓存，提高加载速度）
link或者src添加rel属性，设置prefetch或preload可预加载资源。（加载时机）
如果使用了UI组件库，采用按需加载（减小资源大小）
SPA项目，通过import或者require做路由按需（减小资源大小）
服务端渲染SSR，加快首屏渲染，利于SEO
页面使用骨架屏，提高首页加载速度（提高加载速度） draw-page-structure
使用 JPEG 2000, JPEG XR, and WebP 的图片格式来代替现有的jpeg和png，当页面图片较多时，这点作用非常明显
使用图片懒加载-lazyload

11、实现一个LRU缓存函数  https://juejin.cn/post/7023906112843808804#heading-12
class LRUCache {
    constructor(size) {
      this.size = size
      this.cache = new Map()
    }
    get(key) {
      const hasKey = this.cache.has(key)
      if (hasKey) {
        const val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)
        return val
      } else {
        return -1
      }
    }
    put(key, val) {
      const hasKey = this.cache.has(key)
      if (hasKey) {
        this.cache.delete(key)
      }
      this.cache.set(key, val)
      if (this.cache.size > this.size) {
        this.cache.delete(this.cache.keys().next().value)
      }
    }
}

贪心算法|找零钱算法 https://juejin.cn/post/6855129005415366670 零钱兑换
已知币种1，2，5，10，买菜的时候给了100，花了65，找回35，如何得到最佳的路径：10 10 10 5
输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
/*
* 传入已知币种和找零金额，得到最佳找零路径值
*/
function getMinCoin(coins,amount) {
    let total = 0, change = [];
    //保证币种是降序的，找零的时候，先找最大币种
    coins.sort((a,b)=>b-a);
    for(let i=0;i<coins.length;i++) {
      let coin = coins[i];
      // 如果当前币值+total总和小于找零金额，那说明此币种可用
      while(total + coin <= amount) {
        // 保存当前币值
        change.push(coin)
        // 继续累加
        total += coin;
      }
    }
    return change
  }
  // 测试
  getMinCoin([2,1,5,10],35)
  
  // 返回
  // [10, 10, 10, 5]
  
final和const，final修饰的变量只能被赋值一次，const修饰的变量是一个编译时常量，
区别在于 final 定义的常量可以用变量来初始化，而且final是惰性，运行时才初始化

http://www.zhuguannan.cn/%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%A4%9A%E4%B8%AAtab%E9%A1%B5%E5%A6%82%E4%BD%95%E5%85%B1%E4%BA%ABwebsocket.html
假设你正在做一个在线的IM系统，如何在多个tab页之间，共享一个websocket实例呢？(来自字节跳动)

长度高度不固定的虚拟列表
https://juejin.cn/post/6844903959828627464#heading-0

React实现一个高度自适应的虚拟列表
https://www.zhangshengrong.com/p/x7XRMGZxNz/

长度高度不固定的虚拟列表
https://juejin.cn/post/6844903959828627464

sharedWorker：共享线程，同源策略下，多个运行环境共用同一个线程，包括数据。
多个tab页如何共享websocket
http://www.zhuguannan.cn/%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%A4%9A%E4%B8%AAtab%E9%A1%B5%E5%A6%82%E4%BD%95%E5%85%B1%E4%BA%ABwebsocket.html

sharedworker使用和worker差别不大，sharedworker是共享线程，那么，如何实现共享呢？
https://www.cnblogs.com/baimulan/p/11562010.html

实现多个标签页之间通信的sharedworker
https://mp.csdn.net/mp_blog/manage/article?spm=3001.5298


有了HTTP/2，Websocket还有市场吗？ https://blog.csdn.net/cnweike/article/details/116056371
http2与websocet都有服务器推送的功能，那么websocket会被http2取代吗？为什么？

HTTP/2引入了服务器推送，让服务器能够主动地推送资源到客户端缓存。然而它并没有允许推送数据到客户端应用本身。
服务器的推送只是由浏览器来处理，并不会让应用代码介入，这也就意味着应用程序无法使用API来获取这些事件的通知。

虚拟列表的原理。 https://zhuanlan.zhihu.com/p/26022258
https://juejin.cn/post/7017655711291146253

js实现浅拷贝和深拷贝的区别 详解JS深拷贝与浅拷贝 https://www.jb51.net/article/192518.htm
浅拷贝是按位拷贝对象，它会创建一个新对象，对原有对象的成员进行依次拷贝。如果属性是基本类型，拷贝的就是基本类型的值；
如果属性是引用类型，拷贝的就是内存地址。因此如果新对象中的某个对象成员改变了地址，就会影响到原有的对象。

JSON.parse(JSON.stringify(obj))有什么不足之处？当object内存在循环引用时会报错吗？
JSON.parse(JSON.stringify(obj))可以实现数组和对象和基本数据类型的深拷贝，但不能处理函数。
因为JSON.stringify()方法是将一个javascript值转换我一个JSON字符串，不能接受函数。
如果对象中存在循环引用也无法正确实现深拷贝，会报错
链接：https://juejin.cn/post/7017655711291146253


JS垃圾回收机制是怎样的？
https://zhuanlan.zhihu.com/p/139283115
什么是垃圾回收机制？
垃圾回收机制就是找出那些不再继续使用的值，然后释放其占用的内存空间。垃圾回收器每隔固定的时间段就执行一次释放操作
垃圾回收执行的方式有哪些？
标记清除
引用计数

谈谈你对前端工程化的理解 
https://zhuanlan.zhihu.com/p/141195603

说说你对GraphQL的理解*********
GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，
而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

多终端的出现，APP、小程序、PC端都需要相同的接口，但是又略有差异，常规接口需要提供几套，GraphQL的话只需要写好查询语句即可
天生的聚合接口，以前一个页面需要请求不同的数据，我们可以请求多个接口，我们可以让服务端进行聚合，有了GraphQL后我们可以自己去聚合想要的数据
不用被版本困扰，之前写接口的时候为了兼容老的项目可以正常被访问，尤其是APP，线上的项目，我们接口肯定是不能影响线上的，所以有比较大的改变的时候，
   只能升级版本，有了GraphQL后就无需关心版本问题了，接口还是那个接口查询语句变一下就好了
迁移很简单，服务端在之前的接口上稍加改造就好，前端写查询语句
作者：程洋cYang
链接：https://juejin.cn/post/6896810576778166280

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

1、对项目工程化的理解
前端工程化的目的是为了提高开发效率，降低开发难度，个人认为主要应该从模块化，组件化，规范化，自动化四个方面思考。
模块化就是将一个大文件拆分成互相依赖的小文件，再进行统一的拼装和加载比如es6的import，export，commonjs，amd，cmd等，
webpack的模块化加载。组件化就是对UI的拆分，规范化例如目录结构的定义，编码规范，（如命名规范，js规范，css代码书写风格）
前后端接口规范，文档规范等，自动化比如自动化部署（压缩合并打包）等。
链接：https://juejin.cn/post/7065483941305647112

为什么要用多个域名来存储资源

CDN缓存更方便，cdn使用户就近获取资源，静态内容和动态内容分服务器存放，使用不同的服务器处理请求。    
   处理动态内容的只处理动态内容，不处理别的，提高效率，这样使得CDN（内容分发网络）缓存更方便
节省cookie带宽，跨域不会传cookie
节约主域名的连接数，优化页面响应速度
防止不必要的安全问题

['1','2','3'].map(parseInt)结果
[1,NaN,NaN]
['1','2','3'].map(parseInt)相当于 ['1','2','3'].map((item,index)=>{ return parseInt(item,index) })
parseInt第二个参数，表示基数。如果省略该参数或其值为 0，则数字将以 10 为基础来解析。
如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。3不是二进制数，所以也返回NaN
链接：https://juejin.cn/post/7065483941305647112

87、websocket 为什么要加心跳? websocket 不是长连接吗，为什么还要加心跳去维持链接
https://juejin.cn/post/7065483941305647112


96、try-catch可以捕获setTimeout的异常嘛？promise的异常可以捕获嘛
try-catch 主要用于捕获异常，注意，这里的异常，是指同步函数的异常，如果 try 里面的异步方法出现了异常，此时catch 是无法捕获到异常的，
原因是因为：当异步函数抛出异常时，对于宏任务而言，执行函数时已经将该函数推入栈，此时并不在 try-catch 所在的栈，所以 try-catch 并不能捕获到错误。
对于微任务而言，比如 promise，promise 的构造函数的异常只能被自带的 reject 也就是.catch 函数捕获到。
解决方案：
对于同步函数，使用try-catch即可
对于异步函数-宏任务，window全局错误捕获函数onerror

try {
    setTimeout(function(){ 
        console.log(b);
    }, 0);
} catch (error) { 
    console.log(error); 
    // 这里是不会执行的 
} 
window.onerror = function() { 
    console.log(...arguments) 
}
对于异步函数-微任务，js 有专门捕获没有写 catch 的 promise，如下：
window.addEventListener(
  'unhandledrejection',
  function() { console.log(...arguments) }
)
链接：https://juejin.cn/post/7065483941305647112

100、为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？ https://juejin.cn/post/7065483941305647112
可以发送get请求，且不需要获取和处理数据
可以跨域
执行过程无阻塞
相比XMLHttpRequest，性能更好
gif体积小

区别
深拷贝中既要拷贝基本数据类型也要拷贝引用类型的数据，也就是说拷贝一份完全一样的对象。
浅拷贝中之拷贝基本数据类型，引用类型的数据只是拷贝了原来的引用，并没有把引用的数据也拷贝。 