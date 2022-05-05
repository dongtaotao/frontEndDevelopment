面试题：渲染十万条数据解决方案
https://juejin.cn/post/7065218958663614500?utm_source=gold_browser_extension
虚拟列表（也叫按需渲染或可视区域渲染）
延迟渲染（即懒渲染）
时间分片

写了 200 多篇文章后，我总结的写作心得 
https://juejin.cn/post/6900682578840256525   绘图工具

15.装饰器模式一般会在什么场合使用？
答： 装饰器模式一般是指允许动态地向一个现有的对象添加新的功能，同时又不改变其结构，相当于对现有的对象进行了一个包装。

什么是 Data URL
Data URL 是将图片转换为 base64 直接嵌入到了网页中，使用<img src="data:[MIME type];base64"/>这种方式引用图片，不需要再发请求获取图片。
使用 Data URL 也有一些缺点：
base64 编码后的图片会比原来的体积大三分之一左右。
Data URL 形式的图片不会缓存下来，每次访问页面都要被下载一次。可以将 Data URL 写入到 CSS 文件中随着 CSS 被缓存下来。x

packagelock.json/yarn.lock 用以锁定版本号，保证开发环境与生产环境的一致性，避免出现不兼容 API 导致生产环境报错
总结
package.json文件：该文件用来保存项目的依赖，并不能指定到某一个具体的依赖。yarn 和 npm 均使用该文件去安装依赖。
package-lock.json 文件：npm 安装项目依赖时记录实际依赖版本信息，下次可以通过该文件去下载依赖，保证项目每次下载的依赖版本完全一致。
yarn.lock 文件：yarn 安装项目依赖时记录实际依赖版本信息，下次可以通过该文件去下载依赖，保证项目每次下载的依赖版本完全一致。

图片防盗链原理是什么
请求头中的 refer 来判断是否屏蔽图片

peerDependency 是为了解决什么问题:避免重复安装

如何处理白屏错误页的监控的？
排查兼容性。大部分原因是因为低端机型/浏览器低版本 polyfill 的问题导致报错
排查网络。js 是否下载成功 cdn 是否生效
做 js 错误上报。分析是否存在代码缺陷
做重试逻辑/诱导用户重试
Error Boundry 避免整页崩溃。限制在组件级别

请简述下 eslint 的作用
eslint，对代码不仅有风格的校验，更有可读性、安全性、健壮性的校验。

Service Worker

Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。
使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全
Service Worker 实现缓存功能一般分为三个步骤：首先需要先注册 Service Worker，然后监听到 install 事件以后就可以缓存需要的文件，
那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。以下是这个步骤的实现：

7.1 Web Worker
现代浏览器为JavaScript创造的 多线程环境。可以新建并将部分任务分配到worker线程并行运行，两个线程可 独立运行，互不干扰，可通过自带的 消息机制 相互通信。

基本用法:
// 创建 worker
const worker = new Worker('work.js');

// 向主进程推送消息
worker.postMessage('Hello World');

// 监听主进程来的消息
worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
}
限制:
同源限制
无法使用 document / window / alert / confirm
无法加载本地资源

如何让if(a == 1 && a == 2)条件成立
var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  }
};
console.log(a == 1 && a == 2);//true

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

4、原型链和作用域链的区别
复制代码
（1）原型链
当访问一个对象的某个属性时，会先在这个对象本身的属性上找，如果没有找到，会去这个属性的__proto__属性上找，即这个构造函数的prototype，如果还没找到，
就会继续在__proto__上查找，
直到最顶层，找不到即为undefined。这样一层一层往上找，彷佛是一条链子串起来，所以叫做原型链。
（2）作用域链
变量取值会到创建这个变量的函数的作用域中取值，如果找不到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。
（3）区别
作用域是对变量而言，原型链是对于对象的属性而言
作用域链的顶层是window，原型链的顶层是Object

依赖版本~和^的区别
（1）~
会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
（2）^
会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0

请实现promise.all
https://juejin.cn/post/7069805387490263047?utm_source=gold_browser_extension

实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。如下 JSX 代码：
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
会编译为：

React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)

Rxjs 是在微软所提供的一种的异步处理数据的方式,在Angular 中处理网络通信时用到了。
创建一个Observable 并subsribe
比如:this.http.get('').subscribe((data)=>{ })

进程：资源分配的最小单位
线程：资源调度的最小单位

为什么说HTTPS比HTTP安全呢
通过混合加密保证传输的数据不被窃听
通过数字签名的方式保证数据不会被篡改
通过数字证书保证服务器身份的真实性

问：什么是时间切片？
答：简单来讲就是将同步任务切成一个一个小片；在保证浏览器不掉帧的情况下去执行这一片一片的任务；
最终达到既能够将这个大任务执行完毕，又能够让浏览器有时间进行绘制；在用户的感知下，就是比较流畅的；
https://juejin.cn/post/7071914394799570975?utm_source=gold_browser_extension

大文件的分片上传、断点续传
https://juejin.cn/post/7071877982574346277?utm_source=gold_browser_extension

Decorator 装饰器
使用@符号,用来扩展，修改类的行为
使用的时候需要引入第三方库 如： core-decorators
 const name = (target) => {
     target.name = "domesy"
 }
 @name
 class Test{}
 
console.log(Test.name) //domesy
链接：https://juejin.cn/post/7068935394191998990

迅速了解ES6~ES12的全部特性
https://juejin.cn/post/7068935394191998990?utm_source=gold_browser_extension

后端一次性给你XX万条数据，除了干一架之外就没别的办法了吗？
1.直接渲染
2.setTimeout分页渲染 - 时间分片
进阶一：使用 requestAnimationFrame
进阶二：使用 DocumentFragment
进阶三：懒加载
使用 IntersectionObserver、getBoundingClientRect 获取滚动时，元素的相对位置
防抖节流，优化滚动、搜索
3.虚拟列表
https://juejin.cn/post/7071979844115890206#heading-0

//========================
手写-将虚拟 Dom 转化为真实 Dom

peerDependencies作用

虚拟dom转为真实dom
将DOM转化成树结构对象

字符串模板
模拟实现一个 Promise.finally
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => {
          callback();
          return value;
     },
    reason => {
        callback();
        throw reason
    }
  );
};

说说你对GraphQL的理解
https://juejin.cn/post/6896810576778166280
GraphQL能够根据页面展示需求请求所需要的数据，不会有冗余的数据，传输效率上会更高

做移动端开发时，你是如何调试的？
使用最多的就是charles和chrome://inspect/#devices进行调试，当然实际开发中还是使用chrome的开发这工具
https://juejin.cn/post/6896810576778166280

前端换肤的N种方案，请收下
https://juejin.cn/post/6844904122643120141
覆盖样式实现
sass变量实现
生成多套皮肤css 

如何渲染几万条数据并不卡住界面 
http://interview.poetries.top/docs/base.html#_66-%E5%A6%82%E4%BD%95%E6%B8%B2%E6%9F%93%E5%87%A0%E4%B8%87%E6%9D%A1%E6%95%B0%E6%8D%AE%E5%B9%B6%E4%B8%8D%E5%8D%A1%E4%BD%8F%E7%95%8C%E9%9D%A2
这道题考察了如何在不卡住页面的情况下渲染数据，也就是说不能一次性将几万条都渲染出来，
而应该一次渲染部分 DOM，那么就可以通过 requestAnimationFrame 来每 16 ms 刷新一次


