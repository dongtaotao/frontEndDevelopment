var  hasCycle = function(head) {
  let p1 = head;
  let p2 = head;
  while(p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if(p1 === p2) {
      return true
    }
  }
  return false;
}

var hasCycle = function(list) {
  let p = list; 
  while(p) {
    if(p.flag) return true;
    p.flag = true;
    p = p.next;
  }
  return false 
}
// 判断链表中是否有环，其实有点像四处游玩，怎么知道你走过一个圈，其实只要你第二次走到走过的地方，就说明走过一个圈了。
// 于是，每走过一个地方，就给这个地方标识下，如果再次看到这个标识表明这个地方游过，也就说明，走了一个圈。
// https://juejin.cn/post/6948019064446910500 


console.log('000')