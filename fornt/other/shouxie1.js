史上最全！熬夜整理56个JavaScript高级的手写知识点！！专业扫盲！
https://juejin.cn/post/7023906112843808804

「万字总结」熬夜总结50个JS的高级知识点，全都会你就是神！！！
https://juejin.cn/post/7022795467821940773 

高频前端面试题汇总之HTML篇
https://juejin.cn/post/6905294475539513352

金九银十，你准备好面试了吗? (附30w字前端面试题总结)
https://juejin.cn/post/6996841019094335519#heading-39

实现一个 new
创建一个新的空对象 obj
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

function instanceof(L, R) { //L是表达式左边，R是表达式右边
  const O = R.prototype;
  L = L.__proto__;
  while(true) {
      if (L === null)
          return false;
      if (L === O) // 这里重点：当 L 严格等于 0 时，返回 true 
          return true;
      L = L.__proto__;
  }
}

JavaScript的几种继承方式
https://wangyaxing.cn/blog/jsCode/%E6%89%8B%E5%86%99%E7%BB%A7%E6%89%BF.html#javascript%E7%9A%84%E5%87%A0%E7%A7%8D%E7%BB%A7
%E6%89%BF%E6%96%B9%E5%BC%8F

寄生组合式继承（最理想的） 
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'yellow'];
}
Parent.prototype.getName = function() {
    console.log(this.name)
}
function Child(name, age) {
    // 核心代码①
    Parent.call(this, name);
    this.age = age;
}
// 核心代码②
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

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
        break;
      case 'rejected':
        onRejected(this.reason)
        break;
      default:
    }
  }
}
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  let arg = [...arguments].slice(1)
  let result = context.fn(...arg)
  delete context.fn
  return result
}
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

// 思路：类似call，但返回的是函数
Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let arg = [...arguments].slice(1)
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      return new _this(...arg, ...arguments)
    } else {
      return _this.apply(context, arg.concat(...arguments))
    }
  }
}
// 基础版1：时间戳（第一次触发会执行，但不排除不执行的可能，请思考一下哦）
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

// 基础版2：定时器（最后一次也会执行）
function throttle(fn, delay) {
  var timer = null
  return function(...args) {
    var that = this
    if(!timer) {
      timer = setTimeout(function() {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
// 进阶版：开始执行、结束执行
function throttle(fn, delay) {
  var timer = null
  var prev = Date.now()
  return function(...args) {
    var that = this
    var remaining = delay - (Date.now() - prev)  // 剩余时间
    if (remaining <= 0) {  // 第 1 次触发
      fn.apply(that, args)
      prev = Date.now()
    } else { // 第 1 次之后触发
      timer && clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(that, args)
      }, remaining)
    }
  }
}

function fn () {
  console.log('节流')
}
addEventListener('scroll', throttle(fn, 1000))

/**
 * 实现要点：柯里化函数接收到足够参数后，就会执行原函数，那么我们如何去确定何时达到足够的参数呢？
 * 柯里化函数需要记住你已经给过他的参数，如果没给的话，则默认为一个空数组。
 * 接下来每次调用的时候，需要检查参数是否给够，如果够了，则执行fn，没有的话则返回一个新的 curry 函数，将现有的参数塞给他。
 *
 */
// 待柯里化处理的函数
let sum = (a, b, c, d) => {
  return a + b + c + d
}

// 柯里化函数，返回一个被处理过的函数  
let curry = (fn, ...arr) => {  // arr 记录已有参数
  return (...args) => {   // args 接收新参数
    if (fn.length <= (...arr,...args)) {  // 参数够时，触发执行
      return fn(...arr, ...args)
    } else {  // 继续添加参数
      return curry(fn, [...arr, ...args])
    }
  }
}

var sumPlus = curry(sum)
sumPlus(1)(2)(3)(4)
sumPlus(1, 2)(3)(4)
sumPlus(1, 2, 3)(4)

Object.create 的基本实现原理
// 思路：将传入的对象作为原型
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

实现一个双向数据绑定
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

rem 基本设置
// 提前执行，初始化 resize 事件不会执行
setRem()
// 原始配置
function setRem () {
  let doc = document.documentElement
  let width = doc.getBoundingClientRect().width
  let rem = width / 75
  doc.style.fontSize = rem + 'px'
}
// 监听窗口变化
addEventListener("resize", setRem)

34 实现一个双向绑定
defineProperty 版本

// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
Object.defineProperty(data, 'text', {
  // 数据变化 --> 修改视图
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  }
});
// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  data.text = e.target.value;
});

proxy 版本
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value;
    // 数据变化 --> 修改视图
    input.value = value;
    span.innerHTML = value;
    return value;
  }
};
const proxy = new Proxy(data, handler);

// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  proxy.text = e.target.value;
});

//================================================================
Array.isArray 实现
Array.myIsArray = function(o) {
  return Object.prototype.toString.call(Object(o)) === '[object Array]';
};
console.log(Array.myIsArray([])); // true

function jsonp(url, Callback, success) {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}

Promise.prototype.finally = function (callback) {
  return this.then((data) => {
    // 让函数执行 内部会调用方法，如果方法是promise，需要等待它完成
    // 如果当前promise执行时失败了，会把err传递到，err的回调函数中
    return Promise.resolve(callback()).then(() => data); // data 上一个promise的成功态
  }, err => {
    return Promise.resolve(callback()).then(() => {
      throw err; // 把之前的失败的err，抛出去
    });
  })
}

求字符串中字母出现的次数
const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';
const res = str.split('').reduce((pre,next)=>{
  pre[next] ? pre[next]++ : pre[next] = 1
  return pre;
},{})
//================================================================
compose函数
redux compose 源码实现
function compose(...funs) {
  if (funs.length === 0) {
      return arg => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => (...arg) => a(b(...arg)))
}

//================================================================
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status <= 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject('请求出错')
        }
    }
    }
    xhr.send()  //发送hppt请求
  })
  return p
}
let url = '/data.json'
ajax(url)
.then(res => console.log(res))
.catch(reason => console.log(reason))

手写 redux-thunk源码
redux-thunk 可以利用 redux 中间件让 redux 支持异步的 action
// 如果 action 是个函数，就调用这个函数
// 如果 action 不是函数，就传给下一个中间件
// 发现 action 是函数就调用
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};
export default thunk

function MyNew(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.call(obj, ...args);
  return typeof result === 'object' ? result : obj
}
创建一个新的对象（这个对象将会作为执行 new 构造函数() 之后，返回的对象实例）为这个对象添加属性、方法等
（即将空对象的原型(__proto__)，指向构造函数的 prototype 属性）
将构造函数的 this 指向这个新对象（使用 apply）最终返回新对象

用ES5实现数组的reduce方法
特点：
初始值不传时的特殊处理：会默认用数组中的第一个元素
函数的返回结果会作为下一次循环的 prev
回调函数一共接收4个参数，分别是「上一次调用回调时返回的值、正在处理的元素、正在处理的元素的索引，正在遍历的集合对象」
用法：
let total = [1, 2, 3].reduce((prev, next, currentIndex, array) => {
  return prev + next;
}, 0);

console.log(total); // 6
Array.prototype.reduce = function(fn, prev) {
  for(let i = 0; i < this.length; i++) {
    // 初始值不传时的处理
    if (typeof prev === 'undefined') {
      // 明确回调函数的参数都有哪些
      prev = fn(this[i], this[i+1], i+1, this);
      ++i;
    } else {
      prev = fn(prev, this[i], i, this)
    }
  }
  // 函数的返回结果会作为下一次循环的 prev
  return prev;
};
链接：https://juejin.im/post/6859026583533912072

实现Object.create方法
let demo = {
  c : '123'
};
let cc = Object.create(demo);
console.log(cc);

function create(proto) {
  function Fn() {}
  Fn.prototype = proto;
  Fn.prototype.constructor = Fn;
  return new Fn();
}

const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay)
  }
}

const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)))

Promise.prototype.finally = function (cb) {
  return this.then(function (value) {
    return Promise.resolve(cb()).then(function () {
      return value
    })
  }, function (err) {
    return Promise.resolve(cb()).then(function () {
      throw err
    })
  })
}

Promise.race = function(promiseArr) {
  return new Promise((resolve, reject) => {
      promiseArr.forEach(p => {
          Promise.resolve(p).then(val => {
              resolve(val)
          }, err => {
              rejecte(err)
          })
      })
  })
}

虚拟dom转为真实dom
function _render (vnode) {
  if (typeof vnode === 'number') {
    vnode = String(vnode)
  }
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode)
  }
  var dom = document.createElement(vnode.tag)
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      dom.setAttribute(key, vnode.attrs[key])
    })
  }
  vnode.children.forEach(child => {
    return dom.appendChild(_render(child))
  })
  return dom
}

var vnode = {
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
console.log(_render(vnode))

//================================================================
https://mp.weixin.qq.com/s/rxap0bUy-AWoG4Ttzm9lIw
14、将DOM转化成树结构对象
https://juejin.cn/post/7023906112843808804#heading-13
题目描述：
<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>

将上方的DOM转化为下面的树结构对象

{
    tag: 'DIV',
    children: [
        { tag: 'SPAN', children: [] },
        {
            tag: 'UL',
            children: [
                { tag: 'LI', children: [] },
                { tag: 'LI', children: [] }
            ]
        }
    ]
}
实现如下：
function dom2tree(dom) {
    const obj = {}
    obj.tag = dom.tagName
    obj.children = []
    dom.childNodes.forEach(child => obj.children.push(dom2tree(child)))
    return obj
}

15、将树结构转换为DOM  虚拟dom转真实dom
题目描述：
{
    tag: 'DIV',
    children: [
        { tag: 'SPAN', children: [] },
        {
            tag: 'UL',
            children: [
                { tag: 'LI', children: [] },
                { tag: 'LI', children: [] }
            ]
        }
    ]
}

将上方的树结构对象转化为下面的DOM
<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>
实现如下：
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
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}

手写获取url参数
function getUrlParams(url){
  const res = {};
  if (url.indexOf('?') !== -1) {
    const str = url.split('?')[1];
    const arr = str.split('&');
    arr.forEach(item => {
      let [key, val] = item.split('=');
      res[key] = val;
    });
  }
  return res;
}

数字化金额 https://juejin.cn/post/6890357960040513550
const num = String(1234567890);
let result = '';

for (let i = num.length - 1; i >= 0; i--) {
  if (i !== num.length - 1 && i % 3 === 0) {
    result = num[i] + ',' + result;
  } else {
    result = num[i] + result;
  }
}
console.log(result);

console.log(
  String(1234567890).split('').reverse().reduce((prev, next, index) => (index % 3) === 0 ? next + ',' + prev : next + prev)
);

字符串模板 https://juejin.cn/post/6946022649768181774
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) { // 判断模板里是否有模板字符串
      const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
      template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
      return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: '布兰',
    age: 12
}
render(template, person); // 我是布兰，年龄12，性别undefined

算法题：将对象的属性全部提升到第一层。 https://juejin.cn/post/7017655711291146253
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