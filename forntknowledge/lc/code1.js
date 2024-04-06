【算法面试】leetcode最常见的150道前端面试题 --- 简单题上（44题）  
https://juejin.cn/post/6987320619394138148 

https://codetop.cc/home

415. 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。 
示例 1：
输入：num1 = "11", num2 = "123"
输出："134"
示例2
输入：num1 = "456", num2 = "77"
输出："533"
示例 3：
输入：num1 = "0", num2 = "0"
输出："0"
来源：力扣（LeetCode）
var addStrings = function(num1, num2) {
    const length = Math.max(num1.length, num2.length)
    num1 = num1.padStart(length, '0')
    num2 = num2.padStart(length, '0')
    let ans = '', carry = 0
    let x, y
    for(let i = length-1; i>=0 || carry; i--){
        x = Number(num1[i]) || 0
        y = Number(num2[i]) || 0
        ans = ((x + y + carry) % 10) + ans
        carry = (x + y + carry) >= 10 ? 1 : 0
    }
    return ans
};
链接：https://leetcode-cn.com/problems/add-strings/solution/da-shu-xiang-jia-by-csh1314-5pwn/

165. 比较版本号 https://leetcode-cn.com/problems/compare-version-numbers/
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;
};
https://leetcode-cn.com/problems/compare-version-numbers/solution/bi-jiao-ban-ben-hao-by-leetcode-solution-k6wi/

3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function(s) {
    let l = 0
    let res = 0
    const map = new Map()
    for(let r = 0; r < s.length; r++) {
        if(map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        }
        res = Math.max(res, r - l + 1)
        map.set(s[r], r)
    }
    return res
};

129. 求根节点到叶节点数字之和
输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25
const dfs = (root, prevSum) => {
    if (root === null) {
        return 0;
    }
    const sum = prevSum * 10 + root.val;
    if (root.left == null && root.right == null) {
        return sum;
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
}
var sumNumbers = function(root) {
    return dfs(root, 0);
};
链接：https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/solution/qiu-gen-dao-xie-zi-jie-dian-shu-zi-zhi-he-by-leetc/

70. 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

92. 反转链表 II ***************************
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
var reverseBetween = function(head, left, right) {
    // 1
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

   // 2
   let pre = dummy_node;
   for (let i = 0; i < left - 1; ++i) {
       pre = pre.next;
   }
   //  3
   let cur = pre.next;
   for (let i = 0; i < right - left; ++i) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;
};
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-yi-ci-bian-li-by-n60gb/

102. 二叉树的层序遍历 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
[
    [3],
    [9,20],
    [15,7]
]
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

53. 最大子序和 https://leetcode-cn.com/problems/maximum-subarray/
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = nums[0], sum = nums[0];
    for(let i=1; i<nums.length;i++) {
        if(sum > 0) {
            sum +=nums[i]
        } else {
            sum = nums[i]
        }
        max = Math.max(max, sum)
    }
    return max
};

25. K 个一组翻转链表 https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
        const nex = p.next; 
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
}
var reverseKGroup = function(head, k) {
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};
链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/

103. 二叉树的锯齿形层序遍历
例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]
var zigzagLevelOrder = function(root) { 
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
   return res.map((item, index) => {
        let it = item;
        if((index+1) % 2 ===0) {
            it = item.reverse(); 
        }
        return it
    })
}; 
链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal          