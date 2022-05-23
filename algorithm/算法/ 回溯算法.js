
 回溯算法
 https://juejin.cn/post/6900507534676164622
 https://juejin.cn/post/6903152293114281997

 46 - 全排列
 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:
输入: [1, 2, 3]
输出:
[
  [1,2,3],[1,3,2],[2,1,3],
  [2,3,1],[3,1,2],[3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
var permute = function (nums) {
    const ret = []
    const _helper = (arr) => {
      if (arr.length === nums.length) {
        ret.push([...arr])
        return
      }
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i])
        _helper(arr)
        arr.pop()
      }
    }
    _helper([])
    return ret
  };

  78 - 子集
  给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
  输入: nums = [1,2,3]
  输出:
  [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
  ]

  var subsets = function (nums) {
    const ret = []
    const _helper = (start, arr) => {
      ret.push([...arr]) // 没有任何限制，每个节点都是子集
      for (let i = start; i < nums.length; i++) {
        arr.push(nums[i])
        _helper(i + 1, arr) // i + 1每次后移，之后的递归不访问更小的节点值
        arr.pop()
      }
    }
    _helper(0, [])
    return ret
  }; 
  
  
  来源：力扣（LeetCode） 
  链接：https://leetcode-cn.com/problems/subsets
  
  作者：飞跃疯人院
  链接：https://juejin.cn/post/6903152293114281997
  来源：稀土掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


回溯算法伪代码模板 https://juejin.cn/post/6954707861452619813
const function backtracking(参数){
    if(终止条件){
        存放结果；
        return ;
     }
     for(选择：本层集合中元素（树种节点孩子的数量就是集合大小）){
         处理节点；
         backtracking(路径，选择列表)；//递归
         回溯，撤销处理结果
     }
}
