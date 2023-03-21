
前端算法渣的救赎之路 ****************************************** 
https://juejin.cn/post/6844904175562653710 

前端学数据结构与算法（一）：不会复杂度分析，算法等于白学
https://juejin.cn/post/6858488577131708423

前端算法面试必刷题系列
https://juejin.cn/column/6960664179678134279

前端刷题路——Javascript解题秘技
https://juejin.cn/column/6961044475858649125

数组相关算法题https://juejin.cn/post/6959181929153298462

40+个JavaScript操作符，你都知道吗？
https://juejin.cn/post/7024285709435404301

前端算法入门二：时间空间复杂度&8大数据结构的JS实现
https://juejin.cn/post/7087286814230183943
前端算法入门三：5大排序算法&2大搜索&4大算法思想
https://juejin.cn/post/7088725301974269960

前端算法面试（高频题库&题目解析）🔥🔥🔥
CodeTop上的前端算法题目考察频度，抽取前 60 道题
https://github.com/hovinghuang/fe-agorithm-interview

1. 按位与操作符（&）
按位与操作符（&）会对参加运算的两个数据按二进制位进行与运算，即两位同时为 1 时，结果才为1
否则结果为0。运算规则如下：

0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

例如，3 & 5 的运算结果如下：
0000 0011
0000 0101
= 0000 0001
因此 3 & 5 的值为 1。需要注意：负数按补码形式参加按位与运算。
用途：
（1）判断奇偶
只要根据最未位是0还是1来决定，为0就是偶数，为1就是奇数。
因此可以用if ((i & 1) === 0)代替if (i % 2 === 0)来判断a是不是偶数。
（2）清零
如果想将一个单元清零，即使其全部二进制位为0，只要与一个各位都为零的数值相与，结果为零。

5. 左移操作符（<<）
左移操作符（<<）会将运算对象的各二进制位全部左移若干位，左边的二进制位丢弃，右边补0。若左移时舍弃的高位不包含1，则每左移一位，相当于该数乘以2。​

例如：
a = 1010 1110
a = a << 2

4. 按位异或运算符（^）
按位异或运算符（^）会对参加运算的两个数据按二进制位进行“异或”运算，
即如果两个相应位相同则为0，相异则为1。运算规则如下：

0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

https://juejin.cn/post/7023208826472005668
========= 栈
场景一：十进制转二进制
  后出来的余数反而要排到前面
  把余数依次入栈，就可以实现倒序输出
场景二：有效的括号
  越靠前的左括号，对应的左括号越靠前。
  左括号入栈，右括号出栈，最后栈空就是合法的。
场景三：函数调用堆栈
  最后调用的函数，最先执行完。
  js计解释器使用栈来控制调用顺序。

2. 队列实战

=========4.链表实战
1. 链表删除
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

2. 反转链表
var reverseList = function(head) {
  let p1 = head
  let p2 = null
  while(p1){
      const temp = p1.next
      p1.next = p2
      p2 = p1
      p1 = temp
  }
  return p2 
};

3. 两数相加
var addTwoNumbers = function (l1, l2){
  const l3 = new ListNode(0)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0;
  while(p1 || p2){
      const v1 = p1 ? p1.val :0
      const v2 = p2 ? p2.val :0
      const val = v1 + v2 + carry;
      carry = Math.floor(val / 10)
      p3.next = new ListNode(val % 10);
      if(p1) p1 = p1.next
      if(p2) p2 = p2.next
      p3 = p3.next
  }
  if(carry){
      p3.next = new ListNode(carry)
  }
  return l3.next
};

3. 冒泡排序
比较所有相邻的元素，如果第一个比第二个大，就交换它们。
一轮下来，可以保证最后一个数是最大的。
执行n - 1轮，就可以完成排序。

Array.prototype.bubbleSort = function() {
  for(let i=0; i<this.length -1; i++) {
    for(let j = 0;j< this.length - 1-i;j++) {
      if(this[j] > this[j+1]) {
        let temp = this[j];
        this[j+1] = this[j]
        this[j+1] = temp
      }
    }
  }
}

4. 选择排序
  找到数字中的最小值，选中它将其放在第一位。
  接着找到第二小的值，选中它并将其放置在第二位。
  以此类推n-1轮。

二分搜索
Array.prototype.binarySearch = function(item) {
  let low = 0;
  let high = this.length - 1;
  while(low < high) {
    const mid = Math.floor((low+high) / 2);
    const element = this[mid];
    if(element < item) {
      low = mid +1;
    } else {
      high = mid -1;
    } else {
      return mid
    }
  }
  return -1
}

1. 合并两个链表
var a = (l1, l2) => {
  const res = new ListNode(0);
  let p = res;
  let p1 = l1;
  let p2 = l2;
  while(p1 && p2) {
    if(p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next
    }
    p = p.next
  }

  if(p1) {
    p.next = p1;
  }
  if(p2) {
    p.next = p2;
  }
  return res.next
}

3. 翻转二叉树
var invertTree = function(root) { 
  if(!root) return null;
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
}

4. 相同的树
var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(p&&q && p.val === q.val && isSameTree(p.left,q.left) && isSameTree(p.right, q.right)) {
    return true;
  }
  return false;
}

2w字 | 28道 LeetCode 题目带你看看链表的那些套路
https://juejin.cn/post/6943787446505046046#heading-13

https://juejin.cn/post/6908493793213808647

如何用栈实现一个队列？
/**
 * 初始化构造函数
 */
 const MyQueue = function () {
  // 初始化两个栈
  this.stack1 = [];
  this.stack2 = [];
};

/**
* Push element x to the back of queue.
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  // 直接调度数组的 push 方法
  this.stack1.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length !== 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 为了达到逆序的目的，我们只从 stack2 里出栈元素
  return this.stack2.pop();
};

/**
* Get the front element.
* @return {number}
* 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
*/
MyQueue.prototype.peek = function () {
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length != 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 缓存 stack2 的长度
  const stack2Len = this.stack2.length;
  return stack2Len && this.stack2[stack2Len - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.stack1.length && !this.stack2.length;
};

整数反转（题号7）
示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21

示例 4：
输入：x = 0
输出：0

提示：
-2**31 <= x <= 2**31 - 1
var reverse = function(x) {
  var num = +Math.abs(x).toString().split('').reverse().join('');
  if(num > Math.pow(2, 31) -1 || num < Math.pow(-2, 31)) {
    return 0
  }
  return x < 0? 0 - +num : +num
}

二叉树的最近公共祖先（题号235、236）
https://juejin.cn/post/6948576997236801544
const lowestCommonAncestor = function(root, p, q) {
  if(root == null || root == p || root == q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if(left === null) return right
  if(right === null) return left
  return root
};

买卖股票的最佳时机 II（题号122）
题目
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
var maxProfit = function(prices) {
  var max = 0;
  var size = prices.length;
      for (let i = 0; i < size - 1; i++)
          if (prices[i] < prices[i + 1])
              max += prices[i + 1] - prices[i];
      return max;
};

括号生成（题号22）
https://juejin.cn/post/6949709155007463454
var generateParenthesis = function(n) {
  var list = []
  getStr(n, n, '')
  function getStr(lL, rL, str) {
    if (lL === 0 && rL === 0) {
      return list.push(str)
    }
    if (lL > 0) {
      getStr(lL - 1, rL, `${str}(`)
    }
    if (rL > lL) {
      getStr(lL, rL - 1, `${str})`)
    }
  }
  return list
};


20 - x的平方根
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x));
};

https://juejin.cn/post/6950794383385952270#heading-0
var mySqrt = function(x) {
  var left = 0
      right = x
  while (left <= right) {
    var mid = parseInt((left + right) / 2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x && (mid + 1)*(mid + 1) >x) {
      return mid
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
};

152. 乘积最大子序列
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
测试用例的答案是一个 32-位 整数。

示例 1:
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
https://leetcode-cn.com/problems/maximum-product-subarray/solution/152-cheng-ji-zui-da-zi-xu-lie-by-alexer-660/
var maxProduct = function(nums) {
  var res = nums[0]
      max = res
      min = res
      tmp1 = 0
      tmp2 = 0
  for (let i = 1; i < nums.length; i++) {
    tmp1 = max * nums[i]
    tmp2 = min * nums[i]
    max = Math.max(tmp1, tmp2, nums[i])
    min = Math.min(tmp1, tmp2, nums[i])
    res = Math.max(max, res)
  }
  return res
};

var maxProduct = function(nums) {
  let max = nums[0];
  let temp = null;
  for (let i = 0; i < nums.length; i++) {
    temp = 1;
    for (let j = i; j < nums.length; j++) {
      temp *= nums[j];
      max = Math.max(temp, max);
    }
  }
  return max;
};

阿里算法题：编写一个函数计算多个数组的交集 *********************************
https://github.com/sisterAn/JavaScript-Algorithms/issues/10
let intersection = (list , ...args) => list.filter( item => args.every( list => list.includes( item )))
console.log( intersection( [ 2,1 ], [ 2,3 ] ) ) // [ 2 ]
console.log( intersection( [ 2,1 ], [ 4,3 ] ) ) // [ ]
在原先两个数组求交集的基础上使用reduce

function intersect(nums1,nums2){
   return [...new Set(nums1.filter((item)=>nums2.includes(item)))]
}
function intersectAll(...arrs){
  return resultArr = arrs.reduce(function(prev,cur){
	  return intersect(prev,cur);
  })
}
合并之后就是
function getIntersect(...arrs) {
  return arrs.reduce(function(prev,cur){
    return [...new Set(cur.filter((item)=>prev.includes(item)))]
  })
}

两个相交链表的起始节点====
const getIntersectionNode = function(headA, headB) {
  let p1 = headA,p2 = headB;
  while(p1 || p2) {
    if(p1 === p2) return p1;
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return null
}

字节&leetcode155：最小栈（包含getMin函数的栈）
1. 题目
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
复制代码2. 解法
在常数时间内检索到最小元素的栈，即仅需保证 getMin 的时间复杂度为 O(1) 即可
var MinStack = function() {
    this.items = []
    this.min = null
};
// 进栈
MinStack.prototype.push = function(x) {
    if(!this.items.length) this.min = x 
    this.min = Math.min(x, this.min)
    this.items.push(x) 
};
// 出栈
MinStack.prototype.pop = function() {
    let num = this.items.pop() 
    this.min = Math.min(...this.items)
    return num
};
// 获取栈顶元素
MinStack.prototype.top = function() {
    if(!this.items.length) return null
    return this.items[this.items.length -1] 
};
// 检索栈中的最小元素
MinStack.prototype.getMin = function() {
    return this.min
};
作者：前端瓶子君
链接：https://juejin.cn/post/6844904138044604424

图解腾讯&leetcode20：有效的括号
var isValid = function(s) {
  let map = {
      '{': '}',
      '(': ')',
      '[': ']'
  }
  let stack = []
  for(let i = 0; i < s.length ; i++) {
      if(map[s[i]]) {
        stack.push(s[i])
      } else if(s[i] !== map[stack.pop()]){
        return false
      }
  }
  return stack.length === 0
};

leetcode1047：删除字符串中的所有相邻重复项
https://github.com/sisterAn/JavaScript-Algorithms/issues/26
输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字
符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

var removeDuplicates = function(S) {
  let stack = [];
  for(let v of S) {
    let peek = stack[stack.length -1];
    if(peek === v) {
      stack.pop();
    } else {
      stack.push(v)
    }
  }
  return stack.join('');
}

// 队列line、
function Queue() {
  let items = []
  this.enqueue = function(e) {
    items.push(e)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = []
  }
  this.size = function() {
    return items.length
  }
}
//================================================================
和为K的子数组
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
示例 1
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

function subarraySum(nums: number[], k: number): number {
  let sum = 0, count = 0
  for (let i = 0; i < nums.length; i++) {
    sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) {
        count++;
      }
    }
  }
  return count
};

155. 找到所有数组中消失的数字(find-all-numbers-disappeared-in-an-array)
leetcode 传送门
给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没
有出现在 nums 中的数字，并以数组的形式返回结果。
示例 1
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
复制代码
示例 2
输入：nums = [1,1]
输出：[2]
let findDisappearedNumbers = (nums) => {
  let n = nums.length
  // 使用 set 来去重，并把 index + 1 作为输出，
  let set = new Set(new Array(n).fill(0).map((it, idx) => idx + 1))
  // 此时 Set { 1, 2, 3, 4, 5, 6, 7, 8 }
  for (let item of nums) {
    // 把数组中存在的数从 set 中移出, 那么剩下的数就是缺失的
    if (set.has(item)) {
      set.delete(item)
    }
  }
  return [...set]
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
链接：https://juejin.cn/post/6994725719540498463

112. 路径总和
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
var hasPathSum = function(root, sum) {
  if(!root) return false;
  let res = false;
  const dfs = (n, s) => {
    if (!n.left && !n.right && s === sum) {
      res = true;
    }
    if (n.left) dfs(n.left, s + n.left.val);
    if (n.right) dfs(n.right, s + n.right.val);
  }
  dfs(root, root.val);
  return res;
};
链接：https://leetcode-cn.com/problems/path-sum

只出现一次的数字III
输入: [1,2,1,3,2,5]
输出: [3,5]
var singleNumber = function(nums) {
  var obj = {}
  var res = []
  nums.forEach(item => {
    if(obj[item]){
      delete obj[item]
    }else{
      obj[item] = 1
    }
  });
  for(let key in obj){
      res.push(key)
  }
  return res
};

724. 寻找数组的中心下标
输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
var pivotIndex = function(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
};
链接：https://leetcode-cn.com/problems/find-pivot-index

896. 单调数列
示例 1：
输入：[1,2,2,3]
输出：true
示例 2：
输入：[6,5,4,4]
输出：true
示例 3：
输入：[1,3,2]
输出：false
示例 4：
输入：[1,2,4,5]
输出：true
示例 5：

输入：[1,1,1]
输出：true
var isMonotonic = function(A) {
  let up = true, down = true
  for(let i = 1; i < A.length; i++) {
      if(A[i] < A[i-1]) {
        up = false
      }
      if(A[i] > A[i-1]) {
        down = false
      }
  }
  return up || down
};
链接：https://leetcode-cn.com/problems/monotonic-array

976. 三角形的最大周长
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
如果不能形成任何面积不为零的三角形，返回 0。
示例 1：
输入：[2,1,2]
输出：5
示例 2：
输入：[1,2,1]
输出：0
示例 3：
输入：[3,2,3,4]
输出：10
示例 4：
输入：[3,6,2,3]
输出：8
var largestPerimeter = function(nums) {
  nums.sort((a,b)=>b-a)
  for(var i=0;i<nums.length-2;i++){
      if(nums[i]<nums[i+1]+nums[i+2]) return nums[i]+nums[i+1]+nums[i+2]
  }
  return 0
};
链接：https://leetcode-cn.com/problems/largest-perimeter-triangle

// 获取链接后面的参数
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

链接：https://juejin.cn/post/7031322059414175774

function deepClone(obj, cache = new WeakMap()) {
  if (typeof obj !== 'object') return obj // 普通类型，直接返回
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
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

链接：https://juejin.cn/post/7031322059414175774

字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
const firstUniqChar = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i += 1) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]] += 1;
    }
  }
  for (let i = 0; i < s.length; i += 1) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

412. Fizz Buzz
给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：
answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
answer[i] == "Fizz" 如果 i 是 3 的倍数。
answer[i] == "Buzz" 如果 i 是 5 的倍数。
answer[i] == i 如果上述条件全不满足。

示例 1：

输入：n = 3
输出：["1","2","Fizz"]
示例 2：

输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
const fizzBuzz = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) { // 被15整除
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) { // 被3整除
      arr.push('Fizz');
    } else if (i % 5 === 0) { // 被5整除
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

存在重复元素
给定一个整数数组，判断是否存在重复元素。
const containsDuplicate = function (nums) {
  // 转化为Set来去重
  const newArr = Array.from(new Set(nums));
  return newArr.length !== nums.length;
};

剑指 Offer II 077. 链表排序https://leetcode-cn.com/problems/7WHec2/
给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
输入：head = [4,2,1,3]
输出：[1,2,3,4]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function (head) {
  let list = new ListNode(0, head)
  let result = list
  let arr = []//用来存放所有的节点值
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  arr.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < arr.length; i++) {
    result.next.val = arr[i]
    result = result.next
  }
  return list.next
};

34. 在排序数组中查找元素的第一个和最后一个位置
示例 1：
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：
输入：nums = [], target = 0
输出：[-1,-1]

var searchRange = function(nums, target) {
  return [nums.indexOf(target),nums.lastIndexOf(target)]
};
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array

计算右侧小于当前元素的个数
给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是 nums[i] 右侧小于 nums[i] 的元素的数量。
输入: [5,2,6,1]
输出: [2,1,1,0]
解释:
5 的右侧有 2 个更小的元素 (2 和 1).
2 的右侧仅有 1 个更小的元素 (1).
6 的右侧有 1 个更小的元素 (1).
1 的右侧有 0 个更小的元素.
const countSmaller = (nums) => {
  const newArr = [];
  for (let i = 0, len = nums.length; i < len; i += 1) {
    let num = 0;
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] < nums[i]) {
        num += 1;
      }
    }
    newArr.push(num);
  }
  return newArr;
};

大数相加
function add(a ,b) {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length)
  //用0去补齐长度
  a = a.padStart(maxLength, 0)//'0000007123434532341'
  b = b.padStart(maxLength, 0)//'1234567800000009999'
  //定义加法过程中需要用到的变量
  let everySum = 0
  let carry = 0   //进位
  let res = ''
  for(let i = maxLength - 1 ; i >= 0 ;i--){
    everySum = parseInt(a[i]) + parseInt(b[i]) + carry
    carry = Math.floor(everySum / 10)
    res = everySum % 10 + res
  }
  if(carry !== 0){
    res = '' + carry + res
  }
  return res
}

大数相乘
export function multiplyBigNumber(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return '';
  if (isNaN(a) || isNaN(b)) return '';
  if (a === '0' || b === '0') return '0';

  const len1 = a.length;
  const len2 = b.length;
  const res = [];

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const i1 = i + j;
      const i2 = i + j + 1;
      const r = a[i] * b[j] + (res[i2] || 0);
      res[i1] = Math.floor(r / 10) + (res[i1] || 0);
      res[i2] = r % 10;
    }
  }

  return res.join('').replace(/^0+/, '');
}
// console.log('multiplyBigNumber 结果：', multiplyBigNumber('01234', '2'));
// console.log('multiplyBigNumber 结果：', multiplyBigNumber('012345678', '0123456'));
链接：https://juejin.cn/post/7079394322067488776

将对象铺平
function flattenObj (obj) {
  if (!isObject(obj)) {
    return
  }
  let res = {}
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`)
        })
      } else {
        for (var k in cur) {
          dfs(cur[k], `${prefix}${prefix ? '.' : ''}${k}`)
        }
      }
    } else {
      res[prefix] = cur
    }
  }
  dfs(obj, '')
  console.log('flattenObj: ', res)
  return res
}

function isObject (val) {
  return typeof val === 'object' && val !== null
}

const fobj = {
  a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
}

flattenObj(fobj)

订阅发布模式
class EventEmitter {
  constructor () {
      this.events = {}
  }

  on (type, callback) {
    if (!this.events[type]) {
        this.events[type] = [callback]
    } else {
        this.events[type].push(callback)
    }
  }

  off (type, callback) {
      if (!this.events[type]) {
          return
      }
      this.events[type] = this.events[type].filter(item => {
          return item !== callback
      })
      console.log('off', this.events)
  }

  once (type, callback) {
      // callback需要使用具名函数，绑定一次，off一次
      function fn () {
          callback()
          this.off(type, fn)
      }
      this.on(type, fn)
  }

  emit (type, ...rest) {
      console.log('emit', this.events)
      this.events[type] && this.events[type].forEach(fn => {
          fn.apply(this, rest)
      })
  }
}

const event = new EventEmitter()

相交链表
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
      return null
  }
  var p1 = headA, p2 = headB
  // 两个链表相交后，后续的长度是一样的。假如链表长度分别为m,n 并且 m > n, 那么在相交点之前，一定是有m - n个节点。
  // 当n走到尽头时，m还有 m - n个节点没走。此时n从headA开始走，当m走到终点是，n也恰好继续再走m - n步，即为相交点。
  while (p1 !== p2) {
      p1 = p1 === null ? headB : p1.next
      p2 = p2 === null ? headA : p2.next 
  }
  return p1
};  
