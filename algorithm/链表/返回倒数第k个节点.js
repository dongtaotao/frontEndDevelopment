var kthToLast = function (head, k) {
  let pre = head;
  let last = head;
  let pos = k;
  while(pos > 0) {
    last = last.next;
    pos--;
  }

  while(last !== null) {
    last = last.next;
    pre = pre.next;
  }
  return pre.val;
}

var kthToLast = function(head, k) {
  if(!head) return []
  var valArr = []
  while(head){
    valArr.unshift(head.val)
    head =head.next
  }
  return valArr[k-1] 
} 