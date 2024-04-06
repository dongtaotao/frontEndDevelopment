防抖和节流
防抖
防抖是指在事件被触发n秒后在执行回调，如果在这n秒内时间又被触发，则重新计时。

可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
//fn是需要防抖的函数,delay是等待时间
function debounce(fn, delay = 500) {
  let timer = null;
  // 这里返回的函数是每次用户实际调用的防抖函数
  return function(...args) {	//...args是es6的剩余参数语法，将多余的参数放入数组，用来代替arguments对象
    // 如果已经设定过定时器了就清空上一次的定时器
    if(timer) {
        clearTimeout(timer);	
      }
      // 开始一个新的定时器，延迟执行用户传入的方法；注：定时器的返回值是一个数值，作为定时器的编号，可以传入clearTimeout来取消定时器
      timer = setTimeout(() => {  //这里必须是箭头函数，不然this指向window,要让this就指向fn的调用者
        fn.apply(this, args);   
      }, delay)	
  }
}
节流
节流就是一定时间内执行一次事件，即使重复触发，也只有一次生效。

可以使用在监听滚动scroll事件上，通过事件节流来降低事件调用的频率。
1. 定时器版本
throttle(fn, delay = 500) {
  let timer = null;
  return function(...args) {
    // 当前有任务了，直接返回
      if(timer) {
        return;
      }
      timer = setTimeout(() => {
          fn.apply(this, args);
          //执行完后，需重置定时器，不然timer一直有值，无法开启下一个定时器
          timer = null;	
      }, delay)
  }
}
2. 时间戳版本
// 节流
function throttle(fn, delay = 500) {
  let prev = Date.now();// 上一次执行该函数的时间
  return function(...args) {
    let now = Date.now();//返回从UTC到当前时间的毫秒数
    // 如果差值大于等于设置的等待时间就执行函数
    if (now - prev >= delay) {
      fn.apply(this, args);
      prev = Date.now();
    }
  };
}
https://juejin.cn/post/7330571394550136866


react 如何实现keep-alive?
Keep-alive是缓存路由使用的，保留之前路由的状态
实现方法：
使用npm库：
react-router-cache-router
React-activation


实现Sum函数链式调用计算多数之和
原型链

最直接的写法就是利用原型链+add方法返回this来实现，total和作为对象的属性来访问的返回

function Sum(initialValue=0) {
  this.total = initialValue;
}
Sum.prototype.add = function(num) {
  this.total += num
  return this;
}

const result = new Sum(1) 
result.add(2).add(3);
console.log(result.total)


Service Worker
Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。



// 转换前：
source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
// 转换为: 
tree = [{
id: 1,
pid: 0,
name: 'body',
children: [{
  id: 2,
  pid: 1,
  name: 'title',
  children: [{
    id: 3,
    pid: 1,
    name: 'div'
  }]
}
}]


function jsonToTree(data) {
  // 初始化结果数组，并判断输入数据的格式
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  // 
  data.forEach(item => {
    let parent = map[item.pid];
    if(parent) { 
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}


18. $nextTick 原理及作用
https://www.yuque.com/cuggz/interview/hswu8g#cc32fdc61aae46b482a76474f21bf2c1
Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。

nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout的原生 JavaScript 方法来模拟对应的微/宏任务的实现，
本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。



第43题：Vue是怎么把template模版编译成render函数的？
https://fe.ecool.fun/topic/926774f3-32a9-453c-84e4-0c873323b3ee?orderBy=updateTime&order=desc&tagId=14

第58题：React 中怎么实现状态自动保存（KeepAlive）？
https://fe.ecool.fun/topic/321f6c36-eff4-4fc4-8a86-c989bb1a2779?orderBy=updateTime&order=desc&tagId=13
重写 <Route> 组件，可参考 react-live-route。重写可以实现我们想要的功能，但成本也比较高，需要注意对原始 <Route> 功能的保存，以及多个 react-router 版本的兼容
重写路由库，可参考 react-keeper 。重写路由库成本是一般开发者无法承受的，且完全替换掉路由方案是一个风险较大的事情，需要较为慎重地考虑。
基于 <Route> 组件现有行为做拓展，可参考 react-router-cache-route 。在阅读了 <Route> 的源码后发现，如果使用 component 或者 render 属性，都无法避免路由在不匹配时被卸载掉的命运。但将 children 属性当作方法来使用，我们就有手动控制渲染的行为的可能。


JavaScript 实现对上传图片的压缩？
答：读取用户上传的 File 对象，读写到画布（canvas）上，利用 Canvas 的 API 进行压缩，完成压缩之后再转成 File（Blob） 对象，
上传到远程图片服务器；不过有时候我们也需要将一个 base64 字符串压缩之后再变为 base64 字符串传入到远程数据库或者再转成 File（Blob） 对象。

思路就是 File + Canvas 的 drawImage


webpack 原理简述
#1.1 核心概念
JavaScript 的 模块打包工具 (module bundler)。通过分析模块之间的依赖，最终将所有模块打包成一份或者多份代码包 (bundler)，供 HTML 直接引用。实质上，Webpack 仅仅提供了 打包功能 和一套 文件处理机制，然后通过生态中的各种 Loader 和 Plugin 对代码进行预编译和打包。因此 Webpack 具有高度的可拓展性，能更好的发挥社区生态的力量。

Entry: 入口文件，Webpack 会从该文件开始进行分析与编译；
Output: 出口路径，打包后创建 bundler 的文件路径以及文件名；
Module: 模块，在 Webpack 中任何文件都可以作为一个模块，会根据配置的不同的 Loader 进行加载和打包；
Chunk: 代码块，可以根据配置，将所有模块代码合并成一个或多个代码块，以便按需加载，提高性能；
Loader: 模块加载器，进行各种文件类型的加载与转换；
Plugin: 拓展插件，可以通过 Webpack 相应的事件钩子，介入到打包过程中的任意环节，从而对代码按需修改；
#



Vue双向绑定的原理和响应式原理，两个区别

Vue.js 的双向绑定和响应式系统是其核心特性之一，它们共同为开发者提供了一种高效的方式来构建动态的用户界面。尽管这两个概念在 Vue 中紧密相连，但它们的工作原理和目的有所不同。我将分别解释它们的原理，并讨论它们之间的区别。

响应式系统的原理
Vue 的响应式系统允许它跟踪数据的变化，并在数据变化时自动更新视图。这是通过使用 JavaScript 的特性，如 Object.defineProperty (Vue 2.x) 或 Proxy (Vue 3.x) 实现的。

Vue 2.x 使用 Object.defineProperty 方法来劫持（或监视）对象的 getter 和 setter，使得每当对象的属性被访问或修改时，Vue 都能够知道并作出相应的处理（例如，更新视图）。
Vue 3.x 改进了响应式系统，采用 Proxy 对象，它可以直接监听对象和数组的变化。Proxy 提供了一种机制来自定义对象的基本操作，如属性读取、赋值、枚举等，Vue 通过这种方式能更高效和灵活地检测数据的变化。
在这两个版本中，Vue 都会为数据模型的每个属性创建一个依赖收集器（Dep），当组件渲染时，会让这些属性的依赖收集器收集当前组件的渲染Watcher。当属性变化时，它会通知所有收集的Watcher，导致组件重新渲染。

双向绑定的原理
Vue 实现双向绑定最常用的是通过 v-model 指令，它是一个语法糖，背后利用了 Vue 的响应式系统和事件系统。

当你在模板中使用 v-model 绑定了表单元素（如输入框）时，Vue 会自动把表单元素的当前值与数据模型中的属性绑定起来。
在用户输入时，表单元素的事件监听器会触发，更新数据模型中的属性值。
因为属性值变更了，Vue 的响应式系统会捕捉到这个变化，并自动更新所有依赖于这个属性的视图部分，包括当前的表单元素，实现了数据的双向绑定。
两者的区别
目的和应用场景：响应式系统是 Vue 的基础，负责侦听数据变化并更新视图，适用于所有需要数据驱动视图更新的场景。双向绑定是建立在响应式系统之上的特性，主要用于表单元素，方便快捷地在用户输入和程序数据模型之间建立双向连接。
工作机制：响应式系统通过劫持数据属性的访问器方法或使用 Proxy 监听数据的变化，来自动触发视图更新。双向绑定则在响应式系统的基础上，通过特定指令（如 v-model）实现了视图到数据和数据到视图的自动同步。
实现原理：响应式系统的实现依赖于 JavaScript 的高级特性，如 Object.defineProperty 或 Proxy，而双向绑定则是通过指令系统和事件监听器等实现的。
总结来说，Vue 的响应式系统为数据和视图的单向绑定提供了基础，而双向绑定是在此基础上，通过 v-model 等语法糖，为特定场景（如表单输入）提供了便利的数据双向同步机制。


说一下 Webpack 的热更新原理吧
(敲黑板，这道题必考)
Webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。
后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。


说下 React hooks 实现原理
https://www.iqiyi.com/v_2arn88w4gls.html?vfrm=pcw_dianying&vfrmblk=711219_dianying_fyb&vfrmrst=711219_dianying_fyb_float_video_area2

A：闭包、Fiber、链表

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。在 Fiber 树更新时，
就能从 Hooks 中计算出最终输出的状态和执行相关的副作用

考虑过 React 、 Vue 这类的框架为什么要用 Virtual DOM 机制吗？
A：为了减少不必要的 DOM 渲染、跨平台、为函数式的 UI 编程打开了大门


3. 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0; // 左指针的初始位置
  let res = 0; // 长度初始值为0
  const map = new Map();
  for(let r = 0; r < s.length; r++) {
      if(map.has(s[r]) && map.get(s[r]) >= l ) {
          l = map.get(s[r]) + 1;
      }
      res = Math.max(res, r - l + 1);
      map.set(s[r], r);
  }
  return res;
};


111. 二叉树的最小深度
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
          return 0;
      }
      const q = [[root,1]]
      while(q.length) {
           const [n,l] = q.shift();
           if(!n.left && !n.right) {
               return l;
           }
           if(n.left) q.push([n.left, l+ 1])
           if(n.right) q.push([n.right, l+ 1])
      } 
};
102. 二叉树的层序遍历
https://juejin.cn/post/6973941162952687653#heading-8
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) {return [];}
  const q = [[root,0]];
  let res = [];
  while(q.length) {
      const [n,leave] = q.shift();
      if(!res[leave]) { // 层级为0 的时候，根节点入队
          res.push([n.val])
      }else {
          res[leave].push(n.val) // 根据层级添加对应的val值
      }
      console.log(n.val,leave)
      if(n.left) q.push([n.left,leave+1]);
      if(n.right) q.push([n.right,leave+1]);
  }
  return res;
};


2.8 二叉树的最大深度
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


function add(a ,b){
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength , 0);//"0009007199254740991"
  b = b.padStart(maxLength , 0);//"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0;
  let f = 0;   //"进位"
  let sum = "";
  for(let i=maxLength-1 ; i>=0 ; i--){
     t = parseInt(a[i]) + parseInt(b[i]) + f;
     f = Math.floor(t/10);
     sum = t%10 + sum;
  }
  if(f!==0){
     sum = '' + f + sum;
  }
  return sum;
}   


pm2
PM2 是一个流行的进程管理器，用于 Node.js 应用程序。它支持应用程序的负载均衡、自动重启、日志管理、监控以及多环境管理等功能。
PM2让开发者能够以守护进程的方式运行和管理 Node.js 应用，即使在应用崩溃或服务器重启后也能自动重启应用。
这使得 PM2非常适合在生产环境中部署 Node.js 应用。除此之外，PM2还支持应用的零停机更新，以及对 Docker 容器的支持。

链接：https://juejin.cn/post/7338691767435100195

什么是合成事件，与原生事件有什么区别？
React 中所有触发的事件，都是自己在其内部封装了一套事件机制。目的是为了实现全浏览器的一致性，抹平不同浏览器之间的差异性。

在 React17 之前，React 是把事件委托在 document 上的，React17 及以后版本不再把事件委托在 document 上，而是委托在挂载的容器上。React 合成事件采用的是事件冒泡机制，当在某具体元素上触发事件时，等冒泡到顶部被挂载事件的那个元素时，才会真正地执行事件。

而原生事件，当某具体元素触发事件时，会立刻执行该事件。因此若要比较事件触发的先后时机时，原生事件会先执行，React 合成事件会后执行。


贪心算法(找零)
商店老板有1、2、5、10面额的纸币，小伙买东西给了100花了80，计算如何找零是最佳（阿里面试题）
function MinCoinChange(coins) {
  return function(amount) {
    let total = 0, change = []
    for(let i= coins.length; i>=0; i--) {
      let coin = coins[i]
      while(total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}

MinCoinChange([1,2,5,10])(20)

返回：10,10


两数相加
var addTwoNumbers = function (l1, l2)
{
    const l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0;
    while(p1 || p2){
        const v1 = p1 ? p1.val :0
        const v2 = p2 ? p2.val :0
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10);
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    if(carry){
        p3.next = new ListNode(carry)
    }
    return l3.next
};


合并二叉树
var mergeTrees = function(t1, t2) {
  if(t1 && t2){
      t1.val += t2.val;
      t1.left = mergeTrees(t1.left,t2.left);
      t1.right = mergeTrees(t1.right,t2.right);
  }
  return t1 || t2;
};


两数相加
var addTwoNumbers = function (l1, l2)
{
    const l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0;
    while(p1 || p2){
        const v1 = p1 ? p1.val :0
        const v2 = p2 ? p2.val :0
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10);
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    if(carry){
        p3.next = new ListNode(carry)
    }
    return l3.next
}; 


React Hooks 实现原理
https://febook.hzfe.org/awesome-interview/book1/frame-vue-computed-watch
相关问题
React Hooks 是什么
React Hooks 是怎么实现的
使用 React Hooks 需要注意什么
回答关键点
闭包 Fiber 链表

Hooks 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用。

使用 Hooks 的注意事项：

不要在循环，条件或嵌套函数中调用 Hooks。
只在 React 函数中调用 Hooks。


Vue 的 computed 和 watch 的区别
相关问题
computed 和 watch 的实现原理
computed 和 watch 的适用场景 
https://febook.hzfe.org/awesome-interview/book1/frame-vue-computed-watch


webpack如何实现懒加载

import()
结合Vue React异步组件
结合Vue-router``React-router异步加载路由


为什么 Vite 启动这么快
Webpack 会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。
而 Vite 是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
Vite 将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像 Webpack 那样进行打包合并。
由于 Vite 在启动的时候是通过esbuild方式进行EsModel原生引入浏览器且按需更新。也就意味着不需要分析模块的依赖、不需要编译。因此启动速度非常快。当浏览器请求某个模块时，再根据需要对模块内容进行编译。
链接：https://juejin.cn/post/6991724298197008421

如何监控网页崩溃？**崩溃和卡顿有何差别？**监控错误
Service Worker 有自己独立的工作线程，与网页区分开，网页崩溃了，Service Worker 一般情况下不会崩溃；
Service Worker 生命周期一般要比网页还要长，可以用来监控网页的状态；
卡顿：加载中，渲染遇到阻塞
链接：https://juejin.cn/post/6991724298197008421


http 中的 keep-alive 有什么作用
响应头中设置 keep-alive 可以在一个 TCP 连接上发送多个 http 请求

避免CSS全局污染
1.scoped 属性
2.css in js

js复制代码const styles = {
  bar: {
    backgroundColor: '#000'
  }
}
const example = (props)=>{
  <div style={styles.bar} />
}


3.CSS Modules
4.使用less，尽量少使用全局对选择器

js复制代码// 选择器上＞要记得写，免得污染所有ul下面的li
ul｛
  ＞li｛
    color：red；
  }
}

链接：https://juejin.cn/post/6991724298197008421


  // 防抖
  function debounce(fn) {
  let timeout = null; 
  return function () {
    // 如果事件再次触发就清除定时器，重新计时
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}

// 节流
function throttle(fn) {
  let flag = null; // 通过闭包保存一个标记
  return function () {
    if (flag) return; // 当定时器没有执行的时候标记永远是null
    flag = setTimeout(() => {
      fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为null(关键)
        // 表示可以执行下一次循环了。
      flag = null;
    }, 500);
  };
}



6.lru算法 https://juejin.cn/post/6896810576778166280
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
