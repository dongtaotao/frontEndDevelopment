反转链表
输入一个链表，反转链表后，输出新链表的表头。

#思路
以链表的头部节点为基准节点

将基准节点的下一个节点挪到头部作为头节点

当基准节点的next为null，则其已经成为最后一个节点，链表已经反转完成

#代码
var reverseList = function (head) {
  let currentNode = null;
  let headNode = head;
  while (head && head.next) {
    currentNode = head.next;
    head.next = currentNode.next;
    currentNode.next = headNode;
    headNode = currentNode;
  }
  return headNode; 
};

var reverseList2 = function(head) {
  let p1 = head;
  let p2 = null;

  while(p1) {
    const tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }
  return p2;
}
//http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html#%E6%80%9D%E8%B7%AF

K个一组翻转链表
输入： head = [1,2,3,4,5], k = 2
输出： [2,1,4,3,5]
var reverseKGroup = function(head, k) {
  let pre = null,cur = head;
  let p = head;
  for(let i = 0;i<k;i++){
      if(p == null) return head; 
      p = p.next;
  }
  for(let j = 0;j<k;j++){
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  head.next = reverseKGroup(cur,k); 
  return pre;
};  
https://juejin.cn/post/7018919184528572429 