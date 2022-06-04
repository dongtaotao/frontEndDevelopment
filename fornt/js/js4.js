//================================================================
0.1+0.2为什么不等于0.3？ 
0.1和0.2在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，
此时就已经出现了精度的损失，相加后因浮点数小数位的限制而截断的二进制数字在转换为十进制就会变成
0.30000000000000004。
//================================================================
6.什么是BigInt?
BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。
这种数据类型允许我们安全地对 大整数 执行算术操作，表示高分辨率的时间戳，
使用大整数id，等等，而不需要使用库。 

7.为什么需要BigInt?
在JS中，所有的数字都以双精度64位浮点格式表示，那这会带来什么问题呢？
这导致JS中的Number无法精确表示非常大的整数，它会将非常大的整数四舍五入，确切地说，JS中的
Number类型只能安全地表示-9007199254740991(-(2^53-1))和9007199254740991（(2^53-1)），
任何超出此范围的整数值都可能失去精度。
console.log(999999999999999); //=>10000000000000000
复制代码
同时也会有一定的安全性问题:
9007199254740992 === 9007199254740993; // → true 居然是true!
复制代码
8.如何创建并使用BigInt？
要创建BigInt，只需要在数字末尾追加n即可
console.log( 9007199254740995n ); // → 9007199254740995n
console.log( 9007199254740995 ); // → 9007199254740996
复制代码
另一种创建BigInt的方法是用BigInt()构造函数
BigInt("9007199254740995"); // → 9007199254740995n
复制代码
简单使用如下:
10n + 20n; // → 30n
10n - 20n; // → -10n
+10n; // → TypeError: Cannot convert a BigInt value to a number
-10n; // → -10n
10n * 20n; // → 200n
20n / 10n; // → 2n
23n % 10n; // → 3n
10n ** 3n; // → 1000n
const x = 10n;
++x; // → 11n
--x; // → 9n
console.log(typeof x); //"bigint"
链接：https://juejin.cn/post/6981440373163819016
//================================================================
15.如何让if(a == 1 && a == 2)条件成立？
var a = {
    value: 0,
    valueOf: function() {
      this.value++;
      return this.value;
   }
};
console.log(a == 1 && a == 2);//true
//================================================================
柯里化有什么作用
主要有3个作用： 参数复用、提前返回和 延迟执行
const curry = (fn, ...args) =>
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));

//================================================================
2.创建一个新的空对象 obj
将新对象的的原型指向当前函数的原型
新创建的对象绑定到当前this上
如果没有返回其他对象，就返回 obj，否则返回其他对象
function _new(constructor, ...arg) {
    // ① 创建一个新的空对象 obj
    const obj = {};
    // ② 将新对象的的原型指向当前函数的原型
    obj.__proto__ = constructor.prototype;
    // ③ 新创建的对象绑定到当前this上
    const result = constructor.apply(obj, arg); 
    // ④ 如果没有返回其他对象，就返回 obj，否则返回其他对象
    return typeof result === 'object' ? result : obj;
}
function Foo(name) {
    this.name = name;
}
var luckyStar = _new(Foo, 'luckyStar');
luckyStar.name; //luckyStar

//================================================================
requestAnimationFrame
requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，
主要用途是按帧对网页进行重绘。
requestAnimationFrame会在每次屏幕刷新的时候被调用，
而requestIdleCallback则会在每次屏幕刷新时，
判断当前帧是否还有多余的时间，如果有，则会调用requestIdleCallback的回调函数，
react 的 fiber 架构也是基于 requestIdleCallback 实现的,
并且在不支持的浏览器中提供了 polyfill

总结
从单线程模型和任务队列出发理解 setTimeout(fn, 0)，并不是立即执行。
JS 动画, 用requestAnimationFrame 会比 setInterval 效果更好
requestIdleCallback()常用来切割长任务，利用空闲时间执行，避免主线程长时间阻塞。
//================================================================

总结
for...of可以用来遍历所有具有iterator 接口的数据结构。
（一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口）。
也就是说 for...of循环内部调用是数据结构的 Symbol.iterator
iterator的实现思想来源于 单向链表
forEach循环中无法用break命令或return命令终止。而for...of可以。
for...in遍历数组遍历的是键名，所有适合遍历对象，for...of遍历数组遍历的是键值。

总结
Generator(生成器) 函数 是ES6的一个新的函数类型，它并不像普通函数那样总是运行到结束。
Generator(生成器) 函数可以在运行当中暂停，并且将来再从暂定的地方恢复运行
可以暂停执行（yield）和恢复执行(next)是Generator 函数能封装异步任务的根本原因。
函数体内外的数据交换(next返回值的value，是向外输出数据，next方法的参数，是向内输
入数据)和错误处理机制(Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。)
是它可以成为异步编程的完整解决方案。

Generator 就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，
能够自动交回执行权。所以需要自动化异步任务的流程管理。Thunk 函数是自动执行 
Generator 函数的一种方法。co模块也是用于 Generator 函数的自行执行。
function *helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

const hw = helloWorldGenerator();
hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }
https://wangyaxing.cn/blog/interview/JavaScript/async%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.html#%E4%BD%BF%E7
%94%A8-async-%E5%AE%9E%E7%8E%B0-promise-all-%E7%9A%84%E6%95%88%E6%9E%9C

#总结
async 函数原理就是 Generator函数 和 自动执行器包装了一下。
Generator就是可以暂定执行和在之前停下的位置接着执行。比如发送一个接口请求，
发出之后，JS可以去干其他的事儿，接口请求回来之后（数据通过next传入），
会接着继续执行。但是它不能自动执行，所以需要自动执行器， thunk函数和co模块都是，
但是async给我们封装得更加完美。

mobx响应式状态库
//================================================================
总结
class是一个语法糖，其底层还是通过 构造函数 去创建的。
类的所有方法都定义在类的prototype属性上面。
静态方法：在方法前加static，表示该方法不会被实例继承，而是直接通过类来调用。
静态属性：在属性前加static，指的是 Class 本身的属性，而不是定义在实例对象（this）上的属性。
ES6的继承和ES5的继承区别在于：
ES5的继承，实质是先创建了子类的实例对象 this, 然后再将 父类的方法添加到 this上面
ES6的继承是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），
然后再用子类的构造函数修改 this。
super
作为函数调用，代表父类的构造函数
作为对象调用，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。‘

js继承
https://wangyaxing.cn/blog/interview/JavaScript/JavaScript%E7%9A%84%E5%87%A0%E7%A7%8D%E7%BB%A7%E6%8
9%BF%E6%96%B9%E5%BC%8F.html#_7-es6-%E4%B8%ADclass%E7%9A%84%E7%BB%A7%E6%89%BF

//================================================================
总结
Proxy是用来操作对象的，Object.defineProperty() 是用来操作对象的属性的。
vue2.x使用 Object.defineProperty()实现数据的响应式，
但是由于 Object.defineProperty()是对对象属性的操作，
所以需要对对象进行深度遍历去对属性进行操作。
vue3.0 用 Proxy 是对对象进行拦截操作，无论是对对象做什么样的操作都会走到
Proxy 的处理逻辑中
vue3.0、dobjs/dob、immer等库目前都使用到了 Proxy，对对象进行读写拦截，
做一些额外的处理。

对比React生命周期
https://wangyaxing.cn/blog/interview/React/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BB%8B%E7%BB%8
D.html#%E5%AF%B9%E6%AF%94react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F

HTTP1.x、HTTP2、HTTP3
https://wangyaxing.cn/blog/interview/HTTP/HTTP1.x%E3%80%81HTTP2%E3%80%81HTTP3.html

//=================================================================
webpack构建完整过程
初始化：启动构建，读取与合并配置参数， 加载Plugin, 实例化 Compiler
编译：从Entry发出，针对每个Module串行调用对应的Loader去翻译文件内容，
  再找到该Module依赖的Module, 递归地进行编译处理。
输出：对编译后的Module组合成Chunk, 把Chunk转换成文件，输出到本地。

2. Generator了解
ES6 提供的一种异步编程解决方案, Generator 函数是一个状态机，封装了多个内部状态。
function* helloWorldGenerator() { 
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
调用后返回指向内部状态的指针, 调用next()才会移向下一个状态, 参数:
hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }

11. async和await：
Generator函数的语法糖，将*改成async，将yield换成await。
是对Generator函数的改进, 返回promise。
异步写法同步化，遇到await先返回，执行完异步再执行接下来的.
内置执行器, 无需next()
//================================================================
jsonp
function jsonp ({url, param, callback}) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script')
    window.callback = function (data) {
      resolve(data)
      document.body.removeChild('script')
    }
    var param = {...param, callback}
    var arr = []
    for (let key in param) {
      arr.push(`${key}=${param[key]}`)
    }
    script.src = `${url}?${arr.join('&')}`
    document.body.appendChild(script)
  })
}
//================================================================
for in 和 for of区别
for in遍历数组会遍历到数组原型上的属性和方法, 更适合遍历对象
forEach不支持break, continue, return等
使用for of可以成功遍历数组的值, 而不是索引, 不会遍历原型
for in 可以遍历到myObject的原型方法method,如果不想遍历原型方法和属性的话，
可以在循环内部判断一下,hasOwnPropery方法可以判断某属性是否是该对象的实例属性

13.http多路复用
Keep-Alive: Keep-Alive解决的核心问题：一定时间内，同一域名多次请求数据，
只建立一次HTTP请求，其他请求可复用每一次建立的连接通道，以达到提高请求效率的问题。
这里面所说的一定时间是可以配置的，不管你用的是Apache还是nginx。
解决两个问题: 串行文件传输(采用二进制数据帧); 连接数过多(采用流, 并行传输)
//================================================================
22. 关于预检请求
在非简单请求且跨域的情况下，浏览器会自动发起options预检请求。

TCP（Transmission Control Protocol：传输控制协议；面向连接，可靠传输
UDP（User Datagram Protocol）：用户数据报协议；面向无连接，不可靠传输
//================================================================
react和vue的区别
数据是否可变:
  react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，
  所以在react中，是单向数据流，推崇结合immutable来实现数据不可变;
  vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，
  响应式的更新对应的虚拟dom。
总之，react的性能优化需要手动去做，而vue的性能优化是自动的，
但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，
会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。

通过js来操作一切，还是用各自的处理方式:
react的思路是all in js，通过js来生成html，所以设计了jsx，还有通过js来操作css，
社区的styled-component、jss等; vue是把html，css，js组合到一起，
用各自的处理方式，vue有单文件组件，可以把html、css、js写到一个文件中，html提供了模板引擎来处理。

类式的组件写法，还是声明式的写法: react是类式的写法，api很少;
而vue是声明式的写法，通过传入各种options，api和参数都很多。所以react结合typescript更容易一起写，vue稍微复杂。

扩展不同: react可以通过高阶组件（Higher Order Components--HOC）来扩展，而vue需要通过mixins来扩展
什么功能内置，什么交给社区去做: react做的事情很少，
很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些，
比如 redux的combineReducer就对应vuex的modules，
比如reselect就对应vuex的getter和vue组件的computed，
vuex的mutation是直接改变的原始数据，

//================================================================
babel和polyfill
Babel: Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码。
注意：Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API
Polyfill: Polyfill的准确意思为，用于实现浏览器并不支持的原生API的代码。

//================================================================
1.JSBridge通信原理, 有哪几种实现的方式？
JsBridge给JavaScript提供了调用Native功能，Native也能够操控JavaScript。
这样前端部分就可以方便使用地理位置、摄像头以及登录支付等Native能力啦。
JSBridge构建 Native和非Native间消息通信的通道，而且是 双向通信的通道。
JS 向 Native 发送消息 : 调用相关功能、通知 Native 当前 JS 的相关状态等。
Native 向 JS 发送消息 : 回溯调用结果、消息推送、通知 JS 当前 Native 的状态等。

2.实现一个简单的 JSBridge，设计思路？
JavaScript 调用 Native 的方式，主要有两种：
注入 API
拦截 URL SCHEME

在H5中JavaScript调用Native的方式主要用两种
1.注入API，注入Native对象或方法到JavaScript的window对象中（可以类比于RPC调用）。
2.拦截URL Schema，客户端拦截WebView的请求并做相应的操作（可以类比于JSONP）。
https://baijiahao.baidu.com/s?id=1653681342519106149&wfr=spider&for=pc
https://segmentfault.com/a/1190000021818496?utm_source=tag-newest

1.6 onRef
原理:onRef 通讯原理就是通过 props 的事件机制将组件的
this(组件实例)当做参数传到父组件,父组件就可以操作子组件的 state 和方法

24.ReactDOM.createPortal
作用:组件的render函数返回的元素会被挂载在它的父级组件上,createPortal
提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案

25.在 React 使用innerHTML
场景:有些后台返回是 html 格式字段,就需要用到 innerHTML 属性

//================================================================
JsBridge给
JavaScript提供了调用Native功能，Native也能够操控JavaScript。
这样前端部分就可以方便使用地理位置、摄像头以及登录支付等Native能力啦。JSBridge构建
H5 和 Native 的双向通信通用方法
      H5通信方式和兼容性如下表所示。指的是借助 Native 的 webview
      加载H5页面，H5 和 Native 之间通过注入API、URL拦截、全局调用等形式，
      实现消息通信。站在大厂的角度考虑，在实战的时候，会选择更兼容的方式。
//================================================================
闭包的概念？优缺点？
闭包的概念：闭包就是能读取其他函数内部变量的函数。
优点：
避免全局变量的污染
希望一个变量长期存储在内存中（缓存变量）
缺点：
内存泄露（消耗）
常驻内存，增加内存使用量
在退出函数之前，将不使用的局部变量赋值为null;
这段代码会导致内存泄露
window.onload = function(){
    var el = document.getElementById("id");
    el.onclick = function(){
        alert(el.id);
    }
}
解决方法为
window.onload = function(){
    var el = document.getElementById("id");
    var id = el.id;                                      //解除循环引用
    el.onclick = function(){
        alert(id); 
    }
    el = null;                                          // 将闭包引用的外部函数中活动对象清除
}

//================================================================
ES6 的 class 和构造函数的区别
class 的写法只是语法糖，和之前 prototype 差不多，但还是有细微差别的，下面看看：
1. 严格模式
类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。
只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。
2. 不存在提升
类不存在变量提升（hoist），这一点与 ES5 完全不同。
复制
new Foo(); // ReferenceError
class Foo {}
3. 方法默认是不可枚举的
ES6 中的 class，它的方法（包括静态方法和实例方法）默认是不可枚举的，
而构造函数默认是可枚举的。细想一下，这其实是个优化，让你在遍历时候，不需要再判断 hasOwnProperty 了
4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，
所以也没有[[construct]]，不能使用 new 来调用。
5. class 必须使用 new 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。
6. ES5 和 ES6 子类 this 生成顺序不同
ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例。ES6 的继承先 生成父类实例，
再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。
7. ES6可以继承静态方法，而构造函数不能

//================================================================
介绍一下rAF(requestAnimationFrame)
      专门用来做动画，不卡顿，用法和setTimeout一样。对 rAF 的阐述 MDN 资料
  定时器一直是 js 动画的核心技术，但它们不够精准，因为定时器时间参数是指将执行代码放入
  UI 线程队列中等待的时间，如果前面有其他任务队列执行时间过长，则会导致动画延迟，
  效果不精确等问题。
  所以处理动画循环的关键是知道延迟多长时间合适：时间要足够短，
  才能让动画看起来比较柔滑平顺，避免多余性能损耗；时间要足够长
  ，才能让浏览器准备好变化渲染。这个时候 rAF 就出现了，
  采用系统时间间隔(大多浏览器刷新频率是 60Hz，相当于 1000ms/60≈16.6ms)，
  保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；
  也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统
  一的刷新机制。并且 rAF 会把每一帧中的所有 DOM 操作集中起来，
  在一次重绘或回流中就完成。

详情：CSS3动画那么强，requestAnimationFrame还有毛线用？

//================================================================
// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
class Promise {
  constructor (fn) {
    // 三个状态
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
      }
    }
    let reject = value => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = value
      }
    }
    // 自动执行函数
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  // then
  then(onFulfilled, onRejected) {
    switch (this.state) {
      case 'fulfilled':
        onFulfilled(this.value)
        break
      case 'rejected':
        onRejected(this.reason)
        break
      default:
    }
  }
}

//================================================================
Object.create 的基本实现原理
复制
// 思路：将传入的对象作为原型
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

//================================================================
https://www.cnblogs.com/chenwenhao/p/11294541.html
实现一个双向数据绑定
复制
let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
  },
  set(newVal) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  }
})
// 输入监听
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})

//================================================================
useCallback 知识点合集
1.useMemo 与 useCallback 类似，都是有着缓存的作用。本质的区别可能就是：
useMemo 是缓存值的
useCallback 是缓存函数的

const onChange = useCallback((e)=>{
  setText(e.target.value)
},[])
//================================================================
JSONP 使用简单且兼容性不错，但是只限于 get 请求。
在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP，
以下是简单实现

function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx', 'callback', function(value) {
  console.log(value)
})

//================================================================
8 说一下 web worker
在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，
页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面你
的性能。并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就
不会阻塞主线程了
如何创建 web worker:
检测浏览器对于 web worker 的支持性
创建 web worker 文件(js，回传函数等)
创建 web worker 对象
//================================================================
12 flex
#使用过flex布局吗？flex-grow和flex-shrink属性有什么用？
flex-grow：项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-shrink：项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

//================================================================
1.6 如何理解BigInt
https://blog.poetries.top/FE-Interview-Questions/excellent-docs/3-JS%E6%A8%A1%E5%9D%97.html#_1
-4-1-tostring-%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%B0%83%E7%94%A8
什么是BigInt?
BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。
这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，
使用大整数id，等等，而不需要使用库。

object.is()
Object.is()是在ES6中定义的一个新方法， 判断值和类型是否相等，它与‘===’相比，
特别针对-0、+0、NaN 做了处理。更加符合我们的预期

当两边值的类型相同时，直接比较值，
若类型不相同，直接返回false；
Object.is(NaN, NaN) //返回true
Object.is(-0, +0)//返回false
原文链接：https://blog.csdn.net/qq_45335128/article/details/104165345

//================================================================
34 说一下requestAnimationFrame
简介：
显示器都有自己固有的刷新频率(60HZ或者75HZ)，也就是说每秒最多重绘60次或者75次。
而requestAnimationFrame的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行重绘。
特点：
使用这个API时，一旦页面不处于浏览器的当前标签，就会自动停止刷新，这样就节省了CPU、GPU、电力。
由于它时在主线程上完成的，所以若是主线程非常忙时它的动画也会收到影响
它使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
使用：

正常使用：
const requestID = window.requestAnimationFrame(callback);
https://blog.poetries.top/FE-Interview-Questions/excellent-docs/3-JS%E6%A8%A1%E5%9D%97.html#_34
-%E8%AF%B4%E4%B8%80%E4%B8%8Brequestanimationframe
//================================================================
35 requestAnimationFrame对比setTimeout
**屏幕刷新频率：**屏幕每秒出现图像的次数。普通笔记本为60Hz
**动画原理：**计算机每16.7ms刷新一次，由于人眼的视觉停留，所以看起来是流畅的移动。
**setTimeout：**通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿抖动的现象；
原因是：
settimeout任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，
因此实际执行时间总是比设定时间要晚；
settimeout的固定时间间隔不一定与屏幕刷新时间相同，会引起丢帧。
**requestAnimationFrame：**优势：由系统决定回调函数的执行时机。60Hz的刷新频率，
那么每次刷新的间隔中会执行一次
回调函数，不会引起丢帧，不会卡顿。且由于一旦页面不处于浏览器的当前标签，就会自动停止刷新，
这样就节省了CPU、GPU、电力。

//================================================================
symbol 有什么用处
可以用来表示一个独一无二的变量防止命名冲突
1 ES5 / ES6 的继承除了写法以外还有什么区别
ES5 的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到 this 上（Parent.apply(this)）
ES6 的继承机制完全不同，实质上是先创建父类的实例对象 this（所以必须先调用父类的 super()方法），
然后再用子类的构造函数修改 this。
ES5 的继承时通过原型或构造函数机制来实现。
ES6 通过 class 关键字定义类，里面有构造方法，类之间通过 extends 关键字实现继承。
子类必须在 constructor 方法中调用 super 方法，否则新建实例报错。
因为子类没有自己的 this 对象，而是继承了父类的 this 对象，然后对其进行加工。
如果不调用 super 方法，子类得不到 this 对象。
注意 super 关键字指代父类的实例，即父类的 this 对象。
注意：在子类构造函数中，调用 super 后，才可使用 this 关键字，否则报错。
function 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量

//================================================================
7.3 requestAnimationFrame用法
https://blog.poetries.top/FE-Interview-Questions/excellent-docs/5-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A8%A1%E5%9D%97.html
#_7-2-service-worker

//================================================================
88. 合并两个有序数组
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，
分别表示 nums1 和 nums2 中的元素数目。
请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中
前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
示例 1：
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
var merge = function (nums1, m, nums2, n) {
  // 从m位开始裁剪n个元素后，并将nums2的元素加入进去 
  nums1.splice(m, n, ...nums2)
  // 重排nums1
  nums1.sort((a, b) => a - b);
};

//================================================================
15、diff算法?
把树形结构按照层级分解，只比较同级元素。
给列表结构的每个单元添加唯一的key属性，方便比较。
React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）
合并操作，调用 component 的 setState 方法的时候, React 将其标记为 - dirty.
到每一个事件循环结束,
React 检查所有标记 dirty的 component重新绘制.
选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能

//=================================================================
let createStore = (reducer) => {
    let state;
    //获取状态对象
    //存放所有的监听函数
    let listeners = [];
    let getState = () => state;
    //提供一个方法供外部调用派发action
    let dispath = (action) => {
        //调用管理员reducer得到新的state
        state = reducer(state, action);
        //执行所有的监听函数
        listeners.forEach((l) => l())
    }
    //订阅状态变化事件，当状态改变发生之后执行监听函数
    let subscribe = (listener) => {
      listeners.push(listener);
    }
    dispath();
    return {
      getState,
      dispath,
      subscribe
    }
}
let combineReducers=(renducers)=>{
  //传入一个renducers管理组，返回的是一个renducer
  return function(state={},action={}){
    let newState={};
    for(var attr in renducers){
        newState[attr]=renducers[attr](state[attr],action)

    }
    return newState;
  }
}
export {createStore,combineReducers};
//================================================================
react和vue的区别
相同点：
数据驱动页面，提供响应式的试图组件
都有virtual DOM,组件化的开发，通过props参数进行父子之间组件传递数据，都实现了webComponents规范
数据流动单向，都支持服务器的渲染SSR
都有支持native的方法，react有React native， vue有wexx
不同点：
数据绑定：Vue实现了双向的数据绑定，react数据流动是单向的
数据渲染：大规模的数据渲染，react更快
使用场景：React配合Redux架构适合大规模多人协作复杂项目，Vue适合小快的项目
开发风格：react推荐做法jsx + inline style把html和css都写在js了

//================================================================
tree-shaking的了解
作用：
它表示在打包的时候会去除一些无用的代码
原理：
ES6的模块引入是静态分析的，所以在编译时能正确判断到底加载了哪些模块
分析程序流，判断哪些变量未被使用、引用，进而删除此代码
//================================================================

通过上面的握手过程可知，https在证书验证阶段，使用非对称加密来传输共享秘钥，
之后的传输中都使用对称加密方式。原因是，非对称加密的加解密效率是非常低的，
而http场景中通常端与端之间的交互量很大，
对非对称加密的效率是无法忍受的。另外， HTTPS场景中只有服务端保存了私钥，
一对公私钥只能实现单向加解密过程。因此 HTTPS 中的内容传输采用对称加密
//================================================================
混合加密机制的好处是什么
对称密钥加密和非对称密钥加密都有它们各种的优缺点，
而混合加密机制就是将两者结合利用它们各自
的优点来进行加密传输。
比如既然对称密钥的优点是加解密效率快，那么在客户端与服务端确定了连接之后就可以用它来
进行加密传输。不过前提是得解决双方都能安全的拿到这把对称密钥。这时候就可以里用非对称密钥
加密来传输这把对称密钥，因为我们知道非对称密钥加密的优点就是能保证传输的内容是安全的。
所以它的好处是即保证了对称密钥能在双方之间安全的传输，又能使用对称加密方式进行通信，
这比单纯的使用非对称加密通信快了很多。以此来解决了HTTP中内容可能被窃听的问题。

//================================================================
function myPromise(constructor){
  let self=this;
  self.status="pending" //定义状态改变前的初始状态
  self.value=undefined;//定义状态为resolved的时候的状态
  self.reason=undefined;//定义状态为rejected的时候的状态
  function resolve(value){
      //两个==="pending"，保证了状态的改变是不可逆的
     if(self.status==="pending"){
        self.value=value;
        self.status="resolved";
     }
  }
  function reject(reason){
      //两个==="pending"，保证了状态的改变是不可逆的
     if(self.status==="pending"){
        self.reason=reason;
        self.status="rejected";
     }
  }
  //捕获构造异常
  try{
     constructor(resolve,reject);
  }catch(e){
     reject(e);
  }
}
// 定义链式调用的then方法
myPromise.prototype.then=function(onFullfilled,onRejected){
  let self=this;
  switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:
  }
}
https://blog.poetries.top/FE-Interview-Questions/docs/simply.html#_15-promise

//================================================================
7 介绍一下 webpack scope hosting
作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，
有效减少打包后的代码体积和运行时的内存损耗；
https://blog.poetries.top/FE-Interview-Questions/docs/simply.html#_6-%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-tree-shaking

https://juejin.cn/post/6862181546565369870#heading-53

https://juejin.cn/post/6844903887502082061
//================================================================
JsonP原理
function jsonp({url, params, cb}) { 
  return new Promise((resolve, reject) => {
    window[cb] = function (data) {  // 声明全局变量
       resolve(data)
       document.body.removeChild(script)
     }
     params = {...params, cb}
     let arrs = []
     for(let key in params) {
        arrs.push(`${key}=${params[key]}`)
     }
     let script = document.createElement('script')
     script.src = `${url}?${arrs.join('&')}`
     document.body.appendChild(script)
  })
}

//================================================================
5.3 函数组合
function compose(...args) {
  return function(value) {
      return args.reverse().reduce(function(acc, fn) {
          return fn(acc)
      }, value)
  }
}
// 从右往左
const compose = (...fns) => value => reduce(fns.reverse(), (acc, fn) => fn(acc), value)

// pipe 从左往右
const pipe = (...fns) => value => reduce(fns, (acc, fn) => fn(acc), value)
//================================================================

new：将构造函数实例化，将参数创建为对象以及赋值原型方法
function createNew(Ctor, ...args) {
  const obj = Object.create(Ctor.prototype);
  const ret = Ctur.apply(obj, args);
  return ret instanceof Object ? ret : obj;
}
1. 将构造函数的原型赋值给新建的obj的隐式原型__proto__。
2. 在obj下执行构造函数，并传入参数，
   这个时候构造函数内的this就是obj。
3. 如果这个'构造函数'没有return对象格式的结果，
   返回新创建的obj。

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function() {
  console.log(this.name);
}

const xm = createNew(Person, 'xiaoming', 22);

JavaScript函数式编程指南 https://juejin.cn/post/6844904181040414733

17张思维导图，2021年作为一名前端开发者需要掌握这些，前端面试复习资料参考大纲
https://juejin.cn/post/6905913850709671944#heading-39

函数组合(compose)
function compose(f, g) {
  return function(value) {
      return f(g(value))
  }
}

function reverse(array) {
  return array.reverse()
}

function first(array) {
  return array[0]
}

const last = compose(first, reverse)
console.log(last([1, 2, 3, 4, 5]))

compose函数实现
function compose(...args) {
  return function(value) {
      return args.reverse().reduce(function(acc, fn) {
          return fn(acc)
      }, value)
  }
}

// 从右往左
const compose = (...fns) => value => reduce(fns.reverse(), (acc, fn) => fn(acc), value)

// pipe 从左往右
const pipe = (...fns) => value => reduce(fns, (acc, fn) => fn(acc), value)

https://juejin.cn/post/6944645061581733902
排序，搜索，算法模式，算法复杂度 | 数据结构与算法综合笔记

https://juejin.cn/post/6944863057000529933
「react进阶」一文吃透react-hooks原理

「原题 + 精讲 」7.8 月份新出炉面试题含大厂100道1.2万字整理(一) 
https://juejin.cn/post/6871024909674364942

react-hooks如何使用？
https://juejin.cn/post/6864438643727433741

夯实JavaScript功底，前端要会的手写方法
https://juejin.cn/post/6844903887502082061#heading-22

redux
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => { 
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

Vuex、Flux、Redux、Redux-saga、Dva、MobX
https://zhuanlan.zhihu.com/p/53599723    