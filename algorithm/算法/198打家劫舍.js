var rob = (nums) => {
  if(nums.length === 0) {
    return 0;
  }
  const dp = [0, nums[0]];
  for(let i=2; i<= nums.length; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i-1], dp[i - 1]);
  }

  return dp[dp.length -1]
}


var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let result = 0;
  const memo = [];
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }

  return memo[nums.length - 1];
};

// palouti
var climbStairs = (n) => {
  if(n < 2) return 1;
  let dp0 = 1;
  let dp1 = 2;
  for(let i=2; i<= n; i+=1) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n-1]
}


NC19 子数组的最大累加和问题
*/
function maxsumofSubarray( arr ) {
    // write code here
    let pre = 0, maxAns = arr[0];
    arr.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

module.exports = {
    maxsumofSubarray : maxsumofSubarray
};
https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/lian-xu-zi-shu-zu-de-zui-da-he-by-leetco-tiui/


买卖股票
var maxProfit = (prices) => {
  let profit = 0;
  for(let i = 1; i< prices.length; i++) {
    if(prices[i] > prices[i-1]) {
      profit = prices[i] - prices[i-1]
    }
  }
  return profit; 
} 