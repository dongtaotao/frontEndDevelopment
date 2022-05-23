前端算法渣的救赎之路🚀 *******************************************************************************
https://juejin.cn/post/6844904175562653710#heading-82

1. 「算法与数据结构」链表的9个基本操作 
https://juejin.im/post/6850418120755494925#heading-11

前端算法面试必刷题系列
https://juejin.cn/column/6960664179678134279

2. suanfa
https://github.com/Chocolate1999/leetcode-javascript/blob/master/DP/LeetCode%20121.%20%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.md

3.https://juejin.im/user/2981531267112520/posts

4.前端面试准备的50道算法题上 ******************
https://juejin.cn/post/7080174781508616206

实现Reduce
/*
特点：
初始值不传时的特殊处理：会默认使用数组中的第一个元素
函数的返回结果会作为下一次循环的prev
回调函数一共接受四个参数（arr.reduce(prev, next, currentIndex, array))）
prev：上一次调用回调时返回的值
正在处理的元素
正在处理的元素的索引
正在遍历的集合对象
*/
Array.prototype.myReduce = function (fn, prev) {
  for (let i = 0; i < this.length; i++) {
    // 初始
    if (typeof prev === 'undefined') {
      prev = fn(this[i], this[i + 1], i + 1, this);
      i++;
    } else {
      prev = fn(prev, this[i], i, this);
    }
  }
  return prev;
}

let sum = [1, 2, 3].myReduce((pre, cur) => {
  return pre + cur;
})

console.log(sum);

//判断环形连标
var hasCycle = function(head) {
  let p1 = head;
  let p2 = head;
  while(p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if(p1 === p2) {
      return true
    }
  }
  return false
}

//
const tree = {
  val: 'a',
  children: [
      {
          val: 'b',
          children: [
              {
                  val: 'd',
                  children: [],
              },
              {
                  val: 'e',
                  children: [],
              }
          ],
      },
      {
          val: 'c',
          children: [
              {
                  val: 'f',
                  children: [],
              },
              {
                  val: 'g',
                  children: [],
              }
          ],
      }
  ],
};
const bds = (root) => {
  const q = [root];
  while(q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach(child => {
      q.push(child)
    })
  }
}

var lengthOfString = function(s) {
  let l=0;
  let res = 0;
  let map = new Map();
  for(let r=0; r<s.length;r++) {
    if(map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) +1
    }
    res = Math.max(res, r-l+1);
    map.set(s[r], r)
  }
  return res
}

const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs)
}
dfs(tree)

const preorder = (root) => {
  if(!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left)
  preorder(root.right)
}

preorder(bt)

const inorder = (root) => {
  if(!root) {
    return;
  }
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

inorder(bt)

// 最大深度
var maxDepth = (root) => {
  let res = 0;
  const dfs = (n, l) =>{
    if(!n) {return;}
    res = Math.max(res, l);
    dfs(n.left, l+1);
    dfs(n.right, l+1);
  }
  dfs(root, 1);
  return res;
}

var maxDepth = function (root) {
  if (!root) return 0 
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 最小深度
var minDepth = (root) => {
  if(!root) {return;}
  const q = [[root,1]];
  while(q.length) {
    const [n, l] = q.shift();
    if(!n.left && !n.right) {
      return l;
    }
    if(n.left) {
      q.push([n.left, l+1])
    };
    if(n.right) {
      q.push([n.right, l+1])
    }
  }
}

var inorder = (root) => {
  const res = [];
  const rec = (n) => {
    if(!n) return;
    rec(n.left);
    res.push(n.val);
    rec(n.right)
  }
  rec(root);
  return res;
}

// 二叉树和
var hasPathSum = (root, sum) => {
  if(!root) return false;
  let res = false;
  const dfs = (n, s) => {
    if(!n.left && !n.right && s === sum) {
      return true;
    }

    if(n.left) dfs(n.left, s+n.left.val);
    if(n.right) dfs(n.right, s+n.right.val);
  }

  dfs(root, root.val);
  return res;
}

加1
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  const result = [1, ...digits];
  return result;
};

爬楼梯
var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

回文子串
示例 1：
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
function check(s,l,r){
  while(l<r){
    if(s[l]!==s[r]) return false;
    else l++,r--
  }
  return true;
}

var countSubstrings = function(s) {
  const len = s.length;
  // 因为每个字符可以是回文子串，所以初始化res为len
  let res = len;
  // 判断所有可能子串是否是回文串
  for(let i = 0;i<len-1;i++){
    for(let j = i+1;j<len;j++){
      if(check(s,i,j)) res++
    }
  }
  return res;
};

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

//https://juejin.cn/post/7031793667492806670?utm_source=gold_browser_extension#heading-28
手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）
{
 tag: 'DIV',
 attrs:{
   id:'app'
  },
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
 把上诉虚拟Dom转化成下方真实Dom
 <div id="app">
   <span>
     <a></a>
   </span>
   <span>
     <a></a>
     <a></a>
   </span>
 </div>
 
 复制代码
// 真正的渲染函数
function _render(vnode) {
 // 如果是数字类型转化为字符串
 if (typeof vnode === "number") {
   vnode = String(vnode);
  }
 // 字符串类型直接就是文本节点
 if (typeof vnode === "string") {
   return document.createTextNode(vnode);
  }
 // 普通DOM
 const dom = document.createElement(vnode.tag);
 if (vnode.attrs) {
   // 遍历属性
   Object.keys(vnode.attrs).forEach((key) => {
     const value = vnode.attrs[key];
     dom.setAttribute(key, value);
   });
  }
 // 子数组进行递归操作 这一步是关键
 vnode.children.forEach((child) => dom.appendChild(_render(child)));
 return dom;
}

27. 移除元素
示例 1：
输入： nums = [3,2,2,3], val = 3
输出： 2, nums = [2,2]
 var removeElement = function(nums, val) {
  let ans = 0;
  for(const num of nums) {
      if(num != val) {
        nums[ans] = num;
        ans++;
      }
  }
  return ans;
};

43. 字符串相乘
示例 1:
输入: num1 = "2", num2 = "3" 输出: "6"
示例 2:
输入: num1 = "123", num2 = "456" 输出: "56088"
var multiply = function(num1, num2) {
  return BigInt(num1)*BigInt(num2)+""
};

//================================================s
数组转树 https://www.cnblogs.com/mengff/p/13142128.html
const arr = [
  {id:1, parentId: null, name: 'a'},
  {id:2, parentId: null, name: 'b'},
  {id:3, parentId: 1, name: 'c'},
  {id:4, parentId: 2, name: 'd'},
  {id:5, parentId: 1, name: 'e'},
  {id:6, parentId: 3, name: 'f'},
  {id:7, parentId: 4, name: 'g'},
  {id:8, parentId: 7, name: 'h'},
]

function array2Tree(arr) {
  if(!Array.isArray(arr) || !arr.length) return;
  let map = {};
  arr.forEach(item => map[item.id] = item);
  let roots = [];
  arr.forEach(item => {
    const parent = map[item.parentId];
    if(parent){
      (parent.children || (parent.children=[])).push(item);
    }
    else{
      roots.push(item);
    }
  })

  console.log(JSON.stringify(roots))
  return roots;
}

[{
	"id": 1,
	"parentId": null,
	"name": "a",
	"children": [{
		"id": 3,
		"parentId": 1,
		"name": "c",
		"children": [{
			"id": 6,
			"parentId": 3,
			"name": "f"
		}]
	}, {
		"id": 5,
		"parentId": 1,
		"name": "e"
	}]
}, {
	"id": 2,
	"parentId": null,
	"name": "b",
	"children": [{
		"id": 4,
		"parentId": 2,
		"name": "d",
		"children": [{
			"id": 7,
			"parentId": 4,
			"name": "g",
			"children": [{
				"id": 8,
				"parentId": 7,
				"name": "h"
			}]
		}]
	}]
}]

const node ={
	"id": 1,
	"parentId": null,
	"name": "a",
	"children": [{
		"id": 3,
		"parentId": 1,
		"name": "c",
		"children": [{
			"id": 6,
			"parentId": 3,
			"name": "f"
		}]
	}, {
		"id": 5,
		"parentId": 1,
		"name": "e"
	}]
}
树转数组
function transArr(node) {
  let q = [node];
  let data = [];
  while (q.length ) {
    let item = q.shift();
    data.push({
      id: item.id,
      parentId: item.parentId,
      name: item.name
    })

    item.children && item.children.forEach((it) => {
      q.push(it)
    })
  }
  console.log(data)
  return data
}

125. 验证回文串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
const isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let n = s.length, left = 0, right = n - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

55. 跳跃游戏
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。
示例 1：
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

定义能够跳的最远位置 canJumpMax，初始化为 0。
遍历数组，如果当前值大于 canJumpMax 则不能跳到末尾返回 false。
每个位置都可以作为起跳点，将 canJumpMax 不断更新，i + nums[i] 也就是当前位置能够跳到的最远位置。
如果可以跳到最后即成功返回 true。

const camJump = function(nums) {
  let canJumpMax = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (i > canJumpMax) {
      return false
    }
    canJumpMax = Math.max(canJumpMax, i + nums[i])
  }
  return true
}
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game

https://juejin.cn/post/6844904175562653710
1. 使用一个变量保存当前可到达的最大位置
2. 时刻更新最大位置
3. 可达位置小于数组长度返回false，反之即反
var canJump = function(nums) {
    let k = 0;
    for(let i = 0;i < nums.length;i++){
        if(i > k) return false;
        k = Math.max(k,i + nums[i]);
    }
    return true;
};


300. 最长递增子序列 https://leetcode-cn.com/problems/longest-increasing-subsequence/  不会
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
const lengthOfLIS = function(nums) {
  let n = nums.length
  if (n == 0) {
      return 0
  }
  let dp = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
  }
  return Math.max(...dp) 
}
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/qian-duan-shi-tang-ti-jie-dptan-xin-er-f-uzs0/

62. 不同路径 https://leetcode-cn.com/problems/unique-paths/
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

输入：m = 3, n = 7
输出：28
// const uniquePaths = (m, n) => {
//     const dp = Array.from(Array(n), () => Array(m).fill(1))
//     for (let i = 1; i < n; i++) {
//         for (let j = 1; j < m; j++) {
//             dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
//         }
//     }
//     return dp[n - 1][m - 1]
// }

var uniquePaths = function(m, n) {
  const f = new Array(m).fill(1).map(() => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          f[i][j] = f[i - 1][j] + f[i][j - 1];
      }
  }
  return f[m - 1][n - 1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 const uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 const uniquePaths = function (m, n) {
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};

520. 检测大写字母
我们定义，在以下情况时，单词的大写用法是正确的：
全部字母都是大写，比如 "USA" 。
单词中所有字母都不是大写，比如 "leetcode" 。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
示例 1：
输入：word = "USA"
输出：true
var detectCapitalUse = function(word) {
  function setFirstUpCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1, str.length);
  }
  return word == word.toLowerCase()
    || word == word.toUpperCase() 
    || word == setFirstUpCase(word.toLowerCase());
};

删除排序数组中的重复项
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
示例 1:
给定数组 nums = [1,1,2], 
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

示例 2:
给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

解答思路
1.使用indexOf判断元素第一次出现的下标，不等于当前则重复，删除它
2.删除数组长度减1，所以下标要往前移动一位
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i++) {
      if(nums.indexOf(nums[i]) !== i) {
          nums.splice(i, 1)
          i --
      }
  }
  return nums.length
};

119. 最长连续序列
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
var longestConsecutive = function(nums) {
  var maxlen = 0 //最长连续序列长度
  var currlen = 1 //当前最长连续序列长度
  nums.sort((a,b) => a-b) //升序排序
  if(nums.length == 0){
      return 0
  }
  for(var i=0;i<nums.length;i++){
      if((nums[i] - 1) > nums[i-1]){//当出现不连续时，将currlen值初始化
          currlen =  1
      }
      else if((nums[i] - 1) == nums[i-1]){ //连续时，currlen值连续加1
          currlen = currlen + 1
      }
      if(currlen > maxlen){
          maxlen = currlen
      }
  }
  return maxlen
};
https://leetcode-cn.com/problems/WhsWhI/ 

手写-setTimeout 模拟实现 setInterval
function mySetInterval(fn, time = 1000) {
  let timer = null,
    isClear = false;
  function interval() {
    if (isClear) {
      isClear = false;
      clearTimeout(timer);
      return;
    }
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
  return () => {
    isClear = true;
  };
}

// let a = mySettimeout(() => {
//   console.log(111);
// }, 1000)
// let cancel = mySettimeout(() => {
//   console.log(222)
// }, 1000)
// cancel()

手写-发布订阅模式（字节）
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((item) => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, rest));
  }
}
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick"); 


将数组划分成相等数对（简单） https://juejin.cn/post/7076878023596703752
输入： nums = [3,2,3,2,2,2]
输出： true
解释：
nums 中总共有 6 个元素，所以它们应该被划分成 6 / 2 = 3 个数对。
nums 可以划分成 (2, 2) ，(3, 3) 和 (2, 2) ，满足所有要求。
var divideArray = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
      if (nums[i] !== nums[i + 1]) {
          return false;
      }
  }
  return true;
};

不同路径 https://101.zoo.team/dong-tai-gui-hua/dong-tai-gui-hua-part-3-bu-tong-lu-jing-longest-increasing-subsequence-he-dan-ci-chai-fen
/** 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 const uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1); 
};


合并区间 
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  let curr = intervals[0];
  let result = [];

  for (let interval of intervals) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1]);
    } else {
      result.push(curr);
      curr = interval;
    }
  }
  if (curr.length !== 0) {
    result.push(curr);
  }
  return result;
};

一维数组的动态和 
给你一个数组 nums , 请返回 nums 的动态和。

输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/running-sum-of-1d-array
var runningSum = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i + 1] = nums[i + 1] + nums[i]
  }
  return nums
};

实现trim方法的两种方式

const trim = (str) => { 
  return str.replace(/^\s*|\s*$/g, '')
}

console.log(trim(' 前端胖头鱼')) // 前端胖头鱼 
console.log(trim('前端胖头鱼 ')) // 前端胖头鱼 
console.log(trim(' 前端胖头鱼 ')) // 前端胖头鱼 
console.log(trim(' 前端 胖头鱼 ')) // 前端 胖头鱼


// 问题一： 输入: [1, 5, 4, '2', '3a', 'ab', {name: 'tmp'}, 4, 5, 5, 5] 输出: [1, 2, 4, 5] // 只保留数字以及数字字符串，并且去重并排序  /* 
// 题目     
// 输入: [1, 5, 4, '2', '3a', 'ab', {name: 'tmp'}, 4, 5, 5, 5]    
//  输出: [1, 2, 4, 5] // 只保留数字以及数字字符串，并且去重并排序 */

const arr = [1, 5, 4, '2', '3a', 'ab', { name: 'tmp' }, 4, 5, 5, 5];
​
function foo(arr) {
    let newArr = [];
    arr = [...new Set(arr)];//可以减少遍历次数
    arr.forEach(element => {
        if (isNaN(element) === false) {
            newArr.push(Number(element))
        }
    });
    newArr.sort((a, b) => {
        return b - a
    });
    return newArr
}
​
console.log(foo(arr))
//数组元素非常多，重复元素多
//数组元素非常多，但是数组不重复

洗牌算法随机
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




