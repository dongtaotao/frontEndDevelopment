var deleteDuplicates = function(head) { 
  let p = head;
  while(p && p.next) {
    if(p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head; 
}

练习：删除重复节点升级  
function ListNode(val, next) {
  this.val = val;
  this.next = null;
}
var deleteDuplicates = function (list) {
  let head = new ListNode();
  head.next = list;
  let p = head;
  // 因为比较指针后两个节点，所以必须判断在的情况
  while (p && p.next && p.next.next) {
    /* 节点值相同的全部删除 开始 */
    // 开始是两个节点值相同，将这两个节点都删除
    if (p.next.val === p.next.next.val) {
      let cur = p.next.val;
      p.next = p.next.next.next ? p.next.next.next : null;
      // 然后看下一个节点是不是和删除的节点一样，一样的话，接着删除，直到下一个节点的值和删除的节点不一样
      while (p.next && p.next.val === cur) {
        p.next = p.next.next ? p.next.next : null;
      }
    /* 节点值相同的全部删除 结束 */ 
    } else {
      p = p.next;
    }
  }
  return head.next;
};
https://juejin.cn/post/6945771148663586823 