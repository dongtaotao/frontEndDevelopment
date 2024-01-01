【算法面试】leetcode最常见的150道前端面试题 ---- 简单题上（44题
https://juejin.cn/post/6987320619394138148    

春招腾讯50题计划
https://juejin.cn/column/7070454142849777678

验证回文字符串|| https://juejin.cn/post/7031151977904275463
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

在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

function searchRange(nums: number[], target: number): number[] {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr.push(i);
    }
  }
  if (arr.length === 0) return [-1, -1];
  return [arr[0], arr[arr.length - 1]];
}

寻找两个正序数组的中位数 https://juejin.cn/post/6935363136413237255
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let arr: number[] = nums1.concat(nums2);
    arr.sort((a, b) => a - b);
    let center = Math.floor(arr.length / 2);
    if (arr.length % 2) {
      return arr[center];
    }
    return (arr[center - 1] + arr[center]) / 2;
  }
  
比特位计数
给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

示例 1：

输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10
示例 2：

输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let ans = []
    for(let i=0;i<=n;i++){
        ans.push(i.toString(2).replace(/0/g,'').length)
    }
    return ans
};
链接：https://leetcode-cn.com/problems/counting-bits/solution/js-apida-fa-by-fan-xiao-fan-fm-nqye/

单词距离 https://juejin.cn/post/6939083966087430174
输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1
function findClosest(words: string[], word1: string, word2: string): number {
    let temp = words.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            for (let j = 0; j < words.length; j++) {
                if (words[j] === word2) {
                    temp = Math.min(Math.abs(i - j), temp);
                }
            }
        }
    }
    return temp; 
};


https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
剑指 Offer 61. 扑克牌中的顺子
var isStraight = function (nums) {
    let max = 0, min = 14, set = new Set()
    for (const num of nums) {
        if (num === 0) continue
        if (set.has(num)) return false
        set.add(num)
        max = Math.max(num, max)
        min = Math.min(num, min)
    }
    return max - min < 5
}

有效三角形的个数
https://wangyaxing.cn/blog/algorithm/%E6%95%B0%E5%AD%A6/%E6%9C%89%E6%95%88%E7%9A%84%E4%B8%89%E8%A7%92%E5%BD%A2%E4%B8%AA%E6%95%B0.html#%E9%A2%98%E7%9B%AE%E6%8F%8F%E8%BF%B0
输入: [2,2,3,4]
输出: 3
解释:
有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3

/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let  k = j + 1; j < nums.length; k++) {
                if(nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i]) {
                    count++;
                }
            }
        }
    }
    return count;
};

买卖股票最佳时机
https://wangyaxing.cn/blog/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAI.html
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // minPrice表示最小价格， 需要在最小价格的时候买入
    let minPrice = Number.MAX_SAFE_INTEGER;
    // 当前最大利润, 在最大利润的时候卖出
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 * 多次买入和卖出
 */
 var maxProfit2 = function(prices) {
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};

 
使用最小花费爬楼梯 https://www.pzijun.cn/algorithms/algo/3.html#%E8%A7%A3%E6%B3%95%EF%BC%9A%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。

输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。

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

js字符串相乘 JavaScript LeetCode43
https://www.csdn.net/tags/MtjacgxsNDk2MDctYmxvZwO0O0OO0O0O.html
https://codeantenna.com/a/FHLNdWGlGc
https://www.icode9.com/content-1-788868.html

JS Leetcode 263. 丑数 https://www.cnblogs.com/echolun/p/14647570.html
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。
/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function (n) {
    // 注意，如果小于等于0肯定不是丑数
  if(n <= 0){
      return false;
  }
    // 能不能被2一直整除下去？能就一直除
  while (n % 2 === 0) {
      n = n / 2;
  }
    // 不能整除2了来试试3和5，前面解释了先除以谁先后顺序没关系
  while (n % 3 === 0) {
      n = n / 3;
  }
  while (n % 5 === 0) {
      n = n / 5;
  }
  return n === 1;
};

一维数组的动态和 https://juejin.cn/post/7001500051725877256
输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
var runningSum = function(nums) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums; 
}

1502. 判断能否形成等差数列 https://github.com/pwstrick/daily/issues/1026
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a-b);
    const bench = arr[1] - arr[0];
    for(let i=1, len=arr.length; i<len; i++) {
        if(arr[i] - arr[i-1] != bench) {
            return false;
        }
    }
    return true;
};

1491. 去掉最低工资和最高工资后的工资平均值
/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    salary.sort((a, b) => a-b);
    salary.pop();
    salary.shift();
    const sum = salary.reduce((acc, cur) => acc+=cur);
    return sum / salary.length;
};

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

49. 字母异位词分组
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

172. 阶乘中的零 https://juejin.cn/post/6989031479753834504
var trailingZeroes = function (n) {
    let r = 0;
    while (n > 1) {
        n = Math.floor(n / 5);
        r += n;
    }
    return r;
};

2.9 平衡二叉树
var isBalanced = function (root) {
    if (!root) return true
    function getHeight(tree) {
        if (!tree) return 0
        return Math.max(getHeight(tree.left), getHeight(tree.right)) + 1
    }
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
};

链接：https://juejin.cn/post/7080174781508616206
2.10 二叉树的镜像
var mirrorTree = function (root) {
    if (!root) return null;
    let left = mirrorTree(root.right);
    let right = mirrorTree(root.left);
    root.left = left;
    root.right = right;
    return root;
}

前端面试准备的50道算法题下https://juejin.cn/post/7084600366813151240
2.43 买卖股票的最佳时机 https://juejin.cn/post/7084600366813151240
var maxProfit = function (prices) {
    let minPrices = prices[0]
    let res = 0
    for (const v of prices) {
        if (minPrices > v) {
            minPrices = v
        } else {
            res = Math.max(res, v - minPrices)
        }
    }
    return res
}

var maxProfit = function (prices) {
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1] // 可以简化为 res += Math.max(prices[i] - prices[i - 1],0)
        }
    }
    return res
}

198. 打家劫舍  https://juejin.cn/post/6977663197360685093
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length === 0) { return 0;}
    const dp = [0 ,nums[0]];
    for(let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i -1], dp[i - 1])
    }
    return dp[nums.length]
};


二叉树最近公共祖先 https://juejin.cn/post/6844904175562653710
（1）深度优先查找，查到两节点任意一个返回
（2）当两个节点都找到时返回root，否则返回null
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(!left) return right;
    if(!right) return left;
    if(left && right) return root;  
    return null;
};

合并二叉树
var mergeTrees = function(t1, t2) {
    if(t1 && t2){
        t1.val += t2.val;
        t1.left = mergeTrees(t1.left,t2.left);
        t1.right = mergeTrees(t1.right,t2.right);
    }
    return t1 || t2;
};
二叉树的镜像

function Mirror(root)
{
    if(root === null) return root;
    [root.left,root.right] = [root.right,root.left];
    Mirror(root.left);
    Mirror(root.right);
    return root;
}

二叉树根节点到叶子节点的所有路径和 https://blog.nowcoder.net/n/08dbb5d39ecb4776889e7d8a7f31f736
输入：
{1,2,3}
复制
返回值：
25
这颗二叉树一共有两条路径，
根节点到叶子节点的路径 1\to 21→2 用数字\ 12 12 代替
根节点到叶子节点的路径 1\to 31→3 用数字\ 13 13 代替
所以答案为\ 12+13=25 12+13=25

export function sumNumbers(root: TreeNode | null): number {
    return dfs(root, 0)
}
function dfs(root: TreeNode | null, prevSum: number): number {
    if (root === null) return 0
 
    const sum = prevSum * 10 + root.val
 
    if (root.left === null && root.right === null) {
        return sum
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum)
    }
 
}

合并二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    // 递归一定要有结束条件
    // 根据题目中不为 null 的节点将直接作为新二叉树的节点可以写出
    if(!root1){
        return root2;
    }
    if(!root2){
        return root1;
    }
    let result = new TreeNode(); 
    result.val = root1.val+root2.val;
    result.left = mergeTrees(root1.left,root2.left);
    result.right = mergeTrees(root1.right,root2.right);
    // 返回一个新节点
    return result;
};


剑指Offer——圆圈中最后剩下的数字 https://juejin.cn/post/6948663620267933709
var lastRemaining = function(n, m) {
    let arr = []
    for (let i = 0;i < n;i++) {
        arr.push(i);
    }
    let flag = 0;
    while (arr.length !== 1) {
        flag = (flag + m - 1) % arr.length;
        arr.splice(flag,1);
    }
    
    return arr[0];
};


二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
    // 如果节点为空 返回null
    if (!root ) return null;
    if (root === p) return p;
    if (root === q) return q;
    let x = lowestCommonAncestor(root.left,p,q);
    let y = lowestCommonAncestor(root.right,p,q);
    if (x && y) {
        return root;
    } else {
        return x || y; 
    }
}; 
 