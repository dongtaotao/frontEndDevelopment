给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
示例:
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
复制代码解释:

滑动窗口的位置                最大值
[1  3  -1] -3  5  3  6  7       3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

作者：前端瓶子君
链接：https://juejin.im/post/6844904149541191693
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var maxSlidingWindow = function (nums, k) {
  let result = [];
  for (let i = 0; i <= nums.length - k; i++) {
      let item = Math.max(...nums.slice(i, k + i))
      result.push(item);
  }
  return result;   
}; 