给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
图示两个链表在节点 c1 开始相交：
题目数据 保证 整个链式结构中不存在环。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
const getIntersectionNode = (A, B) => {
  let pA = A,
      pB = B;
  while (pA !== pB) {
      pA = pA === null ? B : pA.next;
      pB = pB === null ? A : pB.next;
  }
  return pA;
};

链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/tu-jie-shuang-zhi-zhen-javascript-by-lzx-zd6z/

459. 重复的子字符串 https://leetcode-cn.com/problems/repeated-substring-pattern/
输入: "abab"
输出: True
解释: 可由子字符串 "ab" 重复两次构成。
var repeatedSubstringPattern = function(s) {
  let s1 = (s + s).slice(1, -1);
  return s1.indexOf(s) != -1;
};

链表中环的入口节点
/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
 function EntryNodeOfLoop(pHead) {
  let fast = pHead;
  let slow = pHead;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      // 两者相遇
      let p = pHead;
      while (p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }
  return null;
}


数组中重复的数字
// 第二种
function duplicate(numbers) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!map[numbers[i]]) {
      map[numbers[i]] = 1;
    } else {
      return numbers[i];
    }
  }
  return -1;
}

两个链表的第一个公共节点
function FindFirstCommonNode(pHead1, pHead2)
{
    let p1 = pHead1,
        p2 = pHead2;
    while (p1 != p2) {
        p1 = p1 === null ? pHead2 : p1.next
        p2 = p2 === null ? pHead1 : p2.next
    }
    return p1
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
}; 
