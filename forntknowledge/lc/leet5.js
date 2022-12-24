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