斐波那契数
var fib = function(N) {
  if(N ===1 || N ===2) {
    return 1;
  }
  return fib(N-1) + fib(N-2);
}
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N < 1) return 0;
  if (N == 1 || N == 2) return 1;
  let dp = [0, 1, 1];
  for (let i = 3; i <= N; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
};
var fib = function(N) {
  if (N < 1) return 0;
  if (N == 1 || N == 2) return 1;
  let pre = 1, cur = 1, sum = 0; // pre前一位数字的累加和, cur当前数字, sum当前数字的累加和
  for (let i = 3; i <= N; i++) {
      sum = pre + cur;
      pre = cur;
      cur = sum;
  }
  return cur;
};
链接：https://leetcode-cn.com/problems/fibonacci-number/solution/di-gui-huan-cun-di-gui-die-dai-by-lxhgua-4u8u/

//================================================================   
合并两个排序的链表
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode();
  let h = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }
  return h.next;
};

function mergeTwoLists(l1, l2) { 
  if(l1 === null) {
      return l2
  }
  if(l2 === null) {
      return l1
  }
  if(l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  } else {
      l2.next = mergeTwoLists(l2.next, l1)
      return l2
  }
}
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solution/you-xian-bian-li-wan-yi-ge-lian-biao-ran-y995/

//================================================================
实现一个trim
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
}
如何写出一个惊艳面试官的深拷贝
https://cloud.tencent.com/developer/article/1497418

//================================================================
const curry = (fn, ...args) => args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)

function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
链接：https://juejin.cn/post/6844904093467541517
//================================================================
JavaScript实现千位分隔符 https://www.jianshu.com/p/928c68f92c0c
function numFormat(num){
  var res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
       return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
          return $1+",";
        });
  })
  return res;
}

将数字转为字符串、分割转为数组，反转拼接
/**
 * @method thousandSeparator1
 * @description 千位分割数 - split、reverse、reduce
 * @param n number
 * @returns string
 */
 function thousandSeparator1(n: number): string {
  // 1. 将数值n转为字符串
  const s = n.toString();

  // 2. 使用split分割字符串，转为数组；使用reverse反转数组
  const arr = s.split('').reverse();

  // 3. 使用reduce，依次拼接每个数组单元
  return arr.reduce((prev, val, index) => {
    // 千分位，每隔三位拼接一个符号
    // 同时要注意index为0时，第一个符号不
    if (index % 3 === 0 && index !== 0) {
      return val + '.' + prev;
    } else {
      return val + prev;
    }
  }, '');
}


var a=1234567894532;
var b=673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"
//================================================================
function isPalindrome (x) {
  var str=x.toString();
  if((str.split('').reverse().join(''))===str){
    return true;
  }else{
    return false;
  }
};
链接：https://leetcode-cn.com/problems/palindrome-number/solution/js-by-weiwei-ve/
//================================================================
class EventEmiter {
  constructor() {
    this.events = {}
  }
  emit(event, ...args) {
    this.events[event].forEach(fn => {
      fn.apply(this, args)
    })
  }
  on(event, fn) {
    if (this.events[event]) {
      this.events[event].push(fn)
    } else {
      this.events[event] = [fn]
    }
  }
  remove(event) {
    delete this.events[event]
  }
}
const eventHub = new EventEmiter()
eventHub.on('test', data => {
  console.log(data)
})

eventHub.emit('test', 1)
console.log(2)
//================================================================
贪心算法力扣题目总结
按照如下顺序刷力扣上的题目，相信会帮你在学习贪心算法的路上少走很多弯路。
贪心算法理论基础
455.分发饼干
376.摆动序列
53.最大子序和
122买卖股票的最佳时机II
55.跳跃游戏
45.跳跃游戏II
1005.K次取反后最大化的数组和
134.加油站
135.分发糖果
860柠檬水找零
406.根据身高重建队列
406.根据身高重建队列（续集）
452.用最少数量的箭引爆气球
435.无重叠区间
763.划分字母区间
56.合并区间
738.单调递增的数字
714.买卖股票的最佳时机含手续费
968.我要监控二叉树！
贪心算法总结篇！

链接：https://leetcode-cn.com/problems/jump-game/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-tan-x-mjc9/

//================================================================
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，
判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和
 targetSum 。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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

力扣刷题算法笔记（javascript版）
https://juejin.cn/post/7026672593285414948

//================================================================
20、买卖股票的最佳时期1
//g股票买卖
// prices就是给定的数组
var maxProfit = function (prices){
  // 数组长度为0直接返回
  if(prices.length === 0){
      return 0;
  }
  //d定义两个变量 一个是左半边的最小值
  
  let minPrice = prices[0],
      maxProfit = 0;
  for (let i = 0; i < prices.length; i ++){
      //判断当前的价格是否小于最小的价格
      if(prices[i] < minPrice){
          minPrice = prices[i];
          // 当前价格减去最小价格 是否大于之前存储的最大利润
      }else if ((prices[i] - minPrice) > maxPrice){
          maxPrice = prices[i] -minPrice;
      }
  }
  return maxProfit;
}
//===============================================================
24、验证回文串 valid PalindRome
描述：忽略费字符 空格等 还有大小写 只判断字母是否是回文串
// 字符串判断：
var  isPalindrome = function (s) {
  // 正则字符串转变小写
  s = s.toLowerCase().replace(/[\W_]/g, "");
  //小于2直接返回
  if (s.length <2){
    return true;
  }
  // 定义left和right双指针
  let left = 0;
  let right = s.length-1;
  while(left<right){
    if(s[left] !== s[right]){
        return false;
    }
    left++;
    right --;

  }
  // 如果没有返回false  那么后面也不用再去判断了 直接返回true 
  return true;
}

https://juejin.cn/post/6968713283884974088#heading-26
实现有并行限制的 Promise 调度器
addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");
的输出顺序是：2 3 1 4

整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4

class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0;
  }
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;
    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2"); 
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();

https://juejin.cn/post/6968713283884974088#heading-26
实现模板字符串解析功能   模版引擎
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

