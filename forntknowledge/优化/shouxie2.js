手写源码
https://juejin.cn/post/6860882844533653517 

【腾讯精选50题】刷题打卡计划
https://juejin.cn/post/7070483145883287588
春招腾讯50题计划 https://juejin.cn/column/7070454142849777678

春招前你一定可以学会的【回溯算法】| ByteDance
https://juejin.cn/post/7069778074853703693

从 0 到 1 手撕 Javascript 核心面试知识点
https://juejin.cn/post/6949961783561961486

金三银四：20道前端手写面试题
https://juejin.cn/post/7079681931662589960


编写一个函数计算多个数组的交集
const intersection = function(...args) {  
    if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  return [...new Set(args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  }))]
};

有效三角形的个数
https://www.pzijun.cn/algorithms/list/8.html#%E8%A7%A3%E6%B3%95%EF%BC%9A%E6%8E%92%E5%BA%8F-%E5%8F%8C%E6%8C%87%E9%92%88

二叉树的最近公共祖先

const lowestCommonAncestor = function(root, p, q) {
  if(root == null || root == p || root == q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if(left === null) return right
  if(right === null) return left
  return root
};

平衡二叉树
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。 https://www.pzijun.cn/algorithms/tree/13.html

二叉搜索树中第K小的元素
既然是二叉搜索树的话，不难想到二叉搜索树的中序遍历结果就是递增的。再次基础上我们只需要创建一个数组存储中序遍历结果，最后返回第k个元素即可。 
空间复杂度 O（N）
var kthSmallest = function(root, k) {
    const arr = [] 
    const dfs = (root) => {
        if(!root) return  // 递归终止条件
        dfs(root.left) // 中序遍历
        arr.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return arr[k-1]
 };

 https://juejin.cn/post/7077955225306267685

字符串相乘  https://www.pzijun.cn/algorithms/string/7.html#%E8%A7%A3%E6%B3%95%E4%B8%80%EF%BC%9A%E5%B8%B8%E8%A7%84%E8%A7%A3%E6%B3%95
输入: num1 = "2", num2 = "3"
输出: "6"
 
字符串转换整数 https://www.pzijun.cn/algorithms/string/8.html
const myAtoi = function(s) {
    // parseInt
    const number = parseInt(s);
    // 判断 parseInt 的结果是否为 NaN，是则返回 0
    if(isNaN(number)) {
        return 0;
    } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        // 超出
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return number;
    }
}

使用最小花费爬楼梯 https://www.pzijun.cn/algorithms/algo/3.html#%E8%A7%A3%E6%B3%95%EF%BC%9A%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
let minCostClimbingStairs = function(cost) {
    cost.push(0)
    let dp = [], n = cost.length
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i = 2; i < n; i++){
        dp[i] = Math.min(dp[i-2] , dp[i-1]) + cost[i]
    }
    return dp[n-1]
}

买卖股票的最佳时机 https://www.pzijun.cn/algorithms/algo/5.html#%E8%A7%A3%E6%B3%95%EF%BC%9A%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
let maxProfit = function(prices) {
    let max = 0, minprice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        max = Math.max(max, prices[i] - minprice)
    }
    return max
}

买卖股票的最佳时机 II https://www.pzijun.cn/algorithms/algo/9.html#%E8%A7%A3%E6%B3%95%E4%B8%80%EF%BC%9A%E5%B3%B0%E5%BA%95%E4%B9%B0%E5%85%A5%EF%BC%8C%E5%B3%B0%E9%A1%B6%E5%8D%96%E5%87%BA
let maxProfit = function(prices) {
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i]
        }
    }
    return profit
}

回文子串
输入："abc"
输出：3
解释：三个回文子串: "a", "b", "c"
let countSubstrings = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        if (isPalindrome(s.substring(i, j + 1))) {
          count++
        }
      }
    }
    return count
  }
  
  let isPalindrome = function(s) {
    let i = 0, j = s.length - 1
    while (i < j) {
      if (s[i] != s[j]) return false
      i++
      j--
    }
    return true
  }
  
检查两个字符串是否几乎相等
  如果两个字符串 word1 和 word2 中从 'a' 到 'z' 每一个字母出现频率之差都 不超过 3 ，那么我们称这两个字符串 word1 和 word2 几乎相等 。
给你两个长度都为 n 的字符串 word1 和 word2 ，如果 word1 和 word2 几乎相等 ，请你返回 true ，否则返回 false 。
一个字母 x 的出现 频率 指的是它在字符串中出现的次数。
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 const checkAlmostEquivalent = (word1, word2) => {
    const map = new Map();
    for (const w of word1) {
        if(map.has(w)){
            map.set(w, map.get(w) + 1);
        }
        else{
            map.set(w,1);
        }
    }
    for (const w of word2) {
        if(map.has(w)){
            map.set(w, map.get(w) - 1);
        }
        else{
            map.set(w,-1);
        }
    }
    for (const val of map.values()) {
        if (Math.abs(val) > 3) return false;
    }
    return true;
};
链接：https://juejin.cn/post/7067477987418963982

洗牌算法随机 https://segmentfault.com/a/1190000022736837
export const shuffle = (arr) => {
  var result = [],
      random;
  while (arr.length > 0) {
      random = Math.floor(Math.random() * arr.length);
      result.push(arr[random])
      arr.splice(random, 1)
  }
  return result;
}

https://juejin.cn/post/7031322059414175774  ****************************8
function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  
  if (cache.has(obj)) return cache.get(obj) // 如果出现循环引用，则返回缓存的对象，防止递归进入死循环
  let cloneObj = new obj.constructor() // 使用对象所属的构造函数创建一个新对象
  cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}
  
// 测试
const obj = { name: 'Jack', address: { x: 100, y: 200 } }
obj.a = obj // 循环引用
const newObj = deepClone(obj)
console.log(newObj.address === obj.address) // false

ES5 继承（寄生组合继承）
function Parent(name) {
  this.name = name
}
Parent.prototype.eat = function () {
  console.log(this.name + ' is eating')
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.contructor = Child

// 测试
let xm = new Child('xiaoming', 12) 
console.log(xm.name) // xiaoming
console.log(xm.age) // 12
xm.eat() // xiaoming is eating

ES6 继承
class Parent {
  constructor(name) {
      this.name = name
  }
  eat() {
      console.log(this.name + ' is eating')
  }
}

class Child extends Parent {
  constructor(name, age) {
      super(name)
      this.age = age
  }
}

// 测试
let xm = new Child('xiaoming', 12) 
console.log(xm.name) // xiaoming
console.log(xm.age) // 12
xm.eat() // xiaoming is eating
  
9、获取 url 参数
URLSearchParams 方法
// 创建一个URLSearchParams实例
const urlSearchParams = new URLSearchParams(window.location.search);
// 把键值对列表转换为一个对象
const params = Object.fromEntries(urlSearchParams.entries());

function getParams(url) {
    const res = {}
    if (url.includes('?')) {
      const str = url.split('?')[1]
      const arr = str.split('&')
      arr.forEach(item => {
        const key = item.split('=')[0]
        const val = item.split('=')[1]
        res[key] = decodeURIComponent(val) // 解码
      })
    }
    return res
  }
  
  // 测试
  const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
  console.log(user) // { user: '阿飞', age: '16' }

class EventEmitter {    //https://juejin.cn/post/7031322059414175774
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
eventBus.off('task', task1)
setTimeout(() => {
  eventBus.emit('task') // task2
}, 1000)

手写浏览器帧率 FPS  https://juejin.cn/post/6949961783561961486
原理
window.requestAnimationFrame 会在浏览器的每一帧有空闲时间的时候执行, 当计时器结束, 就可以知道1s经过了多少帧, 由此算出帧率。
function showFPS(wait) {
  let prev = +new Date();
  let fps = 0;
  function loop() {
    let now = +new Date();
    if (now - prev >= wait) {
      console.log(fps);
    } else {
      fps++;
      window.requestAnimationFrame(loop)
    }
  }
  window.requestAnimationFrame(loop);
}

如何判断字符串是否括号匹配 https://juejin.cn/post/7082261821322690591
匹配："{123[222(456)]}"
不匹配： "{([123)555]}"
function matchBrackets(str: string): boolean{
  const length = str.length;
  if(length === 0) return true; //如果字符串长度为0，那么其中不会存在括号，判断其符合括号匹配
  const stack = [];
  const leftBtackets = "{[(";
  const rightBtackets = ")]}";
  for(let i=0; i<length; i++){
    if(leftBtackets.includes(str[i])){//如果是左括号，进行入栈操作
    //if(str[i] === '{' || str[i] === '[' || str[i] === '(' ){
      stack.push(str[i])
    }else if(rightBtackets.includes(str[i])){//如果是右括号，判断其是否和栈顶的元素相匹配，
    //}else if(str[i] === '}' || str[i] === ']' || str[i] === ')'){
      const top = stack[stack.length - 1];//这里四栈顶元素
      if(ifMatch(top,str[i])){//如果匹配，那么则进行出栈操作，并继续向下进行。这里的判断可以再写一个方法
        stack.pop()
      }else{//如果不匹配，那么这个字符串就是括号不匹配的，返回false
        return false
      }
    }
  }
  if(stack.length === 0) return true;
  return false
}

function ifMatch(left:string, right:string): boolean{
  if(left === "{" && right === "}") return true;
  if(left === "[" && right === "]") return true;
  if(left === "(" && right === ")") return true;
  return false
}

阶乘后的零 https://juejin.cn/post/7079314136143757343
输入：n = 3
输出：0
解释：3! = 6 ，不含尾随 0

输入：n = 5
输出：1
解释：5! = 120 ，有一个尾随 0

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0;
  while (n !== 0) {
      n = Math.floor(n / 5);
      res += n;
  }
  return res;
};

增量元素之间的最大差值
给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。

返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。

输入：nums = [7,1,5,4]
输出：4
解释：
最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。
注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 > 4 ，但 i > j 不满足题面要求，所以 6 不是有效的答案。
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumDifference = function (nums) {
  let n = nums.length;
  let max = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j && nums[i] < nums[j]) {
        if (nums[j] - nums[i] > max) {
          max = nums[j] - nums[i];
        }
      }
    }
  }
  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumDifference = function (nums) {
  const n = nums.length;
  let ans = -1,
    min = nums[0];
  for (let j = 1; j < n; j++) {
    if (nums[j] > min) {
      ans = Math.max(ans, nums[j] - min);
    } else {
      min = nums[j];
    }
  }
  return ans;
};

链接：https://juejin.cn/post/7068940837274517535

实现 dom to json
React 把真实DOM转换成虚拟DOM
// DOM2JSON
/*
<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
把上诉dom结构转成下面的JSON格式
{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
*/
const dom2json = function(domTree) {
  // create an obj
  let obj = {}
  // get the tag name
  obj.tag = domTree.tagName
  // setup array for children
  obj.children = []
  // iterate each child node
  domTree.childNodes.forEach((child) => {
    // dfs, it will return json of this child
    obj.children.push(dom2json(child))
  })
  return obj
}

手写代码：写个单例模式
这里是用 ES6 Class 来实现的单列模式，使用 ES5 Function 实现会比较复杂，有兴趣的也可以尝试。
// es6 class
class SingleClass {
  constructor() {
    this.instance = null
  }

  static getInstance(name) {
    if (this.instance) return this.instance
    this.instance = new SingleClass(name)
    return this.instance
  }
}
let Jack = SingleClass.getInstance('Jack');
let Tom = SingleClass.getInstance('Tom');
console.log( Jack === Tom ); // true

一道来自蚂蚁的笔试题
给一个任意长度的字符串，从中取任意n个元素，输出这些元素的所有可能的组合。 https://juejin.cn/post/7013745197653688350
前提：会确保输入的字符串没有重复元素

输入字符'abc', 任意取2个元素 输出: 'ab','ac','bc','ba','ca','cb'


旋转图像 https://juejin.cn/post/6992775762491211783 ****************************************
输入： matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出： [[7,4,1],[8,5,2],[9,6,3]]
思路

首先输入
1 2 3
4 5 6
7 8 9
复制代码
通过交换matrix[i][j], matrix[j][i] 得到
1 4 7
2 5 8
3 6 9
复制代码
最后将得到每组数组倒序排列即可
7 4 1
8 5 2
9 6 3
var rotate = function(matrix) {
  for(let i = 0; i < matrix.length; i++){
      for(let j = i; j < matrix.length; j++){
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
  }
  return matrix.map(item => item.reverse());
};

49. 字母异位词分组 https://juejin.cn/post/6992775762491211783  ****************************************
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
var groupAnagrams = function(strs) {
  const recordMap = {};
  const result = [];
  for(let str of strs){
      const sortStr = str.split('').sort().join('');
      if(recordMap[sortStr]){
          recordMap[sortStr].push(str);
      } else {
          recordMap[sortStr] = [str];
      }
  }
  for(let key in recordMap){
      result.push(recordMap[key])
  }
  return result;
};

172. 阶乘中的零  https://juejin.cn/post/6989031479753834504
示例 1:
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
我们发现只有5的倍数的阶乘，才会产生5, 所以我们需要看看阶层数有多少个5，代码如下：

var trailingZeroes = function (n) {
  let r = 0;
  while (n > 1) {
    n = Math.floor(n / 5);
    r += n;
  }
  return r;
};

写一个大数相乘的解决方案。传两个字符串进来，返回一个字符串 **********************************
https://juejin.cn/post/6844904161830502407

剑指 Offer 61. 扑克牌中的顺子 https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

两数之和
题目描述：在数组上定义一个方法 findSum(target)，要求找出数组中的两个不同位置的数，使得其和为 target。例如：
nums = [1,2,3,5,-2,2,6]
nums.findSum(4) -> [[1,3],[2,2],[-2,6]]

Array.prototype.findSum = function (target) {
  let ans = []
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === target) ans.push([this[i], this[j]])
    }
  }
  return ans
}

nums.findSum(4) // [ [ 1, 3 ], [ 2, 2 ], [ -2, 6 ] ]

Array.prototype.findSum = function (target) {
  const map = new Map()
  const ans = []
  for (let e of this) {
    if (!map.has(e)) {
      map.set(target - e, e)
    } else {
      ans.push([map.get(e), e])
    }
  }
  return ans
}

nums.findSum(4) // [ [ 1, 3 ], [ 2, 2 ], [ -2, 6 ] ]
链接：https://juejin.cn/post/7083520664442929166

三数之和
https://101.zoo.team/shu-zu/shu-zu-part-4-zi-mi-fen-zu-san-shu-zhi-he-wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-ju-zhen-zhi-ling-h
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

const threeSum = function (nums) {
  const res = [];
  const uniqueMap = {};
  nums.sort();
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const item = [nums[i], nums[j], nums[k]];
          if (!uniqueMap[item.join(',')]) {
            res.push(item);
            uniqueMap[item.join(',')] = 1;
          }
        }
      }
    }
  }
  return res;
};

颠倒二进制位 https://101.zoo.team/zhan-he-dui-lie/zhan-he-dui-lie-part-2-you-xiao-de-kuo-hao-pa-si-ka-san-jiao-xing-he-dian-dao-er-jin-zhi-wei
输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。

输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。

const reverseBits = function (n) {
  const temp = n.toString(2).padStart(32, 0).split('').reverse().join('');
  return Number.parseInt(temp, 2);
};

32 实现模板字符串解析功能 https://juejin.cn/post/6968713283884974088#heading-1 *************************************
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

function render(template, data) {
  let computed = template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return data[key];
  });
  return computed;
}

7. 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
https://juejin.cn/post/7020562888657993741
const dom2json = (rootDom) => {
  if (!rootDom) {
    return 
  }

  let rootObj = {
    tagName: rootDom.tagName,
    children: []
  }

  const children = rootDom.children
  // 读取子节点（元素节点）
  if (children && children.length) {
    Array.from(children).forEach((ele, i) => {
      // 递归处理
      rootObj.children[ i ] = dom2json(ele)
    })
  }

  return rootObj
}

函数节流(throttle)  
使用时间戳
function throttle(fn, wait)  {
  // 记录上一次执行的时间戳
  let previous = 0;
  return function(...args) {
      // 当前的时间戳，然后减去之前的时间戳，大于设置的时间间隔，就执行函数，否则不执行
      if(Date.now() - previous > wait) {
          // 更新上一次的时间戳为当前时间戳
          previous = Date.now();
          fn.apply(this, args);
      }
  }
}
使用定时器
function throttle(fn, wait)  {
  // 设置一个定时器
  let timer = null;
  return function(...args) {
      // 判断如果定时器不存在就执行，存在则不执行
      if(!timer) {
          // 设置下一个定时器
          timer = setTimeout(() => {
              // 然后执行函数，清空定时器
              timer = null;
              fn.apply(this, args)
          }, wait)
      }
  }
}

定时器和时间戳结合
function throttle(fn, wait)  {
  // 记录上一次执行的时间戳
  let previous = 0;
  // 设置一个定时器
  let timer = null;
  return function(...args) {
      // 当前的时间戳，然后减去之前的时间戳，大于设置的时间间隔
      if(Date.now() - previous > wait) {
          clearTimeout(timer);
          timer = null
          // 更新上一次的时间戳为当前时间戳
          previous = Date.now();
          fn.apply(this, args);
      } else if(!timer) {
          // 设置下一个定时器
          timer = setTimeout(() => {
              timer = null;
              fn.apply(this, args)
          }, wait)
      }
  }
}

函数柯里化（curry）是函数式编程里面的概念。curry的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
const curry = (fn, ...args) => 
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));


10进制转换 https://juejin.cn/post/6855129007852093453
给定10进制数，转换成[2~16]进制区间数，就是简单模拟一下。
function Conver(number, base = 2) {
  let rem, res = '', digits = '0123456789ABCDEF', stack = [];

  while (number) {
    rem = number % base;
    stack.push(rem);

    number = Math.floor(number / base);
  }

  while (stack.length) {
    res += digits[stack.pop()].toString();
  }
  
  return res;
}

js实现36进制 https://blog.csdn.net/weixin_44283432/article/details/108091780
function getNums36() {
  var nums36 = [];
  for (var i = 0; i < 36; i++) {
      if (i >= 0 && i <= 9) {
          nums36.push(i);
      } else {
          nums36.push(String.fromCharCode(i + 87));
      }
  }
  return nums36;
}

//十进制数转成36进制
function scale36(n){
  var arr = [];
  var nums36 = getNums36();
  while(n){
      var res = n % 36;
      //作为下标，对应的36进制数，转换成
      arr.unshift(nums36[res]);
      //去掉个位
      n = parseInt(n / 36);
  }
  return arr.join("");
}

JS 实现10进制转换36进制 https://juejin.cn/post/6951938260021018632


连续数字区间 https://blog.csdn.net/sysuzjz/article/details/104858308
给定一个升序整形数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间为如下：[“0->2”, “4->5”, “7”, “13”, “15->16”]
function summaryRanges(arr) {
  if (!arr.length) {
      return [];
  }
  let left = 0, right = 0;
  const result = [];
  while(left < arr.length) {
      while (right < arr.length - 1 && arr[right + 1] - arr[right] <= 1) {
          right++;
      }
      if (arr[left] === arr[right]) {
          result.push(arr[left]);
      } else {
          result.push(`${arr[left]}->${arr[right]}`);
      }
      left = right + 1;
      right = left;
  }
  return result;
}
console.log(summaryRanges([0,1,2,4,5,7,13,15,16,16, 18]))

// ===============================连续数字
function arrange(source) {
  var t;
  var ta;
  var r = [];

  for(var j=0;j<source.length;j++){
      var v=source[j];
      if(v!=null){
        console.log(t, v);   // 跟踪调试用
        if (t === v) {
            ta.push(t);
            t++;
            continue;
        }
        ta = [v];
        t = v + 1;
        r.push(ta);
    }
  }

  return r;
}

var arr = [3, 4, 13, 14, 15, 17, 20, 22];
console.log(JSON.stringify(arrange(arr)));
      //[[3,4],[13,14,15],[17],[20],[22]]

16、判断一个对象有环引用
题目描述：验证一个对象有无环引用
var obj = {
    a: {
        c: [
            1, 2
        ]
    },
    b: 1
}
obj.a.c.d = obj
console.log(cycleDetector(obj)) // true

实现思路：用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用
function cycleDetector(obj) {
    const arr = [obj]
    let flag = false

    function cycle(o) {
        const keys = Object.keys(o)
        for (const key of keys) {
            const temp = o[key]
            if (typeof temp === 'object' && temp !== null) {
                if (arr.indexOf(temp) >= 0) {
                    flag = true
                    return
                }
                arr.push(temp)
                cycle(temp)
            }
        }
    }

    cycle(obj)

    return flag
}
17、计算一个对象的层数
题目描述：给你一个对象，统计一下它的层数
const obj = {
  a: { b: [1] },
  c: { d: { e: { f: 1 } } }
}

console.log(loopGetLevel(obj)) // 4

function loopGetLevel(obj) {
  var res = 1;

  function computedLevel(obj, level) {
      var level = level ? level : 0;
      if (typeof obj === 'object') {
          for (var key in obj) {
              if (typeof obj[key] === 'object') {
                  computedLevel(obj[key], level + 1);
              } else {
                  res = level + 1 > res ? level + 1 : res;
              }
          }
      } else {
          res = level > res ? level : res;
      }
  }
  computedLevel(obj)

  return res
}

18、对象的扁平化 https://juejin.cn/post/7023906112843808804
const obj = {
  a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }
 const isObject = (val) =>  typeof val === "object" && val !== null

 function flatten(obj) {
   if (!isObject(obj)) return
   const res = {}
   const dfs = (cur, prefix) => {
     if (isObject(cur)) {
       if (Array.isArray(cur)) {
         cur.forEach((item, index) => {
           dfs(item, `${prefix}[${index}]`)
         })
       } else {
         for(let key in cur) {
           dfs(cur[key], `${prefix}${prefix ? '.' : ''}${key}`)
         }
       }
     } else {
       res[prefix] = cur
     }
   }
   dfs(obj, '')
   return res
 }
 
 // 测试
 console.log(flatten(obj))
 

对象数组转换成tree数组 https://juejin.cn/post/6991724298197008421

> 将entries 按照 level 转换成 result 数据结构

const entries = [
    {
        "province": "浙江", "city": "杭州", "name": "西湖"
    }, {
        "province": "四川", "city": "成都", "name": "锦里"
    }, {
        "province": "四川", "city": "成都", "name": "方所"
    }, {
        "province": "四川", "city": "阿坝", "name": "九寨沟"
    }
];
	
const level = ["province", "city", "name"];

const  result = [
	{
		value:'浙江'，
		children:[
			{
				value:'杭州',
				children:[
					{
						value:'西湖'
					}
				]
			}
		]
	},
	{
		value:'四川'，
		children:[
			{
				value:'成都',
				children:[
					{
						value:'锦里'
					},
					{
						value:'方所'
					}
				]
			},
			{
				value:'阿坝',
				children:[
					{
						value:'九寨沟'
					}
				]
			}
		]
	},
]
思路： 涉及到树形数组，采用递归遍历的方式
function transfrom(list, level) {
  const res = [];
  list.forEach(item => {
    pushItem(res, item, 0);
  });

  function pushItem(arr, obj, i) {
    const o = {
      value: obj[level[i]],
      children: [],
    };
    // 判断传入数组里是否有value等于要传入的项
    const hasItem = arr.find(el => el.value === obj[level[i]]);
    let nowArr;
    if(hasItem) {
      // 存在，则下一次遍历传入存在项的children
      nowArr = hasItem.children;
    }else{
      // 不存在 压入arr，下一次遍历传入此项的children
      arr.push(o);
      nowArr = o.children;
    }
    if(i === level.length - 1) delete o.children;
    i++;
    if(i < level.length) {
      // 递归进行层级的遍历
      pushItem(nowArr, obj, i);
    }
  }
}

transfrom(entries, level);   
 