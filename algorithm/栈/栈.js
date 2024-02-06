
学习JavaScript数据结构与算法之栈(1)
https://juejin.cn/post/6874869558662922248
class Stack {
  constructor() {
    this._items = [];
  }
  push(element) {
    this._items.push(element);
  }
  pop() {
    return this._items.pop();
  }
  peek() {
    return this._items[this._items.length - 1];
  }
  isEmpty() {
    return this._items.length === 0;
  }
  clear() {
    this._items = [];
  }
  size() {
    return this._items.length;
  }
}

从十进制到二进制
const Stack = require('./objectStack.js')

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while(number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000
console.log(decimalToBinary(1000.99)); // 1111101000

十进制转任意进制
const Stack = require('./objectStack.js')

function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem;
  let binaryString = '';
  if(!(base >= 2 && base <= 36)) { return '' }
  while(number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  while(!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }
  return binaryString;
}

console.log(baseConverter(100345, 2)); // 11000011111111001 
console.log(baseConverter(100345, 8)); // 303771 
console.log(baseConverter(100345, 16)); // 187F9 
console.log(baseConverter(100345, 35)); // 2BW0

1.3.3 有效的括号
var isValid = function(s) {
  if(s.length % 2 === 1) { return false; }
  const stack = []
  for(let i = 0; i < s.length; i += 1) {
    const c = s[i]
    if(c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if(
        (t === '(' && c === ')') || 
        (t === '{' && c === '}') || 
        (t === '[' && c === ']')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};

1.3.5 回文检查器
var isPalindrome = function(x) {
    let startString = x + ''
    if (startString === undefined || startString === null || (startString !== null && startString.length === 0)) {
        return false
    }
    const stack = []
    let i = 0
    let lowerString = ''
    while(i < startString.length) {
        stack.push(startString[i++])
    }

    while(stack.length) {
        lowerString += stack.pop()
    }

    return lowerString === startString
};

学习JavaScript数据结构与算法之队列(2)
https://juejin.cn/post/6882588628187349000

击鼓传花游戏
function hotPotato(elementsList, num) {
  const queue = []
  const elimitatedList = []
  for(let i = 0; i < elementsList.length; i++) {
      queue.unshift(elementsList[i])
  }

  while (queue.length > 1) {
      for (let i = 0; i < num; i++) {
          queue.unshift(queue.pop())
      }
      elimitatedList.push(queue.pop())
  }

  return {
      eliminated: elimitatedList, 
      winner: queue.pop()
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)

result.eliminated.forEach(name => { 
  console.log(`${name}在击鼓传花游戏中被淘汰。`)
});
console.log(`胜利者： ${result.winner}`)


回文检查器
function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) { 
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}


数据结构与算法之链表
https://juejin.cn/post/6885524352465551367

删除链表中的节点
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

反转链表
var reverseList = function(head) {
  let p1 = head;
  let p2 = null;
  while(p1) {
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
};

两数相加
解题步骤：
新建一个空链表
遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加
var addTwoNumbers = function(l1, l2) {
  const l3 = new ListNode(0)
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while(p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    p3.next = new ListNode(val % 10);
    if(p1) p1 = p1.next
    if(p2) p2 = p2.next
    p3 = p3.next;
  }
  if(carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};

删除排序链表中的重复元素
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
};

删除排序链表中的重复元素 II
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
 var deleteDuplicates = function(head) {
  if(!head||!head.next){
      return head;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let cur = dummy;
  while(cur.next&&cur.next.next){
      if(cur.next.val===cur.next.next.val){
          // 记录下当前相等的值
          let value = cur.next.val;
          while(cur.next&&cur.next.val===value){
              // 此时我们要改变指针的指向,也就是开始删除值
              cur.next = cur.next.next;
          }
      }else{
          // 循环结点
          cur = cur.next;
      }
  }
  return dummy.next;
};

环形链表
var hasCycle = function(head) {
  let p1 = head;
  let p2 = head;
  while(p1 && p2 && p2.next) {
      p1 = p1.next
      p2 = p2.next.next
      if(p1 === p2) {
          return true;
      }
  }
  return false;
};

instanceof原理，并用代码实现
const instanceOf = (A, B) => {
  let p = A;
  while(p) {
      if(p === B.prototype) {
          return true;
      }
      p = p.__proto__
  }
  return false;
}

数据结构与算法之集合与字典
https://juejin.cn/post/6885534619039596557#heading-11

求交集
var intersection = function(nums1, nums2) {
  const map = new Map();
  nums1.forEach(n => {
      map.set(n, true)
  })
  const res = []
  nums2.forEach(n => {
      if(map.get(n)){
          res.push(n)
          map.delete(n)
      }
  })
  return res;
}

两数之和
var twoSum = function(nums, target) {
  const map = new Map()
  for(let i = 0; i < nums.length; i+=1) {
      const n = nums[i]
      const n2 = target - n
      if(map.has(n2)) {
          return [map.get(n2), i]
      } else {
          map.set(n, i)
      }
  }
};

无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
  let l = 0
  let res = 0
  const map = new Map()
  for(let r = 0; r < s.length; r++) {
    if(map.has(s[r]) && map.get(s[r]) >= l) {
        l = map.get(s[r]) + 1
    }
    res = Math.max(res, r - l + 1)
    map.set(s[r], r)
  }
  return res
};

最小覆盖子串
var minWindow = function(s, t) {
  let l = 0;
  let r = 0;
  const need = new Map();
  for(let c of t) {
      need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  let needType = need.size;
  let res = ''
  while(r < s.length) {
      const c = s[r]
      if(need.has(c)){
          need.set(c, need.get(c) - 1);
          if(need.get(c) === 0) needType -= 1
      }
      while(needType === 0) {
          const newRes = s.substring(l, r + 1)
          if(!res || newRes.length < res.length) res = newRes
          const c2 = s[l]
          if(need.has(c2)) {
              need.set(c2, need.get(c2) + 1)
              if(need.get(c2) === 1) needType += 1
          }
          l += 1
      }
      r += 1;
  }
  return res;   
}; 




