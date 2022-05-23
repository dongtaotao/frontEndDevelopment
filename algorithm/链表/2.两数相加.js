https://juejin.cn/post/7023208826472005668#heading-24
3. 两数相加
题目链接：2. 两数相加 - 力扣（LeetCode） (leetcode-cn.com)
var addTwoNumbers = function (l1, l2){
    const l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0;
    while(p1 || p2){
        const v1 = p1 ? p1.val :0
        const v2 = p2 ? p2.val :0
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10);
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    if(carry){
        p3.next = new ListNode(carry)
    }
    return l3.next
};

//无重复最长子串
var lengthOfLongSubstring = function(s) {  
  let l = 0;
  let res = 0;
  const map = new Map();
  for(let r = 0; r < s.length; r++) {
    if(map.has(s[r]) && map.get(s[i]) >= l) {
      l = map.get(s[r]) + 1;
    }

    res = Math.max(res, r - l +1);
    map.set(s[r], r)
  }
  return res;
}
