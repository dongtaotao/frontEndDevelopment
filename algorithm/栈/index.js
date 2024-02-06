JS刷题之路-栈
https://juejin.cn/post/6906316759465197581

一、20.有效的括号
https://juejin.cn/post/6906316759465197581

JavaScript算法基础及面试总结（1w1字）
https://juejin.cn/post/7023208826472005668#heading-79


二、946. 验证栈序列
给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，
返回 true；否则，返回 false 。
示例 1：
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true


解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
/**题解：
 * stack      popped
 * 1          4
 * 12         4 
 * 123        4
 * 1234       4   相等弹出 popped下标++    
 *   123      5
 * 1235       5   相等弹出 popped下标++
 *   123      3
 *   12       2
 *   1        1
 * 栈空
 */
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
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

三、921.使括号有效的最少添加
示例 1：
输入："())"
输出：1
示例 2：
输入："((("
输出：3
示例 4：
输入："()))(("
输出：4
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    let stack = [];
    for(let cur of S){
        if( cur === ')' && stack[stack.length-1] === '(' ){//当前值为右括号且栈顶为左括号则弹出
            stack.pop();
        }else{
            stack.push(cur);//否则加入
        }
    }
    return stack.length;
};

使用栈实现阶乘的递归
使用栈来模拟5！的过程，首先将数字5到1压入栈，然后使用一个循环将数字挨个弹出并连乘 代码实现：
function fact(num) {
        var stack=new Stack;
        while(num>0){
            stack.push(num--);
    }
    var sum=1;
        while(stack.length>0){
            sum*=stack.pop;
        }
    return sum;
}
console.log(fact(5)) //120

1.3.6 合法括号
下面的字符串中包含小括号，请编写一个函数判断字符串中的括号是否合法，所谓合法，就是括号成对出现
sdf(ds(ew(we)re)rwqw)qwrwq		合法
(sd(qwqe)sd(sd))		合法
()()sd()(sd()dw))(		不合法


function is_leagl_brackets(string){
    var stack = new Stack();
    for (var i = 0;i<string.length;i++) {
        var item = string[i];
        // 遇到做括号入栈
        if(item == '('){
            stack.push(item)
        }else if (item == ')'){
        // 遇到右括号，判断栈是否为空
            if(stack.isEmpty()){
                return false
            }else {
                stack.pop() // 弹出左括号
            }
        }
    }
    //  如果栈为空，说明字符串括号合法
    return stack.isEmpty()
}
console.log(is_leagl_brackets('sdf(ds(ew(we)re)rwqw)qwrwq')) // true
console.log(is_leagl_brackets('(sd(qwqe)sd(sd))')) // true
console.log(is_leagl_brackets('()()sd()(sd()dw))(')) // false
链接：https://juejin.cn/post/7017693789942726670

栈的总结
栈是一个后进先出的数据结构
JavaScript中没有栈，但可以用Array的所有功能。 
栈常用的操作：push(进栈)、pop出栈、stack[stack.length-1]   