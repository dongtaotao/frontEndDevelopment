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