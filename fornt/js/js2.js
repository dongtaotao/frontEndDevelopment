//================================================================
async/await语法糖就是使用Generator函数+自动执行器来运作的

//================================================================
Number() 的存储空间是多大？如果后台发送了一个超过最大自己的数字怎么办
Math.pow(2, 53) ，53 为有效数字，会发生截断，等于 JS 能支持的最大数字。

// 1. 创建连接
var xhr = null;
xhr = new XMLHttpRequest()
// 2. 连接服务器
xhr.open('get', url, true)
// 3. 发送请求
xhr.send(null);
// 4. 接受请求
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
          success(xhr.responseText);
        } else { // fail
          fail && fail(xhr.status);
        }
    }
}
//================================================================
setTimeout(function fn(){
    console.log('我是setTimeout');
    setTimeout(fn, 1000);
},1000);
//================================================================
requestAnimationFrame对比setTimeout
**屏幕刷新频率：**屏幕每秒出现图像的次数。普通笔记本为60Hz
**动画原理：**计算机每16.7ms刷新一次，由于人眼的视觉停留，所以看起来是流畅的移动。
**setTimeout：**通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿抖动的现象；原因是：
settimeout任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
settimeout的固定时间间隔不一定与屏幕刷新时间相同，会引起丢帧。
**requestAnimationFrame：**优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会
引起丢帧，不会卡顿。且由于一旦页面不处于浏览器的当前标签，就会自动停止刷新，这样就节省了CPU、GPU、电力。

//================================================================
JSONP
JSONP 的原理很简单，就是利用 <script>标签没有跨域限制的漏洞。通过 <script>标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
    function jsonp(data) {
    	console.log(data)
	}
</script>

function jsonp(url, jsonpCallback, success) {
    let script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.type = "text/javascript";
    window[jsonpCallback] = function(data) {
      success && success(data);
    };
    document.body.appendChild(script);
  }
  jsonp(
    "http://xxx",
    "callback",
    function(value) {
      console.log(value);
    }
  );

//================================================================
在JavaScript 中，共有7种基本类型：string，number，bigint，boolean，null，undefined，symbol
undefined：typeof instance === "undefined"
Boolean：typeof instance === "boolean"
Number：typeof instance === "number"
String：typeof instance === "string
BigInt：typeof instance === "bigint"
Symbol ：typeof instance === "symbol"
null：typeof instance === "object"。

//================================================================
ES6 的 class 和构造函数的区别
2. 不存在提升
类不存在变量提升（hoist），这一点与 ES5 完全不同。
new Foo(); // ReferenceError
class Foo {}
3. 方法默认是不可枚举的
ES6 中的 class，它的方法（包括静态方法和实例方法）默认是不可枚举的，而构造函数默认是可枚举的。细想一下，这其实是个优化，让你在
遍历时候，不需要再判断 hasOwnProperty 了
5. class 必须使用 new 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。
6. ES5 和 ES6 子类 this 生成顺序不同
ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例。ES6 的继承先 生成父类实例，再调用子类的构造函数修饰父类实例。这
个差别使得 ES6 可以继承内置对象。

// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
、、、、

继承方法
//===============================================================
https://juejin.cn/post/6997425808465723429
原型链继承
function Parent() {
  this.name = 'ParentName';
  this.actions = ['eat', 'sleep'];
}
function Child() {}
// 我们把 Child 的 prototype 属性设置为 Parent 的一个实例
Child.prototype = new Parent();
Child.prototype.constructor = Child;
// 原型链继承的继承方式都要修改子类构造函数的指向，
// 否则子类实例的构造函数会指向父类构造函数。

let child1 = new Child()
// 从原型链继承了父类的属性
console.log(child1.name) // ParentName
console.log(child1.actions) // [ 'eat', 'sleep' ]
存在的问题
引用类型的属性被所有实例共享
在创建 Child 的实例时，不能向 Parent 传参

构造函数继承

寄生式继承
注 Object.create() 方法创建一个新对象
function createEnhanceObj(obj) {
  // 以 obj 为 新对象的原型
  let clone = Object.create(obj);
  // 增强该对象, 可添加方法
  clone.coding = function () {
    console.log('I am coding !');
  }
  return clone
}
let parent = {
  name: 'ParentName',
  actions: ['eat', 'reading']
}

// 我们利用封装的继承函数 来增强 child 对象
let child = createEnhanceObj(parent)

console.log(child.name) // ParentName
console.log(child.actions) // [ 'eat', 'reading' ]
child.coding() //I am coding !

// 引用类型的属性被所有实例共享
parent.actions.push('sleep')
console.log(child.actions) // [ 'eat', 'reading', 'sleep' ]

// 每次创建对象都会创建一遍方法, 造成内存浪费
let child2 = createEnhanceObj(parent)
console.log(child.coding === child2.coding) // false

寄生组合式继承
function Parent (name, actions) {
  this.name = name;
  this.actions = actions;
}
Parent.prototype.play = function () {
console.log(`${this.name} is playing`)
}

function Child () {
Parent.apply(this, arguments);
}

function createEnhanceObj(Parent, Child){
  // 设置 Child.prototype 的原型是 Parent.prototype
  Child.prototype = Object.create(Parent.prototype);
  // 保持 constructor 指向的一致性
  Child.prototype.constructor = Child;
}

// 或者可以这样写，把父类原型赋值给子类，并将构造函数设置为子类
// function createEnhanceObj(Parent, Child){
//   Child.prototype = Object.create(Parent.prototype, {
//     constructor: {
//       value: Child,
//       enumerable: false,
//       writable: true,
//       configurable: true
//     }
//   })
// }

createEnhanceObj(Parent, Child)

let child1 = new Child('k', ['eat', 'sleep', 'coding']);

console.log(child1.name); // k
console.log(child1.actions); // ['eat', 'sleep', 'coding']

let child2 = new Child('cd', ['eat', 'sleep']);

console.log(child2.name); // cd
console.log(child2.actions); // ['eat', 'sleep']
child2.play(); // cd is playing

console.log(child1.play === child2.play) // true

console.log(child1 instanceof Parent) // true

原型链
访问一个对象的属性，如果对象的内部不存在这个属性则会访问其__proto__的属性，
如果还是找不到就再继续访问它的__proto__的属性，知道null为止。

//===============================================================
一文搞定前端错误捕获和上报
https://juejin.cn/post/7031876097390149645?utm_source=gold_browser_extension
try…catch
window.onerror
window.addEventListener(‘error’)
window.addEventListener(‘unhandledrejection’)    

数据上报
XMLHttpRequest 
Image  