如何实现扫码登录功能？   
https://juejin.cn/post/7021515145335554079  
访问PC端二维码生成页面，PC端请求服务端获取二维码ID
服务端生成相应的二维码ID，设置二维码的过期时间，状态等。 
PC获取二维码ID，生成相应的二维码。
手机端扫描二维码，获取二维码ID。
手机端将手机端token和二维码ID发送给服务端，确认登录。
服务端校验手机端token，根据手机端token和二维码ID生成PC端token
PC端通过轮询方式请求服务端，通过二维码ID获取二维码状态，如果已成功，返回PCtoken，登录成功。
链接：https://juejin.cn/post/7021515145335554079

//===========================================================================
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

迟到的大厂前端面试记录（面试题+部分答案）https://juejin.cn/post/7017655711291146253

介绍一下预检请求。
https://juejin.cn/post/6844903765548466183
https://juejin.cn/post/6982501294518829093
预检请求
只有跨域的情况下，才会发生预请求
与前述简单请求不同，“需预检的请求”要求必须首先使用OPTIONS方法发起一个预检请求到服务器，
以获知服务器是否允许该实际请求。“预检请求”的使用，可以避免跨域请求对服务器的用户数据产生
未预期的影响。

CORS跨域请求[简单请求与复杂请求]
options 请求就是预检请求，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，
触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，
浏览器才继续发起正式请求。
介绍一下跨域和预检请求

通俗来讲，就是我们所熟知的跨域请求。众所周知，在以前，跨域可以采用代理、JSONP等方式，
而在现代浏览器面前，这些终将成被摒弃，因为有了CORS。CORS在最初接触的时候只大概了解到，
通过服务器端设置Access-Control-Allow-Origin响应头，即可使指定来源像访问同源接口一样
访问跨域接口，最近在使用CORS的时候，由于需要传输自定义Header信息，发现原来CORS的规范定
义远不止这些。
CORS可以分成两种：
1、简单请求2、复杂请求一个简单的请求大致如下：HTTP方法
是下列之一HEAD GET POST HTTP头信息不超出以下几种字段Accept Accept-Language Content-Type
，但仅能是下列之一application/x-www-form-urlencoded multipart/form-data text/plain
任何一个不满足上述要求的请求，即被认为是复杂请求。
一个复杂请求不仅有：包含通信内容的请求，
同时也包含预请求。
链接：https://juejin.cn/post/6844904150459908103

写一个防抖。你现在写的是非立即执行的版本，可以再写一个立即执行的版本吗？
//================================================================
算法题：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
最大自序和
var maxSubArray = function(nums) {
  let res = nums[0];
  let sum = 0;
  for(let num of nums) {
      if(sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      res = Math.max(res,sum);
  }
  return res;
}
var maxSubArray = function(nums) {
  let res = nums[0];
  let tep = 0;
  nums.forEach(num => {
      tep = Math.max(num+tep,num);
      res = Math.max(res,tep);
  })
  return res;
}

var maxSubArray = function(nums) {
  let n = nums.length;
  if(n == 0) return 0;
  let dp = new Array(n);
  dp[0] = nums[0];
  for(let i = 1; i < n; i++) {
      dp[i] = Math.max(nums[i], dp[i-1]+nums[i]);
  }
  let res = dp[0];
  for(let i = 0; i < dp.length; i++) {
      res = Math.max(res,dp[i]);
  }
  return res;
}
//================================================================
给定一个二进制数组, 找到含有相同数量的0和1的最长连续子数组的长度，例如[0,0,0,1,1,0,1,0,0]=>6

算法题：将对象的属性全部提升到第一层。
function transfor(obj,stack,result) {
  for(let key in obj) {
      if(parseInt(key).toString() == 'NaN') {
          stack.push(key);
      } else { 
          stack.push(`[${key}]`);
      }
      if(typeof obj[key] == 'object' && obj[key] !== null) {
          transfor(obj[key],stack,result);
      } else {
          let stackStr = stack.join('.');
          console.log(result)
          result[stackStr] = obj[key];
          stack.pop();
      }
  }
  return result;
}

let testObj = {
  a: {
      b: 1,
      c: [0, {d: 1}]
  }
}

console.log(transfor(testObj,[],{}))

//===================compose实现
function fn1(x){
  return x + 1
}
function fn2(x){
  return x * 10
}
function fn3(x){
  return x - 1
}
​
let x = 10
let result = fn3(fn2(fn1(x))) // 109
let fn = compose(fn3, fn2, fn1)
let result = fn(x)

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

//================================================================
讲一下http缓存处理机制？强制缓存协商缓存返回的状态码分别是？
了解expires有什么缺点吗？expires中存放的是什么数据类型？
cache-contorl的max-age中存放的又是什么数据类型？
http缓存分为强制缓存和协商缓存，其中强制缓存：http1.0——expired，
http1.1——cache- control：private/public/no-cache/no-store/max-age。

协商缓存：http1.0——last-modified（响应头）/if-modify-since（请求头），
http1.1——etag（响应头）/if-none-match（请求头）。expires和max-age
都可以用来指定文档的过期时间，但两者有一些细微差别。expires中存放的是一个
绝对的过期时间，这么做会导致至少2个问题：1.客户端和服务器时间不同步导致expires
的配置出现问题；2.很容易在配置后忘记具体的过期时间，导致过期来临出现浪涌现象；
max-age指定的是从文档被访问后的存活时间，这个时间是个相对值（比如3600s），
相对的是文档第一次被请求时服务器记录的request_time（请求时间）。另外，expires
指定的时间其实可以是相对文件的最后访问时间（atime）或者修改时间（atime）。
链接：https://juejin.cn/post/7017655711291146253

//================================================================
堆(heap)和栈(stack)
栈(stack)会自动分配内存空间，会自动释放。堆(heap)动态分配的内存，大小不定也不会自动释放。
基本类型和引用类型
基本类型：简单的数据段，存放在栈内存中，占据固定大小的空间。
引用类型：指那些可能由多个值构成的对象，保存在堆内存中,包含引用类型的变量实际上保存的不是变量本身，
二十指向该对象的指针。

什么是Cookie 隔离？
请求资源的时候不带cookie、
请求头中就不会带有cookie数据，
这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。
如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
所以不如隔离开。

//================================================================
// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log(111);
  }, 1000)
);
链接：https://juejin.cn/post/7004638318843412493

25 手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）
{
  tag: 'DIV',
  attrs:{
   id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作 这一步是关键
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}

https://juejin.cn/post/7004638318843412493

26 手写-实现一个对象的 flatten 方法（阿里）
const obj = {
  a: {
        b: 1,
        c: 2,
        d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }


2 css 怎么开启硬件加速(GPU 加速)
浏览器在处理下面的 css 的时候，会使用 GPU 渲染
transform（当 3D 变换的样式出现时会使用 GPU 加速）
opacity
filter
will-change

注意:用 history.pushState()或者 history.replaceState()不会触发 popstate 事件
popstate 事件会在点击后退、前进按钮(或调用 history.back()、history.forward()、history.go()方法)
时触发

//================================================================
1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口（静态编译）。
3、CommonJs 是单个值导出，ES6 Module 可以导出多个
4、CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
5、CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined
链接：https://juejin.cn/post/7004638318843412493

Babel 是一个 JavaScript 编译器。他把最新版的 javascript 编译成当下可以执行的版本，
简言之，利用 babel 就可以让我们在当前的项目中随意的使用这些新最新的 es6，甚至 es7 的语法。
Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成
//================================================================

13 RAF 和 RIC 是什么
requestAnimationFrame： 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)；
由于是每帧执行一次，那结果就是每秒的执行次数与浏览器屏幕刷新次数一样，通常是每秒 60 次。
requestIdleCallback：会在浏览器空闲时间执行回调，也就是允许开发人员在主事件循环中执行低优先级任务，
而不影响一些延迟关键事件。如果有多个回调，会按照先进先出原则执行，但是当传入了 timeout，为了避免超时，
有可能会打乱这个顺序。

这个题目可以深入去问浏览器每一帧的渲染流程 具体可以看看这篇 requestIdleCallback 和 
requestAnimationFrame 详解
链接：https://juejin.cn/post/7004638318843412493

寄生组合继承
function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}
Parent.prototype.play = () => {
  console.log(222);
};
function Children(name) {
  Parent.call(this);
  this.name = name;
}
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;
// let child = new Children("111");

https://juejin.cn/post/6968713283884974088#heading-26
手写算法

//================================================================
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
function rectCover(number)
{
  // write code here
  if(number<=2)
    return number;
  else
    return rectCover(number - 1)+rectCover(number - 2);
}

// 动态规划
function rectCover(number)
{
    let ans=[0,1,2];
    for(var i=3;i<=number;i++){
        ans[i]=ans[i-1]+ans[i-2];
    }
    return ans[number];
}
————————————————
原文链接：https://blog.csdn.net/violet_seven/article/details/107042191
//================================================================
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
function Power(base, exponent)
{
    // write code here
    return base**exponent;
}

16.操作给定的二叉树，将其变换为源二叉树的镜像。
输入描述:
二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
————————————————

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  if (root === null) return;
  Mirror(root.left);
  Mirror(root.right);
  [root.left, root.right] = [root.right, root.left];//ES6解构解析
  return root;
}
原文链接：https://blog.csdn.net/duyujian706709149/article/details/97368743

//================================================
夯实JavaScript功底，前端要会的手写方法
https://juejin.cn/post/6844903887502082061#heading-22
call: 简单来说就是改变执行方法当前的this，可以传入不定参数
Function.prototype.Call = function(context, ...args) {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

getMessage.Call(obj, 'name'); 
http://interview.poetries.top/docs/excellent.html#_13-%E6%89%8B%E5%86%99-call%E3%80%81apply-%E5%8F%8A-bind-%E5%87%BD%E6%95%B0

Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

apply: 和call作用一致，传递参数格式不同，需是数组
Function.prototype.myApply = function(context, args) {
  context.fn = this;
  const result = context.fn(args);
  delete context.fn;
  return result;
}

getMessage.myApply(obj, ['name']);

bind: 改变指定方法的this后执行，以函数的形式返回执行结果
Function.prototype.myBind = function(context, ...args) {
  return () => {
    return this.myApply(context, args);
  }
}

const result = getMessage.myBind(obj) 
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

result是一个函数，再执行一次才是getMessage方法的执行结果

iterator：不使用Generator函数创建迭代器
function myIterator(items) {
  let i = 0;
  return {
    next() {
      const done = i >= items.length;
      const value = !done ? items[i++] : undefined;
      return {
        done,  // 是否全部迭代完成
        value  // 返回迭代的值
      }
    }
  }
}
const interator = myIterator([1, 2, 3]);
interator.next();

二叉树的深度
function TreeDepth(pRoot){
    // write code here
    if(pRoot == null){
        return 0;
    }
    var left = TreeDepth(pRoot.left)+1;
    var right = TreeDepth(pRoot.right)+1;
    return Math.max(left, right);
}
————————————————
原文链接：https://blog.csdn.net/qq_29652349/article/details/77911078   

