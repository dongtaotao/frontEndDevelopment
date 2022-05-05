11. 盛最多水的容器
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
const maxArea = function(height) {
  let max = 0 // 最大容纳水量
  for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
          // 当前容纳水量
          let cur = (j - i) * Math.min(height[i], height[j])
          if (cur > max) {
              max = cur
          }
      }
  }
  return max
}

function maxArea(height: number[]): number {
  // 创建左指针l，右指针r，面积res
  let l = 0, r = height.length - 1, res = 0
  // 当左指针比右指针小的时候，移动指针。当左指针右指针移动至相同位置时，双指针遍历结束。
  while (l < r){
      // 如果左垂直线 小于右垂直线
      if(height[l] < height[r]) {
          // 比对 原有的面积 res 和 最短垂直线 * 两根垂直线的距离 = 新长方体的面积
          res = Math.max(res,  (r - l) * height[l])
          // 移动指在短的左垂直线指针，以便下一次对比面积。
          l++
       }
      else {
          // 相同逻辑，当左垂直线 大于 右垂直线，那就以右垂直线为宽来计算面积比对。
          res = Math.max(res,  (r - l) * height[r])
          r--
      }
  }
  return res
};

var maxArea = function(height) {
  let max = 0
  let i = 0 , j = height.length - 1
  while(i<j){
      let curRes = Math.min(height[i],height[j])*(j-i)
      max = curRes > max ? curRes : max
      if(height[i]<height[j]){
          i++
      }else{
          j--
      }
  }
  return max
};

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let res = 0
  let i = 0
  let j = height.length - 1
  while(i < j){
      res = Math.max(res,Math.min(height[i],height[j]) * (j - i))
      if(height[i] < height[j]){
          i++
      }else{
          j--
      }
  }
  return res
};

// 二分法
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    // height是线高度数组
    // 定义两个指针
    let left = 0;
    let right = height.length - 1;
    // 定义结果
    let res = 0;
    while (left < right) {
       // 定义每次获取到的面积
      let result;
      if (height[left] < height[right]) {
        // 如果左侧的线小于右侧的线，那么面积为：左侧的线*两条线的距离，左侧的线右移，找更高的线
        result=height[left] * (right - left);
        left++;
      } else {
        // 如果右侧的线小于等于左侧的线，那么面积为：右侧的线*两条线的距离，右侧的线左移动，找更高的线
        result=height[right] * (right - left);
        right--;
      }
      res=res>result?res:result;
    }
    return res;
  };
  

const maxArea = function(height) {
  let max = 0 // 最大容纳水量
  let left = 0 // 左指针
  let right = height.length - 1 // 右指针
  
  while (left < right) {
      // 当前容纳水量
      let cur = (right - left) * Math.min(height[left], height[right]);
      max = Math.max(cur, max)
      height[left] < height[right] ? left ++ : right --
  }

  return max
};

作者：童欧巴
链接：https://juejin.cn/post/6937526265201033230
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

05 加一
const plusOne = function (digits) {
  for(let i= digits.length -1; i>= 0 ;i--) {
    if(digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits
    }
  }

  return [1, ...digits]
}

06 移动零
在此基础上附加了两个条件：
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
链接：https://leetcode-cn.com/problems/move-zeroes

我们可以借助双指针来进行求解，求解过程如下：

初始化双指针 i 、j 指向数组头部索引 0。
将 i 指针不断向右移动，j 指针负责提供交换的位置，当遇到非 0 数字时，将两个指针位置的数字交换，同时继续向右边移动两个指针。这样交换可以保证题目要求的非 0 数字相对顺序不变。
当遇到 0 时，向右移动 i 指针，j 指针不动。
循环完成时即可将所有的 0 移动到数组的末尾。

作者：童欧巴
链接：https://juejin.cn/post/6937526265201033230
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
const moveZeroes = function (nums) {
  let i = 0, j = 0;
  while (i < nums.length) {
      if (nums[i] != 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          i++;
          j++;
      } else {
          i++;
      }
  }
}

16.11.跳水板
你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。
你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
返回的长度需要从小到大排列。
示例 1
输入：
shorter = 1
longer = 2
k = 3
输出： [3,4,5,6]
解释：
可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。
var divingBoard = function (shorter, longer, k) {
  /**
   * k=3     res
   * 1 1 1   0     1*3 + 2*0    3
   * 1 1 2   1     1*2 + 2*1    4
   * 1 2 2   2     1*1 + 2*2    5
   * 2 2 2   4     1*0 + 2*3    6
   */
  let res = [];
  if (shorter === longer && k) {
      res[0] = k * shorter;
  } else if (k) {
      for (let i = 0; i <= k; i++) {
          res[i] = shorter * (k - i) + longer * i;
      }
  }
  return res;
};

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diving-board-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


前端JS算法之素数
在看代码之前，我们先梳理一下逻辑，什么是素数，百度百科上写到，素数又称质数，质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。那我们可以理解为只能被1和它本身整除的数就是素数。
逻辑步骤：
1、整除余数肯定为0。
2、JS里面有求余符号 %，我们可以判断余数是否为0。
3、一个质数只能被1和它本身整除2次，也就是余数为0的次数只能是2次
4、使用for循环，对这个整数从1和它本身之间的整数（包括1和它本身）求余。
5、声明一个变量num，记录余数为0的次数
6、根据步骤3，判断num(余数为0的次数)是否大于2，如果大于2，则说明这个整数不是质数，反之，这个数就是质数。因为质数只能被1和它本身整除，也就是余数为0的次数只能2次。

作者：Memories
链接：https://juejin.cn/post/6901200044691554312
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

function primeNum(val) {
  let n = val && parseInt(val);
  // 声明变量，记录余数为0的次数
  let num = 0;
  // for循环 i初始值从1开始
  for(let i = 1; i <= n; i++) {
    // 求余，并判断余数是否等于 0 ，如果等于 0 ，则 num 加 1
      if(n % i == 0) {
          num++ 
      }
  }
  // 判断 num 是否大于2，大于 2 是合数，否则就是质数
  if(num > 2) {
      console.log(n + ' 是合数')
  } else {
      console.log(n + ' 是质数')
  }
}
primeNum(7) // 7 是质数

function primeNum(nub) {
  let n = parseInt(nub);
  // 声明变量num，初始值为true
  let isPrime = true;
  /* 
    for循环里面的 i 变量初始值从2开始，去掉了可以整除的 1，把等号删掉，
    可以去除它本身
  */
  for(let i = 2; i < n; i++) {
      if(n % i == 0) {
        /*
                走到这里，说明这个整数除了1和他本身之外，还可以被其他数整除，
                isPrime变为false，同时终止循环
  */ 
          isPrime = false;
          break;
      }
  }
  if(!isPrime) {
      console.log(n + ' 是合数')
  } else {
      console.log(n + ' 是质数')
  }
}
primeNum(7)


//========深度优先遍历（DFS）
div=>ul=>li=>a=>img=>li=>span=>li=>p=>button
 //将dom 抽象成树
 var dom = {
  tag: 'div',
  children: [
      {
          tag: 'ul',
          children: [
              {
                  tag: 'li',
                  children: [
                      {
                          tag: 'a',
                          children: [
                              {
                                  tag: 'img'
                              }
                          ]
                      }

                  ]
              },
              {
                  tag: 'li',
                  children: [
                      {
                          tag: 'span'
                      }
                  ]
              },
              {
                  tag: 'li'
              }
          ]
      },
      {
          tag: 'p'
      },
      {
          tag: 'button'
      }
  ]
}
var nodeList = []
//深度优先遍历算法
function DFS(node, nodeList) {
  if (node) {
      nodeList.push(node.tag);
      var children = node.children;
      if (children) {
          for (var i = 0; i < children.length; i++) {
              //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
              DFS(children[i], nodeList);
          }
      }
  }
  return nodeList;
}
DFS(dom, nodeList)
console.log(nodeList)


广度优先遍历（BFS）
div=>ul=>p=>button=>li=>li=>li=>a=>span=>img
function BFS(node, nodeList) {
  //由于是广度优先，for循环不是很优雅，我们可以使用队列来解决
  if (node) {
      var q = [node]
      while (q.length > 0) {
          var item = q.shift()
          nodeList.push(item.tag)
          if (item.children) {
              item.children.forEach(e => {
                  q.push(e)
              })
          }

      }
  }
}
BFS(dom, nodeList)
console.log(nodeList)``

946. 验证栈序列  https://juejin.cn/post/6906316759465197581
给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 
pop 操作序列的结果时，返回 true；否则，返回 false 。

示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
var validateStackSequences = function (pushed, popped) {
    var stack = [];
    var j=0;//索引
    for (let cur of pushed) {
        stack.push(cur); //存
        while (stack[stack.length - 1] === popped[j] && stack.length > 0) { //匹配弹出
            stack.pop();
            j++;
        }
    }
    return !stack.length;
};
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/validate-stack-sequences

921.使括号有效的最少添加
题目描述
给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。
从形式上讲，只有满足下面几点之一，括号字符串才是有效的：
它是一个空字符串，或者
它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
它可以被写作 (A)，其中 A 是有效字符串。
给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。
示例 1：
输入："())"
输出：1
复制代码
示例 2：
输入："((("
输出：3
复制代码
示例 3：
输入："()"
输出：0
复制代码
示例 4：
输入："()))(("
输出：4
复制代码
提示：
S.length <= 1000
S 只包含 '(' 和 ')' 字符。
复制代码
解题思路
分析示例4 ：    输入："()))(("      输出：4
第一个左括号匹配到第一个右括号
接下来的两个没办法匹配到左括号（栈为空）于是加入栈中（虽然说它也没机会被匹配到了）
接下来遇到两个左括号同样的道理加入栈中。
可以用很多方法来存括号，但是用栈做更方便，这里用栈来做，匹配弹出，剩下不匹配的长度就是我们要加的括号
代码如下（示例）：
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    let stack = [];
    for(let cur of S){
        if(cur === ')' && stack[stack.length-1] === '('){//当前值为右括号且栈顶为左括号则弹出
            stack.pop();
        }else{
            stack.push(cur);//否则加入
        }
    }
    return stack.length;
};

作者：HearLing
链接：https://juejin.cn/post/6906316759465197581
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


验证回文字符串II https://juejin.cn/post/7060868433285480478
/**
 * @param {string}
 * @return {boolean}
 */
 var isPalindrome = function (s) {
    // 我们先对字符串进行一下处理，只留下字母和数字
    return s === s.split("").reverse().join("");
  };
  
  var validPalindrome = function (s) {
    if (isPalindrome(s)) {
      return true;
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
      // 记住我们只能删除一个字符
        return (
          isPalindrome(s.substring(left + 1, right)) ||
          isPalindrome(s.substring(left, right-1))
        );
      } else {
        left++;
        right--;
      }
    }
  };
  
  //验证回文字符串 这里单独提出来 后面用到
var validPalindrome = function(s){
  function isPalindrome(left,right){
      while(left<right){
          if(s[left] !== s[right]){
              return false;
          }
          left++;
          right--;
      }
      return true;
  }
  let left = 0,right = s.length-1;
  while(left<right){
      //如果两者不相等的情况 看一下是不是下面这两种情况
      if(s[left] !== s[right]){
          const result = isPalindrome(left+1,right) || isPalindrome(left ,right-1)
          return result;

      }
      left ++;
      right --;
  }
  return true;
}
