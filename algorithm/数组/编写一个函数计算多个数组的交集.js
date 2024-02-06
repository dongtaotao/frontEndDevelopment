在原先两个数组求交集的基础上使用reduce

function intersect(nums1,nums2){
  return [...new Set(nums1.filter((item)=>nums2.includes(item)))]
}
function intersectAll(...arrs){
  return resultArr = arrs.reduce(function(prev,cur){
    return intersect(prev,cur);
  })
}
合并之后就是

function getIntersect(...arrs) {
  return arrs.reduce(function(prev,cur){
    return [...new Set(cur.filter((item)=>prev.includes(item)))]
  })
}

var intersection = function(...args) {
  if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  return [...new Set(args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  }))] 
};   
