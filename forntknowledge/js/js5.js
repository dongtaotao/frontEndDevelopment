//================================================================
function json(src) { 
  const script = document.createElement('script');  
  script.src = src;
  script.type = 'text/javascript';
  document.body.appendChild(script)
}
addScript("http://xxx.xxx.com/xxx.js?callback=handleRes");
function handleRes(res) {
    console.log('tag', res)
}
// 接口返回的数据格式
handleRes({a: 1, b: 2});

2）JSONP  // https://www.imooc.com/learn/1289   🔥🔥🔥实战
jsonp的原理就是利用<script>标签没有跨域限制，通过<script>标签src属性，
  发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，
  返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。
1）原生JS实现：
{/* <script> */}
    var script = document.createElement('script');
    script.type = 'text/javascript';
    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script);
    // 回调执行函数
    function handleCallback(res) {
       alert(JSON.stringify(res));
    }
 {/* </script> */}
复制代码
服务端返回如下（返回时即执行全局函数）：
handleCallback({"success": true, "user": "admin"})
复制代码
2）Vue axios实现：
this.$http = axios;
this.$http.jsonp('http://www.domain2.com:8080/login', {
    params: {},
    jsonp: 'handleCallback'
}).then((res) => {
    console.log(res); 
})
复制代码
后端node.js代码：
var querystring = require('querystring');
var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
    var params = querystring.parse(req.url.split('?')[1]);
    var fn = params.callback;
    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + JSON.stringify(params) + ')');
    res.end();
});
server.listen('8080');
console.log('Server is running at port 8080...');
复制代码
JSONP的缺点：

具有局限性， 仅支持get方法
不安全，可能会遭受XSS攻击
链接：https://juejin.cn/post/6916157109906341902

//================================================================
const tree = {
	name: 'root',
	children: [
		{
			name: 'c1',
			children: [
				{
						name: 'c11',
					children: []
					},
					{
						name: 'c12',
					children: []
				}
			]
		},
		{
			name: 'c2',
			children: [
				{
						name: 'c21',
					children: []
					},
					{
						name: 'c22',
					children: []
				}
			]
		}
	]
}

// 深度优先的方式遍历 打印 name
// ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']

let arr =[]
const dbs = (res) => {
  arr.push(res.name)
  console.log(res.name);
  res.children && res.children.forEach(element => {
    dbs(element)
  });
  console.log(arr)
}
dbs(tree)

//================================================================
const createStore = (initState) => {
	let state = initState;
	let listeners = [];
	// 订阅函数
	function subscribe(fn) {
		listeners.push(fn)
	}
	function dispatch() {
		for(let i =0; i< listeners.length; i++) {
			listeners[i]()
		}
	}
	function getState() {
		return state;
	}
}

const thunk = ({dispatch, getState}) => (next) => (action) => {
	if(typeof action === 'function') {
		return action(dispatch, getState)
	}
	return next(action)
}
//================================================================
一个例子 - 看尽并手写JS发布订阅模式
// 发布订阅模式  https://www.jianshu.com/p/e0575e17de2a
class EventEmitter {
    constructor() {
        // 事件对象，存放订阅的名字和事件
        this.events = {};
    }
    // 订阅事件的方法
    on(eventName,callback) {
       if (!this.events[eventName]) {
           // 注意时数据，一个名字可以订阅多个事件函数
           this.events[eventName] = [callback]
       } else  {
          // 存在则push到指定数组的尾部保存
           this.events[eventName].push(callback)
       }
    }
    // 触发事件的方法
    emit(eventName) {
        // 遍历执行所有订阅的事件
       this.events[eventName] && this.events[eventName].forEach(cb => cb());
    }
    // 移除订阅事件
    removeListener(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb != callback)
        }
    }
    // 只执行一次订阅的事件，然后移除
    once(eventName,callback) {
        // 绑定的时fn, 执行的时候会触发fn函数
        let fn = () => {
           callback(); // fn函数中调用原有的callback
           this.removeListener(eventName,fn); // 删除fn, 再次执行的时候之后执行一次
        }
        this.on(eventName,fn)
    }
}

//===================================热更新=============================
CodePush简介
  CodePush 是微软提供的一套用于热更新 React Native 和 Cordova 应用的服务。
  CodePush 是提供给 React Native 和 Cordova 开发者直接部署移动应用更新给用户设备的云服务。
  CodePush 作为一个中央仓库，开发者可以推送更新 (JS, HTML, CSS and images)，应用可以从客
  户端 SDK 里面查询更新。CodePush 可以让应用有更多的可确定性，也可以让你直接接触用户群。
  在修复一些小问题和添加新特性的时候，不需要经过二进制打包，可以直接推送代码进行实时更新。

CodePush 可以进行实时的推送代码更新：
直接对用户部署代码更新
管理 Alpha，Beta 和生产环境应用
支持 React Native 和 Cordova
支持JavaScript 文件与图片资源的更新
CodePush开源了react-native版本，react-native-code-push托管在GitHub上。

//==================================================================
SSR 的全称是Server Side Rendering，对应的中文名称是:服务端渲染，
也就是将渲染的工作放在服务端进行。
这种方式很早就存在，早在 Ajax出现之前全部都是这种方式， 由服务端返回给浏览器完整的 html 内容。
SSR 优缺点
这种页面（html）直出的方式可以让页面首屏较快的展现给用户，对搜索引擎比较友好，
爬虫可以方便的找到页面的内容，非常有利于SEO。
不好的地方就是所有页面的加载都需要向服务器请求完整的页面内容和资源，
访问量较大的时候会对服务器造成一定的压力，另外页面之间频繁刷新跳转的体验并不是很友好。

什么是 CSR
与 SSR 对应的就是 CSR，全称是 Client Side Rendering，也就是客户端渲染。
它是目前 Web 应用中主流的渲染模式，一般由 Server 端返回初始 HTML 内容，然后
再由 JS 去异步加载数据，再完成页面的渲染。
客户端渲染模式中最流行的开发模式当属SPA（单页应用），所以后文都会基于SPA进行说明。
这种模式下服务端只会返回一个页面的框架和js 脚本资源，而不会返回具体的数据。

//===================
10 to 2
var _10to2 = (num) => {
    return (num).toString(2);
}
10 to 8
var _10to2 = (num) => {
    return (num).toString(8);
}
10 to 16
var _10to2 = (num) => {
    return (num).toString(16);
}

2to 10
var _2To10 = (num) => {
    parseInt(num, 2)
}
16 to 10
var _2To10 = (num) => {
    parseInt(num, 16)
}

JS中的进制转换 https://www.jb51.net/article/87378.htm
JavaScript的进制转换 https://www.cnblogs.com/danew/p/11531732.html
1 前言
js的进制转换， 分为2进制，8进制，10进制，16进制之间的相互转换， 我们直接利用 对象.toString()即可实现：
运行下面代码

//10进制转为16进制
(10).toString(16) // =>"a"
//8进制转为16进制
(012).toString(16) // =>"a"
//16进制转为10进制
(0x16).toString(10) // =>"22"
//16进制转为8进制
(0x16).toString(8) // =>"26"
//10进制转为2进制 //=>
(1111).toString(2) // => "10001010111"
//8进制转为2进制 //=>
(01111).toString(2) //=>"1001001001"
//16进制转为2进制 //=>
(0x16).toString(2) // => "10110"
如果要处理2进制到10进制，16进制到10进制，8进制到10进制， 需要用了paresInt这个方法：

运行下面代码
//2进制到10进制；
parseInt(10,2) //=>2
//2进制到10进制；
parseInt(100,2) //=>4
//16进制到10进制
parseInt(12, 16) //=>18
//8进制到10进制
parseInt(12,8); //=>10
进制转换
如果要实现进制之间的转换， 可以利用parseInt方法， 先转化为10进制， 然后再利用toString(参数)， 
转化成不同的进制；

//================================================================
requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，
并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然就意味着更少的
CPU、GPU 和内存使用量
requestAnimationFrame 是由浏览器专门为动画提供的 API，在运行时浏览器会自动优化方法的调用，
并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了 CPU 开销

//================================================================
setTimeout实现setInterval功能
function newIntervel() {
    setTimeout(function() {
      console.log(123)
      newIntervel()//调用自身
    }, 1000)
  }
  newIntervel()//控制台每过一秒一直打印 123

  function newInterval(callback, time) {
    setTimeout(function () {
      callback()
      newInterval(callback, time)
    }, time)
  }

//================================================================
[高级]列表优化之虚拟列表
  二、虚拟列表实现原理
虚拟列表（Virtual List），是一种长列表优化方案，是可视区渲染列表。其两个重要的概念：

可滚动区域：假设有1000条数据，每个列表项的高度是30，那么可滚动的区域的高度就是1000*30。
当用户改变列表的滚动条的当前滚动值的时候，会造成可见区域的内容的变更。
可见区域：比如列表的高度是300，右侧有纵向滚动条可以滚动，那么视觉可见的区域就是可见区域。
虚拟列表原理：
用数组保存所有列表元素的位置，只渲染可视区内的列表元素，当可视区滚动时，
根据滚动的offset大小以及所有列表元素的位置，计算在可视区应该渲染哪些元素。
原文链接：https://blog.csdn.net/weixin_39233022/article/details/113949343

//================================================================
虚拟列表其实是按需显示的一种实现，即只对可见区域进行渲染，对非可见区域中的数
据不渲染或部分渲染的技术，从而达到极高的渲染性能。
假设有1万条记录需要同时渲染，我们屏幕的可见区域的高度为500px,而列表项的高
度为50px，则此时我们在屏幕中最多只能看到10个列表项，那么在首次渲染的时候，我们只需加载10条即可。
链接：https://juejin.cn/post/6844903982742110216

//================================================================
六、ES11 新特性（2020）
1. BigInt
在 JavaScript 中，数值类型 Number 是 64 位浮点数**，所以计算精度和表示范围都
有一定限制。ES2020 新增了 BigInt 数据类型，这也是 JavaScript 引入的**第
八种基本类型。BigInt 可以表示任意大的整数。其语法如下：

//================================================================
3. Promise.any
Promise.any是是 ES2021 新增的特性，它接收一个 Promise 
可迭代对象（例如数组），只要其中的一个 promise 成功，就返回那个已经成功的 promise
如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），
就返回一个失败的 promise 和 AggregateError 类型的实例，
它是 Error 的一个子类，用于把单一的错误集合在一起
const promises = [
  Promise.reject('ERROR A'),
  Promise.reject('ERROR B'),
  Promise.resolve('result'),
]

Promise.any(promises).then((value) => {
  console.log('value: ', value)
}).catch((err) => {
  console.log('err: ', err)
})

// 输出结果：value:  result
复制代码
如果所有传入的 promises 都失败：
const promises = [
  Promise.reject('ERROR A'),
  Promise.reject('ERROR B'),
  Promise.reject('ERROR C'),
]

Promise.any(promises).then((value) => {
  console.log('value：', value)
}).catch((err) => {
  console.log('err：', err)
  console.log(err.message)
  console.log(err.name)
  console.log(err.errors)
})
复制代码
输出结果：
err：AggregateError: All promises were rejected
All promises were rejected
AggregateError
["ERROR A", "ERROR B", "ERROR C"]
链接：https://juejin.cn/post/7012412166254886942

「记录优化」我是如何在项目中实现大文件分片上传，暂停续传的
https://juejin.cn/post/6982877680068739085

JavaScript有哪些数据类型，它们的区别？
JavaScript共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。
其中 Symbol 和 BigInt 是ES6 中新增的数据类型：

Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

这些数据可以分为原始数据类型和引用数据类型：
栈：原始数据类型（Undefined、Null、Boolean、Number、String）
堆：引用数据类型（对象、数组和函数）

两种类型的区别在于存储位置的不同：
原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，
该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
链接：https://juejin.cn/post/7026969424812834830

console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false

console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
instanceof只能正确判断引用数据类型，而不能判断基本数据类型

为什么0.1+0.2 ! == 0.3，如何让其相等
(n1 + n2).toFixed(2) // 注意，toFixed为四舍五入

isNaN 和 Number.isNaN 函数的区别？
函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。
函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。
链接：https://juejin.cn/post/7026969424812834830

Object.is() 与比较操作符 “===”、“==” 的区别？
使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。

什么是装饰器?
装饰器是一种函数，目的是用来修改类及其成员。 
https://juejin.cn/post/7020406094904164383

使用过flex布局吗？flex-grow和flex-shrink属性有什么用？
flex-grow：项目的放大比例，默认为0，即如果存在剩余空间，也不放大。flex-shrink：项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

原型链是什么？顾名思义，肯定是一条链，既然每个对象都有一个_proto_属性指向原型对象，那么原型对象也有_proto_指向原型对象的原型对象
直到指向下图中的null，这才到达原型链的顶端。

图片懒加载是怎么实现的？
https://juejin.cn/post/7028362383047278623
4. 实现原理
图片的加载是由src的值引起的，当对src赋值时，浏览器会请求图片资源，基于这个，可以利用html5的属性data-xxx来保存图片的路径，
当我们需要加载图片的时候才将data-xxx的值赋予src,就能实现突破的按需加载，也就是懒加载了。

就是我们先设置图片的data-set属性（当然也可以是其他任意的，只要不会发送http请求就行了，作用就是为了存取值）值为其图片路径，由
于不是src，所以不会发送http请求。 然后我们计算出页面scrollTop的高度和浏览器的高度之和， 如果图片距离页面顶端
的坐标Y（相对于整个页面，而不是浏览器窗口）小于前两者之和，就说明图片就要显示出来了（合适的时机，当然也可以是其他情况），这时候我
们再将 data-set 属性替换为 src 属性即可。
链接：https://juejin.cn/post/7031501435221049374

Class / extends 有什么用
ES6 的 class 可以看作只是一个 ES5生成实例对象的构造函数的语法糖，让对象原型写法更清晰，
Class 类 可以通过 extends 实现继承。
类内部定义的所有方法都是不可枚举的
ES6 的 class类必须用 new 命令操作
ES6 的 class 类不存在变量提升，必须先定义class 之后才能实例化
ES5 的继承，实质是创造子类的实例对象 this，然后在将父类的属性和方法，加到this 上
ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面，（所以必须先调用super 方法），然后在用子类的构造函数修改 this

例举3种强制类型转换和2种隐式类型转换
强制转换：parseInt()、parseFloat()、Number()
隐式转换：==、!!(!!常用于判断非空)

前端监控
前端监控通常包括 行为监控 (PV/UV,埋点接口统计)、 异常监控 、 性能监控 。
一个监控系统，大致可以分为四个阶段： 日志采集 、 日志存储 、 统计与分析 、 报告和警告 。
错误监控
Vue专门的错误警告的方法 Vue.config.errorHandler ,（Vue提供只能捕获其页面生命周期内的函数，比如created,mounted）

Vue.config.errorHandler = function (err) {
  console.error(‘Vue.error’,err.stack)
  // 逻辑处理
};

Node事件循环
Node的 Event Loop: 6个阶段
1.timer 阶段: 执行到期的setTimeout / setInterval队列回调
2.I/O 阶段: 执行上轮循环残流的callback
3.idle, prepare
4.poll: 等待回调
  执行回调
  执行定时器
  如有到期的setTimeout / setInterval， 则返回 timer 阶段
  如有setImmediate，则前往 check 阶段
5.check
  执行setImmediate
6.close callbacks
链接：https://juejin.cn/post/6844903776512393224

//================================================================
js中不同进制怎么转换
10 进制转其他进制：Number(val).toString([2,8,10,16])
其他进制转成10进制：Number.parseInt("1101110",[2,8,10,16])
其他进制互转：先将其他进制转成 10 进制，在把 10 进制转成其他进制 
链接：https://juejin.cn/post/6844904070579240974

观察者模式  发布-订阅模式 的区别   
两者都是订阅-通知的模式，区别在于：
观察者模式：观察者和订阅者是互相知道彼此的，是一个紧耦合的设计
发布-订阅：观察者和订阅者是不知道彼此的，因为他们中间是通过一个订阅中心来交互的，订阅中心存储了多个订阅者，当有新的发布的时候，就会告知订阅者  
      