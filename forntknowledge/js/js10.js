🔥面试官：如何设计一个埋点SDK
https://juejin.cn/post/7080797016086806536
面试官：如何设计一个前端统计埋点SDK？
简单：前端埋点大致可分为数据监控、性能监控、错误监控。其中数据监控包括监控pv以及自定义事件的监控。
性能监控可以使用浏览器给我们提供的performance api。而错误监控我们可以监听window对象的error事件以及监听promise没有catch情况的
、unhandlerejected api。其中需要注意的是我们必须使用img等来进行请求，因为img标签不会跨域且兼容性较好。
最后，react/vue内部提供了一些api如ComponentDidCatch（react）/errorCaptured（vue）等api方便我们调用自定义事件进行发送。
链接：https://juejin.cn/post/7080797016086806536

//prodcut为当前产品性为了通用性考虑
//url是传递给服务端的url
interface SdkProp {
    product: string;
    url:string;
}
interface MySDKProp {
    currentProduct: string;
}
class MySDK {
    currentProduct: string;
    url:string;
    constructor(props: SdkProp) {
        //指明产品名称 
        this.currentProduct = props.product;
        this.url = props.url;
    } 
    //数据浏览器访问量
    pv() {
      this.event('pv','');
    }
    //发送数据
    private send(url, params: any = {}) {
      params.product = this.currentProduct;
      const paramsArr = [];
      for (let key in params) {
          const val = params[key];
          paramsArr.push(`${key}-${val}`);
      }
      const newVal=`${url}?${paramsArr.join("&")}`;
      const img=document.createElement('img');
      img.src=newVal;
    }
    //内部事件
    event(key,value) {
      this.send(this.url,{key,value})
    }
}

webpack工作的原理是什么？工作流程是什么？ https://www.lingtiku.com/#/quiz/detail?quizID=14
解析：
webpack读取配置，根据入口开始遍历文件，解析依赖，使用loader处理各模块，然后将文件打包成bundle后输出到output指定的目录中。
webpack的工作流程是
1、Webpack CLI 启动打包流程，解析配置项参数。
2、载入 Webpack 核心模块，创建 Compiler 对象。
3、注册plugins。
4、使用 Compiler 对象开始编译整个项目。
5、从入口文件开始，解析模块为AST，分析模块依赖，形成依赖关系树。
6、递归依赖树，将每个模块交给对应的 Loader 处理。
7、合并 Loader 处理完的结果，将打包结果输出到 dist 目录。

装箱拆箱 https://www.lingtiku.com/#/quiz/detail?quizID=5
讲一下js中的包装类型
解析：
基础类型的数据在使用时候，js引擎会先将之包装为对象，语句执行完对象被销毁。这个过程也被称为“装箱拆箱”。

教你如何实现缩短网址功能
https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247484450&idx=1&sn=0b36bbc2bd0ec858e692036cfa492789&chksm=c31945e2f46eccf4125dcf12871d0b12af2ab8807725da1ac33d87e25d7b174c0b12f9b9457b#rd
【业务需求系列】取消axios请求
https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247484501&idx=1&sn=563ac66df0f3de6b599e6d35e15ecdac&chksm=c3194595f46ecc830172e7bfaaf022e024b2f9382b2fd2d82d7bb8b5546ceb209dc86fbf38a2#rd
【经典面试题系列】十万条数据前端怎么展示
https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247484713&idx=1&sn=6fba0009916132f07948f38eb19308ac&chksm=c31944e9f46ecdff7d7910d1b6d913570cbfd1fc944c622a1f13fd0fbb8d549a4b80eea9b27e#rd

5.6 跨标签页的通讯方式有哪些
(1) BroadCast Channel
(2) Service Worker
(3) LocalStorage + window.onstorage监听
(4) Shared Worker + 定时器轮询(setInterval)
(5) IndexedDB + 定时器轮询(setInterval)
(6) cookie + 定时器轮询(setInterval)
(7) window.open + window.postMessage
(8) Websocket
链接：https://juejin.cn/post/6844903986210816013

webpack如何实现一个插件 https://juejin.cn/post/6844903682455109640#heading-1
定义一个类，在类的原型上定义一个apply方法
调用插件 apply 函数传入 compiler 对象
通过 compiler 对象监听事件
比如你想实现一个编译结束退出命令的插件
class BuildEndPlugin {
  apply (compiler) {
    const afterEmit = (compilation, cb) => {
      cb()
      setTimeout(function () {
        process.exit(0)
      }, 1000)
    }
    compiler.plugin('after-emit', afterEmit)
  }
}
module.exports = BuildEndPlugin

2022新年奖励自己一辆特斯拉😎（React Hooks + Redux 入门级全栈实战项目） ******************不错
https://juejin.cn/post/7063088278576037901

token和JWT的区别
【网络】Cookie、Session与Token、JWT及CSRF攻击
相同： 都是访问资源的令牌， 都可以记录用户信息，都是只有验证成功后
区别：服务端验证客户端发来的token信息要进行数据的查询操作；
JWT验证客户端发来的token信息就不用， 在服务端使用密钥校验就可以，不用数据库的查询。
链接：https://juejin.cn/post/7065234358616997924

webpack构建：
构建就是把源代码转换成发布到线上的可执行 JavaScrip、CSS、HTML 代码，包括如下内容。
1.代码转换：TypeScript 编译成 JavaScript、SCSS或Less 编译成 CSS 等。
2.文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
3.代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
4.模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
5.自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器,nodemon。
6.代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
7.自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。
构建其实是工程化、自动化思想在前端开发中的体现，把一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。 
构建给前端开发注入了更大的活力，解放了我们的生产力,更加方便了我们的开发。
链接：https://juejin.cn/post/6844903821408206855

崩溃和卡顿 https://blog.csdn.net/sinat_17775997/article/details/115215082?spm=1001.2014.3001.5502
卡顿也就是网页暂时响应比较慢， JS可能无法及时执行。但崩溃就不一样了，网页都崩溃了，JS都不运行了，
还有什么办法可以监控网页的崩溃，并将网页崩溃上报呢？
1.利用 window 对象的 load 和 beforeunload 事件实现了网页崩溃的监控。
不错的文章，推荐阅读：Logging Information on Browser Crashes。
window.addEventListener('load', function () {
  sessionStorage.setItem('good_exit', 'pending');
  setInterval(function () {
      sessionStorage.setItem('time_before_crash', new Date().toString());
  }, 1000);
});

window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('good_exit', 'true');
});

if(sessionStorage.getItem('good_exit') &&
  sessionStorage.getItem('good_exit') !== 'true') {
  /*
      insert crash logging code here
  */
  alert('Hey, welcome back from your crash, looks like you crashed on: ' + sessionStorage.getItem('time_before_crash'));
}
2.基于以下原因，我们可以使用 Service Worker 来实现网页崩溃的监控：
Service Worker 有自己独立的工作线程，与网页区分开，网页崩溃了，Service Worker一般情况下不会崩溃
Service Worker 生命周期一般要比网页还要长，可以用来监控网页的状态
网页可以通过 navigator.serviceWorker.controller.postMessage API 向掌管自己的 SW 发送消息

js异常
总结 https://blog.csdn.net/sinat_17775997/article/details/115215082?spm=1001.2014.3001.5502
可疑区域增加 try...catch
全局监控JS异常： window.onerror
全局监控静态资源异常： window.addEventListener
全局捕获没有 catch 的 promise 异常：unhandledrejection
iframe 异常：window.error
VUE errorHandler 和 React componentDidCatch
监控网页崩溃：window 对象的 load 和 beforeunload ，或者Service Worker 
Script Error跨域 crossOrigin 解决

http缓存总结及前后端测试
https://juejin.cn/post/6861528185742295048#heading-8

tsconfig.json 文件是用于描述将 TypeScript 转为 JavaScript 代码的配置文件。

7Import（）
  可以实现动态加载。运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。import()返回一个 Promise 对象。
  注意：import()加载模块成功以后，这个模块会作为一个对象，当作then方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口。
    import('./myModule.js')
    .then(({export1, export2}) => {
      // ...•
    });
  上面代码中，export1和export2都是myModule.js的输出接口，可以解构获得。
如果模块有default输出接口，可以用参数直接获得。
    import('./myModule.js')
    .then(myModule => {
      console.log(myModule.default);
    });
  上面的代码也可以使用具名输入的形式。
    import('./myModule.js')
    .then(({default: theDefault}) => {
      console.log(theDefault);
    });
链接：https://juejin.cn/post/6844903818128261134

8 module的加载实现
浏览器加载 ES6 模块，也使用script标签，但是要加入type="module"属性。
<script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script>

斐波那契数列
首先，斐波那契数列从第0个开始，分别是
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233……

spy-debugger调试、抓包工具
一站式页面调试、抓包工具。远程调试任何手机浏览器页面，任何手机移动端webview（如：微信，HybridApp等）。支持HTTP/HTTPS，无需USB连接设备。  

ajax一种传统的技术，fatch 一个原生api，  Axios一个第三方库

不适合箭头函数的场景
1.对象方法
2.对象原型
3.构造函数
4.动态上下文的回调函数
5.Vue生命周期method

for await of 用于遍历多个promise

offsetHeight offsetWidth: border + padding + content;
clientHeight clientWidth: border + content;
scrollHeight scrollWidth: padding + 实际内容尺寸

如何检测内存泄漏 ============================
1.chrome  控制台  performance  里面的 Memory

宏任务： 如 setTimeout, setInterval 网络请求
微任务: promise async/await  MutationObserver 监听DOM树的变化  微任务

微任务在下一轮DOM渲染之前执行，宏任务在之后执行

nodejs如何开启多进程，进程如何通讯-使用chil
开启子进程child_process.fork和cluster.fork
使用send和on传递消息

preload和prefetch
preload资源在当前页面使用，会优先加载
prefetch 资源在未来页面使用，空闲时加载
都是link标签
{/* <link rel='prefetch' href = ''> */}
{/* <link rel='preload' href = ''> */}

prefetch是资源预获取（和preload相关）
dns-prefetch 是DNS预查询（和preconnect相关）

【连环问】如何实现网页和iframe之间的通讯
使用postMessage通讯
注意跨域的限制和判断
{/* <p>
        index page
        <button id="btn1">发送消息</button>
    </p>

    <iframe id="iframe1" src="./child.html"></iframe>

    <script>
        const btn1 = document.getElementById('btn1')
        btn1.addEventListener('click', () => {
            console.info('index clicked')
            window.iframe1.contentWindow.postMessage('hello', '*')
        })

        window.addEventListener('message', event => {
            console.info('origin', event.origin) // 来源的域名
            console.info('index received', event.data)
        })
    </script> */}

    // <p>
    //     child page
    //     <button id="btn1">发送消息</button>
    // </p>

    // <script>
    //     const btn1 = document.getElementById('btn1')
    //     btn1.addEventListener('click', () => {
    //         console.info('child clicked')
    //         window.parent.postMessage('world', '*')
    //     })

    //     window.addEventListener('message', event => {
    //         console.info('origin', event.origin) // 判断 origin 的合法性
    //         console.info('child received', event.data)
    //     })
    // </script>

https://blog.csdn.net/qq_41475058/article/details/105656375
短网址（Short URL） ，顾名思义就是在形式上比较短的网址。通常用的是asp或者php转向，在Web 2.0的今天，不得不说，这是一个潮流。目前已经有许多类似服务，
借助短网址您可以用简短的网址替代原来冗长的网址，让使用者可以更容易的分享链接
"yourls-api": "^2.1.0"

https://juejin.cn/post/7074573053979525151
14.使用history模式后访问内容页，刷新会404
需要后端重定向配置服务器。

13.解决vuex持久化
情景时列表页跳转到详情页，详情页是新窗口，2个窗口都用到vuex state,
比如共享同一个id数组，修改state数据之后，详情页不能实时更新state数据，只能用缓存解决，比如localStorage，
也有组件vuex-persistedstate，把vuex数据动态更新成storage。

hash 默认会在 url 后面拼接#
history 则不会，不过 history 需要服务器配合

onbeforeunload事件 https://blog.csdn.net/u014259536/article/details/89888573
onbeforeunload 事件在即将离开当前页面（刷新或关闭）时触发。
该事件可用于弹出对话框，提示用户是继续浏览页面还是离开当前页面。
onbeforeunload事件在onunload事件之前触发。

解决页面刷新redux数据丢失问题 https://blog.csdn.net/z591102/article/details/108096754 *******************
****************************************************   redux-persist react-router-redux的作用 https://juejin.cn/post/6844903951515533326
解决页面刷新导致状态丢失，例如全局选择框的状态值
1.redux-persist管理redux, 解决刷新react-redux数据丢失！ 。redux-persist会将redux的store中的数据缓存到浏览器的localStorage中。
2.存放在连接hash连接里面，保护，每次属性页面从url里面获取，然后在存储在redux里面。 设置 url 上的 hash query react-router-redux
## 举例
`http:///#/crash/?q={"global":{"st":"1","pt":"1","dt":"1","plgt":"0"},"date":[1497888100000,1498014000000],"crash":{"crtt":"1"}}` 
解决页面刷新redux数据丢失问题 https://blog.csdn.net/z591102/article/details/108096754 *******************
1.何时存只要用户刷新或者关闭页面时，都会默默记下当前的state状态。
window.onbeforeunload = (e) => {
  const state = store.getState();
  saveState(state);
};

2.何时清空
解决就是，state需要有个版本管理，当和代码的版本不一致时，至少进行个清空操作。

https://juejin.cn/post/7065483941305647112#heading-90
100、为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
可以发送get请求，且不需要获取和处理数据
可以跨域
执行过程无阻塞
相比XMLHttpRequest，性能更好  
gif体积小

使用create-react-app加持typescript打造自己的组件库  
https://juejin.cn/post/7083508488759934989   