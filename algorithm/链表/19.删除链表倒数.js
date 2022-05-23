const removeNthFromEnd = function(head, n){
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;
  for(let i=0; i< n;i++) {
    n2 = n2.next;
  }

  while(n2.next != null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next
}

奇偶链表 
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
var oddEvenList = function(head) { 
  if(!head) return ;
  var odd = head; // 奇数链表
  var even = head.next; // 偶数链表
  var evenHead = even // 偶数链表头
  while(even && even.next ){
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
};
