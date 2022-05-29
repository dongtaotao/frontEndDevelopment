1.0 JavaScript 回溯 详尽注释
https://leetcode-cn.com/problems/permutations/solution/javascript-hui-su-xiang-jin-zhu-shi-by-jsliang-4/ 

2.0 防抖
const debounce = (fn, delay) => { 
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

3. 统计网页中出现的标签
new Set([...document.querySelectorAll('*')].map(ele => ele.tagName)).size 

4.
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  }
}

5.
Function.prototype.myCall = function(content = window) {
  content.fn = this;
  let args = [...arguments].slice(1);
  let result = content.fn(...args);
  delete content.fn;
  return result;
}

Function.prototype.myApply = function (content = window) {
  content.fn = this;
  let result;
  if(arguments[1]) {
    result = content.fn(...arguments[1])
  } else {
    result = content.fn();
  }
  delete content.fn;
  return result;
}

function instance(left, right) {
  let proto = left.__proto__;
  let prototype = right.prototype;
  while(true) {
    if(proto === null) return false;
    if(proto === prototype) return true;
    proto = proto.__proto__;
  }
}

let arr1 = [
  {id: 1, name: '汤小梦'},
  {id: 2, name: '石小明'},
  {id: 3, name: '前端开发'},
  {id: 1, name: 'web前端'}
];
// quchong
const unique = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}
console.log(unique(arr1, 'id'));

const quickSort = (arr) => {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let midItem = arr.splice(mid, 1)[0];
  let left = [];
  let right = [];
  for(let i=0; i< arr.length; i++) {
    if(arr[i] < midItem) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([midItem], quickSort(right))
}

let isType = (type) => {
  return (obj) => {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

let curry = (fn, ...args) => {
  if(fn.length > args.length) {
    return (...arguments) => {
      return curry(fn, ...args, ...arguments)
    }
  } else {
    return fn(...args)
  }
}

let currying = (args) => {
  return fn.length > args.length ? (...arguments) => currying(fn, ...args, ...arguments) : fn(...args)
}

let addSum = (a, b, c) => a + b + c
let add = currying(addSum)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1, 2, 3))

 // 封装十进制转二进制的函数
const dec2bin = (decNumer) => {
  var stack = new Stack();
  var remainder;

  while(decNumer > 0) {
    remainder = decNumer % 2;
    decNumer = Math.floor(decNumer / 2);
    stack.push(remainder)
  }

  var bin = '';
  while(!stack.isEmpty()) {
    bin += stack.pop();
  }

  return bin;
}
//================================================================
curry
实现
判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回currying函数
  function currying(fn, ...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => currying(fn, ...args, ...args2);
    }
  }
我们来一个简单的实例验证一下：
const curryingFun = currying(fun)
curryingFun(1)(2)(3);  // 1 2 3 
curryingFun(1, 2)(3);  // 1 2 3 
curryingFun(1, 2, 3);  // 1 2 3 

//================================================================
function MyPromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(fun => {
        fun();
      });
    }
  }

  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach(fun => {
        fun();
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  switch (this.state) {
    case FULFILLED:
      onFulfilled(this.value);
      break;
    case REJECTED:
      onFulfilled(this.value);
      break;
    case PENDING:
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
      break;
  }
}

单例模式
var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    alert(this.name);
};

Singleton.getInstance = (function(name) {
    var instance;
    return function(name){
      if (!instance) {
        instance = new Singleton(name);
      }
      return instance;
    }
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a===b);   //true

//================================================================
git fetch和git pull的区别(最后一道题)
git pull：相当于是从远程获取最新版本并 merge 到本地
git fetch：相当于是从远程获取最新版本到本地，不会自动 merge

怎么解决 vuex 里的数据在页面刷新后丢失的问题？
https://segmentfault.com/a/1190000038400475
https://juejin.cn/post/6844903791838363655

后台管理系统怎么做权限分配？
//================================================================
// 加一
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  const result = [1, ...digits];
  return result;
};

//================================================================
1. 采用对称加密的方式加密传输数据和非对称加密的方式来传输密钥，
既可以解决传输效率问题也能保证两端数据的安全传输。
除此之外，为了能够证明服务器是可靠的，引入了数字证书，让浏览器验证证书的可靠性。
https://juejin.im/post/5e78d298f265da576a57a6bc

//：https://juejin.im/post/5e77888ff265da57187c7278
//================================================================
3 如何搭建一个脚手架工具（如vue-cli,  creat-react-app）
https://juejin.im/post/5d37d982e51d45108c59a635

https://www.bilibili.com/video/BV1sx411Z7tN
https://www.bilibili.com/video/BV17J411m7hR
https://www.bilibili.com/video/BV1PN41197v4?from=search&seid=14420039487121745395&spm_id_from=333.337.0.0

https://juejin.im/post/5c8f9dbfe51d45279e268e3b
https://juejin.im/post/5c98dc71e51d4501806d0a98
https://juejin.im/post/5b0e739e518825153e3d5440
https://juejin.im/post/5dd10fb76fb9a01fe303a5aa
https://juejin.im/post/5c94fef7f265da60fd0c15e8

//================================================================
// 实现一个柯里化函数 https://juejin.im/post/5e787b42e51d45272054dfae
//ES5写法
const currying = function (fn,...args) {
  if(args.length < fn.length){
      return function () {
        return currying(fn, ...args, ...arguments)
      }
  }else{
      return fn(...args)
  }
}

//ES6写法
const currying =(fn,...args)=>
  args.length < fn.length?(...argments)=> currying(fn,...args,...argments):fn(...args)

//================================================================
     // 双向绑定（手写）
   // Object.defineProperty 写法
  let vm = {}
  let obj = {
      name: 'zc',
      age: '123'
  }

  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          Object.defineProperty(vm, key, {
              get: function () {
                  return obj[key]
              },
              set: function (newvalue) {
                  obj[key] = newvalue
              }
          })
      }
  }

obj.age ='111'
vm.age ='112221'

console.log(vm.age)
console.log(obj.age)

// Proxy 写法
let vm = new Proxy(obj,{
  get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
  }
})

// JS发布订阅模式
let pubSub = {
  list: {},
  subscribe: function (key, fn) {  //订阅
      if (!this.list[key]) {
          this.list[key] = []
      }
      this.list[key].push(fn)
  },
  publish: function (key, ...args) {  //发布
      for (let fn of this.list[key]) {
          fn.apply(this, args)
      }
  },
  unSubscribe: function (key, fn) { //取消订阅
      let fnlist = this.list[key]
      if (!fnlist) return
      if (!fn) {
          fnlist.length = 0
      } else {
          fnlist.forEach((item, index) => {
              if (item === index) {
                  fnlist.splice(index, 1)
              }
          })
      }
  }

}
pubSub.subscribe('onwork', time => {
  console.log(`上班了：${time}`);
})
pubSub.subscribe('offwork', time => {
  console.log(`下班了：${time}`);
})
pubSub.subscribe('launch', time => {
  console.log(`吃饭了：${time}`);
})
// // 发布
pubSub.publish('offwork', '18:00:00');
pubSub.publish('launch', '12:00:00');

pubSub.unSubscribe('onwork');
pubSub.publish('onwork', '1222:00:00');
//================================================================
//11、JS 获取url参数
let test='?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=21331&rsv_pq=b8627e62001efbb9&rsv_t=eef5sqIQ98s66yOwueYH5BWlFUARj0P
kHBdCA4ahbSVYQA5qO9MBoZPC0mU&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=509
&rsv_sug4=509'

function f(str) {
    let str1 = str.slice(1)
    let arr=str1.split('&')
    console.log(arr)
    let map = new Map()

    arr.map(item=>{
      const [key,value] = item.split('=')
        map.set(key,decodeURIComponent(value))
    })
  return map
}

for (let item of  f(test)) {
    console.log(item)
}
//====================实现一个EventListener类，包含on，off，emit方法
//实现一个EventListener类，包含on，off，emit方法
class EventListener {
  constructor() {
      this.list = {}
  }

  on(key, fn) {
      if (!this.list[key]) {
          this.list[key] = []
      }
      this.list[key].push(fn)
  }

  emit(key, ...args) {
      for (let fn of this.list[key]) {
          fn.apply(this, args)
      }
  }

  off(key, fn) {
      let fnlist = this.list[key]
      if (!fnlist) return
      if (!fn) {
          fnlist.length = 0
      } else {
          fnlist.forEach((item, index) => {
              if (item === fn) {
                  fnlist.splice(index, 1)
              }
          })
      }

  }
}
let obj1 = new EventListener()
obj1.on('work', value => {
  console.log(`我是${value}啊`)
})
obj1.on('eat', value => {
  console.log(`我在${value}啊`)
})
obj1.emit('work', 'zc')
obj1.off('eat')
obj1.emit('eat', '吃西瓜')
// ajax
function ajaxget(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText)
    }
  }
}
1. js 数组 转为树形结构
source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
转换为: [{
  id: 1,
  pid: 0,
  name: 'body',
  children: [{
          id: 2,
          pid: 1,
          name: 'title',
          children: [{
              id: 3,
              pid: 1,
              name: 'div'
          }]
      }
  }]
var source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 1,
    name: 'div'
}, {
    id: 4,
    pid: 3,
    name: 'span'
}, {
    id: 5,
    pid: 3,
    name: 'icon'
}, {
    id: 6,
    pid: 4,
    name: 'subspan'
}]

function toTree(data) {
  let result = []
  if(!Array.isArray(data)) {
      return result
  }
  data.forEach(item => {
      delete item.children;
  });
  let map = {};
  data.forEach(item => {
      map[item.id] = item;
  });
  data.forEach(item => {
      let parent = map[item.pid];
      if(parent) {
        (parent.children || (parent.children = [])).push(item);
      } else {
        result.push(item);
      }
  });
  return result;
}
console.log(toTree(source))

//================================================================
2----------------
正则表达式 速查
https://github.com/any86/any-rule

3. https://mdnice.com/  markdown 格式化

4. https://www.remove.bg/zh 消除背景图片

5. dns缓存是什么 https://hsk.oray.com/news/7751.html
https://juejin.im/post/5d5a0c276fb9a06afe129571
DNS缓存指DNS返回了正确的IP之后，系统就会将这个结果临时储存起来。
并且它会为缓存设定一个失效时间 (例如N小时)，在这N小时之内，当你再次访问这个网站时，
系统就会直接从你电脑本地的DNS缓存中把结果交还给你，
而不必再去询问DNS服务器，变相“加速”了网址的解析。
当然，在超过N小时之后，系统会自动再次去询问DNS服务器获得新的结果。
所以，当你修改了 DNS 服务器，并且不希望电脑继续使用之前的DNS缓存时，
就需要手动去清除本地的缓存了。

6.https://segmentfault.com/a/1190000019331129
Leetcode：刷完31道链表题的一点总结

字节跳动： https://leetcode-cn.com/explore/interview/card/bytedance/

1.WebSocket协议解析
https://www.cnblogs.com/unclekeith/p/8087182.html

//================================================================
当需要保留详细的合并信息的时候建议使用git merge，
特别是需要将分支合并进入master分支时；当发现自己修改某个功能时，
频繁进行了git commit提交时，发现其实过多的提交信息没有必要时，
可以尝试git rebase。
https://juejin.cn/post/6844903603694469134

02 useEffect 完整指南
- https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/

03 使用 JS 及 React Hook 时需要注意过时闭包的坑(文中有解决方法)
https://segmentfault.com/a/1190000020805789

04 cdn原理

//=================================================================
//EventEmitter
// 手写发布订阅模式 EventEmitter
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events) this.events = Object.create(null);

    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(item => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest));
  }
}
// 使用如下
const event = new EventEmitter();
const handle = (...rest) => {
  console.log(rest);
};
event.on("click", handle);
event.emit("click", 1, 2, 3, 4);
event.off("click", handle);
event.emit("click", 1, 2);
event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick"); 
event.emit("dbClick");     
