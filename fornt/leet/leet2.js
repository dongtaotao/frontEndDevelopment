力扣刷题算法笔记（javascript版）https://juejin.cn/post/7026672593285414948
力扣刷题算法笔记（javascript版）https://juejin.cn/post/7031151977904275463

二叉树的最小深度
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    if(!root){return 0;}
    const que=[[root,1]];
    while(que.length){
        const [n, l]=que.shift();
        if(!n.left && !n.right){
            return l;
        }
        if(n.left)que.push([n.left,l+1])
        if(n.right)que.push([n.right,l+1])
    }
};

二叉树的最大深度
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
   let res=0;
   const dfs=(n,l)=>{
       if(!n)return
       if(!n.left&&!n.right){
           res=Math.max(res,l)
       }
       if(n.left)dfs(n.left,l+1)
       if(n.right)dfs(n.right,l+1)
   };
   dfs(root,1)
   return res
};

const maxDepth = function(root) {
    if(!root) return 0 
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
二叉树的层序遍历
var levelOrder = function(root) {
   if(!root)return[];
   const q=[[root,0]];
   const res=[];
   while(q.length){
       const [n,l]=q.shift()
       if(!res[l]){
           res[l]=[n.val]
       }else{
           res[l].push(n.val)
       }
       if(n.left)q.push([n.left,l+1])
       if(n.right)q.push([n.right,l+1])
   }
   return res
};
路径总和
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if(!root)return false
    let res=false;
    const dfs=(n,s)=>{
        if(!n)return 
        console.log(n.val,s)
        if(!n.left&&!n.right&&s===targetSum){res=true}
        if(n.left)dfs(n.left,s+n.left.val)
        if(n.right)dfs(n.right,s+n.right.val)
}
dfs(root,root.val)
return res
};

//============================================================================
最长连续递增序列
输入：nums = [1,3,5,4,7]
输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。
var findLengthOfLCIS = function(nums) {
    let ans = 0;
    const n = nums.length;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
          start = i;
        }
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};
链接：https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/solution/zui-chang-lian-xu-di-zeng-xu-lie-by-leet-dmb8/

//================================================
560. 和为 K 的子数组
给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
示例 1：
输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2
const subarraySum = (nums, k) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
        sum += nums[j];
        if (sum == k) count++;
      }
    }
    return count;
};
链接：https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/

//================================================================
删除链表的倒数第 N 个结点
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode()
    dummy.next = head

    let fast = dummy
    let slow = dummy
    while(n!==0){
        fast = fast.next
        n--
    }
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
};

//================================================
「链表」leetcode 2.两数相加
let addTwoNumbers = function(l1, l2){
   const l3 = new ListNode(0);
   let p1 = l1;
   let p2 = l2;
   let p3 = l3;
   let carry = 0;  // carry表示进位
   while(p1 || p2){
       const v1 = p1 ? p1.val : null;
       const v2 = p2 ? p2.val : null;
       const val = v1 + v2 + carry;
       carry = Math.floor(val / 10);
       p3.next = new ListNode(val % 10);
       if(p1){
           p1 = p1.next;
       }
       if(p2){
           p2 = p2.next;
       }
       p3 = p3.next;
   }
   if(carry){
       p3.next = new ListNode(carry);
   }
   return l3.next;
}

//================================================================
盛最多水的容器  https://juejin.cn/post/7029984873934766094?utm_source=gold_browser_extension
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let res = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return res
};
function maxArea(height: number[]): number {
    // 创建左指针l，右指针r，面积res
    let l = 0, r = height.length - 1, res = 0
    // 当左指针比右指针小的时候，移动指针。当左指针右指针移动至相同位置时，双指针遍历结束。
    while (l < r){
        // 如果左垂直线 小于右垂直线
        if(height[l] < height[r]) {
            // 比对 原有的面积 res 和 最短垂直线 * 两根垂直线的距离 = 新长方体的面积
            res = Math.max(res,  (r - l) * height[l])
            // 移动指在短的左垂直线指针，以便下一次对比面积。
            l++
         }
        else {
            // 相同逻辑，当左垂直线 大于 右垂直线，那就以右垂直线为宽来计算面积比对。
            res = Math.max(res,  (r - l) * height[r])
            r--
        }
    }
    return res
  };

//================================================
从上到下打印二叉树
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
例如:
给定二叉树: [3,9,20,null,null,15,7],
var levelOrder = function(root) {
    let list = []
    if (!root) return []
    const queue = [root]    //头节点入队列
    while (queue.length > 0) {
        let item = queue.shift()
        list.push(item.val) //打印数组
        item.left && queue.push(item.left)      //左节点入队列
        item.right && queue.push(item.right)    //右节点入队列
    }
    return list
};

//================================================
构建乘积数组
输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
var constructArr = function(a) {
    const res = []
    let n=a.length
    for(let i=0;i<n;i++){
      let temp=1
      for(let j=0;j<n;j++){
          if(i!==j){
            temp=temp*a[j]
          }
      }
      res.push(temp)
    }
    return res
};

//===================================
电话号码的字母组合
https://juejin.cn/post/7027302009640321032
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (digits == '') return [] // 字符串为空
    let list = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'] // 数字字母对应关系
    digits = digits.split('')  // 分离数字字符串
    let len = digits.length
    let res = []
    let dfs = function (str, i) {
        if (i >= len) { // 回调中断条件
            res.push(str) // 字符串添加进结果集
            return
        }
        let strs = list[digits[i]].split('') //分离字母字符串
        for (let item of strs) {
            dfs(str + item, i + 1) // 回调
        }
    }
    dfs('', 0)
    return res
};
function letterCombinations(digits: string): string[] {
    if(digits.length === 0) return []
    
    const result: string[] = []
    const map = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ])
   // 空字符串，指针
   const dfs = (cur, i) => {
       //这题没有特殊条件，当遍历完数据集就可以退出了
       if(i > digits.length - 1) {
           result.push(cur)
           return
       }
       // 以每个数据集中的数据来进行递归
       const curNum = map.get(digits[i])
       for(let num of curNum) {
           dfs(cur + num, i+1)
       }
   }
   // 以0 第一个数据集为起点
   dfs('', 0)
   return result
};

//================================================
左旋字符串
输入: s = "abcdefg", k = 2
输出: "cdefgab"
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0, n);
};
//================================================
最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设s 的最大长度为 1000。 (题目转自leetcode)
示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：
输入: "cbbd"
输出: "bb"
var longestPalindrome = function(s) {
    let str = "";
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            const temp = s.slice(i, j);
            if(temp == temp.split("").reverse().join("") && temp.length > str.length) {
                str = temp;
            }
        }
    }
    return str;
};
链接：https://juejin.cn/post/6844903902865784846

//================================================
旋转字符串
给定两个字符串A和B A的旋转操作就是将A最左边的字符移动到最右边 列如，偌A=“abcde”，在移动一次后的结果是“bcdea”。
如果在若干次旋转操作之后 A能变成B 则返回True
//旋转字符串
var rotateString = function(A,B){
    if(A.length !==B.length){
        return false;
    }
    const str = A + A;
    return str.includes(B);
}
//==============================================
152. 乘积最大子数组 XXXXXXXXXXXXXXXX
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
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

链接：https://leetcode-cn.com/problems/maximum-product-subarray 


二叉搜索树中的搜索【二叉树】
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if (root == null) return null;
    if (root.val === val) return root;
    if (root.val > val) {
        return searchBST(root.left, val);
    } else if (root.val < val) {
        return searchBST(root.right, val);
    }
};

验证二叉搜索树（题号98 https://juejin.cn/post/6948201995681398821
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
  
