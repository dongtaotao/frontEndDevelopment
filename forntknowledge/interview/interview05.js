102. 二叉树的层序遍历 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
[
    [3],
    [9,20],
    [15,7]
]
var levelOrder = function(root) {
   if(!root)return[];
   const q=[[root,0]];
   const res=[];
   while(q.length){
       const [n,l]=q.shift()
       if(!res[l]){
           res[l]=[n.val]
       }else{
           res[l].push(n.val)
       }
       if(n.left)q.push([n.left,l+1])
       if(n.right)q.push([n.right,l+1])
   }
   return res
};


function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}


LRU（Least recently used） 算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。
(墨菲定律：越担心的事情越会发生)
https://leetcode-cn.com/problems/lru-cache/%EF%BC%8C%E8%80%83keep-alive%E7%AE%97%E6%B3%95%E7%9A%84%E6%97%B6%E5%80%99%E5%96%9C%E6%AC%A2%E9%97%AE/
实现 LRUCache 类：
get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；
如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
class LRU {
    constructor(max) {
        this.max = max
        this.cache = new Map()
    }
    get(key) {
        const { cache } = this
        const value = cache.get(key)
        if (!value) return -1
        cache.delete(key)
        cache.set(key, value)
        return value
    }
    set(key, value) {
        const { cache, max } = this
        if (cache.has(key)) {
            cache.delete(key)
        }
        if (cache.size === max) {
            cache.delete(cache.keys().next().value)
        }
        cache.set(key, value)
    }
}


computed：
computed是data属性的一个订阅者，它在初始化时候被data属性收集依赖，当computed依赖的data属性改变后，标记该computed为dirty，
即数据更改过，当渲染使用到computed时候，再计算出computed的值从而得到最新的正确的值。
watch：
在组件初始化时候，遍历所有的watch，对每个watch创建订阅者，绑定依赖的data属性，当data属性改变后发布给订阅者，然后会执行相应地回调。

props和data优先级
props >> methods >> data >> computed >> watch



什么是插槽？具名插槽？作用域插槽？原理是什么？

slot 又名插槽，是 Vue 的内容分发机制，插槽 slot 是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。slot 又分三类，
默认插槽，具名插槽和作用域插槽。

默认插槽：又名匿名插槽，当 slot 没有指定 name 属性值的时候，默认显示的插槽，一个组件内只允许有一个匿名插槽。
具名插槽：带有具体名字的插槽，也就是带有 name 属性的 slot，一个组件可以出现多个具名插槽。
作用域插槽：可以是匿名插槽，也可以是具名插槽，该插槽在渲染时，父组件可以使用子组件内部的数据。

实现原理：当子组件 vm 实例化时，获取到父组件传入的 slot 标签的内容，存放在 vm.$slot 中，默认插槽为 vm.$slot.default，
具名插槽为 vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到 slot 标签，使用 $slot 中的内容进行替换，
此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。


14、vue2 和vue 3的区别
Vue 3 是 Vue.js 的最新版本，与 Vue 2 相比，Vue 3 有以下主要的区别：

更快的渲染速度：Vue 3 引入了新的响应式系统，提高了性能，特别是在大型应用程序中。
更小的体积：Vue 3 的体积比 Vue 2 更小，这得益于新的编译器和优化的 Tree-Shaking。
更好的 TypeScript 支持：Vue 3 支持更好的 TypeScript 集成，提供了完整的类型定义文件，并改进了响应式 API，使其更好地适用于 TypeScript。
Composition API：Vue 3 引入了 Composition API，可以更好地组织代码，解决了 Vue 2 中代码复用和逻辑复杂性的问题。
Teleport 组件：Vue 3 引入了 Teleport 组件，可以方便地将组件插入到应用程序中的任何位置，而无需重构 DOM。
Suspense 组件：Vue 3 引入了 Suspense 组件，可以更好地处理异步数据和代码分割。
更好的自定义指令：Vue 3 改进了自定义指令的 API，使其更容易编写和测试自定义指令。
更好的可访问性支持：Vue 3 增加了更多的可访问性支持，包括 ARIA 和无障碍键盘导航。


const myCurrying = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => myCurrying(fn, ...args, ...args2);
  }
}

const add = (x, y, z) => {
  return x + y + z
}

const addCurry = myCurrying(add)
const sum1 = addCurry(1, 2, 3)
const sum2 = addCurry(1)(2)(3)

console.log(sum1, 'sum1');
console.log(sum2, 'sum2');


什么是 Vite
Vite是新一代的前端构建工具
Vite 核心原理

Vite其核心原理是利用浏览器现在已经支持ES6的import，碰见import就会发送一个HTTP请求去加载文件。
Vite启动一个 koa 服务器拦截这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再以ESM格式返回给浏览器。
Vite整个过程中没有对文件进行打包编译，做到了真正的按需加载，所以其运行速度比原始的webpack开发编译速度快出许多！

它具有以下特点：

快速的冷启动：采用No Bundle和esbuild预构建，速度远快于Webpack
高效的热更新：基于ESM实现，同时利用HTTP头来加速整个页面的重新加载，增加缓存策略：源码模块使用协商缓存，依赖模块使用强缓；因此一旦被缓存它们将不需要再次请求。
基于 Rollup 打包：生产环境下由于esbuild对css和代码分割并使用Rollup进行打包；

基于 ESM 的 Dev server

在Vite出来之前，传统的打包工具如Webpack是先解析依赖、打包构建再启动开发服务器，Dev Server 必须等待所有模块构建完成后才能启动，当我们修改了 bundle模块中的一个子模块， 整个 bundle 文件都会重新打包然后输出。项目应用越大，启动时间越长。



而Vite利用浏览器对ESM的支持，当 import 模块时，浏览器就会下载被导入的模块。先启动开发服务器，当代码执行到模块加载时再请求对应模块的文件，本质上实现了动态加载。

基于 ESM 的 HMR 热更新
所有的 HMR 原理：
目前所有的打包工具实现热更新的思路都大同小异：主要是通过WebSocket创建浏览器和服务器的通信监听文件的改变，当文件被修改时，服务端发送消息通知客户端修改相应的代码，客户端对应不同的文件进行不同的操作的更新。
Vite 的表现：

Vite 监听文件系统的变更，只用对发生变更的模块重新加载，这样HMR 更新速度就不会因为应用体积的增加而变慢



而 Webpack 还要经历一次打包构建。


所以 HMR 场景下，Vite 表现也要好于 Webpack。


作者：菜猫子neko
链接：https://juejin.cn/post/7166446028266733581
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



【3月面经】前端常考JS编程题
https://juejin.cn/post/7223046446941110328

21 写版本号排序的方法
题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
实现代码如下:
javascript复制代码arr.sort((a, b) => {
  let i = 0;
  const arr1 = a.split(".");
  const arr2 = b.split(".");

  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i];
    i++;
    if (s1 === undefined || s2 === undefined) {
      return arr2.length - arr1.length;
    }

    if (s1 === s2) continue;

    return s2 - s1;
  }
});
console.log(arr);

作者：前端鲨鱼哥
链接：https://juejin.cn/post/6968713283884974088
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}


function add(a ,b){
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength , 0);//"0009007199254740991"
  b = b.padStart(maxLength , 0);//"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0;
  let f = 0;   //"进位"
  let sum = "";
  for(let i=maxLength-1 ; i>=0 ; i--){
     t = parseInt(a[i]) + parseInt(b[i]) + f;
     f = Math.floor(t/10);
     sum = t%10 + sum;
  }
  if(f!==0){
     sum = '' + f + sum;
  }
  return sum;
}



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


https://juejin.cn/post/7124835773873913893
作用域插槽
让插槽的内容能够访问子组件的数据

16. Vite 和Webpack的区别

都是现代化打包工具
启动方式不一样。vite在启动的时候不需要打包，所以不用分析模块与模块之间的依赖关系，不用进行编译。这种方式就类似于我们在使用某个UI框架的时候，可以对其进行按需加载。同样的，vite也是这种机制，当浏览器请求某个模块时，再根据需要对模块内容进行编译。按需动态编译可以缩减编译时间，当项目越复杂，模块越多的情况下，vite明显优于webpack.
热更新方面，效率更高。当改动了某个模块的时候，也只用让浏览器重新请求该模块，不需要像webpack那样将模块以及模块依赖的模块全部编译一次。

作者：逍丶
链接：https://juejin.cn/post/7160962909332307981
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


问题一： 从页面 A 打开一个新页面 B，B 页面关闭（包括意外崩溃），如何通知 A？
首先，这个题目是前端通信题目,可以从3个方面来解答这个问题

A 页面打开 B 页面，A、B 页面通信方式？
B 页面正常关闭，如何通知 A 页面?
B 页面意外崩溃，又该如何通知 A 页面？

首先,我们来看 A 页面打开 B 页面，A、B 页面通信方式:
A、B 页面通信方式有：

url 传参
postmessage
localStorage
WebSocket
SharedWorker
Service Worker

作者：路漫漫长
链接：https://juejin.cn/post/7342332602575355955
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



react Effect为什么在更新时候会先执行一下return函数

在 React 中，使用 useEffect 钩子来处理副作用，包括数据获取、订阅和手动操作 DOM 等。useEffect 钩子的函数签名如下：

jsx
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [dependencies]);
在这里，useEffect 接受两个参数，第一个参数是处理副作用的函数，第二个参数是一个依赖数组，表示只有在数组中的依赖项发生变化时才会重新运行该副作用。

返回的函数是可选的，被称为清理函数，它会在组件卸载或者依赖项变化导致副作用重新运行之前执行。React 会在执行新的副作用之前先执行清理函数，这样可以确保旧的副作用在新的副作用执行之前被清理。

这种设计的目的是为了防止可能导致内存泄漏或其他不良副作用的情况发生。例如，如果你在副作用中添加了事件监听器、订阅了某个数据源，或者执行了其他需要手动清理的操作，你可以在清理函数中进行相应的清理操作，以防止这些操作造成不必要的资源浪费。

总体来说，React 的 useEffect 钩子以及清理函数的设计是为了提供更好的副作用管理机制，确保在组件生命周期内能够正确地进行资源的分配和清理。


instanceof 原理是什么
instanceof 原理实际上就是查找目标对象的原型链。
function myInstance(L, R) {//L代表instanceof左边，R代表右边
  var RP = R.prototype
  var LP = L.__proto__
  while (true) {
      if(LP == null) {
          return false
      }
      if(LP == RP) {
          return true
      }
      LP = LP.__proto__
  }
}
console.log(myInstance({},Object)); 


为什么 typeof null 是 Object ?（初级）
因为在JavaScript中，不同的对象都是使用二进制存储的，如果二进制前三位都是0的话，系统会判断为是Object类型，而null的二进制全是0，自然也就判断为Object。

这个 bug 是初版本的 JavaScript 中留下的，扩展一下其他五种标识位：

000 对象
1 整型
010 双精度类型
100字符串
110布尔类型
#


https使用什么协议，websocket使用什么协议
总结：

HTTPS 使用 TLS 或 SSL 协议，确保在客户端和服务器之间的数据传输是安全的。
WebSocket 使用 WebSocket 协议，建立在单个 TCP 连接上，支持双向通信。