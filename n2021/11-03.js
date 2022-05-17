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