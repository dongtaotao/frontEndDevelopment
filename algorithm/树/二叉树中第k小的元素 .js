二叉搜索树中第K小的元素
既然是二叉搜索树的话，不难想到二叉搜索树的中序遍历结果就是递增的。再次基础上我们只需要创建一个数组存储中序遍历结果，
最后返回第k个元素即可。 空间复杂度 O（N）
var kthSmallest = function(root, k) {
    const arr = [] 
    const dfs = (root) => {
        if(!root) return  // 递归终止条件
        dfs(root.left) // 中序遍历
        arr.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return arr[k-1]
 }; 

 https://juejin.cn/post/7077955225306267685   
 