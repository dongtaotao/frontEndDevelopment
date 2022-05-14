单例模式 
const Single = function (name, password) {  
    this.name = name;
    this.password = password;
};

Single.prototype.login = (name, password) => {
    if (!this.only) {
        this.only = new Single(name, password);
    }
    return this.only;
};

let user1 = new Single().login('jsliang', '123456');
let user2 = new Single().login('zhazhaliang', '654321');

console.log(user1 === user2); // true
console.log(user1); // Single { name: 'jsliang', password: '123456' }
console.log(user2); // Single { name: 'jsliang', password: '123456' }

class SingletonLogin {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    static getInstance(name, password) {
        // 判断对象是否已经被创建,若创建则返回旧对象
        if (!this.instance) {
          this.instance = new SingletonLogin(name, password);
        }
        return this.instance;
    }
}

let obj1 = SingletonLogin.getInstance('jsliang', '123456')
let obj2 = SingletonLogin.getInstance('zhazhaliang', '654321')

console.log(obj1 === obj2)    // true
console.log(obj1)           // SingletonLogin { name: 'jsliang', password: '123456' }
console.log(obj2)           // SingletonLogin { name: 'jsliang', password: '123456' }

requestAnimationFrame会在每次屏幕刷新的时候被调用，
而requestIdleCallback则会在每次屏幕刷新时，判断当前帧是否还有多余的时间，
如果有，则会调用requestIdleCallback的回调函数，

利用这个特性，我们可以在动画执行的期间，利用每帧的空闲时间来进行数据发送的操作，或者一些优先级比较低的操作，此时不会使影响到动画的性能，
或者和requestAnimationFrame搭配，可以实现一些页面性能方面的的优化，

react 的 fiber 架构也是基于 requestIdleCallback 实现的, 并且在不支持的浏览器中提供了 polyfill
http://interview.poetries.top/docs/simply.html#_14-%E5%AE%9A%E6%97%B6%E5%99%A8%E4%B8%8Erequestanimationframe%E3%80%81requestidlecallback
总结
从单线程模型和任务队列，出发理解 setTimeout(fn, 0)，并不是立即执行。
JS 动画, 用requestAnimationFrame 会比 setInterval 效果更好
requestIdleCallback()常用来切割长任务，利用空闲时间执行，避免主线程长时间阻塞

发布订阅模式和观察者模式
http://interview.poetries.top/docs/simply.html#_2-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F%E5%92%8C%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F
发布/订阅模式
订阅者
发布者
信号中心

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"(publish)一个信 号，其他任务可以向信号中心"订阅"(subscribe)这个信号，
从而知道什么时候自己可以开始执 行。这就叫做"发布/订阅模式"(publish-subscribe pattern)

. 观察者模式

观察者(订阅者) -- Watcher
update():当事件发生时，具体要做的事情
目标(发布者) -- Dep
subs 数组:存储所有的观察者
addSub():添加观察者
notify():当事件发生，调用所有观察者的 update() 方法
没有事件中心

// 目标(发布者) 
// Dependency
class Dep {
    constructor () {
      // 存储所有的观察者
      this.subs = []
    }
    // 添加观察者
    addSub (sub) {
      if (sub && sub.update) {
        this.subs.push(sub)
      }
    }
    // 通知所有观察者
    notify () {
      this.subs.forEach(sub => sub.update())
    }
  }
  
  // 观察者(订阅者)
  class Watcher {
    update () {
      console.log('update')
    }
  }
  
  // 测试
  let dep = new Dep()
  let watcher = new Watcher()
  dep.addSub(watcher) 
  dep.notify()

3. 总结
观察者模式是由具体目标调度，比如当事件触发，Dep 就会去调用观察者的方法，所以观察者模 式的订阅者与发布者之间是存在依赖的
发布/订阅模式由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在

https://leetcode-cn.com/problems/permutations/solution/javascript-hui-su-xiang-jin-zhu-shi-by-jsliang-4/
回溯算法

1. CSRF 攻击，解释一下 Cookie 的 SameSite
2. HTTPS 协议之所以是安全的是因为 HTTPS 协议会对传输的数据进行加密，
而加密过程是使用了非对称加密实现。但其实：HTTPS 在内容传输的加密上使用的是对称加密，非对称加密只作用在证书验证阶段。
3. JSBridge 原理
4. React 16 中 Diff 算法的变化
浅析React Diff 与 Fiber https://zhuanlan.zhihu.com/p/58863799
5. 什么是Base64
   Base64是网络上最常见的用于传输8Bit字节码的编码方式之一，
   Base64就是一种基于64个可打印字符来表示二进制数据的方法
   1. 优点
（1）base64格式的图片是文本格式，占用内存小，转换后的大小比例大概为1/3，降低了资源服务器的消耗；
（2）网页中使用base64格式的图片时，不用再请求服务器调用图片资源，减少了服务器访问次数。
（3）base64编码的字符串，更适合不同平台、不同语言的传输；
（4）算法是编码, 不是压缩, 编码后只会增加字节数，但是算法简单, 几乎不会影响效率，算法可逆, 解码很方便, 不用于私密信息通信;
（5）解码方便, 但毕竟编码了, 肉眼还是不能直接看出原始内容;
2. 缺点
（1）base64格式的文本内容较多，存储在数据库中增大了数据库服务器的压力；
（2）网页加载图片虽然不用访问服务器了，但因为base64格式的内容太多，所以加载网页的速度会降低，可能会影响用户的体验。
（3）base64无法缓存，要缓存只能缓存包含base64的文件，比如js或者css，这比直接缓存图片要差很多，而且一般HTML改动比较频繁，所以等同于得不到缓存效益
6. Cookie 的 SameSite 属性
   Chrome 51 开始，浏览器的 Cookie 新增加了一个SameSite属性，
   用来防止 CSRF 攻击和用户追踪。
7. css加载不会阻塞DOM树的解析
  css加载会阻塞DOM树的渲染
  css加载会阻塞后面js语句的执行、
8. react16的diff算法相比于react15有什么改动 
https://www.zhihu.com/question/266800762
9. Tree-shaking 原理
https://juejin.im/post/5a4dc842518825698e7279a9
https://juejin.im/post/5bb8ef58f265da0a972e3434
10. sticky 的使用场景
使用 position:sticky 实现粘性布局
 https://juejin.im/entry/58a69c335c497d005fafb8f4
11. cookie 的属性有哪些
  name: cookie名称
  value: cookie值
  domain: 即可访问此cookie的域名(不同级有不同限制)
  path: 可访问此cookie的页面路径
  expires/Max-Age: cookie超时时间, 默认为Session
  Size: cookie大小
  http: 即httponly属性, true时只有http请求头会带有此信息, 而不能通过document.cookie来访问
  secure: 设置是否只可通过https来传递此条cookie
12. 说几个 HTTP Content-Type
  application/x-www-form-urlencoded
  multipart/form-data    此种方式多用于文件上传，表单数据都保存在http的正文部分，各个表单项之间用boundary分开。
  application/json   现在越来越多的应用使用application/json,用来告诉服务端消息主体是序列化的json字符串。由于json规范的流行，各大浏览器都开始
    原生支持JSON.stringfy。
  text/xml
  https://blog.csdn.net/qianxing111/article/details/79356146
  application/xml
  text/xml

13. Webpack中的HMR原理 https://juejin.im/post/5d4d3e5ce51d4561f64a07d1
Hot Module Replacement（以下简称 HMR）
当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器
通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新。
基本实现原理大致这样的，构建 bundle 的时候，加入一段 HMR runtime 的 js 和一段和服务沟
通的 js 。文件修改会触发 webpack 重新构建，服务器通过向浏览器发送更新消息，浏览器通过
jsonp 拉取更新的模块文件，jsonp 回调触发模块热替换逻辑。

14. React虚拟Dom和diff算法 https://juejin.im/post/5a3200fe51882554bd5111a0
diff 算法总结:
保持完整的结构,有利于性能的提升
尽量使用相同类型的组件
在进行 Element 或Component 级别对比的时候,为了提高对比的效率,
 React 推荐我们为每个 for 循环创建出来的元素或者组件,提供一个唯一的 key;
Tree diff :将新旧两棵 DOM 树,按照层级对应的关系,这样只需要对树进行一次遍历,
就能够找到哪些元素是需要更新的;
Component Diff: 在对比每一层的时候,每一层都有自己的组件,
 那么组件之间的对比,叫做 Component diff , 对比的方式,
 就是查看两个组件的类型是否相同,如果相同,则暂时认为不需要更新,
 如果类型不同,则表示更新(先把旧的组件删除,再创建一个新的组件,插入到刚才删除的位置);
Element Diff:如果新旧 DOM 树中的组件类型相同,会继续比较这两
个组件内部的元素是否也相同,如果元素发生了改变,则找到需要修改的元素,
有针对性的修改,这种组件内部元素级别的对比叫: Element Diff;
//https://juejin.im/post/5a3200fe51882554bd5111a0

15. 移动端自适应方案 https://juejin.im/post/5c8870c1e51d453ce668cc7f
  rem(flexib) vw vw + rem
  请使用手淘的flexible: GitHub - amfe/lib-flexible: 
  可伸缩布局方案  https://link.zhihu.com/?target=https%3A//github.com/amfe/lib-flexible

16. 实现一个记忆函数 https://juejin.im/post/59af56a96fb9a0248f4aadb8 

17. Typescript中的interface和type到底有什么区别 
https://juejin.im/post/5c2723635188252d1d34dc7d
18. CI/CD怎么做的
19. HTTPS 原理 https://juejin.im/post/5ca6a109e51d4544e27e3048
20. webpack中的hash、chunkhash、contenthash区别 https://juejin.im/post/5d898d1df265da03b1208ca5
共同点：这三种hash都是用来控制缓存的，hash一般是结合CDN缓存来使用，
通过webpack构建之后，生成对应文件名自动带上对应的MD5值。如果文件内容改变的话，
那么对应文件哈希值也会改变，
对应的HTML引用的URL地址也会改变，触发CDN服务器从源服务器上拉取对应数据，进而更新本地缓存。
hash是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的hash值都会更改，
并且全部文件都共用相同的hash值
hash是针对整个工程的，所以只要修改任意的文件，整个工程的hash值都会更改，
比如你只改了js，但css ，
img这些hash都会一起被更改，因为他们用的是同一个hash值
contenthash是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变，
所以我们可以通过contenthash解决上诉问题

21. 扫码登录的实现逻辑
22. 性能监控 http://www.alloyteam.com/2020/01/14184/
23. git rebase 和 git merge 的区别

渲染几万条数据不卡住页面
渲染大数据时，合理使用 createDocumentFragment 和 requestAnimationFrame，将操作切分为一小段一小段执行。
setTimeout(() => {
  const total = 100000;
  const once = 20;
  const loopCount = Math.ceil(total / once);
  let countOfRender = 0;
  const ul = document.querySelector('ul');
 
  function add() {
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < once; i++) {
      const li = document.createElement('li');
      li.innerText = Math.floor(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
  }
  function loop() {
    if(countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }
  loop();
}, 0)
链接：https://juejin.cn/post/7070020478701666318

32. 大数运算
取两个数字的最大长度
用0去补齐长度
使用 for 循环，如果有余数，则记录下来

function add(a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);

  let curSum = 0;
  let remainder = 0;
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    curSum = parseInt(a[i]) + parseInt(b[i]) + remainder;
    remainder = Math.floor(curSum / 10);
    sum = curSum % 10 + sum;
  }
  if (remainder == 1) {
    sum = "1" + sum;
  }
  return sum;
}
链接：https://juejin.cn/post/7070020478701666318

iterator：不使用Generator函数创建迭代器 https://juejin.cn/post/6844903887502082061#heading-22
function myIterator(items) {
  let i = 0;
  return {
    next() {
      const done = i >= items.length;
      const value = !done ? items[i++] : undefined;
      return {
        done,  // 是否全部迭代完成
        value  // 返回迭代的值
      }
    }
  }
}

const interator = myIterator([1, 2, 3]);
interator.next();

setInterval: 使用setTimeout模拟，并随时取消
function mySetInterval(fn, delay) {
  let timer;
  const loop = () => {
    timer = setTimeout(() => {
      loop();
      fn();
    }, delay);
  };
  loop();
  return () => {
    clearInterval(timer)
  }
}

const stop = mySetInterval(() => {
  console.log('test')
}, 200);

stop() // 停止 
