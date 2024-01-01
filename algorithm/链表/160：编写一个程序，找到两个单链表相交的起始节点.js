//https://github.com/sisterAn/JavaScript-Algorithms/issues/17
解法一：标记法(简单但空间复杂度为O(n)，不符合，仅做参考)
解题思路： 两次遍历，先遍历一个链表，给链表中的每个节点都增加一个标志位，
然后遍历另外一个链表，遍历到第一个已被标志过的节点为两链表相交的起始节点。

若遍历完都没有发现已被标志过的节点，则两链表不相交，返回 null 

const getIntersectionNode = function(headA, headB) {
  while(headA) {
    headA.flag = true
    headA = headA.next
  }
  while(headB) {
    if (headB.flag) return headB
    headB = headB.next
  }
  return null   
};