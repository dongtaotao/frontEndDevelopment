剑指 Offer II 077. 链表排序https://leetcode-cn.com/problems/7WHec2/
给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
输入：head = [4,2,1,3]
输出：[1,2,3,4]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function (head) { 
  let list = new ListNode(0, head)
  let result = list
  let arr = []//用来存放所有的节点值
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  arr.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < arr.length; i++) {
    result.next.val = arr[i]
    result = result.next
  }
  return list.next 
};   
