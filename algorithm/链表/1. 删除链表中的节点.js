var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

//两数之和
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i< nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;
    if(map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i) 
    }
  }
}
 
//两个数组的交集
var intersection = function(nums1, nums2) {
  const map = new Map();
  nums1.forEach(n => {
    map.set(n, true)
  })
 
  const res = [];
  nums2.forEach(n => {
    if(map.get(n)) {
      res.push(n); 
      map.delete(n)
    }
  })

  return res;   
}