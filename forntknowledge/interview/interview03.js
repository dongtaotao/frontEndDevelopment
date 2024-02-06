
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
