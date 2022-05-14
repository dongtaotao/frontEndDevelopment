全排列

用递归模拟出所有的情况。
遇到包含重复元素的情况，就回溯
收集所有到达递归终点的情况，就返回


题目链接：46. 全排列 - 力扣（LeetCode） (leetcode-cn.com)

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

思路：

要求：1、所有排列情况 2、没有重复元素
有出路、有死路
考虑回溯算法

解题步骤：

有递归模拟所有的情况。
遇到包含重复元素的情况，就回溯。
收集所有到达递归的情况，并返回

作者：kang
链接：https://juejin.cn/post/7023208826472005668
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var permute = function(nums) {
  const res = [];
  const backtrack = (path) =>{ //返回函数
      if(path.length === nums.length){ // 长度相等就返回
          res.push(path);
          return;
      }
      nums.forEach(n => {
          if(path.includes(n)){ // 不能包含一模一样的数字
              return;
          }
          backtrack(path.concat(n));
      })
  }
  backtrack([])
  return res;
};
// 时间复杂度O(n!) 空间复杂度O(n)s

