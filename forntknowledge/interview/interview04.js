防抖和节流
防抖
防抖是指在事件被触发n秒后在执行回调，如果在这n秒内时间又被触发，则重新计时。

可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
//fn是需要防抖的函数,delay是等待时间
function debounce(fn, delay = 500) {
  let timer = null;
  // 这里返回的函数是每次用户实际调用的防抖函数
  return function(...args) {	//...args是es6的剩余参数语法，将多余的参数放入数组，用来代替arguments对象
    // 如果已经设定过定时器了就清空上一次的定时器
    if(timer) {
        clearTimeout(timer);	
      }
      // 开始一个新的定时器，延迟执行用户传入的方法；注：定时器的返回值是一个数值，作为定时器的编号，可以传入clearTimeout来取消定时器
      timer = setTimeout(() => {  //这里必须是箭头函数，不然this指向window,要让this就指向fn的调用者
        fn.apply(this, args);   
      }, delay)	
  }
}
节流
节流就是一定时间内执行一次事件，即使重复触发，也只有一次生效。

可以使用在监听滚动scroll事件上，通过事件节流来降低事件调用的频率。
1. 定时器版本
throttle(fn, delay = 500) {
  let timer = null;
  return function(...args) {
    // 当前有任务了，直接返回
      if(timer) {
        return;
      }
      timer = setTimeout(() => {
          fn.apply(this, args);
          //执行完后，需重置定时器，不然timer一直有值，无法开启下一个定时器
          timer = null;	
      }, delay)
  }
}
2. 时间戳版本
// 节流
function throttle(fn, delay = 500) {
  let prev = Date.now();// 上一次执行该函数的时间
  return function(...args) {
    let now = Date.now();//返回从UTC到当前时间的毫秒数
    // 如果差值大于等于设置的等待时间就执行函数
    if (now - prev >= delay) {
      fn.apply(this, args);
      prev = Date.now();
    }
  };
}
https://juejin.cn/post/7330571394550136866


react 如何实现keep-alive?
Keep-alive是缓存路由使用的，保留之前路由的状态
实现方法：
使用npm库：
react-router-cache-router
React-activation


实现Sum函数链式调用计算多数之和
原型链

最直接的写法就是利用原型链+add方法返回this来实现，total和作为对象的属性来访问的返回

function Sum(initialValue=0) {
  this.total = initialValue;
}
Sum.prototype.add = function(num) {
  this.total += num
  return this;
}

const result = new Sum(1) 
result.add(2).add(3);
console.log(result.total)


Service Worker
Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。



// 转换前：
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
// 转换为: 
tree = [{
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


function jsonToTree(data) {
  // 初始化结果数组，并判断输入数据的格式
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  // 
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