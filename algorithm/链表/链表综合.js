https://github.com/isboyjc/DailyAlgorithms
//================================================================
No.1 两数之和
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
const twoSum = function (nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
      // 取出当前迭代的值
      let num = nums[i]
      // 如果有，代表条件满足，返回
      if (num in hash) {
          return [i, hash[num]]
      } else {
          // 如果没有，则存入键名为差值，键值为下标
          hash[target - num] = i
      }
  }
}
//================================================================
No.2 从尾到头打印链表
输入：head = [1,3,2]
输出：[2,3,1]
var reversePrint = function(head) {
  if(head === null) return []
  let res = [],cur = head
  while(cur !== null){
      res.push(cur.val)
      cur = cur.next
  }
  return res.reverse()
};

const reversePrint = function (head) {
  // 返回值
  const arr = []
  // 取出当前节点
  let node = head
  // 遍历链表
  while (node !== null) {
      // 把当前节点的值插入数组中第一位
      arr.unshift(node.val)
      // 切换当前节点
      node = node.next
  }
  return arr
};
//================================================================
No.3 删除链表中的节点

输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9

var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
//================================================================
No.4 反转链表
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

var reverseList = function(head) { 
  let prev = null,cur = head,temp
  while(cur){
    temp = cur.next; // 修改前先保存下一个节点
    cur.next = prev; // 改变大当前节点指向，第一个节点prev是null,
    prev = cur; // 记录前一个节点，供下次循环使用
    cur = temp; // cur通过temp指向下一节点
  }
  return prev; // cur循环直到null，所以prev为最终头节点
};

No.5 删除链表的指定节点
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。
注意：相对于 No.3 删除链表中的节点 ，似乎这道题更有意义些
示例 1:
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2:
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

const deleteNode = function (head, val) {
  // 创建一个临时节点
  let node = new ListNode(-1)
  // 链表合并
  node.next = head
  // 复制一份链表
  let temp = node
  while (temp.next) {
      if (temp.next.val === val) {
          temp.next = temp.next.next
          break
      }
      temp = temp.next
  }
  return node.next
};
//================================================================
No.6 移除链表元素
删除链表中等于给定值 val 的所有节点。
注意：相对于 No.5 删除链表的指定节点(节点值互不相同) ，
此题链表中会有重复项，要删除给定值的所有节点
示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5

const removeElements = function (head, val) {
  let node = new ListNode(0)
  node.next = head
  let temp = node
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return node.next
};

//================================================================
No.7 合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 时间复杂度O(n+m)
var mergeTwoLists = function(l1, l2) {
  // 判断又一个为空，直接return另一个
  if(!l1) return l2
  if(!l2) return l1

  // 哑节点
  let res = new ListNode(null)
  let temp = res
  // 同时遍历l1和l2，当有一个先结束，直接结束循环
  while(l1 && l2){
      if(l1.val >= l2.val){
          temp.next = l2
          l2 = l2.next
      }else{
          temp.next = l1
          l1 = l1.next
      }
      temp = temp.next
  }

  if(l1) temp.next = l1
  if(l2) temp.next = l2
  return res.next
};
//================================================================
No.8 链表中倒数第k个节点
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，
本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，
从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.
返回链表 4->5.

var getKthFromEnd = function(head, k) {
  // 快慢指针
  // p,q两个指针，让p先走k步，然后p,q一起走，直到p为null
  let p = head,q = head
  while(p){
      if(k <= 0){
        q = q.next
      }
      p = p.next
      k--
  }
  return q
};
//================================================================
No.9 环形链表
给定一个链表，判断链表中是否有环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
5.快慢指针
时间复杂度 O(n)
空间复杂度 O(1)
两个指针，一快一慢，如果有环，快指针一定可以追上慢指针，就像操场跑步快的人一定可以追上跑的慢的人

var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
      if(slow === fast) return true
    }
    return false
}

//================================================================
No.10 移除链表重复节点
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
示例1:
输入：[1, 2, 3, 3, 2, 1]
输出：[1, 2, 3]
示例2:
输入：[1, 1, 1, 1, 2]
输出：[1, 2]
提示：

链表长度在[0, 20000]范围内。
链表元素在[0, 20000]范围内。
进阶：

如果不得使用临时缓冲区，该怎么解决？
求解：

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  // 映射表，用来判断节点是否存在
  let hash = {}
  // 哑节点
  let prev = new ListNode(-1)
  prev.next = head
  let node = prev

  while(node.next){
    if(hash[node.next.val]){
      node.next = node.next.next
    }else{
      hash[node.next.val] = true
      node = node.next
    }
  }
  return prev.next
};

const deleteDuplicates = function (head) {
  let prev = new ListNode(0)
  prev.next = head
  let node = prev
  const arr = []
  while (node.next) {
    // 判断数组内是否有重复的值，没有的话，就把当前节点值存储进入
    if (arr.indexOf(node.next.val) === -1) {
      arr.push(node.next.val)
      node = node.next
    } else {
      node.next = node.next.next
    }
  }
  return prev.next
};

//================================================================
No.11 链表的中间节点
给定一个带有头节点 head 的非空单链表，返回链表的中间节点。
如果有两个中间节点，则返回第二个中间节点。
示例 1：
输入：[1,2,3,4,5]
输出：此列表中的节点 3 (序列化形式：[3,4,5])
返回的节点值为 3 。 (测评系统对该节点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
示例 2：

输入：[1,2,3,4,5,6]
输出：此列表中的节点 4 (序列化形式：[4,5,6])
由于该列表有两个中间节点，值分别为 3 和 4，我们返回第二个节点。


快慢指针 时间复杂度O(n) 空间复杂度O(1)
var middleNode = function(head) {
  // 快
  let fast = head
  // 慢
  let slow = head
  while(fast.next){
      if(!fast.next.next){
        return slow.next
      }

      slow = slow.next
      fast = fast.next.next
  }
  return slow
};


No.12 相交链表
编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：
来源：力扣（LeetCode）算法160题
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
来源：力扣（LeetCode）剑指 Offer 52题
链接：https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
来源：力扣（LeetCode）面试题 02.07题
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 双指针法
// 链表a和链表b，a遍历结束指向b接着遍历，b遍历结束指向a接着遍历

// 存在相交情况下
// 链表a: a1 a2 a3 c1 c2
// 链表b:    b1 b2 c1 c2
// a1 a2 a3 c1 c2 b1 b2 【c1】 c2
// b1 b2 c1 c2 a1 a2 a3 【c1】 c2

// 不存在相交情况下
// 链表a: a1 a2 a3 a4 a5
// 链表b: b1 b2 b3
// a1 a2 a3 a4 a5 b1 b2 b3 -> next===null
// b1 b2 b3 a1 a2 a3 a4 a5 -> next===null
// 无相交情况下最终遍历到a+b长度时，a和b的next都为null，null===null结束遍历

var getIntersectionNode = function(headA, headB) {
  let [pA, pB] = [headA, headB]
  while(pA !== pB) {
      pA = pA ? pA.next : headB
      pB = pB ? pB.next : headA
  } 
  return pA
};
//================================================================
No.13 回文链表
请判断一个链表是否为回文链表。
回文链表即正反都一致的链表
示例 1:
输入: 1->2
输出: false
示例 2:
输入: 1->2->2->1
输出: true
进阶：

你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
求解：

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome (head) {
  let positiveStr = '';
  let reverseStr = '';
  while (head) {
    const nodeVal = head.val;
    // 正向字符串拼接
    positiveStr += nodeVal;
    // 反向字符串拼接
    reverseStr = nodeVal + reverseStr;
    // 下一个节点
    head = head.next;
  }

  return positiveStr === reverseStr;
}
来源：力扣（LeetCode）算法234题
链接：https://leetcode-cn.com/problems/palindrome-linked-list
来源：力扣（LeetCode）面试题 02.06题
链接：https://leetcode-cn.com/problems/palindrome-linked-list-lcci/

const isPalindrome = function (head) {
  const arr = []
  while (head) {
      arr.push(head.val)
      head = head.next
  }
  // 双指针 首尾遍历，挨个对比
  for (let i = 0, j = arr.length - 1; i < j; i++ , j--) {
      if (arr[i] !== arr[j]) return false
  }
  return true
};

//================================================================
奇偶链表
var oddEvenList = function (head) {
    if (head === null) {
      return null;
    }
    if (head.next === null) {
      return head;
    }

    let odd = head;
    let even = head.next;
    let evenHead = head.next;
    while (even !== null && even.next !== null) {
      odd.next = odd.next.next;
      odd = odd.next;
      even.next = even.next.next;
      even = even.next;
    }

    odd.next = evenHead;
    return head;
};  