不懂动态规划？21道 LeetCode题目带你学会动态规划！
https://juejin.cn/post/7000909761336049671

2w字 | 28道 LeetCode 题目带你看看链表的那些套路
https://juejin.cn/post/6943787446505046046

3.5w字 | 47道 LeetCode 题目带你看看二叉树的那些套路（上）
https://juejin.cn/post/6943091553250312229

3.5w字 | 47道 LeetCode 题目带你看看二叉树的那些套路（下）
https://juejin.cn/post/6943092291561062436

你会动态规划吗？
https://juejin.cn/post/6917773373141417992


const climbStairs = function(n) {
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[1] = 1;
  f[2] = 2;
  // 动态更新每一层楼梯对应的结果
  for(let i = 3;i <= n;i++){
      f[i] = f[i-2] + f[i-1];
  }
  // 返回目标值
  return f[n];
};

2. LeetCode 路径问题

 var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for(let i = 0; i < m; i++){
      dp[i][0] = 1
  }
  for(let j = 0; j < n; j++){
      dp[0][j] = 1
  }

  for(let i = 1; i < m; i++){ 
      for(let j = 1; j < n; j++){
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
  }
  return dp[m - 1][n - 1]
};

作者：CUGGZ
链接：https://juejin.cn/post/7000909761336049671

const uniquePaths = function (m, n) {
    if (m === 1 || n === 1) {
      return 1;
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  };
  

2. 打家劫舍（LeetCode 198
var rob = function(nums) {
    if(nums.length === 0) return 0;
    const dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i=2; i<nums.length;i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }

    return dp[nums.length -1]
}


var rob = function(nums) {
    if(nums.length === 0) return 0
    const dp = [0,nums[0]];
    for(let i =2;i<=nums.length;i++){
        dp[i] = Math.max(dp[i-2] + nums[i - 1],dp[i - 1])
    }
    return dp[dp.length - 1]
};


leetcode 875. 爱吃香蕉的珂珂    