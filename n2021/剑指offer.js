JavaScriptScript版《剑指Offer》刷题资源整理和JavaScript刷题总结
https://blog.csdn.net/u014465934/article/details/90726911?spm=1001.2101.3001.6650.14&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-14.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-14.no_search_link

https://www.cnblogs.com/wuguanglin/p/code-interview.html

https://blog.csdn.net/weixin_42235173/article/details/90897252
剑指offer-javascript版本（66道题全集，内容特别特别长）

https://blog.csdn.net/Damp_XUN/article/details/98502147
剑指offer JavaScript版

//================================================================
剑指offer（5）用两个栈实现队列
栈是先进后出，队列是先进先出，因此两个栈，一个用来push，一个用来pop
，同时注意下两个栈不为空的时候。
const outStack = [];
const inStack = [];
function push(node) {
  // write code here
  inStack.push(node);
}
function pop() {
  // write code here
  if (!outStack.length) {
    while (inStack.length) {
      outStack.push(inStack.pop());  
    }
  }
  return outStack.pop();
}
const outStack = [];
https://www.cnblogs.com/wuguanglin/p/pushAndPop.html

//================================================================
JZ34 第一个只出现一次的字符
输入：
"google"
复制
返回值：
function FirstNotRepeatingChar(str) {
  if (str.length < 1 || str.length > 10000) return -1;
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

function FirstNotRepeatingChar(str) {
  for(var i = 0;i<str.length;i++){
    if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
      return i
    }
  }
  return -1
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};
//================================================================
JZ42 和为S的两个数字
function FindNumbersWithSum(array, sum) {
  if (array.length < 2) return [];
  let left = 0,
    right = array.length - 1;
  const res = [];
  while (left < right) {
    if (array[left] + array[right] < sum) {
      left++;
    } else if (array[left] + array[right] > sum) {
      right--;
    } else {
      res.push(array[left], array[right]);
      break;
    }
  }
  return res;
}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};
//================================================================
06.旋转数组的最小数字
[3,4,5,1,2] 为 [1,2,3,4,5]的旋转数组，其最小值为1
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) return 0
  for (let i = 0; i < rotateArray.length; i++) {
      if (i === rotateArray.length - 1) return rotateArray[0]
      if (rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1]
  }
}
//================================================================
28.众数
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字
1,2,3,2,2,2,5,4,2
=> 2
function MoreThanHalfNum_Solution(numbers) {
  if (numbers.length == 0) {
      return 0
  }
  var hashmap = {}
  var len = numbers.length / 2
  for (let i = 0; i < numbers.length; i++) {
      let item = numbers[i]
      if (hashmap[item]) {
          hashmap[item]++
      } else {
          hashmap[item] = 1
      }
      if (hashmap[item] > len) return item
  }
  return 0
}
//================================================================
剑指 Offer 66. 构建乘积数组
var constructArr = function(a) {
  const res = []
  let n=a.length
  for(let i=0;i<n;i++){
    let temp=1
    for(let j=0;j<n;j++){
      if(i!==j){
        temp=temp*a[j]
      }
    }
    res.push(temp)
  }
  return res
};
//================================================================
28. 实现str（）
题目如下：
实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 
示例 1：
输入：haystack = "hello", needle = "ll"
输出：2
示例 2：
输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：
输入：haystack = "", needle = ""
输出：0
提示：
var strStr = function (haystack, needle) {
  if (needle === "") return 0
  for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
        if (haystack.substring(i, i + needle.length) === needle) return i;
      }
  }
  return -1
};
//================================================================
121. 买卖股票的最佳时机
接下来这道题，你简单看下题目就行，解答原理超级简单，看图说话，找规律！
我们先看题：
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 
提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104

//================================================================
283. 移动零
题目如下：
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
var moveZeroes = function(nums) {
  let i = j = 0;
  while(i < nums.length) {
      if(nums[i] !== 0){
        [nums[i], nums[j]] = [nums[j], nums[i]]
        j++
      }
      i++
  }
  return nums
};

var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {//遇到非0元素，让nums[j] = nums[i]，然后j++
          nums[j] = nums[i];
          j++;
      }
  }
  for (let i = j; i < nums.length; i++) {//剩下的元素全是0
      nums[i] = 0;
  }
  return nums;
};

//================================================================
344. 反转字符串
示例 1：

输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
示例 2：

输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
var reverseString = function(s) {
  let l = 0 ;
  let r = s.length - 1;
  while(l < r){
    [s[l], s[r]] = [s[r], s[l]];
    l++; r--;
  }
  return s;
};

//================================================================
160. 相交链表
var getIntersectionNode = function(headA, headB) {
  if(headA== null || headB==null){
      return null;
  }
  let lA = headA;
  let lB = headB;
  while(lA !== lB){
      lA = lA==null ? headB : lA.next;
      lB = lB==null ?headA : lB.next;
  }
  return lA;
};
//================================================================
11.输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n) {
  if(n < 0){
    n = n >>> 0;
  }
  var arr = n.toString(2).split('');
  return arr.reduce(function(a,b){
      return b === "1" ? a + 1 : a;
  },0);
}
//================================================================
12.给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
function Power(base, exponent){
  return Math.pow(base, exponent);
  // return base ** exponent;
}
//================================================================
20.定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
var stack = [];
function push(node){
    stack.push(node);
}
function pop(){
    return stack.pop();
}
function top(){
    return stack[stack.length - 1];
}
function min(){
    return Math.min.apply(null, stack);
}
//===============================================================
37.统计一个数字在排序数组中出现的次数。
链接：https://www.nowcoder.com/discuss/49349?from=zhnkw
function GetNumberOfK(data, k){
    return data.reduce(function(count, a){
        return a === k ? count+1 : count;
    }, 0);
}
//================================================================
剑指offer（6）旋转数组中的最小数字
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
function minNumberInRotateArray1(rotateArray) {
  // write code here
  if (rotateArray.length === 0) return 0;
  for (let i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1];
  }
  return rotateArray[0];
}
//================================================================
题目描述
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n)
{
    // write code here
    //自己的方法 当时考虑了各种整数转二进制数，二进制数转整数的方法。最后没做出来，对数组和字符串的操作有了更深一步的了解。
 
    //参考方法一   大神级别的做法
    //思想：把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0。
    //那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。
       var count = 0;
        while(n){//直至整数变成0
            count++;
            n = n&(n-1);//在计算机中，数值一律用补码存储。而这里用的是位运算，所以无所谓正数负数。
                        //因为位运算之前，需要把整数转换成二进制数。
        }
        return count;
    
    //参考方法二
    /*
    if(n<0){
        n = n>>>0;//get到新技能，该行命令能够获取到负数的补码
    }
    var res = n.toString(2);
    var count = 0;
    for(var i = 0; i <res.length; i++){
        if(res[i] == 1){
            count++;
        }
    }
    return count;
    */
}
//================================================================
剑指offer（18）二叉树的镜像
二叉树的镜像定义：源二叉树
    8
    /  \
  6   10
  / \  / \
5  7 9 11
镜像二叉树
    8
    /  \
  10   6
  / \  / \
11 9 7  5
function Mirror(root) {
  if (root === null) return;
  Mirror(root.left);
  Mirror(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
}
//================================================================
剑指 Offer 45. 把数组排成最小的数
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
示例 1:
输入: [10,2]
    输出: "102"
    /**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  return nums.sort((a, b) => `${a}${b}`-`${b}${a}`).join('')
};
链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/js-jian-zhi-offer-45-ba-shu-zu-pai-cheng-phf8/
//================================================================
剑指offer（34）第一个只出现一次的字符
function FirstNotRepeatingChar(str) {
  if (str.length < 1 || str.length > 10000) return -1;
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
//================================================================
滑动窗口的最大值
function maxInWindows(num, size)
{
  if(num.length < size) {
      return []
  }
  if(size === 0) {
      return []
  }
  let result = [];
  for (let i = 0; i <= num.length - size; i++) {
      let item = Math.max(...num.slice(i, size + i))
      result.push(item);
  }
  return result;
  // write code here
}
module.exports = {
    maxInWindows : maxInWindows
};
//================================================================
JZ71 跳台阶扩展问题
function jumpFloorII(number) {
  // write code here
  let i = 1;
  while (--number) {
    i *= 2;
  }
  return i;

  // return 2 ** (number -1)
}
module.exports = {
    jumpFloorII : jumpFloorII
};
//================================================================
JZ62 孩子们的游戏(圆圈中最后剩下的数)
每年六一儿童节，牛客都会准备一些小礼物和小游戏去看望孤儿院的孩子们。其中，有个游戏是这样的：首先，让 n 个小朋友们围成一个大圈，
小朋友们的编号是0~n-1。然后，随机指定一个数 m ，让编号为0的小朋友开始报数。每次喊到 m-1 的那个小朋友要出列唱首歌，
然后可以在礼品箱中任意的挑选礼物，并且不再回到圈中，从他的下一个小朋友开始，继续0... m-1报数....这样下去....直到
剩下最后一个小朋友，可以不用表演，并且拿到牛客礼品，请你试着想下，哪个小朋友会得到这份礼品呢？
function LastRemaining_Solution(n, m) {
  if (n === 0 || m === 0) return -1;
  const child = [];
  let del = 0;
  for (let i = 0; i < n; i++) {
    child[i] = i;
  }
  while (child.length > 1) {
    const k = m - 1;
    del = (del + k) % child.length;
    child.splice(del, 1);
  }
  return child[0];
}

module.exports = {
    LastRemaining_Solution : LastRemaining_Solution
};
//================================================================
22.从上往下打印出二叉树的每个节点，同层节点从左至右打印。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root){
  if (!root) {
      return [];
  }
  var queue = [];
  queue.push(root);
  var result = [];
  while (queue.length) {
      var temp = queue.shift();
      result.push(temp.val);
      if (temp.left) {
          queue.push(temp.left);
      }
      if (temp.right) {
          queue.push(temp.right);
      }
  }
  return result;
}
//================================================================
37.统计一个数字在排序数组中出现的次数。
链接：https://www.nowcoder.com/discuss/49349
function GetNumberOfK(data, k){
    return data.reduce(function(count, a){
        return a === k ? count+1 :count;
    }, 0);
}

//================================================================
https://github.com/sisterAn/JavaScript-Algorithms
连续子数组的最大和
function FindGreatestSumOfSubArray(array) {
    // write code here
    var currsum=array[0];
    var maxsum=currsum;
    for(var i=1;i<array.length;i++){
        if(currsum<0){
            currsum=array[i]
        }else{
            currsum+=array[i]
        }
        if(currsum>maxsum){
            maxsum=currsum;
        }
    }
    return maxsum;
}

//================================================================
变态跳台阶
题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number) {
    // write code here
    var i=1;
    while(--number){
        i*=2
    }
    return i;
}

function jumpFloorII(number) {
  return Math.pow(2,number-1);
}

function jumpFloorII(number) {
  return 2 ** (number -1)
}

//================================================================
求1+2+3+…+n
题目描述
求1+2+3+…+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

递归
function Sum_Solution(n){
    // write code here
  n&&Sum_Solution(n-1)+n
}
————————————————
版权声明：本文为CSDN博主「Damp_XUN」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Damp_XUN/article/details/99193788
//================================================================
链表中环的入口节点
function EntryNodeOfLoop(pHead) {
    // write code here
    let fast=pHead;
    let slow=pHead;
    while(fast!=null&&fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(fast==slow){
            let p=pHead;
            while(p!=slow){
                p=p.next;
                slow=slow.next;
            }
            return p;
        }
    }
    return null;
}
//================================================================
和为S的连续正整数序列 xxxxxxx-------------------------------------------
https://juejin.cn/post/7026672593285414948

15、不同路径（动态规划）
var uniquePaths = function (m,n){
  //在数组里面使用for循环 里面放空数组 就变成二维数组
  const memo = [];
  for(let i = 0;i<n;i++){
      memo.push([]);
  }
  //第一行路径都是1  只有一条路径
  for(let row = 0; row <n; row ++){
      memo[row][0] = 1;
  }
  // 这个是第一列
  for (let col = 0; col<m; col ++){
      memo[0][col] = 1;
  }
  // 这个才是正式开始算后面格子的路径
  // 两层循环就是行列二维数组 
  for (let row = 1; row <n; row ++){
      for (let col = 1; col <m ;col++){
          // 最终路径等于他上面的格子的路径加左面格子的路径
          memo[row][col]= memo[row-1][col]+memo[row][col-1];
      }
  }
  return  memo[n-1][m-1]; //最后终点的值是n-1，m-1  所以返回这
}

//================================================================
数组最后位加一
var plusOne = function (digits){
  //逆序遍历
  for (let i=digits.lenght -1;i>=0;i--){
      //如果不是9 直接最后一位++ 返回结果即可
      if(digits[i] !==9){
          digits[i]++;
          return digits;
      }else{
          digits[i]= 0;//变成0之后后面不用处理 能直接跳转到前一位加一 实现进位
      }
  }
  // 如果全是9的时候 需要多加一位
  //这里不需要单独去判断了 因为上面的if判断中，如果全是9 就会循环之后跳出for循环
  const result = [1,...digits];//创建一个新的数组 第一位是1  后面全是0 
  //[1].concat(digits) 也可以使用ES5的写法
  return result;
}

//================================================================
JZ17 打印从1到最大的n位数

描述
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
1. 用返回一个整数列表来代替打印
2. n 为正整数
示例1
输入：
1
复制
返回值：
[1,2,3,4,5,6,7,8,9]

function printNumbers( n ) {
   // write code here
  let max = 1;
  let arr = []
  for(let i=0;i<n;i++) {
      max = max*10
  }
  for(let i = 1;i<max;i++) {
    arr.push(i)
  }
  return arr
}
module.exports = {
  printNumbers : printNumbers
};

//================================================================
JZ18 删除链表的节点
function deleteNode( head ,  val ) {
  if(head.val === val) {
    return head.next
  }
  let cur = head;
  while(cur.next) {
    if(cur.next.val === val) {
        cur.next = cur.next.next;
        return head;
    }
    cur = cur.next
  }
  return head
  // write code here
}
module.exports = {
  deleteNode : deleteNode
};
//================================================================
JZ30 包含min函数的栈
var stack = [];
function push(node){
    stack.push(node);
}
function pop(){
    return stack.pop();
}
function top(){
    return stack[stack.length - 1];
}
function min(){
    return Math.min(...stack);
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};

JZ31 栈的压入、弹出序列
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺
序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
1.0<=pushV.length == popV.length <=1000
2.-1000<=pushV[i]<=1000
3.popV 的所有数字均在 pushV里面出现过
4.pushV 的所有数字均不相同
示例1
输入：
[1,2,3,4,5],[4,5,3,2,1]
返回值：
true
说明：
可以通过push(1)=>push(2)=>push(3)=>push(4)=>pop()=>push(5)=>pop()=>pop()=>pop()=>pop()
这样的顺序得到[4,5,3,2,1]这个序列，返回true
function IsPopOrder(pushV, popV) {
    // write code here
  var stack = [];
  var j=0;//索引
  for (let cur of pushV) {
      stack.push(cur); //存
      while (stack[stack.length - 1] === popV[j] && stack.length > 0) { //匹配弹出
          stack.pop();
          j++;
      }
  }
  return !stack.length;
}
module.exports = {
  IsPopOrder : IsPopOrder
};

//================================================
JZ35 复杂链表的复制
示例:
输入:{1,2,3,4,5,3,5,#,2,#}
输出:{1,2,3,4,5,3,5,#,2,#}
function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead)
{
  // write code here
  if (!pHead) {
    return null;
  }
  // 复制头结点
  var node = new RandomListNode(pHead.label);
  node.random = pHead.random;
  // 递归其他节点
  node.next = Clone(pHead.next);
  return node;
}
module.exports = {
  Clone : Clone
};
//======== ==============================
数组中只出现一次的数字
一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
function FindNumsAppearOnce(array)
{
    var res=[]
    for(var i=0;i<array.length;i++){
        if(array.lastIndexOf(array[i])==array.indexOf(array[i])){
            res.push(array[i])
        }
        if(res.length==2){
            return res
        }
    }
}
————————————————
原文链接：https://blog.csdn.net/violet_seven/article/details/107042191

47、孩子们的游戏（圆圈中最后剩下的数）
// 2
function LastRemaining_Solution(n, m)
{
    if(n <= 0 || n <= 0) return -1;
    var result = 0;//最后一轮只剩一个人，他最后的编号肯定是0
    for(var i=2;i<=n;i++){
       result = (result + m) % i; //一轮一轮往上还原
    }
    return result;
}
———————————————
版权声明：本文为CSDN博主「violet_seven」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/violet_seven/article/details/107042191  