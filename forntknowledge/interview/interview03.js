
React事件和原生事件执行顺序
https://juejin.cn/post/7240427838344888375#heading-18
原生事件先执行
react合成事件再执行
document上挂载的事件最后执行



8 Webpack Proxy工作原理？为什么能解决跨域
https://interview.html5.wiki/advance.html#_6-%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-tree-shaking
1. 是什么
webpack proxy，即webpack提供的代理服务
基本行为就是接收客户端发送的请求后转发给其他服务器
其目的是为了便于开发者在开发模式下解决跨域问题（浏览器安全策略限制）
想要实现代理首先需要一个中间服务器，webpack中提供服务器的工具为webpack-dev-server
2. 工作原理
proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器



贪心算法(找零)
https://juejin.cn/post/6989103878436290568
商店老板有1、2、5、10面额的纸币，小伙买东西给了100花了80，计算如何找零是最佳（阿里面试题）
function MinCoinChange(coins) {
  return function(amount) {
    let total = 0, change = []
    for(let i= coins.length; i>=0; i--) {
      let coin = coins[i]
      while(total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}

MinCoinChange([1,2,5,10])(20)

返回：10,10


36 大数相加
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


2.26 有效的括号
https://juejin.cn/post/7084600366813151240
var isValid = function (s) {
  let arr = []
  let obj = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  for (const char of s) {
      if (obj[char]) {
          arr.push(char)
      } else {
          if (char !== obj[arr.pop()]) {
              return false
          }
      }
  }
  return !arr.length
}

无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0; // 左指针的初始位置
  let res = 0; // 长度初始值为0
  const map = new Map();
  for(let r = 0; r < s.length; r++) {
      if(map.has(s[r]) && map.get(s[r]) >= l ) {
          l = map.get(s[r]) + 1;
      }
      res = Math.max(res, r - l + 1);
      map.set(s[r], r);
  }
  return res;
};


102. 二叉树的层序遍历
https://juejin.cn/post/6973941162952687653#heading-8
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) {return [];}
  const q = [[root,0]];
  let res = [];
  while(q.length) {
      const [n,leave] = q.shift();
      if(!res[leave]) { // 层级为0 的时候，根节点入队
          res.push([n.val])
      }else {
          res[leave].push(n.val) // 根据层级添加对应的val值
      }
      console.log(n.val,leave)
      if(n.left) q.push([n.left,leave+1]);
      if(n.right) q.push([n.right,leave+1]);
  }
  return res;
};


//   33  打家劫舍
https://juejin.cn/post/7031151977904275463
题目描述： 你是一个专业的小偷 计划投钱沿街的房屋，每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通防盗系统 （所以不能偷相邻的两家） 给定一个代表每个房屋能存放金额的非负整数数组 计算你在不触动警报装置下 能偷到的最高金额。
var rob = function(nums){
  // 数组长度为0和1 的情况
      if(nums.length == 0){
          return 0;
      }
      if(nums.length === 1){
          return nums[0];
      }
      const memo = [];
      memo [0] = nums[0];
      memo[1] = Math.max(nums[0],nums[1]);
      for(let i = 2; i<nums.length;i++){
          //判断一下是选择在当前房子还是保留i-1最大的数
          memo[i] = Math.max(nums[i] + memo[i-2],memo[i-1]) 
      }
      return memo[nums.length -1] ;//返回最后一个数
  }
  
  
  链接：https://juejin.cn/post/7031151977904275463

14、验证回文字符串||
描述：给定一个非空字符串 最多删除一个字符 判断是否能成为回文字符串
//验证回文字符串 这里单独提出来 后面用到
var validPalindrome = function(s){
  function isPalindrome(left,right){
      while(left<right){
          if(s[left] !== s[right]){
              return false;
          }
          left++;
          right--;
      }
      return true;
  }
  let left = 0,right = s.length-1;
  while(left<right){
      //如果两者不相等的情况 看一下是不是下面这两种情况
      if(s[left] !== s[right]){
          const result = isPalindrome(left+1,right) || isPalindrome(left ,right-1)
          return result;

      }
      left ++;
      right --;
  }
  return true;
}


16、数组最后位加一

var plusOne = function (digits){
  //逆序遍历
  for (let i=digits.lenght -1;i>=0;i--){
      //如果不是9 直接最后一位++ 返回结果即可
      if(digits[i] !==9){
          digits[i]++;
          return digits;
      }else{
          digits[i]= 0;//变成0之后后面不用处理 能直接跳转到前一位加一 实现进位
      }
  }
  // 如果全是9的时候 需要多加一位
  //这里不需要单独去判断了 因为上面的if判断中，如果全是9 就会循环之后跳出for循环
  const result = [1,...digits];//创建一个新的数组 第一位是1  后面全是0 
  //[1].concat(digits) 也可以使用ES5的写法
  return result;
}


以Docker为代表的容器化技术的基本概念：镜像，容器，数据挂载和网络等
容器化构建部署流程：先创建镜像，然后根据镜像创建容器，最后在容器内执行相关部署环节
容器化部署具有隔离性高，支持多环境矩阵执行，易于调试和环节标准化等优势\


websocket刷新页面之后如何恢复连接？
当使用 WebSocket 建立连接后，刷新页面会导致 WebSocket 连接断开。为了在刷新页面后恢复连接，可以采用以下方法：

在页面加载时，检测浏览器是否支持 WebSocket。如果支持，则尝试重新建立连接。
在建立 WebSocket 连接时，获取并保存连接的状态信息，如连接的 URL、认证信息等。
在页面刷新事件（beforeunload 或 unload）发生时，将连接的状态信息存储在本地（如 LocalStorage）或发送到服务器端进行持久化保存。
在页面重新加载时，重读连接状态信息，并根据信息重新建立 WebSocket 连接。
https://www.kancloud.cn/hanxuming/realquestionsforfrontend/3195566

富文本如何防止xss攻击？
https://www.kancloud.cn/hanxuming/realquestionsforfrontend/3194223
客户界面白屏怎么排查？
https://www.kancloud.cn/hanxuming/realquestionsforfrontend/3194224



区别
requestAnimationFrame 每次渲染完在执行，高优先级
requestIdleCallback 空闲时才执行，低优先级
都是宏任务，要等待DOM渲染完后在执行


https://interview.poetries.top/docs/base/high-frequency.html#script%E6%A0%87%E7%AD%BE%E7%9A%84defer%E5%92%8Casync%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB
preload和prefetch

preload 资源在当前页面使用，会优先加载
prefetch 资源在未来页面使用，空闲时加载
dns-preftch和preconnect

dns-pretch DNS预查询
preconnect DNS预连接
通过预查询和预连接减少DNS解析时间

<head>
  <!-- 针对未来页面提前解析：提高打开速度 -->
  <link rel="dns-pretch" href="https://font.static.com" />
  <link rel="preconnect" href="https://font.static.com" crossorigin />
</head>



React 中 setState 是一个宏任务还是微任务？https://juejin.cn/post/6992006476558499853?utm_source=gold_browser_extension
都不是


106. 什么是点击劫持？如何防范点击劫持？
点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。
我们可以在 http 相应头中设置 X-FRAME-OPTIONS 来防御用 iframe 嵌套的点击劫持攻击。通过不同的值，可以规定页面在特定的一些情况才能作为 iframe 来使用。
链接：https://juejin.cn/post/7334755783752220708

157. 开发中常用的几种 Content-Type ？
（1）application/x-www-form-urlencoded
浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL
转码。
（2）multipart/form-data
该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。
（3）application/json
告诉服务器消息主体是序列化后的 JSON 字符串。
（4）text/xml
该种方式主要用来提交 XML 格式的数据。
链接：https://juejin.cn/post/7334755783752220708


.怎么实现在上传文件的时候预览图片？
1·通过input.files[0]获取到确认选择的图片信息 f=document.getElementById('file').files[0];
2·使用URL.createObjectURL将获取到的图片信息转为可临时访问的URL url=URL.createObjectURL(f)
3·把获取到临时url地址，放在预览图片的img标签的scr上就完成预览了

原文链接：https://blog.csdn.net/weixin_61578719/article/details/134284587
2023年 前端面试题干货汇总（超详细）
https://blog.csdn.net/weixin_61578719/article/details/134284587


vue中的diff算法是在哪些生命周期执行的？
Vue 中的 Virtual DOM 和 diff 算法是在组件更新的过程中执行的，而组件更新过程涉及到 Vue 组件的生命周期钩子函数。
diff 算法的执行可以大致分为以下几个步骤：

1.数据变化触发更新：当 Vue 组件的数据发生变化时，Vue 会调用组件实例的 update 方法来触发组件的更新过程。
2.Virtual DOM 重建：在更新过程中，Vue 会重新构建组件的 Virtual DOM 树。这个过程会在组件的 beforeUpdate 生命周期钩子函数中执行。在这个阶段，Vue 会创建新的 Virtual DOM 树，然后与旧的 Virtual DOM 树进行比较，找出需要更新的部分。
3.diff 算法执行：在 Virtual DOM 重建完成后，Vue 会执行 diff 算法来比较新旧 Virtual DOM 树的差异。这个过程会在组件的 update 生命周期钩子函数中执行。
4.更新真实 DOM：diff 算法执行完毕后，Vue 会根据 diff 的结果来更新真实 DOM。这个过程会在组件的 updated 生命周期钩子函数中执行。在这个阶段，Vue 会根据 diff 的结果，对需要更新的部分进行 DOM 操作，从而实现页面的更新。

综上所述，Vue 中的 diff 算法是在组件的更新过程中执行的，具体来说是在组件的 update 生命周期钩子函数中。在这个阶段，Vue 会执行 diff 算法来比较新旧 Virtual DOM 树的差异，并根据比较的结果来更新真实 DOM。


function FYShuffle (arr) {
  let len = arr.length;
  
  while (len > 1) {
      let rand = Math.floor(Math.random() * len);
      len--;
      [arr[len], arr[rand]] = [arr[rand], arr[len]] // 采用的数组的结构赋值
  }

  return arr;
}
console.log(FYShuffle([1,2,3,4,5,6]))


做过大文件上传吗？你是如何做上传优化的？
大文件上传的解决方案是对文件进行切片，将切片传输给服务器。

处理大文件上传的一个关键是：如何处理断点续传。有两种方案：

前端解决方案：前端使用localStorge记录已上传的切片hash，弊端是清除缓存，就会丢失记录
服务端方案：服务端保存已经上传的切片hash，前端每次上传前向服务器获取已上传的切片
其中hash的计算：通过文件的内容计算生成，考虑到计算非常耗时，使用web-worker在worker线程中计算。


你解决过紧急的线上事故吗？
遇到过的线上事故：

【事故描述】：
印象中比较深刻的有一次，周末客服群反馈，用户的页面一直弹弹窗，影响用户筹款。

【事故排查】：
接到通知，就赶紧排查，复现问题后，发现一直弹的弹窗，是其他用户的评论留言，留言里写了alert相关的 javascript 代码，因为提交了多次留言，就导致在留言展现页不断滴弹alert弹框，影响用户筹款。

【事故处理】：
给这次事故评为P0事故。通知整个技术部，一起排查，发现了问题后，考虑到解决方案：
最快的就是让后端在数据库，对这几个提交的js代码进行处理：删掉，或者转义。先解决问题，毕竟每一分钟就会影响到公司的账户进账。

然后前端对所有的提交输入框的特殊字符都进行了转义上线，然后再提交，到展现的时候，特殊字符已经被转义了，就不会执行alert弹窗。前端在根源上避免了通过输入框进行 javascript 代码注入。

【事故分析】：
其实这次事故就是XSS攻击，是我们的网站安全性薄弱，被钻了空子。



useEffect和useLayoutEffect区别

useEffect:回调在组件渲染完成之后的一个延迟函数中执行，不会阻塞视图渲染
useLayoutEffect:在render之后执行，执行时机相当于componentDidMount和componentDidUpdate，会同步触发组件重新render，会阻塞视图渲染

作者：攻城师不浪
链接：https://juejin.cn/post/7117142442926686215
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


const promiseAll = (promises) => {
  let res = []
  let count = 0
  return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
          Promise.resolve(promises[i]).then((data) => {
              count++
              // 重点，向对应下标塞数据，保证顺序
              res[i] = data
              if (count === promises.length) {
                  resolve(res)
              }
          }).catch(err => {
              reject(err)
          })
      }
  })
}


const throttle = (fn, delay) => {
  let timer = null
  let startTime = 0
  return (...args) => {
      timer && clearTimeout(timer)
      const now = Date.now()
      if (now - startTime > delay) {
          fn.apply(this, args)
          startTime = now
      } else {
          timer = setTimeout(() => {
              fn.apply(this, args)
          }, delay)
      }
  }
}


const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
          fn.apply(this, args)
      }, delay)
  }
}


现在有个父子组件，我希望在父级中给子组件绑定一个原生click事件，这个事件会被触发吗？
<div id='app'>
  <my-button @click='change'></my-button>
</div>
<script>
 export default {
  methods: {
    change() {
      alert(1)
    }
  }
 }
</script>

答：不能，绑定的该click事件会被当做组件上的一个普通属性看待，如果想要使click事件生效，可以使用 @click.native='change' 的方式来实现。


setState 是同步的还是异步的
有时表现出同步，有时表现出异步

setState 只有在 React 自身的合成事件和钩子函数中是异步的，在原生事件和 setTimeout 中都是同步的
setState 的异步并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的异步。当然可以通过 setState 的第二个参数中的 callback 拿到更新后的结果
setState 的批量更新优化也是建立在异步（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在异步中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行覆盖，去最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新
合成事件中是异步
钩子函数中的是异步
原生事件中是同步
setTimeout中是同步
#


vue的双向数据绑定原理是什么？
Vue.js 中的双向数据绑定原理是基于数据劫持和发布-订阅模式实现的。

1.数据劫持（Data Binding）：Vue.js 使用了 Object.defineProperty() 方法来劫持（或者说监听）对象属性的读取和赋值操作，当数据发生变化时，能够触发相应的更新操作。通过这种方式，Vue.js 能够追踪数据的变化。
2.发布-订阅模式（Publish-Subscribe Pattern）：Vue.js 中有一个发布者-订阅者模式的实现，当数据发生变化时，会通知所有依赖这个数据的地方进行更新。这种机制保证了数据和视图的一致性。

具体来说，Vue.js 将 data 中的属性通过 Object.defineProperty() 方法转化为 getter 和 setter，当数据被访问或者修改时，会触发对应的 getter 和 setter 方法。在 Vue 实例初始化时，会创建一个依赖收集器，用来收集所有依赖于数据的 Watcher，当数据发生变化时，会通知所有的 Watcher 执行更新操作，进而更新视图。
这种双向绑定的机制使得开发者可以在视图层面直接操作数据，而无需手动更新 DOM，极大地提高了开发效率和代码可维护性。