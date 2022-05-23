前端面试必会网络系列面试题汇总 🔥🔥🔥
https://juejin.cn/post/7095945284504518663

万字前端效率大提速系列 🚀 ：十、前端错误监控、数据监控专题
https://juejin.cn/post/7086378709560590343

一篇讲透自研的前端错误监控
https://juejin.cn/post/6987681953424080926

万字长文讲解JS内存管理、性能优化以及堆栈
https://juejin.cn/post/7081236724726104101

你所需要的前端知识 前端面试
https://juejin.cn/post/7095548781877264414

前端面试经验 https://juejin.cn/post/7096136331109072933

2021前端面试必刷/跨域/浏览器工作原理/Vue/React/性能优化
https://www.bilibili.com/video/BV15b4y1R7pj?p=9

Map 不 return 会返回什么  [undefined]

获取当前页面滚动条纵坐标的位置document.body.scrollTop与document.documentElement.scrollTop

前端工程师需要了解的 Babel 知识
https://www.zoo.team/article/babel

Babel 编译的三个阶段
Babel 的编译过程和大多数其他语言的编译器相似，可以分为三个阶段：
解析（Parsing）：将代码字符串解析成抽象语法树。
转换（Transformation）：对抽象语法树进行转换操作。
生成（Code Generation）: 根据变换后的抽象语法树再生成代码字符串。

注意很重要的一点就是，Babel 只是转译新标准引入的语法，比如：
箭头函数
let / const
解构
哪些在 Babel 范围外？对于新标准引入的全局变量、部分原生对象新增的原型链上的方法，Babel 表示超纲了。
全局变量
Promise
Symbol
WeakMap
Set
includes
generator 函数
对于上面的这些 API，Babel 是不会转译的，需要引入 polyfill 来解决。

Vue nextTick实现原理  https://www.cnblogs.com/leiting/p/13174545.html

宏任务和微任务#
JS任务又分为宏任务和微任务。
宏任务（macrotask）：setTimeout、setInterval、setImmediate、I/O、UI rendering
微任务（microtask）：promise.then、process.nextTick、MutationObserver、queneMicrotask(开启一个微任务)

面试官: 实现双向绑定Proxy比defineproperty优劣如何?
https://juejin.cn/post/6844903601416978439

表单可以跨域吗 https://www.jianshu.com/p/ada677070320
可以 
1、form表单不会出现跨域问题，因为页面进行了跳转，并且form表单页没有读取其他页面信息
2、ajax请求造成跨域是因为 要读取接口地址的信息 并且在不同源的情况下

6.lru算法 https://juejin.cn/post/6896810576778166280
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

阿里巴巴、今日头条、拼多多以及腾讯等一线互联网公司面试总结
https://juejin.cn/post/690591390515206554

上海莉莉丝、米哈游、B站、小红书、得物等互联网公司前端面试总结
https://juejin.cn/post/6896810576778166280#heading-72
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

Promise.allSettled = function(promises) {
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

Vue3纯前端如何实现Vue路由权限
https://juejin.cn/post/7096393921034453006


React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 default export 的 React 组件。
import React, { Suspense } from 'react';

const myComponent = React.lazy(() => import('./Component'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <myComponent />
      </Suspense>
    </div>
  );
}
链接：https://juejin.cn/post/6887359442354962445

vue 中使用了哪些设计模式？
1、工厂模式 - 传入参数即可创建实例
  虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode。
2、单例模式 - 整个程序有且仅有一个实例
  vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉。
3、发布-订阅模式。（vue 事件机制）
4、观察者模式。（响应式数据原理）
5、装饰器模式（@装饰器的用法）
6、策略模式，策略模式指对象有某个行为，但是在不同的场景中，该行为有不同的实现方案 - 比如选项的合并策略。
链接：https://juejin.cn/post/7096496584510636046

前端缓存最佳实践 https://juejin.cn/post/6844903737538920462
缓存的意义就在于减少请求，更多地使用本地的资源，给用户更好的体验的同时，也减轻服务器压力。所以，最佳实践，就应该是尽可能命中强缓存，
同时，能在更新版本的时候让客户端的缓存失效。
在更新版本之后，如何让用户第一时间使用最新的资源文件呢？机智的前端们想出了一个方法，在更新版本的时候，顺便把静态资源的路径改了，
这样，就相当于第一次访问这些资源，就不会存在缓存的问题了。
伟大的webpack可以让我们在打包的时候，在文件的命名上带上hash值。
entry:{
    main: path.join(__dirname,'./main.js'),
    vendor: ['react', 'antd']
},
output:{
    path:path.join(__dirname,'./dist'),
    publicPath: '/dist/',
    filname: 'bundle.[chunkhash].js'
}
复制代码综上所述，我们可以得出一个较为合理的缓存方案：

HTML：使用协商缓存。
CSS&JS&图片：使用强缓存，文件命名带上hash值。
链接：https://juejin.cn/post/6844903737538920462

利用nginx设置浏览器协商缓存
https://www.cnblogs.com/lihan829/p/14850175.html

Number和parseInt的区别
Number()和parseInt()一样，都可以用来进行数字的转换
区别在于，当转换的 内容包含非数字 的时候，Number() 会返回NaN(Not a Number)
parseInt() 要看情况，如果以数字开头，就会返回开头的合法数字部分，如果以非数字开头，则返回NaN
Number() 转换类型，而 parseInt 解析输入的值。
//  解析
parseInt("32px");   // 32
parseInt("5e1");    // 5
// 转换类型
Number('32px');     // NaN
Number('5e1');      // 50
链接：https://juejin.cn/post/7095932933050990605

conputed和watch的区别
watch中可进行异步操作，监听数据取最新值。没有缓存。
computed是同步操作，不可以进行异步操作。会有缓存。

说说webpack中babel的使用 https://juejin.cn/post/7096298894111277063
1.使用@babel/core和@babel/preset-env
(1)只能编译ES6的新语法(转换为ES5相应的语法)
(2)问题: 不能处理ES6的新API, 在相对低版本浏览器中不能运行
2.使用@babel/polyfill
(1)内部通过core-js提供了新API的实现
(2)问题: 默认是打包整体包, 导致打包文件太大

fastclick库
实现原理: 在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉

为什么前端不能没有监控系统？
https://juejin.cn/post/7096675256986763295

16. Vue 如何清除浏览器缓存？
1）项目打包的时候给每个打包文件加上 hash 值，一般是在文件后面加上时间戳；
2）在 html 文件中加入 meta 标签，content 属性设置为no-cache;
3） 在后端服务器中进行禁止缓存设置。
链接：https://juejin.cn/post/6912702361798443022

url: "http://www.geetest.com/demo/gt/register-click?t=" + (new Date()).getTime(), // 加随机数防止缓存

H5 浏览器离线缓存 manifest  https://www.bilibili.com/video/BV15b4y1R7pj?p=5    h5-manifest
H5提供了一个新特性： 离线存储。通过离线存储，我们可以通过把需要存储在本地的文件列表放在manifest配置文件中，这样即使在离线的情况下，用户也可以正常看到网页
查看application -- application cache里面可以看见
使用
1.需要在离线存储的页面上面加上manifest = "cache.manifest"
<!DOCTYPE html>
  <html lang="en" manifest = "cache.manifest">
</html>

2在根目录新建文件cache.manifest并写上对应代码
CACHE MANIFEST
#v0.11

# CACHE 你要把哪些文件存在浏览器------
CACHE:

ljc.css
../images/banner-02.png

# NETWORK 你不存哪些 ---------
NETWORK:
../images/banner-01.png

# FALLBACK 如果访问a.html 没有找到 就跳转到offline.html ------------
FALLBACK:
./a.html  ./offline.html

在浏览器application cache查找

装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法与属性。许多面向对象的语言都有这项功能。一般和类class相关 普通函数 不要使用
装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。
装饰类Foo
@frozen 
class Foo {
  //装饰method方法
  @configurable(false)
  method() {}
  
 //装饰yy方法
  @throttle(500)
  yy() {}
}


如何获取url参数
//获取url参数有很多种
1、'原生方法'
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());//转为对象

console.log(params) // {id: '2', isShare: 'true'}
console.log(params.id) // 2

2、'react获取路由参数'
//普通传参方式
- params
    优势:刷新地址栏 参数依赖保留
    缺点:传值太多 url长而丑
- query
    优势:传参优雅，传递参数可传对象
    缺点:刷新地址栏，参数丢失
- state与search 都类似

//利用hooks传参 🔥
import {  
useHistory,//路由跳转
useLocation,//路由路径各种参数
useParams,//路由参数信息
useRouterMatch
} from 'react-router-dom';


{/* <Route path='/query' component={Query}/>
<Link to={{ path : ' /query' , query : { name : 'sunny' }}}>
this.props.history.push({pathname:"/query",query: { name : 'sunny' }});
读取参数用: this.props.location.query.name */}

什么是闭包，闭包造成的内存泄露如何解决
https://blog.csdn.net/yiyueqinghui/article/details/96453390
如何避免闭包引起的内存泄漏
在退出函数之前，将不使用的局部变量赋值为null;
这段代码会导致内存泄露
window.onload = function(){
    var el = document.getElementById("id");
    el.onclick = function(){
        alert(el.id);
    }
}
解决方法为
window.onload = function(){
    var el = document.getElementById("id");
    var id = el.id;                                      //解除循环引用
    el.onclick = function(){
        alert(id); 
    }
    el = null;                                          // 将闭包引用的外部函数中活动对象清除
}

在退出函数之前，将使变量赋值为null;
function foo(){
    var i=0;
      return  function(){    //这个就是一个闭包函数
          console.log(i++);   //变量不会被内存回收机制回收
          i=null;   //释放内存
      }
      
  }
  var f1=foo(),   
      f2=foo();    
  f1();     //  0
  f1();     //  0
  f2();     //  0

js 闭包的内存泄漏解决方法
https://www.jianshu.com/p/154d59dad2df

来，跟我一起 ，自研多端错误监控平台（完整版） 🔥 es查询数据
https://juejin.cn/post/6844904202917904391
SDK 小结
我们用一句话对 SDK 进行小结:
监听 / 劫持 原始方法，获取需要上报的数据，在错误发生时 触发 函数使用 gif 上报。
为了方便记忆，提炼 3 个关键词：劫持、原始方法、gif！（如果你还记不住，那也别打我）
从 ES 中获取数据非常简单，ES 底层是基于 Lucene 的搜索服务器的，它提供了一个分布式多用户能力的全文搜索引擎，基于 RESTful web 接口。
所以我们前端开发只需要想平时开发业务调用接口一样去调用就可以了。


从输入npm run xxx发生了什么？
https://juejin.cn/post/7097097485696368676
总结
运行 npm run xxx的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行；
没有找到则从全局的 node_modules/.bin 中查找，npm i -g xxx就是安装到到全局目录；
如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序。
链接：https://juejin.cn/post/7097097485696368676

前端下载功能的实现 https://juejin.cn/post/7044355270977257502
1.window.location.href即可实现下载
2.
let link = document.createElement("a");
link.style.display = "none";
link.href = url;

前端对当前页面进行绘图，并下载。 https://juejin.cn/post/7097041366748200991
npm install --save html2canvas

CDN静态库
BootCDN : BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务
Staticfile CDN : Staticfile CDN
360 前端静态资源库 : 静态资源托管库 (baomitu.com)
字节跳动静态资源公共库 : 字节跳动静态资源公共库 (bytedance.com)
链接：https://juejin.cn/post/7089818665616408606

web性能检测工具。这里的性能检测工具我使用的是Chrome的Lighthouse。
https://juejin.cn/post/7089363983475408933