前端算法渣的救赎之路 ********************************** 
https://juejin.cn/post/6844904175562653710

一年半经验前端社招7家大厂&独角兽全过经历 | 掘金技术征文  https://juejin.cn/post/6844904137495150599

2020年中大厂前端面试总结 https://juejin.cn/post/6865525477465931783

最近两周出去面试遇到的面试题（前端初级、长更）
https://juejin.cn/post/7073869980411887652

阿里巴巴、今日头条、拼多多以及腾讯等一线互联网公司面试总结
https://juejin.cn/post/6905913905152065544

前端小白进阶工程师必备文章汇总
https://juejin.cn/post/7001718105336447007#heading-6

最全的手写JS面试题
https://juejin.cn/post/6968713283884974088#heading-26

最新的前端大厂面经（详解答案）
https://juejin.cn/post/7004638318843412493

42+JavaScript高频手写实现及详细答案，胖头鱼喊你一起学源码啦！
https://juejin.cn/post/7020562888657993741

前端刷题路-目录（题型分类）https://juejin.cn/post/6943978947528884260  ****************************

20. 有效的括号
var isValid = (s) => {
    const map = {
        '{':'}',
        '(':')',
        '[':']'
    }
    const stack = [];
    for(let i of s) {
        if(map[i]) {
            stack.push(i)
        } else {
            if(map[stack[stack.length -1]] === i) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length ===0 
}

3的幂
var isPower = function(n) {
    while(n>=3) {
        n/= 3;
    }
    return n===1
}

用setTimeout实现setInterval
function mySetTimout(fn, delay) {
    let timer = null
    const interval = () => {
        fn()
        timer = setTimeout(interval, delay)
    }
    setTimeout(interval, delay)
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

// 测试
const { cancel } = mySetTimout(() => console.log(888), 1000)
setTimeout(() => {
    cancel()
}, 4000)

用setInterval实现setTimeout

function mySetInterval(fn, delay) {
    const timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, delay)
}

// 测试
mySetInterval(() => console.log(888), 1000)


promise.finally 
https://juejin.cn/post/7023906112843808804
promise.any
function any(promises) {
    return new Promise((resolve, reject) => {
        let count = 0
        promises.forEach((promise) => {
            promise.then(val => {
                resolve(val)
            }, err => {
                count++
                if (count === promises.length) {
                    reject(new AggregateError('All promises were rejected'))
                }
            })
        })
    })
}

promise.race
function race(promises) {
    return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            if (promise instanceof MyPromise) {
                promise.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            } else {
                resolve(promise)
            }
        })
    })
}
https://juejin.cn/post/7023906112843808804

选择排序
Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length; i++) {
        let indexMin = i;
        for (let j = 0; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j
            }
        }
        if (indexMin !== i) {
            const temp = this[0];
            this[0] = this[indexMin];
            this[indexMin] = temp;
        }
    }
}
// 选择排序的时间复杂度O(n^2)
const arr = [5, 4, 3, 2, 1]
arr.selectionSort();

看了就会，手写Promise原理，最通俗易懂的版本！！！
https://juejin.cn/post/6994594642280857630

如何快速让一个数组乱序？***************** https://juejin.cn/post/6844903896846958600
//创建一个数组
let arr = Array(100000).fill(0).map((item, index) => index + 1);
console.log(arr);

//1. 直接利用sort进行排序，有漏洞，大部分元素位置没有移动
arr.sort((a, b) => {
    return Math.random() > 0.5 ? -1 : 1
});
console.log(arr);

//2. 经典洗牌算法实现 打乱数组
function shuffle(array) { 
    let arrayLength = array.length,   
        randomIndex, //随机数   
        tempItem; //临时存储元素  
    for (let i = arrayLength - 1; i >= 0; i--) {    
        randomIndex = Math.floor(Math.random() * (i + 1));    
        tempItem = array[randomIndex];    
        array[randomIndex] = array[i];    
        array[i] = tempItem;  
    }  
    return array;
}
console.log(shuffle(arr));

https://blog.csdn.net/qq_18369669/article/details/106086809
function washCard2 (cards) {
    var cardsTmp = []
    var len = cards.length
    for (var i=0; i<len; i++) {
      var index = Math.floor(Math.random()*(len-i))
      cardsTmp.push(cards[index])
      cards.splice(index, 1)
    }
    cards = cardsTmp
    return cards
  }

  
题目描述：给了很多的区间 要尽可能的去合并这些区间。最后产出合并后的区间
合并区间 https://juejin.cn/post/7026672593285414948#heading-13
[[1,3],[2,6]] ===== [[16]]

var merge = function(interVals){
    if(!interVals.length < 2) {
        return interVals
    }
    interVals.sort((a, b) => a[0] -b[0])
    let curr = interVals[0];
    let result = [];
    for(let interval of interVals) {
        if(curr[1] >= interval[0]) {
            curr[1] = Math.max(curr[1], interval[1]);
        } else {
            result.push(curr);
            curr = interval;
        }
    }
    if(curr.length !==0) {
        result.push(curr)
    }
    return result;
}

简易模板引擎 https://juejin.cn/post/6989103878436290568
const template = '嗨，{{ info.name.value }}您好，今天是星期 {{ day.value }}';
const data = {
    info: {
        name: {
            value: '张三'
        }
    },
    day: {
        value: '三'
    }
};

function render(template, data) {
    return template.replace(/{{\s+?([\w.]+)\s+?}}/g, function ($0, $1) {
        return eval(`data.${$1}`)
    })
}

const result = render(template, data); 
// 嗨，张三您好，今天是星期三
console.log(result)

前端模拟并发请求
已知当前有100个请求，每次只能同时调用5个，设计一个并发函数。
https://juejin.cn/post/6989103878436290568


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

冒泡
function bubbleSort(arr) {
    for(var i=0;i<arr.length;i++) {
        for(var j=0;j< arr.length-i-1;j++) {
            if(arr[j]>arr[j+1]) {
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

选择排序
function selectionSort(arr) {
    let length = arr.length,
        indexMin
    for(let i = 0; i < length - 1; i++) {
      indexMin = i
      for(let j = i; j < length; j++) {
        if(arr[indexMin] > arr[j]) {
          indexMin = j
        }
      }
      if(i !== indexMin) {
        let temp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = temp
      }
    }
  }
  
  // 测试
  let arr = [1, 3, 2, 5, 4]
  selectionSort(arr)
  console.log(arr) // [1, 2, 3, 4, 5]

  打乱数组（洗牌算法） ========== 

  去掉重复元素次数大于2次的 https://juejin.cn/post/6855129005415366670
  数组去重比较简单，有很多方案可以实现，本题是去掉重复次数2次以上的，删除最后一个。 比如：[1,1,1,2,2,5,5,5,5] 返回 [1,1,2,2,5,5]
  function delRepeat2(arr){
    var newArr = [];
    var obj = {};
    // 先对数组进行升序
    arr.sort((a,b)=>a-b);
    arr.map(item=>{
      //通过obj来统计次数
      obj[item]?obj[item] += 1:obj[item] = 1
      //如果次数小于2，就保存到新数组
      obj[item]<=2?newArr.push(item):''
    })
    return newArr;
}
// 测试
delRepeat2([3,3,1,2,1,6,6,1,8])
// 返回 [1, 1, 2, 3, 3, 6, 6, 8]

大数相加算法 https://juejin.cn/post/6855129005415366670
这个题目比较经典，为什么要做大数相加呢？就是精度丢失问题，0.1+0.2 ！= 0.3 ，
这是浮点丢失，js精度最大只能到2的53次方，再大就会出问题，所以，我们会有这么一道题来考察。

BigInt 只能是整数相加，不含小数
function sum(a,b){
    return BigInt(a)+BigInt(b);
}
  
  // 测试
  sum('12345','54321')
  // 返回 66666n
  
  传统计算，包含小数位
// 原理：分割出每一位，然后对应位数相加，最后再拼接成字符串
// 由于整数位和小数位都会出现长度不一致，所以需要考虑补齐长度
// 考虑小数
function sum(a,b){
    // 把数字分割成数组
    let arr1 = a.split(''),arr2 = b.split('');
    // 统计是否有满十进一
    let count = 0;
    // 最后生成的新数组 - 对应相加的和
    let arr = [];
    // 对小数点进行分割，获取小数位数
    let a1 = a.split('.')[1],b1 = b.split('.')[1];
    // 判断小数位数长度
    let len = a1.length - b1.length;
    // a的小数位数大于b，则给b补0
    if(len>0)arr2.push(’0’.repeat(len))
    // a的小数位数小于b，则给a补0
    if(len<0)arr1.push(’0’.repeat(Math.abs(len)))
    // 只要其中一个长度不为0，继续循环
    while(arr1.length || arr2.length){
        // 加法都是从右到左依次累加，每次通过pop取出最后一个
        // 由于整数位长度可能不同，所以当pop取不到的时候，要默认为0
        let m = arr1.pop() || 0,n = arr2.pop() || 0;
        // 小数点不参与计算
        if(m != '.'){
            let num = Number(m) + Number(n) + count;
            if(num > 9){
                count = 1;
                num%=10;
            }else{
                count = 0;
            } 
            arr.unshift(num);
        }else{
            arr.unshift('.');
        }
    }
    if(count>0)arr.unshift(count);
    return arr.join('');
}

// 测试
sum(12345.01,543211.002)
// 返回 "555556.012"

计数质数 
给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
所谓质数，是指 一个大于1的自然数，除了1和它自身外，不能被其他自然数整除 ，那么就可以在遍历到当前元素的时候，判断其能不能被它之前所有的自然数整除，这样一来就需要双重 for 循环，解法如下：

int countPrimes(int n) {
    int count = 0;
    for(int i = 2; i < n; i++) {
        bool sign = true;
        for(int j = 2; j < i; j++) {
            if(i % j == 0) {
                sign = false;
                break;
            }
        }
        if(sign)
            count++;
    }
    return count;
}

128. 最长连续序列 https://leetcode-cn.com/problems/longest-consecutive-sequence/
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
var longestConsecutive = function(nums) {
    // 先排序去重
    const arr = [...new Set(nums.sort((a, b) => a - b))]
    const len = arr.length
    if(!len) return 0
    // 计数指针从1开始
    let n = 1, max = 1
    for(let i = 0; i < len; i++) {
      // 如果连续，则 n + 1，否则回到 1 开始
      n = arr[i + 1] - arr[i] === 1 ? n + 1 : 1
      // 取最大数
      max = Math.max(max, n)
    }
    return max
  };
  
链接：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/zui-chang-lian-xu-xu-lie-shuang-zhi-zhen-jojx/

Shuffle an Array
打乱一个没有重复元素的数组。 
https://101.zoo.team/er-cha-shu/er-cha-shu-part-1-zui-xiao-zhan-shuffle-an-array-he-jiang-you-xu-shu-zu-zhuan-huan-wei-er-cha-sou-su
  /**
 * @param {number[]} nums
 */
const Solution = (nums) => {
    this.nums = nums;
    this.original = nums.slice(0);
  };
  /**
   * 重置数组并返回
   * @return {number[]}
   */
  Solution.prototype.reset = () => {
    this.nums = this.original;
    this.original = this.original.slice(0);
    return this.original;
  };
  /**
   * 返回一个随机重排的数组
   * @return {number[]}
   */
  Solution.prototype.shuffle = () => {
    const ary = [];
    const nums = this.nums.slice(0);
    const len = nums.length;
    for (let i = 0; i < len; i += 1) {
      const targetIndex = Math.floor(Math.random() * nums.length);
      ary[i] = nums[targetIndex];
      nums.splice(targetIndex, 1);
    }
    return ary;
  };

  模板引擎实现
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

function render(template, data) {
    const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
    if (reg.test(template)) { // 判断模板里是否有模板字符串
      const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
      template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
      return render(template, data); // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果模板没有模板字符串直接返回
  }
  
数组去重(两次以上去重)
// 已知数组
var arr = [1,1,1,1,1,1,1,3,3,3,3,3,5,5];
// 方法一
function delRepeat(){
    arr = arr.sort();//先排序
    for(let i=0;i<arr.length;i++){
        if(arr[i] == arr[i+2]){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
// 方法二
function delRepeat(){
    var newArr = [];
    var obj = {};
    arr.map(item=>{
        if(obj[item]){
            obj[item] +=1 ;
        }else{
            obj[item] = 1;
        }
        obj[item]<=2?newArr.push(item):'' 
    })
    return newArr;
}

合并二叉树 https://juejin.cn/post/6994439985017389093
输入: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
输出: 
合并后的树:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
var mergeTrees = function (root1, root2) {
    const pre = (root1, root2) => {
        if (root1 == null) return root2
        if (root2 == null) return root1
        root1.val += root2.val
        root1.left = pre(root1.left, root2.left)
        root1.right = pre(root1.right, root2.right)
        return root1
    }
    return pre(root1, root2)
};

平方数之和 https://juejin.cn/post/6970481350159630350#heading-4
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
示例 1：
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
var judgeSquareSum = function(c) {
    for (let a = 0; a * a <= c; a++) {
      const b = Math.sqrt(c - a * a);
      if (b === parseInt(b)) {
        return true;
      }
    }
    return false;
};

验证二叉搜索树 https://juejin.cn/post/6948201995681398821/#heading-0
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
输入:
    2
   / \
  1   3
输出: true
var isValidBST = function(root) {
    if (!root) return true
    if (root.left && root.left.val > root.val) {
      return false
    }
    if (root.right && root.right.val < root.val) {
      return false
    }
    return isValidBST(root.left) && isValidBST(root.right)
  };

二叉搜索树节点最小距离（题号783） https://juejin.cn/post/6966771186944442398#heading-5

31. 栈的压入、弹出序列 https://juejin.cn/post/7068871997530308639
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    let index = 0;
    const stack = [];
    for(const value of pushed) {
        stack.push(value);
        while(stack.length && stack[stack.length - 1] === popped[index]) {
            stack.pop();
            index ++;
        }
    }
    return stack.length === 0;
};

一道来自蚂蚁的笔试题
给一个任意长度的字符串，从中取任意n个元素，输出这些元素的所有可能的组合。 https://juejin.cn/post/7013745197653688350
前提：会确保输入的字符串没有重复元素

输入字符'abc', 任意取2个元素 输出: 'ab','ac','bc','ba','ca','cb'


实现数组的随机排序
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
function randSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        let rand = parseInt(Math.random() * arr.length)
        let temp = arr[rand]
        arr[rand] = arr[i]
        arr[i] = temp
    };
    return arr
}
console.log(randSort(arr)); // [2, 3, 5, 9, 4, 1, 6, 10, 8, 7]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
function randSort(arr) {
    let mixedArray = []
    while (arr.length > 0) {
        let randomIndex = parseInt(Math.random() * arr.length)
        mixedArray.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
    }
    return mixedArray
}
console.log(randSort(arr));  // [6, 3, 5, 10, 8, 2, 1, 4, 7, 9]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   
arr.sort(function () {
    return Math.random() - 0.5
})
console.log(arr);  // [6, 4, 8, 5, 1, 9, 2, 7, 10, 3]  
