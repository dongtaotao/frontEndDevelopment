****** jsliang 求职系列 - 49 - 2020 求职系列汇总【完结】 
https://juejin.cn/post/6908493793213808647
****** 2万字 | 前端基础拾遗90问 https://juejin.cn/post/6844904116552990727

******* https://juejin.cn/post/6844904181627781128#heading-13
霖呆呆的中大厂面试记录及2年前端薪资对比(附赠学习方法) 

2019 面试系列 - 简历 https://juejin.cn/post/6844903869382656008

****** 面试分享：两年工作经验成功面试阿里P6总结 https://juejin.cn/post/6844903928442667015

https://juejin.cn/post/6844904193619132423 
实现一个pipe函数
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
console.log(res(3)) // 19; addOne(double(square(3)))

const pipe = function (...fns) {
  return function (param) {
    return fns.reduce((pre, fn) => {
      return fn(pre)
    }, param)
  }
}

const pipe = (...fns) => param => fns.reduce((pre, fn) => fn(pre), param)

简单讲解一下http2的多路复用 
https://blog.csdn.net/qq_46299172/article/details/108586142

requestAnimationFrame属于宏任务还是微任务
https://blog.csdn.net/weixin_33874713/article/details/91436408
window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在
下次重绘之前调用指定的回调函数更新动画。
该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
所以，requestAnimationFrame的回调时机也是在当前的tick中，所以不属于宏任务，
但也不是微任务，排在微任务之后。 

function debounce(func, wait) {
  let timeout = null
  return function() {
      let context = this
      let args = arguments
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
          func.apply(context, args)
      }, wait)
  }
}

function throttle(func, wait) {
  var prev = 0;
  return function() {
      let now = Date.now();
      let context = this;
      let args = arguments;
      if (now - prev > wait) {
          func.apply(context, args);
          prev = now;
      }
  }
}

const arr = [1, [1,2], [1,2,3]]
function flat(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flat(cur) : cur)
  }, [])
}

flat(arr)  // [1, 1, 2, 1, 2, 3]

6. HTTP/1.0和HTTP/1.1有什么区别
长连接： HTTP/1.1支持长连接和请求的流水线，在一个TCP连接上可以传
  送多个HTTP请求，避免了因为多次建立TCP连接的时间消耗和延时
缓存处理： HTTP/1.1引入Entity tag，If-Unmodified-Since,
  If-Match, If-None-Match等新的请求头来控制缓存，详见浏览器缓存小节
带宽优化及网络连接的使用： HTTP1.1则在请求头引入了range头域，支持断点续传功能
Host头处理： 在HTTP/1.0中认为每台服务器都有唯一的IP地址，但随
  着虚拟主机技术的发展，多个主机共享一个IP地址愈发普遍，HTTP1.1
  的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会400错误
链接：https://juejin.cn/post/6844904116552990727

7. 介绍一下HTTP/2.0新特性
多路复用： 即多个请求都通过一个TCP连接并发地完成 
服务端推送： 服务端能够主动把资源推送给客户端
新的二进制格式： HTTP/2采用二进制格式传输数据，
  相比于HTTP/1.1的文本格式，二进制格式具有更好的解析性和拓展性
header压缩： HTTP/2压缩消息头，减少了传输数据的大小

8. 说说HTTP/2.0多路复用基本原理以及解决的问题
HTTP/2解决的问题，就是HTTP/1.1存在的问题：

TCP慢启动： TCP连接建立后，会经历一个先慢后快的发送过程，就像汽车启动一般，
如果我们的网页文件(HTML/JS/CSS/icon)都经过一次慢启动，对性能是不小的损耗。
另外慢启动是TCP为了减少网络拥塞的一种策略，我们是没有办法改变的。
多条TCP连接竞争带宽： 如果同时建立多条TCP连接，当带宽不足时就会竞争带宽，
影响关键资源的下载。

HTTP/1.1队头阻塞： 尽管HTTP/1.1长链接可以通过一个TCP连接传输多个请求，
但同一时刻只能处理一个请求，当前请求未结束前，其他请求只能处于阻塞状态。

为了解决以上几个问题，HTTP/2一个域名只使用一个TCP⻓连接来传输数据，
而且请求直接是并行的、非阻塞的，这就是多路复用
实现原理： HTTP/2引入了一个二进制分帧层，客户端和服务端进行传输时，
数据会先经过二进制分帧层处理，转化为一个个带有请求ID的帧，这些帧在传输完成后
根据ID组合成对应的数据。

9. 说说HTTP/3.0
尽管HTTP/2解决了很多1.1的问题，但HTTP/2仍然存在一些缺陷，
这些缺陷并不是来自于HTTP/2协议本身，而是来源于底层的TCP协议，
我们知道TCP链接是可靠的连接，如果出现了丢包，那么整个连接都要等待重传，
HTTP/1.1可以同时使用6个TCP连接，一个阻塞另外五个还能工作，但HTTP/2只
有一个TCP连接，阻塞的问题便被放大了。
由于TCP协议已经被广泛使用，我们很难直接修改TCP协议，基于此，HTTP/3选
择了一个折衷的方法——UDP协议，HTTP/2在UDP的基础上实现多路复用、0-RTT、
TLS加密、流量控制、丢包重传等功能。

观察者模式
//观察者
class Observer {
  constructor (fn) {
    this.update = fn
  }
}
//被观察者
class Subject {
    constructor() {
        this.observers = []          //观察者队列
    }
    addObserver(observer) {
        this.observers.push(observer)//往观察者队列添加观察者
    }
    notify() {                       //通知所有观察者,实际上是把观察者的update()都执行了一遍
        this.observers.forEach(observer => {
            observer.update()            //依次取出观察者,并执行观察者的update方法
        })
    }
}

var subject = new Subject()       //被观察者
const update = () => {console.log('被观察者发出通知')}  //收到广播时要执行的方法
var ob1 = new Observer(update)    //观察者1
var ob2 = new Observer(update)    //观察者2
subject.addObserver(ob1)          //观察者1订阅subject的通知
subject.addObserver(ob2)          //观察者2订阅subject的通知
subject.notify()                  //发出广播,执行所有观察者的update方法

单例模式
单例模式即一个类只能构造出唯一实例，单例模式的意义在于共享、唯一，
Redux/Vuex中的store、JQ的$或者业务场景中的购物车、登录框都是单例模式的应用
class SingletonLogin {
  constructor(name,password){
    this.name = name
    this.password = password
  }
  static getInstance(name,password){
    //判断对象是否已经被创建,若创建则返回旧对象
    if(!this.instance)this.instance = new SingletonLogin(name,password)
    return this.instance
  }
}

let obj1 = SingletonLogin.getInstance('CXK','123')
let obj2 = SingletonLogin.getInstance('CXK','321')

console.log(obj1===obj2)    // true
console.log(obj1)           // {name:CXK,password:123}
console.log(obj2)           // 输出的依然是{name:CXK,password:123}

装饰器模式
装饰器模式，可以理解为对类的一个包装，动态地拓展类的功能， 
ES7的装饰器语法以及React中的高阶组件（HoC）都是这一模式的实现。
react-redux的connect()也运用了装饰器模式，这里以ES7的装饰器为例：
function info(target) {
  target.prototype.name = '张三'
  target.prototype.age = 10
}
@info
class Man {}

let man = new Man()
man.name // 张三

代理模式
const idol = {
  name: '蔡x抻',
  phone: 10086,
  price: 1000000  //报价
}

const agent = new Proxy(idol, {
  get: function(target) {
    //拦截明星电话的请求,只提供经纪人电话
    return '经纪人电话:10010'
  },
  set: function(target, key, value) {
    if(key === 'price' ) {
      //经纪人过滤资质
      if(value < target.price) throw new Error('报价过低')
      target.price = value
    }
  }
})
agent.phone        //经纪人电话:10010
agent.price = 100  //Uncaught Error: 报价过低

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，
就在"任务队列"之中放置一个事件。
（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，
看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
（4）主线程不断重复上面的第三步。
主线程从“任务队列”中读取事件，这个过程是循环不断的，所以称之为事件循环
链接：https://www.jianshu.com/p/7e4e10259579

Function.prototype.myCall = function (obj) {
  obj.fn = this
  let args = [...arguments].splice(1)
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myApply = function (obj) {
  obj.fn = this
  let args = arguments[1]
  let result
  if (args) {
    result = obj.fn(...args)
  } else {
    result = obj.fn()
  }
  delete obj.fn
  return result
}

Function.prototype.myBind = function (obj) {
  let context = obj || window
  let _this = this
  let _args = [...arguments].splice(1)
  return function () {
    let args = arguments
    // 产生副作用
    // return obj.fn(..._args, ...args)
    return _this.apply(context, [..._args, ...args])
  }
}

function myFun (argumentA, argumentB) {
  console.log(this.value)
  console.log(argumentA)
  console.log(argumentB)
  return this.value
}

let obj = {
  value: 'ziyi2'
}
console.log(myFun.myCall(obj, 11, 22))
console.log(myFun.myApply(obj, [11, 22]))
console.log(myFun.myBind(obj, 33)(11, 22))

浏览器DOM渲染及阻塞问题
https://blog.csdn.net/badanjia8818/article/details/101912501/

总结：
1.css加载不会阻塞DOM树的解析 
2.css加载会阻塞DOM树（render树）的渲染
3.css加载会阻塞后面js语句的执行

文件上传的二进制具体是怎么处理的
FileReader图片转成二进制编码
上传文件前 使用FileReader对象读取指定file的文件，并将文件转换为二进制字符串,
并将xhr对象, overrideMimeType 属性设置为text/plain; 
charset=x-user-defined-binary, 最终后台接收到二进制后再做具体处理。
作者：毒行影客
链接：https://www.jianshu.com/p/f6de2b382973

https://juejin.cn/user/3087084380239341/posts  算法

function createStore(reducer) {
  let state;
  let listeners=[];
  function getState() {
      return state;
  }
  function dispatch(action) {
      state=reducer(state,action);
      listeners.forEach(l=>l());
  }
  function subscribe(listener) {
      listeners.push(listener);
      return function () {
          const index=listeners.indexOf(listener);
          listeners.splice(inddx,1);
      }
  }
  dispatch({});
  return {
      getState,
      dispatch,
      subscribe
  }
}

https://juejin.cn/post/6847009771355127822

原型继承
function Parent() {
  this.name = 'parent';
}
function Child() { 
  Parent.call(this);
  this.type = 'children';
}
Child.prototype = Object.create(Parent.prototype);  
Child.prototype.constructor = Child;    
  
