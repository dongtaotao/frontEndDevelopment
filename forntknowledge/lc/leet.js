https://www.cnblogs.com/wuguanglin/p/code-interview.html 
JS版剑指offer

牛客网华为机试在线训练JavaScript版解答
https://blog.csdn.net/qq_25073545/article/details/80489694

牛客网华为机试考试java_牛客网华为机试题（JavaScript）
https://blog.csdn.net/weixin_34803977/article/details/114524607?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242

牛客网华为机试题（JavaScript）
https://blog.csdn.net/qq_25481047/article/details/104543214?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

牛客网华为机试在线训练JavaScript版解答

https://www.daimajiaoliu.com/daima/47970fc3d9003f8

【算法面试】leetcode最常见的150道前端面试题 --- 简单题上（44题）
https://juejin.cn/post/6987320619394138148

最大子序和 
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

var maxSubArray = function (nums) {
  let sum = max = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (sum > 0) {
          //如果之前的的和大于0，那么可以继续累加
          sum += nums[i];
      } else {
          //否则的话之前是负数，加了只会更小，不如从新的开始
          sum = nums[i];
      }
      max = Math.max(max, sum);
  }
  return max;
}

 var maxSubArray = function(nums) {
  let len = nums.length;
  let sum = nums[0], max = nums[0];
  for(let i = 1; i < len; i++) {
      sum = sum > 0 ? sum+nums[i] : nums[i];
      max = Math.max(sum, max);
  }
  return max;
};

NC78 反转链表
https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=117&&tqId=37777&&companyId=66
5&rp=1&ru=/company/home/code/665&qru=/ta/job-code-high/question-ranking
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
链接：https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/

NC3 链表中环的入口结点

function EntryNodeOfLoop(pHead)
{
    // write code here
    let slow = fast = pHead;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            slow = pHead;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow; 
        }
    }
    return null;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};

//================================================
JS 实现两个大数相加？
https://zhuanlan.zhihu.com/p/72179476
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
  if(f == 1){
    sum = "1" + sum;
  }
  return sum;
}

//================================================================
查找两个字符串的最长公共子串的Javascript函数
NC127-最长公共子串-【动态规划】
一、题目
给定两个字符串str1和str2,输出两个字符串的最长公共子串，如果最长公共子串为空，输出-1。
示例1
"1AB2345CD","12345EF"
返回：
"2345"
先比较s1、s2的长度，如果是s1比s2长则交换位置取较短的字符串作为。
substr(idex, len)，所以拿较短的串取其子串，然后判断它是否在较长的字符串中存在，
如果存中则直接返回，否则再取下一位。

const findSubStr = (str1, str2) => {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1]
  }
  let result = "";
  const len = str1.length;
  for(let j = len; j > 0; j --) {
    for(let i = 0; i<= len -j; i++) {
      result = str1.substr(i, j);
      if (str2.includes(result)) return result
    }
  }
}
console.log(findSubStr('aabbcc11', 'ppooiiuubcc123')) 
https://blog.csdn.net/weixin_37680520/article/details/108330326

https://www.cnblogs.com/apple78/p/13433760.html
//================================================================
二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
    if (root === null) return false;
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root;
    }
    return lson || rson || (root.val === p.val || root.val === q.val);
  }
  dfs(root, p, q);
  return ans;
};

const lowestCommonAncestor = function(root, p, q) {
  if(root == null || root == p || root == q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if(left === null) return right
  if(right === null) return left
  return root
};

https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/solution/er-cha-shu-de-zui-jin-gong-gong-zu-xian-6fdt7/
//================================================================
NC12-重建二叉树
var buildTree = function(preorder, inorder) {
  // 存放中序遍历每个值的下标
  let rootMap = new Map();
  for(let i = 0; i < inorder.length; i++){
    rootMap.set(inorder[i], i);
  }
  return fn(0, 0, inorder.length - 1);

  //三个参数分别对应 先序中根节点位置，中序中的左边界，中序中的右边界
  function fn(root, left, right){
    if(left > right) return null;

    // 新建节点
    let node = new TreeNode(preorder[root]);
    //拿到在中序遍历中的位置
    let site = rootMap.get(preorder[root]);

    // 递归左子树
    node.left = fn(root + 1, left, site - 1);
    // 递归右子树，根节点位置：root + 左子树节点数 + 1
    node.right = fn(root + site - left + 1, site + 1, right);

    return node;
  }
};
https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/solution/js-di-gui-zhong-jian-er-cha-shu-shuang-9-nllh/

//================================================================
链表中倒数第k个节点#
var getKthFromEnd = function(head, k) {
  let first = head,later = head;
  for(let i = 0;i<k;i++){
      first=first.next;
  }
  while(first!==null){
      first=first.next;
      later=later.next;
  }
  return later;
};
https://www.cnblogs.com/chuncode/p/13772632.html

//================================================================
两个链表的第一个公共节点#
我们使用两个指针分别指向两个链表，然后依次遍历到当前链表的结尾。
我们遍历到当前链表的结尾后，将他们再分别指向对方的链表，进行遍历
当它们相等时即退出遍历，会有两种情况
如果两链表有共同节点，那么他们此时就共同指向共同节点
如果两链表没有共同节点，那么他们都指向null

var getIntersectionNode = function(headA, headB) {
  if(headA== null || headB==null){
      return null;
  }
  let lA = headA;
  let lB = headB;
  while(lA !== lB){
      lA = lA==null ? headB : lA.next;
      lB = lB==null ? headA : lB.next;
  }
  return lA;
};

//================================================================
剑指offer（5）用两个栈实现队列
栈是先进后出，队列是先进先出，因此两个栈，一个用来push，一个用来pop，
同时注意下两个栈不为空的时候。

const outStack = [],
  inStack = [];
function push(node) {
  // write code here
  inStack.push(node);
}
function pop() {
  // write code here
  if (!outStack.length) {
    while (inStack.length) {
      outStack.push(inStack.pop());
    }
  }
  return outStack.pop();
}

//================================================================
编写一个程序，找到两个单链表相交的起始节点。
var getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
//================================================
合并两个有序数组（JavaScript）
题目描述：给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，
使得 num1 成为一个有序数组。
说明:
初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
 
输出: [1,2,2,3,5,6]
var merge = function(nums1, m, nums2, n) {
  for(let i = m; i < m + n; i++)
    nums1[i] = nums2[i - m];
    nums1.sort(function sortNumber(a, b){
      return a - b;
    });
};
原文链接：https://blog.csdn.net/qq_34868578/article/details/82666746

//================================================
3的幂
题目如下：
给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3的x次方
示例 1：
输入：n = 27
输出：true
示例 2：
输入：n = 0
输出：false
示例 3：
输入：n = 9
输出：true
思路

我们拿27来说：27 = 3 * 3 * 3，所以27是3的幂次方
我们拿29来说： 29 = 3 * 3 * 3点几

也就是说，如果是3的幂次方，一直除以3，除到最后就等于1比如27/3/3/3等于1;
如果不是3的幂次方，除到最后就是3点几/3 等于1点几
var isPowerOfThree = function(n) {
  while(n >= 3){
      n /= 3;
  }
  return n === 1;
};
链接：https://juejin.cn/post/6989031479753834504

//================================================
191. 位1的个数（JavaScript）
题目描述：编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）
示例 :
输入: 11
输出: 3
解释: 整数 11 的二进制表示为 00000000000000000000000000001011
解法1

思路：将无符号整数转换成二进制，然后逐位判断是否为1
var hammingWeight = function (n) {
  var bin = n.toString(2);
  var len = bin.length;
  var count = 0;
  for(var i = 0; i < len; i++) {
    if(bin[i] == 1)
      count++;
  }
  return count;
}
原文链接：https://blog.csdn.net/qq_34868578/article/details/82082721

//================================================================
平方数之和
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。 *****************
示例 1：
输入： c = 5
输出： true
解释： 1 * 1 + 2 * 2 = 5
思路
在理解题目意思以后，我们可以得出a * a <= c 且b * b <= c
这里我们就需要从0开始循环，在  0<=a && a * a <= c 的范围之间，去寻找一个合适的值。
通过c - a * a  我们可以得到b * b的值，要求b  我们需要开平方。使用Math.sqrt来处理
得到的结果必须是一个整数，如果带有小数点则不是我们需要的
所以b === parseInt（b）如果满足条件则返回true，否则继续循环直到结束未找到则返回false
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
      const b = Math.sqrt(c - a * a);
      if (b === parseInt(b)) {
        return true;
      }
  }
  return false;
}
链接：https://juejin.cn/post/7028992548341284895

//===============================================
有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
示例 1：
输入: s = "anagram", t = "nagaram"
输出: true
function pushMap(map, key) {
    if (map[key]) {
        map[key]++
    } else {
        map[key] = 1
    }
}
var isAnagram = function (s, t) {
    var sMap = {}
    var tMap = {}
    if (s.length !== t.length) return false
    for (var i = 0; i < s.length; i++) {
        pushMap(sMap, s[i])
        pushMap(tMap, t[i])
    }
    for (var key in sMap) {
        if (sMap[key] !== tMap[key]) return false
    }
    return true
};
链接：https://juejin.cn/post/7030083731171835940

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  return [...s].sort().join('') === [...t].sort().join('');
};

链接：https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-zxhnext-6ibm/

//================================================
26. 删除有序数组中的重复项
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
var removeDuplicates = function(nums) {
  let j = 0;
  const len = nums.length
  for (var i = 1; i<len;i++){
      if(nums[i] != nums[i-1]){
          j++;
          nums[j] = nums[i];
      }
  }
  return j+1;
};
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array

485. 最大连续 1 的个数
输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
          count++;
          if (count > max) {
            max = count;
          }
          // max = Math.max(max, count)
      } else {
        count = 0;
      }
  }
  return max;
};

27. 移除元素
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
var removeElement = function (nums, val) {
  var i = 0,
      len = nums.length;
  for (; i < len; i++) {
      // 如果当前项与目标值相同，则删除这一样
      if (nums[i] === val) {
          nums.splice(i, 1);
          i--;
      };
  };
  return nums.length;
};

724. 寻找数组的中心下标
示例 1：
输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
示例 2：

输入：nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心下标。
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
https://leetcode-cn.com/problems/find-pivot-index/solution/xun-zhao-shu-zu-de-zhong-xin-suo-yin-by-gzjle/

151. 翻转字符串里的单词
示例 1：
输入：s = "the sky is blue"
输出："blue is sky the"
示例 2：
输入：s = "  hello world  "
输出："world hello"
解释：输入字符串可以在前面或者后面包含多余的空格，但是翻转后的字符不能包括。
var reverseWords = function (s) {
  return s.split(" ").filter(item => item).reverse().join(" ");
};
https://leetcode-cn.com/problems/reverse-words-in-a-string

26. 删除有序数组中的重复项
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
var removeDuplicates = function (nums) {
  for (var i = 0; i < nums.length;) {
      if (nums.indexOf(nums[i]) !== i) {
        nums.splice(i, 1);
      } else {
        i++;
      };
  };
  return nums.length;
};
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array

LCP 01. 猜数字
小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，
请返回 小A 猜对了几次？
输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。
示例 1：

输入：guess = [1,2,3], answer = [1,2,3]
输出：3
解释：小A 每次都猜对了。
示例 2：
输入：guess = [2,2,3], answer = [3,2,1]
输出：1
解释：小A 只猜对了第二次。
var game = function (guess, answer) {
  let sum = 0;
  for(let i = 0;i < guess.length;i++ ){
      for(let j = 0;j < answer.length;j++){
          // 索引相同，且元素相同则自增
          if(guess[i] === answer[j] && i === j){
            sum++;
          };
      };
  };
  return sum;
};
链接：https://leetcode-cn.com/problems/guess-numbers

https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
1431. 拥有最多糖果的孩子
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(item => item + extraCandies >= max);
};

121. 买卖股票的最佳时机 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function (prices) {
  // 因为如果没有利润就是0，这里初始化
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
      // 注意，这里的j从i+1开始
      for (j = i + 1; j < prices.length; j++) {
          let profit = prices[j] - prices[i];
          // 不断用当前利润和历史最大利润比较，如果更大就替换maxProfit
          if (profit > maxProfit) {
              maxProfit = profit;
          };
      };
  };
  return maxProfit;
};

448. 找到所有数组中消失的数字
示例 1：
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
var findDisappearedNumbers = function(nums) {
  let len = nums.length,
      ans = [];
  // 注意这里是从1开始，因为范围是[1,n]
  for(let i =1;i<=len;i++){
      //判断nums里面有没有包含i，没有就加入ans
      if(!nums.includes(i)){
        ans.push(i);
      };
  };
  return ans;
};

496. 下一个更大元素 I https://leetcode-cn.com/problems/next-greater-element-i/
给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
示例 1
输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
    对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
    对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
示例 2:

输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
    对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
  var nextGreaterElement = function (nums1, nums2) {
    let res = [];
    // 遍历nums1，每次取一个出来
    for (let i = 0; i < nums1.length; i++) {
        // 查找nums1[i]在nums2中的位置
        let index = nums2.indexOf(nums1[i]);
        // 需要注意的是这个元素可能是nums2中的最后一个，如果是最后一个就无法满足nums2的遍历条件，因此直接加入-1
        if (index === nums2.length - 1) {
            res.push(-1);
        };
        // 从查找到的索引+1位开始查找，有记录更大元素，无则记录-1
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                res.push(nums2[j]);
                // 因为无重复元素，找到更大的就跳出循环
                break;
            } else if (j === nums2.length - 1) {
                res.push(-1)
            };
        };
    };
    return res;
};

74. 搜索二维矩阵
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
var searchMatrix = function (matrix, target) {
  // 打平为一维数组
  let arr = matrix.flat(2);
  // 使用二分法进行查找
  // 定义左边界
  let l = 0;
  // 定义右边界
  let r = arr.length - 1;
  while (l <= r) {
      // 取中间数
      mid = Math.floor((l + r) / 2);
      // 如果相等直接返回
      if (arr[mid] === target) {
          return true;
      } else if (arr[mid] < target) {
          l = mid + 1;
      } else if (arr[mid] > target) {
          r = mid - 1;
      };
  };
  return false;
};
https://leetcode-cn.com/problems/search-a-2d-matrix

263. 丑数
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。

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

179. 最大数
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
示例 1：
输入：nums = [10,2]
输出："210"
var largestNumber = function(nums) {
  const res =  nums.sort((a, b) => `${b}${a}` - `${a}${b}` ).join('')
  return res.startsWith('0') ? '0' : res
};
链接：https://leetcode-cn.com/problems/largest-number

198. 打家劫舍
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同
一晚上被小偷闯入，系统会自动报警。
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

let rob = function (nums) {
  let n = nums.length;
  if (n === 0) {
      return 0;
  };
  if (n === 1) {
      return nums[0];
  };
  // 在nums长度基础上加1，因为我们要预设一个0便于套公式
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  // i从2开始套公式
  for (let i = 2; i <= n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  };
  return dp[n];
};
https://leetcode-cn.com/problems/house-robber

var rob = function(nums) {
  if(nums.length === 0) return 0
  const dp = [0,nums[0]];
  for(let i =2;i<=nums.length;i++){
      dp[i] = Math.max(dp[i-2] + nums[i - 1],dp[i - 1])
  }
  return dp[dp.length - 1]
};

220. 存在重复元素 III
给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。
如果存在则返回 true，不存在返回 false。
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // i从0开始
  for (let i = 0; i < nums.length; i++) {
      // j永远从i后一位开始
      for (let j = i + 1; j < nums.length; j++) {
          // 直接抽取题目要求的条件
          if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
              return true;
          };
      };
  };
  return false;
};
链接：https://leetcode-cn.com/problems/contains-duplicate-iii

525. 连续数组 https://leetcode-cn.com/problems/contiguous-array/
给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
示例 1:
输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
var findMaxLength = function (nums) {
  // 初始我们能拿到符合条件子数组的长度
  let maxLength = 0;
  // 用于求前缀和的初始值
  let sum = 0;
  let map = new Map();
  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i]) {
          sum += 1;
      } else {
          sum -= 1;
      };
      // 当前有这个前缀和的值了吗？
      if (map.has(sum)) {
          // 有了，那就计算他们之前的索引差，就是符合条件的子数组长度
          maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
          // 没有，那就记录这个前缀和出现的索引
          map.set(sum, i);
      };
  };
  return maxLength;
};

2 的幂
给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。
示例 1：

输入：n = 1
输出：true
解释：20 = 1
示例 2：

输入：n = 16
输出：true
解释：24 = 16

var isPowerOfTwo = function(n) {
  while(n > 1){
      n /= 2;
  }
  if(n == 1){
      return true;
  }else{
      return false;
  }
};
链接：https://leetcode-cn.com/problems/power-of-two
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

367. 有效的完全平方数
给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
进阶：不要 使用任何内置的库函数，如  sqrt 。 
示例 1：
输入：num = 16
输出：true
示例 2：

输入：num = 14
输出：false
function isPerfectSquare(num) {
  let left = 0,right = num;
  while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(mid * mid === num){
          return true;
      }else if(mid * mid > num){
          right = mid - 1;
      }else{
          left = mid + 1;
      }
  }
  return false;
};
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-perfect-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

26. 删除有序数组中的重复项
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
var removeDuplicates = function (nums) {
  for (var i = 0; i < nums.length;) {
      if (nums.indexOf(nums[i]) !== i) {
          nums.splice(i, 1);
      } else {
          i++;
      };
  };
  return nums.length;
};
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array

两个数组的交集 II
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function (nums1, nums2) {
  let ans = [];
  nums1.forEach((item, index) => {
    let sub = nums2.indexOf(item);
    if (sub > -1) {
        ans.push(item);
        // 找到1个删掉一个
        nums2.splice(sub, 1);
    }
  });
  return ans;
};

1431. 拥有最多糖果的孩子
给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。
示例 1：

输入：candies = [2,3,5,1,3], extraCandies = 3
输出：[true,true,true,false,true] 
解释：
孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
  // 找出最大糖果数量
  let max = Math.max(...candies),
      result = [];
  for (let i = 0; i < candies.length; i++) {
      // 根据条件，加入对应布尔值
      result.push(candies[i] + extraCandies >= max);
  };
  return result;
};

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(item => item + extraCandies >= max);
};
链接：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies      