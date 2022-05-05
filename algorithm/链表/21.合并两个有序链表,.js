
1. 题目
将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
复制代码

function mergeTwoLists(l1, l2) {
  if(l1 === null) {
    return l2
  }
  if(l2 === null) {
    return l1
  }
  if(l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}

function a (l1, l2) {
    let p = new ListNode();
    let p1 = l1;
    let p2 = l2;
    while(p1&& p2) {
        if(p1.val< p2.val) {
            p.next = p1;
            p1= p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }

    if(p1) {
        p.next = p1;
    }
    if(p2) {
        p.next = p2
    }

    return p.next
}

作者：前端瓶子君
链接：https://juejin.im/post/6844904122496319495
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


合并K个升序链表
合并两个链表

合并k个链表，其实我们可以简化为，不断的去合并两个链表，采用迭代的方式完成本题。

var mergeTwoLists = function(list1, list2) {
  const dommy = new ListNode(-1)
  let p = dommy
  while(list1 || list2){
      if(list1 && list2){
          if(list1.val < list2.val){
              p.next = list1
              list1 = list1.next
          }else{
              p.next =list2
              list2 = list2.next
          }
      }else if (list1){
          p.next = list1
          list1 = list1.next
      }else {
          p.next = list2
          list2 = list2.next
      }
       p = p.next
  }
  return dommy.next
};
var mergeKLists = function(lists) {
   let result = null
   for(let i = 0;i < lists.length ; i++){
       result = mergeTwoLists(result , lists[i])
   }
   return result
};


