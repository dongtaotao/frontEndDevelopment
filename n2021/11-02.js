babel 编译原理
babylon 将 ES6/ES7 代码解析成 AST
babel-traverse 对 AST 进行遍历转译，得到新的 AST 
新 AST 通过 babel-generator 转换成 ES5

使 a == 1 && a == 2 成立
let val = 1;
Object.defineProperty(window, 'a', {
  get: function() {
    return val++;
  }
});

var a = [1, 2, 3];
a.join = a.shift;

//================================================================
function Person() {};
const person = new Person();

console.log(person.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true

console.log(person.__proto__.__proto__ === Object.prototype); // true

Object.prototype.__proto__ === null

person.__proto__ === Person.prototype
Person.__proto__ === Function.prototype
person.__proto__.__proto__ === Object.prototype
Object.prototype.__proto__ === null
链接：https://juejin.cn/post/6890716797436166152

//================================================================
2.1 手写防抖
function debounce(fn) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this.arguments);
    }, 1000);
  }
}

//================================================
三 节流
function throttle (fn) {
  let timer = true;
  return function(...args) {
    if(!timer) return;
    timer = false ;
    setTimeout(() => {
      fn.call(this, ...args)
      timer = true
    }, 100)
  }
}

 // 基础版1：时间戳（第一次触发会执行，但不排除不执行的可能，请思考一下哦）1. 利用时间戳
function throttle(fn, delay) {
  var prev = Date.now()
  return function(...args) {
    var dist = Date.now() - prev
    if (dist >= delay) {
      fn.apply(this, args)
      prev = Date.now()
    }
  }
}

// 节流的实现2;
先定义一个定时器，在内部函数中若没有定时器，说明上一次设定的定时器已到时销毁，若上次定时器时间还没到 ，就不执行相应函数
export const throttle2 = (fn, wait = 500) => {
  let timeout; //定义一个定时器
  return function (args) {
    // 若没有定时器，说明上一次设定的定时器已到时销毁，若上次定时器时间还没到 ，就不执行相应函数
    if (!timeout) {
      timeout = setTimeout(function () {
        console.log("this", this);
        fn.apply(this, [args]);
        timeout = null;
      }, wait);
    }
  };
};

//=================================================================
JSONP https://juejin.cn/post/6894914682147045389
window.jsonpCallBack = function(res) {
  console.log(res);
}
<script src='http://localhost:8080/api/jsonp?id=1&cb=jsonpCallBack' type='text/javascript'></script>

后端
const Koa = require('koa');
const app = new Koa();
const items = [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }]

app.use(async (ctx, next) => {
  if (ctx.path === '/api/jsonp') {
    const { cb, id } = ctx.query;
    const title = items.find(item => item.id == id)['title']
    ctx.body = `${cb}(${JSON.stringify({title})})`;
    return;
  }
})
console.log('listen 8080...')
app.listen(8080);

//================================================================
跨域https://juejin.cn/post/6896251515594342407
CORS
CORS 跨域的原理。
跨域资源共享（CORS）是一种机制，是 W3C 标准。它允许浏览器向跨源服务器，发出 XMLHttpRequest 或
  Fetch 请求。并且整个 CORS 通信过程都是浏览器自动完成的，不需要用户参与。
  而使用这种跨域资源共享的前提是，浏览器必须支持这个功能，并且服务器端也必须同意这种 "跨域"
  请求。因此实现 CORS 的关键是服务器需要服务器。
  浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。
  服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。
  该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。
  CORS 的请求分为两种：
  简单请求
  复杂请求
  一个简单请求大致如下。
  HTTP 方法是下列之一：
  HEAD
  GET
  POST

HTTP 头信息不超过以下几种字段
Accept
Accept-Language
Content-Language
Last-Event-ID
……等（记不住。。。）

任何不满足上述要求的请求，都是复杂请求。
一个复杂请求不仅包含通讯内容的请求，同时也包含预请求。
简单请求和复杂请求的区别：

简单请求 的发送从代码上看起来和普通的 XHR 没太大区别，但是 HTTP 头当中要求总是
包含一个域（Origin）
的信息。该域包含协议名、地址以及一个可选的端口。
复杂请求 不止发送一个请求。其中最先发送的是一种 “预请求”，而服务端也需要返回 “预回应” 作为相应。
预请求实际上是对服务端的一种权限请求，只有当预请求成功返回，实际请求才开始执行。
链接：https://juejin.cn/post/6896251515594342407

//================================================================
object.create
function create(proto) {
  function F() {};
  F.prototype = proto;
  return new F();
}
const Father = function() {
  this.bigName = '爸爸';
};
Father.prototype.sayHello = function() {
  console.log(`我是你${this.bigName}`);
}

const Child = function() {
  Father.call(this);
  this.smallName = '儿子';
}
Child.prototype = create(Father.prototype);
Child.prototype.constructor = Child;

const child = new Child();
child.sayHello(); // 我是你爸爸

寄生组合式继承会用到 Object.create()。
Children.prototype = Object.create(Father.prototype);
作者：jsliang
链接：https://juejin.cn/post/6895179296055558151

//================================================================
const ajaxi = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = (res) => {
      if(xhr.readyState !==4) {
        return;
      }

      if(xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
  })
}
//================================================================
原始数据类型是存储在栈空间中的，引用类型的数据是存储在堆空间中的。

//================================================================
GUI 渲染线程：解析 HTML、CSS 等。在 JavaScript 引擎线程运行脚本期间，GUI 渲染线程处于挂起状态，也就是被 “冻结” 了。
JavaScript 引擎线程：负责处理 JavaScript 脚本。
定时触发器线程：setTimeout、setInterval 等。事件触发线程会将计数完毕后的事件加入到任务队列的尾部，等待 JS 引擎线程执行。
事件触发线程：负责将准备好的事件交给 JS 引擎执行。
http 请求线程：负责执行异步请求之类函数的线程，例如 Promise.then()、ajax 等。
链接：https://juejin.cn/post/6892164887456251918

//================================================================
重绘（repaint）：当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需
  要 UI 层面的重新像素绘制，因此损耗较少。
回流（reflow）：又叫重排（layout）。当元素的尺寸、结构或者触发某些属性时，浏览器会重新渲染
  页面，称为回流。
//================================================================
正向代理是一个位于客户端和目标服务器之间的代理服务器(中间服务器)。为了从原始服务器取得内容，
客户端向代理服务器发送一个请求，并且指定目标服务器，之后代理向目标服务器转交并且将获得的内容返回给
客户端。正向代理的情况下客户端必须要进行一些特别的设置才能使用。
我是一个用户，我访问不了某网站，但是我能访问一个代理服务器。
这个代理服务器呢，他能访问那个我不能访问的网站，于是我先连上代理服务器，告诉他我需要那个无法访
问网站的内容，代理服务器去取回来，然后返回给我。
用户 1
      \
用户 —— 代理 -> 服务器
      /
用户 3

反向代理正好相反。对于客户端来说，反向代理就好像目标服务器。并且客户端不需要进行任何设
置。客户端向反向代理发送请求，接着反向代理判断请求走向何处，并将请求转交给客户端，使得这些内容就
好似他自己一样，一次客户端并不会感知到反向代理后面的服务，也因此不需要客户端做任何设置，只需要把反
向代理服务器当成真正的服务器就好了。
反向代理即在客户端和服务器之间推出一个代理服务器，然后所有请求内容都经过代理服务器去管理。
反向代理中，用户是不知道具体请求到的服务器的 IP 地址的。
用户 1               服务器 1
      \            /
用户 2 ->  总服务器 -> 服务器 2
      /            \
用户 3               服务器 3
https://juejin.cn/post/6899211700319944717

//=============================================================== 
speed-measure-webpack-plugin：测量出在构建过程中，每一个 Loader 和 Plugin 的执行时长。
webpack-bundle-analyzer：通过矩阵树图的方式将包内各个模块的大小和依赖关系呈现出来。 

//================================================================
寄生组合继承。 
function Parent5 () {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;

//================================================================
对于 cookie
value	如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识
http-only	不能通过 JS访问 Cookie，减少 XSS攻击
secure	   只能在协议为 HTTPS 的请求中携带
same-site	规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击

2 webpack热更新原理
当修改了一个或多个文件；
文件系统接收更改并通知 webpack；
webpack 重新编译构建一个或多个模块，并通知 HMR 服务器进行更新；
HMR Server 使用 webSocket 通知 HMR runtime 需要更新，HMR 运行时通过 HTTP 请求更新 jsonp
HMR 运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新
http://interview.poetries.top/excellent-docs/9-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E6%A8%A1%E5%9D%97.html
#_2-webpack%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86

一个最简单的 plugin 是这样的:
class Plugin{
  // 注册插件时，会调用 apply 方法
  // apply 方法接收 compiler 对象
  // 通过 compiler 上提供的 Api，可以对事件进行监听，执行相应的操作
  apply(compiler){
    // compilation 是监听每次编译循环
    // 每次文件变化，都会生成新的 compilation 对象并触发该事件
    compiler.plugin('compilation',function(compilation) {})
  }
}
//================================================================
function myPromise(constructor) {
  let self = this;
  self.status = "pending"   // 定义状态改变前的初始状态
  self.value = undefined;   // 定义状态为resolved的时候的状态
  self.reason = undefined;  // 定义状态为rejected的时候的状态
  function resolve(value) {
     if(self.status === "pending") {
        self.value = value;
        self.status = "resolved";
     }
  }
  function reject(reason) {
     if(self.status === "pending") {
        self.reason = reason;
        self.status = "rejected";
     }
  }
  // 捕获构造异常
  try {
     constructor(resolve,reject);
  } catch(e) {
     reject(e);
  }
}

// 添加 then 方法
myPromise.prototype.then = function(onFullfilled,onRejected) {
  let self = this;
  switch(self.status) {
     case "resolved":
       onFullfilled(self.value);
       break;
     case "rejected":
       onRejected(self.reason);
       break;
     default:
  }
}

var p = new myPromise(function(resolve,reject) {
   resolve(1)
});
p.then(function(x) {
   console.log(x) // 1
})

//================================================================
Hot Module Replacement（以下简称 HMR）
当你对代码进行修改并保存后，webpack 将对代码重新打包，
并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这
样在不刷新浏览器的前提下就能够对应用进行更新。

基本实现原理大致这样的，构建 bundle 的时候，加入一段 HMR runtime 的 js 和
一段和服务沟通的 js 。文件修改会触发 webpack 重新构建，服务器通过向浏览器发
送更新消息，浏览器通过 jsonp 拉取更新的模块文件，jsonp 回调触发模块热替换逻辑

//================================================================
项目中的 yarn.lock 与 package-lock.json 有什么用，
用以锁定版本号，保证开发环境与生产环境的一致性，避免出现不兼容 API 导致生产环境报错

//================================================================
移动端适配rem/vw,vh原理(详细)
https://juejin.cn/post/6981800084686143518

订阅发布模式和观察者模式的区别 https://www.cnblogs.com/onepixel/p/10806891.html
订阅发布模式需要三种角色，发布者、事件中心和订阅者。二观察者模式需要两种角色，目标和观察者，无事件中心负责通信。
订阅-发布模式
class PubSub {
   constructor() {
      this.subscribers = [];
   }
   subscribe(topic, callback) {
      let callbacks = this.subscribers[topic];
      if (!callbacks) {
         this.subscribers[topic] = [callback];
      } else {
         callbacks.push(callback);
      }
   }
   publish(topic, ...args) {
      let callbacks = this.subscribers[topic] || [];
      callbacks.forEach(callback => callback(...args));
   }
}
// 创建事件调度中心，为订阅者和发布者提供调度服务
let pubSub = new PubSub();
// A订阅了SMS事件（A只关注SMS本身，而不关心谁发布这个事件）
pubSub.subscribe('SMS', console.log);
// B订阅了SMS事件
pubSub.subscribe('SMS', console.log);
// C发布了SMS事件（C只关注SMS本身，不关心谁订阅了这个事件）
pubSub.publish('SMS', 'I published `SMS` event');

观察者模式
class Subject {
   constructor() {
       this.observers = [];   
   }
   add(observer) {
       this.observers.push(observer);
   }
   notify(...args) {
       this.observers.forEach(observer => observer.update(...args));
   }
}
class Observer {
   update(...args) {
      console.log(...args);
   }
}
// 创建观察者ob1
let ob1 = new Observer();
// 创建观察者ob2
let ob2 = new Observer();
// 创建目标sub
let sub = new Subject();
// 目标sub添加观察者ob1 （目标和观察者建立了依赖关系）
sub.add(ob1);
// 目标sub添加观察者ob2
sub.add(ob2);
// 目标sub触发SMS事件（目标主动通知观察者）
sub.notify('I fired `SMS` event');  


//============================================================================
web worker可以用在什么场景中
在worker线程中你可以运行任何你喜欢的代码，不过有一些例外情况。比如：在worker内，不能直接操作DOM节点，
也不能使用window对象的默认方法和属性。
Web Worker 是脱离在主线程之外的，将一些复杂的耗时的活交给它干完成后通过 postMessage 方法告诉
主线程。Web worker是一个独立的运行环境，不能操作DOM和BOM。
window.postMessage这个方法可以实现跨域：就是将该窗口的访问数据传递到另一个窗口。
两个窗口中localstorage存储的数据不能相互访问。
链接：https://juejin.cn/post/7026701472322551815

//=================================================================
单例模式
class Person {
  constructor(name) {
    this.name = name;
    this.p = null
  }
  static instance(name) {
    if (!this.p) {
      this.p = new Person(name)
    }
    return this.p
  }
}
//=================================================================
7.聊聊 redux-thunk 是如何实现异步 action 的？
在 redux-thunk 中会判断 action 的类型，
如果 action 的类型为函数，则执行 该 action 函数，并且将 dispatch 作为参数，将自身的
dispatch 操作延迟 到 action 函数中执行，由 action 函数决定何时（可能是异步操作后）执 行
dispatch.

//================================================================
9.介绍下 webpack 热更新原理，是如何做到 在不刷新浏览器的前提下更新页面的
1).当修改了一个或多个文件；
2).文件系统接收更改并通知 webpack；
3).webpack 重新编译构建一个或多个模块，并通知HMR （ Hot Module Replacement）
服务器进行更新；
4).HMR Server 使用 Websocket 通知 HMR runtime 需要更新，HMR runtime 通过 HTTP 请求更新
jsonp；
5).HMR runtime 替换更新中的模块，如果确定这些模块无法更新，则触发整 个页面刷新；

//================================================================
git fetch和git pull的区别
git pull：相当于是从远程获取最新版本并merge到本地
git fetch：相当于是从远程获取最新版本到本地，不会自动merge

//================================================================
伪类和伪元素的区别
伪类表状态
伪元素是真的有元素
前者单冒号，后者双冒号

//=================================================================
base64的使用
用于减少 HTTP 请求
适用于小图片
base64的体积约为原图的4/3

硬件加速是指通过创建独立的复合图层，让GPU来渲染这个图层，从而提高性能，
一般触发硬件加速的CSS属性有transform、opacity、filter，为了避免2D动画在
开始和结束的时候的repaint操作，一般使用tranform:translateZ(0)

//================================================================
如何实现小于12px的字体效果
transform:scale()这个属性只可以缩放可以定义宽高的元素，而行内元素是没有宽高的，
我们可以加上一个display:inline-block;
transform: scale(0.7);
css的属性，可以缩放大小

//================================================================
line-height 三种赋值方式有何区别？（带单位、纯数字、百分比）
带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
百分比：将计算后的值传递给后代

//================================================================
webSocket
由于 http 存在一个明显的弊端（消息只能有客户端推送到服务器端，而服务器端不能主动推送到客户端），
导致如果服务器如果有连续的变化，这时只能使用轮询，而轮询效率过低，并不适合。于是 WebSocket被发明出来
相比与 http 具有以下有点
支持双向通信，实时性更强；
可以发送文本，也可以二进制文件；
协议标识符是 ws，加密后是 wss ；
较少的控制开销。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有2~10字节（取决于数据包长度），
  客户端到服务端的的话，需要加上额外的4字节的掩码。而HTTP协议每次通信都需要携带完整的头部；
支持扩展。ws协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）
无跨域问题。
实现比较简单，服务端库如 socket.io、ws，可以很好的帮助我们入门。而客户端也只需要参照 api 实现即可

//================================================================
Array.slice() 与 Array.splice() 的区别？
slice
“读取”数组指定的元素，不会对原数组进行修改

  语法：arr.slice(start, end)
  start 指定选取开始位置（含）
  end 指定选取结束位置（不含）
  splice

“操作”数组指定的元素，会修改原数组，返回被删除的元素
  语法：arr.splice(index, count, [insert Elements])
  index 是操作的起始位置
  count = 0 插入元素，count > 0 删除元素
  [insert Elements] 向数组新插入的元素

//================================================================
标记清除
先所有都加上标记，再把环境中引用到的变量去除标记。剩下的就是没用的了

引用计数
跟踪记录每 个值被引用的次数。清除引用次数为0的变量 ⚠️会有循环引用问题 。循环引用如果大量存
在就会导致内存泄露。

改变自身的方法
//================================================================
基于 ES6，会改变自身值的方法一共有 9 个，分别为
pop、push、reverse、shift、sort、splice、unshift，以及两个 ES6
新增的方法 copyWithin 和 fill

不改变自身的方法
基于 ES7，不会改变自身的方法也有 9 个，分别为
concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf、
未形成标准的 toSource，以及 ES7 新增的方法 includes。

数组遍历的方法

基于 ES6，不会改变自身的遍历方法一共有 12 个，分别为
forEach、every、some、filter、map、reduce、reduceRight，以及 ES6
新增的方法 entries、find、findIndex、keys、values

//===============================================================
axios特点
基于promise的异步ajax请求库
浏览器端/node端都可以使用
支持请求/响应拦截器
支持请求取消
请求/响应数据转换
批量发送多个请求

Dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，
dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。

Egg.js是阿里旗下的一个基于nodejs和koa2的企业级应用框架，基于es6，es7 和nodejs。

//================================================================
当 setState 返回一样的引用时，render会执行吗 // 会

Proxy的优势如下:

Proxy可以直接监听对象而非属性
Proxy可以直接监听数组的变化
Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的
Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改
Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

//================================================================
原型: 对象中固有的__proto__属性，该属性指向对象的prototype原型属性。
原型链: 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有
自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是Object.prototype所以这就是我们新建的对象为什么能够使
用toString()等方法的原因。

原生ajax
ajax是一种异步通信的方法,从服务端获取数据,达到局部刷新页面的效果。
过程：
创建XMLHttpRequest对象;
调用open方法传入三个参数 请求方式(GET/POST)、url、同步异步(true/false);
监听onreadystatechange事件，当readystate等于4时返回responseText;
调用send方法传递参数。

//================================================================
vuex 和 redux 之间的区别？
从实现原理上来说，最大的区别是两点：
Redux使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改
Redux在检测数据变化的时候，是通过diff的方式比较差异的，而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的(如果看Vuex源码会知道，其实他
内部直接创建一个Vue实例用来跟踪数据变化)

`MySQL`是传统的关系型数据库，`MongoDB`则是非关系型数据库    