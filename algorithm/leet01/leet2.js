//两数之和
let twosum = function (nums,target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++) {
      const key = target - nums[i];
      if(map.has(key)) {
        return [map.get(key), i]
      }
      map.set(nums[i], i)
    }
  }
//无重复字符串
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

  给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

  示例 1:
  输入: 123
  输出: 321
   示例 2:
  输入: -123
  输出: -321
  示例 3:

  输入: 120
  输出: 21
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-integer
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
  };

  var reverse = function (x) {
    let y = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0)
        y = - y;
    return y > 2147483647 || y < -2147483648 ? 0 : y;
  };


判断一个整数是否是回文数。
    回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
const isPalindrome = (x) => {
    if(x<0) {
      return false;
    }
  
    const str = x.toString();
    let i=0;
    let j = str.length -1;
    let flag = true;
    while(i<j) {
      if(str[i] !== str[j]) {
        flag = false;
        break;
      }
      i++;
      j--;
    }
  
    return flag;
  }
  
  // 二分法查找
  var isPalindrome2 = (x) => {
    if(x<0) {
      return false;
    }
    let flag = true;
    let x= x.toString();
    for(let i=0;i< x.length /2 ;i++) {
      if(x[i] !== x[x.length -1-i]) {
        flag = false;
        break;
      }
    }
  
    return flag;
  }
链接：https://leetcode-cn.com/problems/palindrome-number

将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
/**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */

    var mergeTwoLists = function(l1, l2) {
        if (l1 === null) {
            return l2;
        } else if (l2 === null) {
            return l1;
        } else if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    };

最长公共前缀
// 解题思路
// 取出数组的第一个字符串依次和剩余的字符串去比较。
//https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-caoyq0521/
var longestCommonPrefix = function(strs) {
  if(!strs.length) {
    return '';
  }
  let [a, ...b] = strs;
  let result = '';
  for(let i=0;i< a.length;i++) {
    let flag = b.every(item => item[i] === a[i]);
    if(flag) {
      result+= a[i]
    } else {
      break;
    }
  }
  return result;
}

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var isValid = function(s) {
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  const stack = [];
  for(let i=0;i<s.length;i++) {
    if(map.has(s[i])) {
      stack.push(map.get(s[i]))
    } else {
      if(stack.pop() !== s[i]) {
        return false;
      }
    }
  }

  if(stack.length !== 0) {
    return false;
  }
  return true
}


给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。
示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var searchInsert = function(nums, target) {
  if(nums[0] > target) {
    return 0;
  }
  for(let i=0;i<nums.length;i++) {
    if(nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};


实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
由于返回类型是整数，小数部分将被舍去。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  var mySqrt = function(x) {
    return parseInt(Math.sqrt(x));
};


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

