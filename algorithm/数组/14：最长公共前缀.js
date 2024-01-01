14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
var longestCommonPrefix = function(strs) {
  let re = '';
  if(!strs.length) return re;

  for(let i=0; i< strs[0].length; i++) {
      for(let j=1; j< strs.length; j++) {
          if(strs[0][i] !== strs[j][i]) {
            return re
          }
      }
      re += strs[0][i];
  }
  return re 
};  

最长公共前缀
// 解题思路
// 取出数组的第一个字符串依次和剩余的字符串去比较。
//https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-caoyq0521/
var longestCommonPrefix = function(strs) {
  if(!strs.length) {
    return '';
  }

  let [a, ...b] = strs;
  let result = '';
  for(let i=0;i< a.length;i++) {
    let flag = b.every(item => item[i] === a[i]);
    if(flag) {
      result+= a[i]
    } else {
      break;
    }
  }
  return result; 
} 