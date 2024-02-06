特点：
将需要嵌套执行的函数平铺，嵌套执行就是一个函数的返回值将作为另一个函数的参数。该函数调用的方向是从右至左的（先执行 sum，再执行 toUpper，再执行 add）
用法：
function sum(a, b) {
  return a+b;
}
function toUpper(str) {
  return str.toUpperCase();
}
function add(str) {
  return '==='+str+'==='
}
// 使用 compose 之前：
console.log(add(toUpper(sum('cherry', '27')))); // ===CHERRY27===
// 使用 compose 之后：
console.log(compose(add, toUpper, sum)('cherry', '27')); // ===CHERRY27===
复制代码

实现：
// 使用 ES5- reduceRight 实现
function compose(...fns) {
  return function (...args) {
    let lastFn = fns.pop();
    return fns.reduceRight((a, b) => {
      return b(a);
    }, lastFn(...args));
  };
}

// 使用 ES6 - reduceRight 实现
const compose = (...fns) => (...args) => {
  let lastFn = fns.pop();
  return fns.reduceRight((a, b) => b(a), lastFn(...args));
};

// 使用 ES6 - reduce 一行代码实现：
const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));

链接：https://juejin.im/post/6859026583533912072
function Parent() {
  this.name = 'dong'
}
Parent.prototype.getName = function() {
  return this.name;
}
function Child() {
  Parent.call(this);
  this.type = 'child'
}
const child = new Child()

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
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)))

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
作者：LinDaiDai_霖呆呆
链接：https://juejin.im/post/6844904193619132423
class EventEmitter{
  constructor(){
    this.events = {}
  }
  on(name,fn){
    // 注册订阅
    if(this.events[name]){
      this.events[name].push(fn)
    }else{
      this.events[name] = [fn]
    }
  }
  off(name,fn){
    // 取消订阅
    if(this.events[name]){
      this.events[name] = this.events[name].filter((item)=>fn!==item)
    }else{
      new Error('')
    }
  }
  emit(name,...rest){
    // 发布
    if(this.events[name]){
      this.events[name].forEach((item)=>{
        item.call(this,...rest)
      })
    }
  }
  once(name,fn){
    // 注册一次性订阅
    const onceF = (...rest)=>{
      fn.call(this,...rest)
      this.off(name,onceF)
    }
    this.on(name,onceF)
  }
}

class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(name, fn) {
    if(!this.events[name]) {
      this.events[name] = [fn]
    } else {
      this.events[name].push(fn);
    }
  }
  emit(name, ...args) {
    if(this.events[name]) {
      this.events[name].forEach((item) => {
        item.call(this,...args)
      })
    }
  }
  off(name, fn) {
    if(this.events[name]) {
      this.events[name] = this.events[name].filter((item) => item !== fn)
    }
  }

  once(name, fn) {
    function onceF() {
      fn();
      this.off(name, onceF)
    }

    this.on(name, onceF) 
  } 
}  