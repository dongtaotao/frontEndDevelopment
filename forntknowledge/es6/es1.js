1.5万字概括ES6全部特性(已更新ES2020) 
https://juejin.cn/post/6844903959283367950 

🔥花一个小时，迅速了解ES6~ES12的全部特性
https://juejin.cn/post/7068935394191998990?utm_source=gold_browser_extension


async/await优点：
它做到真正的串行的同步写法，代码阅读更简单
对于条件语句和其他流程比较友好，可以直接写到判断条件

async/await缺点：
无法处理promise返回对象的reject对象，要借助try...catch...
用await可能会导致性能问题，因为await会阻塞代码，之后的代码也许不依赖于前者，但仍然需要等待前者的完成，
导致代码失去并发性。
try...catch...内部的变量无法传递给下一个try...catchPromise和then/catch内部定义的变量

promise
一旦执行，就无法中途取消，链式调用多个then不能随便跳出来
错误无法在外部捕捉，只能在内部预判处理，如果内部进行预判处理，如果不设置回调函数，
Promise内部抛出的错误，不能反应到外部
Promise内部如何执行，检测很难，当处于pending状态时，无法得知目前进展到哪一个阶段

5. 简述一下Promise，async&await两者者的区别？
promise通过链式调用，直接在then中返回一个promise来进行成功之后的回调函数，用catch来做错误处理
async是Generator函数的语法糖，async/await则将其变成同步的写法，即可以用try-catch捕获，简洁，
可读性更高，写法更优雅

6. CommonJS和ES6模块的区别
CommonJS模块输出是一个值的拷贝（浅拷贝），ES6模块输出是值的引用
CommonJS是运行时加载，ES6模块是编译时输出接口
CommonJS模块的require()是同步加载模块，ES6模块的import命令是异步加载，有一个独立依赖的解析模块阶段

1. 请简述下promise的优缺点？
缺点：
无法取消Promise，一旦新建就会立即执行，无法中途取消
如果不设置回调函数，promise内部抛出的错误就无法反应到外部
当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

优点：
解决回调地狱问题
代码扁平可读，.then方法链式调用
更好的进行错误捕获

promise.any：
也是同时处理promise实例，包装成一个新的promise实例。
它的状态变化跟promise.race类似，只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态
如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
和promise.race()不同点，就是promise.any()不会因为某个promise变成rejected状态而结束，
必须要等到所有的参数promise变成rejected状态才结束

Promise.any();有一个子实例成功就算成功，全部子实例失败才算失败；
Promise.all()；全部子实例的成功才算成功，一个子实例失败就算失败；
Promise.race()；rece是赛跑机制，看最先的promise子实例是成功还是失败。

let resolved = Promise.resolve(2);
let resolved1 = Promise.resolve(5);
let rejected = Promise.reject(-1);
const allSettledPromise = Promise.any([resolved1,resolved, rejected]);
allSettledPromise.then(function (results) {
  console.log(results);
});

let promise1 = new Promise((resolve,reject) => {
	setTimeout(() =>  {
    reject(1);
	},2000)
});
let promise2 = new Promise((resolve,reject) => {
	setTimeout(() => {
    resolve(2);
	},1000)
});
let promise3 = new Promise((resolve,reject) => {
	setTimeout(() => {
    resolve(3);
	},3000)
});
Promise.race([promise1,promise2,promise3]).then(res => {
	console.log(res); //结果：2
},rej => {
  console.log(rej)};
)

二、Promise.race的使用
顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果
本身是成功状态还是失败状态。

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})

1. Generator 概述
1）Generator
Generator（生成器）是 ES6 中的关键词，通俗来讲 Generator 是一个带星号的函数（它并不是真正的函数），
可以配合 yield 关键字来暂停或者执行函数。先来看一个例子：
function* gen() {
  console.log("enter");
  let a = yield 1;
  let b = yield (function () {return 2})();
  return 3;
}
var g = gen()           // 阻塞，不会执行任何语句
console.log(typeof g)   // 返回 object 这里不是 "function"
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next()) 

object
enter
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
https://juejin.cn/post/6995357238277701668

Promise的理解
Promise是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，
他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，
各种异步操作都可以用同样的方法进行处理。
（1）Promise的实例有三个状态:
Pending（进行中）
Resolved（已完成）
Rejected（已拒绝）
当把一件事情交给promise时，它的状态就是Pending，任务完成了状态就变成了Resolved、
没有完成失败了就变成了Rejected。
（2）Promise的实例有两个过程：
pending -> fulfilled : Resolved（已完成）
pending -> rejected：Rejected（已拒绝）
注意：一旦从进行状态变成为其他状态就永远不能更改状态了。
Promise的特点：

对象的状态不受外界影响。promise对象代表一个异步操作，
有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。
只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，
这也是promise这个名字的由来——“承诺”；
一旦状态改变就不会再变，任何时候都可以得到这个结果。promise对象的状态改变，
只有两种可能：从pending变为fulfilled，从pending变为rejected。这时就称为resolved（已定型）。
如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，
事件的特点是：如果你错过了它，再去监听是得不到结果的。

Promise的缺点：
无法取消Promise，一旦新建它就会立即执行，无法中途取消。
如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

总结：
Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，
接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是pending、resolved 和 rejected，分别代表了进行中、
已成功和已失败。实例的状态只能由 pending 转变 resolved 或者rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。

7.  对async/await 的理解
async/await其实是Generator 的语法糖，
它能实现的效果都能用then链来实现，它是为优化then链而开发出来的。
从字面上来看，async是“异步”的简写，await则为等待，所以很好理解async
用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
当然语法上强制规定await只能出现在asnyc函数中，先来看看async函数返回了什么：

10. async/await对比Promise的优势
代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调⽤也会带来额外的阅读负担
Promise传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅
错误处理友好，async/await可以⽤成熟的try/catch，Promise的错误捕获⾮常冗余
调试友好，Promise的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，
如果你在⼀个.then代码块中使⽤调试器的步进(step-over)功能，调试器并不会进⼊后续的.then代码块，
因为调试器只能跟踪同步代码的每⼀步。

首先 requestAnimationFrame 自带函数节流功能，基本可以保证在 16.6 毫秒内只执行一次（不掉帧的情
况下），并且该函数的延时效果是精确的，没有其他定时器时间不准的问题，当然你也可以通过该函数
来实现 setTimeout。

手写实现4种继承
function Father () {}
function Child () {}
// 1\. 原型继承
Child.prototype = new Father()
// 2\. 构造继承
function Child (name) {
  Father.call(this, name)
}
// 3\. 组合继承
function Child (name) {
  Father.call(this, name)
}
Child.prototype = new Father()
// 4\. 寄生继承
function cloneObj (o) {
  var clone = object.create(o)
  clone.sayName = ...
  return clone
}
// 5\. 寄生组合继承
// 6\. ES6 class extend继承

async和await：
Generator函数的语法糖，将*改成async，将yield换成await。
是对Generator函数的改进, 返回promise。
异步写法同步化，遇到await先返回，执行完异步再执行接下来的
内置执行器, 无需next()

promise.finally实现
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason }) 
  );
};  


Promise.all = (promises) => {
  // 符合条件3，返回一个Promise
  return new Promise((rs, rj) => {
    let count = 0
    let result = []
    const len = promises.length

    promises.forEach((p, i) => {
      // 符合条件1，将数组里的项通过Promise.resolve进行包装
      Promise.resolve(p).then((res) => {
        count += 1
        result[ i ] = res
        // 符合条件2 等待所有都完成
        if (count === len) {
          rs(result)
        }
        // 符合条件2  只要一个失败就都失败
      }).catch(rj)
    })
  })
}


Promise.race = (promises) => {
  // 返回一个新的Promise
  return new Promise((rs, rj) => {
    promises.forEach((p) => {
      // 包装一下promises中的项，防止非Promise .then出错
      // 只要有任意一个完成了或者拒绝了，race也就结束了
      Promise.resolve(p).then(rs).catch(rj)
    })
  })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2);
});

Promise.myRace([promise1, promise2]).then((value) => {
  // 因为promise2更快所以打印出2
  console.log(value) // 2
});

Promise.myRace([promise1, promise2, 3]).then((value) => {
  // 3比其他两个更快
  console.log(value) // 3
});


Promise.allSettled
Promise.myAllSettled = (promises) => {
  return new Promise((rs, rj) => {
    let count = 0
    let result = []
    const len = promises.length
    // 数组是空的话，直接返回空数据
    if (len === 0) {
      return rs([])
    }

    promises.forEach((p, i) => {
      Promise.resolve(p).then((res) => {
        count += 1
        // 成功属性设置 
        result[ i ] = {
          status: 'fulfilled',
          value: res
        }
        
        if (count === len) {
          rs(result)
        }
      }).catch((err) => {
        count += 1
        // 失败属性设置 
        result[i] = { 
          status: 'rejected', 
          reason: err 
        }

        if (count === len) {
          rs(result)
        }
      })
    })
  })
}

// 测试一下
const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000)
})

const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')
// 1. 所有的Promise都成功了
const p11 = Promise.myAllSettled([ p1, p2, p3 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))

// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "fulfilled",
    "value": 3
  }
]
*/
      
// 2. 有一个Promise失败了
const p12 = Promise.myAllSettled([ p1, p2, p4 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))
        
// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "rejected",
    "reason": "err4"
  }
]
*/
      
// 3. 有两个Promise失败了
const p13 = Promise.myAllSettled([ p1, p4, p5 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))
// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "rejected",
    "reason": "err4"
  },
  {
    "status": "rejected",
    "reason": "err5"
  }
]
*/    
 
 
