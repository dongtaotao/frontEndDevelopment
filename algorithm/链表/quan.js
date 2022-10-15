2w字 | 28道 LeetCode 题目带你看看链表的那些套路
https://juejin.cn/post/6943787446505046046#heading-13

（1）环形链表
输入：head = [3,2,0,-4], pos = 1
输出：true

var hasCycle = function(head) {
  while(head) {
    if(head.flag) {
      return true
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return false
} 
（2）环形链表 II
var detectCycle = function(head) {
  while(head) {
    if(head.flag) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
}

var detectCycle = function(head) {
  let fast = head
  let slow = head
  let cur = head

  while(fast && fast.next && fast.next.next){
      slow = slow.next
      fast = fast.next.next
      if(fast == slow){
          while(cur!=slow){
              cur = cur.next
              slow = slow.next
          }
          return slow
      }
  }
  return null
};


（3）相交链表
var getIntersectionNode = (headA, headB) {
  if(!headA || !headB) return null;
  let pA = headA;
  let pb = headB;
  while(pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
}

（4）链表的中间结点
var middleNode = function(head) {
  let fast = head, slow = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
}

（5）回文链表
var isPalindrome = function(head) {
  let a = '';
  let b = '';
  while(head) {
    const val = head.val;
    a = a+val;
    b = val+b;
    head = head.next;
  }
  return a === b;
}

（7）链表中倒数第k个节点
var getKthFromEnd = function(head, k) {
  let slow = head, fast = head;
  let cur = 0;
  while(cur < k){
      fast = fast.next
      cur++
  }

  while(fast){
      fast = fast.next
      slow = slow.next
  }
  return slow
};

（3）反转链表 
var reverseList = function(head) {
  // 设置指针指向前驱节点和当前节点
  let pre = null
  let cur = head
  // 遍历链表，直到链表节点为空
  while (cur!= null){
      // 记录当前的节点，用于后面的遍历
      let next = cur.next
      // 调转链表的指针方向
      cur.next = pre
      // 向后移动指针
      pre = cur
      cur = next
  }
  return pre
};


（4）反转链表 II
（7）两两交换链表中的节点

（16）删除链表的倒数第 N 个结点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  // 设置虚拟头结点
  const dummy = new ListNode()
  dummy.next = head
  // 设置快慢指针
  let fast = dummy
  let slow = dummy
  // 快指针先走到第N个节点
  while (n!==0){
      fast = fast.next
      n--
  }
  // 快慢指针一起走，直到快指针指向最后一个节点
  while (fast.next){
      fast = fast.next
      slow = slow.next
  }
  // 删除倒数第N个节点
  slow.next = slow.next.next
  return dummy.next
};

（17）合并两个有序链表/**
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
   // 定义新链表的头结点
   let head = new ListNode();
   // 当前指针指向的节点
   let cur = head;

   while (l1&&l2){
       if(l1.val<=l2.val){
           // 先指向只较小的节点 
           cur.next = l1
           // 在将指针的指向移动
           l1 = l1.next
       }else{
           cur.next = l2
           l2 = l2.next
       }
       // 连接好一个节点之后，指针的方向也会移动一位
       cur = cur.next
   }
   // 处理两个链表长度不同的情况
   cur.next = l1!==null ? l1 : l2
   // 返回最后的结果，头指针指向的那个位置，就代表新生成的链表
   return head.next
};


2.区间反转
1 ≤ m ≤ n ≤ 链表长度。
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
/**
* @param {ListNode} head
* @param {number} m
* @param {number} n
递归解法
对于递归解法，唯一的不同就在于对于区间的处理，采用递归程序进行处理，大家也可以趁着复习一下
递归反转的实现。
* @return {ListNode}
*/
var reverseBetween = function(head, m, n) {
  let count = n - m;
  let p = dummyHead = new ListNode();
  let pre, cur, start, tail;
  p.next = head;
  for(let i = 0; i < m - 1; i ++) {
      p = p.next;
  }
  // 保存前节点
  front = p;
  // 同时保存区间首节点
  pre = tail = p.next;
  cur = pre.next;
  // 区间反转
  for(let i = 0; i < count; i++) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  // 前节点的 next 指向区间末尾
  front.next = pre;
  // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
  tail.next = cur;
  return dummyHead.next;
};

https://juejin.cn/post/6983580875842093092#heading-2


3.两个一组翻转链表/ 
给定 1->2->3->4, 你应该返回 2->1->4->3
var swapPairs = function(head) {
  if(head == null || head.next == null)
  return head;
  let dummyHead = p = new ListNode();
  let node1, node2;
  dummyHead.next = head;
  while((node1 = p.next) && (node2 = p.next.next)) {
      node1.next = node2.next;
      node2.next = node1;
      p.next = node2;
      p = node1;
  }
  return dummyHead.next;
};

4.K个一组翻转
给定这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var reverseKGroup = function(head, k) {
  let pre = null, cur = head;
  let p = head;
  // 下面的循环用来检查后面的元素是否能组成一组
  for(let i = 0; i < k; i++) {
  if(p == null) return head;
      p = p.next;
  }
  for(let i = 0; i < k; i++){
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  // pre为本组最后一个节点，cur为下一组的起点
  head.next = reverseKGroup(cur, k);
  return pre;
};
  