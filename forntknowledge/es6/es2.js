http://interview.poetries.top/docs/handwritten.html#_34-%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%8C%E5%90%9
1%E7%BB%91%E5%AE%9A 
function myPromise(constructor) {
  let self = this;
  self.status = 'pending';
  self.value = undefined;
  self.reason = undefined;

  function resolve(value) {
    if(self.status === 'pending') {
      self.value = value;
      self.status = 'resovled';
    }
  }

  function rejecte(reson) {
    if(self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'
    }
  }

  try{
    constructor(resolve, reject)
  } catch(e) {
    rejecte(e)
  }
}

myPromise.prototype.then = function(onFullfilled,onRejected) {
  let self = this;
  switch(self.status) {
    case 'resolved':
      onFullfilled(self.value);
      break;
    case 'rejected':
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

实现一个双向绑定
const data = {
  text: 'default'
}
const input = document.getElementById('input');
const span = document.getElementById('span');
Object.defineProperty(data, 'text', {
  set(value) {
    input.value = value;
    span.innerHTML = value
  }
})

input.addEventListener('keyup', function(e) {
  data.text = e.target.value;
})

// reduce 实现对象数组去重复
var resources = [
  { name: "张三", age: "18" },
  { name: "张三", age: "19" },
  { name: "张三", age: "20" },
  { name: "李四", age: "19" },
  { name: "王五", age: "20" },
  { name: "赵六", age: "21" }
]
var temp = {};
var a = resources.reduce((prev, curv) => {
  if(!temp[curv.name]) {
    temp[curv.name] = true;
    prev.push(curv);
  }
  return prev
},[])

function compose(...funs) {
  if (funs.length === 0) {
    return arg => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => (...arg) => a(b(...arg)))
}

const compose = (...funcs) => {
  return funcs.reduce((a, b) => {
    return function(x){
      return a(b(x));
    }
  })
}
const calc = compose(minus, add, multiply);
console.log(calc(10));

// thunk function
const thunk = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}
export default thunk

Set本身是一个构造函数，用来生成 Set 数据结构。
它类似于数组，但是成员的值都是唯一的，没有重复的值。
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x)); 
for (let i of s) {
  console.log(i);
}
// 去除数组的重复成员
[...new Set(array)]
let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

add, delete, has, clear,

const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);
for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

Iterator 是什么样子的呢
我们来模拟实现以下：
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {
            value: array[nextIndex++],
            done: false
        }
        :
        {
            value: undefined,
            done: true
        };
    }
  };
}
const it = makeIterator(['a', 'b']);
it.next() 
// { value: "a", done: false }
it.next() 
// { value: "b", done: false }
it.next() 
// { value: undefined, done: true }

for...of 循环
关于for...of的原理，相信你看完上面的内容已经掌握的差不多了，现在我们以数组为例，说一下，for...of 和之前我们经常使用的其他循环方式
有什么不同。
最原始的写法就是for循环。
for (let i = 0; i < myArray.length; index++) {
  console.log(myArray[i]);
}
这种写法比较麻烦，因此数组提供内置的forEach方法。

myArray.forEach((value) => {
  console.log(value);
});
这种写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效。

for...in循环可以遍历数组的键名。

const arr = ['red', 'green', 'blue'];
for(let v in arr) {
    console.log(v); // '0', '1', '2
}
for...in循环有几个缺点:
数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键
某些情况下，for...in循环会以任意顺序遍历键名。
for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

for...of和上面几种做法（for循环，forEach, for...in）相比，有一些显著的优点

有着同for...in一样的简洁语法，但是没有for...in那些缺点。
不同于forEach方法，它可以与break、continue和return配合使用。
提供了遍历所有数据结构的统一操作接口。

function 关键字与函数名之前有个星号
函数体内部使用yield表达式
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

async 函数原理就是 Generator函数 和 自动执行器包装了一下。

class 类
class不存在变量提升

new A(); // ReferenceError
class A {}

总结
class是一个语法糖，其底层还是通过 构造函数 去创建的。
类的所有方法都定义在类的prototype属性上面。
静态方法：在方法前加static，表示该方法不会被实例继承，而是直接通过类来调用。
静态属性：在属性前加static，指的是 Class 本身的属性，而不是定义在实例对象（this）上的属性。
ES6的继承和ES5的继承区别在于：
ES5的继承，实质是先创建了子类的实例对象 this, 然后再将 父类的方法添加到 this上面
ES6的继承是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。
super
作为函数调用，代表父类的构造函数
作为对象调用，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
按顺序调用异步函数
// 先建立一个工厂函数, 入参是名字和异步时间
const promiseFactory = (name, wait, isFail = false) => {
  return new Promise((resolve, reject) => {
    // 异步任务(用 setTimeout 模拟)
    setTimeout(() => {
      if (!isFail) {
        resolve(`我是 ${name}，我需要 ${wait} ms, 执行成功`)
      } else {
        reject(`我是 ${name}，我需要 ${wait} ms, 执行失败`)
      }
    }, wait)
  })
}

let pro1 = promiseFactory('第一个异步任务', 3000)
let pro2 = promiseFactory('第二个异步任务', 1000)
let pro3 = promiseFactory('第三个异步任务', 2000)
let pro4 = promiseFactory('第四个异步任务', 1500, true)

async function asyncList () {
  const res1 = await promiseFactory('第一个异步任务', 3000)
  console.log(res1)
  const res2 = await promiseFactory('第二个异步任务', 1000)
  console.log(res2)
  const res3 = await promiseFactory('第三个异步任务', 2000)
  console.log(res3)
}

for await of
async function asyncFnList () {
  const proArr = [pro1, pro2, pro3]
  for await (let res of proArr) {
    console.log(res)
  }
}

asyncFnList()  

装饰器 https://juejin.cn/post/7022942049829650463
装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。
装饰器的行为

@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
装饰器函数的第一个参数，就是所要装饰的目标类。
注意，装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。

添加实例属性
function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
obj.isTestable // true

九种跨域方式实现原理（完整版）
https://juejin.cn/post/6844903767226351623

Generator语法
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        { 
            value: array[nextIndex++],
            done: false
        } 
        :
        {
            value: undefined,
            done: true
        };
    }
  };
}
const it = makeIterator(['a', 'b']);

it.next() 
// { value: "a", done: false }
it.next() 
// { value: "b", done: false }
it.next() 
// { value: undefined, done: true }

10. async/await对比Promise的优势
代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调⽤也会带来额外的阅读负担
Promise传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅
错误处理友好，async/await可以⽤成熟的try/catch，Promise的错误捕获⾮常冗余
调试友好，Promise的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀个.then代码块中使⽤调试器的步进(step-over)功能，
调试器并不会进⼊后续的.then代码块，因为调试器只能跟踪同步代码的每⼀步。

11. async/await 如何捕获异常
async function fn(){
  try{
    let a = await Promise.reject('error')
  }catch(error){
    console.log(error)
  }
}
链接：https://juejin.cn/post/6941194115392634888


ES6 Reflect 对象 上ES6位了操作对象而提供的心API https://www.bilibili.com/video/BV1Su411979o?p=1
1.把object对象的一些方法放到Reflect对象上面
2.修改某些object方法的返回结果，让其变得更合理
3.Reflect一共有十三个静态方法

了解学习 Proxy 的好朋友 - Reflect，为什么需要 Reflect 
https://juejin.cn/post/6970893008778559495 


第11题：
如何中断Promise？
中断Promise
注意这里是中断而不是终止，因为 Promise 无法终止，这个中断的意思是：在合适的时候，把 pending 状态的 promise 给 reject 掉。
例如一个常见的应用场景就是希望给网络请求设置超时时间，一旦超时就就中断，我们这里用定时器模拟一个网络请求，随机 3 秒之内返回。
function timeoutWrapper(p, timeout = 2000) {
  const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求超时')
    }, timeout)
  })
  return Promise.race([p, wait])
}