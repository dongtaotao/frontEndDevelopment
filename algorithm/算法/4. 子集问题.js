题目链接：78. 子集 - 力扣（LeetCode） (leetcode-cn.com)

思路:

要求：1、所有子集；2、没有重复元素
有出路、有死路。
考虑使用回溯算法。
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
解题步骤： 

用递归模拟出所有情况
保证接的数字都是后面的数字。
收集所有到达递归终点的情况，并返回。

var subsets = function(nums) {
    const res =[]
    const backtrack = (path,l,start) =>{
        if(path.length === l){
            res.push(path)
            return;
        } 
        for(let i = start;i<nums.length;i++){
            backtrack(path.concat(nums[i]),l,i+1)
        }
    };
    for(let i =0;i<=nums.length;i++){
        backtrack([],i,0)
    } 
    return res
};
复制代码


作者：kang
链接：https://juejin.cn/post/7023208826472005668
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 