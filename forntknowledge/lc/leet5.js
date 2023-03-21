三数之和 https://juejin.cn/post/7153266355838386189
var threeSum = function(nums) {
    for(let i=0;i<nums.length;i++){
        let currt = nums[i];
        for(let j=i+1;j<nums.length;j++){
            for(let l=j+1;j<nums.length;l++){
                let sum=nums[j]+nums[l];
            }
        }
        if(currt+sum===0){
            return [nums[i],nums[j],nums[l]]
        }else{
            return false;
        }
    }
};

力扣 (LeetCode) LeetCode HOT 100
https://juejin.cn/post/7140176848285073438

力扣 (LeetCode) 字节校园 算法与数据结构
https://juejin.cn/post/7142493275084029960

力扣 (LeetCode) 腾讯精选练习 50 题
https://juejin.cn/post/7138059660388466724

字节跳动前端面试必备-LeetCode经典面试算法题
https://juejin.cn/post/6844903971270688781

LeetCode 算法题刷题心得（JavaScript）
https://juejin.cn/post/6844903604038402056 