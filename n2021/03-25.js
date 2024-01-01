2020-03-25 
跳槽人速来，面经&资源分享 
https://juejin.cn/post/6942988170208215076

一年半前端人的求职路
https://juejin.cn/post/6940058373534515237

一年半经验前端社招7家大厂&独角兽全过经历 | 掘金技术征文 **********************
https://juejin.cn/post/6844904137495150599

面试分享：两年工作经验成功面试阿里P6总结
https://juejin.cn/post/6844903928442667015

霖呆呆的近期面试128题汇总(含超详细答案) | 掘金技术征文
https://juejin.cn/post/6844904151369908232#heading-88

2020 - 2021 年 Web 前端最新导航 - 前端学习资源分享&前端面试资源汇总
https://juejin.cn/post/6881639224190173191

2020最新：100道有答案的前端面试题（上）
https://juejin.cn/post/6847902225423925255
https://juejin.cn/post/6850418121250570248

阿里巴巴、今日头条、拼多多以及腾讯等一线互联网公司面试总结
https://juejin.cn/post/6905913905152065544

上海莉莉丝、米哈游、B站、小红书、得物等互联网公司前端面试总结
https://juejin.cn/post/6896810576778166280

*******17张思维导图，2021年作为一名前端开发者需要掌握这些，前端面试复习资料参考大纲
https://juejin.cn/post/6905913850709671944

前端基础知识大汇总（欢迎收藏）
https://juejin.cn/post/6893856813247266823#heading-18


首屏时间(FCP) VS 白屏时间(FP)
https://juejin.cn/post/6844904112107044872


====编程题：求最大公共前缀，如['aaafsd', 'aawwewer', 'aaddfff'] => 'aa' 
var longestCommonPrefix = function(strs) {
  let re = '';
  if(!strs.length) return re;

  for(let i=0; i< strs[0].length; i++) {
      for(let j=1; j< strs.length; j++) {
          if(strs[0][i] !== strs[j][i]) {  
              return re
          }
      }
      re += strs[0][i];
  }

  return re
};

====编程题：求最大公共路径前缀，['aa/bb/sd', 'aa/bb/wwewer', 'aa/bb/ddfff'] => 'aa/bb'
====git merge和git rebase之间有什么区别？
  当需要保留详细的合并信息的时候建议使用git merge，
  特别是需要将分支合并进入master分支时；当发现自己修改某个功能时，频繁进行了git commit提交时，发现其实过多的提交信息没有必要时，
  可以尝试git rebase。

====实现一个redux【编程】
====diff算法、key作用，不要key会怎样【描述】
====react的usememo原理【描述】
闭包、缓存、memorize
====输出一个字符串全排列
====求数组里面最大连续项的和
====service worke
====实现两个大数相加
====Webpack HMR 原理解析https://zhuanlan.zhihu.com/p/30669007

Hot Module Replacement（以下简称 HMR）
  当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块
  发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应
  用进行更新。例如，在开发 Web 页面过程中，当你点击按钮，出现一个弹窗的时候，发现
  弹窗标题没有对齐，这时候你修改 CSS 样式，然后保存，在浏览器没有刷新的前提下，
  标题样式发生了改变。感觉就像在 Chrome 的开发者工具中直接修改元素样式一样。

====编程题：对象扁平化
{
  "a": {
    "b": {
      "c": {
        "d": 1
      }
    }
  },
  "aa": 2,
  "c": [
    1,
    2
  ]
} =>
{ 'a.b.c.d': 1, aa: 2, 'c[0]': 1, 'c[1]': 2 }

链接：https://juejin.cn/post/6844904137495150599
https://juejin.cn/post/6989103878436290568
/**
* 对象扁平化
* 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
* 示例：
* var input = {
* a: 1,
* b: [ 1, 2, { c: true }, [ 3 ] ],
* d: { e: 2, f: 3 },
* g: null,
* }
* var output = flatten(input);
* output如下
* {
* "a": 1,
* "b[0]": 1,
* "b[1]": 2,
* "b[2].c": true,
* "b[3][0]": 3,
* "d.e": 2,
* "d.f": 3,
* // "g": null, 值为null或者undefined，丢弃
* }
*/
解答：
let result = {};
var flatten = (data, key) => {
    if (data instanceof Array) {
        data.forEach((param, index) => {
            if (param instanceof Object) {
                flatten(param, `${key}[${index}]`);
            } else {
                result[`${key}[${index}]`] = param;
            }
        });
    } else if (data instanceof Object) {
        for (var itemKey in data) {
            const itemValue = data[itemKey];
            if (itemValue instanceof Object) {
                flatten(itemValue, itemKey);
            } else if (itemValue) {
                if (key) {
                    result[`${key}.${itemKey}`] = flatten(itemValue, itemKey);
                } else {
                    result[itemKey] = itemValue;
                }
            }
        }
    } else {
        return data;
    }
};
flatten(input);
console.log(result)


10.promiseAll和allSeleted
Promise.all = function(promises) {
    const values = []
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                count++
                values[index] = res
                if (count === promises.length) {
                    resolve(values)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

Promise.allSeleted = function(promises) {
    let count = 0
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = {
                    value: res,
                    reason: null,
                }
            }, err => {
                result[index] = {
                    value: null,
                    reason: err,
                }
            }).finally(() => {
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            })
        })
    })
}

链接：https://juejin.cn/post/6896810576778166280
any与all相反
promise.any
function any(promises) {
  return new Promise((resolve, reject) => {
      let count = 0
      promises.forEach((promise) => {
          promise.then(val => {
              resolve(val)
          }, err => {
              count++
              if (count === promises.length) {
                  reject(new AggregateError('All promises were rejected'))
              }
          })
      })
  })
}
promise.race = function race(promises) {
  return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
          if (promise instanceof MyPromise) {
              promise.then(res => {
                  resolve(res)
              }, err => {
                  reject(err)
              })
          } else {
              resolve(promise)
          }
      })
  })
}
//   https://juejin.cn/post/7023906112843808804

Promise.prototype.finally = function(callback) {
  return this.then(res => {
    callback()
    return res
  }, err => {
    callback()
    throw err
  })
}
promise.finally

防抖
function debounce(fn, wait = 50) {
  //初始化一个定时器
  let timer
  return function() {
      //如果timer存在就将其清除
      if(timer) {
          clearTimeout(timer)
      }
      //重置timer
      timer = setTimeout(() => {
          //将入参绑定给调用对象
          fn.apply(this, arguments)
      }, wait)
  }
}

实现一个repeat重复执行函数
传入一个方法，然后每隔一段时间执行一次，执行n次
//每隔2s输出一次helloworld，共输出4次 const repeatFunc = repeat(console.log, 4, 2000); //repeatFunc("helloworld")

function repeat(fn, n, interval) {
    return (...args) => {
      let timer
      let counter = 0
      timer = setInterval(() => {
        counter++
        fn.apply(this, args)
        if (counter === n) {
          clearInterval(timer)
        }
      }, interval);
    }
  }

  const repeatFn = repeat(console.log, 4, 2000)
  repeatFn('helloworld')

  实现一个函数将下划线命名转化成驼峰命名法
  function formatHump(str) {
    if (typeof str !== "string") return false
    //将str分割成数组
    str = str.split("_") // ["get", "element", "by", "id"]
    if (str.length > 1) {
      // 从1开始for循环遍历,因为数组第一个字符串的首字母不需要转大写
      // 将数组里的每一个字符串第一个字母变成大写
      for (let i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)
      }
      //将数组拼接回字符串
      return str.join("")
    }
  }

  console.log(formatHump("get_element_by_id"))  //getElementById

1.艺术喵 2 年前端面试心路历程********************************
https://juejin.cn/post/6844904113302568973#heading-34
艺术喵 2 年前端面试心路历程（字节跳动、YY、虎牙、BIGO）| 掘金技术征文
2.再来一打Webpack面试题
https://juejin.cn/post/6844904094281236487
3.上海莉莉丝、米哈游、B站、小红书、得物等互联网公司前端面试总结
https://juejin.cn/post/6896810576778166280
4.阿里巴巴、今日头条、拼多多以及腾讯等一线互联网公司面试总结
https://juejin.cn/post/6905913905152065544

实现 Promise.all  https://github.com/lgwebdream/FE-Interview/issues/30
1) 核心思路
①接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
②这个方法返回一个新的 promise 对象，
③遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
④参数所有回调成功才是成功，返回值数组与参数顺序一致
⑤参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。
2）实现代码
一般来说，Promise.all 用来处理多个并发请求，也是为了页面数据构造的方便，将一个页面所用到的在不同接口的数据一起请求过来，不过，如果其中一个接口失败了，
多个请求也就失败了，页面可能啥也出不来，这就看当前页面的耦合程度了～

function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if(!Array.isArray(promises)){
        throw new TypeError(`argument must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value=>{
        resolvedCounter++;
        resolvedResult[i] = value;
        if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult)
          }
      },error=>{
        return reject(error)
      })
    }
  })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})

//================================================================
redux-saga 和 mobx 的比较
1）状态管理
  redux-sage 是 redux 的一个异步处理的中间件。
  mobx 是数据管理库，和 redux 一样。
2）设计思想
  redux-sage 属于 flux 体系， 函数式编程思想。
  mobx 不属于 flux 体系，面向对象编程和响应式编程。 
3）主要特点
  redux-sage 因为是中间件，更关注异步处理的，通过 Generator 函数来将异步变为同步，
  使代码可读性高，结构清晰。action 也不是 action creator 而是 pure action，
  在 Generator 函数中通过 call 或者 put 方法直接声明式调用，并自带一些方法，
  如 takeEvery，takeLast，race等，控制多个异步操作，让多个异步更简单。
  
  mobx 是更简单更方便更灵活的处理数据。 Store 是包含了 state 和 action。state
  包装成一个可被观察的对象， action 可以直接修改 state，
  之后通过 Computed values 将依赖 state 的计算属性更新 ，
  之后触发 Reactions 响应依赖 state 的变更，输出相应的副作用 ，但不生成新的 state。
4）数据可变性
  redux-sage 强调 state 不可变，不能直接操作 state，
  通过 action 和 reducer 在原来的 state 的基础上返回一个新的
  state 达到改变 state 的目的。
  mobx 直接在方法中更改 state，同时所有使用的 state 都发生变化，不生成新的 state。
5）写法难易度
  redux-sage 比 redux 在 action 和 reducer 上要简单一些。
  需要用 dispatch 触发 state 的改变，需要 mapStateToProps 订阅 state。
  mobx 在非严格模式下不用 action 和 reducer，在严格模式下需要在 action 中修改
  state，并且自动触发相关依赖的更新。
6）使用场景
  redux-sage 很好的解决了 redux 关于异步处理时的复杂度和代码冗余的问题，
  数据流向比较好追踪。但是 redux 的学习成本比 较高，代码比较冗余，
  不是特别需要状态管理，最好用别的方式代替。
  mobx 学习成本低，能快速上手，代码比较简洁。但是可能因为代码编写的原因和数据更新时相对黑盒，
  导致数据流向不利于追踪。

实现一个redux【编程】
https://blog.csdn.net/sinat_17775997/article/details/90522536

git rebase什么作用【描述】
当需要保留详细的合并信息的时候建议使用git merge，特别是需要将分支合并进入master分支时；
当发现自己修改某个功能时，频繁进行了git commit提交时，发现其实过多的提交信息没有必要时，
可以尝试git rebase。

react的usememo原理【描述】 https://cloud.tencent.com/developer/article/1784501

说一下 react-fiber

手写发布订阅

手写数组转树
https://github.com/lgwebdream/FE-Interview/issues/35

compoonse.js 用于组合传入的函数
export default function compose(...funs) {
  if(funs.length === 0) {
    return arg => arg
  }
  if(funcs.length ===1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

compose(f,g,h)等价于return(...args) => f(g(h(...args)))

******** 阿里腾讯面试梳理&个人成长经历分享
https://juejin.cn/post/6945625394154307592
4
Vite是什么？
Vite(读音类似于[weɪt]，法语，快的意思) 是一个由原生 ES Module 驱动的
Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，
在生产环境下基于 Rollup 打包。
Vite 特点
Lightning fast cold server start  - 闪电般的冷启动速度
Instant hot module replacement (HMR) - 即时热模块更换（热更新）
True on-demand compilation - 真正的按需编译
作者：字节跳动商业化技术团队
链接：https://juejin.cn/post/6937847568114122760

浅谈 instanceof 和 typeof 的实现原理
https://juejin.cn/post/6844903613584654344
首先获取类型的原型
然后获得对象的原型
然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
          return false;
      }
      if (leftVaule === rightProto) {
          return true
      } 
      leftVaule = leftVaule.__proto__
  }
}

总结
简单来说，我们使用 typeof 来判断基本数据类型是 ok 的， 
不过需要注意当用 typeof 来判断 null 类型时的问题，
如果想要判断一个对象的具体类型可以考虑用 instanceof，但是 instanceof
也可能判断不准确，比如一个数组，他可以被 instanceof 判断为 Object。
所以我们要想比较准确的判断对象实例的类型时，
可以采取 Object.prototype.toString.call 方法

========= 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

一文搞懂V8引擎的垃圾回收 https://juejin.cn/post/6844904016325902344

========= 如何避免内存泄漏
尽可能少地创建全局变量 手动清除定时器 少用闭包 清除DOM引用  弱引用

========= https://www.cnblogs.com/xiaohuochai/p/5777186.html 
requestAnimationFrame 采用系统时间间隔，最佳绘制。
使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
计时器一直是javascript动画的核心技术。
而编写动画循环的关键是要知道延迟时间多长合适。一方面，循环间隔必须足够短，这样才能让不同的动画效果显得平滑流畅；另一方面，
循环间隔还要足够长，这样才能确保浏览器有能力渲染产生的变化

　　大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次。
大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，
因为即使超过那个频率用户体验也不会有提升。因此，最平滑动画的最佳循环间隔是1000ms/60，
约等于16.6ms

　　而setTimeout和setInterval的问题是，它们都不精确。
它们的内在运行机制决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队
列中以等待执行的时间。
如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行

　　requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，
造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，
让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果
【1】requestAnimationFrame会把每一帧中的所有DOM操作集中起来，
在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
【2】在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，
这当然就意味着更少的CPU、GPU和内存使用量
【3】requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会
自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销
链接：https://juejin.cn/post/6844903796758282253

2. ES6之前的模块引入方式和区别
ES6之前模块引入主要是CommonJS和AMD两种。
然后学长让说明一下CommonJs和ES6模块引入的区别：

首先，CommonJS导出值是浅拷贝，一旦输出某个值，
模块内部的变化就影响不到这个值。而ES6导出是采用实时绑定的方式，
是将其内存地址导出，导入是动态地加载模块取值，并且变量总是绑定其所在的模块，不能重新赋值。
ES6模块化导入是异步导入，CommonJS导入是同步导入。
这跟ES6模块通常用于web端，而CommonJS用于服务器端有关。
CommonJS导入支持动态导入require(`${path}/xx.js`)，
ES6模块化导入不支持，目前已有草案。
ES6模块化会编译成require/exports来执行的。
链接：https://juejin.cn/post/6844904125893722126

1. 进程和线程
简要说下操作系统的进程和线程
线程是程序执行的最小单位，而进程是操作系统分配资源的最小单位。
一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线。
进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间。
调度和切换：线程上下文切换比进程上下文切换要快得多。
链接：https://juejin.cn/post/6844904125893722126

遍历一个二叉树所有节点，返回它们的和
function numSum(root) {
  if(!root) return 0;
  return root.val + numSum(root.left) + numSum(root.right);
}

tree shaking的原理是什么?https://segmentfault.com/a/1190000038962700
ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码

common.js 和 es6 中模块引入的区别？
1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
3、CommonJs 是单个值导出，ES6 Module可以导出多个
4、CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
5、CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined

02 | 为什么 React 要用 JSX？
经过以上的梳理，我们可以尝试答题了。
在回答问题之前，我首先解释下什么是 JSX 吧。
JSX 是一个 JavaScript 的语法扩展，结构类似 XML。
JSX 主要用于声明 React 元素，但 React 中并不强制使用 JSX
。即使使用了 JSX，也会在构建过程中，通过 Babel 插件编译为 React.createElement。
所以 JSX 更像是 React.createElement 的一种语法糖。
所以从这里可以看出，React 团队并不想引入 JavaScript 本身以外的开发体系。
而是希望通过合理的关注点分离保持组件开发的纯粹性。
接下来与 JSX 以外的三种技术方案进行对比。
首先是模板，React 团队认为模板不应该是开发过程中的关注点，因为引入了模板语法、
模板指令等概念，是一种不佳的实现方案。

其次是模板字符串，模板字符串编写的结构会造成多次内部嵌套，使整个结构变得复杂，
并且优化代码提示也会变得困难重重。

最后是 JXON，同样因为代码提示困难的原因而被放弃。

所以 React 最后选用了 JSX，因为 JSX 与其设计思想贴合，不需要引入过多新的概念，
对编辑器的代码提示也极为友好。

https://juejin.cn/user/3087084380239341/posts  算法

function createStore(reducer) {
  let state;
  let listeners=[];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state=reducer(state,action);
    listeners.forEach(l=>l());
  }

  function subscribe(listener) {
      listeners.push(listener);
      return function () {
          const index=listeners.indexOf(listener);
          listeners.splice(inddx,1);
      }
  }
  dispatch({});
  return {
      getState,
      dispatch,
      subscribe
  }
}
https://juejin.cn/post/6847009771355127822

你不知道的React 和 Vue 的20个区别【面试必备】
小程序
app.onLaunch-->app.onShow-->page1.onLoad-->page1.onShow-->page1.onReady
(打开程序，第一个页面page1加载完成)
-->page1.onHide-->page2.onLoad-->page2.onShow-->page2.onReady 
(从第1个页面打开第2个页面)
-->page2.onUnload-->page1.onShow-->...-->app.onUnload 
(关闭page2，返回page1...退出小程序)

throttle（节流）https://juejin.cn/post/6875152247714480136

const throttle = (fn, time) => {
  let flag = true;
  return function() {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true
    }, time)
  } 
}       