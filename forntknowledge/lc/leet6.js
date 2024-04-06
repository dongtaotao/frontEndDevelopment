阿里大佬一周讲透LeetCode前端算法100题丨手写代码丨前端程序员必学的数据结构与算法（附刷题笔记，代码解析） 
https://www.bilibili.com/video/BV1Xw411H79H/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

前端算法 + 前端数据结构 【力扣考题】 
https://www.bilibili.com/video/BV1Jd4y1i7mc/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


【前端算法突击】，一周快速掌握中大厂99%面试题--LeetCode真题解析 
https://www.bilibili.com/video/BV1SG411i77b/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


最长连续递增序列
var findLengthOfLCIS = function(nums) {
  if(nums.length === 0) return 0
  let max = 0
  const maxArr = []
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < nums[i + 1]){
      max += 1
    } else {
      maxArr.push(max + 1)
      max = 0
    }
  }
  return Math.max(...maxArr)
};

相交链表
var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null){
      return null
  }
  let pA = headA, pB = headB
  while(pA !== pB){
      pA = pA === null ? headB : pA.next
      pB = pB === null ? headA : pB.next
  }
  return pA
} 