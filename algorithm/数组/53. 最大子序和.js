给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var maxSubArray = function (nums) {
  let sum = max = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (sum > 0) {
          //如果之前的的和大于0，那么可以继续累加
          sum += nums[i];
      } else {
          //否则的话之前是负数，加了只会更小，不如从新的开始
          sum = nums[i];
      }
      max = Math.max(max, sum);
  }
  return max;
}
https://leetcode-cn.com/problems/maximum-subarray/

var a = function(nums) {
    let sum = max = nums[0];
    for(let i = 0;i<nums.length;i++) {
        if(sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        max = Math.max(sum, max)
    }

    return max
}