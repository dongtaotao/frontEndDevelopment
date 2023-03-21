输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head) {
  const array = [];
  while(head) {
    array.unshift(head.val);
    head = head.next;
  }
  return array;  
} 
//http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8.html#%E5%88%86%E6%9E%90