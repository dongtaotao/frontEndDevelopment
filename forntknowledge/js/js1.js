
剑指offer（js版）https://blog.csdn.net/duyujian706709149/article/details/97368743 
剑指offer--JavaScript版 https://www.cnblogs.com/chuncode/p/13772632.html 

字节跳动
https://leetcode-cn.com/explore/interview/card/bytedance/242/string/ 

字节跳动 牛客网
https://www.nowcoder.com/company/home/code/665?codeType=1

offer专题
https://juejin.cn/events/all

https://github.com/daydaylee1227/Blog/blob/master/%E7%AE%97%E6%B3%95/%E9%93%BE%E8%A1%A8/leetcode-K%20%E4%B8%AA%E4%B8%80%E7%BB%84%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.js
链表

牛客网华为机试在线训练JavaScript版解答
https://blog.csdn.net/qq_25073545/article/details/80489694

牛客网华为机试考试java_牛客网华为机试题（JavaScript）
https://blog.csdn.net/weixin_34803977/article/details/114524607?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242

牛客网华为机试题（JavaScript）
https://blog.csdn.net/qq_25481047/article/details/104543214?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

牛客网华为机试在线训练JavaScript版解答

https://www.daimajiaoliu.com/daima/47970fc3d9003f8

中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂
https://juejin.cn/post/6844903801153945608

https://juejin.cn/post/6993139082054336548  hooks

JSBridge实现 —— Web端调用Native端代码
https://blog.poetries.top/FE-Interview-Questions/excellent-docs/10-%E7%A7%BB%E5%8A%A8%E5%A4%9A%E7%AB%AF%E5%BC%80%E5%8F%91.html#_6-6-jsbridge%E5%AE%9E%E7%8E%B0-web%E7%AB%AF%E8%B0%83%E7%94%A8native%E7%AB%AF%E4%BB%A3%E7%A0%81-%E6%8B%A6%E6%88%AAurl-schema

//================================================================
问题: 随着应用变得越来越庞大，整个更新渲染的过程开始变得吃力，大量的组件渲染会导致主进程
长时间被占用，导致一些动画或高频操作出现卡顿和掉帧的情况。而关键点，便是 同步阻塞。
在之前的调度算法中，React 需要实例化每个类组件，生成一颗组件树，使用 同步递归 的方
式进行遍历渲染，而这个过程最大的问题就是无法 暂停和恢复。

解决方案: 解决同步阻塞的方法，通常有两种: 异步 与 任务分割。而 React Fiber 便是为了
实现任务分割而诞生的。
在 Fiber 中，reconciliation 阶段进行了任务分割，涉及到 暂停 和 重启，因此可能会导致
reconciliation中的生命周期函数在一次更新渲染循环中被 多次调用 的情况，产生一些意外错误。 

//===========================================================================
Mobx和Redux区别浅析 https://juejin.cn/post/6924572729886638088
编程思维方式的不同 Redux更多的是遵循函数式编程（Functional Programming, FP） 
思想，而Mobx则更多从面相对象角度考虑问题。Mobx是一个透明函数响应式编程
（Transparently Functional Reactive Programming，TFRP）的状态管理库，它
使得状态管理简单可伸缩

store的区别
store是应用管理数据的地方，在Redux应用中，我们总是将所有共享的应用数据集中
在一个大的store中，而Mobx则通常按模块将应用状态划分，在多个独立的store中管理。

储存数据形式区别
Redux默认以JavaScript原生对象形式存储数据，而Mobx使用可观察对象：
Redux需要手动追踪所有状态对象的变更；
Mobx中可以监听可观察对象，当其变更时将自动触发监听；

操作对象方式不同
Redux状态对象通常是不可变的（Immutable）：
switch (action.type) {
  case REQUEST_POST:
  	return Object.assign({}, state, {
      post: action.payload.post
  	});
  default:
    retur nstate;
}

我们不能直接操作状态对象，而总是在原来状态对象基础上返回一个新的状态对象，
这样就能很方便的返回应用上一状态；而Mobx中可以直接使用新值更新状态对象。

Mobx优缺点总结
优点
学习成本少：Mobx基础知识很简单，学习了半小时官方文档和示例代码就搭建了新项目实例；
  而Redux确较繁琐，流程较多，需要配置，创建store，编写reducer，action，如果涉及异步任务，
  还需要引入redux-thunk或redux-saga编写额外代码，Mobx流程相比就简单很多，并且不需要额外异步处理库；
  面向对象编程：Mobx支持面向对象编程，我们可以使用@observable and @observer，
  以面向对象编程方式使得JavaScript对象具有响应式能力；而Redux最推荐遵循函数式编程，当然Mobx也支
  持函数式编程；
模版代码少：相对于Redux的各种模版代码，如，actionCreater，reducer，saga／thunk等，
  Mobx则不需要编写这类模板代码；

缺点
过于自由：Mobx提供的约定及模版代码很少，这导致开发代码编写很自由，
  如果不做一些约定，比较容易导致团队代码风格不统一，所以当团队成员较多时，确实需要添加一些约定；
可拓展，可维护性：也许你会担心Mobx能不能适应后期项目发展壮大呢？确实Mobx更适合用在中小型项目中，
但这并不表示其不能支撑大型项目，关键在于大型项目通常需要特别注意可拓展性，可维护性，相比而言，
规范的Redux更有优势，而Mobx更自由，需要我们自己制定一些规则来确保项目后期拓展，维护难易程度；
https://juejin.cn/post/6924572729886638088

//===========================================================================
React-Redux: 结合 React 使用；
Provider: 将 store 通过 context 传入组件中；
connect: 一个高阶组件，可以方便在 React 组件中使用 Redux；
将store通过mapStateToProps进行筛选后使用props注入组件
根据mapDispatchToProps创建方法，当组件调用时使用dispatch触发对应的action

Reducer 的拆分与重构:
随着项目越大，如果将所有状态的 reducer 全部写在一个函数中，将会 难以维护；
可以将 reducer 进行拆分，也就是 函数分解，最终再使用combineReducers()进行重构合并；

异步 Action: 由于 Reducer 是一个严格的纯函数，因此无法在 Reducer
中进行数据的请求，需要先获取数据，再dispatch(Action)即可，下面是三种不同的异步实现:

redex-thunk
redux-saga
redux-observable
链接：https://juejin.cn/post/6844903801153945608
//===========================================================================
简述:
在 React V16 将调度算法进行了重构， 将之前的 stack reconciler 重构成新版的
fiber reconciler，变成了具有链表和指针的 单链表树遍历算法。通过指针映射，
每个单元都记录着遍历当下的上一步与下一步，从而使遍历变得可以被暂停和重启。
这里我理解为是一种 任务分割调度算法，主要是 将原先同步更新渲染的任务分割
成一个个独立的 小任务单位，根据不同的优先级，将小任务分散到浏览器的空闲时间 
执行，充分利用主进程的事件循环机制。
链接：https://juejin.cn/post/6844903801153945608

//===========================================================================
画一条 0.5px 的线
  采用 meta viewport 的方式
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  采用 border-image 的方式
  采用 transform: scale()的方式
//===========================================================================
10.文件指纹是什么？怎么用？
  文件指纹是打包后输出的文件名的后缀。
  Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
  Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
  Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变
https://juejin.cn/post/6844904094281236487
//===========================================================================
再来一打Webpack面试题
https://juejin.cn/post/6844904094281236487
//===========================================================================
链表的9个基本操作
https://juejin.cn/post/6850418120755494925#heading-4
合并两个有序链表⭐
var mergeTwoLists = function (l1, l2) {
  let newNode = new ListNode('start'),  // 做题套路,头节点
    tmp = newNode;    // tmp作为哨兵节点    
    while (l1 && l2) {   // 循环结束的条件就是两者都要为非null
      if(l1.val >= l2.val) {
          tmp.next = l2
          l2 = l2.next
      }else{
          tmp.next = l1
          l1 = l1.next
      }
      tmp = tmp.next    // 哨兵节点更新指向下一个节点
    }
  // 最后需要判断哪个链表还存在非null
  tmp.next = l1 == null ? l2 : l1;
  return newNode.next;
};

反转链表⭐
var reverseList = function (head) {
  if(!head) return null
  let prev = null,
      curr = head
  while( curr != null) {
      let next = curr.next;
      curr.next = prev
      prev = curr
      curr = next
  }
  return prev
};

区间反转⭐⭐//================

返回倒数第k个节点
var kthToLast = (head, k) => {
  let pre = head;
  let last = head;
  let pos = k;
  while(k> 0) {
    last = last.next;
    k--
  }
  while(last !==null) {
    last = last.next;
    pre = pre.next;
  }
  return pre.val
}
//===========================================================================
这里有一篇文章讲的是 requestAnimationFrame：
http://www.cnblogs.com/xiaohuochai/p/5777186.html
  与 setTimeout 和 setInterval 不同，requestAnimationFrame 不需要设置时间间隔，
  大多数电脑显示器的刷新频率是 60Hz，大概相当于每秒钟重绘 60 次。大多数浏览器都
  会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也
  不会有提升。因此，最平滑动画的最佳循环间隔是 1000ms/60，约等于 16.6ms。
  RAF 采用的是系统时间间隔，不会因为前面的任务，不会影响 RAF，但是如果前面的
  任务多的话，会响应 setTimeout 和 setInterval 真正运行时的时间间隔。
  特点：
  （1）requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回
  流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率。
  （2）在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然
  就意味着更少的 CPU、GPU 和内存使用量
  （3）requestAnimationFrame 是由浏览器专门为动画提供的 API，在运行时浏览器会自动
  优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了
  CPU 开销。

//===========================================================================
一劳永逸」送你21道高频JavaScript手写面试题
https://juejin.cn/post/6855129007852093453

防抖
const debounce = (fn, delay) => {
  let time = null;
  return (...args) => {
    if(time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

数组去重
let unqit = (args) =>[...new Set(arge)]
// kelihua 
const curry = (fn, ...args) => {
  if(args.length > fn.length) {
    return fn(...args)
  } else {
    return (...argul) => {
      return curry(fn, ...argul, ...args)
    }
  }
}
//===========================================================================
深拷贝
function deepClone(obj, map = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  if (obj == null || typeof obj != 'object') return obj;
  if (map.has(obj)) {
    return map.get(obj);
  }
  let t = new obj.constructor();
  map.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key], map);
    }
  }
  return t;
}
//测试用例
let obj = {
  a: 1,
  b: {
      c: 2,
      d: 3
  },
  d: new RegExp(/^\s+|\s$/g)
}

let clone_obj = deepClone(obj)
obj.d = /^\s|[0-9]+$/g
console.log(clone_obj)
console.log(obj)

//===========================================================================
let isType = (type) => (obj) => Object.prototype.toString.call(obj) === `[object ${type}]`

let instance = (left, right) => {
  let leftP = left.__proto__;
  let rightP = right.prototype;
  while(true) {
    if(leftP === null) {
      return false
    }
    if(leftP === rightP) {
      return true;
    }

    leftP = leftP.__proto__;
  }
}

function sellp(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn)
    },time)
  })
}

function Father(name) {
  this.name = name;
}

Father.prototype.go = function() {}

function Son(name, age) {
  Father.call(this, name);
  this.age = age;
}

class Father{
  constructor() {

  }
}
//===========================================================================
requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之
前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在
浏览器重绘之前调用。

//===========================================================================
 redux 中间件
参考回答：
中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action ->
middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。
常见的中间件：redux-logger：提供日志输出；redux-thunk：处理异步操作；redux-promise：
处理异步操作；actionCreator 的返回值是 promise
 redux 有什么缺点
参考回答：
1.一个组件所需要的数据，必须由父组件传过来，而不能像 flux 中直接从 store 取。
2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新
render，可能会有效率影响，或者需要写复杂的 shouldComponentUpdate 进行判断。
 React 组件的划分业务组件技术组件？
参考回答：
根据组件的职责通常把组件分为 UI 组件和容器组件。UI 组件负责 UI 的呈现，容器组
件负责管理数据和逻辑。两者通过

//===========================================================================
原型
在js中，我们通常会使用构造函数来创建一个对象，每一个构造函数的内部都有一个prototype属性，
这个属性对应的值是一个对象，这个对象它包含了可以由该构造函数的所有实例都共享的属性和方法，我们把它称为原型。
原型分为显示原型和隐式原型，一般称prototype为显示原型，__proto__称为隐式原型。
一般而言，__proto__这个指针我们应该获取这个值，但是浏览器中都实现了 __proto__ 属性来让我们访问这个属性，
但是我们最好不要使用这个属性，因为它不是规范中规定的。
ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。

举个例子
为什么我们新建的对象可以使用toString()方法，这是因为我们访问一个对象的属性时，首先会在这个对象身上找，
如果没有的话，我们会通过这个对象的__proto__找到该对象的原型，然后在这个原型对象中找，这个原型对象又没有的话，
就这样子通过一直找下去，这也就是原型链概念。直到找到原型链的尽头也就是Object.prototype。
作者：TianTianUp
链接：https://juejin.cn/post/6864398060702760968

//============================================================================
function quickSort(arr) {
  if(arr.length <=1) return arr;
  let left = [];
  let reigh = [];
  let index = Math.floor(arr/2);
  let midd = arr.splice(index, 1)[0];
  for(let i=0;i< arr.length; i++) {
    if(arr[i]< midd) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...left, midd, ...right]
}

//===========================================================================
function currying(fn, ...args) {
  if (fn.length > args.length) {
      return (...newArgs) => currying(fn, ...args, ...newArgs)
  } else {
      return fn(...args)
  }
}

//===========================================================================
Symbol 指的是独一无二的值
使用Symbol来作为对象属性名(key) 
使用Symbol来替代常量
使用Symbol定义类的私有属性/方法 

//===========================================================================
reduce实现map
var arr = [ 1,2,3];
var arr2 = arr.map( item => item*2)
arr2 // [2,4,6]

var arr = [1,2,3]
var arr2 = arr.reduce((acc,cur) => {
  cur = cur * 2
  acc.push(cur)
},[])

//===========================================================================
最大子序和
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

var maxSubArray = function (nums) {
    let sum = max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (sum > 0) {
            //如果之前的的和大于0，那么可以继续累加
            sum += nums[i];
        } else {
            //否则的话之前是负数，加了只会更小，不如从新的开始
            sum = nums[i];
        }
        max = Math.max(max, sum);
    }
    return max;
}

525. 连续数组
给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，
并返回该子数组的长度。
示例 1:
输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
示例 2:
输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
function test(arr) {
    let len = arr.length;
    let map = new Map();
    let count = 0;
    let res = 0;
    //[0] -> 0
    for(let i=0; i<len; i++) {
        count += arr[i] == 1 ? 1 : -1;
        if(map.has(count)) {
            res = Math.max(res,i-map.get(count));
        }else {
            map.set(count,i);
        }
    }
    return res;
}
console.log(test([0, 0, 0,1, 1, 0,1, 0, 0]));
链接：https://juejin.cn/post/7017655711291146253
链接：https://leetcode-cn.com/problems/contiguous-array
链接：https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/

//===========================================================================
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

//===========================================================================
69 事件总线 | 发布订阅模式
class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit(name) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn();
      }
    }
  }
  emit(name, once = false) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn();
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

// 测试
const eventBus = new EventEmitter()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }
eventBus.on('task', task1)
eventBus.on('task', task2)

setTimeout(() => {
  eventBus.emit('task')
}, 1000)

JS算法之深度优先遍历(DFS)和广度优先遍历(BFS)
https://segmentfault.com/a/1190000018706578
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
function deepFirstSearch(node,nodeList) {
  if (node) {
    nodeList.push(node);
    var children = node.children;
    for (var i = 0; i < children.length; i++)
    //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
    deepFirstSearch(children[i],nodeList);
  }
  return nodeList;
}

function deepFirstSearch(node) {
    var nodes = [];
    if (node != null) {
        var stack = [];
        stack.push(node);
        while (stack.length != 0) {
        var item = stack.pop();
        nodes.push(item);
        var children = item.children;
        for (var i = children.length - 1; i >= 0; i--)
            stack.push(children[i]);
        }
    }
    return nodes;
}

//===========================================================================
1.类的所有属性默认都是 public，当然也可以直接申明出来
2. 私有成员-private
私有成员只能被类本身调用，而不能被类的实例调用，有不能被子类调用
3. 受保护成员-protect
受保护成员只能在类及其子类中访问， 而不能再类的实例中访问

抽象类: 只能被继承，不能被实例化的类
常用设计模式
1.工厂模式
2.单例模式
3.装饰器模式
4.适配器模式
5.代理模式
6.观察者模式

在 ES6 中，提供了专门以代理角色出现的代理器 —— Proxy。它的基本用法如下：
const proxy = new Proxy(obj, handler)

单例模式的实现思路
// 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    getName(){
        console.log(this.name);
    }
    getInstance(name){
        if(!this.instance){
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}

const singleton = new Singleton();
const a = singleton.getInstance('a');
const b = singleton.getInstance('b');

console.log(a);
console.log(b);
console.log(a === b);

//===========================================================================
Promise.allSettled1. 只有等到所有实例都返回结果，不管是fulfilled还是rejected，
实例才会结束2. 有时候，我们不关心异步请求的结果，只关心所有的请求有没有结束即可使用added in ES2020
Promise.all1.只要任意一个 promise 失败，则返回失败的 promise .
 2.当所有异步操作都成功后，才返回 promise,返回值组成一个数组added in ES2015

 Promise.race只要任意一个 promise 的状态改变(不管成功 or 失败)，那么就返回那个 promiseadded
 Promise.any1.只要其中任意一个 promise 成功，就返回那个已经成功的 promise。
  如果所有的 promises 都失败/拒绝，就返回一个失败的 promise

//===========================================================================
介绍下 Set、Map、WeakSet 和 WeakMap 的区别
Set——对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
WeakSet——成员都是对象；成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏；
Map——本质上是键值对的集合，类似集合；可以遍历，方法很多，可以跟各种数据格式转换。
WeakMap——只接受对象最为键名（null 除外），不接受其他类型的值作为键名；键名是弱引用，键值可以是任意的，
键名所指向的对象可以被垃圾回收，此时键名是无效的；不能遍历，方法有 get、set、has、delet

//===========================================================================
13 Reflect是什么，有什么作用？
Reflect是ES6引入的一个新的对象，他的主要作用有两点，一是将原生的一些零散分布在Object、
Function或者全局函数里的方法(如apply、delete、get、set等等)，统一整合到Reflect上，
这样可以更加方便更加统一的管理一些原生API。其次就是因为Proxy可以改写默认的原生API，
如果一旦原生API别改写可能就找不到了，所以Reflect也可以起到备份原生API的作用，使得即使原
生API被改写了之后，也可以在被改写之后的API用上默认的API

//===========================================================================
generator 原理 生成器
Generator 是 ES6中新增的语法，和 Promise 一样，都可以用来异步编程
// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  let a = 1 + 2;
  yield 2;
  yield 3;
}
let b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }

//===========================================================================l/，
18 async函数是什么，有什么作用？
async函数可以理解为内置自动执行器的Generator函数语法糖，它配合ES6的Promise近乎完美的实现了异
步编程解决方案
//===========================================================================

ES6的class类必须用new命令操作，而ES5的构造函数不用new也可以执行。
ES6的class类不存在变量提升，必须先定义class之后才能实例化，不像ES5中可以将构造函数写在实例化之后。
ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面。ES6 的继
承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造
函数修改this。

///ES5
function ES5Fun (x, y) {
	this.x = x;
	this.y = y;
}
ES5Fun.prototype.toString = function () {
	return '(' + this.x + ', ' + this.y + ')';
}
var p = new ES5Fun(1, 3);
p.toString();
Object.keys(ES5Fun.prototype); //['toString']

//ES6
class ES6Fun {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
	toString () {
		return '(' + this.x + ', ' + this.y + ')';
	}
}
Object.keys(ES6Fun.prototype); //[]

//===========================================================================l/，
import引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。
import引入export导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值

//===========================================================================l/，
31 ES5 / ES6 的继承除了写法以外还有什么区别
ES5 的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到 this 上（Parent.apply(this)）
ES6 的继承机制完全不同，实质上是先创建父类的实例对象 this（所以必须先调用父类的 super()方法），
然后再用子类的构造函数修改 this。
ES5 的继承时通过原型或构造函数机制来实现。
ES6 通过 class 关键字定义类，里面有构造方法，类之间通过 extends 关键字实现继承。
子类必须在 constructor 方法中调用 super 方法，否则新建实例报错。因为子类没有自己的 this 对象，
而是继承了父类的 this 对象，然后对其进行加工。如果不调用 super 方法，子类得不到 this 对象。
注意 super 关键字指代父类的实例，即父类的 this 对象。
注意：在子类构造函数中，调用 super 后，才可使用 this 关键字，否则报错。
function 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量

//===========================================================================l/，
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

https://blog.poetries.top/FE-Interview-Questions/docs/simply.html#_15-promise

#6 介绍一下 Tree Shaking
对tree-shaking的了解
作用：
  它表示在打包的时候会去除一些无用的代码
原理：
ES6的模块引入是静态分析的，所以在编译时能正确判断到底加载了哪些模块
分析程序流，判断哪些变量未被使用、引用，进而删除此代码
特点：
在生产模式下它是默认开启的，但是由于经过babel编译全部模块被封装成IIFE，
它存在副作用无法被tree-shaking掉
可以在package.json中配置sideEffects来指定哪些文件是有副作用的。它有两种值，
一个是布尔类型，如果是false则表示所有文件都没有副作用；如果是一个数组的话，
数组里的文件路径表示改文件有副作用
rollup和webpack中对tree-shaking的层度不同，例如对babel转译后的class，如果babel的转译是宽松模式下的话(也就是loose为true)
webpack依旧会认为它有副作用不会tree-shaking掉，而rollup会。这是因为rollup有程序流分析的功能，可以更好的判断代码是否真正会产生副作用。
原理

ES6 Module 引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码
//===========================================================================l/，
7 介绍一下 webpack scope hosting
作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；
https://blog.poetries.top/FE-Interview-Questions/docs/simply.html#_6-%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-tree-shaking

//===========================================================================l/，
JSONP
JSONP 的原理很简单，就是利用 <script> 标签没有跨域限制的漏洞。通过 <script>
标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
  function jsonp(data) {
    console.log(data)
	}
</script>
JSONP 使用简单且兼容性不错，但是只限于 get 请求。
在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP，以下是简单实现

function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx', 'callback', function(value) {
  console.log(value)
})

//===========================================================================l/，
今天来做一道简单到让我一度怀疑题目本意的题目，题目来自leetcode LCP 01. 猜数字，题目描述如下：
小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。
他们一共进行三次这个游戏，请返回 小A 猜对了几次？
输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。
示例 1：
输入：guess = [1,2,3], answer = [1,2,3]
输出：3
解释：小A 每次都猜对了。
 var game = function (guess, answer) {
  let sum = 0;
  for(let i = 0;i < guess.length;i++ ){
      for(let j = 0;j < answer.length;j++){
          // 索引相同，且元素相同则自增
          if(guess[i] === answer[j] && i === j){
            sum++;
          };
      };
  };
  return sum;
};
https://www.cnblogs.com/echolun/p/13087354.html

//===========================================================================
CSRF防御措施：
1.token验证：刚才浏览器只自动上传cookie，没有自动上传token，token是注册成功后服务器会往本地存储token，
  在访问接口时携带token，如果是上图场景，只会自动上传cookie，不会上传token
2.Refer验证(refer是页面来源)：服务器判断页面来源是不是站点下页面
3.隐藏令牌(类似token)：隐藏http header头中，不会放在连接上，本质与token无区别，只是使用方式

XSS与CSRF对比区别
XSS是向页面注入JS运行，JS函数体做事情
CSRF是利用本身漏洞帮我执行接口
方式不一样，CSRF依赖用户登陆网站
链接：https://juejin.cn/post/6844903862646603789 


#总结
class是一个语法糖，其底层还是通过 构造函数 去创建的。
类的所有方法都定义在类的prototype属性上面。
静态方法：在方法前加static，表示该方法不会被实例继承，而是直接通过类来调用。
静态属性：在属性前加static，指的是 Class 本身的属性，而不是定义在实例对象（this）上的属性。
ES6的继承和ES5的继承区别在于：
ES5的继承，实质是先创建了子类的实例对象 this, 然后再将 父类的方法添加到 this上面
ES6的继承是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。
super
作为函数调用，代表父类的构造函数
作为对象调用，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。          